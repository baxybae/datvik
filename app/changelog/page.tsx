import PageShell from "@/components/page-shell";

const releases = [
  {
    version: "v3.0.0",
    date: "Feb 20, 2026",
    tag: "Major",
    tagColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    changes: [
      "DatvikAgent unified configuration — combine skills, webhooks, jobs, and processors in one place",
      "Webhook support — react to real-time events from Stripe, Shopify, and any service",
      "Scheduled jobs with cron patterns — daily reports, data sync, automated workflows",
      "Pre/Post processors — filter and modify messages before and after agent processing",
      "15 new production-ready demo implementations",
    ],
  },
  {
    version: "v2.5.0",
    date: "Jan 15, 2026",
    tag: "Feature",
    tagColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    changes: [
      "Vector search and semantic data storage",
      "DatvikPop embeddable chat widget",
      "MCP server for AI IDE integration",
      "Improved CLI with interactive tool testing",
    ],
  },
  {
    version: "v2.0.0",
    date: "Dec 1, 2025",
    tag: "Major",
    tagColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    changes: [
      "Multi-channel deployment — WhatsApp, Slack, Instagram, Email",
      "Platform APIs — Products, Baskets, Orders",
      "Environment variable management",
      "Sandbox and production chat modes",
    ],
  },
  {
    version: "v1.0.0",
    date: "Sep 15, 2025",
    tag: "Launch",
    tagColor: "bg-green-500/10 text-green-400 border-green-500/20",
    changes: [
      "Initial public release",
      "TypeScript-first agent development framework",
      "CLI with init, push, deploy, and chat commands",
      "30+ example tools included in starter template",
      "Web channel support",
    ],
  },
];

export default function Changelog() {
  return (
    <PageShell
      badge="Changelog"
      title="What&apos;s new in DatvikAI"
      subtitle="All the latest features, improvements, and fixes."
      narrow
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/[0.06]" />

        <div className="space-y-10">
          {releases.map((r) => (
            <div key={r.version} className="relative pl-8">
              {/* Dot */}
              <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-[#0a0a0f] border-2 border-indigo-500/50 z-10" />

              <div className="flex items-center gap-3 mb-3">
                <span className="text-lg font-bold text-white">{r.version}</span>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${r.tagColor}`}>{r.tag}</span>
                <span className="text-xs text-slate-600">{r.date}</span>
              </div>

              <ul className="space-y-2">
                {r.changes.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="w-1 h-1 rounded-full bg-slate-600 mt-2 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
