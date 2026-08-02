import { CertificationItem } from '../types';

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-pcep',
    name: 'PCEP – Certified Entry-Level Python Programmer',
    code: 'PCEP-30-02 / PCEP-30-01',
    issuer: 'Python Institute',
    issueDate: '[AGREGAR FECHA]', // Reemplazar por fecha real ej: "2024"
    description: 'Certificación profesional que valida el conocimiento fundamental de la sintaxis de Python, semántica, flujo de control, estructuras de datos básicas, funciones, módulos y manejo de excepciones.',
    credentialUrl: '[AGREGAR URL]', // Reemplazar por enlace a la credencial en Python Institute / Credly
    skills: ['Python', 'Sintaxis', 'Estructuras de Datos', 'Control de Flujo', 'Funciones', 'Módulos'],
    hasPlaceholders: true
  },
  {
    id: 'cert-pcap',
    name: 'PCAP – Certified Associate Python Programmer',
    code: 'PCAP-31-03',
    issuer: 'Python Institute',
    issueDate: '[AGREGAR FECHA]', // Reemplazar por fecha real ej: "2024"
    description: 'Certificación de nivel asociado que acredita competencias avanzadas en Programación Orientada a Objetos (POO), procesamiento de archivos y streams, manejo estructurado de excepciones, generadores y módulos complejos.',
    credentialUrl: '[AGREGAR URL]', // Reemplazar por enlace a la credencial en Python Institute / Credly
    skills: ['Python Avanzado', 'Programación Orientada a Objetos (POO)', 'Manejo de Excepciones', 'Procesamiento de Archivos', 'Decoradores'],
    hasPlaceholders: true
  },
  {
    id: 'cert-mct',
    name: 'Microsoft Certified Trainer (MCT)',
    code: 'MCT',
    issuer: 'Microsoft',
    issueDate: '[AGREGAR FECHA]',
    description: 'Acreditación profesional que valida las competencias pedagógicas, técnicas y de facilitación instruccional para impartir contenidos tecnológicos oficiales.',
    credentialUrl: '[AGREGAR URL]',
    skills: ['Docencia Tecnológica', 'Instrucción Oficial', 'Capacitación Empresarial', 'Pedagogía Técnica'],
    hasPlaceholders: true
  }
];
