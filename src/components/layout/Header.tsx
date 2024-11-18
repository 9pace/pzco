// src/components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="max-w-5xl mx-auto text-center mb-16 p-8">
      <nav className="mb-8">
        <Link 
          href="/skate" 
          className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 
            text-white font-medium transform hover:scale-105 transition-transform cursor-pointer
            hover:shadow-[0_0_25px_rgba(255,97,216,0.5)]"
        >
          🛹 Skate Inspo
        </Link>
      </nav>
      <div className="relative">
        <h1 className="text-7xl font-black mb-6 neon-text tracking-tighter">
          PZ Co Consciousness
        </h1>
        <div className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-20 blur-3xl -z-10"></div>
      </div>
      <p className="text-2xl font-light text-white opacity-90 leading-relaxed max-w-2xl mx-auto mb-8">
        Exploring the frontiers of consciousness through music, movement, and code
      </p>
    </header>
  );
};