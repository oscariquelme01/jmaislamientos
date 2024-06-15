'use client'
import React from 'react'

import { ArrowRightIcon } from '@heroicons/react/24/outline'

function HeroSubheader() {
  return (
    <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0'>
      <button
        className='inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-center text-base font-medium text-white hover:bg-sky-500'
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
      <a
        href='#'
        className='inline-flex items-center justify-center rounded-lg border border-white px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-100 hover:text-gray-900 sm:ms-4'
      >
        Conócenos
      </a>
    </div>
  )
}

export default HeroSubheader
