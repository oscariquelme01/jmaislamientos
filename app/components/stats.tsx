'use client'

import React from 'react'

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
    <section className='w-full bg-sky-700 py-20'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-10 max-w-2xl text-white'>
          <p className='mb-3 text-sm font-black uppercase tracking-[0.3em] text-sky-100'>
            Garantía de oficio
          </p>
          <h2 className='text-3xl font-black tracking-tight sm:text-4xl'>
            Experiencia real en obras de todos los tamaños
          </h2>
        </div>
      <div className='grid gap-6 md:grid-cols-3'>
        {statsData.map((statData, index) => (
            <Card 
            key={index}
            duration={statData.duration}
            prefixTitle={statData.prefixTitle}
            numberTarget={statData.finalValue}
            path={statData.path}
            title={statData.title}
            text={statData.text}
          />
          ))}
      </div>
      </div>
    </section>
  )
}

export default Stats
