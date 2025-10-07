import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Managed Services - Outcome SLAs, QA & Evidence | Tecronix",
  description:
    "Accountable delivery priced per outcome/pack with SLAs, AQL QA, evidence tiles, and dashboards. Ideal for disputes, KYC, refunds, AR follow-up, claims, eTMF QC, and more."
};
type Bullet = string;
const whenToUse: Bullet[] = [
  "You want guarantees on outcomes (TAT, accuracy, win-rate, MTTR) - not just capacity",
  "Scope is well-understood or piloted; volumes justify a stable run",
  "You need audit-ready evidence and regulator/customer-facing dashboards",
  "Commercials fit pay-per-outcome/pack or fixed-fee per lane with SLA incentives"
];
const exampleLanes = [
  { lane: "BFSI - Disputes Outcome Desk", slas: ["Win-rate target", "p50/p90 TAT", "QA AQL  99.0%"], evidence: ["Representment templates", "Affidavit checks", "Network reason code mapping"] },
  { lane: "KYC/KYB Refresh", slas: ["Completion % by aging bucket", "Dual-review on high-risk", "Accuracy  target"], evidence: ["Reviewer FP/FN", "Adverse media notes", "Sanctions hits"] },
  { lane: "Retail - Refund Accuracy", slas: ["Accuracy  99.3%", "Callback rate ", "Cycle-time SLA"], evidence: ["Policy-aligned defect classes", "Macro variants", "Order evidence kit"] },
  { lane: "Logistics - Claims & Freight AP", slas: ["Recovery rate ", "Cycle-time ", "Leakage catch rate"], evidence: ["POD/OS&D photos", "Invoice diff logs", "Rebill docs"] },
  { lane: "RCM - AR Follow-up / Denials", slas: ["Aging p90 ", "Overturn % ", "Cash acceleration"], evidence: ["Appeal packets", "Coding QA", "Payer policy links"] },
  { lane: "Life Sciences - eTMF QC", slas: ["Completeness  98%", "Accuracy AQL  99.5%", "Aging "], evidence: ["DIA-aligned checklists", "Version controls", "Heatmaps"] }
];
const qa: Bullet[] = [
  "Defect taxonomy aligned to policy/network/tariff/SOPs with examples",
  "AQL sampling by lane; dual-review where risk justifies cost",
  "Calibration cadence; reviewer FP/FN analysis; recurrence watchlists",
  "Coaching notes and change control wired to metrics"
];
const dashboards: Bullet[] = [
  "Definitions travel with each metric (prevent drift)",
  "SLA attainment (p50/p90), QA pass %, defect mix, backlog aging",
  "Drill to sample evidence tiles (immutable links)",
  "Audit/regulator export packs with timestamped snapshots"
];
const commercials: Bullet[] = [
  "Per-outcome/pack, tiered by volume/mix; guardrails for surge windows",
  "Incentives/credits on SLA attainment; optional gainshare on leakage recovery",
  "Pilots with success gates; migrate from staffing once calibrated",
  "Hybrid models (staffed QA + client production) as stepping stone"
];
export default function ManagedServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Managed Services</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Buy outcomes - not just hours. We operate lanes with SLAs, QA, and audit-ready evidence,
            priced per outcome or pack, with dashboards your stakeholders trust.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#when">When to Use</a>
            <a className="btn-outline" href="#lanes">Example Lanes</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
      {/* WHEN */}
      <section id="when" className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h2 className="font-semibold">When to Choose Outcomes</h2>
          <ul className="mt-3 list-disc pl-5 text-slate-700 text-sm space-y-2">
            {whenToUse.map(w => <li key={w}>{w}</li>)}
          </ul>
        </article>
        <article className="card">
          <h2 className="font-semibold">Commercial Options</h2>
          <ul className="mt-3 list-disc pl-5 text-slate-700 text-sm space-y-2">
            {commercials.map(c => <li key={c}>{c}</li>)}
          </ul>
          <div className="mt-4 flex flex-wrap gap-3">
            <a className="btn-outline" href="/employers/compare-models">Compare Models</a>
            <a className="btn-outline" href="/services/consulting">Consulting First?</a>
          </div>
        </article>
      </section>
      {/* EXAMPLE LANES */}
      <section id="lanes" className="bg-slate-100">
        <div className="container py-12 grid xl:grid-cols-2 gap-6">
          {exampleLanes.map(l => (
            <article key={l.lane} className="card">
              <div className="text-xs text-slate-500">Lane</div>
              <h3 className="mt-1 font-semibold">{l.lane}</h3>
              <div className="grid md:grid-cols-3 gap-4 mt-3">
                <div>
                  <div className="font-medium text-sm">SLAs</div>
                  <ul className="list-disc pl-5 text-slate-700 text-sm space-y-1">
                    {l.slas.map(s => <li key={s}>{s}</li>)}
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <div className="font-medium text-sm">Evidence</div>
                  <ul className="list-disc pl-5 text-slate-700 text-sm space-y-1">
                    {l.evidence.map(e => <li key={e}>{e}</li>)}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* QA & DASHBOARDS */}
      <section className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h2 className="font-semibold">Quality System (QA)</h2>
          <ul className="mt-3 list-disc pl-5 text-slate-700 text-sm space-y-2">
            {qa.map(q => <li key={q}>{q}</li>)}
          </ul>
        </article>
        <article className="card">
          <h2 className="font-semibold">Dashboards &amp; Evidence</h2>
          <ul className="mt-3 list-disc pl-5 text-slate-700 text-sm space-y-2">
            {dashboards.map(d => <li key={d}>{d}</li>)}
          </ul>
          <div className="mt-4 flex gap-3">
            <a className="btn-outline" href="/trust">Trust Center</a>
            <a className="btn-outline" href="/security/incident-response">Incident Response</a>
            <a className="btn-outline" href="/security/sub-processors">Sub-Processors</a>
          </div>
        </article>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Ready to buy outcomes?</h2>
            <p className="text-slate-700 mt-1">
              Well propose lanes, SLAs, QA plans, evidence tiles, and dashboards - with a pilot blueprint and success gates.
            </p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/employers/compare-models">Compare Models</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
    </main>
  );
}

