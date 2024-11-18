// src/app/skate/page.tsx
'use client'

import React from 'react';
import Link from 'next/link';

const SkatePage = () => {
  const skateSpots = [
    { name: "Sunset Bowl", terrain: "Pool", difficulty: "Expert" },
    { name: "Downtown Rails", terrain: "Street", difficulty: "Advanced" },
    { name: "The Pyramid Ledges", terrain: "Street", difficulty: "Intermediate" },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8 md:px-16 lg:px-24 py-12">
      {/* Navigation */}
      <nav className="mb-12">
        <Link 
          href="/" 
          className="text-pink-500 hover:text-pink-400 transition-colors flex items-center gap-2"
        >
          ← Back to Consciousness Hub
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[50vh] mb-16 rounded-2xl overflow-hidden glass-card">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 z-10">
            SKATE OR DIE
          </h1>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 mix-blend-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&w=2000"
          alt="Skateboarder silhouette"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Inspiration Cards */}
        <div className="glass-card p-8 hover:transform hover:scale-105 transition-all duration-300">
          <img 
            src="https://images.unsplash.com/photo-1621544402532-78c290378d82?auto=format&fit=crop&w=800"
            alt="Skater doing a trick" 
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            Flow State
          </h3>
          <p className="text-white/80">
            Finding the perfect line, that moment when time slows down and everything clicks.
          </p>
        </div>

        <div className="glass-card p-8 hover:transform hover:scale-105 transition-all duration-300">
          <img 
            src="https://images.unsplash.com/photo-1620283687963-4733dbf7359d?auto=format&fit=crop&w=800"
            alt="Perfect spot" 
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
            Spot Hunter
          </h3>
          <p className="text-white/80">
            Every curb, rail, and gap is an opportunity for creativity.
          </p>
        </div>

        <div className="glass-card p-8 hover:transform hover:scale-105 transition-all duration-300">
          <img 
            src="https://images.unsplash.com/photo-1623823275844-42771b5c5b5a?auto=format&fit=crop&w=800"
            alt="Night skating" 
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text">
            Night Sessions
          </h3>
          <p className="text-white/80">
            When the city sleeps, we skate. Empty spots, good friends, infinite possibilities.
          </p>
        </div>
      </div>

      {/* Spot List */}
      <div className="glass-card p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-cyan-500 text-transparent bg-clip-text">
          Local Spots
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skateSpots.map((spot, index) => (
            <div 
              key={index}
              className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">{spot.name}</h3>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-sm">
                  {spot.terrain}
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">
                  {spot.difficulty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Inspiration Images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <img 
          src="https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=500"
          alt="Skate inspiration 1"
          className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
        />
        <img 
          src="https://images.unsplash.com/photo-1626909851227-db4f1731e7f5?auto=format&fit=crop&w=500"
          alt="Skate inspiration 2"
          className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
        />
        <img 
          src="https://images.unsplash.com/photo-1629418713571-69f9e2d2d8bb?auto=format&fit=crop&w=500"
          alt="Skate inspiration 3"
          className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
        />
        <img 
          src="https://images.unsplash.com/photo-1647891940243-77a6483a152e?auto=format&fit=crop&w=500"
          alt="Skate inspiration 4"
          className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Motivational Quote */}
      <div className="text-center mb-16">
        <blockquote className="text-3xl md:text-4xl font-bold italic mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
          "Skateboarding is not a sport, it's a way of life."
        </blockquote>
        <p className="text-white/60">- Every Skater Ever</p>
      </div>
    </div>
  );
};

export default SkatePage;