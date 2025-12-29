import React from 'react';
import { Hero } from './Hero.js';
import { About } from './About.js';
import { BentoGrid } from './BentoGrid.js';
import { Projects } from './Projects.js';
import { Experience } from './Experience.js';
import { Education } from './Education.js';
import { Testimonials } from './Testimonials.js';
import { Certifications } from './Certifications.js';
import { Contact } from './Contact.js';
import { BackgroundGradients } from './BackgroundGradients.js';
import { Navigation } from './Navigation.js';
import { SectionWrapper } from './SectionWrapper.js';

export const Home = () => {
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