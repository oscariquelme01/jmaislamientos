import React from 'react'
import Navbar from './navbar'

import HeroSubheader from './heroSubheader'

function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-900 bg-[url('/images/workers.png')] bg-cover bg-center bg-no-repeat">
      <div className='absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-sky-950/50' />
      <div className='absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-950/40 to-transparent' />
      <div className='relative'>
      <Navbar/>
      <div className='mx-auto max-w-screen-xl px-4 py-28 text-left sm:px-6 lg:px-8 lg:py-44'>
        <div className='max-w-3xl'>
        <p className='mb-4 text-sm font-black uppercase tracking-[0.3em] text-sky-300'>
          Más de 25 años de experiencia
        </p>
        <h1 className='mb-6 text-4xl font-black leading-none tracking-tight text-white md:text-6xl lg:text-7xl'>
          Aislamientos, pladur y revestimientos interiores en Madrid
        </h1>
        <h2 className='mb-8 max-w-2xl text-lg font-normal leading-8 text-gray-200 lg:text-xl'>
          Soluciones profesionales para obra nueva, reformas, techos
          registrables y acabados interiores en viviendas, locales y oficinas.
        </h2>
        <HeroSubheader/>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Hero
