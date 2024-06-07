import React from 'react'
import IncreasingNumber from './increasingNumber'

function Card({ duration, prefixTitle, numberTarget, path, title, text }) {
  return (
    <div className='flex flex-col p-4 border flex-grow flex-shrink basis-0'>
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
