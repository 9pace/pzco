// src/app/page.tsx
'use client'

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { ProjectCard } from '@/components/research/ProjectCard';
import { researchProjects } from '@/data/research-projects';

export default function Home() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen p-8 overflow-x-hidden relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 cyber-grid"></div>
      <div className="fixed inset-0 -z-20 bg-black"></div>
      
      <Header />
      
      <main className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {researchProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onViewIdeas={() => setActiveProject(index)}
            />
          ))}
        </div>

        {activeProject !== null && (
          <div className="glass-card p-8 mt-12 transform transition-all duration-500">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Project Ideas: {researchProjects[activeProject].title}
            </h2>
            <ul className="space-y-4">
              {researchProjects[activeProject].ideas.map((idea, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 group"
                >
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold">
                    {index + 1}
                  </span>
                  <span className="text-white/90 group-hover:text-white transition-colors duration-300">
                    {idea}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>

      <footer className="mt-20 text-center">
        <p className="text-white/60 text-sm">
          PZ Co Consciousness Research Hub • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}