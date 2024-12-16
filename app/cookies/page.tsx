'use client'

import React from 'react'

import { ArrowLeftIcon } from '@heroicons/react/20/solid'

export default function wip() {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center'>
      <ArrowLeftIcon
        className='absolute left-4 top-4 h-8 w-8 hover:cursor-pointer'
        onClick={() => history.back()}
      />
<div className="bg-white text-black p-8 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Política de Cookies</h1>

      <section className="mb-6">
        <p>
          En <strong>www.jmaislamientos.com</strong> no utilizamos cookies para
          recoger información de los usuarios. Sin embargo, en un futuro
          podríamos implementar el uso de cookies para mejorar la experiencia
          de navegación y ofrecer servicios personalizados.
        </p>
        <p>
          Si en algún momento comenzamos a utilizar cookies, este documento será
          actualizado para reflejar:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Qué tipos de cookies utilizamos.</li>
          <li>Con qué propósito.</li>
          <li>Cómo puedes gestionarlas o desactivarlas.</li>
        </ul>
      </section>

      <section>
        <p>
          Por el momento, no se almacena ni procesa información mediante cookies
          en este sitio web.
        </p>
        <p>
          Si tienes alguna duda sobre esta política, puedes contactarnos en{" "}
          <strong>informacion@jmrevestimientos.es</strong>.
        </p>
      </section>
    </div>
    </div>
  )
}
