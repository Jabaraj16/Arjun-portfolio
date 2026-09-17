import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-slate-50 dark:bg-[#070D18] text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-200">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Impact />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <Analytics />
    </div>
  );
}

export default App;
