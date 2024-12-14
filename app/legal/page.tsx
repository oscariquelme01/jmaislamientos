'use client'

import React from 'react'

import { ArrowLeftIcon } from '@heroicons/react/20/solid'

export default function wip() {
  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center'>
      <ArrowLeftIcon
        className='absolute left-4 top-4 h-8 w-8 hover:cursor-pointer'
        onClick={() => history.back()}
      />
      <div className='max-w-screen-xl rounded bg-white p-8 py-12 text-black shadow-md'>
        <h1 className='mb-4 text-2xl font-bold'>Aviso Legal</h1>

        <section className='mb-6'>
          <h2 className='mb-2 text-xl font-semibold'>Titular del sitio web</h2>
          <p>
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de
            la Sociedad de la Información y del Comercio Electrónico (LSSI-CE),
            se informa que el titular del sitio web{' '}
            <strong>www.jmaislamientos.com</strong> es:
          </p>
          <ul className='mt-2 list-inside list-disc'>
            <li>
              <strong>Nombre del titular</strong>: [Nombre completo o razón
              social]
            </li>
            <li>
              <strong>NIF/CIF</strong>: [Número de identificación fiscal]
            </li>
            <li>
              <strong>Domicilio</strong>: [Dirección completa]
            </li>
            <li>
              <strong>Correo electrónico</strong>: [Email de contacto]
            </li>
            <li>
              <strong>Teléfono</strong>: [Número de teléfono]
            </li>
          </ul>
        </section>

        <section className='mb-6'>
          <h2 className='mb-2 text-xl font-semibold'>Condiciones de Uso</h2>
          <p>
            El acceso y uso del sitio web{' '}
            <strong>www.jmaislamientos.com</strong> atribuyen la condición de
            usuario, lo que implica la aceptación plena y sin reservas de las
            disposiciones incluidas en este Aviso Legal.
          </p>
          <p>
            El usuario se compromete a utilizar el sitio web de forma conforme a
            la ley, la buena fe, el orden público, los usos del tráfico y el
            presente Aviso Legal. El usuario responderá frente a{' '}
            <strong>[Nombre del titular]</strong> o frente a terceros, de
            cualquier daño y perjuicio que pudiera causarse como consecuencia
            del incumplimiento de dicha obligación.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='mb-2 text-xl font-semibold'>
            Propiedad Intelectual e Industrial
          </h2>
          <p>
            Todos los contenidos del sitio web, incluidos textos, imágenes,
            gráficos, logotipos, iconos, botones, software, nombres comerciales,
            marcas, o cualquier otro signo susceptible de utilización industrial
            y comercial están sujetos a derechos de propiedad intelectual e
            industrial de <strong>[Nombre del titular]</strong> o de terceros
            que hayan autorizado su uso.
          </p>
          <p>
            Queda prohibida la reproducción, distribución, comunicación pública,
            transformación o cualquier otra forma de explotación de todo o parte
            del contenido sin el consentimiento previo y expreso de{' '}
            <strong>[Nombre del titular]</strong>.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='mb-2 text-xl font-semibold'>
            Limitación de Responsabilidad
          </h2>
          <p>
            <strong>[Nombre del titular]</strong> no se responsabiliza de los
            errores u omisiones en los contenidos del sitio web, ni garantiza la
            ausencia de virus u otros elementos que puedan causar alteraciones
            en el sistema informático del usuario.
          </p>
          <p>
            Tampoco se hace responsable de los contenidos de otros sitios web
            enlazados desde este sitio web.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='mb-2 text-xl font-semibold'>
            Protección de Datos Personales
          </h2>
          <p>
            <strong>[Nombre del titular]</strong> se compromete a proteger la
            privacidad de los usuarios y asegura el cumplimiento del Reglamento
            (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril
            de 2016, sobre la protección de las personas físicas (RGPD), y la
            Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD).
          </p>
          <p>
            Para más información sobre el tratamiento de datos personales, por
            favor consulta nuestra{' '}
            <a href='#' className='text-blue-600 underline'>
              Política de Privacidad
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className='mb-2 text-xl font-semibold'>
            Ley Aplicable y Jurisdicción
          </h2>
          <p>
            Este Aviso Legal se rige por la legislación española. Para la
            resolución de cualquier controversia que pudiera surgir en relación
            con el sitio web o las actividades en él desarrolladas, serán
            competentes los Juzgados y Tribunales de{' '}
            <strong>[Ciudad o Provincia]</strong>.
          </p>
        </section>
      </div>
    </div>
  )
}
