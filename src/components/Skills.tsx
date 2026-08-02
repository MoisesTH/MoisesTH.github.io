import React, { useState } from 'react';
import { Code, Database, Wrench, Cpu, Cloud, Search, CheckCircle, Sparkles } from 'lucide-react';
import { skillCategoriesData } from '../data/skills';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.FC<{ className?: string }>> = {
    prog: Code,
    'data-stats': Database,
    'dev-tools': Wrench,
    'ai-llm': Cpu,
    'cloud-tech': Cloud
  };

  const filteredCategories = skillCategoriesData.map(cat => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
      return null;
    }

    if (!searchQuery.trim()) {
      return cat;
    }

    const query = searchQuery.toLowerCase();
    const matchingSkills = cat.skills.filter(s =>
      s.name.toLowerCase().includes(query) ||
      (s.level && s.level.toLowerCase().includes(query))
    );

    if (matchingSkills.length === 0) return null;

    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0E0E0E] text-neutral-100 border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800 gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-500 block mb-2">
              06 / TECHNICAL MATRIX
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">
              Habilidades <span className="italic font-serif text-neutral-400">& tecnologías</span>
            </h2>
          </div>
          <p className="text-xs uppercase font-mono tracking-[0.2em] text-neutral-500 max-w-xs">
            Evaluación cualitativa por área de dominio
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="max-w-4xl mx-auto mb-12 space-y-5">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              placeholder="Buscar habilidad (ej. Python, MCMC, AWS, LangChain)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="skills-search-input"
              className="w-full pl-11 pr-4 py-3 text-xs uppercase tracking-widest font-mono bg-[#141414] border border-[#262626] text-white focus:outline-none focus:border-neutral-500 transition-all placeholder:text-neutral-600"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              id="skill-cat-tab-all"
              className={`px-4 py-1.5 text-[10px] font-mono uppercase tracking-widest transition-all ${
                selectedCategory === 'all'
                  ? 'bg-neutral-100 text-neutral-900 font-semibold'
                  : 'bg-[#141414] text-neutral-400 border border-[#262626] hover:text-white hover:border-neutral-700'
              }`}
            >
              Todas las categorías
            </button>
            {skillCategoriesData.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                id={`skill-cat-tab-${cat.id}`}
                className={`px-4 py-1.5 text-[10px] font-mono uppercase tracking-widest transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-neutral-100 text-neutral-900 font-semibold'
                    : 'bg-[#141414] text-neutral-400 border border-[#262626] hover:text-white hover:border-neutral-700'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredCategories.map(cat => {
            if (!cat) return null;
            const IconComp = categoryIcons[cat.id] || Code;

            return (
              <div
                key={cat.id}
                className="bg-[#141414] p-6 border border-[#262626] hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-neutral-800">
                    <div className="w-9 h-9 border border-neutral-700 bg-neutral-900 text-white flex items-center justify-center shrink-0">
                      <IconComp className="w-4 h-4 text-neutral-300" />
                    </div>
                    <div>
                      <h3 className="font-serif text-white text-lg">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-neutral-400 font-light">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Badges List */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.skills.map((skill, sIdx) => {
                      return (
                        <div
                          key={sIdx}
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300"
                        >
                          {skill.isCore && <Sparkles className="w-3 h-3 text-neutral-200 shrink-0" />}
                          <span className="text-white">{skill.name}</span>
                          {skill.level && (
                            <span className="text-[9px] uppercase tracking-wider text-neutral-500 border-l border-neutral-700 pl-2">
                              {skill.level}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
