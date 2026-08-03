import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { siteData } from '../data/site';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#262626] py-12 text-[#AAA] text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#262626]">
          
          {/* Brand */}
          <div className="space-y-1">
            <a href="#" className="flex items-center gap-2">
              <span className="text-xl font-extrabold text-white tracking-wider font-mono">
                FIDE<span className="text-[#BEF264]">.</span>
              </span>
            </a>
            <p className="text-[10px] text-[#666] font-mono uppercase tracking-wider">
              Software Engineer & Web Developer • Nigeria
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-xs uppercase tracking-wider">
            <a href="#about" className="hover:text-[#BEF264] transition-colors">About</a>
            <a href="#projects" className="hover:text-[#BEF264] transition-colors">Work</a>
            <a href="#skills" className="hover:text-[#BEF264] transition-colors">Skills</a>
            <a href="#experience" className="hover:text-[#BEF264] transition-colors">Experience</a>
            <a href="#contact" className="hover:text-[#BEF264] transition-colors">Contact</a>
          </nav>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={siteData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-[#0F0F0F] border border-[#262626] text-[#AAA] hover:text-white hover:border-[#BEF264] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={siteData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-[#0F0F0F] border border-[#262626] text-[#AAA] hover:text-white hover:border-[#BEF264] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={siteData.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-[#0F0F0F] border border-[#262626] text-[#AAA] hover:text-white hover:border-[#BEF264] transition-colors"
              aria-label="Twitter X"
            >
              <Twitter className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-[#BEF264] text-black hover:bg-[#d4fc79] transition-colors ml-2 font-bold"
              aria-label="Back to Top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[#666] font-mono text-[10px] uppercase tracking-wider">
          <div>
            © {currentYear} Fidelis Emmanuel Sibe. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-[#666]">
            <span>Architected with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
