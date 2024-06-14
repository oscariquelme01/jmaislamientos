import React from 'react'
import Navbar from './navbar'

import HeroSubheader from './heroSubheader'

function Hero() {
  return (
    <section className="bg-gray-600 bg-[url('/images/workers.png')] bg-center bg-no-repeat bg-blend-multiply w-full">
      <Navbar/>
      <div className='mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56'>
        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl'>
          JM Aislamientos y Revestimientos
        </h1>
        <h2 className='mb-8 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl'>
            Especialistas en revestimiento de interiores, pladur, techos registrables y derivados, ofreciendo soluciones de alta calidad y acabados impecables
        </h2>
        <HeroSubheader/>
      </div>
    </section>
  )
}

export default Hero
