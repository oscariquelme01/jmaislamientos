import Hero from './components/hero';
import { Suspense } from 'react';
import Companies from './components/companies';
import Stats from './components/stats';
import Contact from './components/contact';
import Footer from './components/footer';
import ContactScroll from './components/contactScroll';
import Services from './components/services';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'JM Aislamientos y Revestimientos',
  url: 'https://www.jmaislamientosyrevestimientos.com',
  email: 'info@jmaislamientosyrevestimientos.com',
  telephone: '+34606338201',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'C/ Michavila n° 29, Portal 1, 6.°A',
    addressLocality: 'Madrid',
    addressCountry: 'ES',
  },
  description:
    'Empresa especializada en aislamientos, pladur, revestimientos interiores y techos registrables en Madrid.',
  areaServed: 'Madrid',
  knowsAbout: [
    'Aislamientos',
    'Revestimientos interiores',
    'Pladur',
    'Techos registrables',
  ],
};

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Suspense fallback={null}>
        <ContactScroll />
      </Suspense>
      <Hero />
      <Services />
      <Companies />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
