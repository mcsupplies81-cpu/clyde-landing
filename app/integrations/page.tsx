import { Layout, PageHero, SectionHeader, Cards, FinalCTA } from "@/components/marketing";
import Link from "next/link";

const integrations = [
  { title: "Gmail", copy: "Connect shared and individual Gmail inboxes." },
  {
    title: "Outlook",
    copy: "Supports Outlook and Microsoft 365 shared mailboxes.",
  },
  {
    title: "CSV Imports",
    copy: "Import active load data via scheduled CSV exports from your TMS.",
  },
  {
    title: "APIs",
    copy: "Connect through API for load data, document sync, and writeback.",
  },
  {
    title: "McLeod",
    copy: "Designed for workflows around McLeod TMS data and exports.",
  },
  {
    title: "Tai",
    copy: "Supports workflow design around Tai TMS exports and integrations.",
  },
  {
    title: "Rose Rocket",
    copy: "Works with Rose Rocket exports and load data workflows.",
  },
  { title: "Turvo", copy: "Connects through Turvo workflows and data exports." },
  {
    title: "Custom workflows",
    copy: "Build custom integration workflows for any TMS or system.",
  },
];

export default function Page() {
  return (
    <Layout>
      <PageHero
        title="Works with the systems you already use."
        copy="Clyde connects your inbox, load data, documents, tracking updates, and workflows without replacing your TMS."
      />

      <section className="section">
        <div className="container stack-sm">
          <SectionHeader title="Integration flow" />
          <div className="flowBand">Inbox → Load data → Documents → Tracking → TMS</div>
          <p className="muted" style={{ marginTop: 16 }}>
            Clyde is designed for workflows around CSV imports, scheduled exports, APIs,
            and custom writeback processes. We do not claim live certified integrations —
            we tailor connections to your operating environment.
          </p>
          <p className="muted">
            Want to review your stack first? <Link href="/demo">Book a walkthrough</Link>.
          </p>
        </div>
      </section>

      <section className="section light">
        <div className="container stack">
          <SectionHeader title="Supported systems and workflows" />
          <Cards items={integrations} />
        </div>
      </section>

      <FinalCTA
        title="Connect Clyde to your freight workflow."
        copy="We tailor workflow connections to your operating environment. Book a demo to walk through your stack."
      />
    </Layout>
  );
}
