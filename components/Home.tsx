import React, { Suspense } from 'react';
import { Hero } from './Hero';
import { NeuralBackground } from './NeuralBackground';
import { Navigation } from './Navigation';
import { SectionWrapper } from './SectionWrapper';
import { LogoTicker } from './LogoTicker';

// Lazy load below-the-fold heavy components to speed up initial render
// Using the .then() pattern to handle named exports
const About = React.lazy(() => import('./About').then(module => ({ default: module.About })));
const Projects = React.lazy(() => import('./Projects').then(module => ({ default: module.Projects })));
const Experience = React.lazy(() => import('./Experience').then(module => ({ default: module.Experience })));
const Education = React.lazy(() => import('./Education').then(module => ({ default: module.Education })));
const Certifications = React.lazy(() => import('./Certifications').then(module => ({ default: module.Certifications })));
const BentoGrid = React.lazy(() => import('./BentoGrid').then(module => ({ default: module.BentoGrid })));
const Testimonials = React.lazy(() => import('./Testimonials').then(module => ({ default: module.Testimonials })));
const Newsletter = React.lazy(() => import('./Newsletter').then(module => ({ default: module.Newsletter })));
const Contact = React.lazy(() => import('./Contact').then(module => ({ default: module.Contact })));

// A minimal loading placeholder for sections to prevent layout thrashing
const SectionLoader = () => (
  <div className="w-full h-[400px] flex items-center justify-center">
    <div className="w-full h-full rounded-3xl bg-white/[0.02] animate-pulse border border-white/5 flex items-center justify-center">
        <div className="text-white/10 font-mono text-xs uppercase tracking-widest">Loading Segment...</div>
    </div>
  </div>
);

export const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      {/* Dynamic Neural/VR Background - Fixed at Z-0 */}
      <NeuralBackground />
      
      {/* Navigation moved to root to prevent stacking context clipping */}
      <Navigation />
      
      {/* Hero Section (Critical Path - Loaded Immediately) */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <main className="flex flex-col pb-20">
          <Hero />
        </main>
      </div>

      {/* Full Width Ticker Section */}
      <div className="relative z-20 w-full mb-32">
        <SectionWrapper delay={0.2} className="w-full">
            <LogoTicker />
        </SectionWrapper>
      </div>

      {/* Rest of Content (Constrained Width & Lazy Loaded) */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <main className="flex flex-col gap-32 pb-40">
          
          <Suspense fallback={<SectionLoader />}>
            <SectionWrapper id="about">
                <About />
            </SectionWrapper>
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <SectionWrapper id="projects">
                <Projects />
            </SectionWrapper>
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <SectionWrapper id="experience">
                <Experience />
            </SectionWrapper>
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <SectionWrapper id="education">
                <Education />
            </SectionWrapper>
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <SectionWrapper id="certifications">
                <Certifications />
            </SectionWrapper>
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <SectionWrapper id="research">
                 <BentoGrid />
            </SectionWrapper>
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <SectionWrapper>
                <Testimonials />
            </SectionWrapper>
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <SectionWrapper>
                 <Newsletter />
            </SectionWrapper>
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <SectionWrapper id="contact">
                <Contact />
            </SectionWrapper>
          </Suspense>
          
          <footer className="text-center text-white/40 text-sm py-12 border-t border-white/5">
            <p>© 2025 Lab of Neural Dynamics. Built with React & Three.js.</p>
          </footer>
        </main>
      </div>
    </div>
  );
};