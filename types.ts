export interface Project {
  title: string;
  role: string;
  period: string;
  description: string;
  techStack: string[];
  category: 'Engineering' | 'Software' | 'AI';
  link?: string;
  linkType?: 'website' | 'video';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  details: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  PROJECTS = 'projects',
  SKILLS = 'skills',
  CONTACT = 'contact'
}

export type Language = 'en' | 'zh';