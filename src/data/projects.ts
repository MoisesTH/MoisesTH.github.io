import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-ctb-experiment',
    title: 'Experimento Convex Time Budget (CTB)',
    description: 'Aplicación interactiva y plataforma experimental para medir preferencias intertemporales y asignación presupuestaria continua bajo diversas tasas de interés y horizontes temporales.',
    fullDescription: 'Desarrollo de un entorno experimental interactivo para evaluar la toma de decisiones financieras e intertemporales. El experimento implementa la metodología Convex Time Budget (CTB), permitiendo presentar múltiples escenarios con variaciones aleatorizadas en montos presupuestales, tasas de interés efectivas, niveles de demora (mínima y futura) y escalas de recompensa.',
    category: 'Investigación',
    technologies: ['R', 'R Shiny', 'Diseño Experimental', 'Modelamiento Estadístico', 'Investigación Conductual'],
    image: '/assets/images/project-image.png', // Placeholder que usa el diseño SVG
    githubUrl: '#', // Sustituir por la URL real de tu repositorio, ej: https://github.com/usuario/ctb-experiment
    demoUrl: '#', // Sustituir por la URL de la demo si aplica, ej: https://usuario.shinyapps.io/ctb-app
    status: 'Investigación activa',
    featured: true,
    highlights: [
      'Asignación presupuestaria en tiempo real con restricciones de balance.',
      'Soporte para múltiples horizontes temporales (Frontier Delay y Delivery Date).',
      'Aleatorización de orden de estímulos para mitigar efectos de secuencia.',
      'Exportación estructurada de datos de respuestas para análisis posterior.'
    ]
  },
  {
    id: 'proj-bayesian-hierarchical',
    title: 'Modelamiento Bayesiano Jerárquico de Descuento Temporal',
    description: 'Implementación de modelos computacionales MCMC para estimación simultánea de parámetros individuales y de grupo (impaciencia, sesgo por el presente β y curvatura α).',
    fullDescription: 'Desarrollo e implementación de algoritmos de inferencia bayesiana jerárquica para estimar parámetros del modelo de descuento cuasihiperbólico (β-δ) e hidrodinámico acoplado a funciones de utilidad CRRA. Utiliza cadenas de Markov Monte Carlo (MCMC) para extraer distribuciones posteriores completas y evaluar la incertidumbre en muestras de comportamiento de elección.',
    category: 'Ciencia de Datos',
    technologies: ['R', 'JAGS', 'R2jags', 'MCMC', 'Inferencia Bayesiana', 'WAIC / LOO'],
    image: '/assets/images/project-image.png',
    githubUrl: '#', // Sustituir por tu URL de GitHub
    demoUrl: '#',
    status: 'Completado',
    featured: true,
    highlights: [
      'Estimación robusta de hiperparámetros poblacionales con muestras reducidas.',
      'Diagnósticos de convergencia MCMC (Gelman-Rubin R-hat, tamaño efectivo N_eff).',
      'Comparación de modelos mediante criterios de información WAIC y LOO-CV.',
      'Visualización de distribuciones posteriores e intervalos de alta densidad posterior (HDI).'
    ]
  },
  {
    id: 'proj-python-course',
    title: 'Diseño e Impartición de Curso de Python (Básico a Intermedio)',
    description: 'Programa instruccional estructurado desde fundamentos de sintaxis hasta programación orientada a objetos, acceso a bases de datos e integración con IA.',
    fullDescription: 'Diseño curricular integral y materiales pedagógicos interactivos para la enseñanza de Python. El contenido abarca desde la lógica de programación y cumplimiento del estándar PEP 8, hasta estructuras de datos complejas, POO, expresiones regulares, interacción con bases de datos MySQL e introducción a la ingeniería de prompts y uso de LLMs.',
    category: 'Docencia',
    technologies: ['Python', 'PEP 8', 'POO', 'MySQL', 'Regex', 'Manejo de Excepciones', 'IA Fundamentals'],
    image: '/assets/images/project-image.png',
    githubUrl: '#', // Sustituir por el enlace a tus materiales o cuaderno de ejercicios
    demoUrl: '#',
    status: 'Completado',
    featured: true,
    highlights: [
      'Plan curricular dividido en módulos teóricos y laboratorios de código guiados.',
      'Ejercicios prácticos con bases de datos relacionales MySQL y parseo de archivos.',
      'Módulo especializado en buenas prácticas de arquitectura y manejo de errores.',
      'Evaluaciones dinámicas y proyectos integradores para alumnos.'
    ]
  },
  {
    id: 'proj-ai-apps',
    title: 'Aplicaciones y Automatización con Inteligencia Artificial',
    description: 'Ecosistema de proyectos experimentales utilizando LLMs locales y en la nube (Google GenAI, LangChain, LM Studio) para procesamiento de texto y asistentes.',
    fullDescription: 'Desarrollo de scripts de automatización y prototipos de software asistidos por inteligencia artificial. Explora el uso de Google GenAI SDK, orquestación de prompts con LangChain y ejecución de modelos de lenguaje en entorno local con LM Studio para resúmenes de información, extracción estructurada de datos y herramientas instruccionales.',
    category: 'Inteligencia Artificial',
    technologies: ['Python', 'Google GenAI', 'LangChain', 'LM Studio', 'Modelos Locales', 'Automatización'],
    image: '/assets/images/project-image.png',
    githubUrl: '#', // Sustituir por repositorio real
    demoUrl: '#',
    status: 'En desarrollo',
    featured: true,
    highlights: [
      'Integración del SDK oficial de Google GenAI para generación de contenido estructurado.',
      'Experimentación con LLMs locales mediante LM Studio para preservar privacidad.',
      'Cadenas de procesamiento de documentos y análisis semántico de texto.',
      'Asistentes interaccionables para soporte en el aula y generación de preguntas.'
    ]
  }
];
