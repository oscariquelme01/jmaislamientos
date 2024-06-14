'use client'

import React, { FormEvent, useState } from 'react'
import Input from './input'
import TextArea from './textArea'

function validateEmail(mail: string) {
  const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return mailRegex.test(mail)
}

function contact() {
  const [nameHasErrors, setNameHasErrors] = useState(false)
  const [mailHasErrors, setMailHasErrors] = useState(false)
  const [messageHasErrors, setMessageHasErrors] = useState(false)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const name = document.getElementById('name')?.value
    const mail = document.getElementById('mail')?.value
    const message = document.getElementById('message')?.value

    let formHasErrors = false

    if (!validateEmail(mail)) {
      formHasErrors = true
      setMailHasErrors(true)
    }

    if (!name) {
      formHasErrors = true
      setNameHasErrors(true)
    }

    if (!message) {
      formHasErrors = true
      setMessageHasErrors(true)
    }

    if (formHasErrors) return

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name, mail, message }),
    })

    console.log(await response.json())
  }

  return (
    <div className='mt-4 flex w-full flex-col items-center justify-center'>
      <h3 id='contactFormHeader' className='my-8 text-4xl font-bold'>¡Contáctanos!</h3>

      <form className='flex w-3/5 flex-col gap-2 xl:w-2/5' onSubmit={onSubmit}>
        <Input
          id={'name'}
          hasError={nameHasErrors}
          hasErrorHint='El nombre no puede estar vacio'
          label='Nombre'
          type='outline'
        />
        <Input
          id={'mail'}
          label='Correo'
          hasError={mailHasErrors}
          hasErrorHint='Direccion de correo invalida'
          type='outline'
        />
        <TextArea
          id={'message'}
          hasError={messageHasErrors}
          hasErrorHint='El mensaje no puede estar vacio'
          label='Mensaje'
          type='outline'
        />
        <button type='submit' className='bg-sky-600 hover:bg-sky-500 font-bold text-white rounded-lg p-2'>Enviar mensaje</button>
      </form>
    </div>
  )
}

export default contact
