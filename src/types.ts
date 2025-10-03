export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  tags: string[];
  featured: boolean;
}

export interface Skill {
  name: string;
  category: string;
  proficiency: number;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
