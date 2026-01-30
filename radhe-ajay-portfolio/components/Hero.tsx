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
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter mb-4">
          Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Next Generation</span><br />
          with Radhe Ajay.
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
          Radhe Ajay — BCA 4th Semester Student | AI & Web Visionary specializing in neural networks, generative art, and scalable web architectures.
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