import React from 'react';
import { GlassCard } from './GlassCard.jsx';
import { Brain, Network, Scale, Copy, ExternalLink, Check } from 'lucide-react';

const publications = [
  {
    id: '1',
    title: 'Stochastic Latent Flows: Unifying Diffusion Models and GANs',
    conference: 'ICLR 2025',
    year: 2025,
    authors: ['Aether, J.', 'Sutskever, I.', 'Hinton, G.'],
    status: 'Under Review',
    link: '#',
    bibtex: '@inproceedings{aether2025stochastic, ...}'
  },
  {
    id: '2',
    title: 'Causal Alignment in Large Language Models',
    conference: 'NeurIPS 2024',
    year: 2024,
    authors: ['Aether, J.', 'Ng, A.'],
    status: 'Published',
    impactFactor: 'Oral Presentation',
    link: '#',
    bibtex: '@inproceedings{aether2024causal, ...}'
  },
  {
    id: '3',
    title: 'Energy-Efficient Inference on Edge Devices via Quantization',
    conference: 'CVPR 2024',
    year: 2024,
    authors: ['Aether, J.', 'LeCun, Y.'],
    status: 'Published',
    link: '#',
    bibtex: '@inproceedings{aether2024energy, ...}'
  }
];

const CopyButton = ({ text }) => {
  const [copied, setCopied] = React.useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      onClick={handleCopy}
      className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/50 hover:text-white"
      title="Copy BibTeX"
    >
      {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
    </button>
  );
};

export const BentoGrid = () => {
  return (
    <div className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div>
                <h2 className="text-3xl font-medium tracking-tight text-white mb-2">Research Focus</h2>
                <p className="text-white/50 max-w-xl">
                    Investigating the fundamental boundaries of artificial cognition through three core pillars.
                </p>
            </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard delay={0.1}>
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6 text-indigo-300">
            <Brain size={24} />
          </div>
          <h3 className="text-xl font-medium text-white mb-3">Generative Modeling</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Developing novel loss functions for diffusion processes to enhance sample fidelity while reducing inference compute by order of magnitudes.
          </p>
        </GlassCard>

        <GlassCard delay={0.2}>
          <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center mb-6 text-teal-300">
            <Network size={24} />
          </div>
          <h3 className="text-xl font-medium text-white mb-3">Neural Architectures</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Exploring sparse mixture-of-experts (MoE) models and non-transformer backbones to solve the long-context memory retrieval bottleneck.
          </p>
        </GlassCard>

        <GlassCard delay={0.3}>
          <div className="w-12 h-12 rounded-2xl bg-violet-500/20 flex items-center justify-center mb-6 text-violet-300">
            <Scale size={24} />
          </div>
          <h3 className="text-xl font-medium text-white mb-3">Algorithmic Ethics</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Formal verification methods for mechanistic interpretability to ensure alignment in autonomous agentic systems.
          </p>
        </GlassCard>
      </div>

      <div className="mt-24">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-medium tracking-tight text-white">Selected Publications</h2>
            <div className="hidden md:block h-px flex-1 bg-white/10 mx-8"></div>
            <span className="text-xs font-mono text-white/40">LAST UPDATED: Q1 2025</span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {publications.map((pub, index) => (
            <GlassCard key={pub.id} delay={0.1 * index} className="!p-6 !rounded-[1.5rem] flex flex-col md:flex-row gap-6 md:items-center justify-between group cursor-default">
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap gap-3 items-center">
                    <span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">
                        {pub.conference}
                    </span>
                    {pub.status === 'Under Review' && (
                        <span className="text-xs font-mono text-amber-300 bg-amber-500/10 px-2 py-1 rounded flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                            Under Review
                        </span>
                    )}
                    {pub.impactFactor && (
                        <span className="text-xs font-mono text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded">
                            {pub.impactFactor}
                        </span>
                    )}
                </div>
                <h3 className="text-lg font-medium text-white group-hover:text-indigo-200 transition-colors">
                  {pub.title}
                </h3>
                <p className="text-sm text-white/50">
                  {pub.authors.map((author, i) => (
                    <span key={i} className={author.includes('Aether') ? 'text-white' : ''}>
                      {author}{i < pub.authors.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
              </div>
              
              <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                <CopyButton text={pub.bibtex} />
                <a 
                  href={pub.link} 
                  className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/50 hover:text-white"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};