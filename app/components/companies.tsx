import React from 'react'
import { companiesPath } from '../const'

function companies() {
  return (
    <div className='flex flex-col items-center justify-center mt-8 lg:mt-16 mx-4'>
      <h3 className='text-xl md:text-2xl lg:text-4xl text-center font-semibold w-full'>
        Unete al grupo de clientes satisfechos con nuestros servicios
      </h3>
      <div className='flex justify-around w-full lg:w-4/5 mt-4 md:mt-8'>
        {companiesPath.map((path, index) => (
          <img src={`/images/${path}`} alt={`company ${index} logo`} className='w-[75px] sm:w-[120px] md:w-[160px] h-auto' key={index}/>
        ))}
      </div>
    </div>
  )
}

export default companies
