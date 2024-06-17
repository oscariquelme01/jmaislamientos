'use client'

import React, { FormEvent, useState } from 'react'
import Input from './input'
import TextArea from './textArea'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function validateEmail(mail: string) {
  const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return mailRegex.test(mail)
}

const notifyError = (message: string) => toast.error(message, {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  progress: undefined,
  theme: "light",
})

const notifySuccess = (message: string) => toast.success(message, {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  progress: undefined,
  theme: "light",
})

function Contact() {
  const [nameHasErrors, setNameHasErrors] = useState(false)
  const [mailHasErrors, setMailHasErrors] = useState(false)
  const [messageHasErrors, setMessageHasErrors] = useState(false)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const nameElement = document.getElementById('name') as HTMLInputElement
    const mailElement = document.getElementById('mail') as HTMLInputElement
    const messageElement = document.getElementById('message') as HTMLInputElement

    const name = nameElement.value
    const mail = mailElement.value
    const message = messageElement.value

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

    const result = await response.json()
    if (result.status === 'success') {
      notifySuccess(result.message)
      nameElement.value = ''
      mailElement.value = ''
      messageElement.value = ''
    } else {
      notifyError(result.message)
    }
  }

  return (
    <div className='mt-4 flex w-full flex-col items-center justify-center'>
      <h3 id='contactFormHeader' className='my-8 text-4xl font-bold'>¡Contáctanos!</h3>

      <form className='flex w-3/5 flex-col gap-2 xl:w-2/5' onSubmit={onSubmit}>
        {/*
        // @ts-ignore*/}
        <Input
          id={'name'}
          hasError={nameHasErrors}
          hasErrorHint='El nombre no puede estar vacio'
          label='Nombre'
          type='outline'
        />
        {/*
        // @ts-ignore*/}
        <Input
          id={'mail'}
          label='Correo'
          hasError={mailHasErrors}
          hasErrorHint='Direccion de correo invalida'
          type='outline'
        />
        {/*
        // @ts-ignore*/}
        <TextArea
          id={'message'}
          hasError={messageHasErrors}
          hasErrorHint='El mensaje no puede estar vacio'
          label='Mensaje'
          type='outline'
        />
        <button type='submit' className='bg-sky-600 hover:bg-sky-500 font-bold text-white rounded-lg p-2'>Enviar mensaje</button>
        <ToastContainer/>
      </form>
    </div>
  )
}

export default Contact
