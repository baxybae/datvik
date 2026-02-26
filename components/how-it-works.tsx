"use client";

import { motion } from "framer-motion";
import { Download, Code2, TestTube, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Install the CLI",
    description: "One command to get started. Node 16+ required. Authenticates with your email — no credit card needed.",
    code: "npm install -g datvik-cli\ndatvik auth",
    color: "indigo",
  },
  {
    number: "02",
    icon: Code2,
    title: "Write TypeScript Tools",
    description: "Create tools as TypeScript classes. Each tool does one thing. The AI decides when to call them based on user intent.",
    code: "datvik init my-agent\ncd my-agent\n# Edit agent.ts with your tools",
    color: "purple",
  },
  {
    number: "03",
    icon: TestTube,
    title: "Test Locally",
    description: "Chat with your agent in the terminal. Live reload — changes apply instantly. Test individual tools with exact inputs.",
    code: "datvik chat\n# Interactive CLI session\n# Sandbox mode available",
    color: "cyan",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deploy to Production",
    description: "Push and deploy in one command. Your agent goes live on all configured channels — WhatsApp, web, Slack, and more.",
    code: "datvik push && datvik deploy\n# ✓ Deployed in 2.3s\n# Live on all channels",
    color: "green",
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; number: string; line: string }> = {
  indigo: { bg: "bg-indigo-500/10", border: "border-indigo-500/30", icon: "text-indigo-400", number: "text-indigo-500", line: "bg-indigo-500/30" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", icon: "text-purple-400", number: "text-purple-500", line: "bg-purple-500/30" },
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", icon: "text-cyan-400", number: "text-cyan-500", line: "bg-cyan-500/30" },
  green: { bg: "bg-green-500/10", border: "border-green-500/30", icon: "text-green-400", number: "text-green-500", line: "bg-green-500/30" },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="badge mb-4">How It Works</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 tracking-tight">
            From zero to{" "}
            <span className="gradient-text">deployed agent</span>
            <br />in 5 minutes
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            DatvikAI handles the infrastructure. You focus on the business logic.
            Ship your first agent without touching a single config file.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-green-500/30 z-0" />

          {steps.map((step, i) => {
            const colors = colorMap[step.color];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative z-10 flex flex-col"
              >
                {/* Step number + icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center shrink-0 shadow-lg`}
                  >
                    <step.icon size={22} className={colors.icon} />
                  </div>
                  <span className={`text-3xl font-black ${colors.number} opacity-40`}>
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="glass-card rounded-xl p-5 flex-1">
                  <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{step.description}</p>
                  <div className="code-block rounded-lg p-3 text-xs font-mono text-green-400">
                    <pre className="whitespace-pre">{step.code}</pre>
                  </div>
                </div>

                {/* Arrow between steps (mobile/tablet) */}
                {i < steps.length - 1 && (
                  <div className="flex justify-center my-4 lg:hidden">
                    <ArrowRight size={16} className="text-slate-600 rotate-90" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
          >
            <Rocket size={18} />
            Start Your First Agent
            <ArrowRight size={16} />
          </Link>
          <p className="text-sm text-slate-500 mt-3">Free to start. No credit card required.</p>
        </motion.div>
      </div>
    </section>
  );
}
