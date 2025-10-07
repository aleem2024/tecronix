import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Government & Public Sector | Tecronix",
  description:
    "Staffing and managed services for state/local/federal programs-benefits admin, licensing & permits, contact centers, records modernization, grants, and inspections with measurable SLAs and compliance."
};
type Bullet = string;
const painPoints: Bullet[] = [
  "Application & case backlogs for benefits (SNAP, TANF, Medicaid) and unemployment",
  "Licensing/permits surges (business, trade, professional) with seasonal spikes",
  "Contact center peaks (disasters, policy changes) impacting ASA/FCR and citizen CSAT",
  "Legacy records digitization and metadata quality; FOIA/PIA turnaround delays",
  "Grant intake/compliance tracking; audit evidence fragmentation",
  "Inspections scheduling & routing inefficiencies; re-visits from documentation gaps"
];
const rolesWeStaff: Bullet[] = [
  "Eligibility Specialists, Case Techs, Adjudication Associates",
  "Contact Center Agents (voice/chat), Bilingual Associates, QA Monitors",
  "Licensing/Permit Clerks, Records Technicians, Imaging/Indexing Operators",
  "Grant Program Assistants, Compliance Analysts, Fiscal Techs (AP/AR)",
  "Scheduling/Dispatch Coordinators, Field Ops Admin, Data Entry",
  "Project Coordinators, SOP Writers, Change Control & Training Assistants"
];
const outcomes: Bullet[] = [
  "Backlog burn-down: calibrated triage  30-45% cycle time reduction within 60-90 days",
  "Citizen experience: ASA < 60s in peak windows; FCR via knowledge macros and QA",
  "Records program: 100% chain-of-custody with metadata checks and sampling AQL",
  "FOIA/PIA response desk: SLA-based queue with evidence packs and redaction QA",
  "Grants: on-time reporting with documentation linkage and exception review gates"
];
const controls: Bullet[] = [
  "Background checks and clearance-eligible resources as required by program",
  "Least-privilege access; joiner/mover/leaver with periodic reviews",
  "QA sampling with AQL/defect classes; calibration and audit trails",
  "Versioned SOPs; change control; training records tied to releases",
  "Privacy & security aligned to contract/DPA; incident response with notification SLAs"
];
const tools: Bullet[] = [
  "Case/Eligibility: state systems (eligibility/benefits), Salesforce, Dynamics 365",
  "Contact Center: NICE/inContact, Genesys, Five9; QA/QM suites; knowledge tools",
  "Records & Digitization: OnBase, Laserfiche, SharePoint, Kofax, OpenText",
  "Grant Mgmt: eCivis, Fluxx, Salesforce Grants; tracking & reporting portals",
  "Scheduling/Field: ServiceNow FSM, custom dispatch, GIS (Esri); BI: Power BI/Tableau"
];
const kpis: Bullet[] = [
  "Cycle time & backlog aging by case type; on-time rate",
  "ASA, AHT/ATT, FCR, CSAT during normal/peak modes",
  "QA pass rate by defect class; rework %",
  "FOIA/PIA on-time %, redaction accuracy, appeals",
  "Grant reporting timeliness, exception rate, evidence completeness"
];
export default function GovernmentPublicSectorPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Government &amp; Public Sector</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Capacity for benefits, licensing, records, grants, and contact centers with staffing or outcome SLAs.
            We bring SOPs, QA, dashboards, and audit-ready evidence.
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
            <p className="muted text-sm mt-2">Rapid capacity for intake, contact centers, and records with QA sampling.</p>
            <a className="btn-outline mt-3" href="/employers">Explore</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Managed Services</div>
            <p className="muted text-sm mt-2">Outcome SLAs (cycle time, ASA/FCR, on-time filings) with evidence dashboards.</p>
            <a className="btn-outline mt-3" href="/employers/compare-models">Compare</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Consulting</div>
            <p className="muted text-sm mt-2">Diagnostics to design surge playbooks, SOPs, QA, and training plans.</p>
            <a className="btn-outline mt-3" href="/consulting/diagnostics">Diagnostics</a>
          </article>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Serve citizens faster</h2>
            <p className="text-slate-700 mt-1">Well propose staffing or outcome SLAs with audit-ready evidence and compliance controls.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/rfp">Start an RFP</a>
            <a className="btn-primary" href="/contact">Talk to Public Sector Lead</a>
          </div>
        </div>
      </section>
    </main>
  );
}

