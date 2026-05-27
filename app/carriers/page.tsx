import type { Metadata } from "next";
import { FinalCTA, Layout, PageHero, SectionHeader } from '@/components/marketing';

const dispatchWorkflow = [
  'Load offer arrives from broker',
  'Clyde reads offer, checks lane, surfaces driver availability context',
  'Draft acceptance or counter ready for dispatch to send in one click',
];

const carrierUseCases = [
  {
    icon: '📄',
    title: 'Rate con management',
    copy: 'Auto-match incoming rate confirmations to loads, flag discrepancies, and file signed copies.',
  },
  {
    icon: '📍',
    title: 'ETA & status updates',
    copy: 'Generate broker status update replies using real driver location and load data.',
  },
  {
    icon: '🧾',
    title: 'Invoice paperwork',
    copy: 'Capture and organize invoices, lumper receipts, and accessorial documentation per load.',
  },
];

export const metadata = {
  title: "For Carriers — Clyde",
  description: "Clyde helps carrier dispatch teams respond to load offers faster, submit PODs on time, and keep broker communication clean.",
};
export default function Page() {
  return (
    <Layout>
      <PageHero
        title="Stop losing loads to slow replies."
        copy="Clyde helps dispatch teams respond faster, submit paperwork on time, and keep brokers informed — without the back-and-forth."
        cta="See carrier workflows"
      />

      <section className="section">
        <div className="container stack">
          <SectionHeader title="Every broker email needs a fast answer." />
          <div className="grid3">
            <article className="card">
              <h3>Load offers</h3>
              <p className="muted">
                Prioritize and respond to load offers faster without missing opportunities buried in
                thread volume.
              </p>
            </article>
            <article className="card">
              <h3>Dispatch updates</h3>
              <p className="muted">
                Keep broker communication clean, timely, and consistent across every driver and
                load.
              </p>
            </article>
            <article className="card">
              <h3>POD submission</h3>
              <p className="muted">
                Submit proof of delivery and required paperwork without manual back-and-forth.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container stack">
          <SectionHeader title="How Clyde helps dispatch" />
          <div className="grid3">
            {dispatchWorkflow.map((step, idx) => (
              <article key={step} className="card">
                <p className="eyebrow">Step {idx + 1}</p>
                <p className="muted">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <SectionHeader title="What carriers use Clyde for" />
          <div className="grid3">
            {carrierUseCases.map((item) => (
              <article key={item.title} className="card stack">
                <p aria-hidden="true" style={{ fontSize: '1.5rem', lineHeight: 1 }}>
                  {item.icon}
                </p>
                <h3>{item.title}</h3>
                <p className="muted">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="Keep dispatch moving."
        copy="See how Clyde helps carrier teams respond faster and submit cleaner paperwork with less effort."
      />
    </Layout>
  );
}
