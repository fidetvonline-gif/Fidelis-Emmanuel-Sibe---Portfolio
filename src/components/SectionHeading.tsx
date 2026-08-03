import React from 'react';

interface SectionHeadingProps {
  number?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  badge,
  title,
  subtitle,
  centered = false,
  id,
}) => {
  return (
    <div id={id} className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
        {number && (
          <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#BEF264] bg-[#0F0F0F] border border-[#262626] px-2.5 py-1 rounded">
            {number}
          </span>
        )}
        {badge && (
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#BEF264] bg-[#BEF264]/10 border border-[#BEF264]/30 px-3 py-1 rounded flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BEF264] animate-pulse"></span>
            {badge}
          </span>
        )}
      </div>
      
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-sans leading-[1.05]">
        {title}
      </h2>
      
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#AAA] leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};
