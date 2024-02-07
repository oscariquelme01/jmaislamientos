import React from 'react';

function Hero() {
  return (
    <div className='w-full h-auto relative overflow-hidden bg-black'>
      <img src='/images/workers.png' className='w-full opacity-70' alt=""/>
      <div className='font-extrabold tracking-thin text-center
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl
        w-4/5 lg:w-[70%]
        flex flex-col gap-4 md:gap-8 justify-center items-center
        absolute left-1/2 top-1/2 m-auto -translate-x-[50%] -translate-y-[50%] z-2 text-white'>
        <div>
          <span className='text-transparent font-outline-1 md:font-outline-2 xl:font-outline-3
          text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl
            relative top-[0.5rem]
            '>JM </span>
            Aislamientos<br/> y Revesitimientos
        </div>
        <div className='font-normal text-base sm:text-lg md:text-xl xl:text-2xl
        w-full lg:w-[70%]
          '>
          Ayudamos a todo tipo de empresas con soluciones de pladur, insonorizaciones,  revestimientos, aislamientos y más
        </div>
      </div>
    </div>
  );
}

export default Hero;
