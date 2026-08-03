import React from 'react';
import { SectionHeading } from './SectionHeading';
import { experienceData } from '../data/experience';
import { Briefcase, Tv, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-5 h-5 text-[#BEF264]" />;
      case 'founder':
        return <Tv className="w-5 h-5 text-[#BEF264]" />;
      case 'education':
        return <GraduationCap className="w-5 h-5 text-[#BEF264]" />;
      default:
        return <Briefcase className="w-5 h-5 text-[#BEF264]" />;
    }
  };

  return (
    <section id="experience" className="py-20 border-b border-[#262626] bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="05"
          badge="Professional Path"
          title="Engineering & entrepreneurial experience."
          subtitle="Verified timeline spanning software development, digital media founder initiatives, and computer science education."
        />

        {/* Timeline Line & Items */}
        <div className="relative border-l border-[#262626] ml-4 md:ml-8 space-y-12 pl-6 sm:pl-10">
          
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[37px] sm:-left-[53px] top-1 p-2 rounded bg-[#0A0A0A] border border-[#262626] shadow-md group-hover:border-[#BEF264] transition-colors">
                {getIcon(exp.type)}
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-7 rounded bg-[#0F0F0F] border border-[#262626] hover:border-[#BEF264]/60 transition-all space-y-4">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#BEF264] uppercase tracking-[0.2em]">
                      {exp.role}
                    </span>
                    <h3 className="text-xl font-bold text-white font-sans mt-0.5">
                      {exp.organization}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-[#888]">
                    <span className="flex items-center gap-1 bg-[#0A0A0A] px-3 py-1 rounded border border-[#262626] text-[#BEF264]">
                      <Calendar className="w-3.5 h-3.5 text-[#BEF264]" />
                      {exp.period}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1 hidden sm:flex text-[#666]">
                        <MapPin className="w-3.5 h-3.5 text-[#666]" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-[#AAA] leading-relaxed font-sans">
                  {exp.description}
                </p>

                {/* Highlights list */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="space-y-2 pt-1">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-[#AAA]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#BEF264] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded bg-[#0A0A0A] border border-[#262626] text-[10px] font-mono text-[#AAA]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
