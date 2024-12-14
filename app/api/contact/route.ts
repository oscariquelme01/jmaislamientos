import { Resend } from 'resend'
import ContactEmailTemplate from '@/app/templates/ContactMailTemplate'

import sanitizeHtml from 'sanitize-html'

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
    const formData = await request.json()
    const { name, mail, message } = formData

    if (!name || !mail || !message) {
      throw new Error('Missing form data!')
    }

    // Sanitize data cause you never know
    let sanitizedName = sanitizeHtml(name)
    let sanitizedMail = sanitizeEmail(mail)
    let sanitizedMessage = sanitizeHtml(message)

    const resend = new Resend(process.env.RESEND_API)

    const { data, error } = await resend.emails.send({
      from: 'oscariquelmejato@gmail.com',
      to: ['oscariquelmee@gmail.com'],
      subject: 'Hello world',
      react: ContactEmailTemplate({
        name: sanitizedName,
        email: sanitizedMail,
        message: sanitizedMessage,
      }),
    })

    console.log(data, error)
  } catch (error: any) {
    console.error('/api/contact: ', error)
    const errorMessage = error.message || 'Mensaje de error no especificado'
    return Response.json({ status: 'error', message: errorMessage })
  }

  return Response.json({
    status: 'success',
    message: 'Mensaje enviado correctamente',
  })
}
