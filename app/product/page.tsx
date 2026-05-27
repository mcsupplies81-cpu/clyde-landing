import { Layout, PageHero, SectionHeader, Cards, FinalCTA } from "@/components/marketing";

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
          <SectionHeader
            title="Not another TMS. The layer above it."
            copy="Your TMS stays the system of record. Clyde handles the freight work that starts in email and turns it into structured actions your team can review and trust."
          />

          <div className="uiMock">
            <div className="uiCol">Inbox\n\nRead + classify</div>
            <div className="uiCol">Context engine\n\nMatch to load, documents, and urgency</div>
            <div className="uiCol">Action queue\n\nDraft reply, file docs, sync approved updates</div>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Ready to reduce inbox time?"
        copy="See how Clyde fits into your current freight stack."
      />
    </Layout>
  );
}
