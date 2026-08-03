import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail, Award, Sparkles, Terminal as TerminalIcon } from 'lucide-react';
import { siteData } from '../data/site';
import { TerminalHero } from './TerminalHero';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const roles = [
    'Software Engineer',
    'Full-Stack Web Developer',
    'AI Product Builder',
    'Digital Product Developer'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = roles[currentRoleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(target.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === target.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(target.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 lg:pb-24 overflow-hidden border-b border-[#262626] bg-gradient-to-br from-[#0D0D0D] via-[#0A0A0A] to-[#050505]">
      {/* Editorial Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#26262615_1px,transparent_1px),linear-gradient(to_bottom,#26262615_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status / Recognition Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#BEF264]/30 bg-[#BEF264]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BEF264] animate-pulse" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#BEF264] flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#BEF264]" />
                Winner — Google Build with AI Uyo Challenge
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-sans leading-[0.9]">
                Hi, I'm <br /><span className="text-white">Fidelis Sibe.</span>
              </h1>
              
              {/* Dynamic Typing Subtitle */}
              <div className="h-9 sm:h-10 flex items-center">
                <span className="text-lg sm:text-xl lg:text-2xl font-mono text-[#BEF264] font-bold tracking-tight">
                  {displayedText}
                  <span className="animate-pulse text-white ml-1">|</span>
                </span>
              </div>
            </div>

            {/* Supporting Paragraphs */}
            <div className="space-y-3 max-w-xl text-[#AAA] text-base sm:text-lg leading-relaxed font-sans">
              <p>
                I build software that turns ideas into useful digital products—from student platforms and media ecosystems to AI-powered applications.
              </p>
              <p className="text-[#888] text-xs sm:text-sm font-sans">
                Full-stack developer focused on performance, product engineering, clean code architecture, and practical AI tools.
              </p>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3 font-sans">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded bg-white text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#BEF264] transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded border border-[#262626] bg-[#111] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:border-[#BEF264] hover:text-[#BEF264] transition-all"
              >
                <span>Let's Talk</span>
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3.5 rounded border border-[#262626] text-[#AAA] font-mono text-xs uppercase tracking-wider flex items-center gap-2 hover:text-white hover:border-[#666] transition-all"
              >
                <Download className="w-3.5 h-3.5 text-[#BEF264]" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 flex items-center gap-4 text-[#888]">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#666]">Connect:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={siteData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded border border-[#262626] bg-[#0F0F0F] text-[#AAA] hover:text-[#BEF264] hover:border-[#BEF264]/40 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={siteData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded border border-[#262626] bg-[#0F0F0F] text-[#AAA] hover:text-[#BEF264] hover:border-[#BEF264]/40 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={siteData.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded border border-[#262626] bg-[#0F0F0F] text-[#AAA] hover:text-[#BEF264] hover:border-[#BEF264]/40 transition-colors"
                  aria-label="Twitter X Profile"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${siteData.email}`}
                  className="p-2 rounded border border-[#262626] bg-[#0F0F0F] text-[#AAA] hover:text-[#BEF264] hover:border-[#BEF264]/40 transition-colors"
                  aria-label="Email Contact"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Hero Right Column — Terminal Code Visual */}
          <div className="lg:col-span-5 w-full">
            <TerminalHero />
          </div>

        </div>
      </div>
    </section>
  );
};
