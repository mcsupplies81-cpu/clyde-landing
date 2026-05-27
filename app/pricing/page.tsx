import { Layout, PageHero, FinalCTA } from "@/components/marketing";

const plans = [
  {
    name: "Starter",
    price: "Starting at $750/mo",
    description: "For small teams getting started with freight email automation.",
    features: [
      "1 shared inbox",
      "Email classification",
      "Document capture",
      "Draft replies",
      "Active load CSV import",
      "Basic workflows",
    ],
  },
  {
    name: "Growth",
    price: "Starting at $2,000/mo",
    description: "For growing teams managing higher email and paperwork volume.",
    features: [
      "Multiple inboxes",
      "Document matching",
      "Missing POD chase",
      "RFQ triage",
      "Load award extraction",
      "Workflow approvals",
      "Basic sync/export",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For high-volume teams needing custom workflows and integrations.",
    features: [
      "TMS/API integrations",
      "Custom SOPs",
      "Advanced approvals",
      "Audit logs",
      "Dedicated onboarding",
      "Security review",
    ],
  },
];

export default function Page() {
  return (
    <Layout>
      <PageHero
        title="Pricing built around freight volume."
        copy="Simple plans for brokers, 3PLs, and freight teams."
      />

      <section className="section">
        <div className="container">
          <div className="grid3">
            {plans.map((plan) => (
              <div key={plan.name} className="card stack-sm">
                <h3>{plan.name}</h3>
                <strong>{plan.price}</strong>
                <p className="muted">{plan.description}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="container" style={{ marginTop: 24 }}>
          <div className="card">
            <p>
              Pilot programs available for select broker and 3PL teams. Book a demo to
              learn more.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Want a tailored quote?"
        copy="Book a demo and we will scope pricing to your freight volume and workflow needs."
      />
    </Layout>
  );
}
