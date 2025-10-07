import type { Metadata } from "next";
import Client from "./Client";
export const metadata: Metadata = {
  title: "Coverage & Surge Buffer Calculator | Tecronix",
  description:
    "Estimate staffing needs by interval from forecasted volume, handle time, and service target. Size surge buffers using error bands."
};
export default function CoverageCalculatorPage() {
  return <Client />;
}
