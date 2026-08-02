import React, { useState, useEffect } from 'react';
import { Download, Printer, FileText, CheckCircle2, AlertTriangle, GraduationCap, Briefcase, Award, Code2 } from 'lucide-react';
import { personalData } from '../data/personal';
import { experienceData } from '../data/experience';
import { educationData } from '../data/education';
import { certificationsData } from '../data/certifications';

export const Resume: React.FC = () => {
  const [hasPdfFile, setHasPdfFile] = useState<boolean>(true);

  useEffect(() => {
    // Check if CV PDF file is present
    fetch(personalData.cvPath, { method: 'HEAD' })
      ? fetch(personalData.cvPath, { method: 'HEAD' }).then(res => {
          if (!res.ok) setHasPdfFile(false);
        }).catch(() => setHasPdfFile(false))
      : setHasPdfFile(false);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-20 md:py-28 bg-[#0E0E0E] text-neutral-100 border-b border-[#222222] print:bg-white print:text-black print:p-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (hidden on print) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800 gap-4 print:hidden">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-500 block mb-2">
              10 / CURRICULUM VITAE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">
              CV en <span className="italic font-serif text-neutral-400">línea & descarga</span>
            </h2>
          </div>
          <p className="text-xs uppercase font-mono tracking-[0.2em] text-neutral-500 max-w-xs">
            Resumen estructurado listo para instituciones académicas e industrias
          </p>
        </div>

        {/* Top Control Bar (hidden on print) */}
        <div className="max-w-4xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4 bg-[#141414] p-4 border border-[#262626] print:hidden">
          
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-neutral-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-300">
              Documentación estructurada lista para imprimir
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              id="print-cv-btn"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-wider text-neutral-200 bg-neutral-900 hover:text-white border border-neutral-700 hover:border-neutral-500 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-neutral-400" />
              <span>Imprimir CV</span>
            </button>

            <a
              href={personalData.cvPath}
              download="Moises_Torres_CV.pdf"
              id="download-cv-btn"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-wider text-neutral-900 bg-white hover:bg-neutral-200 transition-colors font-semibold"
            >
              <Download className="w-3.5 h-3.5 text-neutral-900" />
              <span>Descargar PDF</span>
            </a>
          </div>

        </div>

        {/* PDF File Notice if missing */}
        {!hasPdfFile && (
          <div className="max-w-4xl mx-auto mb-8 p-4 bg-neutral-900 border border-amber-500/40 text-amber-300 text-xs flex items-start gap-3 print:hidden">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="font-mono">
              <p className="font-bold uppercase tracking-wider mb-1">Aviso de archivo PDF:</p>
              <p>
                Coloca tu archivo de CV PDF en:
              </p>
              <code className="block mt-1 p-2 bg-black text-amber-200 text-[11px]">
                public/assets/cv/Moises_Torres_CV.pdf
              </code>
            </div>
          </div>
        )}

        {/* CV Preview Document Container (Printable) */}
        <div className="max-w-4xl mx-auto bg-[#141414] print:bg-white print:text-black p-8 sm:p-12 border border-[#262626] space-y-8">
          
          {/* Header */}
          <div className="border-b border-neutral-800 print:border-black pb-6">
            <h1 className="text-3xl sm:text-4xl font-serif text-white print:text-black tracking-tight">
              {personalData.name}
            </h1>
            <p className="text-sm font-mono uppercase tracking-widest text-neutral-400 print:text-black mt-2">
              {personalData.primaryTitle}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-neutral-400 print:text-neutral-700 font-mono">
              <span>{personalData.location}</span>
              <span>—</span>
              <span>Email: {personalData.email}</span>
              <span>—</span>
              <span>GitHub: {personalData.githubUrl}</span>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400 print:text-black border-b border-neutral-800 print:border-black pb-1 mb-3">
              Resumen Profesional
            </h2>
            <p className="text-xs text-neutral-300 print:text-neutral-800 leading-relaxed font-light">
              {personalData.bioSummary}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400 print:text-black border-b border-neutral-800 print:border-black pb-1 mb-4 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experiencia Laboral</span>
            </h2>
            <div className="space-y-4">
              {experienceData.map(exp => (
                <div key={exp.id} className="text-xs space-y-1">
                  <div className="flex justify-between items-baseline text-white print:text-black">
                    <span className="font-serif text-sm">{exp.role} — <span className="font-sans font-light text-neutral-300">{exp.company}</span></span>
                    <span className="font-mono text-[10px] uppercase text-neutral-500 print:text-neutral-600">{exp.startDate} – {exp.endDate}</span>
                  </div>
                  <p className="text-neutral-400 print:text-neutral-700 font-light">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400 print:text-black border-b border-neutral-800 print:border-black pb-1 mb-4 flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Formación Académica</span>
            </h2>
            {educationData.map(edu => (
              <div key={edu.id} className="text-xs space-y-1">
                <div className="flex justify-between text-white print:text-black">
                  <span className="font-serif text-sm">{edu.degree}</span>
                  <span className="font-mono text-[10px] text-neutral-500 print:text-neutral-600">{edu.institution}</span>
                </div>
                {edu.thesisTitle && (
                  <p className="text-neutral-400 print:text-neutral-700 font-light italic">
                    Tesis: "{edu.thesisTitle}"
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400 print:text-black border-b border-neutral-800 print:border-black pb-1 mb-4 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" />
              <span>Certificaciones Oficiales</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certificationsData.map(cert => (
                <div key={cert.id} className="p-3 bg-neutral-900/60 print:bg-slate-50 border border-neutral-800">
                  <p className="font-serif text-white print:text-black">{cert.name}</p>
                  <p className="text-[10px] font-mono text-neutral-500 mt-1">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
