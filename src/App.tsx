import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsGrid } from './components/SkillsGrid';
import { ProjectGrid } from './components/ProjectGrid';
import { InteractiveDemos } from './components/InteractiveDemos';
import { Achievements } from './components/Achievements';
import { OpenSource } from './components/OpenSource';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { AiAssistantDrawer } from './components/AiAssistantDrawer';
import { ResumeModal } from './components/ResumeModal';
import { Project, projectsData } from './data/projects';

export default function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);
  const [aiDrawerOpen, setAiDrawerOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Handle URL hash changes e.g. #projects/attendix
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#projects/')) {
        const slug = hash.replace('#projects/', '');
        const found = projectsData.find((p) => p.slug === slug);
        if (found) {
          setActiveCaseStudy(found);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenCaseStudy = (project: Project) => {
    setActiveCaseStudy(project);
    window.history.pushState(null, '', `#projects/${project.slug}`);
  };

  const handleCloseCaseStudy = () => {
    setActiveCaseStudy(null);
    if (window.location.hash.startsWith('#projects/')) {
      window.history.pushState(null, '', '#projects');
    }
  };

  const handleOpenLiveDemo = (project: Project) => {
    const el = document.getElementById('interactive-demos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const demos = document.querySelector('section:has(h3:contains("Interactive"))');
      demos?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Primary Top Navigation */}
      <Navbar
        onOpenAiAssistant={() => setAiDrawerOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Page Layout */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* 2. About Section */}
        <About />

        {/* 3. Technical Skills Section */}
        <SkillsGrid />

        {/* 4. Featured Projects Section */}
        <ProjectGrid
          onOpenCaseStudy={handleOpenCaseStudy}
          onOpenLiveDemo={handleOpenLiveDemo}
        />

        {/* 5. Interactive Demo Lab */}
        <div id="interactive-demos">
          <InteractiveDemos />
        </div>

        {/* 6. Credibility & Hackathon Achievements */}
        <Achievements />

        {/* 7. Open Source & Building in Public */}
        <OpenSource />

        {/* 8. Experience Timeline */}
        <ExperienceTimeline />

        {/* 9. Contact CTA & Form */}
        <ContactForm />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Case Study Deep Dive Modal */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={handleCloseCaseStudy}
        onOpenLiveDemo={handleOpenLiveDemo}
      />

      {/* Gemini AI Assistant Drawer */}
      <AiAssistantDrawer
        isOpen={aiDrawerOpen}
        onClose={() => setAiDrawerOpen(false)}
      />

      {/* Full Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </div>
  );
}
