import PageShell from "@/components/page-shell";

const cookieTypes = [
  {
    name: "Essential Cookies",
    description: "Required for the platform to function. These handle authentication, session management, and security. Cannot be disabled.",
    examples: "Session token, CSRF protection, authentication state",
    required: true,
  },
  {
    name: "Analytics Cookies",
    description: "Help us understand how developers use DatvikAI so we can improve the experience. Aggregated and anonymized.",
    examples: "Page views, feature usage, performance metrics",
    required: false,
  },
  {
    name: "Preference Cookies",
    description: "Remember your settings like theme preference, dashboard layout, and notification preferences.",
    examples: "Dark mode setting, sidebar state, timezone",
    required: false,
  },
];

export default function Cookies() {
  return (
    <PageShell
      badge="Legal"
      title="Cookie Policy"
      subtitle="Last updated: February 1, 2026"
      narrow
    >
      <div className="glass-card rounded-2xl p-6 mb-8">
        <p className="text-sm text-slate-400 leading-relaxed">
          DatvikAI uses cookies and similar technologies to provide, protect, and improve the platform.
          This policy explains what cookies we use, why we use them, and how you can control them.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {cookieTypes.map((c) => (
          <div key={c.name} className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-base font-semibold text-white">{c.name}</h2>
              {c.required && (
                <span className="text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded-full">Required</span>
              )}
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-2">{c.description}</p>
            <p className="text-xs text-slate-500">Examples: {c.examples}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-base font-semibold text-white mb-2">Managing Cookies</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            You can control non-essential cookies through your browser settings. Note that disabling certain cookies
            may affect platform functionality. Most browsers allow you to block or delete cookies through their privacy settings.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white mb-2">Contact</h2>
          <p className="text-sm text-slate-400">
            Questions? Reach us at{" "}
            <a href="mailto:privacy@datvikai.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              privacy@datvikai.com
            </a>
          </p>
        </div>
      </div>
    </PageShell>
  );
}
