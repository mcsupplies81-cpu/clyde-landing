import type { Metadata } from "next";
import { Layout, PageHero, SectionHeader, Cards, FinalCTA } from "@/components/marketing";


export const metadata: Metadata = {
  title: "Product — Clyde",
  description: "See how Clyde reads freight email, matches messages to loads, and prepares actions for your team — without replacing your TMS.",
};
const capabilities = [
  {
    title: "Inbox triage",
    copy: "Classify every freight email by workflow, urgency, customer, carrier, and next action.",
  },
  {
    title: "Document automation",
    copy: "Detect, extract, and organize PODs, BOLs, rate confirmations, invoices, and lumper receipts.",
  },
  {
    title: "Load matching",
    copy: "Match messages and documents using load numbers, PO numbers, lanes, dates, carriers, and references.",
  },
  {
    title: "Draft actions",
    copy: "Generate customer and carrier responses using verified freight context.",
  },
  {
    title: "Workflow sync",
    copy: "Prepare approved notes, documents, draft loads, and updates for your existing systems.",
  },
];

const workflowSteps = [
  {
    label: "Step 1",
    title: "Clyde reads",
    copy: "Every email, attachment, and thread. No manual triage.",
  },
  {
    label: "Step 2",
    title: "Clyde matches",
    copy: "Links messages to loads, carriers, customers, lanes, and documents using your real data.",
  },
  {
    label: "Step 3",
    title: "Action ready",
    copy: "Draft reply, filed document, or prepared load update is queued for your team's review.",
  },
];

const detailItems = [
  {
    title: "Inbox triage",
    copy: "Classify each email by type, urgency, customer, carrier, and next action. Keep the queue organized without relying on manual rules or folder sorting.",
  },
  {
    title: "Document automation",
    copy: "Detect, extract, match, and file PODs, BOLs, and rate confirmations as they arrive. Route each document to the right load context before your team reviews.",
  },
  {
    title: "Draft replies",
    copy: "Generate freight-accurate customer and carrier responses using real load context. Give reps a ready-to-send draft they can approve quickly.",
  },
  {
    title: "Missing document chase",
    copy: "Automatically follow up on outstanding paperwork based on what is still missing. Keep document collection moving without repetitive back-and-forth.",
  },
];

const oversightItems = [
  {
    title: "Verified context",
    copy: "Every action is grounded in real load data, document context, and sender history.",
  },
  {
    title: "Human review",
    copy: "Nothing is sent or filed without your team approving it first.",
  },
  {
    title: "Confidence scoring",
    copy: "Clyde shows match confidence so your team can catch and correct edge cases.",
  },
  {
    title: "Audit trail",
    copy: "Every classification, match, and action is logged and traceable.",
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
        title="The AI freight inbox that turns messages into load actions."
        copy="Clyde reads freight emails, extracts shipment context, matches messages to loads, drafts replies, files documents, and prepares approved actions for your systems."
      />

      <section className="section">
        <div className="container stack">
          <SectionHeader title="Product capabilities" />
          <Cards items={capabilities} />
        </div>
      </section>

      <section className="section light">
        <div className="container stack">
          <SectionHeader title="The Clyde workflow" />
          <div className="workflowRow">
            {workflowSteps.map((step) => (
              <article key={step.title} className="workflowStep">
                <p className="workflowNum">{step.label}</p>
                <h3 className="workflowTitle">{step.title}</h3>
                <p className="workflowCopy">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <SectionHeader title="What Clyde handles in detail" />
          <div className="detailRows">
            {detailItems.map((item) => (
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

      <section className="section light">
        <div className="container stack">
          <SectionHeader
            title="Built for human oversight"
            copy="Clyde gives freight teams confidence through visibility, review, and control."
          />
          <Cards items={oversightItems} />
        </div>
      </section>

      <FinalCTA
        title="See the full workflow in 30 minutes."
        copy="Book a walkthrough tailored to your inbox, your TMS, and your team."
      />
    </Layout>
  );
}
