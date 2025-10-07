import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Logistics & Supply Chain | Tecronix",
  description:
    "Staffing and managed services for order-to-delivery, carrier ops, claims, inventory control, trade compliance, and control towers-anchored by SLAs, QA, and dashboards."
};
type Bullet = string;
const painPoints: Bullet[] = [
  "ETA accuracy and promise-keep gaps driving WISMO and reships",
  "Carrier exceptions backlog (missed scans, damages, POD issues)",
  "Claims & recovery leakage; poor photo/evidence quality",
  "Inventory accuracy drift (cycle counts, ASN mismatches, shrink)",
  "Trade compliance & docs errors (HTS, COO, customs data)",
  "Fragmented tower view across WMS/TMS and 3PL portals"
];
const rolesWeStaff: Bullet[] = [
  "Order desk & exception handlers (missed scan, address fix, holds)",
  "Carrier ops (tendering, track/trace, appointment setting)",
  "Claims desk (OS&D), freight AP audit, overcharge recovery",
  "Inventory control (cycle counts, ASN/receipt reconciliation)",
  "Trade compliance coordinators (HTS, COO, entry docs QA)",
  "Control tower analysts, WFM, reporting & knowledge authors"
];
const outcomes: Bullet[] = [
  "Promise-keep  with proactive ETA updates and deflection",
  "Exception burn-down SLAs; fewer reships/credits",
  "Claims recovery  with better evidence and cycle-time",
  "Inventory accuracy ; shrink and write-offs ",
  "Customs/doc defects ; clearance delays ",
  "Single dashboard with drill-to-evidence across lanes"
];
const tools: Bullet[] = [
  "TMS: Oracle, MercuryGate, SAP TM, Blue Yonder, Project44/FourKites",
  "WMS: Manhattan, Blue Yonder, SAP EWM, HighJump/KÃ¶rber",
  "Carrier & 3PL portals: UPS/FedEx/DHL/LTL linehauls, customs brokers",
  "Docs & BI: SharePoint/Confluence evidence; Power BI/Tableau/Looker",
  "Quality & Ticketing: ServiceNow/Jira; photo/evidence repositories"
];
const compliance: Bullet[] = [
  "Evidence tiles for claims (photos, POD, notes, timestamps)",
  "AQL QA with defect classes tied to carrier & customer policies",
  "HTS/COO change control; broker document checklists",
  "Vendor scorecards and chargeback documentation"
];
const kpis: Bullet[] = [
  "Promise-keep %, ETA variance, WISMO deflection %",
  "Exception queue aging; p90 time-to-clear",
  "Claims recovery rate; cycle-time; evidence completeness",
  "Inventory accuracy; cycle count hits; shrink %",
  "Customs/doc defect rate; clearance delay hours",
  "Definition adherence; audit ask turnaround"
];
export default function LogisticsSupplyChainPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Logistics &amp; Supply Chain</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            From order-to-delivery and carrier ops to claims, inventory, and trade compliance-we stabilize networks with staffing or outcome SLAs, QA, and dashboards.
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
            <p className="muted text-sm mt-2">Exception desks, carrier ops, claims, inventory control with QA sampling.</p>
            <a className="btn-outline mt-3" href="/services/staffing/staff-augmentation">Explore</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Managed Services</div>
            <p className="muted text-sm mt-2">Outcome SLAs (promise-keep, recovery, accuracy) with dashboards and evidence.</p>
            <a className="btn-outline mt-3" href="/services/managed-services">Compare</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Consulting</div>
            <p className="muted text-sm mt-2">Diagnostics to design exception playbooks, claims kits, and tower dashboards.</p>
            <a className="btn-outline mt-3" href="/services/consulting">Diagnostics</a>
          </article>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Deliver on time. Recover leakage.</h2>
            <p className="text-slate-700 mt-1">Well propose staffing or outcome SLAs for exceptions, claims, inventory, and compliance.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/rfp">Start an RFP</a>
            <a className="btn-primary" href="/contact">Talk to Logistics Lead</a>
          </div>
        </div>
      </section>
    </main>
  );
}

