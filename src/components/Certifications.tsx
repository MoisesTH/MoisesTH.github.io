import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle2, ShieldAlert } from 'lucide-react';
import { certificationsData } from '../data/certifications';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-[#0E0E0E] text-neutral-100 border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800 gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-500 block mb-2">
              05 / CREDENTIALS & ACCREDITATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">
              Certificaciones <span className="italic font-serif text-neutral-400">oficiales</span>
            </h2>
          </div>
          <p className="text-xs uppercase font-mono tracking-[0.2em] text-neutral-500 max-w-xs">
            Python Institute & Microsoft Certified Trainer
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificationsData.map(cert => {
            const isPlaceholderDate = cert.issueDate.includes('[AGREGAR');
            const isPlaceholderUrl = cert.credentialUrl.includes('[AGREGAR');

            return (
              <div
                key={cert.id}
                className="bg-[#141414] p-6 border border-[#262626] hover:border-neutral-500 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Issuer */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-neutral-800">
                    <div className="w-9 h-9 border border-neutral-700 bg-neutral-900 text-white flex items-center justify-center font-bold">
                      <Award className="w-4 h-4 text-neutral-300" />
                    </div>

                    <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 ${
                      isPlaceholderDate
                        ? 'bg-neutral-900 text-amber-300 border border-amber-800'
                        : 'bg-neutral-900 text-neutral-400 border border-neutral-800'
                    }`}>
                      <Calendar className="w-3 h-3 inline mr-1 text-neutral-500" />
                      {cert.issueDate}
                    </span>
                  </div>

                  {/* Certification Name */}
                  <h3 className="text-lg font-serif text-white leading-tight mb-1">
                    {cert.name}
                  </h3>

                  {/* Code & Issuer */}
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
                    {cert.issuer} {cert.code ? `• ${cert.code}` : ''}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-neutral-300 font-light leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-neutral-900 text-neutral-400 border border-neutral-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action / Link */}
                <div className="pt-3 border-t border-neutral-800">
                  {isPlaceholderUrl ? (
                    <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono">
                      <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                      <span>Agregar URL en <code className="bg-neutral-900 px-1 rounded">certifications.ts</code></span>
                    </div>
                  ) : (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-sans font-medium text-white hover:line-through"
                    >
                      <span>Verificar credencial</span>
                      <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
