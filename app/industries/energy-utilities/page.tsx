import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Energy & Utilities (Power, Gas, Water) | Tecronix",
  description:
    "Staffing and managed services for customer ops, field dispatch, billing, credit/collections, outage communications, asset/records, and regulatory reporting with measurable SLAs."
};
type Bullet = string;
const painPoints: Bullet[] = [
  "Storm/outage surges overwhelm contact centers and digital support",
  "Field dispatch scheduling inefficiency; missed ETAs and repeat visits",
  "Billing exceptions (meter reads, estimated bills, TOU changes) and disputes",
  "Collections/credit workflows with compliance and hardship program handling",
  "Asset/records digitization and as-built documentation gaps",
  "Regulatory filings & reporting timeliness; audit evidence fragmentation"
];
const rolesWeStaff: Bullet[] = [
  "CX Agents (voice/chat), Outage Communications Desk, QA Monitors",
  "Dispatch/Scheduling Coordinators, Work Order Admins",
  "Billing Exceptions Analysts, Revenue Protection Assistants",
  "Credit/Collections Reps, Payment Arrangement Specialists",
  "Records Techs, GIS/As-built Admin, Document Controllers",
  "Regulatory Reporting Assistants, Data Ops & Evidence Stewards"
];
const outcomes: Bullet[] = [
  "Outage mode: ASA < 60s, deflection macros, and accurate ETR messaging",
  "Dispatch adherence: pre-visit checks and confirmations reduce repeat visits",
  "Billing desk: exception cycle time ; rebill accuracy  with QA sampling",
  "Collections: compliant scripts; promise-to-pay adherence and hardship routing",
  "Records program: 100% chain-of-custody and metadata QA for as-builts",
  "Regulatory reporting: on-time submissions with evidence linkage"
];
const tools: Bullet[] = [
  "CC&B/CIS: Oracle CC&B, SAP IS-U, Harris, Cayenta; MDM/AMI platforms",
  "WFM/Dispatch: ClickSoftware, ServiceNow FSM, Maximo; Mobile field apps",
  "CX: NICE/inContact, Genesys, Five9; QA/QM suites; Knowledge bases",
  "GIS/Records: Esri, AutoCAD workflows, document control systems",
  "BI/Reporting: Power BI, Tableau; ticketing: ServiceNow/Jira"
];
const compliance: Bullet[] = [
  "Least-privilege access and JML with periodic reviews",
  "QA sampling with AQL/defect classes; storm-mode variants",
  "Versioned SOPs; change control tied to season/storm calendars",
  "Privacy & regional rules; sub-processor registry",
  "Incident Response with severity matrix and notification SLAs"
];
const kpis: Bullet[] = [
  "ASA, AHT/ATT, FCR, CSAT (normal vs. outage modes)",
  "Dispatch adherence, repeat visit rate, appointment accuracy",
  "Billing exception cycle time; rebill accuracy; dispute resolution time",
  "Promise-to-pay kept %, roll-rate, compliant handling rate",
  "Records completeness, metadata QA, retrieval time",
  "Regulatory on-time %, evidence completeness score"
];
export default function EnergyUtilitiesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Energy &amp; Utilities</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Scale customer ops, dispatch, billing, credit, records, and regulatory reporting with staffing or outcome SLAs.
            We bring storm/outage playbooks, QA, and dashboards for predictable performance.
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
            <a className="btn-outline" href="/employers">For Employers</a>
            <a className="btn-outline" href="/job-seekers">For Job Seekers</a>
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
            <p className="muted text-sm mt-2">CX, billing, dispatch desks with QA sampling and storm-mode playbooks.</p>
            <a className="btn-outline mt-3" href="/services/staffing">Explore</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Managed Services</div>
            <p className="muted text-sm mt-2">Outcome SLAs (ASA/FCR, TAT, adherence, accuracy) with dashboards and evidence.</p>
            <a className="btn-outline mt-3" href="/services/managed-services">Compare</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Consulting</div>
            <p className="muted text-sm mt-2">Diagnostics to design outage playbooks, billing exception hubs, and QA.</p>
            <a className="btn-outline mt-3" href="/services/consulting">Diagnostics</a>
          </article>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Keep service steady-storm or shine</h2>
            <p className="text-slate-700 mt-1">Well propose staffing or outcome SLAs tuned for outages, peaks, and audits.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/rfp">Start an RFP</a>
            <a className="btn-primary" href="/contact">Talk to Utilities Lead</a>
          </div>
        </div>
      </section>
    </main>
  );
}

