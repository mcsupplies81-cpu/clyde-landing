import Link from "next/link";
import { FinalCTA, Layout, SectionHeader } from "@/components/marketing";

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="container heroShell">
          <div className="stack">
            <p className="eyebrow">Built by logistics teams, for logistics teams.</p>
            <h1 className="h1">Less inbox.<br />More freight.</h1>
            <p className="lead narrow">
              Clyde automates freight email, paperwork, and load actions so brokers and 3PLs can move faster with less
              inbox drag.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/demo" className="btn btnPrimary">Book a demo</Link>
              <Link href="/product" className="btn btnGhost">See how it works</Link>
            </div>
          </div>
          <div className="floatStack">
            <div className="glassCard"><strong>POD received</strong><p>POD attached for load HFB-3429</p><span>Inbox · Needs Review</span></div>
            <div className="glassCard"><strong>Load matched — HFB-3429</strong><p>Seattle, WA → Denver, CO</p><span>92% match</span></div>
            <div className="glassCard"><strong>Draft reply generated</strong><p>Ready to review</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="Freight work still starts in email." copy="Your team should not have to live there." />
          <div className="split">
            <article className="card"><h3>Paperwork gets buried.</h3><p className="muted">Rate confirmations, PODs, BOLs, invoices, and carrier replies all land in the same inbox.</p></article>
            <article className="card"><h3>Updates get missed.</h3><p className="muted">Load context lives across email threads, TMS notes, spreadsheets, tracking links, and tribal knowledge.</p></article>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container stack">
          <SectionHeader title="The layer above your TMS." copy="Your TMS remains the system of record. Clyde handles the freight work that starts in email and prepares structured actions your team reviews and approves." />
          <div className="panelRow">
            <div className="panel">Inbox<br /><br />Read + classify</div>
            <div className="panel">Context engine<br /><br />Match to load, lane, docs, and urgency</div>
            <div className="panel">Action queue<br /><br />Draft reply, file docs, sync approved updates</div>
          </div>
          <div className="systemRail">Inbox → Load data → Documents → Tracking → TMS</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="Built for the teams moving freight." />
          <div className="split">
            <article className="card"><h3>Brokers</h3><p className="muted">Less inbox checking. More quoting, covering, and selling.</p><Link href="/brokers">Explore brokers</Link></article>
            <article className="card"><h3>3PLs & Carriers</h3><p className="muted">Coordinate customers, carriers, dispatch, and documents without inbox chaos.</p><Link href="/three-pls">Explore workflows</Link></article>
          </div>
        </div>
      </section>

      <FinalCTA title="Give your team their inbox back." copy="See how Clyde turns freight email into a calmer, higher-throughput operating layer." />
    </Layout>
  );
}
