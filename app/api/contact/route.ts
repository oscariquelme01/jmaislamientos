import { Recipient, EmailParams, MailerSend, Sender } from 'mailersend'
import fs from 'fs'

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    const { name, subject, mail, message } = formData

    if (!name || !subject || !mail || !message) {
      return Response.json({ status: 'error' })
    }

    const mailerSend = new MailerSend({
      apiKey: process.env.MAIL_SENDER_API || '',
    })

    const sentFrom = new Sender('info@trial-z3m5jgrqyooldpyo.mlsender.net', 'JM Aislamientos')
    const recipients = [new Recipient(mail, name)]

    // Read the HTML template file
    const htmlTemplate = fs.readFileSync('/templates/messageSend.html', 'utf8');
    const formattedMessage = htmlTemplate
      .replace('{{name}}', name)

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject(subject)
      .setHtml(formattedMessage)

    console.log(`Sending mail with values ${name} ${subject} ${mail} ${message}`)
    await mailerSend.email.send(emailParams)

  } catch (error) {
    console.log('/api/contact: ', error)
    return Response.json({ status: 'error' })
  }

  return Response.json({ status: 'success' })
}
