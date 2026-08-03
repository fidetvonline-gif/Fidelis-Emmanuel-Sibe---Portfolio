import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, MessageSquare, Clock } from 'lucide-react';
import { siteData } from '../data/site';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: 'Web Development',
    message: '',
    honeypot: '' // hidden anti-spam field
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const projectOptions = [
    'Web Development',
    'Software Development',
    'AI Product',
    'Business System',
    'UI Development',
    'Collaboration',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          message: data.message || `Thank you, ${formData.name}! Fidelis has received your message and will respond to ${formData.email} promptly.`
        });
        setFormData({ name: '', email: '', project: 'Web Development', message: '', honeypot: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to submit form. Please check inputs and try again.'
        });
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus({
        type: 'error',
        message: 'Network error submitting contact request. Please email directly to fidetvonline@gmail.com'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0A0A0A] relative border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Closing CTA Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="font-mono text-[10px] uppercase text-[#BEF264] tracking-[0.2em] bg-[#0F0F0F] border border-[#262626] px-3.5 py-1 rounded inline-block font-bold">
            06. Let's Connect
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight">
            Interested in working together?
          </h2>

          <p className="text-[#AAA] text-base sm:text-lg leading-relaxed font-sans">
            Have a software idea, web project, business system, or digital product you want to build? Let's turn it into something useful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Direct Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded bg-[#0F0F0F] border border-[#262626] space-y-6">
              
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-[#BEF264] uppercase tracking-[0.2em] font-bold">
                  Direct Line
                </span>
                <h3 className="text-2xl font-bold text-white font-sans">
                  Start a Conversation
                </h3>
                <p className="text-sm text-[#AAA]">
                  Whether you need a full-stack web application, student platform, custom API integration, or AI product execution.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 p-3.5 rounded bg-[#0A0A0A] border border-[#262626]">
                  <div className="p-2.5 rounded bg-[#111] border border-[#262626] text-[#BEF264]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#666] block">Email Address</span>
                    <a href={`mailto:${siteData.email}`} className="text-sm font-semibold text-white hover:text-[#BEF264] transition-colors font-mono">
                      {siteData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded bg-[#0A0A0A] border border-[#262626]">
                  <div className="p-2.5 rounded bg-[#111] border border-[#262626] text-[#BEF264]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#666] block">Response Expectation</span>
                    <span className="text-xs text-[#AAA] font-sans">
                      I typically respond as soon as possible to project and collaboration enquiries.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#262626]">
                <span className="text-xs font-mono text-[#666] block mb-2">Location & Timezone:</span>
                <span className="text-xs font-mono text-[#BEF264] bg-[#0A0A0A] px-3 py-1 rounded border border-[#262626] inline-block font-bold">
                  Nigeria (WAT / UTC+1)
                </span>
              </div>

            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 rounded bg-[#0F0F0F] border border-[#262626] space-y-5">
              
              {/* Spam Honeypot - hidden from real humans */}
              <input
                type="text"
                name="website"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-[#AAA] block">
                    Your Full Name <span className="text-[#BEF264]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Victor Akpan"
                    className="w-full px-4 py-3 rounded bg-[#0A0A0A] border border-[#262626] text-sm text-white placeholder-[#555] outline-none focus:border-[#BEF264] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-[#AAA] block">
                    Your Email Address <span className="text-[#BEF264]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. victor@example.com"
                    className="w-full px-4 py-3 rounded bg-[#0A0A0A] border border-[#262626] text-sm text-white placeholder-[#555] outline-none focus:border-[#BEF264] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-medium text-[#AAA] block">
                  Project Category / Type
                </label>
                <select
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full px-4 py-3 rounded bg-[#0A0A0A] border border-[#262626] text-sm text-white outline-none focus:border-[#BEF264] transition-colors font-mono"
                >
                  {projectOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#0A0A0A] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-medium text-[#AAA] block">
                  Project Message & Objectives <span className="text-[#BEF264]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, key goals, timeline, or collaboration ideas..."
                  className="w-full px-4 py-3 rounded bg-[#0A0A0A] border border-[#262626] text-sm text-white placeholder-[#555] outline-none focus:border-[#BEF264] transition-colors"
                />
              </div>

              {/* Status Banner */}
              {status && (
                <div
                  className={`p-4 rounded text-xs font-mono flex items-start gap-3 ${
                    status.type === 'success'
                      ? 'bg-[#0A0A0A] border border-[#BEF264]/60 text-[#BEF264]'
                      : 'bg-[#0A0A0A] border border-red-600/60 text-red-400'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 text-[#BEF264] shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded bg-[#BEF264] hover:bg-[#d4fc79] text-black font-mono font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-black" />
                    <span>Sending Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Fidelis</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
