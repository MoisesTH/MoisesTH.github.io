import React from 'react';
import { X, Github, ExternalLink, Sparkles, AlertCircle } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const isPlaceholderGithub = project.githubUrl === '#';
  const isPlaceholderDemo = project.demoUrl === '#';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#141414] text-neutral-100 w-full max-w-2xl border border-[#262626] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-neutral-800 flex items-start justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 block mb-1">
              {project.category}
            </span>
            <h3 className="text-2xl font-serif text-white tracking-tight leading-tight">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            id="close-project-modal-btn"
            aria-label="Cerrar ventana"
            className="p-2 border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-neutral-300 text-sm leading-relaxed font-light">
          
          {/* Status Badge */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Estado:</span>
            <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-neutral-900 text-neutral-300 border border-neutral-800">
              {project.status}
            </span>
          </div>

          {/* Full Description */}
          <div>
            <h4 className="font-serif text-white text-lg mb-2">
              Descripción Detallada
            </h4>
            <p className="text-neutral-300 leading-relaxed font-light">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="font-serif text-white text-lg mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-neutral-400" />
                <span>Aspectos Clave y Logros Metodológicos</span>
              </h4>
              <ul className="space-y-2 pl-2">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300 font-light">
                    <span className="w-1.5 h-1.5 bg-neutral-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h4 className="font-serif text-white text-lg mb-2">
              Tecnologías y Conceptos
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-neutral-900 text-neutral-400 border border-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 pt-4 border-t border-neutral-800 bg-neutral-900/60 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            {!isPlaceholderGithub ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider text-white bg-neutral-800 border border-neutral-700 hover:border-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Código en GitHub</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-1 text-xs text-amber-400 font-mono">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>[URL DE GITHUB pendiente]</span>
              </span>
            )}

            {!isPlaceholderDemo ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider text-white bg-neutral-800 border border-neutral-700 hover:border-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Ver Demo Interactivas</span>
              </a>
            ) : null}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-600 transition-colors"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
