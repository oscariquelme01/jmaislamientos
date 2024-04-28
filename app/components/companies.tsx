'use client'

import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import { companiesPath } from '../const'

function companies() {
  return (
    <div className='inline-flex w-full flex-nowrap justify-center'>
      <div className='mx-4 mt-8 flex w-full max-w-screen-xl flex-col items-center justify-center lg:mt-16'>
        <h3 className='text-accentDark w-full text-center text-lg font-semibold md:text-xl lg:text-2xl mb-8'>
          Unete al grupo de clientes satisfechos con nuestros servicios
        </h3>
        <div className='inline-flex w-full max-w-screen-xl flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
          <ul className='flex animate-infinite-scroll-x items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8'>
            {companiesPath.map((path, index) => (
              <li>
                <img
                  src={`/images/${path}`}
                  alt={`company ${index} logo`}
                  className='w-40'
                  key={index}
                />
              </li>
            ))}
          </ul>

          {/* Duplicate element to ensure smooth transition */}
          <ul
            className='flex animate-infinite-scroll-x items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8 relative'
            aria-hidden={true}
          >
            {companiesPath.map((path, index) => (
              <li>
                <img
                  src={`/images/${path}`}
                  alt={`company ${index} logo`}
                  className='w-40'
                  key={index}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default companies
