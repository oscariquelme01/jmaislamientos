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
      <div className='text-2xl font-bold'> POLITICA DE COOKIES </div>
      <div className='m-8 flex w-3/5 max-w-screen-xl flex-col items-center text-lg'>
        <div className='my-4'>
          En www.jmaislamientos.com no utilizamos cookies para recoger
          información de los usuarios. Sin embargo, en un futuro podríamos
          implementar el uso de cookies para mejorar la experiencia de
          navegación y ofrecer servicios personalizados.
        </div>
        <br />
        <br />
        <div>
          <div>Si en algún momento comenzamos a utilizar cookies, este documento será actualizado para reflejar:</div>

          <ul className='ml-8 space-y-2'>
            <li className='flex  items-center rounded-lg'>
              <span className='mr-4 h-2 w-2 flex-shrink-0 rounded-full bg-gray-900'></span>
              <div>Qué tipos de cookies utilizamos.</div>
            </li>

            <li className='flex  items-center rounded-lg'>
              <span className='mr-4 h-2 w-2 flex-shrink-0 rounded-full bg-gray-900'></span>
              <div>Con qué propósito.</div>
            </li>

            <li className='flex items-center rounded-lg'>
              <span className='mr-4 h-2 w-2 flex-shrink-0 rounded-full bg-gray-900'></span>
              <div>Cómo puedes gestionarlas o desactivarlas.</div>
            </li>
          </ul>

        </div>

        <div>
          Por el momento, no se almacena ni procesa información mediante cookies
          en este sitio web. Si tienes alguna duda sobre esta política, puedes
          contactarnos en <span className='text-blue-600'>info@jmrevestimientos.com</span>.
        </div>
      </div>
    </div>
  )
}
