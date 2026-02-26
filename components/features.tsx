"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Zap,
  Globe,
  Shield,
  Layers,
  RefreshCw,
  Terminal,
  Database,
  MessageSquare,
  Webhook,
  Clock,
  Filter,
} from "lucide-react";

const mainFeatures = [
  {
    icon: Code2,
    title: "TypeScript-First Development",
    description:
      "Write tools as TypeScript classes with full type safety. Zod schemas for input validation. Your IDE autocompletes everything.",
    color: "indigo",
    code: `class GetOrderTool implements DatvikTool {
  name = "get_order";
  inputSchema = z.object({
    orderId: z.string()
  });
  async execute(input) {
    return await Orders.getById(input.orderId);
  }
}`,
  },
  {
    icon: Zap,
    title: "One-Command Deploy",
    description:
      "Push and deploy your agent to production in seconds. Live reload during development. No Docker, no Kubernetes, no infra headaches.",
    color: "purple",
    code: `# Local dev with live reload
datvik chat

# Deploy to production
datvik push && datvik deploy

# ✓ Deployed in 2.3s`,
  },
  {
    icon: Globe,
    title: "Multi-Channel Deployment",
    description:
      "Deploy once, run everywhere. Your agent works on WhatsApp, Facebook, Instagram, Slack, Email, and your own web widget.",
    color: "cyan",
    code: `// One agent, all channels
export const agent = new DatvikAgent({
  name: "support-agent",
  channels: ["whatsapp", "web", "slack"],
  skills: [supportSkill]
});`,
  },
];

const featureGrid = [
  {
    icon: Layers,
    title: "Skills & Tools Architecture",
    description: "Organize tools into skills. Each skill bundles related capabilities. The AI decides when to call each tool.",
    color: "indigo",
  },
  {
    icon: Webhook,
    title: "Webhooks & Events",
    description: "React to real-time events from Stripe, Shopify, or any service. Process payments, orders, and more automatically.",
    color: "purple",
  },
  {
    icon: Clock,
    title: "Scheduled Jobs",
    description: "Run cron jobs and scheduled tasks. Send daily reports, sync data, trigger workflows on a schedule.",
    color: "cyan",
  },
  {
    icon: Filter,
    title: "Pre & Post Processors",
    description: "Filter messages before they reach your agent. Modify responses after generation. Full control over the pipeline.",
    color: "green",
  },
  {
    icon: Database,
    title: "Vector Search & Storage",
    description: "Built-in semantic search with vector embeddings. Store and retrieve data with natural language queries.",
    color: "orange",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Environment variables for secrets. Input validation with Zod. Sandboxed execution. SOC2 compliant infrastructure.",
    color: "red",
  },
  {
    icon: RefreshCw,
    title: "Live Reload Dev Mode",
    description: "See changes instantly without redeploying. Test tools interactively. Debug with real inputs in real-time.",
    color: "indigo",
  },
  {
    icon: Terminal,
    title: "30+ Working Examples",
    description: "Start from production-ready templates. CRM integrations, e-commerce, healthcare, IoT — all included.",
    color: "purple",
  },
  {
    icon: MessageSquare,
    title: "Embeddable Chat Widget",
    description: "Add AI chat to any website with one script tag. Fully customizable. Works with your existing design system.",
    color: "cyan",
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; glow: string }> = {
  indigo: {
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    icon: "text-indigo-400",
    glow: "shadow-indigo-500/20",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    icon: "text-purple-400",
    glow: "shadow-purple-500/20",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    icon: "text-cyan-400",
    glow: "shadow-cyan-500/20",
  },
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    icon: "text-green-400",
    glow: "shadow-green-500/20",
  },
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    icon: "text-orange-400",
    glow: "shadow-orange-500/20",
  },
  red: {
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    icon: "text-red-400",
    glow: "shadow-red-500/20",
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="badge mb-4">Features</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Everything you need to{" "}
            <span className="gradient-text">ship AI agents</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            DatvikAI gives you the full stack for building, testing, and deploying
            production-grade AI agents — without touching infrastructure.
          </p>
        </motion.div>

        {/* Main feature cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {mainFeatures.map((feature, i) => {
            const colors = colorMap[feature.color];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-indigo-500/30 transition-all group hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon size={20} className={colors.icon} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{feature.description}</p>
                <div className="code-block rounded-xl p-4 text-xs font-mono text-slate-300 overflow-x-auto">
                  <pre className="whitespace-pre">{feature.code}</pre>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {featureGrid.map((feature) => {
            const colors = colorMap[feature.color];
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="glass-card rounded-xl p-5 hover:border-indigo-500/20 transition-all group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-9 h-9 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon size={16} className={colors.icon} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
