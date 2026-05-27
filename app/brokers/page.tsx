import { FinalCTA, Layout, PageHero, SectionHeader } from '@/components/marketing';

export default function Page() {
  return (
    <Layout>
      <PageHero
        title="Built for brokers by brokers."
        copy="Less inbox checking. More quoting, covering, and selling."
        cta="Book a broker demo"
      />

      <section className="section">
        <div className="container">
          <SectionHeader title="Your best brokers are buried in email." />
          <div className="grid3">
            <article className="card">
              <h3>RFQs pile up</h3>
              <p className="muted">
                Rate requests come in fast and get buried under thread noise before brokers can respond.
              </p>
            </article>
            <article className="card">
              <h3>Paperwork slows billing</h3>
              <p className="muted">
                Missing PODs and unsigned rate cons hold up invoicing and delay cash flow.
              </p>
            </article>
            <article className="card">
              <h3>Updates interrupt selling time</h3>
              <p className="muted">
                Manual status replies and customer check-ins pull brokers away from quoting and coverage.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <SectionHeader title="What a Clyde-powered broker day looks like" />
          <div className="beforeAfterGrid">
            <article className="beforeCard">
              <p className="beforeAfterLabel beforeLabel">Before Clyde</p>
              <ul className="beforeAfterList">
                <li>Manual POD chase</li>
                <li>RFQs buried in threads</li>
                <li>Status emails typed by hand</li>
              </ul>
            </article>
            <article className="afterCard">
              <p className="beforeAfterLabel afterLabel">After Clyde</p>
              <ul className="beforeAfterList">
                <li>PODs auto-matched and filed</li>
                <li>RFQs triaged and prioritized instantly</li>
                <li>Draft status replies generated with load context</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="Clyde in action — a real broker scenario" />
          <div className="card scenarioTimeline">
            {[
              {
                title: 'Email arrives',
                copy: 'Rate con from carrier lands in the shared inbox.',
              },
              {
                title: 'Clyde reads and identifies',
                copy: 'Clyde reads the attachment and identifies the load details.',
              },
              {
                title: 'Load matched',
                copy: 'Matches to HFB-3429 in active loads.',
              },
              {
                title: 'Drafts generated',
                copy: 'Generates signed rate con + draft confirmation to carrier.',
              },
              {
                title: 'Broker approval',
                copy: 'Broker approves in one click.',
              },
            ].map((item, index) => (
              <div key={item.title} className="scenarioStep">
                <div className="scenarioNum">{index + 1}</div>
                <p className="scenarioText">
                  <strong>{item.title}</strong>
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <div className="wideTestimonial">
            <p className="lead noMargin">
              “Clyde gave our brokers hours back every week. RFQs are prioritized immediately, paperwork no longer
              stalls billing, and our team can stay focused on covering freight.”
            </p>
            <p className="noMargin muted">
              <strong>Marcus Chen</strong> · VP of Operations, Northline Logistics
            </p>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Give your brokers their selling time back."
        copy="Book a walkthrough to see how Clyde handles the inbox work so your team can focus on covering loads."
      />
    </Layout>
  );
}
