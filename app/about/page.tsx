import PageShell from "@/components/page-shell";
import { Users, Target, Lightbulb, Globe } from "lucide-react";
import Link from "next/link";

const values = [
  { icon: Target, title: "Developer-First", description: "Everything we build starts with the developer experience. If it is not simple, we ship it again." },
  { icon: Lightbulb, title: "Simplicity Wins", description: "AI infrastructure should disappear. You write business logic, we handle the rest." },
  { icon: Users, title: "Community Driven", description: "Our roadmap is shaped by the developers who use DatvikAI every day." },
  { icon: Globe, title: "Global by Default", description: "Multi-channel, multi-language, multi-region. Your agents work everywhere your customers are." },
];

const stats = [
  { value: "2,000+", label: "Developers" },
  { value: "15M+", label: "Messages processed" },
  { value: "50+", label: "Countries" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function About() {
  return (
    <PageShell
      badge="About"
      title="Building the future of AI agents"
      subtitle="DatvikAI is the Agent OS that abstracts technical complexity so engineers can focus on solving business problems with AI."
    >
      {/* Mission */}
      <div className="glass-card rounded-2xl p-8 mb-8">
        <h2 className="text-xl font-bold text-white mb-3">Our Mission</h2>
        <p className="text-slate-400 leading-relaxed">
          We believe every business should be able to deploy intelligent AI agents without needing a team of ML engineers.
          DatvikAI provides the complete platform — from development to deployment — so a single developer can build, test,
          and ship production-grade AI agents in minutes, not months.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="glass-card rounded-xl p-5 text-center hover:border-indigo-500/20 transition-all hover:-translate-y-0.5">
            <div className="text-2xl font-extrabold gradient-text mb-1">{s.value}</div>
            <div className="text-xs text-slate-500 font-medium">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Values */}
      <h2 className="text-xl font-bold text-white mb-5">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {values.map((v) => (
          <div key={v.title} className="glass-card rounded-xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
              <v.icon size={20} className="text-indigo-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">{v.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{v.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Team note */}
      <div className="glass-card rounded-2xl p-8">
        <h2 className="text-xl font-bold text-white mb-3">The Team</h2>
        <p className="text-slate-400 leading-relaxed mb-4">
          We are a small, focused team of engineers and designers who have previously built developer tools at companies
          across the industry. We are remote-first, spread across multiple time zones, and united by a shared obsession
          with great developer experience.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
        >
          Contact us →
        </Link>
      </div>
    </PageShell>
  );
}
