import React from 'react';
import { Hero3D } from './Hero3D';
import { MagneticButton } from './MagneticButton';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
      <motion.div 
        className="order-2 lg:order-1 space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs tracking-wider uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            Researcher • University of Auckland
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white/95 leading-[1.1] mb-2">
            Sagar Sahore
          </h1>
          <h2 className="text-3xl md:text-4xl font-light text-white/50 mb-6">
            Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 animate-gradient bg-300%">Computer Vision</span>
          </h2>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <p className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed font-light">
            Bridging the gap between raw pixel data and semantic understanding. 
            Designing intelligent systems that see the world as we do.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap gap-4"
          variants={itemVariants}
        >
          <MagneticButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Work <ArrowRight className="w-4 h-4" />
          </MagneticButton>
          
          <MagneticButton variant="secondary">
            CV / Resume <Download className="w-4 h-4" />
          </MagneticButton>
        </motion.div>

        <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-white/5 flex gap-8"
        >
            <div>
                <h4 className="text-2xl font-medium text-white">12+</h4>
                <p className="text-sm text-white/40 uppercase tracking-widest mt-1">Publications</p>
            </div>
            <div>
                <h4 className="text-2xl font-medium text-white">850+</h4>
                <p className="text-sm text-white/40 uppercase tracking-widest mt-1">Citations</p>
            </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="order-1 lg:order-2 h-full w-full"
        initial={{ scale: 0.9, opacity: 0, rotateY: 15 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Hero3D />
      </motion.div>
    </section>
  );
};