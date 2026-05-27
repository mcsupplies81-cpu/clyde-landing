'use client';

import { FormEvent, useState } from "react";
import { Layout, PageHero } from "@/components/marketing";

export default function Page() {
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
                <h3 style={{ margin: 0, fontSize: "1.1rem" }}>Request a walkthrough</h3>
                <div className="demoField">
                  <label className="demoLabel">Full name</label>
                  <input className="demoInput" type="text" required placeholder="Jane Smith" />
                </div>
                <div className="demoField">
                  <label className="demoLabel">Work email</label>
                  <input className="demoInput" type="email" required placeholder="jane@yourcompany.com" />
                </div>
                <div className="demoField">
                  <label className="demoLabel">Company</label>
                  <input className="demoInput" type="text" required placeholder="Acme Freight" />
                </div>
                <div className="demoField">
                  <label className="demoLabel">Monthly load volume</label>
                  <input className="demoInput" type="text" placeholder="e.g. 500 loads/month" />
                </div>
                <div className="demoField">
                  <label className="demoLabel">TMS used</label>
                  <input className="demoInput" type="text" placeholder="e.g. McLeod, Tai, Rose Rocket" />
                </div>
                <div className="demoField">
                  <label className="demoLabel">Team type</label>
                  <select className="demoInput" required defaultValue="">
                    <option value="" disabled>Select...</option>
                    <option>Broker</option>
                    <option>3PL</option>
                    <option>Carrier</option>
                    <option>Shipper</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="demoField">
                  <label className="demoLabel">Biggest pain</label>
                  <select className="demoInput" required defaultValue="">
                    <option value="" disabled>Select...</option>
                    <option>Shared inbox chaos</option>
                    <option>PODs / BOLs</option>
                    <option>Status updates</option>
                    <option>RFQs</option>
                    <option>Load intake</option>
                    <option>Carrier follow-up</option>
                    <option>Other</option>
                  </select>
                </div>
                <button type="submit" className="btn btnPrimary demoSubmitBtn">Request a walkthrough →</button>
              </form>
            )}
          </div>
          <div className="demoSidebar">
            <div className="demoSideCard">
              <h3>What happens in the demo</h3>
              <ul>
                <li>See Clyde working on real freight email scenarios</li>
                <li>Walkthrough tailored to your team type and workflow</li>
                <li>Clear next steps and pricing overview</li>
              </ul>
              <hr className="demoDivider" />
              <p className="demoNote">Typical walkthrough is 30 minutes. No slides. No pitch deck.</p>
            </div>
            <div className="demoSideCard">
              <h3 style={{ fontSize: ".95rem", marginBottom: 12 }}>Who books demos</h3>
              <p className="demoNote">Freight brokers, 3PL ops teams, and carrier dispatch leads who are tired of living in their inbox.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
