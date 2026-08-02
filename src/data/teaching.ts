import { TeachingInfo } from '../types';

export const teachingData: TeachingInfo = {
  overview: "Cuento con amplia experiencia en la enseñanza de tecnologías de la información, programación en Python y fundamentos de inteligencia artificial. Mi enfoque pedagógico se caracteriza por descomponer conceptos abstractos y complejos en estructuras lógicas, accesibles y aplicables a casos del mundo real.",
  pedagogicalApproach: [
    "Aprendizaje basado en la práctica (Learning by Doing) con proyectos reales.",
    "Explicación adaptativa ajustada al perfil técnico y background de los estudiantes.",
    "Diseño de materiales didácticos, guías de laboratorios y ejercicios progresivos.",
    "Fomento de buenas prácticas de código, legibilidad y estándares del industria (PEP 8)."
  ],
  areas: [
    {
      title: "Programación en Python",
      description: "Desde sintaxis fundamental y estructuras de datos hasta POO, expresiones regulares, decoradores y consumo de APIs.",
      topics: ["Sintaxis & PEP 8", "Estructuras de Datos", "Programación Orientada a Objetos", "Manejo de Excepciones", "Automatización con Scripts"],
      icon: "Code"
    },
    {
      title: "Bases de Datos & SQL",
      description: "Diseño conceptual, consultas relacionales, manipulación de datos e integración con lenguajes de programación.",
      topics: ["Modelado Relacional", "Consultas SQL", "MySQL & Workbench", "Conexión Python-Database", "Gestión de Datos"],
      icon: "Database"
    },
    {
      title: "Inteligencia Artificial & Automatización",
      description: "Integración práctica de modelos de lenguaje, desarrollo asistido por IA e introducción al diseño de prompts.",
      topics: ["Fundamentos de LLMs", "Google GenAI SDK", "LangChain Basics", "LM Studio & Modelos Locales", "Flujos de Automatización"],
      icon: "Brain"
    },
    {
      title: "Tecnologías Cloud & Herramientas Digitales",
      description: "Fundamentos de computación en la nube, servicios de almacenamiento, seguridad e infraestructura.",
      topics: ["Conceptos Cloud", "Almacenamiento S3", "IAM & Seguridad", "Despliegue de Aplicaciones", "Control de Versiones Git"],
      icon: "Cloud"
    }
  ],
  coursesPlaceholders: [
    {
      title: "Curso de Python Básico a Intermedio",
      institution: "Capacitación Profesional Netec / MCT",
      duration: "40 horas",
      topics: "Sintaxis, Estructuras de Datos, POO, Excepciones, MySQL y Regex"
    },
    {
      title: "Fundamentos de Bases de Datos Relacionales y SQL",
      institution: "Capacitación Tecnológica",
      duration: "24 horas",
      topics: "Diseño Relacional, DDL, DML, Joins y Conexión con Python"
    },
    {
      title: "[AGREGAR CURSO FUTURO 1]",
      institution: "[AGREGAR INSTITUCIÓN / ORGANIZACIÓN]",
      duration: "[AGREGAR DURACIÓN]",
      topics: "[AGREGAR TEMARIO Y CONTENIDOS CLAVE]"
    },
    {
      title: "[AGREGAR CURSO FUTURO 2]",
      institution: "[AGREGAR INSTITUCIÓN / ORGANIZACIÓN]",
      duration: "[AGREGAR DURACIÓN]",
      topics: "[AGREGAR TEMARIO Y CONTENIDOS CLAVE]"
    }
  ]
};
