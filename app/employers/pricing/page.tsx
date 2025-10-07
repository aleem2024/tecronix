import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pricing Approaches - Staffing, Managed Services, Consulting | Tecronix",
  description:
    "Transparent pricing patterns for Staff Aug, Temp-to-Hire, Direct Placement, and Managed Services outcomes. Includes what drives cost, example scenarios, and FAQs."
};
type Item = string;
const models = [
  { name: "Staff Augmentation", points: [
    "Hourly or monthly per associate; lead/pod options",
    "QA sampling & coaching can be included as a pod add-on",
    "Surge buffers available (standby retainers or notice-based)",
    "Time & materials; minimum weekly coverage windows"
  ]},
  { name: "Temp-to-Hire", points: [
    "Contract hourly  optional conversion fee",
    "Tiered conversion fees decrease with tenure",
    "Guarantee window post-conversion (credit if rare misfit)",
    "Great when headcount is gated but work is live"
  ]},
  { name: "Direct Placement", points: [
    "Contingent fee based on first-year comp bands",
    "Replacement guarantee window with clear triggers",
    "Diversity slate options and confidential search",
    "Optional work trial or references from pilots"
  ]},
  { name: "Managed Services (Outcomes)", points: [
    "Per-outcome or per-pack pricing with SLA incentives",
    "Capacity blocks + overage per outcome for flexibility",
    "Pilot-first with success criteria and ramp plan",
    "Dashboards and evidence included; governance cadence"
  ]}
];
const drivers: Item[] = [
  "Scope complexity (decisioning vs. mechanical tasks; risk profile)",
  "Tooling & access (regulated systems, dual-review needs, audit trail)",
  "Coverage windows (nights/weekends, language, surge guard bands)",
  "Volume volatility (forecast error bands, seasonal peaks)",
  "QA depth (AQL targets, calibration cadence, dual-review)",
  "Continuity & resiliency requirements (BCP, cross-train, buffers)"
];
const examples = [
  {
    title: "CX Peak Coverage (Retail, BFCM)",
    model: "Staff Aug",
    detail: "Pod with Lead + 6 associates for 8 weeks; surge buffer 20% w/48h notice.",
    includes: ["Macros refresh", "Promo QA variant", "Daily calibration in peak"]
  },
  {
    title: "Disputes Outcome Desk (BFSI)",
    model: "Managed Services",
    detail: "Per-case outcome pricing with TAT SLA and win-rate target; 3-month pilot pack of 10k outcomes.",
    includes: ["Evidence tiles", "AQL QA", "Dual-review for high-risk"]
  },
  {
    title: "KYC Refresh (Fintech)",
    model: "Hybrid",
    detail: "Capacity block + per-outcome overage for bursts; audit trail and QC summaries.",
    includes: ["Adverse media checks", "QC gating", "Dashboard with age buckets"]
  },
  {
    title: "eTMF QC Program (Pharma)",
    model: "Managed Services",
    detail: "Per-artifact completeness & QC outcome; inspection-ready dashboards.",
    includes: ["Defect classes", "Checklist gates", "Evidence linkage"]
  }
];
const faqs = [
  { q: "Whats the minimum term?", a: "Staff Aug typically one-month minimum; Managed pilots usually 8-12 weeks. We can structure shorter diagnostics under Consulting." },
  { q: "How do you handle surge?", a: "Standby retainers, notice-based buffers (e.g., 48-72h), or outcome overage rates. We size buffers to forecast error bands." },
  { q: "Can we blend models?", a: "Yes-common blends are Staff Aug production with a Managed QA lane, or Temp-to-Hire feeding Direct Placement." },
  { q: "What about data security & privacy?", a: "Least-privilege/JML, sub-processor registry, incident SLAs, and DPAs as required. See Trust Center for details." },
  { q: "Do you provide dashboards?", a: "Yes. For Managed Services, dashboards with definitions and evidence tiles are included. For Staff Aug, we can add a QA pod and light dashboards." }
];
export default function EmployersPricingPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Pricing Approaches</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Clear structures that fit how you want to buy-capacity now, outcomes with SLAs, or short diagnostics to design the plan.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#models">Models</a>
            <a className="btn-outline" href="#drivers">What Drives Cost</a>
            <a className="btn-primary" href="/rfp">Get a Quote</a>
          </div>
        </div>
      </section>
      {/* MODELS */}
      <section id="models" className="container py-12 grid lg:grid-cols-2 gap-10">
        {models.map(m => (
          <article key={m.name} className="card">
            <h2 className="font-semibold">{m.name}</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              {m.points.map(p => <li key={p}>{p}</li>)}
            </ul>
            <div className="mt-4 flex gap-3">
              {m.name.includes("Staff") && <a className="btn-outline" href="/services/staffing/staff-augmentation">Staff Aug</a>}
              {m.name.includes("Temp") && <a className="btn-outline" href="/services/staffing/temp-to-hire">Temp-to-Hire</a>}
              {m.name.includes("Direct") && <a className="btn-outline" href="/services/staffing/direct-placement">Direct Placement</a>}
              {m.name.includes("Managed") && <a className="btn-outline" href="/services/managed-services">Managed Services</a>}
            </div>
          </article>
        ))}
      </section>
      {/* DRIVERS */}
      <section id="drivers" className="bg-slate-100">
        <div className="container py-12">
          <h2 className="font-semibold">What Drives Cost</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {drivers.map(d => <li key={d}>{d}</li>)}
          </ul>
          <p className="muted text-sm mt-3">
            We quantify these in an RFP so commercials match your constraints and risk envelope.
          </p>
        </div>
      </section>
      {/* EXAMPLES */}
      <section className="container py-12">
        <h2 className="font-semibold">Example Scenarios</h2>
        <div className="grid xl:grid-cols-2 gap-6 mt-4">
          {examples.map(ex => (
            <article key={ex.title} className="card">
              <div className="text-xs text-slate-500">{ex.model}</div>
              <h3 className="mt-1 font-semibold">{ex.title}</h3>
              <p className="muted text-sm mt-1">{ex.detail}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {ex.includes.map(i => (
                  <span key={i} className="inline-block px-2 py-1 rounded-full bg-slate-100 text-slate-700 text-xs">{i}</span>
                ))}
              </div>
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
              {faqs.map(f => (
                <div key={f.q}>
                  <div className="font-medium">{f.q}</div>
                  <p className="muted text-sm mt-1">{f.a}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="card">
            <h2 className="font-semibold">Ready for numbers?</h2>
            <p className="muted text-sm mt-2">
              Share scope, volumes, and constraints. Well return a clear proposal and (optionally) a pilot plan with SLAs/QA.
            </p>
            <div className="mt-4 flex gap-3">
              <a className="btn-outline" href="/rfp">Start an RFP</a>
              <a className="btn-outline" href="/employers/compare-models">Compare Models</a>
              <a className="btn-primary" href="/contact">Talk to Sales</a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

