import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Send, Loader2, Bot, X, MessageSquare, Sparkles, User, ChevronRight, Terminal } from 'lucide-react';

const API_ENDPOINT = 'https://rag-backend-mu58.onrender.com/query';

const MessageBubble = ({ message }) => {
  const isAgent = message.role === 'agent';
  
  return (
    <div className={`flex ${isAgent ? 'justify-start' : 'justify-end'} mb-6 animate-in fade-in slide-in-from-bottom-4 duration-300`}>
      <div className={`flex max-w-[85%] md:max-w-[75%] ${isAgent ? 'flex-row' : 'flex-row-reverse'} gap-3`}>
        
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-lg mt-1 ${
          isAgent 
            ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white' 
            : 'bg-slate-700 text-slate-300'
        }`}>
          {isAgent ? <Bot size={16} /> : <User size={16} />}
        </div>

        {/* Bubble */}
        <div className={`group relative p-4 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg ${
          isAgent
            ? 'bg-slate-800/80 backdrop-blur-md border border-slate-700/50 text-slate-100 '
            : 'bg-gradient-to-br from-cyan-600 to-blue-600 text-white  shadow-cyan-900/20'
        }`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
          
          

          {/* Timestamp/Icon Decoration */}
          <div className={`absolute -bottom-5 ${isAgent ? 'left-0' : 'right-0'} text-[10px] text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity`}>
            {isAgent ? 'AI Assistant' : 'You'}
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioAIChatbot = () => {
  const [query, setQuery] = useState('');
  const [messageHistory, setMessageHistory] = useState([
    {
      role: 'agent',
      text: "Hello! I'm Rishabh's AI Assistant. I can answer questions about his MERN stack projects, experience, or technical skills using RAG technology. What would you like to know?",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messageHistory, isLoading]);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleQuery = useCallback(async (e) => {
    e.preventDefault();
    const text = query.trim();
    if (!text) return;

    // 1. Add User Message
    setMessageHistory(prev => [...prev, { role: 'user', text }]);
    setQuery('');
    setIsLoading(true);

    try {
      // 2. Call Backend
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: text }),
      });

      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();

      // 3. Add AI Response
      setMessageHistory(prev => [...prev, {
        role: 'agent',
        text: data.answer || data.reply || "I couldn't find an answer to that in Rishabh's portfolio data.",
        sources: data.sources || []
      }]);
    } catch (err) {
      setMessageHistory(prev => [...prev, {
        role: 'agent',
        text: "I'm currently having trouble connecting to the server. Please try asking me again in a moment.",
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  const quickQuestions = [
    "What are his key skills?",
    "Tell me about his projects",
    "Does he know AWS?",
    "How can I contact him?"
  ];

  return (
    <>
      {/* --- Global Styles for Animations --- */}
      <style>{`
        @keyframes blob-bounce {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10px, -10px) scale(1.1); }
        }
        .animate-blob-bounce { animation: blob-bounce 5s infinite ease-in-out; }
        
        /* Custom Scrollbar */
        .chat-scrollbar::-webkit-scrollbar { width: 5px; }
        .chat-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .chat-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
        .chat-scrollbar::-webkit-scrollbar-thumb:hover { background: #475569; }
      `}</style>

      {/* --- Floating Trigger Button --- */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Pulse Effect */}
        <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
        
        {/* Tooltip (Only visible when closed) */}
        {!isOpen && (
          <div className="absolute bottom-full right-0 mb-4 w-40 bg-slate-900/90 backdrop-blur text-xs text-cyan-300 p-3 rounded-xl border border-cyan-500/30 shadow-xl transform origin-bottom-right animate-in fade-in zoom-in duration-300">
            <div className="flex items-center gap-2">
               <Sparkles size={12} className="animate-pulse text-yellow-400"/>
               <span>Ask AI about me!</span>
            </div>
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-slate-900/90 border-r border-b border-cyan-500/30 rotate-45"></div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/50 rounded-full shadow-2xl flex items-center justify-center text-cyan-400 hover:text-white hover:border-cyan-400 hover:scale-110 transition-all duration-300 group"
        >
           {isOpen ? (
             <X size={24} className="transition-transform duration-300 group-hover:rotate-90"/>
           ) : (
             <Bot size={28} className="transition-transform duration-300 group-hover:scale-110"/>
           )}
        </button>
      </div>

      {/* --- Main Chat Window --- */}
      {isOpen && (
        // <div className="fixed bottom-24 right-4 sm:right-6 w-[90vw] sm:w-[400px] md:w-[450px] h-[600px] max-h-[80vh] bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-50 animate-in slide-in-from-bottom-10 fade-in duration-300">
      <div className="
  fixed bottom-24 right-4 sm:right-6 
  w-[90vw] sm:w-[400px] md:w-[450px] 
  h-[550px]
  bg-[#0f172a]/90 backdrop-blur-xl 
  border border-white/10 rounded-lg shadow-2xl 
  flex flex-col 
  z-50 animate-in slide-in-from-bottom-10 fade-in duration-300
">

  {/* Ambient Background Glow */}
  <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
  <div className="absolute bottom-[-50px] right-[-50px] w-32 h-32 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

  {/* Header - Sticky */}
  <div className="shrink-0 p-4 bg-white/5 border-b border-white/5 flex items-center justify-between backdrop-blur-md">
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
          <Bot size={20} className="text-white"/>
        </div>
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>
      </div>
      <div>
        <h3 className="font-bold text-white text-sm flex items-center gap-1">
          Portfolio AI <Sparkles size={12} className="text-yellow-400"/>
        </h3>
        <p className="text-[11px] text-cyan-200/70">Powered by RAG</p>
      </div>
    </div>
    <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors">
      <X size={18}/>
    </button>
  </div>

  {/* Scrollable Messages Area */}
  <div className="flex-1 overflow-y-auto p-4 space-y-6 chat-scrollbar relative z-10">
    {messageHistory.map((msg, idx) => (
      <MessageBubble key={idx} message={msg} />
    ))}

    {isLoading && (
      <div className="flex justify-start animate-in fade-in duration-300">
        <div className="bg-slate-800/80 border border-slate-700/50 px-4 py-3 rounded-2xl  flex items-center gap-2 text-cyan-400 text-sm">
          <Loader2 size={16} className="animate-spin"/>
          <span>Analyzing portfolio...</span>
        </div>
      </div>
    )}
    <div ref={messagesEndRef} />
  </div>

  {/* Quick Prompts */}
  {messageHistory.length < 3 && !isLoading && (
    <div className="shrink-0 px-4 pb-2 overflow-x-auto flex gap-2 scrollbar-hide z-10">
      {quickQuestions.map((q, i) => (
        <button 
          key={i}
          onClick={() => { setQuery(q); inputRef.current?.focus(); }}
          className="whitespace-nowrap text-xs px-3 py-1.5 bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 rounded-full transition-all hover:scale-105"
        >
          {q}
        </button>
      ))}
    </div>
  )}

  {/* Input Area - Fixed */}
  <div className="shrink-0 p-4 bg-slate-900/80 backdrop-blur-md border-t border-white/5 z-20">
    <form onSubmit={handleQuery} className="relative flex items-center gap-2">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask me anything..."
        className="w-full bg-slate-950/50 border border-slate-700 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
      />
      <button 
        type="submit"
        disabled={isLoading || !query.trim()}
        className="absolute right-2 bg-cyan-500 hover:bg-cyan-400 text-white p-2 rounded-lg disabled:opacity-50 disabled:hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-500/20"
      >
        <Send size={16} className={isLoading ? 'opacity-0' : 'opacity-100'}/>
        {isLoading && <Loader2 size={16} className="absolute inset-0 m-auto animate-spin"/>}
      </button>
    </form>
    <p className="text-[10px] text-slate-600 text-center mt-1">AI can make mistakes. Check important info.</p>
  </div>

</div>
      )}
    </>
  );
};

export default PortfolioAIChatbot;
