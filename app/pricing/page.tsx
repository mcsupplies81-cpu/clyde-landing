import { Layout, PageHero, FinalCTA } from "@/components/marketing";

const plans = [
  {
    name: "Starter",
    price: "Starting at $750",
    period: "/mo",
    description: "For small teams getting started with freight email automation.",
    features: ["1 shared inbox", "Email classification", "Document capture", "Draft replies", "Active load CSV import", "Basic workflows"],
    highlight: false,
    cta: "Get started",
  },
  {
    name: "Growth",
    price: "Starting at $2,000",
    period: "/mo",
    description: "For growing teams managing higher email and paperwork volume.",
    features: ["Multiple inboxes", "Document matching", "Missing POD chase", "RFQ triage", "Load award extraction", "Workflow approvals", "Basic sync/export"],
    highlight: true,
    cta: "Book a demo",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For high-volume teams needing custom workflows and integrations.",
    features: ["TMS/API integrations", "Custom SOPs", "Advanced approvals", "Audit logs", "Dedicated onboarding", "Security review"],
    highlight: false,
    cta: "Contact us",
  },
];

export default function Page() {
  return (
    <Layout>
      <PageHero
        title="Pricing built around freight volume."
        copy="Simple plans for brokers, 3PLs, and freight teams. No per-seat games."
      />
      <section className="section">
        <div className="container">
          <div className="pricingGrid">
            {plans.map((plan) => (
              <div key={plan.name} className={plan.highlight ? "pricingCard pricingCardHighlight" : "pricingCard"}>
                {plan.highlight && <div className="pricingBadge">Most popular</div>}
                <div className="pricingTop">
                  <h3 className="pricingName">{plan.name}</h3>
                  <div className="pricingPrice">
                    <span className="pricingAmount">{plan.price}</span>
                    {plan.period && <span className="pricingPeriod">{plan.period}</span>}
                  </div>
                  <p className="pricingDesc">{plan.description}</p>
                </div>
                <ul className="pricingFeatures">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{flexShrink:0}}>
                        <circle cx="7" cy="7" r="6" fill="#3e7bff" fillOpacity="0.15"/>
                        <path d="M4.5 7l2 2 3-3" stroke="#3e7bff" strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/demo" className={plan.highlight ? "btn btnPrimary pricingCta" : "btn btnOutline pricingCta"}>{plan.cta}</a>
              </div>
            ))}
          </div>
          <div className="pricingPilot">
            <p>Pilot programs available for select broker and 3PL teams. <a href="/demo">Book a demo to learn more →</a></p>
          </div>
        </div>
      </section>
      <FinalCTA title="Want a tailored quote?" copy="Book a demo and we will scope pricing to your freight volume and workflow needs." />
    </Layout>
  );
}
