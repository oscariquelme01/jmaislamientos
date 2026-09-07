import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/app/components/footer'
import ProjectImage from '@/app/components/projectImage'
import { getProjects } from '@/sanity/projects'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Proyectos',
  description:
    'Una selección de trabajos realizados por JM Aislamientos y Revestimientos.',
  alternates: {
    canonical: '/proyectos',
  },
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <main className='min-h-screen bg-white text-neutral-950'>
      <section className='mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24'>
        <Link
          href='/'
          className='mb-10 inline-flex text-sm font-medium text-sky-700 hover:text-sky-500'
        >
          Volver al inicio
        </Link>

        <div className='mb-12 max-w-3xl'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-sky-700'>
            Trabajos realizados
          </p>
          <h1 className='text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl'>
            Proyectos de aislamiento, pladur y revestimientos
          </h1>
          <p className='mt-5 text-lg leading-8 text-gray-500'>
            Una muestra de obras terminadas, detalles de instalación y acabados
            realizados por nuestro equipo.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className='columns-1 gap-6 sm:columns-2 lg:columns-3'>
            {projects.map((project) => (
              <Link
                key={project._id}
                href={`/proyectos/${project.slug}`}
                className='group mb-6 block break-inside-avoid overflow-hidden rounded-2xl border border-gray-100 bg-white text-neutral-950 shadow-lg shadow-gray-200/70 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-300/70'
              >
                <div className='relative overflow-hidden bg-gray-100'>
                  <ProjectImage
                    image={project.coverImage}
                    alt={project.title}
                    className='h-auto w-full transition duration-500 group-hover:scale-105 group-hover:opacity-80'
                  />
                  <div className='absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100'>
                    <span className='grid h-14 w-14 place-items-center rounded-full bg-white/90 text-3xl leading-none text-sky-700'>
                      +
                    </span>
                  </div>
                </div>
                <div className='p-5'>
                  {project.location && (
                    <p className='mb-2 text-sm font-semibold text-sky-700'>
                      {project.location}
                    </p>
                  )}
                  <h2 className='text-xl font-bold'>{project.title}</h2>
                  <p className='mt-3 text-sm leading-6 text-neutral-600'>
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className='rounded-2xl border border-sky-100 bg-sky-50 p-8 text-gray-600'>
            Todavía no hay proyectos publicados. Añade uno desde el panel de
            administración para verlo aquí.
          </div>
        )}
      </section>
      <Footer />
    </main>
  )
}
