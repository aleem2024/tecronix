import type { Metadata } from "next";
import CookieClient from "./Client";

export const metadata: Metadata = {
  title: "Cookie Notice & Preferences | Tecronix",
  description: "What cookies we use and how to control them. Manage analytics and marketing preferences."
};

export default function Page() {
  return <CookieClient />;
}
