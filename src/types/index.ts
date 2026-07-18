export interface Project {
  title: string;
  subtitle: string;
  description: string;
  category: string;
  tech: string[];
  features: string[];
  links: {
    github: string;
    live: string;
  };
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
  tech: string[];
}

export interface Education {
  degree: string;
  institution: string;
  university: string;
  location: string;
  duration: string;
  description: string;
}