import Link from "next/link";
import { Cards, CinematicHero, FinalCTA, Layout, SectionHeader } from "@/components/marketing";

export default function Home() {
  return (
    <Layout>
      <CinematicHero>
        <div className="container heroInner">
          <div className="stack">
            <h1 className="h1 noMargin">
              Less inbox.
              <br />
              More freight.
            </h1>
            <p className="lead noMargin max68">
              Clyde automates freight email, paperwork, and load actions so brokers and 3PLs can spend less time
              checking email and more time moving freight.
            </p>
            <p className="lead noMargin">
              Built by <span className="heroAccent">logistics teams,</span> for <span className="heroAccent">logistics teams.</span>
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/demo" className="btn btnPrimary">
                Book a demo
              </Link>
              <Link href="/product" className="btn btnSecondary heroPlayBtn">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M7.5 6.5l4 2.5-4 2.5V6.5z" fill="currentColor" />
                </svg>
                See how it works
              </Link>
            </div>
          </div>
          <div className="heroCards">
            {/* Card 1: POD received */}
            <div className="heroCard">
              <div className="heroCardHeader">
                <div className="heroCardIcon heroCardIconBlue">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="3" width="14" height="10" rx="2" stroke="#93c5fd" strokeWidth="1.5" />
                    <path d="M1 6l7 4 7-4" stroke="#93c5fd" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="heroCardMeta">
                  <strong>POD received</strong>
                  <span className="heroCardTime">6m ago</span>
                </div>
              </div>
              <p className="heroCardBody">POD attached for load HFB-3429</p>
              <p className="heroCardSender">danielle@harborfreight.demo</p>
              <div className="heroCardTags">
                <span className="heroTag">Inbox</span>
                <span className="heroTag heroTagHighlight">Needs Review</span>
              </div>
            </div>

            {/* Card 2: Load matched */}
            <div className="heroCard">
              <div className="heroCardHeader">
                <div className="heroCardIcon heroCardIconGreen">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="#4ade80" strokeWidth="1.5" />
                    <path d="M5 8l2 2 4-4" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <strong>Load matched — HFB-3429</strong>
                <span className="heroCardLink">View load →</span>
              </div>
              <p className="heroCardRoute">Seattle, WA → Denver, CO</p>
              <div className="heroCardTable">
                <div><span className="heroCardLabel">Carrier</span><span>Redline Express</span></div>
                <div><span className="heroCardLabel">ETA</span><span>May 31</span></div>
                <div><span className="heroCardMatch">92% match</span></div>
              </div>
            </div>

            {/* Card 3: Draft reply */}
            <div className="heroCard">
              <div className="heroCardHeader">
                <div className="heroCardIcon heroCardIconPurple">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2l1.5 3h3l-2.5 2 1 3L8 8.5 5 10l1-3L3.5 5h3z" stroke="#a78bfa" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                </div>
                <strong>Draft reply generated</strong>
                <span className="heroTag heroTagReady">Ready to review</span>
              </div>
              <p className="heroCardSender">To: Danielle Torres</p>
              <p className="heroCardBody">Rate con received. Signed and attached — HFB-3429_ratecon_signed.pdf. Driver assigned: Tony Wu, cell 206-555-0317.</p>
              <div className="heroCardTags">
                <span style={{ fontSize: ".78rem", color: "#94afd4" }}>Classified as:</span>
                <span className="heroTag">Inbox</span>
                <span className="heroTag heroTagHighlight">Needs Review</span>
              </div>
            </div>
          </div>
        </div>
      </CinematicHero>

      <div className="proofBar">
        <div className="container">
          <p className="proofLabel">Trusted by freight teams of all sizes</p>
          <div className="proofLogos">
            <span className="proofLogo">VOYAGER <em>LOGISTICS</em></span>
            <span className="proofLogo">BLUEWATER <em>LOGISTICS</em></span>
            <span className="proofLogo">SUMMIT <em>FREIGHT</em></span>
            <span className="proofLogo">NORTHLINE <em>LOGISTICS</em></span>
            <span className="proofLogo">ELEVATE <em>LOGISTICS</em></span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionHeader title="Freight work still starts in email." copy="Your team should not have to live there." />
          <Cards
            items={[
              {
                title: "Paperwork gets buried.",
                copy: "Rate confirmations, PODs, BOLs, invoices, and carrier replies all land in the same inbox.",
              },
              {
                title: "Updates get missed.",
                copy: "Load context lives across email threads, TMS notes, spreadsheets, tracking links, and tribal knowledge.",
              },
              {
                title: "Brokers lose selling time.",
                copy: "Every hour spent chasing paperwork is an hour not spent quoting, covering, or growing the book.",
              },
            ]}
          />
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <SectionHeader title="From freight email to completed load action." />
          <Cards
            items={[
              { title: "Read", copy: "Clyde reads incoming freight emails, attachments, and threads." },
              { title: "Match", copy: "Clyde matches messages to loads, documents, customers, carriers, and lanes." },
              { title: "Act", copy: "Clyde drafts replies, files paperwork, and prepares the next step." },
              {
                title: "Sync",
                copy: "Your team reviews and Clyde syncs approved actions into existing workflows. Clyde is the layer above your TMS, not a replacement.",
              },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="Built for the teams moving freight." />
          <Cards
            items={[
              {
                title: "Brokers",
                copy: "Built for brokers by brokers. Less inbox checking. More quoting, covering, and selling.",
                cta: "Explore brokers",
                href: "/brokers",
              },
              {
                title: "3PLs",
                copy: "Modern email coordination for 3PL teams.",
                cta: "Explore 3PLs",
                href: "/three-pls",
              },
              {
                title: "Carriers",
                copy: "Built for truckers by truckers.",
                cta: "Explore carriers",
                href: "/carriers",
              },
            ]}
          />
        </div>
      </section>

      <section className="section light">
        <div className="container stack-sm">
          <SectionHeader
            title="Works with the systems you already use."
            copy="Clyde connects your inbox, load data, documents, tracking updates, and existing workflows without replacing your TMS."
          />
          <div className="flowBand">Inbox → Load data → Documents → Tracking → TMS</div>
        </div>
      </section>


      <section className="section">
        <div className="container stack-sm">
          <SectionHeader title="Automate the freight work hiding in your inbox." />
          <div className="grid3">
            <Cards
              items={[
                {
                  title: "Inbox triage",
                  copy: "Classify every freight email by workflow, urgency, customer, carrier, and next action.",
                },
                {
                  title: "Paperwork automation",
                  copy: "Detect, extract, and file PODs, BOLs, rate confirmations, invoices, and lumper receipts.",
                },
                {
                  title: "Load matching",
                  copy: "Match messages and documents to loads using load numbers, PO numbers, lanes, and carrier references.",
                },
                {
                  title: "Draft replies",
                  copy: "Generate customer and carrier responses using verified freight context.",
                },
                {
                  title: "Missing document chase",
                  copy: "Automatically follow up on missing PODs, BOLs, and required paperwork.",
                },
                {
                  title: "Load intake",
                  copy: "Extract and prepare new load details from emails and attachments.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <SectionHeader
            title="AI that shows its work."
            copy="Clyde gives freight teams confidence through visibility, review, and control."
          />
          <Cards
            items={[
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
            ]}
          />
        </div>
      </section>

      <FinalCTA
        title="Give your team their inbox back."
        copy="See how Clyde turns freight email, paperwork, and load actions into a calmer operating system for brokers and 3PLs."
      />
    </Layout>
  );
}
