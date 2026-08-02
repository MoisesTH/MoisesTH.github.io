export interface PersonalInfo {
  name: string;
  titles: string[];
  primaryTitle: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  location: string;
  bioSummary: string;
  detailedBio: string[];
  cvPath: string;
  avatarPlaceholder: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
  responsibilities: string[];
  achievements?: string[];
  skills: string[];
  hasPlaceholders?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  isHighlight: boolean;
  thesisTitle?: string;
  thesisDescription?: string;
  keyTopics?: string[];
  statusBadge?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  code?: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string;
  description: string;
  credentialUrl: string;
  skills: string[];
  hasPlaceholders?: boolean;
}

export interface SkillItem {
  name: string;
  level?: 'Experiencia' | 'Conocimiento' | 'Herramienta utilizada';
  iconName?: string;
  isCore?: boolean;
}

export interface SkillCategory {
  id: string;
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  category: 'Investigación' | 'Ciencia de Datos' | 'Docencia' | 'Inteligencia Artificial' | 'Desarrollo';
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl: string;
  status: 'Completado' | 'En desarrollo' | 'Investigación activa';
  highlights?: string[];
  featured?: boolean;
}

export interface ResearchWorkflowStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
}

export interface ResearchModelItem {
  name: string;
  type: string;
  description: string;
  formulaOrConcept?: string;
  applications: string[];
}

export interface ResearchInfo {
  title: string;
  subtitle: string;
  overview: string;
  keyTopics: string[];
  workflow: ResearchWorkflowStep[];
  models: ResearchModelItem[];
}

export interface TeachingArea {
  title: string;
  description: string;
  topics: string[];
  icon: string;
}

export interface TeachingInfo {
  overview: string;
  pedagogicalApproach: string[];
  areas: TeachingArea[];
  coursesPlaceholders: {
    title: string;
    institution: string;
    duration: string;
    topics: string;
  }[];
}
