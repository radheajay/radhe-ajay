import React from 'react';
import { 
  Box, 
  ArrowRight, 
  Github, 
  Play, 
  User, 
  Sparkles,
  Youtube, 
  Video, 
  Mic, 
  Feather
} from 'lucide-react';

export const BentoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-[minmax(180px,auto)]">
      {/* 1. Featured Project - Advanced AI Chatbot */}
      <a 
        href="https://github.com/radheajay" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative md:col-span-2 lg:col-span-2 lg:row-span-2 glass-card rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 block cursor-pointer"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>
        <div className="p-6 md:p-8 flex flex-col h-full z-10 relative">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-white/5 rounded-lg border border-white/10">
              <Box className="text-primary" size={24} />
            </div>
            <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">FEATURED</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">Advanced AI Chatbot</h3>
          <p className="text-gray-400 mb-6 max-w-md">A smart conversational agent built to provide intelligent responses and enhance user interaction.</p>
          
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2 py-1 text-xs text-gray-300 bg-white/5 rounded border border-white/5">Python</span>
              <span className="px-2 py-1 text-xs text-gray-300 bg-white/5 rounded border border-white/5">TensorFlow</span>
              <span className="px-2 py-1 text-xs text-gray-300 bg-white/5 rounded border border-white/5">React</span>
            </div>
            <span className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors">
              View Case Study <ArrowRight size={16} />
            </span>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center opacity-40 group-hover:opacity-50 transition-all duration-700 group-hover:scale-110"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0IYUywUmFHLRozXCelm1tEyU0hp1UUuDhMDcv77VvATGamQsGXUA86M9OU7WXj7nkitJ-Plh8YvYjzvwJlLXhWjyIzY5i1u54QV13clSIpsFFK5L9KrF9CGHunxIhbqRZz1Wj8Vp8AENd3Su-0lUO7RfNyFgvdZ8PP0Lk8bT1pyRSGyb2p_zxATGasd8BT9QbhKVdZ9y-s8ZtevcnUlNNS_6CFFblyWrZ642oGVRssZ2ib_JVRv8wlGHXRhbl9vrRleyPqSo5Qw")' }}
            role="img"
            aria-label="Abstract 3D rendered nebula shapes in dark blue and purple"
          ></div>
        </div>
      </a>

      {/* 5. About Me */}
      <div className="md:col-span-1 lg:col-span-1 lg:row-span-2 glass-card rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(37,106,244,0.15)] hover:border-primary/30 group">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
          <User className="text-white" size={24} />
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">About Me</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          I am Radhe Ajay, a passionate developer bridging the gap between AI logic and modern web interfaces. Currently building the next generation of digital solutions.
        </p>
        <div className="mt-auto pt-4 border-t border-white/10">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Education</p>
          <p className="text-sm font-medium">Bachelor of Computer Applications</p>
          <p className="text-xs text-gray-400">MMDU University</p>
        </div>
      </div>

      {/* 6. Projects Count */}
      <div className="md:col-span-1 glass-card rounded-2xl p-6 flex flex-col justify-center items-center text-center transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
        <span className="text-4xl font-bold text-white mb-1">10+</span>
        <span className="text-sm text-gray-400">Projects Completed</span>
      </div>

      {/* 7. Learning Status */}
      <div className="md:col-span-1 glass-card rounded-2xl p-6 flex flex-col justify-center items-center text-center transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-purple-500">
        <span className="text-xl font-bold text-white mb-2"><Sparkles className="inline-block mb-1" size={28} /></span>
        <span className="text-sm font-bold text-white">Learning & Building</span>
        <span className="text-xs text-gray-400 mt-1">Daily</span>
      </div>

      {/* 8. Collaboration CTA */}
      <div className="md:col-span-2 lg:col-span-2 glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-r from-primary/10 to-transparent">
        <div>
          <h3 className="text-xl font-bold mb-2">Interested in collaboration?</h3>
          <p className="text-sm text-gray-400">I am currently available for freelance projects and consulting.</p>
        </div>
        <button className="whitespace-nowrap bg-white text-background-dark hover:bg-gray-200 text-sm font-bold py-3 px-6 rounded-lg transition-colors">
          Get in Touch
        </button>
      </div>

       {/* 9. My Project - Project X (Digital Twin equivalent) */}
      <a 
        href="https://github.com/radheajay" 
        target="_blank" 
        rel="noopener noreferrer"
        className="md:col-span-2 lg:col-span-2 glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group block cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 text-xs font-mono text-purple-300 bg-purple-500/10 rounded border border-purple-500/20">NEW PROJECT</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Project X: AI Assistant</h3>
            <p className="text-gray-400 mb-6">An intelligent personal assistant designed for content creators, automating workflow and editing processes.</p>
            
            <div className="flex items-center gap-4">
                 <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors">
                    <Play size={16} fill="currentColor" /> Demo
                 </button>
                 <button className="flex items-center gap-2 px-4 py-2 bg-white/5 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-colors border border-white/10">
                    <Github size={16} /> Source
                 </button>
            </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-[50px] pointer-events-none"></div>
    </a>

      {/* 10. Content Creation Section */}
      <div className="md:col-span-2 lg:col-span-2 glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center justify-between mb-4 z-10">
            <h3 className="text-xl font-bold flex items-center gap-2">
                <Video size={20} className="text-red-500" /> 
                Content Creation
            </h3>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-red-600 hover:text-white transition-colors">
                <Youtube size={18} />
            </a>
        </div>
        <div className="space-y-4 z-10 relative">
            <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                    <Play size={20} className="fill-current" />
                </div>
                <div>
                    <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">Building AI Apps from Scratch</p>
                    <p className="text-xs text-gray-500">Video Tutorial • 15k Views</p>
                </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Mic size={20} />
                </div>
                <div>
                    <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">The Future of Web Dev Podcast</p>
                    <p className="text-xs text-gray-500">Audio • Episode 42</p>
                </div>
            </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[60px] pointer-events-none"></div>
      </div>

      {/* 11. Radhe Section */}
      <div className="md:col-span-1 lg:col-span-1 glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 border border-primary/20 relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
         <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
            <Feather size={32} className="text-white" />
         </div>
         <h3 className="text-2xl font-bold mb-1 font-display tracking-tight">Radhe</h3>
         <p className="text-xs text-primary font-mono bg-primary/10 px-2 py-1 rounded mb-3">CREATIVE SOUL</p>
         <p className="text-sm text-gray-400 italic">"Innovating with code, inspiring with art."</p>
      </div>

    </div>
  );
};