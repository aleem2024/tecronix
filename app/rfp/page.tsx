import type { Metadata } from "next";
import RfpClient from "./Client";

export const metadata: Metadata = {
  title: "Request for Proposal (RFP) | Tecronix",
  description: "Share your goals and constraints. We will propose Staffing, Outcomes, or Consulting options with a pilot plan."
};

export default function Page() {
  return <RfpClient />;
}
