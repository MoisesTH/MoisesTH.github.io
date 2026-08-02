import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, AlertCircle } from 'lucide-react';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#0E0E0E] text-neutral-100 border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800 gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-500 block mb-2">
              03 / CHRONOLOGY & ROLES
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">
              Experiencia <span className="italic font-serif text-neutral-400">laboral</span>
            </h2>
          </div>
          <p className="text-xs uppercase font-mono tracking-[0.2em] text-neutral-500 max-w-xs">
            Capacitación tecnológica, docencia especializada y gestión de proyectos
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-neutral-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-7 h-7 bg-[#0E0E0E] border border-neutral-600 flex items-center justify-center text-white z-10 hidden sm:flex">
                    <Briefcase className="w-3 h-3 text-neutral-300" />
                  </div>

                  {/* Card Content Wrapper */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] ${isEven ? 'sm:pr-0' : 'sm:pl-0'}`}>
                    <div className="bg-[#141414] p-6 border border-[#262626] hover:border-neutral-500 transition-all">
                      
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest ${
                          item.isCurrent
                            ? 'bg-neutral-800 text-neutral-200 border border-neutral-700'
                            : 'bg-neutral-900 text-neutral-400 border border-neutral-800'
                        }`}>
                          <Calendar className="w-3 h-3 text-neutral-400" />
                          <span>{item.startDate} — {item.endDate}</span>
                        </span>

                        {item.location && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-500">
                            <MapPin className="w-3 h-3" />
                            <span>{item.location}</span>
                          </span>
                        )}
                      </div>

                      {/* Role Title */}
                      <h3 className="text-xl font-serif text-white leading-tight">
                        {item.role}
                      </h3>

                      {/* Company Name */}
                      <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mt-1 mb-3">
                        {item.company}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-neutral-300 mb-4 font-light leading-relaxed">
                        {item.description}
                      </p>

                      {/* Responsibilities List */}
                      {item.responsibilities && item.responsibilities.length > 0 && (
                        <div className="space-y-1.5 mb-4">
                          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                            Responsabilidades Clave:
                          </p>
                          <ul className="space-y-1">
                            {item.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-2 text-xs text-neutral-300 font-light">
                                <CheckCircle2 className="w-3.5 h-3.5 text-neutral-500 mt-0.5 shrink-0" />
                                <span className={resp.includes('[AGREGAR') ? 'font-mono text-amber-300 font-semibold' : ''}>
                                  {resp}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Achievements List */}
                      {item.achievements && item.achievements.length > 0 && (
                        <div className="space-y-1 mb-4 pt-3 border-t border-neutral-800">
                          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-1.5">
                            <Award className="w-3.5 h-3.5 text-neutral-300" />
                            <span>Logros Destacados:</span>
                          </p>
                          <ul className="space-y-1">
                            {item.achievements.map((ach, aIdx) => (
                              <li key={aIdx} className="text-xs text-neutral-400 font-light pl-4 list-disc">
                                <span className={ach.includes('[AGREGAR') ? 'font-mono text-amber-300 font-semibold' : ''}>
                                  {ach}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Skills Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-neutral-900 text-neutral-400 border border-neutral-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Placeholder Warning Badge */}
                      {item.hasPlaceholders && (
                        <div className="mt-3 pt-2 border-t border-dashed border-amber-800/80 flex items-center gap-1.5 text-[11px] text-amber-400">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>Puedes editar detalles en <code className="font-mono bg-neutral-900 px-1 rounded">src/data/experience.ts</code></span>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
