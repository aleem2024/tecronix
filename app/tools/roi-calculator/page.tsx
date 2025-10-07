import type { Metadata } from "next";
import RoiClient from "./Client";

export const metadata: Metadata = {
  title: "ROI Calculator | Tecronix",
  description: "Estimate savings, ROI, and payback for Staffing vs. Outcomes changes using a simple model."
};

export default function Page() {
  return <RoiClient />;
}
