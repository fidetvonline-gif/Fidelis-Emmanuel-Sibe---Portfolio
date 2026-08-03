import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Play, RotateCcw, Copy, Check, Sparkles } from 'lucide-react';

export const TerminalHero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: string[] }>>([
    {
      cmd: 'whoami',
      output: [
        'Fidelis Emmanuel Sibe — Software Engineer & Web Developer',
        'Location: Nigeria',
        'Education: HND Computer Science (FedPoly Ukana)',
        'Founder: FIDE TV / FideTV Media'
      ]
    },
    {
      cmd: 'build --product',
      output: [
        '> designing user interface...',
        '> architecting system & database tables...',
        '> writing type-safe TypeScript & React components...',
        '> integrating generative AI analytics APIs...',
        '> deploying application to production environment...'
      ]
    }
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  const handleCommand = (command: string) => {
    const cleanCmd = command.trim().toLowerCase();
    let out: string[] = [];

    if (cleanCmd === 'whoami') {
      out = [
        'Fidelis Emmanuel Sibe — Software Engineer & Web Developer',
        'Role: Full-Stack Product Developer & AI Application Specialist',
        'Focus: Modern web apps, student platforms, media streaming & AI solutions'
      ];
    } else if (cleanCmd === 'build --product' || cleanCmd === 'build') {
      out = [
        '[BUILDING PRODUCT SYSTEM]',
        '> Attendix (Biometric Attendance & AI Analytics) — Winner Google Challenge',
        '> FIDE TV (Media & Streaming Portal — fidetv.online)',
        '> Global Student Network (Advocacy Platform)',
        '> FedPoly Ukana Academic Platform'
      ];
    } else if (cleanCmd === 'skills' || cleanCmd === 'cat skills') {
      out = [
        'Languages: TypeScript, JavaScript, PHP, SQL, HTML, CSS',
        'Frontend: React, Next.js, Tailwind CSS',
        'Backend: Node.js, PHP, Express, REST APIs',
        'Database: Supabase, PostgreSQL, Firebase',
        'AI: Gemini API, Generative Analytics, Intelligent Tools'
      ];
    } else if (cleanCmd === 'status') {
      out = [
        'STATUS: BUILDING & EXPERIMENTING',
        'Availability: Open for software engineering roles, web dev contracts & AI products',
        'Contact: fidetvonline@gmail.com'
      ];
    } else if (cleanCmd === 'clear') {
      setHistory([]);
      return;
    } else if (cleanCmd === 'help') {
      out = [
        'Available commands:',
        '  whoami          — View developer credentials',
        '  build --product — View flagship systems built',
        '  skills          — Print technical stack',
        '  status          — Check building status & availability',
        '  clear           — Clear terminal display'
      ];
    } else {
      out = [`Command not found: "${command}". Type "help" for available commands.`];
    }

    setHistory((prev) => [...prev, { cmd: command, output: out }]);
    setInputVal('');
  };

  const handleCopy = () => {
    const text = history.map((h) => `$ ${h.cmd}\n${h.output.join('\n')}`).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="w-full rounded border border-[#262626] bg-[#0F0F0F] shadow-2xl overflow-hidden text-xs font-mono text-[#AAA] transition-all hover:border-[#333]">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#080808] border-b border-[#262626]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          <span className="ml-2 text-[11px] text-[#666] font-mono font-medium flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#BEF264]" />
            fidelis@sibe:~$
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="p-1 text-[#666] hover:text-[#BEF264] rounded transition-colors"
            title="Copy log"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#BEF264]" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setHistory([])}
            className="p-1 text-[#666] hover:text-white rounded transition-colors"
            title="Clear"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Output Body */}
      <div className="p-4 sm:p-5 max-h-[340px] overflow-y-auto space-y-3 font-mono text-xs leading-relaxed">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-[#BEF264] font-bold">
              <span className="text-[#666]">fidelis@sibe:~$</span>
              <span className="text-white">{item.cmd}</span>
            </div>
            {item.output.map((line, lIdx) => (
              <div
                key={lIdx}
                className={`pl-3 ${
                  line.startsWith('>')
                    ? 'text-[#666]'
                    : line.startsWith('STATUS') || line.startsWith('Winner') || line.startsWith('Fidelis')
                    ? 'text-[#BEF264] font-bold'
                    : 'text-[#888]'
                }`}
              >
                {line}
              </div>
            ))}
          </div>
        ))}

        {/* Input prompt line */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (inputVal.trim()) handleCommand(inputVal);
          }}
          className="flex items-center gap-2 pt-1"
        >
          <span className="text-[#BEF264] font-bold">fidelis@sibe:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder='Type command e.g. "skills", "whoami", "help"...'
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-[#555] font-mono text-xs"
          />
        </form>
        <div ref={bottomRef} />
      </div>

      {/* Quick Action Command Chips */}
      <div className="px-4 py-2.5 bg-[#080808] border-t border-[#262626] flex flex-wrap items-center justify-between gap-2 text-[10px]">
        <span className="text-[#555] font-mono uppercase tracking-wider">Quick Commands:</span>
        <div className="flex flex-wrap items-center gap-1.5 font-mono">
          <button
            onClick={() => handleCommand('whoami')}
            className="px-2 py-0.5 rounded bg-[#111] hover:bg-[#BEF264] hover:text-black text-[#AAA] border border-[#262626] transition-colors"
          >
            $ whoami
          </button>
          <button
            onClick={() => handleCommand('build --product')}
            className="px-2 py-0.5 rounded bg-[#111] hover:bg-[#BEF264] hover:text-black text-[#AAA] border border-[#262626] transition-colors"
          >
            $ build --product
          </button>
          <button
            onClick={() => handleCommand('skills')}
            className="px-2 py-0.5 rounded bg-[#111] hover:bg-[#BEF264] hover:text-black text-[#AAA] border border-[#262626] transition-colors"
          >
            $ skills
          </button>
        </div>
      </div>
    </div>
  );
};
