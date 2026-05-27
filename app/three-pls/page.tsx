import { Cards, FinalCTA, Layout, PageHero, SectionHeader } from '@/components/marketing';

export default function Page() {
  return (
    <Layout>
      <PageHero
        title="Modern email coordination for 3PL teams."
        copy="Manage customers, carriers, documents, and load actions across shared inboxes without the chaos."
        cta="Book a 3PL demo"
      />

      <section className="section">
        <div className="container">
          <SectionHeader title="More customers. More carriers. More email. Same team." />
          <Cards
            items={[
              {
                title: 'Customer requests',
                copy: 'Keep service levels high without surfing through long email threads for context.',
              },
              {
                title: 'Carrier coordination',
                copy: 'Track handoffs, dispatch updates, and paperwork centrally across carriers.',
              },
              {
                title: 'Document capture',
                copy: 'Capture and file required paperwork consistently across every account.',
              },
            ]}
          />
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <SectionHeader
            title="Turn tribal knowledge into repeatable workflows."
            copy="Clyde helps standardize customer rules, response preferences, required documents, escalation paths, and approval workflows across accounts."
          />
          <div className="flowBand">Shared inbox → Team review → Next action</div>
        </div>
      </section>

      <FinalCTA
        title="Coordinate freight email without adding headcount."
        copy="Give your 3PL team a calmer operating rhythm and a consistent process across every account."
      />
    </Layout>
  );
}
