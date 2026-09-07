'use client'

import React, { FormEvent, useState } from 'react'
import Input from './input'
import TextArea from './textArea'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/20/solid'

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
  const [isSending, setIsSending] = useState(false)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const nameElement = document.getElementById('name') as HTMLInputElement
    const mailElement = document.getElementById('mail') as HTMLInputElement
    const messageElement = document.getElementById('message') as HTMLInputElement

    const name = nameElement.value
    const mail = mailElement.value
    const message = messageElement.value

    setNameHasErrors(false)
    setMailHasErrors(false)
    setMessageHasErrors(false)

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

    setIsSending(true)

    try {
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
    } catch {
      notifyError('No se pudo enviar el mensaje. Inténtalo de nuevo más tarde')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className='w-full bg-gray-50 py-20 lg:py-28'>
      <div className='mx-auto grid max-w-screen-xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8'>
        <div>
          <p className='mb-3 text-sm font-black uppercase tracking-[0.3em] text-sky-700'>
            Contacto
          </p>
          <h3 id='contactFormHeader' className='text-3xl font-black tracking-tight text-gray-950 sm:text-4xl lg:text-5xl'>
            Cuéntanos qué necesitas
          </h3>
          <p className='mt-5 text-lg leading-8 text-gray-500'>
            Si tienes una obra, reforma, vivienda o local en Madrid, escríbenos
            y te responderemos lo antes posible.
          </p>
        </div>

      <form className='flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-xl shadow-gray-200/70 sm:p-8' onSubmit={onSubmit}>
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
        <button
          type='submit'
          disabled={isSending}
          className='rounded-xl bg-sky-600 p-3 font-bold text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:bg-gray-400'
        >
          {isSending ? 'Enviando...' : 'Enviar mensaje'}
        </button>
        <ToastContainer/>
      </form>
      </div>
    </section>
  )
}

export default Contact
