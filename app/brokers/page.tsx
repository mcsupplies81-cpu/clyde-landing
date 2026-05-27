import Link from 'next/link';

import { Cards, FinalCTA, Layout, PageHero, SectionHeader } from '@/components/marketing';

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
          <SectionHeader title="Your best brokers should be selling, not babysitting email." />
          <Cards
            items={[
              {
                title: 'RFQs pile up',
                copy: 'Rate requests come in fast and get buried under thread noise before brokers can respond.',
              },
              {
                title: 'Paperwork slows billing',
                copy: 'Missing PODs and unsigned rate cons hold up invoicing and delay cash flow.',
              },
              {
                title: 'Updates interrupt selling time',
                copy: 'Manual status replies and customer check-ins pull brokers away from quoting and coverage.',
              },
            ]}
          />
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <SectionHeader title="What Clyde handles for brokers" />
          <Cards
            items={[
              {
                title: 'RFQ triage',
                copy: 'Prioritize and route incoming rate requests so brokers respond faster.',
              },
              {
                title: 'Status updates',
                copy: 'Draft and file customer status replies from load and tracking context.',
              },
              {
                title: 'POD and paperwork',
                copy: 'Detect, extract, and file PODs, BOLs, and rate confirmations automatically.',
              },
              {
                title: 'Missing document chase',
                copy: "Follow up on outstanding paperwork so billing doesn't stall.",
              },
              {
                title: 'Load award intake',
                copy: 'Extract new load details from award emails and prepare them for the TMS.',
              },
              {
                title: 'Customer response tracking',
                copy: 'Track open customer threads and flag what needs a reply.',
              },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            title="More time selling. Less time refreshing the inbox."
            copy="Clyde handles repetitive freight inbox work so brokers can focus on relationships, coverage, quoting, and growing their book."
          />
          <div className="card">
            <p>Rate requests handled · Replies ready for review · Missing PODs chased · Load awards processed</p>
            <p className="muted">
              <Link href="/">Book a broker demo</Link>
            </p>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Give brokers their selling time back."
        copy="See how Clyde removes inbox drag from broker operations."
      />
    </Layout>
  );
}
