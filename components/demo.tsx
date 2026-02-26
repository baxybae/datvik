"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Globe, MessageSquare, Code2, ChevronRight } from "lucide-react";

const tabs = [
  { id: "cli", label: "CLI", icon: Terminal },
  { id: "web", label: "Web Widget", icon: Globe },
  { id: "whatsapp", label: "WhatsApp", icon: MessageSquare },
  { id: "code", label: "Code", icon: Code2 },
];

const tabContent = {
  cli: {
    title: "Interactive CLI Chat",
    description: "Test your agent directly in the terminal. Choose sandbox mode to test local code before deploying.",
    preview: (
      <div className="code-block rounded-xl p-5 font-mono text-sm">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <span className="ml-2 text-xs text-slate-500">Terminal</span>
        </div>
        <div className="space-y-2 text-xs">
          <div><span className="text-green-400">$</span> <span className="text-slate-300">datvik chat</span></div>
          <div className="text-slate-500">Connecting to DatvikAI...</div>
          <div className="text-green-400">✓ Connected to support-agent (sandbox)</div>
          <div className="mt-3 text-slate-500">─────────────────────────────</div>
          <div className="mt-2"><span className="text-indigo-400">You:</span> <span className="text-slate-300">Where is my order #12345?</span></div>
          <div className="mt-1 text-slate-500 text-xs">→ Calling get_order(orderId: "12345")</div>
          <div className="mt-1"><span className="text-purple-400">Agent:</span> <span className="text-slate-300">Your order #12345 is currently in transit and expected to arrive by Friday, Feb 28. Tracking: UPS-789XYZ</span></div>
          <div className="mt-3"><span className="text-indigo-400">You:</span> <span className="text-slate-300">Can I change the delivery address?</span></div>
          <div className="mt-1 text-slate-500 text-xs">→ Calling update_order(orderId: "12345", field: "address")</div>
          <div className="mt-1"><span className="text-purple-400">Agent:</span> <span className="text-slate-300">I&apos;ve updated your delivery address. You&apos;ll receive a confirmation email shortly.</span></div>
          <div className="mt-3 flex items-center gap-1">
            <span className="text-green-400">$</span>
            <span className="text-slate-300 animate-pulse">_</span>
          </div>
        </div>
      </div>
    ),
  },
  web: {
    title: "Embeddable Chat Widget",
    description: "Add AI chat to any website with one script tag. Fully customizable to match your brand.",
    preview: (
      <div className="relative bg-[#0d0d1a] rounded-xl border border-white/5 overflow-hidden" style={{ minHeight: 280 }}>
        {/* Fake website background */}
        <div className="p-6">
          <div className="h-4 bg-white/5 rounded w-1/3 mb-3" />
          <div className="h-3 bg-white/5 rounded w-2/3 mb-2" />
          <div className="h-3 bg-white/5 rounded w-1/2 mb-6" />
          <div className="grid grid-cols-3 gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-16 bg-white/[0.03] rounded-lg border border-white/5" />
            ))}
          </div>
        </div>
        {/* Chat widget */}
        <div className="absolute bottom-4 right-4 w-56 sm:w-64">
          <div className="bg-[#0f0f1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-xs font-bold text-white">D</span>
              </div>
              <span className="text-sm font-semibold text-white">DatvikAI Support</span>
              <div className="ml-auto w-2 h-2 rounded-full bg-green-400" />
            </div>
            <div className="p-3 space-y-2 text-xs">
              <div className="bg-white/5 rounded-xl rounded-tl-sm px-3 py-2 text-slate-300 max-w-[80%]">
                Hi! How can I help you today?
              </div>
              <div className="bg-indigo-600/20 border border-indigo-500/20 rounded-xl rounded-tr-sm px-3 py-2 text-slate-300 max-w-[80%] ml-auto">
                Track my order
              </div>
              <div className="bg-white/5 rounded-xl rounded-tl-sm px-3 py-2 text-slate-300 max-w-[90%]">
                Sure! What&apos;s your order number?
              </div>
            </div>
            <div className="px-3 pb-3">
              <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2">
                <span className="text-xs text-slate-500 flex-1">Type a message...</span>
                <ChevronRight size={14} className="text-indigo-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  whatsapp: {
    title: "WhatsApp Integration",
    description: "Deploy your agent to WhatsApp Business. Your customers chat naturally, your agent takes real actions.",
    preview: (
      <div className="bg-[#0d1117] rounded-xl border border-white/5 overflow-hidden" style={{ minHeight: 280 }}>
        <div className="bg-[#1a2a1a] px-4 py-3 flex items-center gap-3 border-b border-white/5">
          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
            <span className="text-xs font-bold text-white">D</span>
          </div>
          <div>
            <div className="text-sm font-medium text-white">DatvikAI Support</div>
            <div className="text-xs text-green-400">Online</div>
          </div>
        </div>
        <div className="p-4 space-y-3 text-xs">
          <div className="flex justify-start">
            <div className="bg-[#1a2a1a] rounded-xl rounded-tl-sm px-3 py-2 text-slate-300 max-w-[75%]">
              Hello! I&apos;m your DatvikAI assistant. How can I help?
              <div className="text-slate-500 text-[10px] mt-1">10:23 AM ✓✓</div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#1a3a1a] rounded-xl rounded-tr-sm px-3 py-2 text-slate-300 max-w-[75%]">
              I need to return my order
              <div className="text-slate-500 text-[10px] mt-1">10:24 AM ✓✓</div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-[#1a2a1a] rounded-xl rounded-tl-sm px-3 py-2 text-slate-300 max-w-[80%]">
              I&apos;ve initiated a return for your order. You&apos;ll receive a prepaid label via email within 24 hours. Refund in 3-5 days.
              <div className="text-slate-500 text-[10px] mt-1">10:24 AM ✓✓</div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#1a3a1a] rounded-xl rounded-tr-sm px-3 py-2 text-slate-300 max-w-[75%]">
              Thank you! 🙏
              <div className="text-slate-500 text-[10px] mt-1">10:25 AM ✓✓</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  code: {
    title: "Clean, Minimal Code",
    description: "Focus on business logic. DatvikAI handles routing, LLM calls, tool execution, and deployment.",
    preview: (
      <div className="code-block rounded-xl p-5 font-mono text-xs overflow-x-auto">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <span className="ml-2 text-xs text-slate-500">agent.ts</span>
        </div>
        <pre className="text-slate-300 leading-7">{`import { DatvikAgent, DatvikSkill, DatvikTool } from 'datvik-cli';
import { z } from 'zod';

class TrackOrderTool implements DatvikTool {
  name = "track_order";
  description = "Track a customer order by ID";
  inputSchema = z.object({ orderId: z.string() });

  async execute(input: { orderId: string }) {
    const order = await fetch(\`/api/orders/\${input.orderId}\`);
    return await order.json();
  }
}

const supportSkill = new DatvikSkill({
  name: "customer-support",
  tools: [new TrackOrderTool()]
});

export const agent = new DatvikAgent({
  name: "support-agent",
  persona: "You are a helpful support agent.",
  skills: [supportSkill]
});`}</pre>
      </div>
    ),
  },
};

export default function Demo() {
  const [activeTab, setActiveTab] = useState("cli");

  return (
    <section id="demo" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="badge mb-4">Live Demo</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            See DatvikAI{" "}
            <span className="gradient-text">in action</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Test on real channels instantly. No setup required.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "text-slate-400 hover:text-white hover:bg-white/5 border border-white/5"
              }`}
            >
              <tab.icon size={15} />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="max-w-3xl mx-auto"
          >
            <div className="glass-card rounded-2xl p-6">
              <div className="mb-5">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {tabContent[activeTab as keyof typeof tabContent].title}
                </h3>
                <p className="text-sm text-slate-400">
                  {tabContent[activeTab as keyof typeof tabContent].description}
                </p>
              </div>
              {tabContent[activeTab as keyof typeof tabContent].preview}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
