import React from 'react';
import Image from 'next/image';
import { PhoneIcon } from '@heroicons/react/20/solid';
import { EnvelopeIcon } from '@heroicons/react/16/solid';
import { MapPinIcon } from '@heroicons/react/16/solid';


function footer() {
  return (


<footer className="bg-white w-full">
    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-center md:gap-12 md:items-center">
          <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                  <img src="/images/logo-black.png" className="h-8 me-3" alt="FlowBite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap">JM Aislamientos<br/>Y Revestimientos</span>
              </a>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Información</h2>
                  <ul className="text-gray-500 font-medium">
                      <li className='mb-4 flex items-center gap-2'>
                          <MapPinIcon href="#" className="w-4"/>
                          <span>C/ Michavela 29</span>
                      </li>
                      <li className='mb-4 flex items-center gap-2'>
                          <PhoneIcon href="#" className="w-4"/>
                          <span>601 30 44 60</span>
                      </li>
                      <li className='flex items-center gap-2'>
                          <EnvelopeIcon href="#" className="w-4"/>
                          <span>info@jmaislamientos.es</span>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                  <ul className="text-gray-500 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Politica de cookies</a>
                      </li>
                      <li className='mb-4'>
                          <a href="#" className="hover:underline">Terminos y condiciones</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Aviso legal</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">© 2024 JM Aislamientos y Revestimientos™. All Rights Reserved.</span>
      </div>
    </div>
</footer>
  );
}

export default footer;
