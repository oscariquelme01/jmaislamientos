import React from 'react';
import { companiesPath } from '../const';

function companies() {
  return (
    <div className='mx-4 mt-8 flex flex-col items-center justify-center lg:mt-16'>
      <h3 className='w-full text-center text-lg font-semibold text-accentDark md:text-xl lg:text-2xl'>
        Unete al grupo de clientes satisfechos con nuestros servicios
      </h3>
      <div className='mt-4 flex w-full justify-around md:mt-8 lg:w-4/5'>
        {companiesPath.map((path, index) => (
          <img
            src={`/images/${path}`}
            alt={`company ${index} logo`}
            className='h-auto w-[75px] sm:w-[120px] md:w-[160px]'
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default companies;
