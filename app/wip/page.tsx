'use client'

import Image from 'next/image'
import React from 'react'

import { ArrowLeftIcon } from '@heroicons/react/20/solid'

export default function wip() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <ArrowLeftIcon className='absolute top-4 left-4 h-8 w-8 hover:cursor-pointer' onClick={() => history.back()}/>
      <h3 className='font-bold text-2xl lg:text-4xl'>¡Estamos trabajando en ello!</h3>
      <div className='text-neutral-700 text-lg mt-4'>Disculpen las molestias</div>
      <img className='w-3/5 lg:w-1/3' src='/images/not-implemented.jpg' alt='not implemented'/>
    </div>

  )
}
