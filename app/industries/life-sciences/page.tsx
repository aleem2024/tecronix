import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Life Sciences - Clinical Ops, eTMF QC, PV & RWE | Tecronix",
  description:
    "Staffing and managed services for eTMF QC, site support, safety case processing, medical information, data review, and real-world evidence - with SLAs, QA, and audit-ready evidence."
};
type Bullet = string;
const painPoints: Bullet[] = [
  "eTMF completeness and accuracy drift vs. DIA model; inspection risk",
  "Site document backlogs; query aging; protocol deviation follow-ups",
  "Safety case triage/processing surges; narrative quality variance",
  "MedInfo response consistency; content version drift across regions",
  "Data review listings exceptions; DPP & change control gaps",
  "Audit trail and evidence scattered across systems"
];
const rolesWeStaff: Bullet[] = [
  "eTMF QC associates & leads (DIA model alignment)",
  "Site startup & maintenance (SSU/SMU) coordinators",
  "Safety case processing (ICSR) and triage (PV) specialists",
  "Medical Information agents & quality reviewers",
  "Clinical data reviewers; query management; reconciliation",
  "QA auditors, trainers, WFM/analysts, knowledge authors"
];
const outcomes: Bullet[] = [
  "eTMF completeness  98% with accuracy AQL targets per zone/artifact",
  "Query aging p90 ; protocol deviation follow-ups within SLA",
  "PV case timeliness & quality ; narrative defects ",
  "MedInfo content adherence ; version and region controls aligned",
  "DPP adherence; change control & definitions embedded in dashboards",
  "Audit-ready evidence tiles and inspection packs"
];
const tools: Bullet[] = [
  "eTMF/CTMS: Veeva Vault eTMF/CTMS, Medidata, Oracle Siebel CTMS",
  "PV: Argus Safety, ARISg, Veeva Safety, case intake portals",
  "EDC/Data: Medidata Rave, Oracle InForm, REDCap; listings tools",
  "Knowledge/Docs: Veeva PromoMats, SharePoint/Confluence",
  "BI/Ticketing: Power BI/Tableau/Looker; ServiceNow/Jira"
];
const compliance: Bullet[] = [
  "DIA Reference Model alignment; SOP/policy version control",
  "AQL sampling plans; dual-review where risk justifies cost",
  "21 CFR Part 11/Annex 11 considerations; training attestations",
  "Inspection readiness: evidence tiles, audit trails, change logs"
];
const kpis: Bullet[] = [
  "eTMF completeness/accuracy, aging by artifact",
  "Query aging (p50/p90), reconciliation defects",
  "PV case cycle-time & quality; narrative defect rate",
  "MedInfo first-contact resolution & content adherence",
  "Definition adherence; audit ask turnaround"
];
export default function LifeSciencesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Life Sciences</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Clinical operations, eTMF QC, pharmacovigilance, Medical Information, and data review - stabilized with staffing or outcome SLAs, QA, and audit-ready evidence.
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
            <p className="muted text-sm mt-2">eTMF QC, site support, safety case triage, MedInfo, data review with QA sampling.</p>
            <a className="btn-outline mt-3" href="/services/staffing/staff-augmentation">Explore</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Managed Services</div>
            <p className="muted text-sm mt-2">Outcome SLAs (completeness, accuracy, timeliness) with dashboards and evidence.</p>
            <a className="btn-outline mt-3" href="/services/managed-services">Compare</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Consulting</div>
            <p className="muted text-sm mt-2">Diagnostics to design DIA-aligned QC plans, PV timeliness gates, and inspection packs.</p>
            <a className="btn-outline mt-3" href="/services/consulting">Diagnostics</a>
          </article>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Inspection-ready, every day.</h2>
            <p className="text-slate-700 mt-1">Well propose staffing or outcome SLAs for eTMF QC, site support, PV, MedInfo, and data review.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/rfp">Start an RFP</a>
            <a className="btn-primary" href="/contact">Talk to Life Sciences Lead</a>
          </div>
        </div>
      </section>
    </main>
  );
}

