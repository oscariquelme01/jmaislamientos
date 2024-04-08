import React from 'react';
import Image from 'next/image';

function Stats() {
  return (
    <div className='my-8 flex flex-col items-center'>
      <div className='max-w-screen-xl box-shadow my-8 flex w-4/5 flex-col items-center justify-center rounded-3xl bg-gradient-accent md:w-[94%] md:flex-row lg:w-4/5'>
        <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-[1fr_1fr_1fr]'>
          <div className='row-start-1 mt-4 flex items-center justify-center md:row-start-auto'>
            <Image
              width={0}
              height={0}
              src='/icons/medal-icon.svg'
              alt='checklist icon'
              className='h-20 w-20 lg:h-28 lg:w-28'
            />
          </div>
          <div className='row-start-4 flex items-center justify-center md:row-start-auto md:mt-4'>
            <Image
              width={0}
              height={0}
              src='/icons/checklist-icon.svg'
              alt='worker icon'
              className='h-20 w-20 lg:h-28 lg:w-28'
            />
          </div>
          <div className='row-start-7 flex items-center justify-center md:row-start-auto md:mt-4'>
            <Image
              width={0}
              height={0}
              src='/icons/worker-icon.svg'
              alt='medal icon'
              className='h-20 w-20 lg:h-28 lg:w-28'
            />
          </div>
          <div className='row-start-2 flex items-center justify-center md:row-start-auto'>
            <div className='text-shadow text-4xl font-bold text-accentLight'>
              +25
            </div>
          </div>
          <div className='row-start-5 flex items-center justify-center md:row-start-auto'>
            <div className='text-shadow text-4xl font-bold text-accentLight lg:text-6xl'>
              +200
            </div>
          </div>
          <div className='row-start-8 flex items-center justify-center md:row-start-auto'>
            <div className='text-shadow text-4xl font-bold text-accentLight'>
              +20
            </div>
          </div>
          <div className='row-start-3 flex h-full items-center justify-center md:row-start-auto'>
            <div className='box-shadow m-auto mb-8 h-4/5 w-3/5 rounded-lg bg-white p-4 text-center text-xl text-accentDark md:w-4/5'>
              Contamos con más de 25 años de experiencia en el sector
            </div>
          </div>
          <div className='row-start-6 flex h-full items-center justify-center md:row-start-auto'>
            <div className='box-shadow m-auto mb-8 h-4/5 w-3/5 rounded-lg bg-white p-4 text-center text-xl text-accentDark md:w-4/5'>
              Hemos completado más de 200 proyectos de todas las dimensiones
            </div>
          </div>
          <div className='row-start-9 flex h-full items-center justify-center md:row-start-auto'>
            <div className='box-shadow m-auto mb-8 h-4/5 w-3/5 rounded-lg bg-white p-4 text-center text-xl text-accentDark md:w-4/5'>
              Actualmente, tenemos más de 20 profesionales curtidos en cientos
              de proyectos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
