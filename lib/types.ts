export interface Experience {
  id: number;
  company: string;
  role: string;
  dates: string;
  description: string[];
  icon: string;
  website: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  role: string;
  stack: string[];
  description: string;
  features: string[];
  image: string;
  icon: any;
  website: string;
  maintenance?: boolean;
}

export interface Article {
  id: number;
  title: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  icon: string;
}