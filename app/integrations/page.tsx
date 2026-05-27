import { FinalCTA, Layout, PageHero } from "@/components/marketing";
import Link from "next/link";

type IntegrationItem = {
  name: string;
  copy: string;
};

type IntegrationCategory = {
  heading: string;
  items: IntegrationItem[];
};

const integrationCategories: IntegrationCategory[] = [
  {
    heading: "Email & inbox",
    items: [
      { name: "Gmail", copy: "Connect shared and individual Gmail inboxes." },
      {
        name: "Outlook",
        copy: "Supports Outlook and Microsoft 365 shared mailboxes.",
      },
      { name: "Shared aliases", copy: "Works with team@ and ops@ alias inboxes." },
    ],
  },
  {
    heading: "TMS & load data",
    items: [
      {
        name: "McLeod",
        copy: "Designed for workflows using McLeod load data and exports.",
      },
      { name: "Tai", copy: "Supports Tai TMS exports and load data workflows." },
      {
        name: "Rose Rocket",
        copy: "Works with Rose Rocket exports and integrations.",
      },
      { name: "Turvo", copy: "Connects through Turvo workflows and data exports." },
      {
        name: "CSV import",
        copy: "Import active load data via scheduled CSV exports from any TMS.",
      },
      {
        name: "Custom API",
        copy: "Connect via API for load data, document sync, and writeback.",
      },
    ],
  },
  {
    heading: "Documents & data",
    items: [
      {
        name: "PODs & BOLs",
        copy: "Auto-detect and file proof of delivery and bill of lading docs.",
      },
      {
        name: "Rate confirmations",
        copy: "Match, flag, and file incoming rate cons automatically.",
      },
      {
        name: "Invoices",
        copy: "Capture and organize invoice paperwork per load.",
      },
    ],
  },
];

export default function Page() {
  return (
    <Layout>
      <PageHero
        title="Clyde connects to the tools you already use."
        copy="No rip-and-replace. Clyde sits above your TMS and inbox as the coordination layer — not a replacement for anything."
      />

      <section className="section">
        <div className="container">
          {integrationCategories.map((category) => (
            <div key={category.heading} className="integrationCategory">
              <h2 className="integrationCatHead">{category.heading}</h2>
              <div className="integrationItems">
                {category.items.map((item) => (
                  <article key={item.name} className="integrationItem">
                    <h3 className="integrationItemName">{item.name}</h3>
                    <p className="integrationItemCopy">{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <div className="integrationCta">
            <h3>Don&apos;t see your TMS?</h3>
            <p>We build integrations on request. Most new TMS integrations take 2-4 weeks.</p>
            <Link className="btn btnPrimary" href="/demo">
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Connect Clyde to your freight workflow."
        copy="We tailor workflow connections to your operating environment. Book a demo to walk through your stack."
      />
    </Layout>
  );
}
