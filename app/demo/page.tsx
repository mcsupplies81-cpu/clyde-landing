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
              <h3>Why teams book a demo</h3>
              <ul>
                <li>See your specific inbox automated — not a generic walkthrough</li>
                <li>Understand how Clyde matches to your TMS data</li>
                <li>Get a workflow plan built for your team in the call</li>
                <li>Know exactly what onboarding looks like before you commit</li>
              </ul>
            </div>
            <div className="demoSideCard">
              <h3>What to expect</h3>
              <ul>
                <li>30-minute video call with a Clyde workflow specialist</li>
                <li>Live walkthrough using freight email examples from your industry</li>
                <li>No sales pressure — if it's not a fit, we'll tell you</li>
              </ul>
            </div>
            <div className="demoSideCard darkCard">
              <p className="demoNote">“We booked the demo expecting a pitch. We got a workflow audit. Signed within the week.” — Rachel K., Director of Operations</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
