'use client'

import React from 'react'

import WorkerIcon from '/icons/worker.svg'
import ProjectsIcon from '/icons/projects.svg'
import ExperienceIcon from '/icons/experience.svg'

import Image from 'next/image'

import IncreasingNumber from './increasingNumber'

function Stats() {
  return (
    <div className='m-8 flex max-w-screen-xl items-center justify-center'>
      <div className='w-1/4 flex flex-col items-center rounded-md'>
        <Image
          alt='whatdaheell'
          src='/icons/experience.svg'
          width={0}
          height={0}
          className='my-4 w-32'
        />

        <IncreasingNumber
          finalValue={25}
          duration={1000}
          className={'text-8xl font-bold text-blue-600'}
        />
        <h4 className='w-full bg-blue-600 px-8 py-2 text-center text-3xl font-bold text-white'>
          Años de experiencia
        </h4>
        <div className='bg-blue-600 px-12 pb-4 text-center text-gray-200'>
          Contamos con más de 25 años de experiencia en el sector los cuales nos
          permiten asegurarte que estarás en manos de verdaderos maestros del
          oficio
        </div>
      </div>

      <div className='w-1/4 flex flex-col items-center rounded-md'>
        <Image
          alt='whatdaheell'
          src='/icons/projects.svg'
          width={0}
          height={0}
          className='my-4 w-32'
        />

        <IncreasingNumber
          finalValue={300}
          duration={1000}
          className={'text-8xl font-bold text-blue-700'}
        />
        <h4 className='w-full bg-blue-700 px-8 py-2 text-center text-3xl font-bold text-white'>
          Proyectos completados
        </h4>
        <div className='bg-blue-700 px-12 pb-4 text-center text-gray-200'>
          A lo largo de nuestras decadas de trabajo, hemos completado mas de 300
          proyectos siempre con un enfoque serio y profesional
        </div>
      </div>

      <div className='w-1/4 flex flex-col items-center rounded-md'>
        <Image
          alt='whatdaheell'
          src='/icons/worker.svg'
          width={0}
          height={0}
          className='my-4 w-32'
        />

        <IncreasingNumber
          finalValue={20}
          duration={1000}
          className={'text-8xl font-bold text-blue-600'}
        />
        <h4 className='w-full bg-blue-600 px-8 py-2 text-center text-3xl font-bold text-white'>
          Profesionales en el sector
        </h4>
        <div className='bg-blue-600 px-12 pb-4 text-center text-gray-200'>Nuestra plantilla esta formada por más de 20 profesionales curtidos en años de trabajo y dedicación al oficio</div>
      </div>
    </div>
  )
}

export default Stats
