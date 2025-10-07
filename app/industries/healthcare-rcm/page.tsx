import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Healthcare - Revenue Cycle Management (RCM) | Tecronix",
  description:
    "Staffing and managed services for patient access, charge capture, coding, AR follow-up, denials/appeals, and payment posting-anchored by SLAs, QA, controls, and dashboards."
};
type Bullet = string;
const painPoints: Bullet[] = [
  "Front-end eligibility & authorization errors creating avoidable denials",
  "Charge capture and coding backlogs; DRG/HCC accuracy risk",
  "Payment posting delays; unapplied/credit balances aging",
  "AR follow-up inefficiency by payer class; appeal kits inconsistent",
  "Prior-auth and medical necessity requirements changing by payer",
  "Fragmented dashboards; no single source for denial taxonomy & trends"
];
const rolesWeStaff: Bullet[] = [
  "Patient Access: eligibility, benefits, pre-auth, scheduling",
  "Charge Entry & Charge Capture QA; Medical Records indexing",
  "Coding: ProFee, Facility, HCC, HEDIS abstractions (per scope)",
  "Payment Posting & Cash App; credit balance resolution",
  "AR Follow-up by payer; Denials/Appeals specialists",
  "QA auditors, Trainers, WFM & BI/Reporting analysts"
];
const outcomes: Bullet[] = [
  "Clean claim rate ; avoidable denials  via front-end QA & checklists",
  "Coding accuracy AQL  target; backlog burn-down with cycle-time SLAs",
  "Cash acceleration: unapplied/credit balances aging ",
  "AR p90 aging ; overturn % on appeals  with standard evidence kits",
  "Denial taxonomy & trends visible with drill-to-evidence",
  "Audit-ready artifacts aligned to payer/regulatory requirements"
];
const tools: Bullet[] = [
  "EHR/PM: Epic Resolute, Cerner/Oracle, Meditech, NextGen, Athena",
  "Clearinghouses & Portals: Availity, Change Healthcare*, payer portals (*replace if needed)",
  "Coding: 3M, TruCode, encoder tools; CAC where applicable",
  "WFM/QA/Ticketing: ServiceNow/Jira; internal QA consoles",
  "BI & Docs: Power BI/Tableau; SharePoint/Confluence evidence"
];
const compliance: Bullet[] = [
  "PHI handling with least-privilege RBAC; JML & quarterly reviews",
  "BAA + policy alignment; payer-specific evidence requirements",
  "AQL sampling per lane; dual-review for high-risk DRGs/HCCs",
  "Change control for payer rules, LCD/NCD, and coding updates",
  "Audit trail: who/when/what for claim edits and appeals"
];
const kpis: Bullet[] = [
  "Clean claim rate; first-pass resolution %",
  "DNFB days; coding accuracy AQL; coder productivity",
  "Unapplied cash aging; credit balance cycle-time",
  "AR aging (p50/p90) by payer; denial overturn %",
  "Top denial reasons; avoidable vs. unavoidable mix",
  "Audit ask turnaround; definition adherence"
];
export default function HealthcareRcmPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Healthcare - Revenue Cycle Management</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            From patient access and coding to posting, AR follow-up, and appeals-stabilize RCM with staffing or outcome SLAs,
            QA, controls, and evidence-linked dashboards.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#problems">Problems We Solve</a>
            <a className="btn-outline" href="#capabilities">Capabilities</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
      {/* PROBLEMS & ROLES */}
      <section id="problems" className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <div className="font-semibold">Typical Pain Points</div>
          <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
            {painPoints.map(p => <li key={p}>{p}</li>)}
          </ul>
        </article>
        <article className="card">
          <div className="font-semibold">Roles We Staff</div>
          <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
            {rolesWeStaff.map(r => <li key={r}>{r}</li>)}
          </ul>
          <div className="mt-4 flex gap-3">
            <a className="btn-outline" href="/services/staffing/staff-augmentation">Staffing</a>
            <a className="btn-outline" href="/services/managed-services">Managed Services</a>
          </div>
        </article>
      </section>
      {/* OUTCOMES & CONTROLS */}
      <section id="capabilities" className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-2 gap-10">
          <article className="card">
            <h2 className="font-semibold">Outcomes &amp; Examples</h2>
            <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
              {outcomes.map(o => <li key={o}>{o}</li>)}
            </ul>
            <div className="mt-4 flex gap-3">
              <a className="btn-outline" href="/case-studies">Case Studies</a>
              <a className="btn-primary" href="/employers/compare-models">Compare Models</a>
            </div>
          </article>
          <article className="card">
            <h3 className="font-semibold">Controls &amp; Compliance</h3>
            <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
              {compliance.map(c => <li key={c}>{c}</li>)}
            </ul>
            <div className="mt-4 flex gap-3">
              <a className="btn-outline" href="/trust">Trust Center</a>
              <a className="btn-outline" href="/security/incident-response">Incident Response</a>
              <a className="btn-outline" href="/security/sub-processors">Sub-Processors</a>
            </div>
          </article>
        </div>
      </section>
      {/* TOOLS & KPIs */}
      <section className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h2 className="font-semibold">Tooling Ecosystem</h2>
          <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
            {tools.map(t => <li key={t}>{t}</li>)}
          </ul>
        </article>
        <article className="card">
          <h2 className="font-semibold">KPIs We Track</h2>
          <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
            {kpis.map(k => <li key={k}>{k}</li>)}
          </ul>
        </article>
      </section>
      {/* PROGRAM SHAPES */}
      <section className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-3 gap-6">
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Staffing</div>
            <p className="muted text-sm mt-2">Patient access, coding, posting, AR follow-up with QA sampling.</p>
            <a className="btn-outline mt-3" href="/services/staffing/staff-augmentation">Explore</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Managed Services</div>
            <p className="muted text-sm mt-2">Outcome SLAs (clean claim %, overturn %, aging) with dashboards &amp; evidence.</p>
            <a className="btn-outline mt-3" href="/services/managed-services">Compare</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Consulting</div>
            <p className="muted text-sm mt-2">Diagnostics to design denial taxonomy, appeal kits, and close-the-loop dashboards.</p>
            <a className="btn-outline mt-3" href="/services/consulting">Diagnostics</a>
          </article>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Accelerate cash. Reduce denials.</h2>
            <p className="text-slate-700 mt-1">Well propose staffing or outcome SLAs for access, coding, posting, AR, and appeals-backed by QA and evidence.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/rfp">Start an RFP</a>
            <a className="btn-primary" href="/contact">Talk to RCM Lead</a>
          </div>
        </div>
      </section>
    </main>
  );
}

