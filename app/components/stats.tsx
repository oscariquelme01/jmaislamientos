'use client'

import React from 'react'

import WorkerIcon from '/icons/worker.svg'
import ProjectsIcon from '/icons/projects.svg'
import ExperienceIcon from '/icons/experience.svg'

import Image from 'next/image'

import IncreasingNumber from './increasingNumber'
import Card from './Card'

const statsData = [
  {
    finalValue: 25,
    duration: 1000, // ms
    path: '/icons/experience.svg',
    prefixTitle: 'Más de',
    title: 'Años de experiencia',
    text: 'Contamos con más de 25 años de experiencia en el sector los cuales nos permiten asegurarte que estarás en manos de verdaderos maestros del oficio',
  },
  {
    finalValue: 300,
    duration: 1000, // ms
    path: '/icons/projects.svg',
    prefixTitle: 'Más de',
    title: 'Proyectos completados',
    text: 'A lo largo de nuestras decadas de trabajo, hemos completado mas de 300 proyectos siempre con un enfoque serio y profesional',
  },
  {
    finalValue: 20,
    duration: 1000, // ms
    prefixTitle: 'Más de',
    path: '/icons/worker.svg',
    title: 'Profesionales en el sector',
    text: 'Nuestra plantilla esta formada por más de 20 profesionales curtidos en años de trabajo y dedicación al oficio',
  },
]

function Stats() {
  return (
    <div className='m-8 flex flex-col lg:flex-row lg:max-w-screen-xl w-4/5 md:w-1/2 lg:w-full gap-8'>
      {statsData.map((statData, index) => (
          <Card 
          duration={statData.duration}
          prefixTitle={statData.prefixTitle}
          numberTarget={statData.finalValue}
          path={statData.path}
          title={statData.title}
          text={statData.text}
        />
        ))}
    </div>
  )
}

export default Stats
