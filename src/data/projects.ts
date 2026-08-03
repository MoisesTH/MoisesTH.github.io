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
    status: 'Investigación Activa',
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
  title: 'Generador de Temarios y Automatización con Inteligencia Artificial',
  description: 'Ecosistema serverless en AWS para la generación automatizada de diseños instruccionales y temarios estructurados mediante LLMs (OpenAI y Amazon Bedrock).',
  fullDescription: 'Desarrollo de una arquitectura backend serverless robusta encargada de procesar requerimientos pedagógicos y transformarlos en propuestas de cursos cronometradas. Implementa orquestación de prompts avanzados con restricción estricta de salida JSON, gestión de errores de producción, integración con modelos de lenguaje en la nube (GPT-4, Claude 3) y exposición mediante API RESTful con seguridad y CORS.',
  category: 'Inteligencia Artificial & Cloud',
  
  // 1. TECNOLOGÍAS Y HERRAMIENTAS UTILIZADAS
  technologies: [
    'Python 3',
    'AWS Lambda',
    'Amazon API Gateway',
    'OpenAI API (GPT-4)',
    'Amazon Bedrock',
    'REST API / CORS',
    'Prompt Engineering',
    'JSON Schema'
  ],
  
  image: '/assets/images/project-image.png',
  githubUrl: '#', // Sustituir por tu repositorio
  demoUrl: '#',
  status: 'Completado',
  featured: true,

  // 2. LOGROS TÉCNICOS DESTACADOS (Resalta QUÉ hiciste)
  highlights: [
    'Diseño e implementación de arquitectura Serverless (AWS Lambda + API Gateway) con manejo estricto de CORS y respuestas HTTP.',
    'Construcción de un cliente agnóstico a la IA, permitiendo conmutar dinámicamente entre la API de OpenAI y Amazon Bedrock.',
    'Ingeniería de Prompts avanzada basada en la Taxonomía de Bloom, forzando respuestas en formato JSON estricto para consumo directo por aplicaciones frontend.',
    'Manejo robusto de errores, parsing defensivo y logging centralizado para entornos de producción.'
  ]
  }
];
