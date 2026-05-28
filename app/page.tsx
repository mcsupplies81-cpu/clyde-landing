import Link from "next/link";
import { Cards, CinematicHero, FinalCTA, Layout, SectionHeader } from "@/components/marketing";
import { ScrollFade } from "@/app/components/ScrollFade";

export default function Home() {
  return (
    <Layout>
      <CinematicHero>
        <div className="container heroInner">
          <div className="stack heroTextCol">
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
                Book a demo &nbsp;→
              </Link>
              <Link href="/product" className="heroPlayBtn">
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

      <ScrollFade>
        <div className="proofBar">
        <div className="container">
          <p className="proofLabel">Trusted by freight teams of all sizes</p>
          <div className="proofLogos">
            <span className="proofLogo">
              <svg className="proofLogoIcon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 11.5h12L11 7.5H7.5L6 5.5H4.5L5.8 7.5H2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
              <span>VOYAGER <em>LOGISTICS</em></span>
            </span>
            <span className="proofLogo">
              <svg className="proofLogoIcon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M1.5 9.5c1.4-1.6 2.6-1.6 4 0s2.6 1.6 4 0 2.6-1.6 4 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M1.5 12c1.4-1.6 2.6-1.6 4 0s2.6 1.6 4 0 2.6-1.6 4 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span>BLUEWATER <em>LOGISTICS</em></span>
            </span>
            <span className="proofLogo">
              <svg className="proofLogoIcon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 12.5h12L9 4.5l-2.2 3.2-1-1.4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
              <span>SUMMIT <em>FREIGHT</em></span>
            </span>
            <span className="proofLogo">
              <svg className="proofLogoIcon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 8h11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M10 5.5L13.5 8 10 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>NORTHLINE <em>LOGISTICS</em></span>
            </span>
            <span className="proofLogo">
              <svg className="proofLogoIcon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 10.5L8 5.5l5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>ELEVATE <em>LOGISTICS</em></span>
            </span>
          </div>
        </div>
      </div>
      </ScrollFade>

      <ScrollFade>
        <div className="statsBar">
        <div className="container">
          <div className="statsGrid">
            <div className="statItem">
              <p className="statNumber">2 hrs</p>
              <p className="statLabel">saved per broker per day</p>
            </div>
            <div className="statItem">
              <p className="statNumber">94%</p>
              <p className="statLabel">email triage accuracy</p>
            </div>
            <div className="statItem">
              <p className="statNumber">&lt; 5 min</p>
              <p className="statLabel">inbox setup time</p>
            </div>
            <div className="statItem">
              <p className="statNumber">Any TMS</p>
              <p className="statLabel">no rip-and-replace required</p>
            </div>
          </div>
        </div>
      </div>
      </ScrollFade>

      <ScrollFade>
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
      </ScrollFade>

      <ScrollFade>
      <section className="section light">
        <div className="container">
          <SectionHeader title="From freight email to completed load action." />
          <div className="stepsGrid">
            {[
              { step: "01", title: "Read", copy: "Clyde reads incoming freight emails, attachments, and threads." },
              { step: "02", title: "Match", copy: "Clyde matches messages to loads, documents, customers, carriers, and lanes." },
              { step: "03", title: "Act", copy: "Clyde drafts replies, files paperwork, and prepares the next step." },
              { step: "04", title: "Sync", copy: "Your team reviews and Clyde syncs approved actions into existing workflows." },
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
      </ScrollFade>

      <ScrollFade>
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
      </ScrollFade>

      <ScrollFade>
      <section className="section light">
        <div className="container stack-sm">
          <SectionHeader
            title="Works with the systems you already use."
            copy="Clyde connects your inbox, load data, documents, tracking updates, and existing workflows without replacing your TMS."
          />
          <div className="flowBand">
            {["Inbox", "Load data", "Documents", "Tracking", "TMS"].map((item, i, arr) => (
              <div key={item} className="flowStep">
                {item}
                {i < arr.length - 1 && <span className="flowArrow">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollFade>


      <ScrollFade>
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
      </ScrollFade>

      <ScrollFade>
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
      </ScrollFade>



      <ScrollFade>
      <section className="section">
        <div className="container">
          <SectionHeader title="Freight teams that gave their inbox back." />
          <div className="testimonialGrid">
            <article className="testimonialCard">
              <span className="testimonialMark" aria-hidden="true">“</span>
              <p className="testimonialQuote">We used to have one person whose whole job was chasing PODs and forwarding emails. Clyde handles 80% of that in the background now.</p>
              <div className="testimonialAuthor">
                <div className="testimonialAvatar" aria-hidden="true">MC</div>
                <div>
                  <p className="testimonialName">Marcus Chen</p>
                  <p className="testimonialRole">Operations Manager, Summit Freight</p>
                </div>
              </div>
            </article>

            <article className="testimonialCard">
              <span className="testimonialMark" aria-hidden="true">“</span>
              <p className="testimonialQuote">Our team responds to load offers 3x faster. Clyde surfaces the right context every time without us having to dig.</p>
              <div className="testimonialAuthor">
                <div className="testimonialAvatar" aria-hidden="true">TR</div>
                <div>
                  <p className="testimonialName">Tanya Rivera</p>
                  <p className="testimonialRole">Senior Broker, Northline Logistics</p>
                </div>
              </div>
            </article>

            <article className="testimonialCard">
              <span className="testimonialMark" aria-hidden="true">“</span>
              <p className="testimonialQuote">Rate cons used to sit in our inbox for hours. Now they&apos;re matched, signed, and filed before the broker even checks their email.</p>
              <div className="testimonialAuthor">
                <div className="testimonialAvatar" aria-hidden="true">DW</div>
                <div>
                  <p className="testimonialName">Derek Walsh</p>
                  <p className="testimonialRole">VP Operations, Voyager Logistics</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      </ScrollFade>

      <FinalCTA
        title="Give your team their inbox back."
        copy="See how Clyde turns freight email, paperwork, and load actions into a calmer operating system for brokers and 3PLs."
      />
    </Layout>
  );
}
