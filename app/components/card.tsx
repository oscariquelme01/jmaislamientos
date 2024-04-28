import React from 'react'
import Image from 'next/image'

import { AcademicCapIcon } from '@heroicons/react/24/outline'

type cardProps = {
  title: string,
  description: string,
  Icon: React.ComponentType<{className: string}>
}

function card({ title, description, Icon }: cardProps) {
  return (
    <div className='flex flex-col items-start bg-white w-80 p-8 rounded-md border-[1px] border-gray-300'>
      <div className='mt-4 mb-8'>
        <Icon className='stroke-black h-20 w-20'/>
      </div>
      <h4 className='text-black text-3xl font-semibold mb-2'>{title}</h4>
      <div className='text-gray-500 text-md mr-4'>{description}</div>
    </div>
  )
}

export default card
