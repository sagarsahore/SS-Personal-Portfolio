import React from 'react';
import { GlassCard } from './GlassCard';
import { Experience as ExperienceType } from '../types';
import { Briefcase, Calendar, MapPin, ArrowUpRight } from 'lucide-react';

const experiences: ExperienceType[] = [
    {
        id: '1',
        role: 'Research Scientist (Intern)',
        company: 'DeepMind',
        period: '2024',
        description: 'Contributed to the Gemini reasoning team. Developed novel chain-of-thought prompting strategies that improved math benchmarks by 4%. Investigated sparse autoencoders for feature visualization.',
        skills: ['Python', 'JAX', 'LLMs', 'Research']
    },
    {
        id: '2',
        role: 'PhD Candidate',
        company: 'Stanford University',
        period: '2022 — Present',
        description: 'Focusing on mechanistic interpretability of transformer models. Advised by Dr. Fei-Fei Li. Publishing widely in NeurIPS and ICLR. Leading the "Safe AI" reading group.',
        skills: ['PyTorch', 'Academic Writing', 'Latex']
    },
    {
        id: '3',
        role: 'Senior ML Engineer',
        company: 'OpenAI (Residency)',
        period: '2021 — 2022',
        description: 'Worked on infrastructure optimization for distributed training of large-scale vision models. Reduced inference latency by 15% through quantization and kernel fusion techniques.',
        skills: ['Kubernetes', 'CUDA', 'Distributed Systems']
    },
    {
        id: '4',
        role: 'Salesforce Developer',
        company: 'CloudFirst Solutions',
        period: '2019 — 2021',
        description: 'Led a team of developers in architecting complex CRM solutions. Built custom Apex frameworks and integrated external Data Lakes with Salesforce.',
        skills: ['Apex', 'LWC', 'Salesforce Cloud']
    }
];

export const Experience: React.FC = () => {
    return (
        <div className="py-20">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-20">Professional History</h2>
            
            <div className="relative space-y-24">
                {/* Vertical Line */}
                <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent transform md:-translate-x-1/2 hidden md:block"></div>

                {experiences.map((exp, index) => (
                    <div key={exp.id} className={`flex flex-col md:flex-row gap-8 md:gap-24 items-start ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                        
                        {/* Date / Company Side (Sticky-ish look) */}
                        <div className="w-full md:w-1/2 flex md:justify-end">
                            <div className={`text-left ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                <div className="text-6xl font-bold text-zinc-800 tracking-tighter mb-2">{exp.period.split('—')[0].trim()}</div>
                                <h3 className="text-2xl font-semibold text-white">{exp.company}</h3>
                                <div className="text-red-500 font-medium mb-4">{exp.role}</div>
                            </div>
                        </div>

                        {/* Center Dot */}
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-10 h-10 rounded-full bg-[#020204] border border-zinc-800 z-10">
                            <div className="w-2 h-2 rounded-full bg-zinc-500"></div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-1/2">
                            <GlassCard className="!p-8 group hover:border-red-900/30 transition-colors">
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    {exp.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map(skill => (
                                        <span key={skill} className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-400 border border-white/5">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};