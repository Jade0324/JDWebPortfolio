export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  featured?: boolean;
  link?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  description: string;
  period: string;
  location: string;
  link?: string;
}

export interface Press {
  id: string;
  title: string;
  source: string;
  image: string;
  link: string;
  featured?: boolean;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  description: string;
  technologies: string[];
}
