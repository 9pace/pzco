// src/components/research/ProjectCard.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ResearchProject } from '@/types';

interface ProjectCardProps {
  project: ResearchProject;
  onViewIdeas: () => void;
}

export const ProjectCard = ({ project, onViewIdeas }: ProjectCardProps) => {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-300 mb-4">{project.description}</p>
        <button 
          onClick={onViewIdeas}
          className="text-blue-400 hover:text-blue-300"
        >
          View Project Ideas →
        </button>
      </CardContent>
    </Card>
  );
};

// src/components/research/ResearchGrid.tsx
import React from 'react';
import { ProjectCard } from './ProjectCard';
import { researchProjects } from '@/data/research-projects';

interface ResearchGridProps {
  onSelectProject: (index: number) => void;
}

export const ResearchGrid = ({ onSelectProject }: ResearchGridProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {researchProjects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          onViewIdeas={() => onSelectProject(index)}
        />
      ))}
    </div>
  );
};

// src/components/research/ProjectDetails.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ResearchProject } from '@/types';

interface ProjectDetailsProps {
  project: ResearchProject;
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <Card className="bg-slate-800 border-slate-700 mt-8">
      <CardHeader>
        <CardTitle>Project Ideas: {project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2 text-slate-300">
          {project.ideas.map((idea, index) => (
            <li key={index}>{idea}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
