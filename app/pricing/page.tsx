"use client";

import { useState } from "react";
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
  const faqs = [
    {
      q: "How does pricing work?",
      a: "Pricing is based on inbox volume and team size — not per seat. Most teams start with the Starter or Growth plan and scale as Clyde handles more of their workflow.",
    },
    {
      q: "Is there a free trial?",
      a: "We offer a guided pilot for qualifying teams. Book a demo and we'll walk you through what a pilot looks like for your specific workflow.",
    },
    {
      q: "Which TMS platforms do you support?",
      a: "Clyde works with McLeod, Tai, Rose Rocket, Turvo, and any TMS that supports CSV exports. We build new integrations on request.",
    },
    {
      q: "How long does setup take?",
      a: "Most teams are processing live email within one week. Onboarding includes inbox connection, load data import, and workflow configuration with your team.",
    },
    {
      q: "Is my freight data secure?",
      a: "Yes. Data is processed in isolated environments, encrypted in transit and at rest, and never used for model training. See our Trust page for details.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Clyde is offered on monthly or annual terms with no long-term lock-in for most plans.",
    },
  ];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((current) => (current === index ? null : index));
  };

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
          <section className="faqSection" aria-label="Pricing FAQs">
            <h2 className="faqSectionHead">Frequently asked questions</h2>
            <div className="faqList">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div className="faqItem" key={faq.q}>
                    <button
                      type="button"
                      className="faqQuestion"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                    >
                      <span>{faq.q}</span>
                      <span className={isOpen ? "faqIcon open" : "faqIcon"}>+</span>
                    </button>
                    {isOpen && (
                      <p className="faqAnswer" id={`faq-answer-${index}`} aria-labelledby={`faq-question-${index}`}>
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </section>
      <FinalCTA title="Want a tailored quote?" copy="Book a demo and we will scope pricing to your freight volume and workflow needs." />
    </Layout>
  );
}
