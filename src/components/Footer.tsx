import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { personalData } from '../data/personal';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] text-neutral-400 py-12 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-neutral-700 bg-neutral-900 text-white flex items-center justify-center">
              <Code2 className="w-4 h-4 text-neutral-300" />
            </div>
            <div>
              <p className="font-serif font-light text-white text-base tracking-tight">{personalData.name}</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                Python • Behavioral Science • Tech Instructor
              </p>
            </div>
          </div>

          {/* Copyright & Tech Stack Info */}
          <div className="text-center md:text-left text-xs font-mono text-neutral-500 space-y-1">
            <p>© {currentYear} {personalData.name}. Todos los derechos reservados.</p>
            <p className="text-[10px] text-neutral-600 uppercase tracking-wider">
              Desarrollado con React, Vite, TypeScript, Tailwind CSS y GitHub Actions
            </p>
          </div>

          {/* Back to top Button */}
          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            aria-label="Volver arriba"
            className="p-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors"
            title="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>
      </div>
    </footer>
  );
};
