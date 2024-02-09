import React from 'react';
import Image from 'next/image';

function Stats() {
  return (
    <div className='my-8 flex flex-col items-center'>
      <div className='box-shadow my-8 flex w-4/5 flex-col items-center justify-center rounded-3xl bg-gradient-accent md:w-[94%] md:flex-row lg:w-4/5'>
        <div className='grid w-full grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-4'>
          <div className='mt-4 flex items-center justify-center row-start-1 md:row-start-auto'>
            <Image
              width={0}
              height={0}
              src='/icons/medal-icon.svg'
              alt='checklist icon'
              className='h-20 w-20 lg:h-28 lg:w-28'
            />
          </div>
          <div className='mt-4 flex items-center justify-center row-start-4 md:row-start-auto'>
            <Image
              width={0}
              height={0}
              src='/icons/checklist-icon.svg'
              alt='worker icon'
              className='h-20 w-20 lg:h-28 lg:w-28'
            />
          </div>
          <div className='mt-4 flex items-center justify-center row-start-7 md:row-start-auto'>
            <Image
              width={0}
              height={0}
              src='/icons/worker-icon.svg'
              alt='medal icon'
              className='h-20 w-20 lg:h-28 lg:w-28'
            />
          </div>
          <div className='flex items-center justify-center row-start-2 md:row-start-auto'>
            <div className='text-shadow text-6xl font-bold text-accentLight'>
              +25
            </div>
          </div>
          <div className='flex items-center justify-center row-start-5 md:row-start-auto'>
            <div className='text-shadow text-6xl font-bold text-accentLight'>
              +200
            </div>
          </div>
          <div className='flex items-center justify-center row-start-8 md:row-start-auto'>
            <div className='text-shadow text-6xl font-bold text-accentLight'>
              +20
            </div>
          </div>
          <div className='flex items-center justify-center row-start-3 md:row-start-auto'>
            <div className='box-shadow mb-8 w-3/5 md:w-4/5 rounded-lg bg-white p-4 text-center text-xl text-accentDark'>
              Contamos con más de 25 años de experiencia en el sector
            </div>
          </div>
          <div className='flex items-center justify-center row-start-6 md:row-start-auto'>
            <div className='box-shadow mb-8 w-3/5 md:w-4/5 rounded-lg bg-white p-4 text-center text-xl text-accentDark'>
              Hemos completado más de 200 proyectos de todas las dimensiones
            </div>
          </div>
          <div className='flex items-center justify-center row-start-9 md:row-start-auto'>
            <div className='box-shadow mb-8 w-3/5 md:w-4/5 rounded-lg bg-white p-4 text-center text-xl text-accentDark'>
              Actualmente, tenemos más de 20 profesionales curtidos en cientos
              dep proyectos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
