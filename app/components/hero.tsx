import React from 'react'
import Navbar from './navbar'

import { ArrowRightIcon } from '@heroicons/react/24/outline'

function Hero() {
  return (
    <section className="bg-gray-600 bg-[url('/images/workers.png')] bg-center bg-no-repeat bg-blend-multiply">
      <Navbar/>
      <div className='mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56'>
        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl'>
          JM Aislamientos y Revestimientos
        </h1>
        <p className='mb-8 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl'>
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
        <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0'>
          <a
            href='#'
            className='inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-700'
          >
            ¡Contáctanos!
            <ArrowRightIcon className='block h-4 w-6 stroke-[3px]' aria-hidden='true'/>
          </a>
          <a
            href='#'
            className='inline-flex items-center justify-center rounded-lg border border-white px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-100 hover:text-gray-900 sm:ms-4'
          >
            Conócenos
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
