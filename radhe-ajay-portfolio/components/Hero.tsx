import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="mb-16 md:mb-24 flex flex-col md:flex-row items-end justify-between gap-8 animate-fade-in-up">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          OPEN TO WORK
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-4">
          <img
            src="https://github.com/radheajay.png"
            alt="Radhe Ajay"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-primary/50 shadow-[0_0_20px_rgba(37,106,244,0.3)] object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200';
            }}
          />
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Next Generation</span><br />
            with Radhe Ajay.
          </h1>
        </div>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
          Radhe Ajay — BCA 4th Semester Student | AI & Web Visionary from Bihar, India.
        </p>
      </div>

      <div className="flex gap-8">
        <div className="text-right hidden md:block">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Based In</p>
          <p className="font-bold">Bihar, India</p>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Role</p>
          <p className="font-bold">Content Creator | AI & Web</p>
        </div>
      </div>
    </section>
  );
};