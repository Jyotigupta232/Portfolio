import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <ParticlesBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Achievements />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
