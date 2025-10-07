import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Compare Models - Staffing vs. Managed Services vs. Consulting | Tecronix",
  description:
    "Side-by-side comparison of delivery models: when to use each, quality/coverage/dashboards expectations, commercials, and common upgrade paths."
};
type Row = { dim: string; staffing: string; managed: string; consulting: string };
const rows: Row[] = [
  {
    dim: "Primary Use",
    staffing: "Add calibrated capacity on your stack with QA sampling and dashboards.",
    managed: "Buy outcomes with SLAs (TAT, accuracy, win-rate, MTTR) and evidence.",
    consulting: "Clarify scope, QA, coverage, and dashboards; blueprint a pilot."
  },
  {
    dim: "Commercials",
    staffing: "Hourly/FTE capacity, surge options.",
    managed: "Per-outcome/pack or lane fee; SLA incentives/credits.",
    consulting: "Fixed fee for sprint/blueprint."
  },
  {
    dim: "Quality",
    staffing: "AQL sampling; defect classes; calibration cadence.",
    managed: "AQL + dual-review (risk-based); incentives; immutable evidence tiles.",
    consulting: "Design defect taxonomy, AQL targets, calibration plan."
  },
  {
    dim: "Coverage",
    staffing: "Shift grid; surge buffers; cross-training.",
    managed: "Contracted windows with surge guardrails; continuity playbooks.",
    consulting: "Coverage math and buffer sizing; WFM guidance."
  },
  {
    dim: "Dashboards",
    staffing: "Throughput, QA %, backlog aging; shared definitions.",
    managed: "SLA attainment (p50/p90), accuracy, defect mix with drill-to-evidence.",
    consulting: "Definitions catalog; dashboard spec with refresh & ownership."
  },
  {
    dim: "Change Control",
    staffing: "Ticketed SOP/policy updates; training attestations.",
    managed: "Versioned SOPs tied to evidence; PIRs & continuous improvement.",
    consulting: "Change log template; recommended cadence."
  },
  {
    dim: "Time to Start",
    staffing: "Fast (days-weeks) once access is set.",
    managed: "Usually after a pilot or calibrated run (weeks).",
    consulting: "1-4 weeks depending on format."
  },
  {
    dim: "Good For",
    staffing: "CX peaks, exceptions, catalog ops, AR follow-up, KYC support.",
    managed: "Disputes, refunds, claims, eTMF QC, denials/appeals, freight AP.",
    consulting: "When stakeholders need alignment before scale."
  }
];
const faqs = [
  { q: "Can we start with staffing and move to outcomes later?",
    a: "Yes. We often run staffing with QA/definitions first, then migrate lanes to Managed Services once metrics stabilize." },
  { q: "Do dashboards change between models?",
    a: "Definitions stay consistent. Managed Services adds SLA attainment and drill-to-evidence; staffing focuses on throughput/QA/backlog." },
  { q: "What if we already have QA?",
    a: "We calibrate to your taxonomy and wire evidence so audits and coaching are faster. We avoid metric drift by embedding definitions." },
  { q: "How do pilots work?",
    a: "We set success metrics, sample sizes, and go/no-go gates. Pilots can be staffed or managed; consulting can blueprint the pilot if needed." }
];
export default function CompareModelsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Compare Models</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Choose the right path for where you are today - and the upgrade path for where youre going.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#table">Side-by-Side</a>
            <a className="btn-outline" href="#faqs">FAQs</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
      {/* TABLE */}
      <section id="table" className="container py-12">
        <div className="card">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h2 className="font-semibold">Side-by-Side Comparison</h2>
            <div className="flex gap-3">
              <a className="btn-outline" href="/services/staffing/staff-augmentation">Staffing</a>
              <a className="btn-outline" href="/services/managed-services">Managed Services</a>
              <a className="btn-outline" href="/services/consulting">Consulting</a>
            </div>
          </div>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr className="text-left">
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Staffing</th>
                  <th className="px-4 py-3">Managed Services</th>
                  <th className="px-4 py-3">Consulting</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(r => (
                  <tr key={r.dim} className="border-t align-top">
                    <td className="px-4 py-3 font-medium">{r.dim}</td>
                    <td className="px-4 py-3">{r.staffing}</td>
                    <td className="px-4 py-3">{r.managed}</td>
                    <td className="px-4 py-3">{r.consulting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="muted text-xs mt-3">
            Definitions travel with metrics across models to prevent drift. Evidence tiles enable fast audits and objective coaching.
          </p>
        </div>
      </section>
      {/* UPGRADE PATHS */}
      <section className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-3 gap-6">
          <article className="card">
            <div className="text-xs text-slate-500">Path A</div>
            <div className="text-lg font-semibold mt-1">Staffing  Managed</div>
            <p className="muted text-sm mt-2">
              Start with pods and QA; migrate lanes to SLAs once stable. Good for CX, KYC support, AR follow-up.
            </p>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Path B</div>
            <div className="text-lg font-semibold mt-1">Consulting  Pilot  Managed</div>
            <p className="muted text-sm mt-2">
              Use a diagnostic sprint/blueprint; run a pilot with success gates; scale on outcomes.
            </p>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Path C</div>
            <div className="text-lg font-semibold mt-1">Hybrid</div>
            <p className="muted text-sm mt-2">
              Keep internal production, add staffed QA and dashboards; convert selective lanes to SLAs.
            </p>
          </article>
        </div>
      </section>
      {/* FAQ + CTA */}
      <section id="faqs" className="container py-12 grid lg:grid-cols-2 gap-10">
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
          <h2 className="font-semibold">Next Step</h2>
          <p className="muted text-sm mt-2">
            If your scope is clear, request a Managed Services proposal. If not, start with a short diagnostic.
          </p>
          <div className="mt-4 flex gap-3">
            <a className="btn-outline" href="/rfp">Start an RFP</a>
            <a className="btn-primary" href="/contact">Talk to an Expert</a>
          </div>
        </article>
      </section>
    </main>
  );
}

