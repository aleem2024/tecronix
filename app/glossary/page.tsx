import type { Metadata } from "next";
import GlossaryClient from "./Client";

export const metadata: Metadata = {
  title: "Glossary  Staffing & Operations Terms | Tecronix",
  description: "Quick definitions for common staffing, outsourcing, and operations terms."
};

export default function Page() {
  return <GlossaryClient />;
}

