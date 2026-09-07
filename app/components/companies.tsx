'use client'

import React from 'react'
import { companiesPath } from '../const'

const logoClassName =
  'w-28 opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 md:w-40 lg:w-48'

function Companies() {
  return (
    <section className='w-full bg-gray-50 py-16 lg:py-20'>
      <div className='mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8'>
        <p className='mb-3 text-sm font-black uppercase tracking-[0.3em] text-sky-700'>
          Clientes
        </p>
        <h3 className='mb-10 max-w-2xl text-center text-2xl font-black text-gray-950 md:text-3xl'>
          Empresas que han confiado en nuestro trabajo
        </h3>
        <div className='inline-flex w-full max-w-screen-xl flex-nowrap overflow-hidden rounded-3xl bg-white py-8 shadow-sm shadow-gray-200 [mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-96px),transparent_100%)]'>
          <ul className='flex animate-infinite-scroll-x items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-6 lg:[&_li]:mx-10'>
            {companiesPath.map((path, index) => (
              <li key={index}>
                <img
                  src={`/images/${path}`}
                  alt={`company ${index} logo`}
                  className={logoClassName}
                  key={index}
                />
              </li>
            ))}
          </ul>

          {/* Duplicate element to ensure smooth transition */}
          <ul
            className='flex animate-infinite-scroll-x items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-6 lg:[&_li]:mx-10'
            aria-hidden={true}
          >
            {companiesPath.map((path, index) => (
              <li key={index}>
                <img
                  src={`/images/${path}`}
                  alt={`company ${index} logo`}
                  className={logoClassName}
                  key={index}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Companies
