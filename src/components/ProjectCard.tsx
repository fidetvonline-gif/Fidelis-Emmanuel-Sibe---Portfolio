import React from 'react';
import { Project } from '../data/projects';
import { ExternalLink, Github, Award, ArrowUpRight, BookOpen, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  onOpenLiveDemo?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy, onOpenLiveDemo }) => {
  return (
    <article className="group rounded bg-[#0D0D0D] border border-[#262626] hover:border-[#BEF264]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between">
      
      {/* Top Media & Banner Header */}
      <div>
        <div className="relative aspect-video w-full overflow-hidden bg-[#0A0A0A]">
          <img
            src={project.image}
            alt={`${project.title} - ${project.category}`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] filter grayscale group-hover:grayscale-0"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80" />

          {/* Project Number Badge */}
          <div className="absolute top-4 left-4 font-mono text-[10px] font-bold text-[#BEF264] bg-[#0A0A0A] border border-[#262626] px-2.5 py-1 rounded uppercase tracking-wider">
            PROJECT {project.number}
          </div>

          {/* Recognition Badge if present */}
          {project.recognition && (
            <div className="absolute top-4 right-4 font-mono text-[10px] font-bold text-[#BEF264] bg-[#0A0A0A] border border-[#BEF264]/40 px-2.5 py-1 rounded flex items-center gap-1.5 uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-[#BEF264]" />
              <span>{project.recognition}</span>
            </div>
          )}
        </div>

        {/* Card Main Body */}
        <div className="p-6 sm:p-7 space-y-4">
          
          {/* Category Tag */}
          <div className="text-[10px] font-mono font-bold text-[#BEF264] tracking-[0.2em] uppercase">
            {project.category}
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white font-sans group-hover:text-[#BEF264] transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-5 h-5 text-[#666] group-hover:text-[#BEF264] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>

          {/* Description */}
          <p className="text-[#AAA] text-sm leading-relaxed font-sans">
            {project.shortDescription}
          </p>

          {/* Problem / Solution Grid Preview */}
          <div className="p-3.5 rounded bg-[#0A0A0A] border border-[#262626] text-xs space-y-2">
            <div>
              <span className="font-mono text-[10px] font-bold text-[#666] uppercase tracking-wider block">Problem:</span>
              <span className="text-[#AAA] line-clamp-2">{project.problem}</span>
            </div>
            <div className="pt-1.5 border-t border-[#262626]">
              <span className="font-mono text-[10px] font-bold text-[#BEF264] uppercase tracking-wider block">Solution:</span>
              <span className="text-[#AAA] line-clamp-2">{project.solution}</span>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-[#1A1A1A] border border-[#262626] text-[10px] font-mono text-[#AAA]"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-6 py-4 bg-[#080808] border-t border-[#262626] flex items-center justify-between text-xs">
        
        {/* Case Study Button */}
        <button
          onClick={() => onOpenCaseStudy(project)}
          className="px-4 py-2 rounded bg-[#BEF264] text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors hover:bg-[#d4fc79]"
        >
          <BookOpen className="w-3.5 h-3.5 text-black" />
          <span>Case Study</span>
        </button>

        {/* Live Links or Status */}
        <div className="flex items-center gap-3 font-mono">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#AAA] hover:text-[#BEF264] flex items-center gap-1 text-xs uppercase tracking-wider transition-colors"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <button
              onClick={() => onOpenLiveDemo && onOpenLiveDemo(project)}
              className="text-[#BEF264] hover:text-white flex items-center gap-1 text-[10px] uppercase tracking-wider bg-[#111] px-2.5 py-1 rounded border border-[#262626]"
            >
              <Layers className="w-3 h-3 text-[#BEF264]" />
              <span>Interactive Lab</span>
            </button>
          )}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] hover:text-white transition-colors"
              aria-label="GitHub Repo"
            >
              <Github className="w-4 h-4" />
            </a>
          ) : (
            <span className="text-[10px] font-mono text-[#555]" title="Repository coming soon">
              Repo Soon
            </span>
          )}
        </div>

      </div>

    </article>
  );
};
