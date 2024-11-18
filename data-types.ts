// src/types/index.ts
export interface ResearchProject {
  title: string;
  description: string;
  ideas: string[];
  icon?: string;
}

// src/data/research-projects.ts
import { ResearchProject } from '../types';

export const researchProjects: ResearchProject[] = [
  {
    title: "Musical Consciousness",
    description: "Exploring the intersection of rhythm, neural oscillations, and states of consciousness during musical performance.",
    ideas: [
      "Build a brainwave visualization tool for musicians",
      "Create an AI that generates music based on EEG data",
      "Develop a meditation app with skateboarding-inspired soundscapes"
    ]
  },
  {
    title: "Flow States",
    description: "Research into the psychology and neuroscience of flow states in skateboarding and musical performance.",
    ideas: [
      "Motion tracking app for skate trick analysis",
      "Flow state prediction algorithm",
      "Real-time focus measurement tool"
    ]
  },
  {
    title: "Collective Consciousness",
    description: "Studying group dynamics and shared experiences in skate culture and music scenes.",
    ideas: [
      "Social network analysis tools",
      "Cultural pattern recognition software",
      "Community experience mapping platform"
    ]
  }
];
