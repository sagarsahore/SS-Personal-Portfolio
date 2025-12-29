import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const BackgroundGradients = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects: move background elements slowly based on scroll
  const y1 = useTransform(scrollY, [0, 2000], [0, -300]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 2000], [0, -450]);
  const opacity = useTransform(scrollY, [0, 1000], [1, 0.6]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Top Left - Indigo/Violet */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-900/20 blur-[120px] mix-blend-screen animate-blob" 
      />
      
      {/* Top Right - Teal/Cyan */}
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-teal-900/20 blur-[100px] mix-blend-screen animate-blob animation-delay-2000" 
      />
      
      {/* Bottom Center - Deep Violet */}
      <motion.div 
        style={{ y: y3, opacity }}
        className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-violet-900/10 blur-[130px] mix-blend-screen animate-blob animation-delay-4000" 
      />
      
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
};