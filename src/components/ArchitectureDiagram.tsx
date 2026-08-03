import React, { useState } from 'react';
import { ArchitectureNode } from '../data/projects';
import { User, Fingerprint, Globe, Database, Sparkles, LayoutDashboard, Video, FileText, Tv, Layout, Smartphone, Shield, MessageSquare, Users, CheckCircle2, Lock, BookOpen, CreditCard, Bell, ArrowRight, Check } from 'lucide-react';

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[];
  projectTitle: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ nodes, projectTitle }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'User': return <User className="w-5 h-5 text-emerald-400" />;
      case 'Fingerprint': return <Fingerprint className="w-5 h-5 text-lime-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Database': return <Database className="w-5 h-5 text-teal-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'LayoutDashboard': return <LayoutDashboard className="w-5 h-5 text-emerald-400" />;
      case 'Video': return <Video className="w-5 h-5 text-red-400" />;
      case 'FileText': return <FileText className="w-5 h-5 text-blue-400" />;
      case 'Tv': return <Tv className="w-5 h-5 text-lime-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-purple-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-emerald-400" />;
      case 'Shield': return <Shield className="w-5 h-5 text-lime-400" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-cyan-400" />;
      case 'Users': return <Users className="w-5 h-5 text-teal-400" />;
      case 'CheckCircle': case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case 'Lock': return <Lock className="w-5 h-5 text-amber-400" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-blue-400" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5 text-emerald-400" />;
      case 'Bell': return <Bell className="w-5 h-5 text-lime-400" />;
      default: return <Globe className="w-5 h-5 text-emerald-400" />;
    }
  };

  const selectedNode = nodes.find((n) => n.step === activeStep) || nodes[0];

  return (
    <div className="w-full rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
        <div>
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold">
            System Architecture
          </span>
          <h4 className="text-xl font-bold text-slate-100 font-sans">
            {projectTitle} Data Flow
          </h4>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full w-fit">
          Click any step to inspect details
        </span>
      </div>

      {/* Pipeline Steps Flow */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {nodes.map((node, index) => {
          const isActive = node.step === activeStep;
          return (
            <div key={node.step} className="relative flex flex-col items-center">
              <button
                onClick={() => setActiveStep(node.step)}
                className={`w-full p-4 rounded-xl border flex flex-col items-center text-center gap-2.5 transition-all ${
                  isActive
                    ? 'bg-gradient-to-b from-emerald-950 to-slate-900 border-emerald-500 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/50 scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div className={`p-2.5 rounded-lg border ${isActive ? 'bg-slate-900 border-emerald-600' : 'bg-slate-950 border-slate-800'}`}>
                  {getIcon(node.iconName)}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                  Step 0{node.step}
                </span>
                <span className="text-xs font-bold text-slate-200 line-clamp-1 font-sans">
                  {node.label}
                </span>
              </button>

              {/* Connecting Arrow for Desktop */}
              {index < nodes.length - 1 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Step Deep Dive Details */}
      {selectedNode && (
        <div className="p-5 rounded-xl bg-slate-900/80 border border-emerald-900/40 flex items-start gap-4">
          <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-700/60 shrink-0">
            {getIcon(selectedNode.iconName)}
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-lime-400">
                STEP 0{selectedNode.step} OF 0{nodes.length}
              </span>
              <span className="text-slate-600">•</span>
              <h5 className="font-bold text-slate-100 text-base font-sans">
                {selectedNode.label}
              </h5>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {selectedNode.description}
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
