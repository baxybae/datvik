"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Star, Terminal, Globe, MessageSquare } from "lucide-react";
import Link from "next/link";

const codeLines = [
  { tokens: [
    { type: "import", text: "import" },
    { type: "default", text: " { " },
    { type: "class", text: "DatvikAgent" },
    { type: "default", text: ", " },
    { type: "class", text: "DatvikSkill" },
    { type: "default", text: ", " },
    { type: "class", text: "DatvikTool" },
    { type: "default", text: " } " },
    { type: "import", text: "from" },
    { type: "string", text: " 'datvik-cli'" },
    { type: "default", text: ";" },
  ]},
  { tokens: [{ type: "default", text: "" }] },
  { tokens: [
    { type: "keyword", text: "class" },
    { type: "function", text: " GetOrderTool" },
    { type: "keyword", text: " implements" },
    { type: "class", text: " DatvikTool" },
    { type: "default", text: " {" },
  ]},
  { tokens: [
    { type: "default", text: "  " },
    { type: "type", text: "name" },
    { type: "default", text: " = " },
    { type: "string", text: '"get_order"' },
    { type: "default", text: ";" },
  ]},
  { tokens: [
    { type: "default", text: "  " },
    { type: "keyword", text: "async" },
    { type: "function", text: " execute" },
    { type: "default", text: "(input) {" },
  ]},
  { tokens: [
    { type: "default", text: "    " },
    { type: "keyword", text: "const" },
    { type: "default", text: " order = " },
    { type: "keyword", text: "await" },
    { type: "function", text: " fetchOrder" },
    { type: "default", text: "(input.id);" },
  ]},
  { tokens: [
    { type: "default", text: "    " },
    { type: "keyword", text: "return" },
    { type: "default", text: " { order, status: order.status };" },
  ]},
  { tokens: [{ type: "default", text: "  }" }] },
  { tokens: [{ type: "default", text: "}" }] },
  { tokens: [{ type: "default", text: "" }] },
  { tokens: [
    { type: "keyword", text: "export" },
    { type: "keyword", text: " const" },
    { type: "default", text: " agent = " },
    { type: "keyword", text: "new" },
    { type: "class", text: " DatvikAgent" },
    { type: "default", text: "({" },
  ]},
  { tokens: [
    { type: "default", text: "  " },
    { type: "type", text: "name" },
    { type: "default", text: ": " },
    { type: "string", text: '"support-agent"' },
    { type: "default", text: "," },
  ]},
  { tokens: [
    { type: "default", text: "  " },
    { type: "type", text: "skills" },
    { type: "default", text: ": [supportSkill]," },
  ]},
  { tokens: [{ type: "default", text: "});" }] },
];

const deployTargets = [
  { icon: MessageSquare, label: "WhatsApp", color: "#25D366" },
  { icon: Globe, label: "Web", color: "#6366f1" },
  { icon: Terminal, label: "Slack", color: "#4A154B" },
];

function TypewriterText({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts]);

  return (
    <span className="gradient-text">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-radial from-indigo-950/40 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600/[0.08] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-cyan-600/[0.08] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="badge">
                <Star size={10} className="fill-indigo-400 text-indigo-400" />
                The Agent OS — v3.0 Now Live
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-4"
            >
              <span className="block">Build AI Agents That</span>
              <span className="block">
                <TypewriterText texts={["Do Anything", "Scale Globally", "Ship Fast", "Just Work"]} />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              DatvikAI abstracts the technical complexity so you can focus on what
              matters — solving business problems with AI. Write TypeScript tools,
              deploy instantly.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/signup"
                className="group flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
              >
                <Zap size={16} />
                Start Building Free
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/#demo"
                className="flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-white/20 rounded-xl hover:bg-white/5 transition-all"
              >
                View Demo
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-6 mt-10 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {[
                  "https://i.pravatar.cc/150?img=11",
                  "https://i.pravatar.cc/150?img=32",
                  "https://i.pravatar.cc/150?img=25",
                  "https://i.pravatar.cc/150?img=53",
                  "https://i.pravatar.cc/150?img=45",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Developer ${i + 1}`}
                    className="w-8 h-8 rounded-full border-2 border-[#0a0a0f] object-cover"
                    style={{ zIndex: 5 - i }}
                  />
                ))}
              </div>
              <div className="text-sm text-slate-400">
                <span className="text-white font-semibold">2,000+</span> developers building with DatvikAI
              </div>
            </motion.div>

            {/* Deploy targets */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4 mt-6 justify-center lg:justify-start"
            >
              <span className="text-xs text-slate-500">Deploy to:</span>
              {deployTargets.map((target) => (
                <div
                  key={target.label}
                  className="flex items-center gap-1.5 text-xs text-slate-400"
                >
                  <div
                    className="w-4 h-4 rounded-sm flex items-center justify-center"
                    style={{ backgroundColor: target.color + "20" }}
                  >
                    <target.icon size={10} style={{ color: target.color }} />
                  </div>
                  {target.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Code editor */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 w-full max-w-xl lg:max-w-none"
          >
            <div className="relative">
              {/* Glow behind code block */}
              <div className="absolute -inset-4 bg-indigo-600/10 rounded-2xl blur-2xl" />
              <div className="absolute -inset-[1px] rounded-2xl animated-gradient-border opacity-30" />

              {/* Code block */}
              <div className="relative code-block overflow-hidden rounded-2xl shadow-2xl shadow-black/50">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#0d0d1a] border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-xs text-slate-500 font-mono">agent.ts</span>
                  <div className="ml-auto flex items-center gap-1">
                    <span className="text-xs text-indigo-400 bg-indigo-400/10 px-2 py-0.5 rounded">TypeScript</span>
                  </div>
                </div>

                {/* Code content */}
                <div className="p-3 sm:p-5 overflow-x-auto">
                  <pre className="text-[11px] sm:text-sm leading-6 sm:leading-7">
                    {codeLines.map((line, lineIdx) => (
                      <div key={lineIdx} className="flex">
                        <span className="select-none text-slate-600 w-6 text-right mr-4 text-xs leading-7 shrink-0">
                          {lineIdx + 1}
                        </span>
                        <span>
                          {line.tokens.map((token, tokenIdx) => (
                            <span
                              key={tokenIdx}
                              className={
                                token.type === "keyword" ? "text-purple-400" :
                                token.type === "import" ? "text-purple-400" :
                                token.type === "string" ? "text-green-400" :
                                token.type === "function" ? "text-blue-400" :
                                token.type === "class" ? "text-yellow-300" :
                                token.type === "type" ? "text-cyan-400" :
                                token.type === "comment" ? "text-slate-500 italic" :
                                "text-slate-300"
                              }
                            >
                              {token.text}
                            </span>
                          ))}
                        </span>
                      </div>
                    ))}
                  </pre>
                </div>

                {/* Terminal output */}
                <div className="border-t border-white/5 bg-black/30 px-5 py-3">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-green-400">$</span>
                    <span className="text-slate-400">datvik deploy</span>
                    <span className="ml-auto text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Deployed in 2.3s
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-[#0f0f1a] border border-white/10 rounded-xl px-3 py-2 shadow-xl hidden sm:block"
              >
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-slate-300">Agent Live</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-[#0f0f1a] border border-white/10 rounded-xl px-3 py-2 shadow-xl hidden sm:block"
              >
                <div className="flex items-center gap-2 text-xs">
                  <Zap size={12} className="text-indigo-400" />
                  <span className="text-slate-300">1-command deploy</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-white/10 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-indigo-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
