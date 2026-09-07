const services = [
  {
    title: 'Pladur y tabiquería seca',
    text: 'Montaje de tabiques, trasdosados y soluciones interiores en Madrid con acabados limpios y precisos.',
  },
  {
    title: 'Techos registrables',
    text: 'Instalación de techos técnicos para oficinas, locales y espacios profesionales.',
  },
  {
    title: 'Revestimientos interiores',
    text: 'Revestimientos para renovar, proteger y mejorar espacios interiores con una ejecución cuidada.',
  },
  {
    title: 'Aislamientos',
    text: 'Soluciones de aislamiento térmico y acústico adaptadas a cada obra, reforma o local.',
  },
]

export default function Services() {
  return (
    <section id='servicios' className='w-full bg-white py-20 lg:py-28'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end'>
          <div>
            <p className='mb-3 text-sm font-black uppercase tracking-[0.3em] text-sky-700'>
              Qué hacemos
            </p>
            <h2 className='text-3xl font-black tracking-tight text-gray-950 sm:text-4xl lg:text-5xl'>
              Oficio, precisión y acabados duraderos
            </h2>
          </div>
          <p className='max-w-2xl text-lg leading-8 text-gray-500 lg:ml-auto'>
            Trabajamos en Madrid en obra nueva, reformas, viviendas, oficinas y
            locales comerciales, con un equipo acostumbrado a cumplir plazos,
            coordinarse en obra y cuidar el detalle final.
          </p>
        </div>

        <div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          {services.map((service, index) => (
            <article
              key={service.title}
              className='group rounded-2xl border border-gray-100 bg-white p-6 shadow-lg shadow-gray-200/60 transition hover:-translate-y-1 hover:border-sky-100 hover:shadow-xl hover:shadow-sky-100'
            >
              <span className='mb-8 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sm font-black text-sky-700'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className='text-xl font-black text-gray-950'>{service.title}</h3>
              <p className='mt-4 text-sm leading-6 text-gray-500'>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
