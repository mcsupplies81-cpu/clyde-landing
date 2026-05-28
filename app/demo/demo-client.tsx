'use client';

import { FormEvent, useState } from "react";
import { Layout, PageHero } from "@/components/marketing";

export default function DemoClientPage() {
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <Layout>
      <PageHero
        title="See what Clyde can take off your freight inbox."
        copy="Book a short walkthrough. We will tailor it to your team, your workflow, and your biggest inbox pain."
      />
      <section className="section">
        <div className="container demoGrid">
          <div>
            {done ? (
              <div className="demoSuccess">
                <h3>We received your request.</h3>
                <p className="demoNote">A member of our team will reach out within one business day to schedule your walkthrough.</p>
                <p className="demoNote" style={{ fontSize: ".8rem", color: "#aab9cf" }}>TODO: wire to backend intake endpoint.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="demoForm">
                <label>
                  Name
                  <input name="name" required />
                </label>
                <label>
                  Work email
                  <input name="email" type="email" required />
                </label>
                <label>
                  Company
                  <input name="company" required />
                </label>
                <label>
                  What should we focus on?
                  <textarea name="focus" rows={4} placeholder="RFQ triage, POD collection, broker/carrier updates..." />
                </label>
                <button type="submit" className="btn btnPrimary">Request demo</button>
              </form>
            )}
          </div>
          <aside className="demoAside card">
            <h3>What you'll see</h3>
            <ul>
              <li>How Clyde triages incoming freight email in real time</li>
              <li>How docs are extracted and matched to active loads</li>
              <li>How your team reviews and approves suggested actions</li>
            </ul>
            <p className="demoNote">No generic pitch deck. We'll walk through your actual workflows.</p>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
