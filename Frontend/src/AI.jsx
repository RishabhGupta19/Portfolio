import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Send, Loader, BookOpen, Bot, X, MessageCircle } from 'lucide-react';

const API_ENDPOINT = 'https://rag-backend-mu58.onrender.com/query';

// Responsive Message Bubble
const MessageBubble = ({ message }) => {
  const isAgent = message.role === 'agent';
  return (
    <div className={`flex flex-col max-w-full sm:max-w-xl mb-4 ${isAgent ? 'items-start' : 'items-end'}`}>
      <div className={`p-3 sm:p-4 rounded-2xl shadow-lg backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02] ${
        isAgent
          ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-cyan-500/30 text-white'
          : 'bg-gradient-to-br from-cyan-500 to-blue-500 border-cyan-400/50 text-white'
      }`}>
        <p className="whitespace-pre-wrap leading-relaxed text-sm sm:text-base">{message.text}</p>
      </div>

      
    </div>
  );
};

// Main Chatbot Component
const PortfolioAIChatbot = () => {
  const [query, setQuery] = useState('');
  const [messageHistory, setMessageHistory] = useState([
    {
      role: 'agent',
      text: "Welcome! I'm Rishabh's AI Portfolio Assistant. Ask me about skills, projects, and experience!",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messageHistory]);

  const handleQuery = useCallback(
    async (e) => {
      e.preventDefault();
      const text = query.trim();
      if (!text) return;

      setMessageHistory((prev) => [...prev, { role: 'user', text }]);
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

        setMessageHistory((prev) => [...prev, { role: 'agent', text: data.answer, sources: data.sources || [] }]);
      } catch (err) {
        setError(err.message);
        setMessageHistory((prev) => [...prev, { role: 'agent', text: `ERROR: ${err.message}`, sources: [] }]);
      } finally {
        setIsLoading(false);
      }
    },
    [query]
  );

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 flex flex-col items-center pointer-events-none">
        {/* Bouncing label ABOVE icon */}
        <span className="ai-label inline-block text-xs text-white bg-slate-800/70 border border-cyan-500/20 px-2 py-1 rounded-full mb-2 animate-bounce-slow shadow-sm pointer-events-auto">
          AI assistant
        </span>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle AI Assistant"
          className="pointer-events-auto cursor-pointer w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-xl hover:scale-110 flex items-center justify-center transition-all"
        >
          {isOpen ? <X size={26} className="text-white" /> : <MessageCircle size={26} className="text-white" />}
        </button>

        <style>{`
          .ai-label {
            letter-spacing: 0.4px;
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(-4px); }
            50% { transform: translateY(2px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 1.4s infinite ease-in-out;
          }
        `}</style>
      </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle AI Assistant"
          className="pointer-events-auto cursor-pointer w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-xl hover:scale-110 flex items-center justify-center transition-all"
        >
          {isOpen ? <X size={26} className="text-white" /> : <MessageCircle size={26} className="text-white" />}
        </button>

        <style>{` 
          .ai-label { 
            letter-spacing: 0.4px; 
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(-6px); }
            50% { transform: translateY(0); }
          }
          .animate-bounce-slow { animation: bounce-slow 1.6s infinite ease-in-out; }
        `}</style>
      

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-8 w-[92%] sm:w-full max-w-lg h-[70vh] sm:h-[600px] bg-slate-900/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-cyan-500/20 flex flex-col overflow-hidden z-50">
          {/* Header */}
          <header className="flex items-center justify-between p-3 sm:p-4 bg-slate-800/80 border-b border-cyan-500/20">
            <div className="flex items-center gap-3">
              <Bot className="w-7 h-7 text-cyan-400 animate-pulse" />
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg">AI Portfolio Assistant</h3>
                <p className="text-xs text-cyan-400">RAG Powered</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-cyan-400">
              <X size={20} />
            </button>
          </header>

          {/* Messages */}
          <div className="flex-grow p-3 sm:p-4 space-y-4 overflow-y-auto bg-slate-950/40 custom-scrollbar">
            {messageHistory.map((msg, i) => (
              <MessageBubble key={i} message={msg} />
            ))}

            {isLoading && (
              <div className="flex items-center text-cyan-400 p-2 bg-slate-800/50 rounded-xl w-fit">
                <Loader className="w-4 h-4 mr-2 animate-spin" /> Thinking...
              </div>
            )}

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <footer className="p-3 sm:p-4 border-t border-cyan-500/20 bg-slate-800/80">
            <form onSubmit={handleQuery} className="flex gap-2 sm:gap-3">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about skills, projects..."
                className="flex-grow p-2 sm:p-3 bg-slate-900/40 border border-slate-700 rounded-xl text-white text-sm sm:text-base focus:ring-2 focus:ring-cyan-400"
              />

              <button
                type="submit"
                disabled={!query.trim() || isLoading}
                className="px-4 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl shadow-md hover:scale-105 disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </form>
          </footer>
        </div>
      )}

      {/* Scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(6, 182, 212, 0.5); border-radius: 10px; }
      `}</style>
    </>
  );
};

export default PortfolioAIChatbot;
