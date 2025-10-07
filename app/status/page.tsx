import type { Metadata } from "next";
import StatusClient from "./Client";

export const metadata: Metadata = {
  title: "Status | Tecronix",
  description: "Live service status, recent incidents, and uptime metrics. Subscribe via RSS."
};

export default function Page() {
  return <StatusClient />;
}
