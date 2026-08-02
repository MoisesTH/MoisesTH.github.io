import { EducationItem } from '../types';

export const educationData: EducationItem[] = [
  {
    id: 'edu-unam',
    degree: 'Licenciatura en Psicología',
    institution: 'Universidad Nacional Autónoma de México (UNAM)',
    location: 'Ciudad de México, México',
    period: 'Formación Universitaria Completa',
    isHighlight: true,
    statusBadge: 'Proyecto de Investigación de Tesis',
    thesisTitle: 'Análisis metodológico y estadístico del descuento temporal mediante la tarea Convex Time Budget (CTB)',
    thesisDescription: 'Investigación académica orientada al estudio experimental de las preferencias intertemporales y la toma de decisiones económicas y conductuales. Utiliza tareas de asignación presupuestaria continua (Convex Time Budget) para evaluar parámetros individuales y poblacionales de impaciencia, sesgo por el presente (present bias) y curvatura de la función de utilidad mediante modelos jerárquicos bayesianos.',
    keyTopics: [
      'Tarea Convex Time Budget (CTB)',
      'Modelo de Descuento Exponencial y Cuasihiperbólico (Beta-Delta)',
      'Función de Utilidad con Aversión Relativa al Riesgo Constante (CRRA)',
      'Efectos de Magnitud y Sensibilidad al Costo de Espera',
      'Modelamiento Estadístico Jerárquico Bayesiano (MCMC/JAGS)',
      'Psicología Experimental y Economía Conductual'
    ]
  }
];
