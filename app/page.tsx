import Hero from './components/hero';
import Companies from './components/companies';
import Stats from './components/stats';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <Hero />
      <Companies />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
