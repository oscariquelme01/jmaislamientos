import Hero from './components/hero';
import Companies from './components/companies';
import Stats from './components/stats';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <Hero />
      <Companies />
      <Stats />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
