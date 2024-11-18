// src/components/research/ProjectCard.tsx
import React from 'react';
import { ProjectCardProps } from '@/types';

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewIdeas }) => {
  return (
    <div className="glass-card hover-card p-8 group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
        {project.title}
      </h3>
      <p className="text-white/90 mb-6 leading-relaxed">
        {project.description}
      </p>

      <button 
        onClick={onViewIdeas}
        style={{
          background: 'linear-gradient(45deg, #FF61D8, #905CFF)',
          border: 'none',
          padding: '12px 24px',
          color: 'white',
          borderRadius: '8px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '16px',
          fontWeight: '500',
          transition: 'all 0.3s ease',
          boxShadow: '0 0 15px rgba(255, 97, 216, 0.3)',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}
        className="relative overflow-hidden group hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,97,216,0.5)]"
      >
        <span>View Ideas</span>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="transform group-hover:translate-x-1 transition-transform"
        >
          <path d="M5 12h14m-7-7 7 7-7 7"/>
        </svg>
      </button>
    </div>
  );
};