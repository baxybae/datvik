"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Building2, Rocket } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: { monthly: 0, annual: 0 },
    description: "Perfect for side projects and exploring DatvikAI.",
    cta: "Start Free",
    ctaStyle: "border",
    color: "slate",
    features: [
      "1 agent",
      "1,000 messages/month",
      "Web widget",
      "CLI access",
      "Community support",
      "30+ example tools",
    ],
  },
  {
    name: "Pro",
    icon: Rocket,
    price: { monthly: 49, annual: 39 },
    description: "For developers building production AI agents.",
    cta: "Start Pro Trial",
    ctaStyle: "gradient",
    color: "indigo",
    popular: true,
    features: [
      "5 agents",
      "50,000 messages/month",
      "All channels (WhatsApp, Slack, etc.)",
      "Webhooks & scheduled jobs",
      "Vector search & storage",
      "Priority support",
      "Custom domains",
      "Analytics dashboard",
    ],
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: { monthly: null, annual: null },
    description: "For teams building mission-critical AI infrastructure.",
    cta: "Contact Sales",
    ctaStyle: "border",
    color: "purple",
    features: [
      "Unlimited agents",
      "Unlimited messages",
      "All Pro features",
      "SSO & SAML",
      "SLA guarantee",
      "Dedicated support",
      "Custom integrations",
      "On-premise option",
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
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
          <span className="badge mb-4">Pricing</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Simple,{" "}
            <span className="gradient-text">transparent pricing</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
            Start free. Scale as you grow. No hidden fees.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                !annual ? "bg-indigo-600 text-white shadow-lg" : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                annual ? "bg-indigo-600 text-white shadow-lg" : "text-slate-400 hover:text-white"
              }`}
            >
              Annual
              <span className="text-xs bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full">-20%</span>
            </button>
          </div>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 flex flex-col ${
                plan.popular
                  ? "bg-gradient-to-b from-indigo-600/20 to-purple-600/10 border border-indigo-500/40 shadow-2xl shadow-indigo-500/20"
                  : "glass-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    plan.popular
                      ? "bg-indigo-500/20 border border-indigo-500/30"
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  <plan.icon
                    size={18}
                    className={plan.popular ? "text-indigo-400" : "text-slate-400"}
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{plan.name}</h3>
                </div>
              </div>

              {/* Price */}
              <div className="mb-4">
                {plan.price.monthly === null ? (
                  <div className="text-3xl font-extrabold text-white">Custom</div>
                ) : plan.price.monthly === 0 ? (
                  <div className="text-3xl font-extrabold text-white">Free</div>
                ) : (
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-extrabold text-white">
                      ${annual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-slate-400 text-sm mb-1">/month</span>
                  </div>
                )}
                <p className="text-xs text-slate-500 mt-1">{plan.description}</p>
              </div>

              {/* CTA */}
              <Link
                href={plan.name === "Enterprise" ? "mailto:sales@datvikai.com" : "/signup"}
                className={`block w-full py-2.5 rounded-xl text-sm font-semibold text-center transition-all mb-6 ${
                  plan.ctaStyle === "gradient"
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/30"
                    : "border border-white/10 text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {plan.cta}
              </Link>

              {/* Features */}
              <ul className="space-y-2.5 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-400">
                    <Check
                      size={15}
                      className={`shrink-0 mt-0.5 ${plan.popular ? "text-indigo-400" : "text-green-400"}`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* FAQ note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-slate-500 mt-10"
        >
          All plans include a 14-day free trial. No credit card required to start.
        </motion.p>
      </div>
    </section>
  );
}
