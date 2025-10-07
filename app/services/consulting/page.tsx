import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Consulting - Diagnostics, Playbooks & Pilot Design | Tecronix",
  description:
    "Short, focused consulting to clarify scope, design QA & coverage, size surge buffers, and blueprint dashboards - often leading into Staffing or Managed Services."
};
type Bullet = string;
const whenToUse: Bullet[] = [
  "Scope is fuzzy or multi-lane and you need clarity before buying capacity",
  "Metrics drift across teams; you want definitions and evidence tiles",
  "Quality issues are subjective; you need defect taxonomy and AQL targets",
  "Coverage windows explode costs; you want buffer math and options",
  "Stakeholders disagree on success; you want a pilot plan with gates"
];
const deliverables: Bullet[] = [
  "Scope map (lanes, steps, risk profile) and RACI",
  "QA plan: defect classes, AQL targets, calibration cadence",
  "Coverage: shifts, buffers sized to forecast error bands",
  "Dashboards: metric definitions, refresh, drill-to-evidence",
  "Pilot blueprint: success criteria, sample sizes, go/no-go gates",
  "Commercial options: staffing vs. outcomes; hybrid paths"
];
const formats = [
  { name: "Diagnostic Sprint (1-2 weeks)", notes: [
    "Workshops + shadowing; artifact review",
    "Outputs: scope map, QA plan, coverage math, dashboard spec",
    "Recommended when you need clarity before an RFP"
  ]},
  { name: "Pilot Blueprint (2-4 weeks)", notes: [
    "Includes test design, sample sizes, and runbook",
    "Outputs: success metrics, evidence tiles, change control",
    "Leads directly into a staffed or managed pilot"
  ]},
  { name: "Controls Tune-Up (targeted)", notes: [
    "One lane (e.g., refunds, KYC, AR follow-up) tuned for QA/SLAs",
    "Outputs: revised SOPs, QA checklist, training plan"
  ]}
];
const exampleEngagements = [
  { title: "Refund Accuracy & DSAT Reduction (Retail)", points: [
    "Defect taxonomy for refunds/adjustments tied to policy",
    "Macro variants and evidence tiles; callbacks ; accuracy "
  ]},
  { title: "Disputes Evidence Program (BFSI)", points: [
    "Network-aligned templates and AQL QA; win-rate ; TAT stabilized"
  ]},
  { title: "Close Calendar Tune-Up (Finance)", points: [
    "Reconciliation gates, flux playbooks, evidence; day slip risk "
  ]},
  { title: "Outage Communications Playbook (Utilities)", points: [
    "Callback SLAs, proactive notifications, storm surge buffers"
  ]}
];
const faq = [
  { q: "Why start with consulting?", a: "It de-risks scope and creates objective QA/metric definitions so staffing or outcomes start fast and succeed." },
  { q: "Can you run the pilot you design?", a: "Yes. We often run the pilot as Managed Services, or staff your team and operate QA." },
  { q: "How are fees structured?", a: "Fixed fee by scope. If we continue into delivery, fees can credit into the pilot." },
  { q: "What if we already have QA?", a: "We calibrate to your defect classes and add evidence tiles/definitions to reduce drift." }
];
export default function ConsultingPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Consulting</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Clarity first: we map scope, design QA & coverage, and define dashboards - then blueprint a pilot
            so your next step (Staffing or Managed Services) is fast and objective.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#when">When to Use</a>
            <a className="btn-outline" href="#deliverables">Deliverables</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
      {/* WHEN */}
      <section id="when" className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h2 className="font-semibold">When to Use Consulting</h2>
          <ul className="mt-3 list-disc pl-5 text-slate-700 text-sm space-y-2">
            {whenToUse.map(w => <li key={w}>{w}</li>)}
          </ul>
        </article>
        <article className="card">
          <h2 className="font-semibold">Typical Deliverables</h2>
          <ul className="mt-3 list-disc pl-5 text-slate-700 text-sm space-y-2">
            {deliverables.map(d => <li key={d}>{d}</li>)}
          </ul>
          <div className="mt-4 flex flex-wrap gap-3">
            <a className="btn-outline" href="/employers/compare-models">Compare Models</a>
            <a className="btn-outline" href="/trust">Trust Center</a>
          </div>
        </article>
      </section>
      {/* FORMATS */}
      <section className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-3 gap-6">
          {formats.map(f => (
            <article key={f.name} className="card">
              <div className="text-xs text-slate-500">Format</div>
              <div className="text-lg font-semibold mt-1">{f.name}</div>
              <ul className="mt-3 list-disc pl-5 text-slate-700 text-sm space-y-1">
                {f.notes.map(n => <li key={n}>{n}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
      {/* EXAMPLES */}
      <section className="container py-12">
        <h2 className="font-semibold">Example Engagements</h2>
        <div className="grid xl:grid-cols-2 gap-6 mt-4">
          {exampleEngagements.map(ex => (
            <article key={ex.title} className="card">
              <div className="text-xs text-slate-500">Sample</div>
              <h3 className="mt-1 font-semibold">{ex.title}</h3>
              <ul className="mt-2 list-disc pl-5 text-slate-700 text-sm space-y-1">
                {ex.points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
      {/* FAQ + CTA */}
      <section className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-2 gap-10">
          <article className="card">
            <h2 className="font-semibold">FAQs</h2>
            <div className="mt-3 space-y-4">
              {faq.map(f => (
                <div key={f.q}>
                  <div className="font-medium">{f.q}</div>
                  <p className="muted text-sm mt-1">{f.a}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="card">
            <h2 className="font-semibold">Next Step</h2>
            <p className="muted text-sm mt-2">
              We can start with a 1-2 week Diagnostic Sprint or go straight to a Pilot Blueprint if scope is known.
            </p>
            <div className="mt-4 flex gap-3">
              <a className="btn-outline" href="/rfp">Start an RFP</a>
              <a className="btn-primary" href="/contact">Talk to Consulting Lead</a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

