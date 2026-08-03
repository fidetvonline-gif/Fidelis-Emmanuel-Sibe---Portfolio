import React, { useState } from 'react';
import { Fingerprint, CheckCircle2, Sparkles, Tv, Shield, Send, AlertCircle, RefreshCw, BarChart2, Play } from 'lucide-react';

export const InteractiveDemos: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'attendix' | 'fidetv' | 'gsn'>('attendix');

  // Attendix Demo State
  const [scanning, setScanning] = useState(false);
  const [attendeeName, setAttendeeName] = useState('Emeka Okon (REG-2026-402)');
  const [attendanceLogs, setAttendanceLogs] = useState([
    { id: 1, name: 'Grace Bassey (REG-2026-104)', time: '09:02 AM', status: 'VERIFIED_BIOMETRIC', hash: 'f8a9...c32d' },
    { id: 2, name: 'Anietie Udoh (REG-2026-088)', time: '09:05 AM', status: 'VERIFIED_BIOMETRIC', hash: 'b1e4...8f90' }
  ]);
  const [aiInsight, setAiInsight] = useState<string | null>(
    'Gemini Insight: Attendance rate is 94% for CSC 401 lecture. Zero proxy anomalies detected via hardware WebAuthn signatures.'
  );

  const simulateBiometricScan = () => {
    setScanning(true);
    setTimeout(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const newLog = {
        id: Date.now(),
        name: attendeeName || 'Fidelis Sibe (STUDENT-001)',
        time: timeStr,
        status: 'VERIFIED_BIOMETRIC',
        hash: Math.random().toString(36).substring(2, 10) + '...' + Math.random().toString(36).substring(2, 6)
      };
      setAttendanceLogs([newLog, ...attendanceLogs]);
      setScanning(false);
      setAiInsight(`Gemini Insight: Biometric token confirmed for ${newLog.name}. Database record immutably sealed in Supabase PostgreSQL at ${timeStr}.`);
    }, 1500);
  };

  // FIDE TV State
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeChannel, setActiveChannel] = useState('Campus Live Stream');

  // GSN State
  const [issueText, setIssueText] = useState('');
  const [anonymous, setAnonymous] = useState(true);
  const [submittedIssues, setSubmittedIssues] = useState([
    { id: 1, text: 'Need additional desk sockets in Federal Poly Ukana CSC Library', category: 'Infrastructure', status: 'Under Leadership Review', votes: 14 }
  ]);

  const handlePostGsn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!issueText.trim()) return;
    const newIssue = {
      id: Date.now(),
      text: issueText,
      category: 'Student Welfare',
      status: 'Submitted to NANS Reps',
      votes: 1
    };
    setSubmittedIssues([newIssue, ...submittedIssues]);
    setIssueText('');
  };

  return (
    <section className="py-16 border-b border-[#262626] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-mono text-[10px] uppercase text-[#BEF264] tracking-[0.2em] font-bold flex items-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#BEF264]" />
              Interactive Lab
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans mt-1">
              Live Interactive System Previews
            </h3>
            <p className="text-[#AAA] text-sm mt-1 font-sans">
              Test live functional interactive prototypes of Fidelis's flagship products.
            </p>
          </div>

          {/* Tab Selection */}
          <div className="flex items-center gap-2 p-1 rounded bg-[#0F0F0F] border border-[#262626]">
            <button
              onClick={() => setActiveTab('attendix')}
              className={`px-3.5 py-1.5 rounded text-xs font-mono uppercase tracking-wider font-bold transition-all ${
                activeTab === 'attendix'
                  ? 'bg-[#BEF264] text-black'
                  : 'text-[#AAA] hover:text-white'
              }`}
            >
              01. Attendix Sandbox
            </button>
            <button
              onClick={() => setActiveTab('fidetv')}
              className={`px-3.5 py-1.5 rounded text-xs font-mono uppercase tracking-wider font-bold transition-all ${
                activeTab === 'fidetv'
                  ? 'bg-[#BEF264] text-black'
                  : 'text-[#AAA] hover:text-white'
              }`}
            >
              02. FIDE TV Stream
            </button>
            <button
              onClick={() => setActiveTab('gsn')}
              className={`px-3.5 py-1.5 rounded text-xs font-mono uppercase tracking-wider font-bold transition-all ${
                activeTab === 'gsn'
                  ? 'bg-[#BEF264] text-black'
                  : 'text-[#AAA] hover:text-white'
              }`}
            >
              03. Student Network
            </button>
          </div>
        </div>

        {/* Tab 1: Attendix Biometric Sandbox */}
        {activeTab === 'attendix' && (
          <div className="p-6 sm:p-8 rounded bg-[#0F0F0F] border border-[#262626] space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#262626]">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#BEF264] tracking-[0.2em] uppercase">WINNER — GOOGLE BUILD WITH AI CHALLENGE</span>
                <h4 className="text-xl font-bold text-white font-sans mt-0.5">Attendix Biometric Verification Simulator</h4>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={attendeeName}
                  onChange={(e) => setAttendeeName(e.target.value)}
                  placeholder="Enter Student Name & Reg Number"
                  className="px-3 py-1.5 rounded bg-[#0A0A0A] border border-[#262626] text-xs text-white outline-none font-mono placeholder-[#555]"
                />
                <button
                  onClick={simulateBiometricScan}
                  disabled={scanning}
                  className="px-4 py-1.5 rounded bg-[#BEF264] text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all hover:bg-[#d4fc79] disabled:opacity-50"
                >
                  <Fingerprint className={`w-4 h-4 ${scanning ? 'animate-pulse text-black' : ''}`} />
                  <span>{scanning ? 'Authenticating...' : 'Simulate Scan'}</span>
                </button>
              </div>
            </div>

            {/* Simulated Scanner Visual & Live Log */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              <div className="lg:col-span-5 p-6 rounded bg-[#0A0A0A] border border-[#262626] flex flex-col items-center justify-center text-center space-y-4">
                <div
                  onClick={simulateBiometricScan}
                  className={`w-28 h-28 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all ${
                    scanning
                      ? 'border-[#BEF264] bg-[#BEF264]/10 scale-105 shadow-lg'
                      : 'border-[#262626] hover:border-[#BEF264] bg-[#0F0F0F]'
                  }`}
                >
                  <Fingerprint className={`w-14 h-14 ${scanning ? 'text-[#BEF264] animate-ping' : 'text-[#BEF264]'}`} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#666] tracking-[0.2em] uppercase font-bold">TOUCH FINGERPRINT SENSOR</div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    {scanning ? 'Reading WebAuthn Hardware Key...' : 'Ready for Attendance Scan'}
                  </div>
                </div>
              </div>

              {/* Attendance Table & AI Insights */}
              <div className="lg:col-span-7 space-y-4">
                
                {aiInsight && (
                  <div className="p-3.5 rounded bg-[#0A0A0A] border border-[#BEF264]/30 text-xs text-[#BEF264] font-mono flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-[#BEF264] shrink-0 mt-0.5" />
                    <span>{aiInsight}</span>
                  </div>
                )}

                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-[#666] uppercase tracking-[0.2em] font-bold">
                    Real-Time Verified Logs ({attendanceLogs.length})
                  </div>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {attendanceLogs.map((log) => (
                      <div
                        key={log.id}
                        className="p-3 rounded bg-[#0A0A0A] border border-[#262626] flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#BEF264] shrink-0" />
                          <div>
                            <div className="font-semibold text-white">{log.name}</div>
                            <div className="text-[10px] font-mono text-[#666]">Hash: {log.hash}</div>
                          </div>
                        </div>
                        <div className="text-right font-mono">
                          <span className="text-[#888]">{log.time}</span>
                          <span className="block text-[10px] text-[#BEF264] font-bold">
                            {log.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Tab 2: FIDE TV Media Stream Simulator */}
        {activeTab === 'fidetv' && (
          <div className="p-6 sm:p-8 rounded bg-[#0F0F0F] border border-[#262626] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#262626]">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#BEF264] uppercase tracking-[0.2em]">DIGITAL MEDIA ECOSYSTEM</span>
                <h4 className="text-xl font-bold text-white font-sans mt-0.5">FIDE TV Live Media Player Simulator</h4>
              </div>
              <a
                href="https://fidetv.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#BEF264] hover:underline flex items-center gap-1"
              >
                Visit fidetv.online ↗
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 relative aspect-video rounded overflow-hidden bg-[#0A0A0A] border border-[#262626] group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent flex flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-[#FF5F56] text-black font-mono text-[10px] uppercase font-bold tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                      LIVE BROADCAST
                    </span>
                    <span className="text-xs font-mono text-[#AAA] bg-[#0A0A0A] px-2.5 py-1 rounded border border-[#262626]">
                      {activeChannel}
                    </span>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-16 h-16 rounded-full bg-[#BEF264] text-black flex items-center justify-center transition-all shadow-xl mx-auto hover:scale-105"
                    >
                      <Play className={`w-7 h-7 ml-1 ${isPlaying ? 'animate-bounce' : ''}`} />
                    </button>
                    <p className="text-xs font-mono text-[#AAA] mt-3">
                      {isPlaying ? 'Streaming HLS Video Feed...' : 'Click to Play Broadcast Stream'}
                    </p>
                  </div>

                  <div className="text-xs text-[#AAA] font-sans flex items-center justify-between">
                    <span>Campus Stories & Student Journalism</span>
                    <span className="font-mono text-[#BEF264]">1080p HD</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-3">
                <div className="text-[10px] font-mono text-[#666] uppercase tracking-[0.2em] font-bold">
                  Channel Lineup
                </div>
                {['Campus Live Stream', 'Spicy Circle Entertainment', 'Federal Poly Ukana News Broadcast'].map((ch) => (
                  <button
                    key={ch}
                    onClick={() => setActiveChannel(ch)}
                    className={`w-full p-3 rounded border text-left text-xs font-sans transition-all flex items-center justify-between ${
                      activeChannel === ch
                        ? 'bg-[#1A1A1A] border-[#BEF264] text-white font-bold'
                        : 'bg-[#0A0A0A] border-[#262626] text-[#888] hover:text-white'
                    }`}
                  >
                    <span>{ch}</span>
                    <Tv className="w-3.5 h-3.5 text-[#666]" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Global Student Network Feedback Test */}
        {activeTab === 'gsn' && (
          <div className="p-6 sm:p-8 rounded bg-[#0F0F0F] border border-[#262626] space-y-6">
            <div className="pb-4 border-b border-[#262626]">
              <span className="text-[10px] font-mono font-bold text-[#BEF264] uppercase tracking-[0.2em]">STUDENT ADVOCACY PLATFORM</span>
              <h4 className="text-xl font-bold text-white font-sans mt-0.5">Global Student Network Anonymous Post Test</h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <form onSubmit={handlePostGsn} className="lg:col-span-5 space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-[#AAA] font-medium block">
                    Share Concern or Feedback:
                  </label>
                  <textarea
                    rows={3}
                    value={issueText}
                    onChange={(e) => setIssueText(e.target.value)}
                    placeholder="e.g. Suggesting automated course timetable conflict notification system..."
                    className="w-full p-3 rounded bg-[#0A0A0A] border border-[#262626] text-xs text-white outline-none focus:border-[#BEF264] placeholder-[#555]"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-mono text-[#888]">
                    <input
                      type="checkbox"
                      checked={anonymous}
                      onChange={(e) => setAnonymous(e.target.checked)}
                      className="rounded accent-[#BEF264]"
                    />
                    <span>Post Anonymously (Hash)</span>
                  </label>
                  
                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-[#BEF264] text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all hover:bg-[#d4fc79]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Post Concern</span>
                  </button>
                </div>
              </form>

              <div className="lg:col-span-7 space-y-3">
                <div className="text-[10px] font-mono text-[#666] uppercase tracking-[0.2em] font-bold">
                  Active Community Issues ({submittedIssues.length})
                </div>
                <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                  {submittedIssues.map((issue) => (
                    <div key={issue.id} className="p-3.5 rounded bg-[#0A0A0A] border border-[#262626] space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-[#BEF264] font-bold">{issue.category}</span>
                        <span className="text-[#AAA] bg-[#111] px-2 py-0.5 rounded border border-[#262626]">
                          {issue.status}
                        </span>
                      </div>
                      <p className="text-xs text-white font-sans">{issue.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
