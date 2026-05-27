import type { Metadata } from "next";
import DemoClientPage from "./demo-client";

export const metadata: Metadata = {
  title: "Book a Demo — Clyde",
  description: "Book a 30-minute walkthrough tailored to your inbox, your TMS, and your team's biggest freight email pain.",
};

export default function Page() {
  return <DemoClientPage />;
}
