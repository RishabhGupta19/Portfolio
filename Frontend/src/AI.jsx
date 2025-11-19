import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Send, Loader, Bot, X, MessageCircle, Sparkles } from 'lucide-react';

const API_ENDPOINT = 'https://rag-backend-mu58.onrender.com/query';

const MessageBubble = ({ message }) => {
  const isAgent = message.role === 'agent';
  return (
    <div className={`flex ${isAgent ? 'justify-start' : 'justify-end'} mb-4 animate-fadeIn`}>
      <div className={`max-w-[85%] sm:max-w-[75%] ${isAgent ? 'flex items-start gap-2' : ''}`}>
        {isAgent && (
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
            <Bot size={18} className="text-white" />
          </div>
        )}

        <div className={`p-4 rounded-2xl shadow-xl backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02] ${
          isAgent
            ? 'bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-cyan-500/30 text-white rounded-tl-sm'
            : 'bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-600 border-cyan-400/50 text-white rounded-tr-sm shadow-cyan-500/30'
        }`}>
          <p className="whitespace-pre-wrap leading-relaxed text-sm sm:text-base">{message.text}</p>
          {isAgent && (
            <div className="mt-2 flex items-center gap-1 text-xs text-cyan-400/60">
              <Sparkles size={12} />
              <span>AI Generated</span>
            </div>
          )}
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
      text: "Hi! I'm Rishabh's AI Portfolio Assistant powered by RAG technology. Ask me anything about his skills, projects, education, or experience!",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messageHistory]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleQuery = useCallback(async (e) => {
    e.preventDefault();
    const text = query.trim();
    if (!text) return;

    setMessageHistory(prev => [...prev, { role: 'user', text }]);
    setQuery('');
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: text }),
      });

      if (!res.ok) throw new Error('Backend unavailable');
      const data = await res.json();

      setMessageHistory(prev => [...prev, {
        role: 'agent',
        text: data.answer || data.reply || "No response received",
        sources: data.sources || []
      }]);
    } catch (err) {
      setError(err.message);
      setMessageHistory(prev => [...prev, {
        role: 'agent',
        text: `Sorry, I'm having trouble connecting right now. Please try again later.`,
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  const quickQuestions = [
    "What are Rishabh's top skills?",
    "Tell me about his projects",
    "What's his education background?",
  ];

  const handleQuickQuestion = (q) => {
    setQuery(q);
    inputRef.current?.focus();
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-60 animate-pulse" />
        
        <div className="relative flex flex-col items-center">
          {!isOpen && (
            <div className="mb-3 px-3 py-1.5 bg-slate-900/90 backdrop-blur-xl border border-cyan-500/30 rounded-full shadow-lg animate-bounce-smooth">
              <span className="text-xs font-medium text-cyan-400 flex items-center gap-1">
                <Sparkles size={12} className="animate-pulse" />
                AI Assistant
              </span>
            </div>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-600 rounded-full shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
          >
            
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
            {isOpen ? (
              <X size={24} className="text-white group-hover:rotate-90 transition-transform" />
            ) : (
              <MessageCircle size={24} className="text-white group-hover:scale-110 transition-transform" />
            )}
          </button>
        </div>
      </div>

      {/* Chat Window - Only ONE Green Dot Here */}
      {isOpen && (
        <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[420px] lg:w-[480px] h-[75vh] sm:h-[600px] max-h-[calc(100vh-140px)] bg-slate-900/95 backdrop-blur-2xl shadow-2xl rounded-2xl border border-cyan-500/30 flex flex-col overflow-hidden z-50 animate-slideUp">
          
          {/* Header with Single Green Online Dot */}
          <header className="relative p-4 bg-gradient-to-r from-slate-800/90 via-slate-800/90 to-slate-900/90 border-b border-cyan-500/30">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, cyan 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }} />
            

            <div className="relative flex items-center justify-between">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <div className="absolute -bottom-1 left-7">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                    </div>
                  <Bot className="w-6 h-6 text-white" />
                  
                </div>
                {/* Small Blinking Green Online Dot */}
                    


                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg flex items-center gap-2">
                    AI Portfolio Assistant
                    <Sparkles size={16} className="text-cyan-400" />
                    {/* SINGLE GREEN DOT - Exactly where you wanted */}
                    {/* <span className="relative flex ml-2">
                      <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-80"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-lg shadow-emerald-500/50"></span>
                    </span> */}
                  </h3>
                  {/* <p className="text-xs text-emerald-400 font-medium">Online</p> */}
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 p-2 rounded-lg transition-all hover:rotate-90"
              >
                <X size={20} />
              </button>
            </div>
          </header>

          {/* Quick Questions */}
          {messageHistory.length === 1 && (
            <div className="p-4 bg-slate-800/30 border-b border-cyan-500/10">
              <p className="text-xs text-slate-400 mb-2 font-medium">Quick Questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q, i) => (
                  <button key={i} onClick={() => handleQuickQuestion(q)}
                    className="text-xs px-3 py-1.5 bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 rounded-full text-slate-300 hover:text-cyan-400 transition-all hover:scale-105">
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="flex-grow p-4 space-y-4 overflow-y-auto bg-gradient-to-b from-slate-950/40 to-slate-900/40 custom-scrollbar">
            {messageHistory.map((msg, i) => (
              <MessageBubble key={i} message={msg} />
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-cyan-400 p-3 bg-slate-800/50 rounded-xl w-fit backdrop-blur border border-cyan-500/20 animate-pulse">
                <Loader className="w-4 h-4 animate-spin" />
                <span className="text-sm">Thinking...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <footer className="p-4 border-t border-cyan-500/30 bg-slate-800/80 backdrop-blur-xl">
            <form onSubmit={handleQuery} className="flex gap-2">
              <div className="flex-grow relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask about skills, projects, experience..."
                  className="w-full p-3 pr-12 bg-slate-900/60 border border-slate-700 hover:border-cyan-500/50 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 rounded-xl text-white text-sm placeholder-slate-500 transition-all outline-none"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 text-xs">
                  {query.length}/200
                </div>
              </div>
              <button
                type="submit"
                disabled={!query.trim() || isLoading}
                className="px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 transition-all group"
              >
                <Send size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
            <div className="mt-2 text-center text-xs text-slate-500">
              Powered by RAG & AI
            </div>
          </footer>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes bounce-smooth { 0%, 100% { transform: translateY(-8px); } 50% { transform: translateY(-2px); } }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out; }
        .animate-slideUp { animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .animate-bounce-smooth { animation: bounce-smooth 2s infinite ease-in-out; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(15, 23, 42, 0.3); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, rgba(6, 182, 212, 0.6), rgba(37, 99, 235, 0.6));
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default PortfolioAIChatbot;
