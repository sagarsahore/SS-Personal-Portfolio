import React from 'react';
import { GlassCard } from './GlassCard.jsx';
import { Vision3D } from './Vision3D.jsx';
import { Cpu, Globe, Eye, Scan, Code, Layers, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const About = () => {
  const navigate = useNavigate();

  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        {/* Main Narrative */}
        <div className="md:col-span-6 space-y-8">
          <div>
            <h2 className="text-3xl font-medium tracking-tight text-white mb-6">
                The Architect
            </h2>
            <div className="prose prose-invert prose-lg text-white/60 font-light leading-relaxed">
                <p className="mb-4">
                I am a Computer Vision Engineer standing at the intersection of biological intuition and synthetic reasoning. 
                My work is driven by a singular question: <span className="text-indigo-300">How do we instill true visual understanding into machines?</span>
                </p>
                <p className="mb-4">
                While my academic focus lies in mechanistic interpretability—peeling back the layers of billion-parameter transformers—my 
                engineering soul loves building <span className="text-teal-300">scalable perception systems</span>.
                </p>

                <button 
                    onClick={() => navigate('/about')}
                    className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors mt-6 group focus:outline-none px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 w-fit"
                >
                    <span className="uppercase tracking-widest text-xs font-mono">Explore Full Biography</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
          </div>
          
          <GlassCard className="!p-8 relative overflow-hidden">
                {/* Card Header with enhanced alignment */}
                <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-6">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-indigo-400 shadow-inner">
                        <Scan size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-white tracking-wide">Technical Arsenal</h3>
                        <div className="text-xs text-white/40 font-mono uppercase tracking-widest mt-1">Core Competencies</div>
                    </div>
                </div>
                
                <div className="space-y-8">
                    {/* Domain 1 */}
                    <div className="group">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300 group-hover:bg-teal-500/20 transition-colors shrink-0">
                                <Eye size={18} />
                            </div>
                            <span className="font-medium text-white/90 text-lg">Computer Vision</span>
                        </div>
                        <div className="flex flex-wrap gap-2 pl-[3.5rem]"> 
                             {['Semantic Segmentation', '3D Reconstruction', 'NeRFs', 'Object Detection', 'SLAM'].map(skill => (
                                 <span key={skill} className="text-xs px-2.5 py-1 rounded bg-teal-500/5 border border-teal-500/10 text-teal-200/70 hover:bg-teal-500/10 transition-colors cursor-default">
                                     {skill}
                                 </span>
                             ))}
                        </div>
                    </div>

                    {/* Separator line aligned with text */}
                    <div className="h-px bg-white/5 ml-[3.5rem]"></div>

                    {/* Domain 2 */}
                    <div className="group">
                        <div className="flex items-center gap-4 mb-3">
                             <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-300 group-hover:bg-violet-500/20 transition-colors shrink-0">
                                <Layers size={18} />
                             </div>
                            <span className="font-medium text-white/90 text-lg">Deep Learning</span>
                        </div>
                         <div className="flex flex-wrap gap-2 pl-[3.5rem]">
                             {['PyTorch', 'JAX', 'TensorFlow', 'Transformers', 'Diffusion Models', 'CUDA'].map(skill => (
                                 <span key={skill} className="text-xs px-2.5 py-1 rounded bg-violet-500/5 border border-violet-500/10 text-violet-200/70 hover:bg-violet-500/10 transition-colors cursor-default">
                                     {skill}
                                 </span>
                             ))}
                        </div>
                    </div>

                    <div className="h-px bg-white/5 ml-[3.5rem]"></div>

                    {/* Domain 3 */}
                    <div className="group">
                        <div className="flex items-center gap-4 mb-3">
                             <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-300 group-hover:bg-indigo-500/20 transition-colors shrink-0">
                                <Code size={18} />
                             </div>
                            <span className="font-medium text-white/90 text-lg">Engineering</span>
                        </div>
                         <div className="flex flex-wrap gap-2 pl-[3.5rem]">
                             {['Python', 'C++', 'Docker', 'Kubernetes', 'AWS SageMaker', 'MLOps'].map(skill => (
                                 <span key={skill} className="text-xs px-2.5 py-1 rounded bg-indigo-500/5 border border-indigo-500/10 text-indigo-200/70 hover:bg-indigo-500/10 transition-colors cursor-default">
                                     {skill}
                                 </span>
                             ))}
                        </div>
                    </div>
                </div>
            </GlassCard>
        </div>

        {/* Visual / Stats Column */}
        <div className="md:col-span-6 space-y-6">
            <GlassCard className="!p-0 overflow-hidden h-[400px]">
                <Vision3D />
            </GlassCard>

            <div className="grid grid-cols-2 gap-4">
                 <GlassCard className="!p-6 text-center group hover:bg-white/5 transition-colors">
                    <div className="text-4xl font-semibold text-white group-hover:text-indigo-300 transition-colors">4+</div>
                    <div className="text-[10px] uppercase tracking-wider text-white/40 mt-2">Years Research</div>
                 </GlassCard>
                 <GlassCard className="!p-6 text-center group hover:bg-white/5 transition-colors">
                    <div className="text-4xl font-semibold text-white group-hover:text-teal-300 transition-colors">∞</div>
                    <div className="text-[10px] uppercase tracking-wider text-white/40 mt-2">GPU Hours</div>
                 </GlassCard>
            </div>
        </div>
      </div>
    </section>
  );
};