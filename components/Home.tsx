import React from 'react';
import { Hero } from './Hero';
import { About } from './About';
import { BentoGrid } from './BentoGrid';
import { Projects } from './Projects';
import { Experience } from './Experience';
import { Education } from './Education';
import { Testimonials } from './Testimonials';
import { Certifications } from './Certifications';
import { Contact } from './Contact';
import { BackgroundGradients } from './BackgroundGradients';
import { Navigation } from './Navigation';
import { SectionWrapper } from './SectionWrapper';

export const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200">
      <BackgroundGradients />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Navigation />
        
        <main className="flex flex-col gap-40 pb-40 pt-10">
          <Hero />
          
          <SectionWrapper id="about">
            <About />
          </SectionWrapper>

          <SectionWrapper id="projects">
            <Projects />
          </SectionWrapper>

          <SectionWrapper id="experience">
            <Experience />
          </SectionWrapper>

          <SectionWrapper id="education">
            <Education />
          </SectionWrapper>

          <SectionWrapper id="certifications">
            <Certifications />
          </SectionWrapper>
          
          <SectionWrapper id="research">
             <BentoGrid />
          </SectionWrapper>

          <SectionWrapper>
            <Testimonials />
          </SectionWrapper>

          <SectionWrapper id="contact">
            <Contact />
          </SectionWrapper>
          
          <footer className="text-center text-white/40 text-sm py-12 border-t border-white/5">
            <p>© 2025 Lab of Neural Dynamics. Built with React & Three.js.</p>
          </footer>
        </main>
      </div>
    </div>
  );
};