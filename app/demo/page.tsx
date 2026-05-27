'use client';

import { FormEvent, useState } from "react";
import { Layout, PageHero } from "@/components/marketing";

const fieldStyle = {
  padding: 10,
  border: "1px solid var(--line)",
  borderRadius: 8,
  fontSize: "inherit",
  width: "100%",
};

export default function Page() {
  const [done, setDone] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDone(true);
  };

  return (
    <Layout>
      <PageHero
        title="See what Clyde can take off your freight inbox."
        copy="Book a short walkthrough to see how Clyde handles freight email, paperwork, and load actions."
      />

      <section className="section">
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            alignItems: "start",
          }}
        >
          <div>
            {done ? (
              <div className="card stack-sm">
                <h3>Thanks — we&apos;ll be in touch.</h3>
                <p className="muted">
                  A member of our team will reach out within one business day to schedule
                  your walkthrough.
                </p>
                <p className="muted" style={{ fontSize: "0.9rem" }}>
                  TODO: connect form submission to a backend demo intake endpoint (e.g. a
                  webhook, CRM API, or email service) when backend is available.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="card" style={{ display: "grid", gap: 12 }}>
                <label className="stack-sm">
                  <span>Full name</span>
                  <input type="text" required style={fieldStyle} />
                </label>

                <label className="stack-sm">
                  <span>Work email</span>
                  <input type="email" required style={fieldStyle} />
                </label>

                <label className="stack-sm">
                  <span>Company</span>
                  <input type="text" required style={fieldStyle} />
                </label>

                <label className="stack-sm">
                  <span>Monthly load volume</span>
                  <input
                    type="text"
                    placeholder="e.g. 500 loads/month"
                    style={fieldStyle}
                  />
                </label>

                <label className="stack-sm">
                  <span>TMS used</span>
                  <input
                    type="text"
                    placeholder="e.g. McLeod, Tai, Rose Rocket"
                    style={fieldStyle}
                  />
                </label>

                <label className="stack-sm">
                  <span>Team type</span>
                  <select required defaultValue="" style={fieldStyle}>
                    <option value="" disabled>
                      Select team type
                    </option>
                    <option>Broker</option>
                    <option>3PL</option>
                    <option>Carrier</option>
                    <option>Shipper</option>
                    <option>Other</option>
                  </select>
                </label>

                <label className="stack-sm">
                  <span>Biggest pain</span>
                  <select required defaultValue="" style={fieldStyle}>
                    <option value="" disabled>
                      Select biggest pain
                    </option>
                    <option>Shared inbox chaos</option>
                    <option>PODs / BOLs</option>
                    <option>Status updates</option>
                    <option>RFQs</option>
                    <option>Load intake</option>
                    <option>Carrier follow-up</option>
                    <option>Other</option>
                  </select>
                </label>

                <button className="btn btnPrimary" type="submit">
                  Request a walkthrough
                </button>
              </form>
            )}
          </div>

          <div className="card stack-sm">
            <h3>What happens in the demo</h3>
            <ul>
              <li>See Clyde working on real freight email scenarios</li>
              <li>Walkthrough tailored to your team type and workflow</li>
              <li>Clear next steps and pricing overview</li>
            </ul>
            <div
              style={{
                marginTop: 16,
                paddingTop: 16,
                borderTop: "1px solid var(--line)",
              }}
            >
              <p className="muted">Typical walkthrough is 30 minutes. No slides. No pitch deck.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
