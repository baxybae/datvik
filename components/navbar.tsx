"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Logo } from "./logo";

const navLinks = [
  {
    label: "Product",
    href: "/#features",
    children: [
      { label: "Agent Builder", href: "/#features", desc: "Build AI agents with TypeScript" },
      { label: "Chat Widget", href: "/#demo", desc: "Embed AI chat on any website" },
      { label: "Platform APIs", href: "/#platform", desc: "Products, Baskets, Orders & more" },
    ],
  },
  { label: "Docs", href: "/docs" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Logo size={36} />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          activeDropdown === link.label ? "rotate-180" : ""
                        )}
                      />
                    )}
                  </a>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-64 bg-[#0f0f1a] border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="flex flex-col px-4 py-3 hover:bg-indigo-500/10 transition-colors group"
                          >
                            <span className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">
                              {child.label}
                            </span>
                            <span className="text-xs text-slate-500 mt-0.5">{child.desc}</span>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/signin"
                className="text-sm text-slate-300 hover:text-white transition-colors px-4 py-2"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
              >
                <Zap size={14} />
                Start Building
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#0a0a0f] pt-16 px-6 overflow-y-auto md:hidden"
          >
            <nav className="flex flex-col gap-2 py-6">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-3 text-lg font-medium text-slate-200 hover:text-white border-b border-white/5"
                  >
                    {link.label}
                  </a>
                  {link.children && (
                    <div className="pl-4 mt-1 mb-2 flex flex-col gap-1">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="py-2 text-sm text-slate-400 hover:text-white transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 mt-6">
                <Link
                  href="/signin"
                  className="py-3 text-center text-sm font-medium text-slate-300 border border-white/10 rounded-xl hover:bg-white/5 transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  className="py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all"
                >
                  Start Building Free
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
