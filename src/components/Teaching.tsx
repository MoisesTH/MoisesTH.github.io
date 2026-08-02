import React from 'react';
import { Presentation, BookOpen, Users, Code, Database, Brain, Cloud, CheckCircle2, Sparkles, PlusCircle } from 'lucide-react';
import { teachingData } from '../data/teaching';

export const Teaching: React.FC = () => {
  const areaIcons: Record<string, React.FC<{ className?: string }>> = {
    Code: Code,
    Database: Database,
    Brain: Brain,
    Cloud: Cloud
  };

  return (
    <section id="teaching" className="py-20 md:py-28 bg-[#0E0E0E] text-neutral-100 border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800 gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-500 block mb-2">
              09 / PEDAGOGY & TECHNICAL INSTRUCTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">
              Docencia & <span className="italic font-serif text-neutral-400">capacitación</span>
            </h2>
          </div>
          <p className="text-xs uppercase font-mono tracking-[0.2em] text-neutral-500 max-w-xs">
            Facilitación pedagógica e instrucción Microsoft Certified Trainer
          </p>
        </div>

        {/* Pedagogical Approach Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-14">
          {teachingData.pedagogicalApproach.map((point, idx) => (
            <div key={idx} className="bg-[#141414] p-5 border border-[#262626] flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
              <p className="text-xs font-light text-neutral-300 leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Teaching Areas Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          {teachingData.areas.map((area, idx) => {
            const IconComp = areaIcons[area.icon] || Code;
            return (
              <div
                key={idx}
                className="bg-[#141414] p-6 border border-[#262626] hover:border-neutral-600 transition-all duration-300 space-y-4"
              >
                <div className="flex items-center gap-3 pb-3 border-b border-neutral-800">
                  <div className="w-9 h-9 border border-neutral-700 bg-neutral-900 text-white flex items-center justify-center shrink-0">
                    <IconComp className="w-4 h-4 text-neutral-300" />
                  </div>
                  <h3 className="text-lg font-serif text-white">
                    {area.title}
                  </h3>
                </div>

                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  {area.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {area.topics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-neutral-900 text-neutral-400 border border-neutral-800"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Courses Table / Catalog with Placeholders */}
        <div className="max-w-5xl mx-auto bg-[#141414] p-6 sm:p-8 border border-[#262626]">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800">
            <h3 className="text-xl font-serif text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-neutral-400" />
              <span>Catálogo de Cursos & Experiencia Docente</span>
            </h3>
            <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
              ACADEMIC CURRICULA
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-neutral-800 text-neutral-400 uppercase font-mono tracking-widest text-[10px]">
                  <th className="py-3 px-3">Curso</th>
                  <th className="py-3 px-3">Institución</th>
                  <th className="py-3 px-3">Duración</th>
                  <th className="py-3 px-3">Temas Principales</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 font-light">
                {teachingData.coursesPlaceholders.map((course, idx) => {
                  const isPlaceholder = course.title.includes('[AGREGAR');

                  return (
                    <tr key={idx} className={isPlaceholder ? 'bg-neutral-900/60' : ''}>
                      <td className="py-3.5 px-3 text-white font-serif">
                        <span className={isPlaceholder ? 'text-amber-400 font-mono text-xs' : ''}>
                          {course.title}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-neutral-300 font-mono text-[11px]">
                        <span className={course.institution.includes('[AGREGAR') ? 'text-amber-400' : ''}>
                          {course.institution}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-neutral-400 font-mono text-[11px]">
                        <span className={course.duration.includes('[AGREGAR') ? 'text-amber-400' : ''}>
                          {course.duration}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-neutral-400 text-xs">
                        <span className={course.topics.includes('[AGREGAR') ? 'text-amber-400 font-mono text-xs' : ''}>
                          {course.topics}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center gap-2 text-xs text-neutral-500 font-mono">
            <PlusCircle className="w-4 h-4 text-neutral-400 shrink-0" />
            <span>Editar o añadir cursos en <code className="bg-neutral-900 px-1 py-0.5 text-neutral-300">src/data/teaching.ts</code></span>
          </div>

        </div>

      </div>
    </section>
  );
};
