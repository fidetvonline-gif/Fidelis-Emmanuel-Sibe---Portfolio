import React from 'react';
import { Award, Trophy, Sparkles, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section className="py-16 border-b border-[#262626] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Trophy Card */}
          <div className="lg:col-span-5 p-8 rounded bg-[#0F0F0F] border border-[#BEF264]/50 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-[#BEF264]/5 pointer-events-none group-hover:scale-110 transition-transform">
              <Trophy className="w-48 h-48" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#BEF264]/10 border border-[#BEF264]/40 text-[#BEF264] text-[10px] font-mono font-bold uppercase tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5 text-[#BEF264]" />
                Featured Hackathon Recognition
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
                Winner — Google Build with AI Uyo Challenge
              </h3>

              <p className="text-sm text-[#AAA] leading-relaxed font-sans">
                Awarded First Place for designing and engineering <strong className="text-[#BEF264]">Attendix</strong> — a practical biometric attendance & intelligent analytics solution utilizing WebAuthn hardware security and Gemini AI generative logs.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#BEF264]">
                <span className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-[#BEF264]" />
                  Google AI Ecosystem
                </span>
                <span className="text-[#444]">•</span>
                <span className="text-[#888]">Uyo, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Credibility Highlights Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-6 rounded bg-[#0F0F0F] border border-[#262626] space-y-2">
              <div className="p-2.5 w-fit rounded bg-[#0A0A0A] border border-[#262626] text-[#BEF264]">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base font-sans">Student Technology</h4>
              <p className="text-xs text-[#888] leading-relaxed">
                Building accessible digital platforms like Global Student Network and FedPoly Ukana academic tools.
              </p>
            </div>

            <div className="p-6 rounded bg-[#0F0F0F] border border-[#262626] space-y-2">
              <div className="p-2.5 w-fit rounded bg-[#0A0A0A] border border-[#262626] text-[#BEF264]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base font-sans">Digital Media & Streaming</h4>
              <p className="text-xs text-[#888] leading-relaxed">
                Founder of FIDE TV / FideTV Media, operating digital media portals and live video distribution systems.
              </p>
            </div>

            <div className="p-6 rounded bg-[#0F0F0F] border border-[#262626] space-y-2">
              <div className="p-2.5 w-fit rounded bg-[#0A0A0A] border border-[#262626] text-[#BEF264]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base font-sans">AI & Emerging Tech</h4>
              <p className="text-xs text-[#888] leading-relaxed">
                Integrating Gemini APIs and generative intelligence to turn passive data into actionable insights.
              </p>
            </div>

            <div className="p-6 rounded bg-[#0F0F0F] border border-[#262626] space-y-2">
              <div className="p-2.5 w-fit rounded bg-[#0A0A0A] border border-[#262626] text-[#BEF264]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base font-sans">End-to-End Delivery</h4>
              <p className="text-xs text-[#888] leading-relaxed">
                Handling product lifecycle from initial idea to UI execution, databases, authentication, and deployment.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
