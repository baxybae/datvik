import PageShell from "@/components/page-shell";
import { Shield, Lock, Eye, Server, Key, FileCheck } from "lucide-react";

const practices = [
  {
    icon: Lock,
    title: "Encryption",
    description: "All data is encrypted at rest (AES-256) and in transit (TLS 1.3). API keys and environment variables are stored in encrypted vaults.",
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "SOC2 Type II compliant infrastructure with isolated compute environments. Regular penetration testing and vulnerability scanning.",
  },
  {
    icon: Eye,
    title: "Access Controls",
    description: "Role-based access control, audit logging for all administrative actions, and mandatory two-factor authentication for team accounts.",
  },
  {
    icon: Key,
    title: "Secret Management",
    description: "Environment variables are encrypted and injected at runtime. Secrets never appear in logs, error messages, or API responses.",
  },
  {
    icon: Shield,
    title: "Sandboxed Execution",
    description: "Agent tools run in isolated sandboxes. Each deployment gets its own execution environment with strict resource limits.",
  },
  {
    icon: FileCheck,
    title: "Compliance",
    description: "SOC2 Type II certified. GDPR compliant with data processing agreements available. Regular third-party security audits.",
  },
];

export default function Security() {
  return (
    <PageShell
      badge="Security"
      title="Security at DatvikAI"
      subtitle="We take security seriously. Here is how we protect your data and your customers' data."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {practices.map((p) => (
          <div key={p.title} className="glass-card rounded-xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
              <p.icon size={20} className="text-indigo-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">{p.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{p.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-2xl p-6">
        <h2 className="text-base font-semibold text-white mb-3">Responsible Disclosure</h2>
        <p className="text-sm text-slate-400 leading-relaxed mb-3">
          If you discover a security vulnerability, please report it responsibly. We appreciate the security research
          community and will acknowledge valid reports.
        </p>
        <p className="text-sm text-slate-400">
          Report vulnerabilities to{" "}
          <a href="mailto:security@datvikai.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
            security@datvikai.com
          </a>
        </p>
      </div>
    </PageShell>
  );
}
