'use client'

import React from 'react'

import WorkerIcon from '/icons/worker.svg'
import ProjectsIcon from '/icons/projects.svg'
import ExperienceIcon from '/icons/experience.svg'

import Image from 'next/image'

import IncreasingNumber from './increasingNumber'

const statsData = [
  {
    finalValue: 25,
    duration: 1000, // ms
    path: '/icons/experience.svg',
    title: 'Años de experiencia',
    text: 'Contamos con más de 25 años de experiencia en el sector los cuales nos permiten asegurarte que estarás en manos de verdaderos maestros del oficio',
  },
  {
    finalValue: 300,
    duration: 1000, // ms
    path: '/icons/projects.svg',
    title: 'Proyectos completados',
    text: 'A lo largo de nuestras decadas de trabajo, hemos completado mas de 300 proyectos siempre con un enfoque serio y profesional',
  },
  {
    finalValue: 300,
    duration: 1000, // ms
    path: '/icons/worker.svg',
    title: 'Profesionales en el sector',
    text: 'Nuestra plantilla esta formada por más de 20 profesionales curtidos en años de trabajo y dedicación al oficio',
  },
]

function Stats() {
  return (
    <div className='m-8 grid lg:max-w-screen-xl max-w-screen-md lg:grid-flow-col lg:grid-rows-4-auto'>
      {statsData.map((statData, index) => (
        <>
          <div className='flex items-center justify-center'>
            <Image
              key={index * statsData.length}
              alt='whatdaheell'
              src={statData.path}
              width={0}
              height={0}
              className='my-4 w-32'
            />
          </div>

          <div className='flex items-center justify-center'>
            <IncreasingNumber
              key={index * statsData.length + 1}
              finalValue={statData.finalValue}
              duration={statData.duration}
              className={`text-6xl lg:text-8xl font-bold ${index % 2 ? 'text-blue-700' : 'text-blue-600'}`}
            />
          </div>

          <div className={`flex items-center justify-center ${index % 2 ? 'bg-blue-700' : 'bg-blue-600'}`}>
            <h4
              className={`w-full px-8 py-2 text-center text-2xl lg:text-3xl font-bold text-white`}
              key={index * statsData.length + 2}
            >
              {statData.title}
            </h4>
          </div>

          <div className={`${index % 2 ? 'bg-blue-700' : 'bg-blue-600'} flex items-center justify-center`}>
            <div
              className='px-12 pb-4 text-center text-gray-200'
              key={index * statsData.length + 3}
            >
              {statData.text}
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export default Stats
