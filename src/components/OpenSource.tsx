import React from 'react';
import { SectionHeading } from './SectionHeading';
import { githubProfileData } from '../data/github';
import { Github, Star, GitFork, ExternalLink, Code2, Sparkles } from 'lucide-react';

export const OpenSource: React.FC = () => {
  return (
    <section id="opensource" className="py-20 border-b border-[#262626] bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="04"
          badge="Open Source & Repositories"
          title="Building in Public."
          subtitle="Explore public repositories, code experiments, and open-source contributions."
        />

        {/* GitHub Stats Header */}
        <div className="p-6 sm:p-8 rounded bg-[#0F0F0F] border border-[#262626] mb-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded bg-[#0A0A0A] border border-[#262626] text-white">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-sans">
                  @{githubProfileData.username}
                </h3>
                <span className="text-[10px] font-mono text-[#BEF264] uppercase tracking-wider font-bold">
                  GitHub Developer Profile
                </span>
              </div>
            </div>
            <p className="text-sm text-[#AAA] font-sans">
              Open to collaborative development, software feedback, and architectural discussions.
            </p>
          </div>

          {/* Languages breakdown bar */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#888]">
              <span>Primary Tech Ratios:</span>
              <span className="text-[#BEF264]">Verified Output</span>
            </div>

            {/* Stack progress bar representation */}
            <div className="h-2 w-full bg-[#0A0A0A] rounded overflow-hidden flex border border-[#262626]">
              {githubProfileData.primaryLanguages.map((lang, idx) => (
                <div
                  key={idx}
                  style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              {githubProfileData.primaryLanguages.map((lang, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-[#AAA]">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: lang.color }} />
                  <span>{lang.name} ({lang.percentage}%)</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Repositories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {githubProfileData.recentRepos.map((repo, idx) => (
            <div
              key={idx}
              className="p-6 rounded bg-[#0F0F0F] border border-[#262626] hover:border-[#BEF264]/60 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white font-mono hover:text-[#BEF264] transition-colors flex items-center gap-2"
                  >
                    <Code2 className="w-4 h-4 text-[#BEF264]" />
                    <span>{repo.name}</span>
                  </a>

                  <div className="flex items-center gap-3 text-xs font-mono text-[#888]">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-[#BEF264]" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-[#666]" />
                      {repo.forks}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#AAA] leading-relaxed font-sans">
                  {repo.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {repo.topics.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-[#0A0A0A] border border-[#262626] text-[10px] font-mono text-[#888]">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#262626] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-[#888]">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.languageColor }} />
                  <span>{repo.language}</span>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#AAA] hover:text-[#BEF264] flex items-center gap-1 transition-colors uppercase text-[10px] tracking-wider"
                >
                  <span>View Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-10 text-center">
          <a
            href={githubProfileData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#0F0F0F] border border-[#262626] text-white font-mono text-xs uppercase tracking-wider font-bold hover:border-[#BEF264] hover:text-[#BEF264] transition-all"
          >
            <Github className="w-4 h-4 text-[#BEF264]" />
            <span>View GitHub Profile →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
