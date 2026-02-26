"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Clock, Send, ArrowRight, Zap, Building2, Headphones } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "General inquiries and partnerships",
    value: "hello@datvikai.com",
    href: "mailto:hello@datvikai.com",
    color: "indigo",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Technical support and account issues",
    value: "support@datvikai.com",
    href: "mailto:support@datvikai.com",
    color: "cyan",
  },
  {
    icon: Building2,
    title: "Sales",
    description: "Enterprise plans and custom solutions",
    value: "sales@datvikai.com",
    href: "mailto:sales@datvikai.com",
    color: "purple",
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string }> = {
  indigo: { bg: "bg-indigo-500/10", border: "border-indigo-500/20", icon: "text-indigo-400" },
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/20", icon: "text-cyan-400" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", icon: "text-purple-400" },
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative">
      <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <Navbar />

      <main className="pt-28 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8"
            >
              <ArrowRight size={14} className="rotate-180" />
              Back to home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="badge mb-4">Contact</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Get in <span className="gradient-text">touch</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
              Have a question, feedback, or want to discuss enterprise solutions? We&apos;d love to hear from you.
            </p>
          </motion.div>

          {/* Contact methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14"
          >
            {contactMethods.map((method, i) => {
              const colors = colorMap[method.color];
              return (
                <a
                  key={method.title}
                  href={method.href}
                  className="glass-card rounded-2xl p-6 hover:border-indigo-500/30 transition-all group text-center"
                >
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon size={22} className={colors.icon} />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1">{method.title}</h3>
                  <p className="text-xs text-slate-500 mb-3">{method.description}</p>
                  <span className={`text-sm font-medium ${colors.icon}`}>{method.value}</span>
                </a>
              );
            })}
          </motion.div>

          {/* Form + Info grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-xl font-bold text-white mb-1">Send us a message</h2>
                <p className="text-sm text-slate-500 mb-6">Fill out the form and we&apos;ll get back to you within 24 hours.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <Send size={28} className="text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Message sent!</h3>
                    <p className="text-sm text-slate-400 mb-6">Thanks for reaching out. We&apos;ll respond within 24 hours.</p>
                    <button
                      onClick={() => { setSubmitted(false); setName(""); setEmail(""); setSubject(""); setMessage(""); }}
                      className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-medium text-slate-400 mb-1.5">Name</label>
                        <input
                          id="contact-name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-medium text-slate-400 mb-1.5">Email</label>
                        <input
                          id="contact-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-400 mb-1.5">Subject</label>
                      <select
                        id="contact-subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all appearance-none"
                        required
                      >
                        <option value="" disabled className="bg-[#0d0d1a] text-slate-400">Select a topic</option>
                        <option value="general" className="bg-[#0d0d1a]">General Inquiry</option>
                        <option value="support" className="bg-[#0d0d1a]">Technical Support</option>
                        <option value="enterprise" className="bg-[#0d0d1a]">Enterprise / Sales</option>
                        <option value="partnership" className="bg-[#0d0d1a]">Partnership</option>
                        <option value="feedback" className="bg-[#0d0d1a]">Feedback</option>
                        <option value="bug" className="bg-[#0d0d1a]">Bug Report</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-medium text-slate-400 mb-1.5">Message</label>
                      <textarea
                        id="contact-message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us how we can help..."
                        rows={5}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all resize-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
                    >
                      <Send size={16} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Sidebar info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-2 space-y-5"
            >
              {/* Response time */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <Clock size={20} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Fast Response</h3>
                    <p className="text-xs text-slate-500">Usually within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400 font-medium">Team is online</span>
                </div>
              </div>

              {/* Discord */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <MessageSquare size={20} className="text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Discord Community</h3>
                    <p className="text-xs text-slate-500">Chat with the team and other devs</p>
                  </div>
                </div>
                <a
                  href="https://discord.gg/datvikai"
                  className="inline-flex items-center gap-2 mt-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                >
                  Join Discord
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Enterprise CTA */}
              <div className="glass-card rounded-2xl p-6 border-indigo-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={16} className="text-indigo-400" />
                  <h3 className="text-sm font-semibold text-white">Enterprise?</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Need custom integrations, SLA guarantees, or on-premise deployment? Let&apos;s talk.
                </p>
                <a
                  href="mailto:sales@datvikai.com"
                  className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                >
                  Contact Sales
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
