import { SkillCategory } from '../types';

export const skillCategoriesData: SkillCategory[] = [
  {
    id: 'prog',
    category: 'Programación',
    description: 'Dominio de desarrollo en Python orientado a lógica limpia, estructuras robustas y automatización.',
    skills: [
      { name: 'Python', level: 'Experiencia', isCore: true },
      { name: 'Programación Orientada a Objetos (POO)', level: 'Experiencia', isCore: true },
      { name: 'Estructuras de Datos', level: 'Experiencia', isCore: true },
      { name: 'Manejo de Excepciones', level: 'Experiencia' },
      { name: 'Decoradores & Generadores', level: 'Experiencia' },
      { name: 'Recursividad', level: 'Experiencia' },
      { name: 'Expresiones Regulares (Regex)', level: 'Experiencia' },
      { name: 'Procesamiento de Archivos y CSV', level: 'Experiencia' },
      { name: 'Automatización de Tareas', level: 'Experiencia', isCore: true }
    ]
  },
  {
    id: 'data-stats',
    category: 'Datos y Estadística',
    description: 'Análisis cuantitativo, inferencia bayesiana jerárquica y modelamiento computacional en R y Python.',
    skills: [
      { name: 'Pandas', level: 'Experiencia', isCore: true },
      { name: 'Análisis de Datos', level: 'Experiencia', isCore: true },
      { name: 'Visualización de Datos', level: 'Experiencia' },
      { name: 'Estadística Frecuentista', level: 'Experiencia' },
      { name: 'Estadística Bayesiana', level: 'Experiencia', isCore: true },
      { name: 'Modelos Jerárquicos Bayesianos', level: 'Experiencia', isCore: true },
      { name: 'Lenguaje R', level: 'Experiencia', isCore: true },
      { name: 'JAGS / R2jags / rjags', level: 'Experiencia' },
      { name: 'Módulo MCMC (Markov Chain Monte Carlo)', level: 'Experiencia' }
    ]
  },
  {
    id: 'dev-tools',
    category: 'Desarrollo y Herramientas',
    description: 'Control de versiones, despliegue continuo en GitHub Pages e interfaces dinámicas con React y R Shiny.',
    skills: [
      { name: 'Git & GitHub', level: 'Experiencia', isCore: true },
      { name: 'GitHub Actions (CI/CD)', level: 'Experiencia' },
      { name: 'GitHub Pages', level: 'Experiencia' },
      { name: 'Visual Studio Code', level: 'Experiencia' },
      { name: 'R Shiny', level: 'Experiencia', isCore: true },
      { name: 'HTML5 & CSS3', level: 'Experiencia' },
      { name: 'JavaScript / TypeScript', level: 'Experiencia' },
      { name: 'React & Vite', level: 'Experiencia', isCore: true },
      { name: 'MySQL & SQL', level: 'Experiencia' }
    ]
  },
  {
    id: 'ai-llm',
    category: 'Inteligencia Artificial',
    description: 'Integración de LLMs, agentes, cadenas con LangChain y desarrollo asistido por IA.',
    skills: [
      { name: 'Uso e Integración de Modelos de Lenguaje (LLMs)', level: 'Experiencia', isCore: true },
      { name: 'Desarrollo Asistido por Inteligencia Artificial', level: 'Experiencia', isCore: true },
      { name: 'Procesamiento de Texto', level: 'Experiencia' },
      { name: 'Automatización con IA', level: 'Experiencia' },
      { name: 'Google GenAI SDK', level: 'Experiencia' },
      { name: 'LangChain', level: 'Experiencia', isCore: true },
      { name: 'LM Studio', level: 'Experiencia' },
      { name: 'Experimentación con Modelos Locales', level: 'Experiencia' }
    ]
  },
  {
    id: 'cloud-tech',
    category: 'Cloud y Tecnología',
    description: 'Estructuras de servicios en la nube, bases de datos relacionales e infraestructura serverless.',
    skills: [
      { name: 'AWS (Amazon Web Services)', level: 'Herramienta utilizada' },
      { name: 'Servicios Cloud (S3, IAM, CloudWatch)', level: 'Herramienta utilizada' },
      { name: 'Pipelines ETL', level: 'Conocimiento' },
      { name: 'Bases de datos relacionales (RDS, Aurora, MySQL)', level: 'Herramienta utilizada' },
      { name: 'Elasticsearch', level: 'Conocimiento' },
      { name: 'Seguridad Cloud (IAM, GuardDuty, Inspector)', level: 'Conocimiento' },
      { name: 'Orquestación & Queues (Step Functions, SQS, CodePipeline)', level: 'Conocimiento' }
    ]
  }
];
