import PageShell from "@/components/page-shell";
import { BookOpen, Rocket, Code2, MessageSquare, Puzzle, Terminal, ArrowRight } from "lucide-react";
import Link from "next/link";

const sections = [
  { icon: Rocket, title: "Quick Start", description: "Install the CLI, create your first agent, and deploy in 5 minutes.", href: "/docs", color: "indigo" },
  { icon: Code2, title: "API Reference", description: "Complete reference for DatvikTool, DatvikSkill, DatvikAgent, and all Platform APIs.", href: "/docs", color: "purple" },
  { icon: MessageSquare, title: "Chat Widget", description: "Embed DatvikPop on any website with one script tag. Customization and theming guide.", href: "/docs", color: "cyan" },
  { icon: Puzzle, title: "Examples", description: "30+ working tools and 15 complete demo implementations across industries.", href: "/docs", color: "green" },
  { icon: Terminal, title: "CLI Reference", description: "All CLI commands — init, push, deploy, chat, test, env, and more.", href: "/docs", color: "orange" },
  { icon: BookOpen, title: "Concepts", description: "Skills, tools, webhooks, jobs, processors, platform APIs, and architecture overview.", href: "/docs", color: "red" },
];

const colorMap: Record<string, { bg: string; border: string; icon: string }> = {
  indigo: { bg: "bg-indigo-500/10", border: "border-indigo-500/20", icon: "text-indigo-400" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", icon: "text-purple-400" },
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/20", icon: "text-cyan-400" },
  green: { bg: "bg-green-500/10", border: "border-green-500/20", icon: "text-green-400" },
  orange: { bg: "bg-orange-500/10", border: "border-orange-500/20", icon: "text-orange-400" },
  red: { bg: "bg-red-500/10", border: "border-red-500/20", icon: "text-red-400" },
};

export default function Docs() {
  return (
    <PageShell
      badge="Documentation"
      title="DatvikAI Docs"
      subtitle="Everything you need to build, test, and deploy AI agents."
    >
      {/* Quick install */}
      <div className="glass-card rounded-2xl p-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-base font-semibold text-white mb-1">Get started in 30 seconds</h2>
            <p className="text-sm text-slate-400">Install the CLI and create your first project.</p>
          </div>
          <div className="code-block rounded-xl px-4 py-2.5 font-mono text-sm text-green-400 shrink-0">
            npm install -g datvik-cli
          </div>
        </div>
      </div>

      {/* Sections grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((s) => {
          const c = colorMap[s.color];
          return (
            <Link
              key={s.title}
              href={s.href}
              className="glass-card rounded-xl p-6 hover:border-indigo-500/30 transition-all group block"
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <s.icon size={20} className={c.icon} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors flex items-center gap-2">
                    {s.title}
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* MCP */}
      <div className="glass-card rounded-2xl p-6 mt-8">
        <h2 className="text-base font-semibold text-white mb-2">Connect Your AI IDE</h2>
        <p className="text-sm text-slate-400 mb-4">Get DatvikAI docs directly in Cursor, VS Code, or any MCP-compatible tool.</p>
        <div className="code-block rounded-xl p-4 font-mono text-xs text-slate-300 overflow-x-auto">
          <pre>{`{
  "mcpServers": {
    "datvik-docs": {
      "url": "https://docs.datvikai.com/mcp"
    }
  }
}`}</pre>
        </div>
      </div>
    </PageShell>
  );
}
