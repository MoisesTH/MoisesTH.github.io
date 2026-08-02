import React, { useState } from 'react';
import { FlaskConical, LineChart, Cpu, BookOpen, Layers, ArrowRight, CheckCircle2, Sigma, Brain } from 'lucide-react';
import { researchData } from '../data/research';

export const Research: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section id="research" className="py-20 md:py-28 bg-[#0E0E0E] text-neutral-100 border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800 gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-500 block mb-2">
              08 / RESEARCH & BAYESIAN MODELING
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">
              Investigación <span className="italic font-serif text-neutral-400">académica</span>
            </h2>
          </div>
          <p className="text-xs uppercase font-mono tracking-[0.2em] text-neutral-500 max-w-xs">
            Inferencia bayesiana, MCMC y toma de decisiones
          </p>
        </div>

        {/* Methodological Pipeline Diagram Workflow */}
        <div className="bg-[#141414] p-6 sm:p-8 border border-[#262626] mb-14">
          
          <div className="text-center mb-8 pb-4 border-b border-neutral-800">
            <h3 className="text-lg font-serif text-white flex items-center justify-center gap-2">
              <Layers className="w-4 h-4 text-neutral-400" />
              <span>Flujo Metodológico de Investigación Conductual</span>
            </h3>
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mt-1">
              Selecciona una etapa del pipeline metodológico
            </p>
          </div>

          {/* Stepper Buttons Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
            {researchData.workflow.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStepIndex(idx)}
                  id={`research-step-btn-${step.stepNumber}`}
                  className={`p-3 text-left transition-all border ${
                    isActive
                      ? 'bg-neutral-100 text-neutral-900 border-white'
                      : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] font-mono uppercase tracking-widest opacity-80">
                      Paso {step.stepNumber}
                    </span>
                    {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900" />}
                  </div>
                  <p className="font-serif text-xs leading-snug line-clamp-1">{step.title}</p>
                </button>
              );
            })}
          </div>

          {/* Step Detail Display */}
          {researchData.workflow[activeStepIndex] && (
            <div className="bg-neutral-900/80 p-6 border border-neutral-800 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-3 pb-3 border-b border-neutral-800">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 block">
                    Etapa {researchData.workflow[activeStepIndex].stepNumber}: {researchData.workflow[activeStepIndex].subtitle}
                  </span>
                  <h4 className="text-xl font-serif text-white">
                    {researchData.workflow[activeStepIndex].title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {researchData.workflow[activeStepIndex].tools.map((tool, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-[#141414] text-neutral-300 border border-neutral-800">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {researchData.workflow[activeStepIndex].description}
              </p>
            </div>
          )}

        </div>

        {/* Statistical & Economic Models Cards */}
        <div className="space-y-6 max-w-6xl mx-auto">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <h3 className="text-xl font-serif text-white flex items-center gap-2">
              <Sigma className="w-4 h-4 text-neutral-400" />
              <span>Modelos Matemáticos & Inferencia Bayesiana</span>
            </h3>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              R / JAGS / MCMC
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchData.models.map((model, idx) => (
              <div
                key={idx}
                className="bg-[#141414] p-6 border border-[#262626] hover:border-neutral-600 transition-all duration-300 space-y-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-neutral-900 text-neutral-300 border border-neutral-800">
                    {model.type}
                  </span>
                  <Brain className="w-4 h-4 text-neutral-400" />
                </div>

                <h4 className="text-lg font-serif text-white">
                  {model.name}
                </h4>

                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  {model.description}
                </p>

                {model.formulaOrConcept && (
                  <div className="p-3 bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto border border-neutral-800">
                    <code>{model.formulaOrConcept}</code>
                  </div>
                )}

                <div className="pt-3 border-t border-neutral-800">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-2">
                    Aplicación en la investigación:
                  </p>
                  <ul className="space-y-1">
                    {model.applications.map((app, aIdx) => (
                      <li key={aIdx} className="flex items-center gap-2 text-xs text-neutral-400 font-light">
                        <ArrowRight className="w-3 h-3 text-neutral-500 shrink-0" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
