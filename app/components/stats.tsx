import React from 'react';
import Image from 'next/image';

function Stats() {
  return (
    <div className='my-8'>
      <div className='mx-4 my-8 flex w-full flex-col items-center justify-center rounded-3xl bg-gradient-accent'>
        <div className='my-2 flex w-full flex-col items-center justify-center gap-4'>
          <Image
            src='/icons/medal-icon.svg'
            alt='Worker Icon'
            width={0}
            height={0}
            className='w-24'
          />
          <div className='text-shadow text-6xl font-extrabold text-accentLight'>
            +25
          </div>
          <div className='mb-4 w-4/5 rounded-xl bg-white p-4 text-center text-lg font-normal text-accentDark'>
            Contamos con mas de 25 años de experiencia en el sector
          </div>
        </div>

        <div className='my-2 flex w-full flex-col items-center justify-center gap-4'>
          <Image
            src='/icons/checklist-icon.svg'
            alt='Worker Icon'
            width={0}
            height={0}
            className='w-24'
          />
          <div className='text-shadow text-6xl font-extrabold text-accentLight'>
            +200
          </div>
          <div className='mb-4 w-4/5 rounded-xl bg-white p-4 text-center text-lg font-normal text-accentDark'>
            Hemos completado más de  200 proyectos de todas las dimensiones
          </div>
        </div>

        <div className='my-2 flex w-full flex-col items-center justify-center gap-4'>
          <Image
            src='/icons/worker-icon.svg'
            alt='Worker Icon'
            width={0}
            height={0}
            className='w-24'
          />
          <div className='text-shadow text-6xl font-extrabold text-accentLight'>
            +20
          </div>
          <div className='mb-4 w-4/5 rounded-xl bg-white p-4 text-center text-lg font-normal text-accentDark'>
            Actualmente tenemos más de 20 profesionales curtidos en cientos de
            proyectos
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
