import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting  Diagnostics & Playbooks | Tecronix",
  description: "Time-boxed diagnostics to turn ambiguity into a clear playbook and pilot plan. Evidence-first, with owners and dates."
};

type Step = { title: string; detail: string[] };
const steps: Step[] = [
  {
    title: "Discover",
    detail: [
      "Stakeholder interviews across delivery, ops, finance, and IT",
      "System walk-throughs: inputs, touchpoints, integrations",
      "Baseline metrics & known failure modes"
    ]
  },
  {
    title: "Sample & Map",
    detail: [
      "Sampling plan with AQL/defect classes; calibration rules",
      "Exception flows documented with owners",
      "Throughput/quality/reliability bottleneck analysis"
    ]
  },
  {
    title: "Design",
    detail: [
      "Draft SOPs and prompts; control points and checklists",
      "Dashboard tiles with definitions and evidence links",
      "Pilot metrics and success thresholds"
    ]
  },
  {
    title: "Readout",
    detail: [
      "Playbook with owners/dates and change-control guardrails",
      "Pilot plan (26 weeks) with go/no-go criteria",
      "Next steps: staff augmentation or outcomes-based delivery"
    ]
  }
];

const deliverables = [
  "Findings deck with evidence and timelines",
  "SOPs & exception flows (versioned)",
  "QA sampling definitions (AQL/defect classes)",
  "Dashboard tile definitions & data links",
  "Pilot plan with success criteria and risks"
];

const faqs: [string,string][] = [
  ["How long does it take?", "Most diagnostics complete in ~34 weeks depending on access and scope."],
  ["Will you work in our systems?", "Yes. We prefer client systems when feasible and document access & controls."],
  ["Can you support the pilot?", "Yes  we can staff or deliver outcomes. See Compare Models for trade-offs."]
];

export default function DiagnosticsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Diagnostics &amp; Playbooks</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            When scope is unclear, we run a time-boxed diagnostic to produce a concrete playbook and pilot plan  with evidence.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#approach">Approach</a>
            <a className="btn-outline" href="#deliverables">Deliverables</a>
            <a className="btn-primary" href="/templates/diagnostic-plan-outline.md" download>Download Outline</a>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="container py-12 grid lg:grid-cols-2 gap-6">
        {steps.map(s => (
          <article key={s.title} className="card">
            <div className="font-semibold">{s.title}</div>
            <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
              {s.detail.map(d => <li key={d}>{d}</li>)}
            </ul>
          </article>
        ))}
      </section>

      {/* DELIVERABLES & TIMELINE */}
      <section id="deliverables" className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-2 gap-10">
          <article className="card">
            <h2 className="font-semibold">What You Get</h2>
            <ul className="mt-3 text-slate-700 text-sm space-y-2">
              {deliverables.map(d => <li key={d}>{d}</li>)}
            </ul>
          </article>
          <article className="card">
            <h2 className="font-semibold">Typical Timeline</h2>
            <ol className="mt-3 list-decimal pl-6 text-slate-700 space-y-2">
              <li>Week 1  Discovery &amp; access setup</li>
              <li>Week 2  Sampling &amp; exception flows</li>
              <li>Week 3  Draft playbook &amp; dashboards</li>
              <li>Week 4  Readout &amp; pilot plan</li>
            </ol>
            <p className="text-xs text-slate-500 mt-3">Timeline varies with access and scope.</p>
          </article>
        </div>
      </section>

      {/* PRICING NOTES */}
      <section className="container py-12">
        <h2>Pricing Notes</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <article className="card">
            <div className="font-semibold">Fixed-Fee</div>
            <p className="muted text-sm mt-2">Time-boxed, with clear deliverables. Travel &amp; tooling are scoped if needed.</p>
          </article>
          <article className="card">
            <div className="font-semibold">Next Step Ready</div>
            <p className="muted text-sm mt-2">Playbook is designed to hand off to Staffing or Outcomes with minimal rework.</p>
            <div className="mt-3 flex gap-3">
              <a className="btn-outline" href="/employers/compare-models">Compare Models</a>
              <a className="btn-primary" href="/employers/pricing">Pricing</a>
            </div>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-12">
        <h2>FAQ</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          {faqs.map(([q,a]) => (
            <details key={q} className="p-4 rounded-2xl border bg-white">
              <summary className="font-medium">{q}</summary>
              <p className="mt-2 text-slate-700 text-sm">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Ready to de-risk your project?</h2>
            <p className="text-slate-700 mt-1">We can start discovery this week and target a four-week readout.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/contact">Talk to Consulting</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
    </main>
  );
}

