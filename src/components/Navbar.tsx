import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Download } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { personalData } from '../data/personal';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Inicio' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'education', label: 'Formación' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'research', label: 'Investigación' },
  { id: 'teaching', label: 'Docencia' },
  { id: 'resume', label: 'CV' },
  { id: 'contact', label: 'Contacto' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0E0E0E]/90 dark:bg-[#0E0E0E]/95 backdrop-blur-md border-b border-[#222222] py-3'
          : 'bg-[#0E0E0E]/70 dark:bg-[#0E0E0E]/80 backdrop-blur-sm py-4 border-b border-[#1c1c1c]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo - Artistic Flair */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 text-left group focus:outline-none rounded-lg p-1"
          aria-label="Ir al inicio"
          id="nav-brand-logo"
        >
          <div className="w-9 h-9 rounded-none border border-neutral-700 bg-neutral-900 flex items-center justify-center text-white shadow-sm group-hover:border-white transition-colors">
            <Code2 className="w-4 h-4 text-neutral-300 group-hover:text-white" />
          </div>
          <div>
            <span className="block text-xs uppercase tracking-[0.3em] text-neutral-500 font-mono">VOL. 2026 / ARCHIVE</span>
            <span className="block font-serif text-lg tracking-tight text-white group-hover:italic transition-all">
              Moisés Torres <span className="font-serif italic text-neutral-400 font-light">H.</span>
            </span>
          </div>
        </button>

        {/* Desktop Navigation - Artistic Flair */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                id={`nav-link-${item.id}`}
                className={`group flex flex-col text-left px-2 py-1 transition-all ${
                  isActive
                    ? 'text-white border-b-2 border-white'
                    : 'text-neutral-400 hover:text-white hover:line-through'
                }`}
              >
                <span className="text-[9px] font-mono tracking-[0.2em] text-neutral-600 group-hover:text-neutral-400">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-xs uppercase tracking-[0.15em] font-sans">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href={personalData.cvPath}
            download="Moises_Torres_CV.pdf"
            id="nav-download-cv-btn"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.2em] font-sans text-neutral-900 bg-neutral-100 hover:bg-white transition-all border border-neutral-200 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV PDF</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
            className="lg:hidden p-2 border border-neutral-800 text-neutral-300 bg-neutral-900 hover:border-neutral-600 focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0E0E0E] border-b border-[#222222] px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  id={`mobile-nav-link-${item.id}`}
                  className={`text-left px-3 py-2 text-xs uppercase tracking-[0.15em] transition-colors flex items-center gap-2 border border-neutral-900 ${
                    isActive
                      ? 'bg-neutral-800 text-white font-semibold border-neutral-700'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  <span className="text-[10px] text-neutral-600 font-mono">{String(idx + 1).padStart(2, '0')}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <a
            href={personalData.cvPath}
            download="Moises_Torres_CV.pdf"
            id="mobile-download-cv-btn"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs uppercase tracking-[0.2em] text-neutral-900 bg-neutral-100 hover:bg-white transition-colors"
          >
            <Download className="w-4 h-4" />
            Descargar CV en PDF
          </a>
        </div>
      )}
    </header>
  );
};
