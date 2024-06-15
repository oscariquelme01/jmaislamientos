import React from 'react'
import IncreasingNumber from './increasingNumber'

type CardProps = { duration: number, prefixTitle: string, numberTarget: number, path: string, title: string, text: string }

function Card({ duration, prefixTitle, numberTarget, path, title, text}: CardProps) {
  return (
    <div className='border flex flex-col p-4 flex-grow flex-shrink basis-0 bg-white'>
      <div className='flex items-center justify-around'>
        <img alt={title} src={path} className='lg:w-16 w-12' />
        <div className='flex flex-col items-center mb-4'>
          <span className='text-gray-400'>{prefixTitle}</span>
          <IncreasingNumber
            finalValue={numberTarget}
            duration={duration}
            className='text-6xl font-bold text-sky-700'
          />
          <h4 className='text-xl text-sky-700 text-center'>{title}</h4>
        </div>
      </div>
      <div className='text-gray-500 text-center'>
        {text}
      </div>
    </div>
  )
}

export default Card
