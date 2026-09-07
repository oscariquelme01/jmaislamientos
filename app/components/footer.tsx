import React from 'react';
import { PhoneIcon } from '@heroicons/react/20/solid';
import { EnvelopeIcon } from '@heroicons/react/16/solid';
import { MapPinIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';


function Footer() {
  return (
<footer className="w-full bg-white">
    <div className="mx-auto w-full max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-t border-gray-200 pt-10 md:grid-cols-[1.1fr_1fr_0.7fr] md:items-start">
          <div>
              <Link href="/" className="flex items-center gap-4">
                  <img src="/images/logo-black.png" className="h-12 w-auto" alt="JM Aislamientos y Revestimientos" />
                  <span className="text-2xl font-black leading-tight text-gray-950">JM Aislamientos<br/>Y Revestimientos</span>
              </Link>
              <p className='mt-5 max-w-sm text-sm leading-6 text-gray-500'>
                Especialistas en pladur, aislamientos, techos registrables y revestimientos interiores.
              </p>
          </div>
              <div>
                  <h2 className="mb-6 text-sm font-black uppercase tracking-widest text-gray-950">Información</h2>
                  <ul className="space-y-4 font-medium text-gray-500">
                      <li className='mb-4 flex items-center gap-2'>
                          <MapPinIcon className="w-4 text-sky-700"/>
                          <span>C/ Michavila n° 29, Portal 1, 6.°A</span>
                      </li>
                      <li className='mb-4 flex items-center gap-2'>
                          <PhoneIcon className="w-4 text-sky-700"/>
                          <a href='tel:+34606338201' className='hover:text-sky-700'>+34 606 33 82 01</a>
                      </li>
                      <li className='flex items-center gap-2'>
                          <EnvelopeIcon className="w-4 text-sky-700"/>
                          <a href='mailto:info@jmaislamientosyrevestimientos.com' className='hover:text-sky-700'>info@jmaislamientosyrevestimientos.com</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-black uppercase tracking-widest text-gray-950">Enlaces</h2>
                  <ul className="space-y-4 font-medium text-gray-500">
                      <li className="mb-4">
                          <Link href="/proyectos" className="hover:text-sky-700">Proyectos</Link>
                      </li>
                      <li className='mb-4'>
                          <Link href="/cookies" className="hover:text-sky-700">Política de cookies</Link>
                      </li>
                      <li>
                          <Link href="/legal" className="hover:text-sky-700">Aviso legal</Link>
                      </li>
                  </ul>
              </div>
      </div>
      <div className="mt-10 border-t border-gray-200 pt-6">
          <span className="text-sm text-gray-500">© 2026 JM Aislamientos y Revestimientos. Todos los derechos reservados.</span>
      </div>
    </div>
</footer>
  );
}

export default Footer;
