import React from 'react';

function Hero() {
  return (
    <div className='relative h-auto w-full overflow-hidden bg-black'>
      <img src='/images/workers.png' className='w-full opacity-70' alt='' />
      <div
        className='tracking-thin z-2 absolute
        left-1/2 top-1/2 m-auto flex w-4/5 -translate-x-[50%]
        -translate-y-[50%] flex-col
        items-center justify-center gap-4 text-center text-3xl font-extrabold
        text-white sm:text-4xl md:gap-8 md:text-5xl lg:w-[70%] lg:text-6xl xl:text-7xl 2xl:text-8xl'
      >
        <div>
          <span
            className='font-outline-1 md:font-outline-2 xl:font-outline-3 2xl:text-10xl
          relative top-[0.5rem] text-5xl text-transparent sm:text-6xl md:text-7xl
            lg:text-8xl xl:text-9xl
            '
          >
            JM{' '}
          </span>
          Aislamientos
          <br /> y Revesitimientos
        </div>
        <div
          className='w-full text-base font-normal sm:text-lg md:text-xl
        lg:w-[70%] xl:text-2xl
          '
        >
          Ayudamos a todo tipo de empresas con soluciones de pladur,
          insonorizaciones, revestimientos, aislamientos y más
        </div>
      </div>
    </div>
  );
}

export default Hero;
