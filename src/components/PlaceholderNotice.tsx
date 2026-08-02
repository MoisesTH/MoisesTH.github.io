import React, { useState } from 'react';
import { AlertCircle, ChevronDown, ChevronUp, FileCode, CheckCircle2 } from 'lucide-react';

export const PlaceholderNotice: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const placeholders = [
    { label: "Correo Electrónico", key: "[CORREO ELECTRÓNICO]", file: "src/data/personal.ts" },
    { label: "URL de GitHub", key: "[URL DE GITHUB]", file: "src/data/personal.ts" },
    { label: "URL de LinkedIn", key: "[URL DE LINKEDIN]", file: "src/data/personal.ts" },
    { label: "Fechas de Experiencia / Puesto", key: "[AGREGAR FECHA / PUESTO]", file: "src/data/experience.ts" },
    { label: "Fechas / URLs de Certificaciones", key: "[AGREGAR FECHA / URL]", file: "src/data/certifications.ts" },
    { label: "Archivo PDF de CV", key: "public/assets/cv/Moises_Torres_CV.pdf", file: "public/assets/cv/" }
  ];

  return (
    <div className="bg-amber-500/10 border-b border-amber-500/20 text-amber-900 dark:text-amber-200 text-xs px-4 py-2 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
          <span>
            <strong>Guía de Configuración:</strong> La página incluye marcadores como <code className="bg-amber-500/20 px-1 py-0.5 rounded text-amber-800 dark:text-amber-300 font-mono">[URL DE GITHUB]</code> listos para personalizar en la carpeta <code className="bg-amber-500/20 px-1 py-0.5 rounded font-mono">src/data/</code>.
          </span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 font-medium text-amber-700 dark:text-amber-300 hover:underline shrink-0 ml-2"
          aria-expanded={isOpen}
          id="toggle-placeholder-guide"
        >
          {isOpen ? "Ocultar detalles" : "Ver lista de marcadores"}
          {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {isOpen && (
        <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-amber-500/20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {placeholders.map((item, index) => (
            <div key={index} className="flex items-start gap-2 bg-white/60 dark:bg-slate-900/60 p-2 rounded border border-amber-500/20">
              <FileCode className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-slate-800 dark:text-slate-200">{item.label}</p>
                <p className="font-mono text-[10px] text-amber-700 dark:text-amber-300">{item.key}</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 italic">Archivo: {item.file}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
