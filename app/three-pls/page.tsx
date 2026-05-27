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
          <SectionHeader title="More volume. Same team. More chaos." />
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
          <SectionHeader title="Standardize every account, not just the easy ones" />
          <div className="stepsGrid">
            {[
              {
                step: '01',
                title: 'Customer rules',
                copy: "Clyde learns each customer's document requirements, communication preferences, and escalation paths.",
              },
              {
                step: '02',
                title: 'Inbox routing',
                copy: 'Emails are classified and routed to the right workflow automatically.',
              },
              {
                step: '03',
                title: 'Document capture',
                copy: 'Required paperwork is captured and matched per account rules without manual review.',
              },
              {
                step: '04',
                title: 'Team review',
                copy: 'Your ops team sees queued actions, not raw email volume.',
              },
            ].map((item) => (
              <div key={item.step} className="stepCard">
                <span className="stepNumber">{item.step}</span>
                <h3>{item.title}</h3>
                <p className="muted">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="Built for the way 3PLs actually work" />
          <Cards
            items={[
              {
                title: 'Multi-account inbox',
                copy: 'Manage multiple customer inboxes without separate logins or siloed threads.',
              },
              {
                title: 'Carrier-side coordination',
                copy: 'Track carrier updates, PODs, and dispatch communications per shipment automatically.',
              },
              {
                title: 'Ops team visibility',
                copy: 'Every team member sees the same classified inbox view with context already attached.',
              },
            ]}
          />
        </div>
      </section>

      <section className="section light">
        <div className="container stack-sm">
          <article className="card" style={{ maxWidth: '100%' }}>
            <p className="lead noMargin">
              “Clyde gave us one operating rhythm across every inbox. We stopped reacting to thread chaos and started
              working a consistent queue across customers and carriers.”
            </p>
            <p className="muted noMargin" style={{ marginTop: 12 }}>
              Tanya Rivera, VP of Operations, Elevate Logistics
            </p>
          </article>
        </div>
      </section>

      <FinalCTA
        title="Coordinate freight email without adding headcount."
        copy="See how Clyde standardizes your ops workflow across every account and carrier relationship."
      />
    </Layout>
  );
}
