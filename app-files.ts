// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PZ Co Consciousness',
  description: 'Exploring consciousness through music, movement, and code',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

// src/app/page.tsx
'use client'

import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { ResearchGrid } from '@/components/research/ResearchGrid';
import { ProjectDetails } from '@/components/research/ProjectDetails';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Music, Skateboard, BeakerIcon, BookOpen } from 'lucide-react';
import { researchProjects } from '@/data/research-projects';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function Home() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <MainLayout>
      <Tabs defaultValue="research" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="research" className="flex items-center gap-2">
            <Brain className="w-4 h-4" />
            Research Areas
          </TabsTrigger>
          <TabsTrigger value="projects" className="flex items-center gap-2">
            <BeakerIcon className="w-4 h-4" />
            Project Ideas
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Resources
          </TabsTrigger>
        </TabsList>

        <TabsContent value="research">
          <ResearchGrid onSelectProject={setActiveProject} />
        </TabsContent>

        <TabsContent value="projects">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Music Projects Card */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Music className="w-5 h-5" />
                  Music Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-slate-300">
                  <li>Neural music generation experiments</li>
                  <li>Consciousness-based music recommendation engine</li>
                  <li>Brainwave-music synthesis tools</li>
                </ul>
              </CardContent>
            </Card>

            {/* Skateboarding Projects Card */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Skateboard className="w-5 h-5" />
                  Skateboarding Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-slate-300">
                  <li>Trick recognition AI</li>
                  <li>Flow state monitoring system</li>
                  <li>Skate spot consciousness mapping</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resources">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle>Technical Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-slate-300">
                  <li>React with Next.js</li>
                  <li>TensorFlow.js for ML projects</li>
                  <li>Three.js for visualizations</li>
                  <li>Web Audio API for sound processing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle>Research Links</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-slate-300">
                  <li>Consciousness research papers database</li>
                  <li>Neuroscience of flow states</li>
                  <li>Music cognition studies</li>
                  <li>Sports psychology resources</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {activeProject !== null && (
        <ProjectDetails project={researchProjects[activeProject]} />
      )}
    </MainLayout>
  );
}
