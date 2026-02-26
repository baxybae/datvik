"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "./navbar";
import Footer from "./footer";

interface PageShellProps {
  badge?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  narrow?: boolean;
}

export default function PageShell({ badge, title, subtitle, children, narrow }: PageShellProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] relative">
      <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <Navbar />
      <main className="pt-28 pb-24 relative z-10">
        <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${narrow ? "max-w-3xl" : "max-w-5xl"}`}>
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              Back to home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            {badge && <span className="badge mb-4">{badge}</span>}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">{subtitle}</p>
            )}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {children}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
