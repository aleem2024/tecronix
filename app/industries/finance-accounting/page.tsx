import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Finance & Accounting | Tecronix",
  description:
    "Staffing and managed services for AP, AR, GL close, reconciliations, revenue ops, and audit support-anchored by SLAs, QA, controls, and dashboards."
};
type Bullet = string;
const painPoints: Bullet[] = [
  "Month-end close slips; manual reconciliations and late flux analysis",
  "AP invoice backlog; 2/10 net terms missed; duplicate/overpay leakage",
  "AR cash application delays; unapplied cash and lockbox mismatches",
  "Revenue ops backlog (billings, credits, usage) and audit readiness gaps",
  "Vendor master risk (duplicates, sanctions, bank changes) with weak controls",
  "Fragmented BI; no single source of truth for close status and KPIs"
];
const rolesWeStaff: Bullet[] = [
  "AP processors (3-way match, PO/non-PO), vendor master, T&E audit",
  "AR cash application, collections desk, credit & limits support",
  "GL accountants, intercompany, fixed assets, accruals",
  "Reconciliations (bank, sub-ledger), flux analysis support",
  "Revenue ops (invoicing, usage validation, credits/rebills)",
  "SOX/controls support, audit PBC assembly, policy doc updates",
  "Finance analysts: BI wiring, metric definitions, evidence packs"
];
const outcomes: Bullet[] = [
  "Close calendar attainment  target with on-time reconciliations",
  "AP cycle-time , early pay capture , duplicate/overpay detection",
  "AR DSO , unapplied cash aging ; clean lockbox and remittance flow",
  "Revenue accuracy & timeliness SLAs; backlog burn-down",
  "SOX control adherence with sample evidence and change control",
  "Executive dashboards for close status, cash, and leakage"
];
const tools: Bullet[] = [
  "ERPs: Oracle, SAP, NetSuite, Microsoft Dynamics",
  "AP/AR: Coupa, Ariba, Tipalti, Bill.com, HighRadius, BlackLine",
  "Banking/Lockbox portals; treasury workstations",
  "Revenue: Zuora, Chargebee, Stripe Billing, custom usage pipelines",
  "Close & Recs: BlackLine, FloQast; ticketing in ServiceNow/Jira",
  "BI & Docs: Power BI/Tableau/Looker; SharePoint/Confluence evidence"
];
const compliance: Bullet[] = [
  "Least-privilege access; vendor master changes with dual controls",
  "Segregation of duties mapped to control matrix",
  "SOX walkthroughs; sampling with AQL and defect taxonomy",
  "Change control on chart-of-accounts, policies, and rate plans",
  "Audit PBC tracker with owners and due dates"
];
const kpis: Bullet[] = [
  "Close day attainment; % reconciliations on time; open items aging",
  "AP invoice cycle-time; 3-way match rate; duplicates caught; early pay %",
  "AR DSO; unapplied cash aging; promise-kept collections",
  "Revenue timeliness & accuracy; credits/rebills rate",
  "Control exceptions; audit PBC on-time rate; evidence completeness",
  "Leakage recovered (AP/AR/freight); BI definition adherence"
];
export default function FinanceAccountingPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Finance &amp; Accounting</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Close on time, protect cash, and pass audits-with staffing or outcome SLAs, QA, and evidence-linked dashboards.
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
            <p className="muted text-sm mt-2">AP/AR/GL, reconciliations, and revenue ops with QA sampling and control checklists.</p>
            <a className="btn-outline mt-3" href="/services/staffing/staff-augmentation">Explore</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Managed Services</div>
            <p className="muted text-sm mt-2">Outcome SLAs (close day, DSO, leakage, timeliness) with dashboards and evidence.</p>
            <a className="btn-outline mt-3" href="/services/managed-services">Compare</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Consulting</div>
            <p className="muted text-sm mt-2">Diagnostics to design close calendars, control matrices, and BI definitions.</p>
            <a className="btn-outline mt-3" href="/services/consulting">Diagnostics</a>
          </article>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Close faster. Protect cash.</h2>
            <p className="text-slate-700 mt-1">Well propose staffing or outcome SLAs for AP, AR, GL, and revenue ops-backed by QA and controls.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/rfp">Start an RFP</a>
            <a className="btn-primary" href="/contact">Talk to F&A Lead</a>
          </div>
        </div>
      </section>
    </main>
  );
}

