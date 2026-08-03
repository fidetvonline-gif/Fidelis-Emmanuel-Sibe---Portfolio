import React from 'react';
import { SectionHeading } from './SectionHeading';
import { GraduationCap, Tv, Cpu, Lightbulb, MapPin, CheckCircle } from 'lucide-react';
import { siteData } from '../data/site';
import fidelisAvatar from '../assets/images/fidelis_avatar_1785714025790.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-[#262626] bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="01"
          badge="Engineering Identity"
          title="Building useful digital products from idea to deployment."
          subtitle="Combining software engineering, clean UI execution, database architecture, and emerging AI technologies."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Avatar & Key Highlights Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative rounded overflow-hidden border border-[#262626] bg-[#0F0F0F] p-2 group">
              <img
                src={fidelisAvatar}
                alt="Fidelis Emmanuel Sibe — Software Engineer"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover object-top rounded transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded bg-[#0A0A0A]/95 backdrop-blur-md border border-[#262626] text-left">
                <div className="font-bold text-white font-sans text-base">{siteData.name}</div>
                <div className="text-xs text-[#BEF264] font-mono flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{siteData.location}</span>
                </div>
              </div>
            </div>

            {/* Currently Building Badge Card */}
            <div className="p-5 rounded bg-[#0F0F0F] border border-[#262626] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#BEF264] uppercase tracking-[0.2em] font-bold">
                <Cpu className="w-4 h-4 animate-spin text-[#BEF264]" style={{ animationDuration: '6s' }} />
                <span>Currently Building</span>
              </div>
              <p className="text-sm text-[#AAA] leading-relaxed">
                {siteData.currentlyBuilding}
              </p>
            </div>
          </div>

          {/* Right Narrative & Education/Founder Blocks */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Bio Statements */}
            <div className="space-y-4 text-[#AAA] text-base sm:text-lg leading-relaxed font-sans">
              <p className="text-white font-medium">
                I'm <strong className="text-[#BEF264] font-bold">Fidelis Emmanuel Sibe</strong>, a Software Engineer and Web Developer passionate about building useful, modern, and user-focused digital products.
              </p>
              <p className="text-[#888]">
                My work spans web applications, software systems, student platforms, digital media, dashboards, APIs, authentication systems, database-driven applications, and AI-powered experiences.
              </p>
              <p className="text-[#888]">
                I enjoy taking a problem from an initial idea through interface design, architecture, implementation, testing, and deployment.
              </p>
            </div>

            {/* Structured Education & Founder Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* Education Block */}
              <div className="p-6 rounded bg-[#0F0F0F] border border-[#262626] hover:border-[#BEF264]/40 transition-colors space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded bg-[#1A1A1A] text-[#BEF264] border border-[#262626]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#666] font-bold">Education</span>
                    <h3 className="text-lg font-bold text-white">{siteData.education.degree}</h3>
                  </div>
                </div>
                <p className="text-sm text-[#AAA] font-medium">{siteData.education.institution}</p>
                <p className="text-xs text-[#666]">{siteData.education.location}</p>
              </div>

              {/* Founder Block */}
              <div className="p-6 rounded bg-[#0F0F0F] border border-[#262626] hover:border-[#BEF264]/40 transition-colors space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded bg-[#1A1A1A] text-[#BEF264] border border-[#262626]">
                    <Tv className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#666] font-bold">Founder</span>
                    <h3 className="text-lg font-bold text-white">{siteData.founder.brand}</h3>
                  </div>
                </div>
                <p className="text-sm text-[#888] leading-relaxed">
                  {siteData.founder.description}
                </p>
                <div className="pt-1 flex flex-wrap gap-2 text-xs font-mono text-[#BEF264]">
                  <a href="https://fidetv.online/" target="_blank" rel="noopener noreferrer" className="hover:underline">fidetv.online ↗</a>
                  <span>•</span>
                  <a href="https://spicycircle.fidetv.online/" target="_blank" rel="noopener noreferrer" className="hover:underline">Spicy Circle Hub ↗</a>
                </div>
              </div>

            </div>

            {/* Personal Touch Callout */}
            <div className="p-5 rounded bg-[#0D0D0D] border border-[#262626] flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[#BEF264] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-mono font-bold text-[#BEF264] uppercase tracking-[0.2em]">Personal Touch</span>
                <p className="text-sm text-[#888] mt-1">
                  {siteData.funFact}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
