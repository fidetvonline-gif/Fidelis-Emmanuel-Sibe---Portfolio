import React, { useEffect } from 'react';
import { Project } from '../data/projects';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { X, ExternalLink, Github, Award, CheckCircle2, AlertTriangle, Lightbulb, ArrowLeft, BookOpen, Layers } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenLiveDemo?: (project: Project) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onOpenLiveDemo }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl my-auto rounded bg-[#0A0A0A] border border-[#262626] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Modal Sticky Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0F0F0F] border-b border-[#262626] shrink-0">
          <button
            onClick={onClose}
            className="text-xs font-mono text-[#AAA] hover:text-white flex items-center gap-1.5 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 text-[#BEF264]" />
            <span>Back to Projects</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-[#BEF264] uppercase tracking-[0.2em] font-bold">
              CASE STUDY // {project.number}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded bg-[#0A0A0A] border border-[#262626] text-[#AAA] hover:text-white hover:border-[#BEF264] transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-10 space-y-12 overflow-y-auto text-[#AAA] font-sans leading-relaxed">
          
          {/* 1. Hero Header */}
          <div className="space-y-6 pb-8 border-b border-[#262626]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[10px] font-bold uppercase text-[#BEF264] bg-[#0F0F0F] border border-[#BEF264]/40 px-3 py-1 rounded tracking-[0.2em]">
                {project.category}
              </span>
              {project.recognition && (
                <span className="font-mono text-[10px] font-bold text-[#BEF264] bg-[#0F0F0F] border border-[#BEF264]/40 px-3 py-1 rounded flex items-center gap-1.5 tracking-[0.2em]">
                  <Award className="w-3.5 h-3.5 text-[#BEF264]" />
                  <span>{project.recognition}</span>
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {project.title}
            </h1>

            <p className="text-lg text-[#AAA] max-w-3xl leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded bg-[#BEF264] hover:bg-[#d4fc79] text-black font-bold font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <button
                  onClick={() => {
                    onClose();
                    onOpenLiveDemo && onOpenLiveDemo(project);
                  }}
                  className="px-5 py-2.5 rounded bg-[#0F0F0F] hover:border-[#BEF264] border border-[#262626] text-[#BEF264] font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2"
                >
                  <Layers className="w-3.5 h-3.5 text-[#BEF264]" />
                  <span>Try Interactive Sandbox</span>
                </button>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded bg-[#0F0F0F] hover:border-[#BEF264] border border-[#262626] text-white font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
            </div>

            {/* Technologies list */}
            <div className="pt-2">
              <span className="text-[10px] font-mono text-[#666] uppercase tracking-[0.2em] font-bold block mb-2">
                Tech Stack & Core APIs:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t, i) => (
                  <span key={i} className="px-3 py-1 rounded bg-[#0F0F0F] border border-[#262626] text-xs font-mono text-[#AAA]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 2. The Context */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#BEF264]" />
              The Context
            </h3>
            <p className="text-[#AAA] leading-relaxed text-base bg-[#0F0F0F] p-5 rounded border border-[#262626]">
              {project.context}
            </p>
          </div>

          {/* 3. Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded bg-[#0F0F0F] border border-[#262626] space-y-3">
              <h4 className="text-lg font-bold text-white flex items-center gap-2 font-sans">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                The Problem
              </h4>
              <p className="text-sm text-[#AAA] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded bg-[#0F0F0F] border border-[#BEF264]/40 space-y-3">
              <h4 className="text-lg font-bold text-[#BEF264] flex items-center gap-2 font-sans">
                <CheckCircle2 className="w-5 h-5 text-[#BEF264]" />
                The Solution
              </h4>
              <p className="text-sm text-[#AAA] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* 4. Architecture Diagram */}
          <ArchitectureDiagram nodes={project.architecture} projectTitle={project.title} />

          {/* 5. Technical Decisions */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 font-sans">
              <span className="w-2 h-2 rounded-full bg-[#BEF264]" />
              Technical Decisions & Architecture Rationale
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.technicalDecisions.map((dec, i) => (
                <div key={i} className="p-5 rounded bg-[#0F0F0F] border border-[#262626] space-y-2">
                  <span className="font-mono text-[10px] uppercase text-[#BEF264] font-bold block tracking-[0.2em]">
                    DECISION 0{i + 1}
                  </span>
                  <h5 className="font-bold text-white text-sm">{dec.title}</h5>
                  <div className="text-xs font-mono text-[#BEF264] bg-[#0A0A0A] p-2 rounded border border-[#262626]">
                    {dec.choice}
                  </div>
                  <p className="text-xs text-[#888] leading-relaxed pt-1">
                    {dec.rationale}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Constraints & Tradeoffs */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 font-sans">
              <span className="w-2 h-2 rounded-full bg-[#BEF264]" />
              Engineering Constraints & Tradeoffs
            </h3>
            <div className="space-y-3">
              {project.constraintsAndTradeoffs.map((item, i) => (
                <div key={i} className="p-4 rounded bg-[#0F0F0F] border border-[#262626] grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-4 font-bold text-white text-sm">
                    {item.topic}
                  </div>
                  <div className="md:col-span-4 text-xs text-red-400 font-mono">
                    <strong className="block text-[10px] text-[#666] uppercase">Constraint:</strong>
                    {item.constraint}
                  </div>
                  <div className="md:col-span-4 text-xs text-[#BEF264] font-mono">
                    <strong className="block text-[10px] text-[#666] uppercase">Tradeoff:</strong>
                    {item.tradeoff}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Results & Verified Metrics */}
          <div className="p-6 rounded bg-[#0F0F0F] border border-[#262626] space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 font-sans">
              <Award className="w-5 h-5 text-[#BEF264]" />
              Verified Results & Impact
            </h3>
            <p className="text-[#AAA] text-sm leading-relaxed">
              {project.outcome}
            </p>

            {project.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {project.metrics.map((m, i) => (
                  <div key={i} className="p-4 rounded bg-[#0A0A0A] border border-[#262626] text-center space-y-1">
                    <div className="text-2xl font-extrabold text-[#BEF264] font-mono">{m.value}</div>
                    <div className="text-xs text-[#AAA] font-sans">{m.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 8. Lessons Learned */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 font-sans">
              <Lightbulb className="w-5 h-5 text-[#BEF264]" />
              Engineering Takeaways & Lessons Learned
            </h3>
            <ul className="space-y-2">
              {project.lessonsLearned.map((lesson, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#AAA]">
                  <CheckCircle2 className="w-4 h-4 text-[#BEF264] shrink-0 mt-0.5" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
