import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, ArrowRight, MessageSquare, Clock, Shield } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: 'Product Strategy & Architecture',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rushabhpatadia2003@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <div className="pb-32 pt-12 md:pt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Editorial Context & Direct Channels */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
                Direct Executive Channels
              </span>

              <h1 className="text-4xl sm:text-5xl font-normal text-[#141413] tracking-tight leading-[1.15]">
                Let's discuss what you're building.
              </h1>

              <p className="text-base sm:text-lg text-[#5C5A55] leading-relaxed max-w-xl">
                If you're grappling with turning complex technical infrastructure into customer-facing products, untangling enterprise customer requests into scalable platform features, or looking for technical product leadership, let's talk through it.
              </p>
            </div>

            {/* Direct Connect Box */}
            <div className="p-6 rounded-xl bg-white border border-[#E2DFD7] space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EEE8]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
                  Primary Electronic Mail
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs text-[#B85D19] font-mono hover:underline inline-flex items-center gap-1.5"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span>Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <a
                  href="mailto:rushabhpatadia2003@gmail.com"
                  className="text-base font-semibold text-[#141413] hover:text-[#B85D19] transition-colors"
                >
                  rushabhpatadia2003@gmail.com
                </a>
                <a
                  href="mailto:rushabhpatadia2003@gmail.com"
                  className="px-3 py-1.5 rounded-md bg-[#FAF9F5] border border-[#E8E6DF] text-xs font-medium text-[#141413] hover:bg-[#F0EEE8]"
                >
                  Send Email
                </a>
              </div>

              <div className="pt-4 border-t border-[#F0EEE8] space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85] block">
                  Professional Networks
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="https://www.linkedin.com/in/rushabhpatadia"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-lg bg-[#FAF9F5] border border-[#E8E6DF] hover:border-[#B85D19] transition-colors flex items-center justify-between text-xs"
                  >
                    <span className="flex items-center gap-2 font-medium text-[#141413]">
                      <Linkedin className="w-4 h-4 text-[#8E8C85]" />
                      <span>LinkedIn Profile</span>
                    </span>
                    <span className="font-mono text-[10px] text-[#8E8C85]">Connect</span>
                  </a>

                  <a
                    href="https://github.com/patadiarushabh19"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-lg bg-[#FAF9F5] border border-[#E8E6DF] hover:border-[#B85D19] transition-colors flex items-center justify-between text-xs"
                  >
                    <span className="flex items-center gap-2 font-medium text-[#141413]">
                      <Github className="w-4 h-4 text-[#8E8C85]" />
                      <span>GitHub Systems</span>
                    </span>
                    <span className="font-mono text-[10px] text-[#8E8C85]">patadiarushabh19</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Conversation Topics */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85] block">
                Typical Conversation Topics
              </span>
              <div className="space-y-2 text-xs text-[#474540]">
                <div className="p-3 rounded-lg bg-white border border-[#E8E6DF] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B85D19]" />
                  <span>Structuring bare-metal or cloud infrastructure into consumable B2B SaaS offerings.</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#E8E6DF] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B85D19]" />
                  <span>White-label partner architecture and multi-tenant channel distribution models.</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#E8E6DF] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B85D19]" />
                  <span>Translating high-pressure client demands into reusable core platform roadmaps.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message Dispatch Form */}
          <div className="lg:col-span-6 bg-white border border-[#E2DFD7] rounded-xl p-8 shadow-xs">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#FDF6F0] border border-[#F4DEC9] text-[#B85D19] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#141413]">
                  Message Dispatched
                </h3>
                <p className="text-xs text-[#6B6964] max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Your note has been queued. Rushabh responds to strategic product inquiries promptly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        topic: 'Product Strategy & Architecture',
                        message: '',
                      });
                    }}
                    className="text-xs font-mono text-[#B85D19] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85] block mb-1">
                    Direct Inquiry Form
                  </span>
                  <h3 className="text-lg font-semibold text-[#141413]">
                    Send a Note Directly
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] text-[#474540] block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E6DF] bg-[#FAF9F5] text-xs text-[#141413] focus:outline-none focus:border-[#B85D19] focus:bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] text-[#474540] block">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E6DF] bg-[#FAF9F5] text-xs text-[#141413] focus:outline-none focus:border-[#B85D19] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] text-[#474540] block">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Labs / Studio"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E6DF] bg-[#FAF9F5] text-xs text-[#141413] focus:outline-none focus:border-[#B85D19] focus:bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] text-[#474540] block">
                      Primary Subject Focus
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E6DF] bg-[#FAF9F5] text-xs text-[#141413] focus:outline-none focus:border-[#B85D19] focus:bg-white"
                    >
                      <option>Product Strategy & Architecture</option>
                      <option>Cloud Infrastructure & GPU Platforms</option>
                      <option>Technical Product Leadership Opportunity</option>
                      <option>White-Label & Reseller Distribution</option>
                      <option>General Strategic Conversation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[11px] text-[#474540] block">
                    Product Problem Context or Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe the product context, technical constraints, or opportunity you'd like to talk through..."
                    className="w-full p-3.5 rounded-lg border border-[#E8E6DF] bg-[#FAF9F5] text-xs text-[#141413] focus:outline-none focus:border-[#B85D19] focus:bg-white leading-relaxed"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-5 rounded-md bg-[#141413] text-white text-xs font-semibold hover:bg-[#2A2925] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Dispatch Message</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-[11px] text-[#8E8C85] text-center pt-2">
                  Direct communication. No automated spam or third-party mailing lists.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
