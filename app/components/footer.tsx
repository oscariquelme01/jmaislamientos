import React from 'react';
import Image from 'next/image';

function footer() {
  return (
    <footer className='bg-accent'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <hr className='my-6 border-[rgba(255,255,255,0.4)] sm:mx-auto lg:my-8' />
        <div className='md:flex md:justify-around gap-4'>
          <div className='mb-6 md:mb-0'>
            <a href='#top' className='flex items-center'>
              <img
                src='/images/logo-white.png'
                className='me-3 h-8'
                alt='Company Logo'
              />
              <span className='self-center whitespace-nowrap text-2xl font-semibold text-white'>
                JM Aislamientos
                <br />y Revestimientos
              </span>
            </a>
          </div>
          <div className='grid grid-cols-[60%_40%] gap-8 sm:gap-6 flex-grow mx-8'>
            <div>
              <h2 className='mb-6 text-sm font-medium uppercase text-white'>
                Información
              </h2>
              <ul className='text-white'>
                <li className='flex gap-2 mb-4'>
                  <Image width={0} height={0} alt='phone icon' src={'/icons/phone.svg'} className='w-4'/>
                  <span>601 30 44 60</span>
                </li>
                <li className='flex gap-2'>
                  <Image width={0} height={0} alt='Location icon' src={'/icons/location.svg'} className='w-4'/>
                  <span>c/Dr. Michavila º 29 </span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-medium uppercase text-white'>
                Legal
              </h2>
              <ul className='text-white'>
                <li className='mb-4'>
                  <a href='/under-construction' className='hover:underline'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='/under-construction' className='hover:underline'>
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-[rgba(255,255,255,0.4)] sm:mx-auto lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-white text-sm sm:text-center'>
            © 2023 JM Aislamientos y Revestimientos™ . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default footer;
