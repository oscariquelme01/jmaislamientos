'use client'

import React, { FormEvent, useState } from 'react'

function contact() {
  //TODO: I genuenly think this is trash, I should probably use references but whatever, copied it from some random guy on youtube :(
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [mail, setMail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name, subject, mail, message }),
    })

    console.log(await response.json())
  }

  return (
    <div className='mt-4 flex w-full flex-col items-center justify-center bg-gradient-accent'>
      <h3 className='my-8 text-4xl font-bold text-white'>¡Contáctanos!</h3>

      <form
        onSubmit={onSubmit}
        className='mb-8 grid w-4/5 grid-cols-1 gap-4 md:grid-cols-2 xl:w-3/5 xl:w-3/5 xl:gap-8'
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='row-start-1 bg-white p-2'
          placeholder='Nombre'
        />
        <input
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          className='row-start-2 bg-white p-2'
          placeholder='Correo electrónico'
        />
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className='row-start-3 bg-white p-2'
          placeholder='Asunto'
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='md:row-tart-auto row-start-4 min-h-[140px] bg-white p-2 md:col-start-2 md:row-span-3 md:min-h-fit'
          placeholder='Mensaje...'
        />
        <button
          type='submit'
          className='bg-Transparent row-start-5 border-[1px] border-accentLight py-1 text-center text-xl text-white md:col-span-2 md:row-start-4'
        >
          Sumbit
        </button>
      </form>
    </div>
  )
}

export default contact
