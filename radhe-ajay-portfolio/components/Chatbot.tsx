import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are Radhe Ajay's Digital Twin, an AI assistant for his personal portfolio website.
Your persona is professional yet friendly, futuristic, and creative.
Your name is Radhe AI.
ALWAYS start the conversation with 'Radhe Radhe!' if you are greeting the user, or ensure your tone reflects this warmth.
You have access to the following information about Radhe:
- Role: BCA 4th Semester Student | AI & Web Visionary.
- Location: Bihar, India.
- Education: Bachelor of Computer Applications (4th Sem) from MMDU University.
- Tech Stack: Python, TensorFlow, React, Next.js, Java, Tailwind CSS.
- Key Projects:
  1. Advanced AI Chatbot (Featured): Built with Python, TensorFlow, React. A smart conversational agent.
  2. Project X: AI Assistant (New): A tool for content creators to automate workflows.
  3. Content Creation: 'Building AI Apps from Scratch' video series, 'The Future of Web Dev Podcast'.
- Interests: Neural networks, generative art, scalable web architectures.
- Status: Open for freelance projects and consulting.

Your goal is to answer visitor questions about Radhe's background, skills, and projects.
Keep answers concise (under 3-4 sentences) unless asked for details.
If asked about contacting Radhe, direct them to the 'Contact' button or social links on the site.
Do not make up projects that are not listed here.
Adopt a style that fits the 'Glassmorphism' and 'Futuristic' theme of the site.`;

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  useEffect(() => {
    const initChat = async () => {
        try {
            // Retrieve API key from VITE_GEMINI_API_KEY as requested.
            // Using process.env to maintain compatibility with the environment's injection method.
            const apiKey = process.env.VITE_GEMINI_API_KEY;
            
            if (!apiKey) {
                console.warn("VITE_GEMINI_API_KEY is missing. Chat functionality may not work.");
            }

            const ai = new GoogleGenAI({ apiKey: apiKey || '' });
            chatRef.current = ai.chats.create({
                model: 'gemini-3-flash-preview',
                config: {
                    systemInstruction: SYSTEM_INSTRUCTION,
                }
            });
            // Initial greeting stored in state only (not sent to API)
            setMessages([
                { role: 'model', text: "Radhe Radhe! I'm Radhe's Digital Twin. How can I help you explore my portfolio today?" }
            ]);
        } catch (e) {
            console.error("Failed to init chat", e);
        }
    };
    initChat();
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading || !chatRef.current) return;
    
    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
        const response = await chatRef.current.sendMessage({ message: userMessage });
        const text = response.text || "I'm processing that thought...";
        setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
        console.error("Chat error", error);
        setMessages(prev => [...prev, { role: 'model', text: "Connection interrupted. Please try again." }]);
    } finally {
        setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
        {/* Chat Window */}
        <div 
            className={`
                pointer-events-auto
                mb-4 w-[350px] sm:w-[380px] max-h-[600px] h-[500px] 
                bg-[#101622]/80 backdrop-blur-xl border border-primary/30 
                rounded-2xl shadow-[0_0_40px_rgba(37,106,244,0.2)] 
                flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right
                ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none h-0 mb-0'}
            `}
        >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary/20 to-purple-600/20 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-lg shadow-primary/20">
                        <Sparkles size={20} className="text-white" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-sm">Radhe AI</h3>
                        <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-xs text-primary font-mono">Digital Twin</span>
                        </div>
                    </div>
                </div>
                <button 
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                >
                    <X size={18} />
                </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div 
                            className={`
                                max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed
                                ${msg.role === 'user' 
                                    ? 'bg-primary text-white rounded-tr-none shadow-lg shadow-primary/20' 
                                    : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-none backdrop-blur-md'
                                }
                            `}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                             <Loader2 size={16} className="text-primary animate-spin" />
                             <span className="text-xs text-gray-400">Thinking...</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white/5 border-t border-white/10">
                <div className="relative flex items-center">
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Ask about Radhe's projects..."
                        className="w-full bg-[#0b0f17]/50 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 placeholder:text-gray-500 transition-all"
                    />
                    <button 
                        onClick={handleSend}
                        disabled={!input.trim() || isLoading}
                        className="absolute right-2 p-2 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-lg transition-all disabled:opacity-50 disabled:hover:bg-primary/20 disabled:cursor-not-allowed"
                    >
                        <Send size={16} />
                    </button>
                </div>
            </div>
        </div>

        {/* Toggle Button */}
        <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`
                pointer-events-auto
                w-14 h-14 rounded-full 
                bg-gradient-to-r from-primary to-blue-600
                shadow-[0_0_30px_rgba(37,106,244,0.4)]
                flex items-center justify-center
                text-white transition-all duration-300
                hover:scale-110 hover:shadow-[0_0_40px_rgba(37,106,244,0.6)]
                border border-white/20
                ${isOpen ? 'rotate-90' : 'rotate-0'}
            `}
        >
            {isOpen ? <X size={24} /> : <MessageSquare size={24} fill="currentColor" />}
        </button>
    </div>
  );
};