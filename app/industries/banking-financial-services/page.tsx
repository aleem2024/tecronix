import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Banking & Financial Services (BFSI) | Tecronix",
  description:
    "Staffing and managed services for disputes, fraud/KYC, card ops, lending servicing, and collections-anchored by SLAs, QA (AQL/defect classes), and evidence-linked dashboards."
};
type Bullet = string;
const painPoints: Bullet[] = [
  "Dispute win-rate and TAT instability; inconsistent evidence packs",
  "KYC/KYB refresh backlogs; dual-review rules unclear for high-risk",
  "Card ops exceptions (chargebacks, fee reversals, adjustments) piling up",
  "Servicing spikes during promos/outages; callback loops, DSAT",
  "Collections QA variability; weak audit trail for hardship programs",
  "Fragmented dashboards; audit asks slow due to missing evidence links"
];
const rolesWeStaff: Bullet[] = [
  "Disputes Analysts & QA Reviewers (Reg E/Z), Chargeback Ops",
  "KYC/KYB Analysts, Sanctions/Adverse Media Support, QC",
  "Card Ops Associates: adjustments, fee reversals, reconciliations",
  "Servicing: chat/voice/email, back-office exceptions, social care",
  "Collections & Hardship Program Assist, Payment Arrangement Desk",
  "Ops Analysts: dashboard wiring, report prep, evidence assembly"
];
const outcomes: Bullet[] = [
  "Disputes outcome SLAs (TAT/win-rate) with evidence tiles & AQL QA",
  "KYC refresh lanes with dual-review for high-risk, aging controls",
  "Exception desks with p90 cycle-time SLAs and accuracy gates",
  "Coverage grids to hold ASA/FCR/CSAT through spikes & outages",
  "Collections QA with calibrated defect classes and regulator-ready evidence",
  "Dashboards with definitions; drill paths to sample evidence"
];
const tools: Bullet[] = [
  "Core/Issuer: FIS/Fiserv/TSYS, card network portals",
  "KYC/KYB: ComplyAdvantage, Middesk, Alloy, in-house consoles",
  "Ticketing/CRM: Salesforce, Zendesk, ServiceNow",
  "Telephony/WFM/QA: NICE/inContact, Genesys, Five9; QC suites",
  "BI & Storage: Looker/Power BI/Tableau; SharePoint/Confluence for evidence",
  "Collections: industry dialers/CRM; payment arrangement tooling"
];
const compliance: Bullet[] = [
  "Least-privilege access, periodic reviews, JML controls",
  "AQL QA with defect classes mapped to policy & network bulletins",
  "Audit trails with evidence tiles and retention schedules",
  "Change control for policy/version updates; training records",
  "Incident Response with severity matrix & comms SLAs"
];
const kpis: Bullet[] = [
  "Dispute win-rate; p50/p90 TAT; defect mix; rework %",
  "KYC completion %; aging buckets; FP/FN reviewer analysis",
  "Exception cycle-time; accuracy rate; backlog aging",
  "ASA/AHT/FCR/CSAT; callback rate; deflection %",
  "Collections roll rates; promise-kept; QA pass rate",
  "Audit ask turnaround; evidence completeness score"
];
export default function BfsiPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Banking &amp; Financial Services</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            From disputes and KYC to servicing and collections, we deliver calibrated teams or outcome SLAs with QA and evidence-so audits move fast and customers stay put.
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
              <a className="btn-outline" href="/case-studies/bfs-disputes-sla-turnaround">Disputes Case Study</a>
              <a className="btn-outline" href="/employers/compare-models">Compare Models</a>
            </div>
          </article>
          <article className="card">
            <h3 className="font-semibold">Controls &amp; Compliance</h3>
            <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
              {compliance.map(c => <li key={c}>{c}</li>)}
            </ul>
            <div className="mt-4 flex gap-3">
              <a className="btn-outline" href="/trust">Trust Center</a>
              <a className="btn-outline" href="/security/sub-processors">Sub-Processors</a>
              <a className="btn-outline" href="/security/incident-response">Incident Response</a>
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
            <p className="muted text-sm mt-2">Disputes, KYC, ops exceptions, and servicing desks with QA sampling.</p>
            <a className="btn-outline mt-3" href="/services/staffing/staff-augmentation">Explore</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Managed Services</div>
            <p className="muted text-sm mt-2">Outcome SLAs (win-rate, TAT, accuracy, ASA/FCR) with dashboards.</p>
            <a className="btn-outline mt-3" href="/services/managed-services">Compare</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Consulting</div>
            <p className="muted text-sm mt-2">Diagnostics to design evidence tiles, QA variants, and surge buffers.</p>
            <a className="btn-outline mt-3" href="/services/consulting">Diagnostics</a>
          </article>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Raise win-rate. Reduce risk.</h2>
            <p className="text-slate-700 mt-1">Well propose staffing or outcome SLAs for disputes, KYC, and operations-backed by evidence.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/rfp">Start an RFP</a>
            <a className="btn-primary" href="/contact">Talk to BFSI Lead</a>
          </div>
        </div>
      </section>
    </main>
  );
}

