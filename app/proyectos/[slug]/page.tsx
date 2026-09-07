import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import Footer from '@/app/components/footer'
import ProjectImage from '@/app/components/projectImage'
import { getProjectBySlug, getProjectSlugs } from '@/sanity/projects'

export const revalidate = 60

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const projects = await getProjectSlugs()

  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) return {}

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/proyectos/${project.slug}`,
    },
  }
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) notFound()

  const images = [project.coverImage, ...(project.gallery || [])].filter(Boolean)
  const description = project.longDescription || project.description
  const paragraphs = description.split('\n').filter(Boolean)

  return (
    <main className='min-h-screen bg-white text-neutral-950'>
      <article className='mx-auto w-full max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20'>
        <Link
          href='/proyectos'
          className='mb-8 inline-flex text-sm font-medium text-sky-700 hover:text-sky-500'
        >
          Volver a proyectos
        </Link>

        <div className='grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start'>
          <div className='overflow-hidden rounded-3xl bg-gray-100 shadow-lg shadow-gray-200/70'>
            <ProjectImage
              image={project.coverImage}
              alt={project.title}
              priority
              sizes='(min-width: 1024px) 60vw, 100vw'
              className='h-auto w-full'
            />
          </div>

          <div className='lg:sticky lg:top-8'>
            {project.location && (
              <p className='mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-700'>
                {project.location}
              </p>
            )}
            <h1 className='text-4xl font-black tracking-tight sm:text-5xl'>
              {project.title}
            </h1>
            <div className='mt-6 space-y-4 text-lg leading-8 text-gray-500'>
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link
              href='/?contacto=true'
              className='mt-8 inline-flex rounded-full bg-sky-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-500'
            >
              Solicitar presupuesto
            </Link>
          </div>
        </div>

        {images.length > 1 && (
          <section className='mt-16'>
            <h2 className='mb-6 text-2xl font-bold'>Galería del proyecto</h2>
            <div className='columns-1 gap-5 sm:columns-2 lg:columns-3'>
              {images.map((image, index) => (
                <div
                  key={index}
                  className='mb-5 break-inside-avoid overflow-hidden rounded-2xl bg-gray-100 shadow-md shadow-gray-200/70'
                >
                  <ProjectImage
                    image={image}
                    alt={`${project.title} - imagen ${index + 1}`}
                    className='h-auto w-full'
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </article>
      <Footer />
    </main>
  )
}
