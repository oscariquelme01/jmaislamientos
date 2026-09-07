import React from 'react'
import IncreasingNumber from './increasingNumber'

type CardProps = { duration: number, prefixTitle: string, numberTarget: number, path: string, title: string, text: string }

function Card({ duration, prefixTitle, numberTarget, path, title, text}: CardProps) {
  return (
    <article className='flex h-full flex-col rounded-2xl bg-white p-6 shadow-xl shadow-sky-950/10'>
      <div className='flex items-start gap-5'>
        <div className='rounded-2xl bg-sky-50 p-3'>
          <img alt={title} src={path} className='h-10 w-10 lg:h-12 lg:w-12' />
        </div>
        <div className='mb-4 flex flex-col'>
          <span className='text-sm font-medium text-gray-400'>{prefixTitle}</span>
          <IncreasingNumber
            finalValue={numberTarget}
            duration={duration}
            className='text-5xl font-black text-sky-700'
          />
          <h4 className='text-lg font-bold text-sky-700'>{title}</h4>
        </div>
      </div>
      <p className='mt-auto text-sm leading-6 text-gray-500'>
        {text}
      </p>
    </article>
  )
}

export default Card
