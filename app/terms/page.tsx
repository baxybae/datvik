import PageShell from "@/components/page-shell";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing or using DatvikAI, you agree to be bound by these Terms of Service. If you are using DatvikAI on behalf of an organization, you represent that you have authority to bind that organization to these terms.",
  },
  {
    title: "2. Description of Service",
    content: "DatvikAI provides a platform for building, testing, and deploying AI-powered agents. This includes the CLI tools, agent runtime, multi-channel deployment, Platform APIs, and the DatvikPop chat widget.",
  },
  {
    title: "3. Account Responsibilities",
    content: "You are responsible for maintaining the security of your account credentials, API keys, and environment variables. You must not share your credentials or allow unauthorized access to your account. You are responsible for all activity under your account.",
  },
  {
    title: "4. Acceptable Use",
    content: "You agree not to use DatvikAI to build agents that engage in illegal activities, distribute malware, send spam, impersonate others, or violate the rights of third parties. We reserve the right to suspend accounts that violate these terms.",
  },
  {
    title: "5. Intellectual Property",
    content: "You retain ownership of all code, tools, and agent configurations you create using DatvikAI. DatvikAI retains ownership of the platform, CLI, APIs, and documentation. The DatvikAI name and logo are trademarks of DatvikAI.",
  },
  {
    title: "6. Payment and Billing",
    content: "Paid plans are billed monthly or annually as selected. Prices are in USD. We may change pricing with 30 days notice. Refunds are available within 14 days of initial purchase. Usage overages are billed at the rates specified in your plan.",
  },
  {
    title: "7. Service Level Agreement",
    content: "We target 99.9% uptime for all production services. Scheduled maintenance windows are communicated in advance. Enterprise plans include custom SLA terms with financial credits for downtime.",
  },
  {
    title: "8. Limitation of Liability",
    content: "DatvikAI is provided as-is. We are not liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our total liability is limited to the amount you paid in the 12 months preceding the claim.",
  },
  {
    title: "9. Termination",
    content: "Either party may terminate at any time. Upon termination, your agents will be deactivated and data retained for 30 days before deletion. You can export your data before termination through the CLI.",
  },
  {
    title: "10. Changes to Terms",
    content: "We may modify these terms with 30 days notice via email. Continued use after changes take effect constitutes acceptance. Material changes will be highlighted in our changelog.",
  },
];

export default function Terms() {
  return (
    <PageShell
      badge="Legal"
      title="Terms of Service"
      subtitle="Last updated: February 1, 2026"
      narrow
    >
      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-base font-semibold text-white mb-2">{s.title}</h2>
            <p className="text-sm text-slate-400 leading-relaxed">{s.content}</p>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-xl p-5 mt-10">
        <p className="text-sm text-slate-400">
          Questions about these terms? Contact us at{" "}
          <a href="mailto:legal@datvikai.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
            legal@datvikai.com
          </a>
        </p>
      </div>
    </PageShell>
  );
}
