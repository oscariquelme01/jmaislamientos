import { Html, Heading, Text } from '@react-email/components'

const ContactConfirmationTemplate = ({ name }: { name: string }) => {
  return (
    <Html lang='es'>
      <Heading as='h1'>Hemos recibido tu mensaje</Heading>
      <Text>Hola {name},</Text>
      <Text>
        Gracias por contactar con JM Aislamientos y Revestimientos. Hemos
        recibido tu mensaje correctamente y te responderemos lo antes posible.
      </Text>
      <Text>Un saludo,</Text>
      <Text>JM Aislamientos y Revestimientos</Text>
    </Html>
  )
}

export default ContactConfirmationTemplate
