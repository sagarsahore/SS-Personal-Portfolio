import React from 'react';
import { GlassCard } from './GlassCard';
import { Experience as ExperienceType } from '../types';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences: ExperienceType[] = [
    {
        id: '1',
        role: 'Research Scientist (Intern)',
        company: 'DeepMind',
        period: 'Summer 2024',
        description: 'Contributed to the Gemini reasoning team. Developed novel chain-of-thought prompting strategies that improved math benchmarks by 4%.',
        skills: ['Python', 'JAX', 'LLMs', 'Research']
    },
    {
        id: '2',
        role: 'PhD Candidate',
        company: 'Stanford University',
        period: '2022 - Present',
        description: 'Focusing on mechanistic interpretability of transformer models. Advised by Dr. Fei-Fei Li. Publishing widely in NeurIPS and ICLR.',
        skills: ['PyTorch', 'Academic Writing', 'Latex']
    },
    {
        id: '3',
        role: 'Senior Machine Learning Engineer',
        company: 'OpenAI (Residency)',
        period: '2021 - 2022',
        description: 'Worked on infrastructure optimization for distributed training of large-scale vision models. Reduced inference latency by 15%.',
        skills: ['Kubernetes', 'CUDA', 'Distributed Systems']
    },
    {
        id: '4',
        role: 'Salesforce Developer & Consultant',
        company: 'CloudFirst Solutions',
        period: '2019 - 2021',
        description: 'Led a team of developers in architecting complex CRM solutions. Built custom Apex frameworks and integrated external Data Lakes with Salesforce.',
        skills: ['Apex', 'LWC', 'Salesforce Cloud', 'System Architecture']
    },
    {
        id: '5',
        role: 'Data Analyst',
        company: 'TechCorp Global',
        period: '2018 - 2019',
        description: 'Engineered ETL pipelines processing terabytes of log data. Created dashboards for C-suite executives to monitor KPI metrics.',
        skills: ['SQL', 'Tableau', 'Python', 'Spark']
    }
];

export const Experience: React.FC = () => {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-medium tracking-tight text-white mb-8">Professional History</h2>
            
            <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
                {experiences.map((exp, index) => (
                    <div key={exp.id} className="relative pl-8 md:pl-12">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[5px] top-8 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-black/50 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                        
                        <GlassCard delay={index * 0.1} className="!p-6 group hover:bg-white/5">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl font-medium text-white group-hover:text-indigo-300 transition-colors">
                                        {exp.role}
                                    </h3>
                                    <div className="flex items-center gap-4 text-white/60 mt-1 text-sm">
                                        <div className="flex items-center gap-1">
                                            <Briefcase size={14} />
                                            <span>{exp.company}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-mono text-white/40 bg-white/5 px-3 py-1 rounded-full w-fit whitespace-nowrap">
                                    <Calendar size={12} />
                                    {exp.period}
                                </div>
                            </div>
                            
                            <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-2xl">
                                {exp.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map(skill => (
                                    <span key={skill} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/5 text-white/40">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </GlassCard>
                    </div>
                ))}
            </div>
        </div>
    );
};