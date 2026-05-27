import type { Metadata } from "next";
import { Layout, PageHero, SectionHeader, Cards, FinalCTA } from "@/components/marketing";


export const metadata: Metadata = {
  title: "Security & Trust — Clyde",
  description: "How Clyde handles freight data, documents, and email with isolation, encryption, and human oversight built in.",
};
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

export default function Page() {
  return (
    <Layout>
      <PageHero
        title="AI that shows its work."
        copy="Clyde gives freight teams confidence through visibility, review, and control."
      />

      <section className="section">
        <div className="container stack">
          <SectionHeader title="Trust and control" />
          <Cards items={trustItems} />
        </div>
      </section>

      <FinalCTA
        title="Operate with confidence."
        copy="Bring explainable, auditable AI workflows to freight operations."
      />
    </Layout>
  );
}
