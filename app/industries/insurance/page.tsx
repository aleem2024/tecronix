import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Insurance (P&amp;C, Life, Health) | Tecronix",
  description:
    "Staffing and managed services for underwriting, policy admin, claims, FNOL, subrogation, SIU, billing, reconciliations, and compliance. Stabilize SLAs and quality with evidence-linked QA."
};
type Bullet = string;
const painPoints: Bullet[] = [
  "FNOL surges after weather events; cycle time spikes and aging backlogs",
  "Claims leakage from inconsistent documentation and variable adjudication quality",
  "Underwriting support capacity constraints during renewal and catastrophe seasons",
  "Subrogation recovery delays; referral criteria inconsistently applied",
  "Provider/broker data quality issues (health/life), reconciliations and enrollment fixes",
  "Audit evidence scattered; QA sampling inconsistent across LOBs"
];
const rolesWeStaff: Bullet[] = [
  "FNOL & Claims Associates (P&C auto/home, commercial) - intake, triage, documentation",
  "Underwriting Assistants & Raters, Renewals Support, Policy Admin",
  "Subrogation Analysts, Recovery Specialists, SIU support (evidence prep)",
  "Provider Data & Enrollment Ops (health), Billing & Reconciliations",
  "Quality Reviewers (AQL calibration), Audit Prep & Controls Analysts",
  "Data Ops: Document indexing, correspondence, entity linking"
];
const outcomes: Bullet[] = [
  "Cat surge playbook: 48-72h backlog recovery with calibrated queues and cross-trained pods",
  "Adjudication QA: +7-12pp First Pass Yield via defect-class sampling and coaching loops",
  "Subrogation triage: +18-25% referral capture with criteria codified in SOPs",
  "Provider data fixes: 30% fewer downstream billing exceptions within 90 days",
  "Evidence tiles: audit-ready linkage between transactions, notes, and outcomes"
];
const compliance: Bullet[] = [
  "Least-privilege access with periodic reviews; JML workflow",
  "QA with AQL/defect classes and double-blind calibration where required",
  "Versioned SOPs and change control with owners/dates",
  "Privacy & data processing aligned to DPA; vendor/sub-processor registry",
  "Incident Response with severity matrix and client notification SLAs"
];
const tools: Bullet[] = [
  "Core/admin: Guidewire, Duck Creek, Sapiens, TIA, Majesco",
  "Claims/FNOL: CCC, Mitchell, Xactimate, custom portals",
  "Subro/SIU: ClaimIQ, industry recovery tools, case mgmt",
  "Health/Life: Facets, QNXT, Epic/EMR touchpoints (ops only), enrollment platforms",
  "Analytics/Dashboards: Power BI, Tableau, Looker; ticketing: Jira/ServiceNow"
];
const kpis: Bullet[] = [
  "Cycle Time (FNOL  adjudication), queue aging profile",
  "First Pass Yield (FPY), Rework %",
  "Leakage indicators, recovery rates (subrogation)",
  "SLA attainment (throughput/quality/reliability), MTTR for breaks/incidents",
  "Audit readiness: evidence completeness & linkage"
];
export default function InsuranceIndustryPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Insurance (P&amp;C, Life, Health)</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Flexible staffing and outcome programs across FNOL, claims, subrogation, underwriting support, policy admin,
            and provider/billing ops. We stabilize SLAs and quality with evidence-linked QA.
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
            <p className="muted text-sm mt-2">Rapid surge capacity with calibrated QA sampling and cross-trained pods.</p>
            <a className="btn-outline mt-3" href="/employers">Explore</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Managed Services</div>
            <p className="muted text-sm mt-2">Outcome SLAs, evidence-linked dashboards, and change control.</p>
            <a className="btn-outline mt-3" href="/employers/compare-models">Compare</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Consulting</div>
            <p className="muted text-sm mt-2">Time-boxed diagnostics to design surge playbooks and QA.</p>
            <a className="btn-outline mt-3" href="/consulting/diagnostics">Diagnostics</a>
          </article>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Be ready for the next surge</h2>
            <p className="text-slate-700 mt-1">Well propose a surge plan with staffing or outcomes, plus QA and evidence.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/rfp">Start an RFP</a>
            <a className="btn-primary" href="/contact">Talk to Insurance Lead</a>
          </div>
        </div>
      </section>
    </main>
  );
}

