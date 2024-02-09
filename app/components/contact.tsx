import React from 'react';

function contact() {
  return (
    <div className='flex w-full flex-col items-center justify-center bg-gradient-accent mt-4'>
      <h3 className='my-8 text-4xl font-bold text-white'>¡Contáctanos!</h3>

      <form
        action={''}
        method='post'
        className='mb-8 grid w-4/5 grid-cols-1 gap-4 md:grid-cols-2 xl:w-3/5'
      >
        <input className='row-start-1 bg-white p-2' placeholder='Nombre' />
        <input
          className='row-start-2 bg-white p-2'
          placeholder='Correo electrónico'
        />
        <input className='row-start-3 bg-white p-2' placeholder='Asunto' />
        <textarea
          className='md:row-tart-auto row-start-4 min-h-[140px] bg-white p-2 md:col-start-2 md:row-span-3 md:min-h-fit'
          placeholder='Mensaje...'
        />
        <button
          type='submit'
          className='bg-Transparent md:col-span-2 row-start-5 border-[1px] border-accentLight py-1 text-center text-xl text-white md:row-start-4'
        >
          Sumbit
        </button>
      </form>
    </div>
  );
}

export default contact;
