import PageShell from "@/components/page-shell";
import { MapPin, Clock, ArrowRight } from "lucide-react";

const openings = [
  { title: "Senior Backend Engineer", team: "Platform", location: "Remote", type: "Full-time", description: "Build and scale the core agent runtime, deployment pipeline, and multi-channel message routing." },
  { title: "Frontend Engineer", team: "Product", location: "Remote", type: "Full-time", description: "Design and build the DatvikAI dashboard, CLI experience, and developer documentation." },
  { title: "Developer Advocate", team: "Community", location: "Remote", type: "Full-time", description: "Create tutorials, demos, and content that helps developers succeed with DatvikAI." },
  { title: "AI/ML Engineer", team: "AI", location: "Remote", type: "Full-time", description: "Optimize LLM tool-calling, improve agent reasoning, and build evaluation frameworks." },
];

const perks = [
  "Fully remote — work from anywhere",
  "Competitive salary + equity",
  "Unlimited PTO",
  "Home office budget",
  "Learning & conference budget",
  "Health, dental & vision",
];

export default function Careers() {
  return (
    <PageShell
      badge="Careers"
      title="Join the DatvikAI team"
      subtitle="We are building the platform that makes AI agents accessible to every developer. Come help us shape the future."
    >
      {/* Perks */}
      <div className="glass-card rounded-2xl p-8 mb-8">
        <h2 className="text-lg font-bold text-white mb-4">Why DatvikAI?</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {perks.map((p) => (
            <div key={p} className="flex items-center gap-2 text-sm text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
              {p}
            </div>
          ))}
        </div>
      </div>

      {/* Openings */}
      <h2 className="text-lg font-bold text-white mb-5">Open Positions</h2>
      <div className="space-y-4 mb-8">
        {openings.map((job) => (
          <div key={job.title} className="glass-card rounded-xl p-6 hover:border-indigo-500/30 transition-all group">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-white group-hover:text-indigo-300 transition-colors">{job.title}</h3>
                <p className="text-sm text-slate-400 mt-1">{job.description}</p>
                <div className="flex items-center gap-4 mt-3">
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin size={12} /> {job.location}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <Clock size={12} /> {job.type}
                  </span>
                  <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full">{job.team}</span>
                </div>
              </div>
              <a
                href="mailto:careers@datvikai.com"
                className="shrink-0 flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
              >
                Apply <ArrowRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-xl p-6 text-center">
        <p className="text-sm text-slate-400">
          Don&apos;t see a role that fits? Send us your resume at{" "}
          <a href="mailto:careers@datvikai.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
            careers@datvikai.com
          </a>
        </p>
      </div>
    </PageShell>
  );
}
