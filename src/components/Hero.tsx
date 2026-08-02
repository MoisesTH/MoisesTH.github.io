import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, Terminal, Cpu, Database, Award, Sparkles } from 'lucide-react';
import { personalData } from '../data/personal';

export const Hero: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex(prev => (prev + 1) % personalData.titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative py-16 md:py-24 lg:py-28 overflow-hidden bg-[#0E0E0E] text-neutral-100 border-b border-[#222222]">
      {/* Editorial Decorative Background Details */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33333315_1px,transparent_1px),linear-gradient(to_bottom,#33333315_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute -right-20 -top-20 text-[260px] font-sans font-black text-white/[0.02] select-none pointer-events-none hidden lg:block">
        UNAM
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Academic & Professional Hybrid Badge - Editorial */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-neutral-800 bg-neutral-900/80 text-[10px] uppercase tracking-[0.3em] font-mono text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 animate-pulse" />
              <span>UNAM • PCEP & PCAP • MCT INSTRUCTOR</span>
            </div>

            {/* Name - Display Serif Typography */}
            <div>
              <span className="block text-[11px] font-mono uppercase tracking-[0.4em] text-neutral-500 mb-2">
                Curriculum Vitae / Portfolio
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light tracking-tight text-white leading-[1.05]">
                Moisés <br />
                <span className="italic font-serif text-neutral-300 pl-2 sm:pl-4">Torres Hernández</span>
              </h1>
            </div>

            {/* Dynamic Rotating Titles */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
              <div className="flex items-center gap-3 border-l-2 border-neutral-700 pl-4 py-1">
                <span className="text-sm sm:text-base font-mono uppercase tracking-[0.2em] text-neutral-300">
                  {personalData.titles[currentTitleIndex]}
                </span>
              </div>
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              Perfil híbrido especializado en <strong className="text-neutral-200 font-normal">desarrollo con Python</strong>, <strong className="text-neutral-200 font-normal">investigación en ciencias del comportamiento</strong> (descuento temporal y modelamiento bayesiano en la UNAM) y <strong className="text-neutral-200 font-normal">capacitación tecnológica</strong>.
            </p>

            {/* Three Primary CTAs - Artistic Flair Style */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                id="hero-cta-projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-sans font-medium text-neutral-950 bg-neutral-100 hover:bg-white transition-all shadow-lg hover:line-through"
              >
                <span>Ver proyectos</span>
                <ArrowRight className="w-4 h-4 text-neutral-950" />
              </button>

              <a
                href={personalData.cvPath}
                download="Moises_Torres_CV.pdf"
                id="hero-cta-download-cv"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-sans font-medium text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 transition-all"
              >
                <Download className="w-4 h-4 text-neutral-400" />
                <span>Descargar CV</span>
              </a>

              <button
                onClick={() => scrollTo('contact')}
                id="hero-cta-contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-sans font-medium text-neutral-400 hover:text-white border border-transparent hover:border-neutral-800 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Contacto</span>
              </button>
            </div>

            {/* Social Links & Contact */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-6 border-t border-neutral-800/80 text-neutral-400 text-xs tracking-wider">
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-social-github"
                className="flex items-center gap-2 hover:text-white transition-colors uppercase font-mono"
                title="GitHub"
              >
                <Github className="w-4 h-4 text-neutral-500" />
                <span>GitHub</span>
              </a>

              <span className="text-neutral-700">•</span>

              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-social-linkedin"
                className="flex items-center gap-2 hover:text-white transition-colors uppercase font-mono"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-neutral-500" />
                <span>LinkedIn</span>
              </a>

              <span className="text-neutral-700">•</span>

              <a
                href={`mailto:${personalData.email}`}
                id="hero-social-email"
                className="flex items-center gap-2 hover:text-white transition-colors uppercase font-mono"
                title="Correo Electrónico"
              >
                <Mail className="w-4 h-4 text-neutral-500" />
                <span className="truncate max-w-[150px] sm:max-w-none">{personalData.email}</span>
              </a>
            </div>

          </div>

          {/* Abstract Code / Research Card Block - Artistic Flair */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-[#141414] border border-[#262626] p-6 text-neutral-200 shadow-2xl">
              
              {/* Header Details */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neutral-600" />
                  <span className="w-2 h-2 rounded-full bg-neutral-600" />
                  <span className="w-2 h-2 rounded-full bg-neutral-600" />
                </div>
                <div className="text-[10px] font-mono tracking-[0.2em] text-neutral-500 uppercase flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-neutral-400" />
                  <span>moises_torres.py</span>
                </div>
              </div>

              {/* Code Graphic */}
              <div className="py-5 font-mono text-xs space-y-2 text-neutral-400 leading-relaxed">
                <p className="text-neutral-500"># Academic & Research System</p>
                <p><span className="text-neutral-200">class</span> <span className="text-white italic">ResearchProfile</span>:</p>
                <p className="pl-4"><span className="text-neutral-300">institution</span> = <span className="text-amber-200/90">"UNAM México"</span></p>
                <p className="pl-4"><span className="text-neutral-300">certifications</span> = [<span className="text-amber-200/90">"PCEP"</span>, <span className="text-amber-200/90">"PCAP"</span>, <span className="text-amber-200/90">"MCT"</span>]</p>
                <p className="pl-4"><span className="text-neutral-300">tech_stack</span> = [<span className="text-amber-200/90">"Python"</span>, <span className="text-amber-200/90">"R"</span>, <span className="text-amber-200/90">"JAGS/MCMC"</span>]</p>
                <div className="my-2 border-t border-neutral-800/60" />
                <p className="text-neutral-500"># Discounting & Decision Models</p>
                <p className="pl-4"><span className="text-neutral-200">def</span> <span className="text-white italic">convex_time_budget</span>(self, data):</p>
                <p className="pl-8 text-neutral-400">fit = <span className="text-neutral-200">mcmc_fit</span>(data, model=<span className="text-amber-200/90">"Hyperbolic"</span>)</p>
                <p className="pl-8 text-neutral-500"><span className="text-neutral-300">return</span> fit.summary()</p>
              </div>

              {/* Badges Footer */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-neutral-800 text-center">
                <div className="bg-neutral-900 p-2.5 border border-neutral-800">
                  <Cpu className="w-4 h-4 mx-auto text-neutral-400 mb-1" />
                  <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-300">Python Dev</p>
                </div>
                <div className="bg-neutral-900 p-2.5 border border-neutral-800">
                  <Database className="w-4 h-4 mx-auto text-neutral-400 mb-1" />
                  <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-300">Bayesian Stats</p>
                </div>
                <div className="bg-neutral-900 p-2.5 border border-neutral-800">
                  <Award className="w-4 h-4 mx-auto text-neutral-400 mb-1" />
                  <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-300">MCT Instructor</p>
                </div>
              </div>

              {/* Watermark detail */}
              <div className="absolute -bottom-3 -right-3 text-[90px] font-serif font-bold text-white/[0.02] pointer-events-none select-none">
                01
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
