import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Send, Loader2, Bot, User, RefreshCw, HelpCircle } from 'lucide-react';

interface AiAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  sender: 'ai' | 'user';
  text: string;
}

export const AiAssistantDrawer: React.FC<AiAssistantDrawerProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: "Hi! I'm Fidelis Sibe's AI Assistant. Ask me anything about Fidelis's software projects (Attendix, FIDE TV, GSN), tech stack, education at FedPoly Ukana, or availability for collaboration."
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sampleQuestions = [
    "Tell me about Attendix & Google challenge",
    "What is Fidelis's core tech stack?",
    "What digital platforms did Fidelis build?",
    "How can I work with Fidelis?"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  if (!isOpen) return null;

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || inputVal;
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = { sender: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInputVal('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai-ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: textToSend })
      });

      const data = await res.json();
      const aiMsg: Message = {
        sender: 'ai',
        text: data.answer || "Fidelis Emmanuel Sibe is a Software Engineer & Web Developer based in Nigeria."
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error('AI drawer error:', err);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: "Fidelis Emmanuel Sibe is a Software Engineer specializing in React, Next.js, TypeScript, Supabase, and AI integrations."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-md h-full bg-[#0A0A0A] border-l border-[#262626] shadow-2xl flex flex-col justify-between">
        
        {/* Drawer Header */}
        <div className="px-5 py-4 bg-[#0F0F0F] border-b border-[#262626] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded bg-[#0A0A0A] text-[#BEF264] border border-[#262626]">
              <Sparkles className="w-4 h-4 text-[#BEF264]" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm font-sans flex items-center gap-1.5">
                <span>Fidelis Sibe AI Assistant</span>
              </h3>
              <span className="text-[10px] font-mono text-[#BEF264] uppercase tracking-wider font-bold">Gemini Generative Engine</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded bg-[#0A0A0A] border border-[#262626] text-[#AAA] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages Body */}
        <div className="p-4 flex-1 overflow-y-auto space-y-4 text-xs font-sans">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`p-2 rounded text-xs shrink-0 ${
                  m.sender === 'user' ? 'bg-[#BEF264] text-black font-bold' : 'bg-[#0F0F0F] border border-[#262626] text-[#BEF264]'
                }`}
              >
                {m.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
              </div>

              <div
                className={`p-3.5 rounded max-w-[82%] leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-[#BEF264] text-black font-medium text-xs font-sans'
                    : 'bg-[#0F0F0F] border border-[#262626] text-[#AAA] font-sans'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-[#AAA] font-mono text-xs pl-2">
              <Loader2 className="w-3.5 h-3.5 animate-spin text-[#BEF264]" />
              <span>Analyzing portfolio data...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Queries */}
        <div className="px-4 py-3 border-t border-[#262626] bg-[#0F0F0F]">
          <span className="text-[10px] font-mono text-[#666] mb-1.5 block uppercase tracking-wider font-bold">Suggested Prompts:</span>
          <div className="flex flex-wrap gap-1.5">
            {sampleQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q)}
                className="px-2.5 py-1 rounded bg-[#0A0A0A] hover:border-[#BEF264] text-[#AAA] text-[10px] font-mono border border-[#262626] text-left transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Drawer Input Footer */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-4 bg-[#0F0F0F] border-t border-[#262626] flex items-center gap-2"
        >
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Ask AI about Fidelis's engineering work..."
            className="flex-1 px-3.5 py-2.5 rounded bg-[#0A0A0A] border border-[#262626] text-xs text-white placeholder-[#555] outline-none focus:border-[#BEF264]"
          />
          <button
            type="submit"
            disabled={loading || !inputVal.trim()}
            className="p-2.5 rounded bg-[#BEF264] hover:bg-[#d4fc79] text-black font-bold transition-all disabled:opacity-40"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
