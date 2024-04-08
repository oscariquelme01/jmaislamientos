import React from 'react';
import Image from 'next/image';

function Projects() {
  return (
    <div className='flex w-full flex-col items-center'>
      <h3 className='text-center text-lg font-semibold text-accentDark md:text-xl lg:text-2xl'>
        ¿Todavía no estás convencido?
        <br />
        Mira alguno de nuestros últimos proyectos
      </h3>

      <div className='grid w-4/5 grid-cols-1 gap-4 md:grid-cols-[50%_50%] max-w-screen-xl'>
        <div>
          <h4 className='box-shadow relative left-8 top-2 z-10 w-fit bg-white px-4 py-2 text-xl'>
            Proyecto 1
          </h4>
          <div className='box-shadow flex h-[80%] flex-col'>
            <div className='w-full bg-gradient-accent p-4 text-white'>
              Sucessfully did the whole design. Working seemlestly, I found a
              few errors while doing this, you provided so much details in you
              video.
            </div>
            <img
              alt='imagen ejemplo'
              src={'/images/example-project.png'}
              className='flex-1'
            />
          </div>
        </div>

        <div>
          <h4 className='box-shadow relative left-8 top-2 z-10 w-fit bg-white px-4 py-2 text-xl'>
            Proyecto 2
          </h4>
          <div className='box-shadow flex h-[80%] flex-col'>
            <div className='w-full bg-gradient-accent p-4 text-white'>
              Sucessfully did the whole design. Working seemlestly, I found a
              few errors while doing this, you provided so much details in you
              video.
            </div>
            <img
              alt='imagen ejemplo'
              src={'/images/example-project.png'}
              className='flex-1'
            />
          </div>
        </div>

        <div className='md:col-span-2 md:relative md:bottom-12'>
          <h4 className='box-shadow relative left-8 top-2 z-10 w-fit bg-white px-4 py-2 text-xl'>
            Proyecto 3
          </h4>
          <div className='box-shadow flex h-[80%] flex-col'>
            <div className='w-full bg-gradient-accent p-4 text-white'>
              Sucessfully did the whole design. Working seemlestly, I found a
              few errors while doing this, you provided so much details in you
              video.
            </div>
            <img
              alt='imagen ejemplo'
              src={'/images/example-project.png'}
              className='flex-1'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
