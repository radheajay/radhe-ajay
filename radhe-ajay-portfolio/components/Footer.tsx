import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 text-center border-t border-white/5 bg-[#0b0f17] transition-all duration-300 hover:bg-[#111620] group cursor-default flex flex-col items-center">
      
      {/* Social Media Links */}
      <div className="flex items-center gap-6 mb-8">
        <a href="#" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:-translate-y-1">
          <Twitter size={20} />
          <span className="sr-only">Twitter</span>
        </a>
        <a href="#" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:-translate-y-1">
          <Instagram size={20} />
          <span className="sr-only">Instagram</span>
        </a>
        <a href="#" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:-translate-y-1">
          <Linkedin size={20} />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href="#" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:-translate-y-1">
          <Github size={20} />
          <span className="sr-only">GitHub</span>
        </a>
      </div>

      <p className="text-gray-500 text-sm transition-transform duration-300 group-hover:scale-105 group-hover:text-gray-400">
        © 2024 Radhe Ajay. Radhe Radhe
      </p>
    </footer>
  );
};