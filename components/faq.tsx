"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is DatvikAI?",
    answer:
      "DatvikAI is the Agent OS — a developer platform for building AI agents that integrate with your entire business. You write TypeScript tools that connect to any API, and DatvikAI transforms them into conversational AI capabilities. Your customers chat naturally, and your agent takes real actions.",
  },
  {
    question: "Do I need to know machine learning to use DatvikAI?",
    answer:
      "Not at all. DatvikAI abstracts all the ML complexity. You write TypeScript functions (tools) that do specific things — like fetching an order or creating a ticket. The AI decides when to call each tool based on what the user says. You focus on business logic, not model training.",
  },
  {
    question: "What channels can I deploy my agent to?",
    answer:
      "DatvikAI supports WhatsApp, Facebook Messenger, Instagram, Slack, Email, and your own web widget (DatvikPop). Deploy once and your agent works across all configured channels simultaneously.",
  },
  {
    question: "Can I connect DatvikAI to my existing systems?",
    answer:
      "Yes. DatvikAI is designed for this. You can connect to any REST or GraphQL API — your CRM, payment processor, inventory system, database, or any third-party service. We also provide optional Platform APIs (Products, Baskets, Orders, Vector Search) for common use cases.",
  },
  {
    question: "How does pricing work?",
    answer:
      "We have a free Starter plan for side projects (1 agent, 1,000 messages/month). Pro is $49/month (or $39/month billed annually) for 5 agents and 50,000 messages. Enterprise is custom pricing for unlimited scale. All plans include a 14-day free trial.",
  },
  {
    question: "Is DatvikAI production-ready?",
    answer:
      "Yes. DatvikAI is built for production workloads. We handle infrastructure, scaling, uptime, and security. Our platform is SOC2 compliant, supports environment variables for secrets, and provides sandboxed execution for safe testing.",
  },
  {
    question: "What LLM models does DatvikAI use?",
    answer:
      "DatvikAI supports multiple LLM providers including OpenAI GPT-4, Anthropic Claude, and others. You can configure which model powers your agent, or let DatvikAI automatically select the best model for your use case.",
  },
  {
    question: "Can I use DatvikAI with Cursor, Windsurf, or GitHub Copilot?",
    answer:
      "Absolutely. DatvikAI is built for AI-assisted development. We provide an MCP server so you can get DatvikAI documentation directly in your AI IDE. Use Cursor, Windsurf, GitHub Copilot, or any MCP-compatible tool to build, test, and deploy agents fast.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="badge mb-4">FAQ</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Frequently asked{" "}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="text-lg text-slate-400">
            Everything you need to know about DatvikAI.
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`glass-card rounded-xl overflow-hidden transition-all ${
                openIndex === i ? "border-indigo-500/30" : ""
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold text-white pr-4">{faq.question}</span>
                <div
                  className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === i
                      ? "bg-indigo-500/20 text-indigo-400"
                      : "bg-white/5 text-slate-400"
                  }`}
                >
                  {openIndex === i ? <Minus size={12} /> : <Plus size={12} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-slate-500 mt-10"
        >
          Still have questions?{" "}
          <a href="mailto:hello@datvikai.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
            Contact us
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
