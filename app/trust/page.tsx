import Link from "next/link";
import { Layout, PageHero, SectionHeader, Cards, FinalCTA } from "@/components/marketing";

const trustItems = [
  {
    title: "Verified context",
    copy: "Every action is grounded in real load data, document context, and sender history — not assumptions.",
  },
  {
    title: "Human review",
    copy: "Nothing is sent, filed, or synced without your team approving it first.",
  },
  {
    title: "Confidence scoring",
    copy: "Clyde shows match confidence on every classification and document match so your team can catch edge cases.",
  },
  {
    title: "Audit trail",
    copy: "Every classification, match, and action is logged with context so you can trace any decision.",
  },
  {
    title: "Data privacy",
    copy: "Freight data and documents are processed in isolated environments and never used for model training.",
  },
  {
    title: "Operational transparency",
    copy: "Your team can see what Clyde read, what it matched, and why — at any time.",
  },
];

const dataHandlingItems = [
  {
    title: "Data isolation",
    copy: "Each customer's freight data, documents, and email content are processed in isolated environments. Data is never commingled across accounts and never used to train shared models.",
  },
  {
    title: "Encryption",
    copy: "All data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Documents and email content are stored with access controls tied to your team.",
  },
  {
    title: "Access controls",
    copy: "Role-based access lets you control which team members can view, approve, or configure Clyde's workflows. All access is logged.",
  },
];

const complianceItems = [
  {
    title: "SOC 2 Type II",
    copy: "Clyde is pursuing SOC 2 Type II certification. Security controls are audited and documented.",
  },
  {
    title: "GDPR & CCPA",
    copy: "Clyde supports data deletion requests and privacy compliance workflows for teams operating under GDPR and CCPA.",
  },
  {
    title: "Freight data standards",
    copy: "Built with freight data handling standards in mind including document retention, access logs, and audit trails.",
  },
];

function DotIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="4" fill="#3E7BFF" />
    </svg>
  );
}

export default function Page() {
  return (
    <Layout>
      <PageHero
        title="Built to earn your trust."
        copy="Clyde handles sensitive freight data, customer communications, and operational documents. We treat that responsibility seriously."
      />

      <section className="section">
        <div className="container stack">
          <SectionHeader title="Trust and control" />
          <Cards items={trustItems} />
        </div>
      </section>

      <section className="section light">
        <div className="container stack">
          <SectionHeader title="How Clyde handles your data" />
          <div className="detailRows">
            {dataHandlingItems.map((item) => (
              <article key={item.title} className="detailRow">
                <div className="detailIcon">
                  <DotIcon />
                </div>
                <div>
                  <h3 className="detailTitle">{item.title}</h3>
                  <p className="detailCopy">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <SectionHeader title="Compliance" />
          <Cards items={complianceItems} />
        </div>
      </section>

      <section className="section light">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="sectionTitle" style={{ marginBottom: 12 }}>
            Security questions?
          </h2>
          <p className="sectionCopy" style={{ margin: 0 }}>
            Email <a href="mailto:security@clydehq.com">security@clydehq.com</a> or <Link href="/demo">book a demo</Link>.
          </p>
        </div>
      </section>

      <FinalCTA
        title="Ready to see how it works?"
        copy="Book a walkthrough and we'll answer any security or compliance questions your team has before you get started."
      />
    </Layout>
  );
}
