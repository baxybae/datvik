"use client";

import { motion } from "framer-motion";
import {
  Headphones,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Building,
  Cpu,
} from "lucide-react";

const useCases = [
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Automate L1 support across channels. Resolve tickets, track orders, process returns — all through natural conversation.",
    stats: "60% fewer tickets",
    color: "indigo",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Product recommendations, cart management, order tracking, and checkout assistance powered by your catalog data.",
    stats: "3x conversion lift",
    color: "purple",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description:
      "Appointment scheduling, symptom triage, patient onboarding, and insurance verification with HIPAA-compliant tooling.",
    stats: "40% faster intake",
    color: "cyan",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Tutoring assistants, enrollment bots, course recommendations, and student support agents that scale to thousands.",
    stats: "24/7 availability",
    color: "green",
  },
  {
    icon: Building,
    title: "Enterprise HR",
    description:
      "Onboarding workflows, PTO requests, benefits questions, and internal knowledge base search for employees.",
    stats: "80% self-service",
    color: "orange",
  },
  {
    icon: Cpu,
    title: "IoT & Edge",
    description:
      "Device monitoring, alert management, predictive maintenance, and conversational interfaces for connected systems.",
    stats: "Real-time actions",
    color: "red",
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; stat: string }> = {
  indigo: { bg: "bg-indigo-500/10", border: "border-indigo-500/20", icon: "text-indigo-400", stat: "text-indigo-400" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", icon: "text-purple-400", stat: "text-purple-400" },
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/20", icon: "text-cyan-400", stat: "text-cyan-400" },
  green: { bg: "bg-green-500/10", border: "border-green-500/20", icon: "text-green-400", stat: "text-green-400" },
  orange: { bg: "bg-orange-500/10", border: "border-orange-500/20", icon: "text-orange-400", stat: "text-orange-400" },
  red: { bg: "bg-red-500/10", border: "border-red-500/20", icon: "text-red-400", stat: "text-red-400" },
};

export default function UseCases() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="badge mb-4">Use Cases</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Built for{" "}
            <span className="gradient-text">every industry</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From customer support to IoT — DatvikAI powers AI agents across
            every vertical with production-ready templates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc, i) => {
            const colors = colorMap[uc.color];
            return (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card rounded-2xl p-6 hover:border-indigo-500/20 transition-all group hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <uc.icon size={20} className={colors.icon} />
                  </div>
                  <span className={`text-xs font-semibold ${colors.stat} bg-white/5 px-2.5 py-1 rounded-full`}>
                    {uc.stats}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{uc.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{uc.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
