import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, FileText, Code2, ExternalLink } from 'lucide-react';
import { siteData } from '../data/site';

interface NavbarProps {
  onOpenAiAssistant: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAiAssistant, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Open Source', href: '#opensource' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#262626] py-3.5 shadow-2xl'
          : 'bg-[#0A0A0A]/80 backdrop-blur-sm border-b border-[#262626]/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl font-black tracking-tighter text-[#BEF264] font-sans">
              FIDE<span className="text-white">.</span>
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono font-bold tracking-[0.2em] text-[#666] uppercase pl-2 border-l border-[#262626]">
              Software Engineer
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-[11px] uppercase tracking-[0.2em] font-semibold text-[#888]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenAiAssistant}
              className="px-3.5 py-1.5 rounded border border-[#BEF264]/40 bg-[#BEF264]/10 text-[#BEF264] text-[11px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all hover:bg-[#BEF264] hover:text-black"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Ask AI</span>
            </button>

            <button
              onClick={onOpenResume}
              className="px-3.5 py-1.5 rounded border border-[#262626] bg-[#111] text-white text-[11px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all hover:border-[#BEF264] hover:text-[#BEF264]"
            >
              <FileText className="w-3.5 h-3.5 text-[#888]" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenAiAssistant}
              className="px-2.5 py-1.5 rounded border border-[#BEF264]/40 bg-[#BEF264]/10 text-[#BEF264] text-[11px] font-mono font-bold flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-[#BEF264]" />
              <span>AI</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded border border-[#262626] bg-[#111] text-[#AAA] hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-[#262626] px-4 pt-4 pb-6 space-y-4 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-[0.15em] font-semibold text-[#888]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded border border-[#1A1A1A] bg-[#0D0D0D] text-[#AAA] hover:bg-[#111] hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#262626] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded border border-[#262626] bg-[#111] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#888]" />
              <span>View Resume</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiAssistant();
              }}
              className="w-full py-2.5 rounded border border-[#BEF264] bg-[#BEF264] text-black text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Ask Fidelis's AI Assistant</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
