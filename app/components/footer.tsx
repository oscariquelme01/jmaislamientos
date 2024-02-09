import React from 'react';
import Image from 'next/image';

function footer() {
  return (
    <>
      <div className='flex w-full items-center justify-center border-t-[1px] border-t-[rgba(255,255,255,0.4)] bg-accent'>
        <div className='mt-4 lg:py-8 grid w-full md:w-4/5 lg:w-3/5 grid-cols-[30%_70%] gap-4 text-left text-white md:grid-cols-[40%_20%_40%]'>
          <div className='col-span-2 md:col-span-1 flex flex-col items-center justify-center'>
            <h2 className='mb-2 text-2xl lg:text-3xl '>
              J.M. Aislamientos y Revestimientos
            </h2>
          </div>
          <div className='row-start-2'>
            Nos dedicamos a hacer revestimientos y aislamientos de interiores,
            tabiquería y techos registrables entre otros.
          </div>

          <div className='flex items-center'>
            <h4 className='mb-2 text-xl lg:text-2xl'>Links</h4>
          </div>
          <div className='justify-start flex flex-col gap-2 row-start-2'>
            <a href='/'>
              Aviso LegaL
            </a>
            <a href='/'>
              Politica de cookies
            </a>
            <a href='/'>
              Contacto
            </a>
          </div>

          <div className='flex items-center'>
            <h4 className='mb-2 text-xl lg:text-2xl'>Información</h4>
          </div>
          <div className='justify-start items-start flex flex-col gap-2 row-start-2'>
            <div className='flex justify-center items-center gap-2'>
              <Image
                className='h-4 w-4'
                width={0}
                height={0}
                src='/icons/mail.svg'
                alt='mail icon'
              />
              juan.merino@jmaislamientos.es
            </div>
            <div className='flex justify-center items-center gap-2'>
              <Image
                className='h-4 w-4'
                width={0}
                height={0}
                src='/icons/location.svg'
                alt='location icon'
              />
              c/ Dr. Michavila º 29
            </div>
            <div className='flex justify-center items-center gap-2'>
              <Image
                className='h-4 w-4 justify-self-start'
                width={0}
                height={0}
                src='/icons/phone.svg'
                alt='phone icon'
              />
              606338201
            </div>
          </div>
        </div>
      </div>
      <div className='border-t-[1px] border-[rgba(255,255,255,0.4)] bg-accent'>
        <div className='p-2 text-right text-white mr-8'>Copyright © 2024 JM Aislamientos y Revestimientos S.L. - All rights reserved</div>
      </div>
    </>
  );
}

export default footer;
