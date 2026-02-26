import PageShell from "@/components/page-shell";
import Link from "next/link";

const posts = [
  {
    title: "Introducing DatvikAI v3.0 — Webhooks, Jobs & Processors",
    excerpt: "The biggest release yet. Build complete automation pipelines with webhooks, scheduled jobs, and message processors alongside your AI agents.",
    date: "Feb 20, 2026",
    tag: "Product",
    tagColor: "indigo",
    slug: "/blog",
    readTime: "5 min read",
  },
  {
    title: "How to Build a Customer Support Agent in 10 Minutes",
    excerpt: "A step-by-step tutorial on creating a production-ready support agent that handles order tracking, returns, and FAQs across WhatsApp and web.",
    date: "Feb 12, 2026",
    tag: "Tutorial",
    tagColor: "cyan",
    slug: "/blog",
    readTime: "8 min read",
  },
  {
    title: "Why We Chose TypeScript for AI Agent Development",
    excerpt: "Type safety, IDE autocomplete, and Zod schemas make TypeScript the ideal language for building reliable AI tools. Here is our reasoning.",
    date: "Feb 5, 2026",
    tag: "Engineering",
    tagColor: "purple",
    slug: "/blog",
    readTime: "6 min read",
  },
  {
    title: "Vector Search Explained: Semantic Search for Your AI Agent",
    excerpt: "Learn how DatvikAI's built-in vector search works, when to use it, and how to build a knowledge base agent that answers complex questions.",
    date: "Jan 28, 2026",
    tag: "Tutorial",
    tagColor: "cyan",
    slug: "/blog",
    readTime: "7 min read",
  },
  {
    title: "From LangChain to DatvikAI: A Migration Guide",
    excerpt: "Thinking about switching? This guide covers the key differences, migration steps, and what you gain by moving to DatvikAI's managed platform.",
    date: "Jan 20, 2026",
    tag: "Guide",
    tagColor: "green",
    slug: "/blog",
    readTime: "10 min read",
  },
  {
    title: "Deploying AI Agents to WhatsApp Business: The Complete Guide",
    excerpt: "Everything you need to know about connecting your DatvikAI agent to WhatsApp Business API, including setup, testing, and going live.",
    date: "Jan 14, 2026",
    tag: "Tutorial",
    tagColor: "cyan",
    slug: "/blog",
    readTime: "9 min read",
  },
];

const tagColors: Record<string, string> = {
  indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  green: "bg-green-500/10 text-green-400 border-green-500/20",
};

export default function Blog() {
  return (
    <PageShell
      badge="Blog"
      title="Latest from DatvikAI"
      subtitle="Product updates, tutorials, engineering deep-dives, and best practices for building AI agents."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link
            key={post.title}
            href={post.slug}
            className="glass-card rounded-2xl p-6 hover:border-indigo-500/30 transition-all group block hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${tagColors[post.tagColor]}`}>
                {post.tag}
              </span>
              <span className="text-xs text-slate-600">{post.date}</span>
            </div>
            <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">{post.excerpt}</p>
            <span className="text-xs text-slate-500">{post.readTime}</span>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
