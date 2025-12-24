import React from 'react';
import { GlassCard } from './GlassCard';
import { Presenter3D } from './Presenter3D';
import { Award, BadgeCheck, BookOpen, ExternalLink } from 'lucide-react';

interface Certification {
    id: string;
    title: string;
    issuer: string;
    date: string;
    credentialId?: string;
    icon: React.ReactNode;
    color: string;
}

const certs: Certification[] = [
    {
        id: '1',
        title: 'Deep Learning Specialization',
        issuer: 'DeepLearning.AI',
        date: 'Issued Oct 2023',
        credentialId: 'DL-84920',
        icon: <BookOpen size={24} />,
        color: 'text-indigo-400'
    },
    {
        id: '2',
        title: 'AWS Certified Machine Learning',
        issuer: 'Amazon Web Services',
        date: 'Issued Jan 2024',
        credentialId: 'AWS-ML-291',
        icon: <BadgeCheck size={24} />,
        color: 'text-orange-400'
    },
    {
        id: '3',
        title: 'TensorFlow Developer',
        issuer: 'Google Developers',
        date: 'Issued Nov 2023',
        credentialId: 'G-TF-992',
        icon: <BadgeCheck size={24} />,
        color: 'text-teal-400'
    },
    {
        id: '4',
        title: 'Best Research Paper Award',
        issuer: 'UoA Grad Symposium',
        date: 'Awarded Dec 2024',
        icon: <Award size={24} />,
        color: 'text-yellow-400'
    }
];

export const Certifications: React.FC = () => {
    return (
        <section>
             <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                <div>
                    <h2 className="text-3xl font-medium tracking-tight text-white mb-2">Credentials & Awards</h2>
                    <p className="text-white/50 max-w-xl">
                        Industry-recognized certifications and academic honors reflecting technical mastery.
                    </p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Visual Side (3D Model) - Takes up 5 columns */}
                <div className="lg:col-span-5 h-full min-h-[400px]">
                    <Presenter3D />
                </div>

                {/* Content Side - Takes up 7 columns */}
                <div className="lg:col-span-7 grid grid-cols-1 gap-4">
                    {certs.map((cert, index) => (
                        <GlassCard key={cert.id} delay={index * 0.1} className="!p-6 group border-l-4 border-l-transparent hover:border-l-indigo-500 transition-all">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-center gap-5">
                                    <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${cert.color} group-hover:bg-white/10 transition-colors`}>
                                        {cert.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white group-hover:text-indigo-200 transition-colors">
                                            {cert.title}
                                        </h3>
                                        <div className="text-sm text-white/50 mt-1">
                                            {cert.issuer}
                                        </div>
                                        <div className="flex items-center gap-3 mt-2 text-xs font-mono text-white/30 uppercase tracking-wider">
                                            <span>{cert.date}</span>
                                            {cert.credentialId && (
                                                <>
                                                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                                    <span>ID: {cert.credentialId}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                
                                <button className="p-2 rounded-full hover:bg-white/10 text-white/20 hover:text-white transition-colors">
                                    <ExternalLink size={18} />
                                </button>
                            </div>
                        </GlassCard>
                    ))}
                    
                    <GlassCard delay={0.5} className="!p-6 !bg-indigo-900/10 border-indigo-500/20 flex items-center justify-between">
                         <div className="text-sm text-indigo-200/80">
                            Looking for a full academic CV?
                         </div>
                         <button className="text-xs font-medium bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-200 px-4 py-2 rounded-full transition-colors border border-indigo-500/30">
                            Download PDF
                         </button>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};