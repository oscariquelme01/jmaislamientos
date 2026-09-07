'use client'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'

function scrollToContact() {
  const offset = document.getElementById('contactFormHeader')?.offsetTop || 0
  window.scrollTo({ top: offset, behavior: 'smooth' })
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='relative z-20 mx-auto max-w-screen-xl px-4 pt-4 sm:px-6 lg:px-8'>
      <div className='relative sm:hidden'>
        <button
          type='button'
          className='inline-flex justify-center rounded-full bg-white/10 px-3 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? (
            <XMarkIcon className='h-8 w-8 text-gray-300' aria-hidden='true' />
          ) : (
            <Bars3Icon className='h-8 w-8 text-gray-300' aria-hidden='true' />
          )}
        </button>

        {isOpen && (
          <div className='absolute left-0 mt-3 w-[calc(100vw-2rem)] rounded-2xl bg-gray-950/95 p-3 shadow-lg ring-1 ring-white/10 backdrop-blur'>
            <Link
              href='/proyectos'
              className='block rounded-xl px-3 py-3 text-sm font-medium text-white hover:bg-white/10'
              onClick={() => setIsOpen(false)}
            >
              Proyectos
            </Link>
            <button
              type='button'
              className='block w-full rounded-xl px-3 py-3 text-left text-sm font-medium text-white hover:bg-white/10'
              onClick={() => {
                setIsOpen(false)
                scrollToContact()
              }}
            >
              Contacto
            </button>
            <Link
              href='/legal'
              className='block rounded-xl px-3 py-3 text-sm font-medium text-white hover:bg-white/10'
              onClick={() => setIsOpen(false)}
            >
              Legal
            </Link>
          </div>
        )}
      </div>

      {/* Navbar wrapper */}
      <div className='hidden w-full bg-transparent sm:block'>
        <div className='flex items-center justify-between border-b border-white/15 pb-5'>
          <div className='flex flex-shrink-0 items-center'>
            <img
              className='h-9 w-auto'
              src='/images/logo-white.png'
               alt='JM Aislamientos y Revestimientos'
            />
          </div>
          <div className='hidden sm:ml-6 sm:block'>
            <div className='flex space-x-4'>
              <Link className='rounded-full px-4 py-2 text-sm font-bold text-gray-200 transition hover:bg-white/10 hover:text-white' href='/proyectos'>
                Proyectos
              </Link>

              <button
                className='rounded-full px-4 py-2 text-sm font-bold text-gray-200 transition hover:bg-white/10 hover:text-white'
                onClick={scrollToContact}
              >
                Contacto
              </button>

              <Link className='rounded-full px-4 py-2 text-sm font-bold text-gray-200 transition hover:bg-white/10 hover:text-white' href='/legal'>
                Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
