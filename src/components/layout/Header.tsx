// src/components/layout/Header.tsx
import React from 'react';

export const Header = () => {
  return (
    <header className="max-w-4xl mx-auto text-center mb-12 p-8">
      <h1 className="text-6xl font-bold mb-6 neon-text" style={{ fontFamily: 'system-ui' }}>
        PZ Co Consciousness
      </h1>
      <p className="text-xl text-cyan-200 opacity-90 leading-relaxed max-w-2xl mx-auto">
        Exploring the frontiers of consciousness through music, movement, and code
      </p>
      <div className="flex justify-center gap-4 mt-8">
        <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">Music</span>
        <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm">Skateboarding</span>
        <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm">Consciousness</span>
      </div>
    </header>
  );
};