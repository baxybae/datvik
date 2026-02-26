"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "DatvikAI cut our agent development time from weeks to hours. The TypeScript-first approach means our team was productive from day one.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow",
    avatar: "https://i.pravatar.cc/150?img=32",
    color: "indigo",
    stars: 5,
  },
  {
    quote: "We deployed a WhatsApp support agent in a single afternoon. Our customers love it and our support tickets dropped by 60%.",
    author: "Marcus Rodriguez",
    role: "Head of Engineering",
    company: "ShopNow",
    avatar: "https://i.pravatar.cc/150?img=12",
    color: "purple",
    stars: 5,
  },
  {
    quote: "The live reload dev mode is a game changer. I can iterate on my agent's behavior in real-time without any redeployment friction.",
    author: "Priya Patel",
    role: "Senior Developer",
    company: "DataSync",
    avatar: "https://i.pravatar.cc/150?img=25",
    color: "cyan",
    stars: 5,
  },
  {
    quote: "Finally an AI agent platform that doesn't require a PhD in MLOps. DatvikAI just works, and the docs are excellent.",
    author: "James Wilson",
    role: "Founder",
    company: "AgentLabs",
    avatar: "https://i.pravatar.cc/150?img=53",
    color: "green",
    stars: 5,
  },
  {
    quote: "The vector search integration is seamless. We built a knowledge base agent that answers complex questions with pinpoint accuracy.",
    author: "Aisha Okonkwo",
    role: "AI Engineer",
    company: "Nexus AI",
    avatar: "https://i.pravatar.cc/150?img=45",
    color: "orange",
    stars: 5,
  },
  {
    quote: "Migrated from a custom LangChain setup to DatvikAI in a weekend. The platform handles all the complexity we were managing manually.",
    author: "Tom Nakamura",
    role: "Backend Engineer",
    company: "CloudBase",
    avatar: "https://i.pravatar.cc/150?img=60",
    color: "indigo",
    stars: 5,
  },
];

const colorMap: Record<string, { ring: string; quote: string }> = {
  indigo: { ring: "ring-indigo-500/40", quote: "border-indigo-500/10" },
  purple: { ring: "ring-purple-500/40", quote: "border-purple-500/10" },
  cyan: { ring: "ring-cyan-500/40", quote: "border-cyan-500/10" },
  green: { ring: "ring-green-500/40", quote: "border-green-500/10" },
  orange: { ring: "ring-orange-500/40", quote: "border-orange-500/10" },
};

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="badge mb-4">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Loved by{" "}
            <span className="gradient-text">developers</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Join thousands of developers building production AI agents with DatvikAI.
          </p>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => {
            const colors = colorMap[t.color];
            return (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`glass-card rounded-2xl p-6 border ${colors.quote} hover:border-indigo-500/20 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, si) => (
                    <Star key={si} size={13} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`relative w-10 h-10 rounded-full overflow-hidden ring-2 ${colors.ring} shrink-0`}>
                    <Image
                      src={t.avatar}
                      alt={t.author}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.author}</div>
                    <div className="text-xs text-slate-500">
                      {t.role} at {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
