import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Eye, Sparkles, Filter, Code2, AlertCircle } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ['Todas', 'Investigación', 'Ciencia de Datos', 'Docencia', 'Inteligencia Artificial'];

  const filteredProjects = projectsData.filter(project => {
    if (selectedCategory === 'Todas') return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0E0E0E] text-neutral-100 border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800 gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-500 block mb-2">
              07 / SELECTED WORKS & CODE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">
              Proyectos <span className="italic font-serif text-neutral-400">destacados</span>
            </h2>
          </div>
          <p className="text-xs uppercase font-mono tracking-[0.2em] text-neutral-500 max-w-xs">
            Desarrollo Python, modelos bayesianos en R, IA y pedagogía técnica
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              id={`project-category-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-4 py-1.5 text-[10px] font-mono uppercase tracking-widest transition-all ${
                selectedCategory === cat
                  ? 'bg-neutral-100 text-neutral-900 font-semibold'
                  : 'bg-[#141414] text-neutral-400 border border-[#262626] hover:text-white hover:border-neutral-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map(project => {
            const isGithubPlaceholder = project.githubUrl === '#';
            const isDemoPlaceholder = project.demoUrl === '#';

            return (
              <div
                key={project.id}
                className="bg-[#141414] border border-[#262626] hover:border-neutral-500 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Top Card Header Banner */}
                <div className="p-6 pb-4 border-b border-neutral-800 bg-neutral-900/60 relative">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-neutral-800 text-neutral-300 border border-neutral-700">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif text-white group-hover:text-neutral-300 transition-colors leading-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Card Main Body */}
                <div className="p-6 space-y-4 flex-1">
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List preview */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="space-y-1 pt-3 border-t border-neutral-800">
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                        Destacado:
                      </p>
                      <p className="text-xs text-neutral-400 font-light flex items-start gap-1.5 italic">
                        <Sparkles className="w-3.5 h-3.5 text-neutral-300 shrink-0 mt-0.5" />
                        <span>{project.highlights[0]}</span>
                      </p>
                    </div>
                  )}

                  {/* Technologies Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-neutral-900 text-neutral-400 border border-neutral-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Buttons */}
                <div className="p-6 pt-4 border-t border-neutral-800 bg-neutral-900/40 flex items-center justify-between gap-3">
                  
                  <button
                    onClick={() => setActiveProject(project)}
                    id={`open-project-details-${project.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white hover:line-through"
                  >
                    <Eye className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Ver detalles</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {!isGithubPlaceholder ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-neutral-700 bg-neutral-900 text-neutral-300 hover:text-white hover:border-white transition-colors"
                        title="Ver repositorio GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-[10px] text-amber-400 font-mono" title="URL editable en projects.ts">
                        # GitHub
                      </span>
                    )}

                    {!isDemoPlaceholder ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-neutral-700 bg-neutral-900 text-neutral-300 hover:text-white hover:border-white transition-colors"
                        title="Ver demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : null}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

      </div>
    </section>
  );
};
