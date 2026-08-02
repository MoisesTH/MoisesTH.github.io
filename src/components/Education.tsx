import React from 'react';
import { GraduationCap, BookOpen, Award, CheckCircle2, FlaskConical, Cpu } from 'lucide-react';
import { educationData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-[#0E0E0E] text-neutral-100 border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800 gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-500 block mb-2">
              04 / ACADEMIC FOUNDATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">
              Formación <span className="italic font-serif text-neutral-400">académica</span>
            </h2>
          </div>
          <p className="text-xs uppercase font-mono tracking-[0.2em] text-neutral-500 max-w-xs">
            Universidad Nacional Autónoma de México (UNAM)
          </p>
        </div>

        {/* Education List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map(item => (
            <div
              key={item.id}
              className="bg-[#141414] p-6 sm:p-8 border border-[#262626] relative overflow-hidden"
            >
              {/* Highlight Badge Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-800">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-neutral-700 bg-neutral-900 text-white flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-neutral-300" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400 block">
                      {item.institution}
                    </span>
                    <h3 className="text-2xl font-serif text-white tracking-tight">
                      {item.degree}
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 text-[10px] font-mono uppercase tracking-widest text-neutral-300">
                  <FlaskConical className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{item.statusBadge || 'Proyecto de Investigación'}</span>
                </div>
              </div>

              {/* Thesis Spotlight Card */}
              {item.thesisTitle && (
                <div className="bg-neutral-900/80 p-6 border border-neutral-800 space-y-4">
                  <div className="flex items-center gap-2 text-neutral-400 font-mono text-xs uppercase tracking-widest">
                    <BookOpen className="w-4 h-4 text-neutral-300" />
                    <span>Tesis de Investigación Académica:</span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-serif italic text-white leading-snug">
                    "{item.thesisTitle}"
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {item.thesisDescription}
                  </p>

                  {/* Key Topics Grid */}
                  {item.keyTopics && (
                    <div className="pt-4 border-t border-neutral-800">
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-3">
                        Componentes Metodológicos y Teóricos:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.keyTopics.map((topic, tIdx) => (
                          <div key={tIdx} className="flex items-center gap-2 text-xs text-neutral-300 bg-[#141414] p-2.5 border border-neutral-800 font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
