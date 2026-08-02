import React from 'react';
import { Brain, Code, GraduationCap, Users, ShieldCheck, LineChart, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/personal';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: "Desarrollo en Python",
      description: "Programación estructurada, POO, automatización, manipulación de archivos y consumo de modelos de lenguaje con buenas prácticas PEP 8."
    },
    {
      icon: LineChart,
      title: "Análisis & Modelamiento Bayesiano",
      description: "Inferencia jerárquica con MCMC y JAGS aplicada al estudio computacional de la toma de decisiones e impaciencia en tareas Convex Time Budget."
    },
    {
      icon: Users,
      title: "Docencia & Instructor MCT",
      description: "Facilitación pedagógica de conceptos técnicos complejos, diseño curricular y desarrollo de laboratorios prácticos adaptados a diversos niveles."
    },
    {
      icon: ShieldCheck,
      title: "Gestión & Metodologías Ágiles",
      description: "Aplicación de marcos Scrum y principios ágiles para la organización de proyectos de desarrollo, entrenamiento técnico e investigación."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#0E0E0E] text-neutral-100 border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Artistic Flair */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800 gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-500 block mb-2">
              02 / CURATORIAL STATEMENT
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">
              Sobre <span className="italic font-serif text-neutral-400">mí</span>
            </h2>
          </div>
          <p className="text-xs uppercase font-mono tracking-[0.2em] text-neutral-500 max-w-xs">
            Integrando computación, ciencia de decisiones y formación académica
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Bio Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#141414] p-6 sm:p-8 border border-[#262626] space-y-5 text-neutral-300 text-base leading-relaxed font-light">
              {personalData.detailedBio.map((paragraph, index) => (
                <p key={index} className="first-letter:float-left first-letter:text-3xl first-letter:font-serif first-letter:mr-2 first-letter:text-white">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Values Badge Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 bg-neutral-900 border border-neutral-800 text-[11px] font-mono uppercase tracking-wider text-neutral-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span>Rigor Científico</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 bg-neutral-900 border border-neutral-800 text-[11px] font-mono uppercase tracking-wider text-neutral-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span>Pedagogía Técnica</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 bg-neutral-900 border border-neutral-800 text-[11px] font-mono uppercase tracking-wider text-neutral-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span>Código Limpio</span>
              </div>
            </div>
          </div>

          {/* Highlights Grid Column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 bg-[#141414] border border-[#262626] hover:border-neutral-500 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 border border-neutral-700 bg-neutral-900 text-neutral-300 flex items-center justify-center shrink-0 group-hover:border-white group-hover:text-white transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif text-white text-base mb-1 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-neutral-400 font-light leading-relaxed">
                        {item.description}
                      </p>
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
