import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';
import { Project, projectsData } from '../data/projects';

interface ProjectGridProps {
  onOpenCaseStudy: (project: Project) => void;
  onOpenLiveDemo?: (project: Project) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ onOpenCaseStudy, onOpenLiveDemo }) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & Biometrics' },
    { id: 'media', label: 'Digital Media' },
    { id: 'student', label: 'Student Platforms' }
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'ai') return project.technologies.includes('AI') || project.technologies.includes('Gemini') || project.slug === 'attendix';
    if (filterCategory === 'media') return project.slug === 'fide-tv';
    if (filterCategory === 'student') return project.slug === 'global-student-network' || project.slug === 'fedpoly-student-platform' || project.slug === 'attendix';
    return true;
  });

  return (
    <section id="projects" className="py-20 border-b border-[#262626] bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="03"
          badge="Featured Work"
          title="Digital products built for real users."
          subtitle="Explore flagship software products, student advocacy platforms, digital media ecosystems, and AI-powered web solutions."
        />

        {/* Filter Pills */}
        <div className="mb-10 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-4 py-2 rounded text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                filterCategory === cat.id
                  ? 'bg-[#BEF264] text-black border border-[#BEF264]'
                  : 'bg-[#0F0F0F] border border-[#262626] text-[#AAA] hover:border-[#BEF264]/40 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onOpenCaseStudy={onOpenCaseStudy}
              onOpenLiveDemo={onOpenLiveDemo}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
