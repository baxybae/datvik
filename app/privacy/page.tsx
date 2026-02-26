import PageShell from "@/components/page-shell";

const sections = [
  {
    title: "1. Information We Collect",
    content: "We collect information you provide directly, such as your name, email address, and payment information when you create an account. We also collect usage data including API calls, agent interactions, and performance metrics to improve our services.",
  },
  {
    title: "2. How We Use Your Information",
    content: "We use your information to provide and maintain the DatvikAI platform, process transactions, send service communications, improve our products, and comply with legal obligations. We do not sell your personal data to third parties.",
  },
  {
    title: "3. Data Storage and Security",
    content: "Your data is stored on SOC2-compliant infrastructure with encryption at rest and in transit. Agent data and conversation logs are isolated per account. We implement industry-standard security measures including access controls, audit logging, and regular security assessments.",
  },
  {
    title: "4. Data Retention",
    content: "We retain your account data for as long as your account is active. Conversation logs and agent interaction data are retained for 90 days by default, configurable per your plan. You can request deletion of your data at any time.",
  },
  {
    title: "5. Third-Party Services",
    content: "We use third-party services for payment processing (Stripe), email delivery, and infrastructure hosting. These providers are bound by their own privacy policies and our data processing agreements.",
  },
  {
    title: "6. Your Rights",
    content: "You have the right to access, correct, or delete your personal data. You can export your agent configurations and data at any time through the CLI or dashboard. For GDPR requests, contact privacy@datvikai.com.",
  },
  {
    title: "7. Changes to This Policy",
    content: "We may update this privacy policy from time to time. We will notify you of any material changes via email or through the platform. Continued use of DatvikAI after changes constitutes acceptance.",
  },
];

export default function Privacy() {
  return (
    <PageShell
      badge="Legal"
      title="Privacy Policy"
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
          Questions about privacy? Contact us at{" "}
          <a href="mailto:privacy@datvikai.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
            privacy@datvikai.com
          </a>
        </p>
      </div>
    </PageShell>
  );
}
