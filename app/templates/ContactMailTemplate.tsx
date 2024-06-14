import { Html, Heading, Text } from '@react-email/components'
const ContactEmailTemplate = ({
  name,
  email,
  message,
}: {
  name: string
  email: string
  message: string
}) => {
  return (
    <Html lang='en'>
      <Heading as='h1'>Nuevo mensaje recibido de la web!</Heading>
      <Text>Nombre: {name}</Text>
      <Text>Correo: {email}</Text>
      <Text>Mensaje: {message}</Text>
    </Html>
  )
}

export default ContactEmailTemplate
