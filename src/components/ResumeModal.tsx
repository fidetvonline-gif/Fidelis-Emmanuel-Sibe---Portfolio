import React from 'react';
import { X, Download, Printer, ArrowLeft, Mail, MapPin, Globe, Award, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/site';
import { skillsData } from '../data/skills';
import { experienceData } from '../data/experience';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl my-auto rounded bg-[#0A0A0A] border border-[#262626] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Sticky Action Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0F0F0F] border-b border-[#262626] shrink-0">
          <button
            onClick={onClose}
            className="text-xs font-mono text-[#AAA] hover:text-white flex items-center gap-1.5 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 text-[#BEF264]" />
            <span>Close Resume</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded bg-[#0A0A0A] border border-[#262626] hover:border-[#BEF264] text-white font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-[#BEF264]" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded bg-[#0A0A0A] border border-[#262626] text-[#AAA] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Body */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 bg-[#0A0A0A] text-[#AAA] font-sans">
          
          {/* Resume Header */}
          <div className="border-b border-[#262626] pb-6 space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
              {siteData.name}
            </h1>
            <p className="text-[#BEF264] font-mono text-base font-bold uppercase tracking-wider">
              {siteData.title}
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-[#888] pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#666]" />
                {siteData.location}
              </span>
              <span>•</span>
              <a href={`mailto:${siteData.email}`} className="text-[#BEF264] hover:underline">
                {siteData.email}
              </a>
              <span>•</span>
              <a href="tel:08124323608" className="hover:text-white">
                Call: 08124323608
              </a>
              <span>•</span>
              <a href="https://wa.me/2348108889805" target="_blank" rel="noopener noreferrer" className="text-[#BEF264] hover:underline font-bold">
                WhatsApp: 08108889805
              </a>
              <span>•</span>
              <a href={siteData.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                github.com/fidetvonline-gif
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-[10px] font-mono uppercase font-bold text-[#BEF264] tracking-[0.2em]">
              Professional Summary
            </h2>
            <p className="text-sm text-[#AAA] leading-relaxed font-sans">
              Software Engineer and Web Developer with hands-on expertise building production-ready digital products, web applications, student platforms, digital media streaming portals, and AI-powered tools. Proven winner at the Google Build with AI Uyo Challenge. Proficient in React, Next.js, TypeScript, PHP, Node.js, PostgreSQL, Supabase, and generative AI APIs.
            </p>
          </div>

          {/* Key Achievements */}
          <div className="space-y-3 p-4 rounded bg-[#0F0F0F] border border-[#262626]">
            <h2 className="text-[10px] font-mono uppercase font-bold text-[#BEF264] tracking-[0.2em] flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#BEF264]" />
              Key Recognition & Honors
            </h2>
            <div className="text-xs text-[#AAA] space-y-1">
              <div className="font-bold text-white">Winner — Google Build with AI Uyo Challenge (2024)</div>
              <p className="text-[#888]">Designed and built Attendix (Biometric Attendance & Intelligent Analytics platform) using WebAuthn and Gemini generative analytics.</p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-[10px] font-mono uppercase font-bold text-[#BEF264] tracking-[0.2em]">
              Experience & Professional Initiatives
            </h2>
            
            <div className="space-y-5">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-white">{exp.role} — <span className="text-[#BEF264]">{exp.organization}</span></span>
                    <span className="font-mono text-xs text-[#888]">{exp.period}</span>
                  </div>
                  <p className="text-xs text-[#AAA] leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-[10px] font-mono uppercase font-bold text-[#BEF264] tracking-[0.2em]">
              Education
            </h2>
            <div className="text-xs text-[#AAA]">
              <div className="font-bold text-white">{siteData.education.degree}</div>
              <div className="text-[#888]">{siteData.education.institution} • {siteData.education.location}</div>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-2">
            <h2 className="text-[10px] font-mono uppercase font-bold text-[#BEF264] tracking-[0.2em]">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#AAA]">
              <div><strong className="text-white font-sans">Languages:</strong> JavaScript, TypeScript, PHP, SQL, HTML, CSS</div>
              <div><strong className="text-white font-sans">Frontend:</strong> React, Next.js, Tailwind CSS</div>
              <div><strong className="text-white font-sans">Backend & DB:</strong> Node.js, Express, PHP, PostgreSQL, Supabase, Firebase</div>
              <div><strong className="text-white font-sans">AI & Cloud:</strong> Gemini API, WebAuthn, Vercel, Git, GitHub</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
