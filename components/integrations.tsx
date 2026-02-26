"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const integrationCategories = [
  {
    title: "Your APIs Only",
    subtitle: "100% Custom Integration",
    description: "Connect directly to your existing backend, databases, and third-party services. Complete control over your business logic.",
    badge: "Full Control",
    badgeColor: "indigo",
    items: ["Your CRM", "Your Database", "Your Backend", "Any REST API"],
    code: `class YourCustomTool implements DatvikTool {
  async execute(input) {
    const res = await fetch('https://your-api.com/endpoint', {
      headers: { 'X-API-Key': env('YOUR_API_KEY') }
    });
    return processYourData(await res.json());
  }
}`,
  },
  {
    title: "Platform APIs",
    subtitle: "Optional Built-In Helpers",
    description: "Ready-to-use APIs for common e-commerce and data storage needs. No backend required to get started.",
    badge: "Quick Start",
    badgeColor: "purple",
    items: ["Products", "Baskets", "Orders", "Vector Search"],
    code: `import { Products, Baskets, Data } from 'datvik-cli';

const products = await Products.search('laptop');
const basket = await Baskets.create({ currency: 'USD' });
const results = await Data.search('docs', query);`,
  },
  {
    title: "Mix Both",
    subtitle: "Best of Both Worlds",
    description: "Most production apps use a hybrid approach — your critical systems combined with Platform helpers where they add value.",
    badge: "Recommended",
    badgeColor: "cyan",
    items: ["Your Shopify + Platform Search", "Your Auth + Platform Storage", "Your CRM + Semantic Search"],
    code: `// Your Shopify store
const products = await fetch('https://your-store.myshopify.com/...');

// Platform vector search for FAQs
const faqs = await Data.search('help_articles', query, 5);

// Your custom database
const history = await fetch('https://your-api.com/history');`,
  },
];

const colorMap: Record<string, { badge: string; border: string; dot: string }> = {
  indigo: { badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20", border: "border-indigo-500/20 hover:border-indigo-500/40", dot: "bg-indigo-400" },
  purple: { badge: "bg-purple-500/10 text-purple-400 border-purple-500/20", border: "border-purple-500/20 hover:border-purple-500/40", dot: "bg-purple-400" },
  cyan: { badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20", border: "border-cyan-500/20 hover:border-cyan-500/40", dot: "bg-cyan-400" },
};

export default function Integrations() {
  return (
    <section id="platform" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Integrations</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Integrate with{" "}
            <span className="gradient-text">any API</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Connect to your existing systems, use our optional Platform APIs, or mix both.
            DatvikAI works with whatever stack you have.
          </p>
        </motion.div>

        {/* Integration cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {integrationCategories.map((cat, i) => {
            const colors = colorMap[cat.badgeColor];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-card rounded-2xl p-6 border transition-all ${colors.border}`}
              >
                {/* Badge */}
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${colors.badge} mb-4`}>
                  {cat.badge}
                </span>

                <h3 className="text-lg font-bold text-white mb-1">{cat.title}</h3>
                <p className="text-xs text-slate-500 font-medium mb-3">{cat.subtitle}</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{cat.description}</p>

                {/* Items */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 px-2.5 py-1 rounded-lg"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                      {item}
                    </span>
                  ))}
                </div>

                {/* Code */}
                <div className="code-block rounded-xl p-3 sm:p-4 text-[10px] sm:text-xs font-mono text-slate-300 overflow-x-auto">
                  <pre className="whitespace-pre text-[10px] sm:text-[11px] leading-5 sm:leading-6">{cat.code}</pre>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
          >
            View all integration examples
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
