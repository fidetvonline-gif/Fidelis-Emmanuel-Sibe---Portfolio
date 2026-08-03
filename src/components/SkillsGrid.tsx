import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { skillsData } from '../data/skills';
import { Search, Code, Cpu, Database, Cloud, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';

export const SkillsGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Stack' },
    ...skillsData.map((cat) => ({ id: cat.id, label: cat.name }))
  ];

  const filteredCategories = skillsData
    .map((category) => {
      if (activeCategory !== 'all' && category.id !== activeCategory) {
        return null;
      }

      const filteredSkills = category.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (filteredSkills.length === 0) return null;

      return {
        ...category,
        skills: filteredSkills
      };
    })
    .filter(Boolean);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages':
        return <Code className="w-4 h-4 text-[#BEF264]" />;
      case 'frontend':
        return <Terminal className="w-4 h-4 text-[#BEF264]" />;
      case 'backend':
        return <Cpu className="w-4 h-4 text-[#BEF264]" />;
      case 'database':
        return <Database className="w-4 h-4 text-[#BEF264]" />;
      case 'cloud':
        return <Cloud className="w-4 h-4 text-[#BEF264]" />;
      case 'ai':
        return <Sparkles className="w-4 h-4 text-[#BEF264]" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-[#666]" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-[#262626] bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="02"
          badge="Technical Competencies"
          title="Engineered skills & production stack."
          subtitle="Clean, verified technical capabilities across frontend, backend architecture, databases, APIs, cloud infrastructure, and AI tools."
        />

        {/* Filter Bar & Search */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#262626]">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#BEF264] text-black border border-[#BEF264]'
                    : 'bg-[#0F0F0F] border border-[#262626] text-[#AAA] hover:border-[#BEF264]/40 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#666]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technologies..."
              className="w-full pl-9 pr-4 py-1.5 rounded bg-[#0F0F0F] border border-[#262626] text-xs text-white placeholder-[#555] outline-none focus:border-[#BEF264] transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid per Category */}
        <div className="space-y-12">
          {filteredCategories.map((cat) => (
            <div key={cat!.id} className="space-y-4">
              <div className="flex items-center gap-2 text-white font-sans font-bold text-lg">
                {getCategoryIcon(cat!.id)}
                <h3>{cat!.name}</h3>
                <span className="text-xs font-mono text-[#666] font-normal">({cat!.skills.length})</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat!.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded border transition-all ${
                      skill.highlight
                        ? 'bg-[#0D0D0D] border-[#BEF264]/40 hover:border-[#BEF264]'
                        : 'bg-[#0F0F0F] border-[#262626] hover:border-[#444]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-white text-sm font-sans flex items-center gap-2">
                        <span>{skill.name}</span>
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#BEF264]" title="Core Specialty" />
                        )}
                      </h4>
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[#BEF264] px-2 py-0.5 rounded bg-[#1A1A1A] border border-[#262626]">
                        VERIFIED
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-[#888] leading-relaxed font-sans">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 text-[#666] font-mono text-sm">
              No matching technologies found for "{searchQuery}".
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
