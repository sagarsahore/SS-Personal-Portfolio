import React from 'react';
import { GlassCard } from './GlassCard';
import { Vision3D } from './Vision3D';
import { Eye, Scan, Code, Layers, ArrowRight, Cloud, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
        
        {/* Main Narrative */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-white mb-6">
                The Architect
            </h2>
            <div className="prose prose-invert prose-lg text-white/60 font-light leading-relaxed">
                <p className="mb-4">
                I am a Computer Vision Engineer standing at the intersection of biological intuition and synthetic reasoning. 
                My work is driven by a singular question: <span className="text-red-400">How do we instill true visual understanding into machines?</span>
                </p>
                <p className="mb-4">
                While my academic focus lies in mechanistic interpretability—peeling back the layers of billion-parameter transformers—my 
                engineering soul loves building <span className="text-white font-medium">scalable perception systems</span>.
                </p>
            </div>
             <button 
                onClick={() => navigate('/about')}
                className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 font-medium transition-colors group focus:outline-none px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 w-fit mt-4"
            >
                <span className="uppercase tracking-widest text-xs font-mono">Explore Full Biography</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

           {/* Stats Cards - Expanded to 4 blocks */}
           <div className="grid grid-cols-2 gap-4">
                 <GlassCard className="!p-6 text-center group hover:bg-white/5 transition-colors border-t-4 border-t-red-500/50">
                    <div className="text-4xl font-semibold text-white group-hover:text-red-400 transition-colors">4+</div>
                    <div className="text-[10px] uppercase tracking-wider text-white/40 mt-2">Years Research</div>
                 </GlassCard>
                 <GlassCard className="!p-6 text-center group hover:bg-white/5 transition-colors border-t-4 border-t-indigo-500/50">
                    <div className="text-4xl font-semibold text-white group-hover:text-red-400 transition-colors">∞</div>
                    <div className="text-[10px] uppercase tracking-wider text-white/40 mt-2">GPU Hours</div>
                 </GlassCard>
                 {/* New: Superbadges block */}
                 <GlassCard className="!p-6 text-center group hover:bg-white/5 transition-colors border-t-4 border-t-amber-500/50">
                    <div className="text-4xl font-semibold text-white group-hover:text-amber-400 transition-colors">12</div>
                    <div className="text-[10px] uppercase tracking-wider text-white/40 mt-2">Superbadges</div>
                 </GlassCard>
                 {/* New: Double Range block */}
                 <GlassCard className="!p-6 text-center group hover:bg-white/5 transition-colors border-t-4 border-t-emerald-500/50">
                    <div className="text-4xl font-semibold text-white group-hover:text-emerald-400 transition-colors">Double</div>
                    <div className="text-[10px] uppercase tracking-wider text-white/40 mt-2">Range</div>
                 </GlassCard>
            </div>
        </div>

        {/* Visual Column */}
        <div className="h-full w-full">
            <GlassCard className="!p-0 overflow-hidden h-[400px] lg:h-[500px] relative w-full">
                <Vision3D />
                 <div className="absolute top-4 right-4 pointer-events-none">
                    <div className="flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">System Active</span>
                    </div>
                </div>
            </GlassCard>
        </div>
      </div>

      {/* Technical Arsenal Grid */}
      <div>
        <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
            <div className="p-2 bg-red-500/10 rounded-lg text-red-500 border border-red-500/20">
                <Scan size={24} />
            </div>
            <h3 className="text-2xl font-semibold text-white tracking-wide">Technical Arsenal</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. Deep Learning */}
            <GlassCard className="!p-6 flex flex-col justify-between group hover:bg-white/[0.03] transition-all duration-300">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="text-indigo-400 bg-indigo-500/10 p-2 rounded-lg border border-indigo-500/20"><Layers size={20} /></div>
                        <h4 className="font-medium text-white">Deep Learning</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {['PyTorch', 'JAX', 'TensorFlow', 'Transformers', 'Diffusion', 'CUDA'].map(skill => (
                            <span key={skill} className="text-[11px] px-2 py-1 rounded bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-colors cursor-default hover:border-indigo-500/30">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </GlassCard>

             {/* 2. Computer Vision */}
            <GlassCard className="!p-6 flex flex-col justify-between group hover:bg-white/[0.03] transition-all duration-300">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="text-teal-400 bg-teal-500/10 p-2 rounded-lg border border-teal-500/20"><Eye size={20} /></div>
                        <h4 className="font-medium text-white">Computer Vision</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                         {['Semantic Seg.', '3D Reconstruction', 'NeRFs', 'Object Detection', 'SLAM', 'OpenCV'].map(skill => (
                             <span key={skill} className="text-[11px] px-2 py-1 rounded bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-colors cursor-default hover:border-teal-500/30">
                                 {skill}
                             </span>
                         ))}
                    </div>
                </div>
            </GlassCard>

             {/* 3. Engineering */}
             <GlassCard className="!p-6 flex flex-col justify-between group hover:bg-white/[0.03] transition-all duration-300">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="text-rose-400 bg-rose-500/10 p-2 rounded-lg border border-rose-500/20"><Code size={20} /></div>
                        <h4 className="font-medium text-white">Engineering</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                         {['Python', 'C++', 'Docker', 'Kubernetes', 'AWS SageMaker', 'MLOps', 'Redis'].map(skill => (
                             <span key={skill} className="text-[11px] px-2 py-1 rounded bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-colors cursor-default hover:border-rose-500/30">
                                 {skill}
                             </span>
                         ))}
                    </div>
                </div>
            </GlassCard>

             {/* 4. Salesforce (NEW) */}
             <GlassCard className="!p-6 flex flex-col justify-between group hover:bg-white/[0.03] transition-all duration-300">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="text-sky-400 bg-sky-500/10 p-2 rounded-lg border border-sky-500/20"><Cloud size={20} /></div>
                        <h4 className="font-medium text-white">Salesforce</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                         {['Apex', 'LWC', 'Einstein AI', 'CRM Analytics', 'SOQL/SOSL', 'Sales Cloud', 'Flows'].map(skill => (
                             <span key={skill} className="text-[11px] px-2 py-1 rounded bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-colors cursor-default hover:border-sky-500/30">
                                 {skill}
                             </span>
                         ))}
                    </div>
                </div>
            </GlassCard>

        </div>
      </div>
    </section>
  );
};