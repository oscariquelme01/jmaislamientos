'use client'

import React, { DOMElement, useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Card from './card'
import { AcademicCapIcon } from '@heroicons/react/24/outline'

function Stats() {
  const wrapperRef = useRef(null)
  const [ isVisible, setIsVisible ] = useState(false)

  const statsData = [
    {
      title: 'Experencia',
      description: 'Contamos con mas de 25 años de experiencia en el sector, cumpliendo con proyectos de todos los tamaños',
      icon: AcademicCapIcon
    },
    {
      title: 'Profesionales',
      description: 'Contamos con mas de 25 años de experiencia en el sector, cumpliendo con proyectos de todos los tamaños',
      icon: AcademicCapIcon
    },
    {
      title: 'Proyectos',
      description: 'Contamos con mas de 25 años de experiencia en el sector, cumpliendo con proyectos de todos los tamaños',
      icon: AcademicCapIcon
    }
  ]

  const callbackFunction = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, { root: null, rootMargin: "0px", threshold: 0.85 })
  })

  return (
    <div className='my-8 flex items-center justify-center gap-6' ref={wrapperRef}>
      { /* @ts-ignore weird type error where I can't pass an icon from heroicons/react as a prop but can pass any other component */ }
      <Card title='Experiencia' description='Contamos con mas de 25 años de experiencia en el sector, cumpliendo con proyectos de todos los tamaños' Icon={AcademicCapIcon}/>
      { /* @ts-ignore weird type error where I can't pass an icon from heroicons/react as a prop but can pass any other component */ }
      <Card title='Experiencia' description='Contamos con mas de 25 años de experiencia en el sector, cumpliendo con proyectos de todos los tamaños' Icon={AcademicCapIcon}/>
      { /* @ts-ignore weird type error where I can't pass an icon from heroicons/react as a prop but can pass any other component */ }
      <Card title='Experiencia' description='Contamos con mas de 25 años de experiencia en el sector, cumpliendo con proyectos de todos los tamaños' Icon={AcademicCapIcon}/>
    </div>
  )
}

export default Stats
