import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Staffing Services - On-Demand Talent, Temp-to-Hire, Direct Placement | Tecronix",
  description:
    "Flexible staffing for operations, finance, CX, content, compliance and more. Temp, temp-to-hire, and direct placement with calibrated QA, playbooks, and fast onboarding."
};
type Bullet = string;
const models: Bullet[] = [
  "Temporary / Contingent: surge coverage, backfills, seasonal ramps",
  "Temp-to-Hire: trial-to-perm with calibration checkpoints",
  "Direct Placement: sourcing, screening, and offer management",
  "Project Squads: pre-trained pods with leads and QA review",
  "Hybrid: staffed QA with client-run production (or vice versa)"
];
const coverage: Bullet[] = [
  "Operations: document indexing, data ops, reconciliations, order exceptions",
  "CX/Support: chat, email, voice (coverage grids; macros/knowledge tuned)",
  "Compliance: KYC/KYB support, QA sampling, evidence packaging",
  "Content Ops: catalog/PDP, docs, localization QA, UGC moderation",
  "Finance & Accounting: AP/AR, close support, billing/revops assistants"
];
const qa: Bullet[] = [
  "AQL-based sampling with defect classes and calibrated reviewers",
  "Shadow  solo  peer-review ramps; playbooks with checklists",
  "Weekly calibration and drift checks; trend dashboards",
  "Evidence tiles linking transactions to checks and outcomes",
  "Change control for SOPs; training records tied to versions"
];
const onboarding: Bullet[] = [
  "Intake: role scorecards, coverage grids, handoff artifacts",
  "Access: least-privilege/JML workflow and periodic reviews",
  "Pilot: 2-4 week plan with success thresholds and rollback",
  "Steady state: cadence of WBR/MBR and continuous improvement",
  "Exit/scale-down plan: knowledge capture and asset return"
];
const kpis: Bullet[] = [
  "Time-to-fill, start rate, ramp-to-productivity",
  "Throughput/quality/reliability SLAs (by queue/type)",
  "First Pass Yield and Rework %",
  "Attendance/adherence and coverage reliability",
  "Stakeholder CSAT and escalation rate"
];
export default function StaffingServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Staffing Services</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            On-demand talent for operations, CX, compliance, content, and finance. Start fast with playbooks, QA,
            and evidence-linked dashboards. Scale up or down without drama.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#models">Staffing Models</a>
            <a className="btn-outline" href="#how">How We Onboard</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
      {/* WHAT WE COVER */}
      <section className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h2 className="font-semibold">Where We Help</h2>
          <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
            {coverage.map(c => <li key={c}>{c}</li>)}
          </ul>
          <div className="mt-4 flex gap-3">
            <a className="btn-outline" href="/industries/healthcare-rcm">Healthcare RCM</a>
            <a className="btn-outline" href="/industries/banking-financial-services">Banking</a>
            <a className="btn-outline" href="/industries/retail-ecommerce">Retail</a>
          </div>
        </article>
        <article className="card">
          <h2 className="font-semibold">Staffing Models</h2>
          <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5" id="models">
            {models.map(m => <li key={m}>{m}</li>)}
          </ul>
          <div className="mt-4">
            <a className="btn-outline" href="/employers/compare-models">Compare to Outcomes &amp; Consulting</a>
          </div>
        </article>
      </section>
      {/* QUALITY SYSTEM */}
      <section className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-2 gap-10">
          <article className="card">
            <h2 className="font-semibold">Quality &amp; Controls</h2>
            <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
              {qa.map(q => <li key={q}>{q}</li>)}
            </ul>
            <div className="mt-4 flex gap-3">
              <a className="btn-outline" href="/trust">Trust Center</a>
              <a className="btn-outline" href="/security/incident-response">Incident Response</a>
              <a className="btn-outline" href="/security/sub-processors">Sub-Processors</a>
            </div>
          </article>
          <article className="card" id="how">
            <h2 className="font-semibold">Onboarding &amp; Pilot</h2>
            <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
              {onboarding.map(o => <li key={o}>{o}</li>)}
            </ul>
            <div className="mt-4">
              <a className="btn-outline" href="/employers/onboarding">See Onboarding</a>
            </div>
          </article>
        </div>
      </section>
      {/* KPIs & ROLES */}
      <section className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h2 className="font-semibold">KPIs We Track</h2>
          <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
            {kpis.map(k => <li key={k}>{k}</li>)}
          </ul>
        </article>
        <article className="card">
          <h2 className="font-semibold">Role Archetypes</h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-3">
            <div className="p-4 rounded-2xl border">
              <div className="text-xs text-slate-500">Ops</div>
              <div className="font-semibold mt-1">Data &amp; Docs</div>
              <p className="muted text-sm mt-1">Indexing, validation, entity linking, reconciliations.</p>
            </div>
            <div className="p-4 rounded-2xl border">
              <div className="text-xs text-slate-500">CX</div>
              <div className="font-semibold mt-1">Support</div>
              <p className="muted text-sm mt-1">Chat/email/voice with macros and knowledge tuning.</p>
            </div>
            <div className="p-4 rounded-2xl border">
              <div className="text-xs text-slate-500">Controls</div>
              <div className="font-semibold mt-1">QA &amp; Compliance</div>
              <p className="muted text-sm mt-1">Sampling, calibration, and evidence packaging.</p>
            </div>
            <div className="p-4 rounded-2xl border">
              <div className="text-xs text-slate-500">Finance</div>
              <div className="font-semibold mt-1">F&amp;A Ops</div>
              <p className="muted text-sm mt-1">AP/AR, billing exceptions, collections assists.</p>
            </div>
          </div>
        </article>
      </section>
      {/* PROGRAM SHAPES */}
      <section className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-3 gap-6">
          <article className="card">
            <div className="text-xs text-slate-500">Engagement</div>
            <div className="text-xl font-semibold mt-1">Staff Augmentation</div>
            <p className="muted text-sm mt-2">You run the queue; we supply talent, QA sampling, and playbooks.</p>
            <a className="btn-outline mt-3" href="/employers">Explore</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Engagement</div>
            <div className="text-xl font-semibold mt-1">Pods / Squads</div>
            <p className="muted text-sm mt-2">Lead + cross-trained associates; surge buffers; evidence dashboards.</p>
            <a className="btn-outline mt-3" href="/employers/compare-models">Compare</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Path</div>
            <div className="text-xl font-semibold mt-1">Temp-to-Hire</div>
            <p className="muted text-sm mt-2">Try before you hire with calibration checkpoints and scorecards.</p>
            <a className="btn-outline mt-3" href="/careers">Open Roles</a>
          </article>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Start in weeks, not months</h2>
            <p className="text-slate-700 mt-1">Well propose a pilot with staffing model, QA, and success thresholds.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/rfp">Start an RFP</a>
            <a className="btn-primary" href="/contact">Talk to Staffing Lead</a>
          </div>
        </div>
      </section>
    </main>
  );
}

