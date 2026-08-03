import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { useGithubRepos } from '../hooks/useGithubRepos';
import { Github, Star, GitFork, ExternalLink, Code2, RefreshCw, CheckCircle2, Search, Globe } from 'lucide-react';

export const OpenSource: React.FC = () => {
  const {
    username,
    profileUrl,
    publicReposCount,
    followersCount,
    repos,
    primaryLanguages,
    loading,
    lastSynced,
    refresh
  } = useGithubRepos('fidetvonline-gif');

  const [searchQuery, setSearchQuery] = useState('');

  const filteredRepos = repos.filter((r) =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (r.description && r.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (r.language && r.language.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (r.topics && r.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <section id="opensource" className="py-20 border-b border-[#262626] bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="04"
          badge="Live GitHub Repositories"
          title="Building in Public."
          subtitle="Real-time synchronized public repositories from GitHub. Any project uploaded to GitHub appears here instantly."
        />

        {/* Live Sync Banner & Header */}
        <div className="p-6 sm:p-8 rounded bg-[#0F0F0F] border border-[#262626] mb-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded bg-[#0A0A0A] border border-[#262626] text-white">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-sans flex items-center gap-2">
                    @{username}
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#BEF264]/10 border border-[#BEF264]/30 text-[#BEF264] text-[10px] font-mono font-bold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BEF264] animate-pulse" />
                      Live Sync Active
                    </span>
                  </h3>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#888] pt-1">
                    <span>{publicReposCount} Public Repositories</span>
                    <span>•</span>
                    <span>{followersCount} Followers</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#AAA] font-sans">
                Directly connected to the GitHub API (`api.github.com`). Newly pushed repositories and changes trigger immediate portfolio updates.
              </p>
            </div>

            {/* Language Breakdown */}
            <div className="md:col-span-6 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#888]">Language Ratios (Live Calculated):</span>
                <button
                  onClick={() => refresh()}
                  disabled={loading}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0A0A0A] border border-[#262626] hover:border-[#BEF264] text-xs font-mono text-white hover:text-[#BEF264] transition-all disabled:opacity-50"
                  title="Click to sync latest GitHub repositories now"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-[#BEF264] ${loading ? 'animate-spin' : ''}`} />
                  <span>{loading ? 'Syncing...' : 'Sync Now'}</span>
                </button>
              </div>

              {/* Progress Bar */}
              <div className="h-2 w-full bg-[#0A0A0A] rounded overflow-hidden flex border border-[#262626]">
                {primaryLanguages.map((lang, idx) => (
                  <div
                    key={idx}
                    style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                {primaryLanguages.map((lang, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[#AAA]">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: lang.color }} />
                    <span>{lang.name} ({lang.percentage}%)</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sync Time & Search bar */}
          <div className="pt-4 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#888] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#BEF264]" />
              <span>
                {lastSynced
                  ? `Last synced with GitHub at ${lastSynced.toLocaleTimeString()}`
                  : 'Connected to GitHub REST API'}
              </span>
            </div>

            {/* Filter Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-3.5 h-3.5 text-[#888] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search repos, languages, tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded bg-[#0A0A0A] border border-[#262626] text-xs text-white placeholder-[#666] focus:outline-none focus:border-[#BEF264] font-mono transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Repositories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRepos.map((repo, idx) => (
            <div
              key={idx}
              className="p-6 rounded bg-[#0F0F0F] border border-[#262626] hover:border-[#BEF264]/60 transition-all space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white font-mono hover:text-[#BEF264] transition-colors flex items-center gap-2 text-base leading-snug"
                  >
                    <Code2 className="w-4 h-4 text-[#BEF264] shrink-0" />
                    <span>{repo.name}</span>
                  </a>

                  <div className="flex items-center gap-3 text-xs font-mono text-[#888] shrink-0">
                    <span className="flex items-center gap-1" title="Stars">
                      <Star className="w-3.5 h-3.5 text-[#BEF264]" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1" title="Forks">
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
                  <span className="text-[10px] text-[#666]">({repo.updatedAt})</span>
                </div>

                <div className="flex items-center gap-3">
                  {repo.homepage && (
                    <a
                      href={repo.homepage.startsWith('http') ? repo.homepage : `https://${repo.homepage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#BEF264] hover:underline flex items-center gap-1 uppercase text-[10px] tracking-wider font-bold"
                    >
                      <Globe className="w-3 h-3" />
                      <span>Live Site</span>
                    </a>
                  )}

                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#AAA] hover:text-white flex items-center gap-1 transition-colors uppercase text-[10px] tracking-wider"
                  >
                    <span>View Code</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <div className="text-center py-12 rounded bg-[#0F0F0F] border border-[#262626] text-[#888] font-mono text-sm">
            No repositories found matching "{searchQuery}".
          </div>
        )}

        {/* GitHub CTA */}
        <div className="mt-10 text-center flex flex-wrap items-center justify-center gap-4">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#0F0F0F] border border-[#262626] text-white font-mono text-xs uppercase tracking-wider font-bold hover:border-[#BEF264] hover:text-[#BEF264] transition-all"
          >
            <Github className="w-4 h-4 text-[#BEF264]" />
            <span>View Profile @{username} on GitHub →</span>
          </a>

          <button
            onClick={() => refresh()}
            disabled={loading}
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#BEF264] text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#a8e045] transition-all disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span>Check For New Uploads Now</span>
          </button>
        </div>

      </div>
    </section>
  );
};
