import { Resend } from 'resend'
import ContactEmailTemplate from '@/app/templates/ContactMailTemplate'
import ContactConfirmationTemplate from '@/app/templates/ContactConfirmationTemplate'
import sanitizeHtml from 'sanitize-html'

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 3
const rateLimits = new Map<string, { requests: number; resetAt: number }>()

const getRateLimit = (request: Request) => {
  const ip =
    request.headers.get('x-real-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown'
  const now = Date.now()

  if (rateLimits.size > 1000) {
    for (const [key, value] of rateLimits) {
      if (value.resetAt <= now) rateLimits.delete(key)
    }
  }

  const current = rateLimits.get(ip)

  if (!current || current.resetAt <= now) {
    rateLimits.set(ip, { requests: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return null
  }

  if (current.requests >= RATE_LIMIT_MAX_REQUESTS) {
    return Math.ceil((current.resetAt - now) / 1000)
  }

  current.requests += 1
  return null
}

// Validate and sanitize email
const sanitizeEmail = (email: string) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailPattern.test(email)) {
    throw new Error('Formato de correo erroneo')
  }
  return email.replace(/[<>"'&]/g, (match: string) => {
    const escape: { [key: string]: string } = {
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '&': '&amp;',
    }
    return escape[match]
  })
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    const from = process.env.CONTACT_EMAIL_FROM
    const to = process.env.CONTACT_EMAIL_TO

    if (!apiKey || !from || !to) {
      console.error('/api/contact: missing email environment variables')
      return Response.json(
        {
          status: 'error',
          message:
            'El formulario de contacto no está configurado correctamente',
        },
        { status: 500 }
      )
    }

    const retryAfter = getRateLimit(request)

    if (retryAfter !== null) {
      return Response.json(
        {
          status: 'error',
          message: 'Demasiados intentos. Inténtalo de nuevo más tarde',
        },
        {
          status: 429,
          headers: { 'Retry-After': retryAfter.toString() },
        }
      )
    }

    const formData = await request.json()
    const { name, mail, message } = formData

    if (
      typeof name !== 'string' ||
      typeof mail !== 'string' ||
      typeof message !== 'string'
    ) {
      return Response.json(
        { status: 'error', message: 'Los datos del formulario no son válidos' },
        { status: 400 }
      )
    }

    const trimmedName = name.trim()
    const trimmedMail = mail.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName || !trimmedMail || !trimmedMessage) {
      return Response.json(
        { status: 'error', message: 'Todos los campos son obligatorios' },
        { status: 400 }
      )
    }

    // Sanitize data cause you never know
    const sanitizedName = sanitizeHtml(trimmedName)
    const sanitizedMail = sanitizeEmail(trimmedMail)
    const sanitizedMessage = sanitizeHtml(trimmedMessage)

    const resend = new Resend(apiKey)

    const { error: contactEmailError } = await resend.emails.send({
      from,
      to: [to],
      reply_to: sanitizedMail,
      subject: 'Nuevo mensaje desde la web de JM Aislamientos',
      react: ContactEmailTemplate({
        name: sanitizedName,
        email: sanitizedMail,
        message: sanitizedMessage,
      }),
    })

    if (contactEmailError) {
      console.error('/api/contact notification email error:', contactEmailError)
      return Response.json(
        {
          status: 'error',
          message: 'No se pudo enviar el mensaje. Inténtalo de nuevo más tarde',
        },
        { status: 502 }
      )
    }

    const { error: confirmationEmailError } = await resend.emails.send({
      from,
      to: [sanitizedMail],
      subject: 'Hemos recibido tu mensaje',
      react: ContactConfirmationTemplate({ name: sanitizedName }),
    })

    if (confirmationEmailError) {
      console.error(
        '/api/contact confirmation email error:',
        confirmationEmailError
      )
      return Response.json(
        {
          status: 'error',
          message: 'No se pudo enviar el mensaje. Inténtalo de nuevo más tarde',
        },
        { status: 502 }
      )
    }
  } catch (error: unknown) {
    console.error('/api/contact: ', error)
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Mensaje de error no especificado'
    return Response.json(
      { status: 'error', message: errorMessage },
      { status: 400 }
    )
  }

  return Response.json({
    status: 'success',
    message: 'Mensaje enviado correctamente',
  })
}
