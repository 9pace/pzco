// src/types/index.ts
export interface ResearchProject {
  title: string;
  description: string;
  ideas: string[];
  icon?: string;
}

export interface ProjectCardProps {
  project: ResearchProject;
  onViewIdeas: () => void;
}
