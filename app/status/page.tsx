import PageShell from "@/components/page-shell";
import { CheckCircle, Clock } from "lucide-react";

const services = [
  { name: "Agent Runtime", status: "operational", uptime: "99.99%" },
  { name: "API Gateway", status: "operational", uptime: "99.98%" },
  { name: "Chat Widget (DatvikPop)", status: "operational", uptime: "99.99%" },
  { name: "WhatsApp Channel", status: "operational", uptime: "99.95%" },
  { name: "Slack Channel", status: "operational", uptime: "99.97%" },
  { name: "Vector Search", status: "operational", uptime: "99.96%" },
  { name: "CLI & Deployment", status: "operational", uptime: "99.99%" },
  { name: "Dashboard", status: "operational", uptime: "99.98%" },
];

const incidents = [
  { date: "Feb 18, 2026", title: "Elevated API latency", description: "Brief increase in response times for the API Gateway. Resolved within 12 minutes.", status: "Resolved" },
  { date: "Feb 3, 2026", title: "WhatsApp channel delay", description: "Message delivery delays on WhatsApp channel due to upstream provider issue. Resolved.", status: "Resolved" },
];

export default function Status() {
  return (
    <PageShell
      badge="Status"
      title="System Status"
      subtitle="Real-time operational status of all DatvikAI services."
    >
      {/* Overall status */}
      <div className="glass-card rounded-2xl p-6 mb-8 border-green-500/20">
        <div className="flex items-center gap-3">
          <CheckCircle size={24} className="text-green-400" />
          <div>
            <h2 className="text-lg font-bold text-white">All Systems Operational</h2>
            <p className="text-sm text-slate-400">Last updated: just now</p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="space-y-2 mb-10">
        {services.map((s) => (
          <div key={s.name} className="glass-card rounded-xl px-5 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm font-medium text-white">{s.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-slate-500">{s.uptime} uptime</span>
              <span className="text-xs text-green-400 font-medium capitalize">{s.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent incidents */}
      <h2 className="text-lg font-bold text-white mb-4">Recent Incidents</h2>
      <div className="space-y-4">
        {incidents.map((inc) => (
          <div key={inc.date} className="glass-card rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <Clock size={14} className="text-slate-500" />
              <span className="text-xs text-slate-500">{inc.date}</span>
              <span className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">{inc.status}</span>
            </div>
            <h3 className="text-sm font-semibold text-white mb-1">{inc.title}</h3>
            <p className="text-sm text-slate-400">{inc.description}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
