import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Outsourcing - Global Delivery (Nearshore & Offshore) | Tecronix",
  description:
    "Outcome-focused global delivery with nearshore/offshore hubs. Follow-the-sun coverage, surge buffers, evidence-linked QA, and strong governance for regulated industries."
};
type Bullet = string;
const whereItFits: Bullet[] = [
  "Repeatable back-office workflows with measurable outcomes",
  "Seasonal/launch-driven demand (retail peaks, product releases, storm seasons)",
  "Cost-to-serve reduction targets with SLA protections",
  "Access-controlled work in regulated environments (finance, health, public sector)",
  "Multi-language or extended-hour coverage needs"
];
const deliveryHubs: Bullet[] = [
  "Nearshore Americas: overlap with US time zones, bilingual support (EN/ES)",
  "Offshore APAC: follow-the-sun coverage, large talent pools",
  "Hybrid models: client onshore leads + TX near/offshore squads",
  "Co-sourced: client runs production; TX runs QA/controls (or vice versa)"
];
const controls: Bullet[] = [
  "Least-privilege access & JML workflow; periodic reviews",
  "Evidence-linked QA sampling (AQL/defect classes) with calibration",
  "SOPs/playbooks versioned with change control and training records",
  "Secure workspace standards and vendor/sub-processor registry",
  "Incident Response with severity matrix and client notification SLAs"
];
const outcomes: Bullet[] = [
  "Throughput SLAs by queue/class with surge buffers",
  "Quality SLAs (FPY/Rework, defect density by class) tied to incentives",
  "Reliability SLOs (coverage/adherence, continuity) monitored daily",
  "Backlog burn-down plans with forecast & recovery windows",
  "Audit-ready evidence tiles linking artifacts to checks and outcomes"
];
const kpis: Bullet[] = [
  "TAT medians/p90, First Response/Resolve times",
  "FPY, Rework %, Defect mix by class (Pareto)",
  "Coverage/adherence, shrink, continuity incidents",
  "Backlog delta vs. forecast; surge recovery time",
  "Evidence completeness score; audit findings trend"
];
export default function OutsourcingServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Outsourcing (Global Delivery)</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Nearshore/offshore squads that own outcomes with SLAs. We provide playbooks, QA, dashboards,
            and governance-so peaks and audits are predictable.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#fit">When it Fits</a>
            <a className="btn-outline" href="#hubs">Delivery Hubs</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
      {/* FIT & HUBS */}
      <section id="fit" className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h2 className="font-semibold">When Outsourcing Fits</h2>
          <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
            {whereItFits.map(x => <li key={x}>{x}</li>)}
          </ul>
          <div className="mt-4">
            <a className="btn-outline" href="/employers/compare-models">Compare to Staffing &amp; Managed Services</a>
          </div>
        </article>
        <article className="card" id="hubs">
          <h2 className="font-semibold">Delivery Hubs &amp; Models</h2>
          <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
            {deliveryHubs.map(h => <li key={h}>{h}</li>)}
          </ul>
        </article>
      </section>
      {/* OUTCOMES & CONTROLS */}
      <section className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-2 gap-10">
          <article className="card">
            <h2 className="font-semibold">Outcomes We Commit</h2>
            <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
              {outcomes.map(o => <li key={o}>{o}</li>)}
            </ul>
            <div className="mt-4 flex gap-3">
              <a className="btn-outline" href="/case-studies">Case Studies</a>
              <a className="btn-primary" href="/rfp">Design a Pilot</a>
            </div>
          </article>
          <article className="card">
            <h3 className="font-semibold">Controls &amp; Compliance</h3>
            <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
              {controls.map(c => <li key={c}>{c}</li>)}
            </ul>
            <div className="mt-4 flex gap-3">
              <a className="btn-outline" href="/trust">Trust Center</a>
              <a className="btn-outline" href="/security/incident-response">Incident Response</a>
              <a className="btn-outline" href="/security/sub-processors">Sub-Processors</a>
            </div>
          </article>
        </div>
      </section>
      {/* KPIs */}
      <section className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h2 className="font-semibold">KPIs We Report</h2>
          <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
            {kpis.map(k => <li key={k}>{k}</li>)}
          </ul>
        </article>
        <article className="card">
          <h2 className="font-semibold">Transition Plan</h2>
          <div className="grid sm:grid-cols-3 gap-4 mt-3">
            <div className="p-4 rounded-2xl border">
              <div className="text-xs text-slate-500">Phase 1</div>
              <div className="font-semibold mt-1">Diagnostic</div>
              <p className="muted text-sm mt-1">2-4 weeks. Baseline &amp; pilot design.</p>
            </div>
            <div className="p-4 rounded-2xl border">
              <div className="text-xs text-slate-500">Phase 2</div>
              <div className="font-semibold mt-1">Pilot</div>
              <p className="muted text-sm mt-1">4-8 weeks. Limited scope, QA, dashboards.</p>
            </div>
            <div className="p-4 rounded-2xl border">
              <div className="text-xs text-slate-500">Phase 3</div>
              <div className="font-semibold mt-1">Scale</div>
              <p className="muted text-sm mt-1">Steady-state SLAs and surge buffers.</p>
            </div>
          </div>
        </article>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Global capacity without chaos</h2>
            <p className="text-slate-700 mt-1">Well propose a near/offshore plan with outcomes, QA, and governance.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/employers/pricing">Pricing Approaches</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
    </main>
  );
}

