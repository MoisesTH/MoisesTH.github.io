import React from 'react';
import { PlaceholderNotice } from './components/PlaceholderNotice';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { Teaching } from './components/Teaching';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-sky-500 selection:text-white transition-colors duration-300">
      <PlaceholderNotice />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Skills />
        <Projects />
        <Research />
        <Teaching />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
