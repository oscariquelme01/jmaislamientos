'use client'
import React from 'react'
import Link from 'next/link'

import { ArrowRightIcon } from '@heroicons/react/24/outline'

function HeroSubheader() {
  return (
    <div className='flex flex-col gap-4 sm:flex-row'>
      <button
        className='inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-center text-base font-bold text-white shadow-lg shadow-sky-950/30 transition hover:bg-sky-500'
        onClick={() => {
          const offset = document.getElementById('contactFormHeader')?.offsetTop || 0
          window.scrollTo(0, offset)
        }}
      >
        ¡Contáctanos!
        <ArrowRightIcon
          className='block h-4 w-6 stroke-[3px]'
          aria-hidden='true'
        />
      </button>
      <Link
        href='/proyectos'
        className='inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-center text-base font-bold text-white transition hover:bg-white hover:text-gray-950'
      >
        Ver proyectos
      </Link>
    </div>
  )
}

export default HeroSubheader
