import React from 'react';
import { Terminal } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4">
      <nav className="glass-card rounded-full px-6 py-3 flex items-center gap-8 shadow-lg">
        <a href="#" className="text-white font-bold text-lg tracking-tight flex items-center gap-2">
          <Terminal size={20} className="text-primary" />
          RA_
        </a>

        <div className="hidden md:flex items-center gap-6">
          <a href="#work" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Projects</a>
          <a href="#stack" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Stack</a>
          <a href="#about" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">About</a>
        </div>

        <button className="bg-primary hover:bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(37,106,244,0.3)]">
          Contact
        </button>
      </nav>
    </header>
  );
};