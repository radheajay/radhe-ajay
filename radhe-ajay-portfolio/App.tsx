import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-code-pattern"></div>
        <div className="absolute inset-0 bg-code-pattern-slow"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar />
        
        <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 pt-32 pb-20">
          <Hero />
          <BentoGrid />
        </main>
        
        <Footer />
        <Chatbot />
      </div>
    </div>
  );
}