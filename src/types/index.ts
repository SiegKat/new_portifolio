export interface Project {
  id: string;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface Publication {
  id: string;
  title: { pt: string; en: string };
  authors: string[];
  journal?: string;
  conference?: string;
  year: number;
  doi?: string;
  pdfUrl?: string;
  abstract: { pt: string; en: string };
}

export interface Experience {
  id: string;
  title: { pt: string; en: string };
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: { pt: string; en: string };
  technologies: string[];
}

export interface BlogPost {
  id: string;
  title: { pt: string; en: string };
  excerpt: { pt: string; en: string };
  content: { pt: string; en: string };
  publishDate: string;
  tags: string[];
  readTime: number;
}

export type Language = 'pt' | 'en';
export type Theme = 'light' | 'dark' | 'system';

export interface Translation {
  [key: string]: string | Translation;
}

