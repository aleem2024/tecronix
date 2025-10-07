import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RFP Checklist for Employers | Tecronix",
  description: "Run a clean RFP for staffing, managed services, or consulting. Detailed sections, downloads, and CTAs."
};

type Item = { title: string; bullets: string[] };

const sections: Item[] = [
  {
    title: "1) Context & Objectives",
    bullets: [
      "Problem statement, outcomes, and success criteria",
      "Volumes, seasonality, sites/time zones",
      "Constraints: systems, budget range, compliance"
    ]
  },
  {
    title: "2) Scope & Interfaces",
    bullets: [
      "In-scope steps and boundaries; what is out of scope",
      "Inputs/outputs, file formats, SFTP/API, ticketing",
      "Exception paths and handoffs"
    ]
  },
  {
    title: "3) Engagement Model",
    bullets: [
      "Staffing (hire people), Outcomes (buy outcomes), or Consulting (diagnostic/playbooks)",
      "Pilot length, go/no-go criteria, scale plan",
      "Governance cadence: weekly notes, dashboards, and owners"
    ]
  },
  {
    title: "4) Security & Compliance",
    bullets: [
      "Least-privilege access, MFA where supported",
      "Data classification/retention, audit trails",
      "Regulatory needs (e.g., BAA if PHI), COI certificates"
    ]
  },
  {
    title: "5) SLAs/QA & Metrics",
    bullets: [
      "Throughput, quality definitions (AQL/defect classes), reliability",
      "Sampling plan + calibration, acceptance criteria",
      "Dashboard tiles and evidence links"
    ]
  },
  {
    title: "6) Talent & Operations",
    bullets: [
      "Roles/levels, success profiles, scorecards",
      "Training artifacts, shadowing and sign-off",
      "Surge/holiday coverage and cross-training"
    ]
  },
  {
    title: "7) Commercials",
    bullets: [
      "Pricing model (hourly, fixed, unit-based), tiers and SLAs",
      "Invoicing, true-ups, change control",
      "Assumptions and exclusions"
    ]
  },
  {
    title: "8) Vendor Response Pack",
    bullets: [
      "Company overview and references",
      "Sample runbook/scorecard/dashboard pages",
      "Security posture and incident handling",
      "Implementation plan, risks, and mitigations"
    ]
  }
];

const downloads = [
  { name: "RFP Checklist (Markdown)", href: "/templates/rfp-checklist.md" },
  { name: "Runbook Outline (Markdown)", href: "/templates/runbook-outline.md" },
  { name: "QA Sampling Plan (CSV)", href: "/templates/qa-sampling-plan.csv" }
];

export default function EmployersRfpChecklistPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">RFP Checklist</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            A practical checklist to scope staffing, managed services, or consulting  so vendors respond with signal, not fluff.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#sections">Sections</a>
            <a className="btn-outline" href="#downloads">Downloads</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <section id="sections" className="container py-12 grid lg:grid-cols-2 gap-6">
        {sections.map(s => (
          <article key={s.title} className="card">
            <div className="font-semibold">{s.title}</div>
            <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
              {s.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </article>
        ))}
      </section>

      {/* DOWNLOADS */}
      <section id="downloads" className="container py-12">
        <h2>Downloads</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloads.map(d => (
            <a key={d.name} className="card block hover:shadow-sm" href={d.href} download>
              <div className="font-semibold">{d.name}</div>
              <div className="text-sm text-slate-600 mt-2">Download </div>
            </a>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-3">
          Files are placeholders in <code>/public/templates</code>. Replace with your official RFP pack before launch.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-slate-100">
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Want us to draft the RFP?</h2>
            <p className="text-slate-700 mt-1">We can tailor scope, SLAs/QA, and artifacts for your program.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/contact">Talk to Us</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
    </main>
  );
}

