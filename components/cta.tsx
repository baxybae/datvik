"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Terminal } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-indigo-600/15 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute w-[400px] h-[300px] bg-purple-600/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <span className="badge mb-6">Get Started Today</span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Build your first agent{" "}
            <span className="gradient-text">in 5 minutes</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 2,000+ developers who are shipping AI agents with DatvikAI.
            No credit card required. No infra headaches. Just code and deploy.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/signup"
              className="group flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
            >
              <Zap size={18} />
              Start Building Free
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/docs"
              className="flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-white/20 rounded-xl hover:bg-white/5 transition-all"
            >
              <Terminal size={18} />
              Read the Docs
            </Link>
          </div>

          {/* Install command */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-[#0d0d1a] border border-white/10 rounded-xl px-4 sm:px-5 py-3 font-mono text-xs sm:text-sm"
          >
            <span className="text-green-400">$</span>
            <span className="text-slate-300">npm install -g datvik-cli</span>
            <button
              onClick={() => navigator.clipboard?.writeText("npm install -g datvik-cli")}
              className="ml-2 text-slate-500 hover:text-slate-300 transition-colors text-xs border border-white/10 px-2 py-0.5 rounded"
            >
              copy
            </button>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-slate-500"
          >
            {[
              "✓ Free to start",
              "✓ No credit card",
              "✓ Deploy in minutes",
              "✓ TypeScript native",
              "✓ SOC2 compliant",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1">
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
