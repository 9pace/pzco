// src/components/layout/Header.tsx
import React from 'react';

export const Header = () => {
  return (
    <header className="max-w-4xl mx-auto text-center mb-12">
      <h1 className="text-4xl font-bold mb-4">PZ Co Consciousness</h1>
      <p className="text-xl text-slate-300">
        Exploring the frontiers of consciousness through music, movement, and code
      </p>
    </header>
  );
};

// src/components/layout/MainLayout.tsx
import React from 'react';
import { Header } from './Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8">
      <Header />
      <main className="max-w-6xl mx-auto">
        {children}
      </main>
    </div>
  );
};
