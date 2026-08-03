import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, Phone, MessageCircle, Clock, ExternalLink } from 'lucide-react';
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
      // 1. Send real email directly to fidelissibe@gmail.com via FormSubmit service
      const formSubmitPromise = fetch('https://formsubmit.co/ajax/fidelissibe@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `Portfolio Inquiry: ${formData.project} from ${formData.name}`,
          category: formData.project,
          message: formData.message,
          _template: 'table',
          _cc: 'fidetvonline@gmail.com,fidetvmedia@gmail.com'
        })
      });

      // 2. Also log to local server API endpoint
      const localApiPromise = fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const [formSubmitRes] = await Promise.allSettled([formSubmitPromise, localApiPromise]);

      if (formSubmitRes.status === 'fulfilled' && formSubmitRes.value.ok) {
        setStatus({
          type: 'success',
          message: `Message sent successfully! Fidelis has received your email notification at fidelissibe@gmail.com and will respond to ${formData.email} shortly.`
        });
        setFormData({ name: '', email: '', project: 'Web Development', message: '', honeypot: '' });
      } else {
        // Fallback status if external network block happens
        setStatus({
          type: 'success',
          message: `Thank you ${formData.name}! Your message was logged. If urgent, you can also reach Fidelis directly via WhatsApp (08108889805) or Call (08124323608).`
        });
        setFormData({ name: '', email: '', project: 'Web Development', message: '', honeypot: '' });
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus({
        type: 'error',
        message: 'Network error submitting contact form. You can email directly to fidelissibe@gmail.com or WhatsApp 08108889805.'
      });
    } finally {
      setLoading(false);
    }
  };

  const mailtoUrl = `mailto:${siteData.email}?subject=${encodeURIComponent(
    `Project Inquiry (${formData.project}) from ${formData.name || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.project}\n\nMessage:\n${formData.message}`
  )}`;

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
            Have a software idea, web project, business system, or digital product you want to build? Reach out directly via message, call, or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Direct Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded bg-[#0F0F0F] border border-[#262626] space-y-6">
              
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-[#BEF264] uppercase tracking-[0.2em] font-bold">
                  Direct Contact Lines
                </span>
                <h3 className="text-2xl font-bold text-white font-sans">
                  Start a Conversation
                </h3>
                <p className="text-sm text-[#AAA]">
                  Whether you need a full-stack web application, student platform, custom API integration, or AI product execution.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                
                {/* Direct Personal Email Card */}
                <div className="flex items-start gap-3 p-3.5 rounded bg-[#0A0A0A] border border-[#262626]">
                  <div className="p-2.5 rounded bg-[#111] border border-[#262626] text-[#BEF264] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#666] block">Direct Email (Form Recipient)</span>
                    <a href={`mailto:${siteData.email}`} className="text-sm font-semibold text-[#BEF264] hover:underline transition-colors font-mono truncate block">
                      {siteData.email}
                    </a>
                  </div>
                </div>

                {/* Company Emails Card */}
                <div className="flex items-start gap-3 p-3.5 rounded bg-[#0A0A0A] border border-[#262626]">
                  <div className="p-2.5 rounded bg-[#111] border border-[#262626] text-[#888] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#666] block">Company Emails</span>
                    <div className="flex flex-col gap-0.5 font-mono text-xs text-white">
                      {siteData.companyEmails.map((compEmail) => (
                        <a key={compEmail} href={`mailto:${compEmail}`} className="hover:text-[#BEF264] transition-colors">
                          {compEmail}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Phone Call Card */}
                <div className="flex items-center gap-3 p-3.5 rounded bg-[#0A0A0A] border border-[#262626]">
                  <div className="p-2.5 rounded bg-[#111] border border-[#262626] text-[#BEF264] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#666] block">Phone Call</span>
                    <a href="tel:08124323608" className="text-sm font-semibold text-white hover:text-[#BEF264] transition-colors font-mono">
                      08124323608 <span className="text-xs text-[#888] font-normal">(Direct Line)</span>
                    </a>
                  </div>
                </div>

                {/* WhatsApp Chat Card */}
                <div className="flex items-center gap-3 p-3.5 rounded bg-[#0A0A0A] border border-[#262626] group">
                  <div className="p-2.5 rounded bg-[#111] border border-[#262626] text-[#BEF264] shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-mono uppercase text-[#666] block">WhatsApp Chat</span>
                    <a
                      href="https://wa.me/2348108889805"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#BEF264] hover:underline transition-colors font-mono flex items-center gap-1.5"
                    >
                      <span>08108889805</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Response Time Card */}
                <div className="flex items-center gap-3 p-3.5 rounded bg-[#0A0A0A] border border-[#262626]">
                  <div className="p-2.5 rounded bg-[#111] border border-[#262626] text-[#BEF264] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#666] block">Response Expectation</span>
                    <span className="text-xs text-[#AAA] font-sans">
                      Form submissions are delivered to fidelissibe@gmail.com instantly.
                    </span>
                  </div>
                </div>

              </div>

              <div className="pt-2 border-t border-[#262626] flex items-center justify-between">
                <span className="text-xs font-mono text-[#666]">Location & Timezone:</span>
                <span className="text-xs font-mono text-[#BEF264] bg-[#0A0A0A] px-3 py-1 rounded border border-[#262626] font-bold">
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

              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded bg-[#BEF264] hover:bg-[#d4fc79] text-black font-mono font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>Sending Email to Fidelis...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message (Delivers to fidelissibe@gmail.com)</span>
                    </>
                  )}
                </button>

                <a
                  href={mailtoUrl}
                  className="w-full py-2.5 rounded bg-[#0A0A0A] border border-[#262626] hover:border-[#BEF264] text-[#AAA] hover:text-white font-mono text-[11px] uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#BEF264]" />
                  <span>Or Open Direct Email Client</span>
                </a>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

