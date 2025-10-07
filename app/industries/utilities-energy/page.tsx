import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Utilities & Energy | Tecronix",
  description:
    "Staffing and managed services for meter-to-cash, outage desks, compliance, renewables ops, and customer care-anchored by SLAs, QA, and dashboards."
};
type Bullet = string;
const painPoints: Bullet[] = [
  "Meter-to-cash errors: read exceptions, estimated bills, rebills",
  "Outage desk overload in storms; DSAT and regulatory risk",
  "Collections and hardship program QA gaps; regulator scrutiny",
  "Renewables program (solar/net-metering) backlogs and disputes",
  "Work order/call before you dig queues; permitting documentation errors",
  "Fragmented reporting; lag in regulator-facing dashboards"
];
const rolesWeStaff: Bullet[] = [
  "Customer Care (CX, voice/chat/email), Billing Exceptions Desk",
  "Meter Read/AMI Exception Desk, Rebill/Adjustment Processing",
  "Outage Desk (IVR/callbacks, social, proactive comms)",
  "Collections & Hardship Program Support, QA Reviewers",
  "Renewables Ops (solar/net-metering, EV charging program admin)",
  "Permitting/Utility Locate Documentation QA, Work Order Admin",
  "Ops Analysts: regulatory dashboard prep, evidence packs"
];
const outcomes: Bullet[] = [
  "Meter-to-cash SLA: rebill TAT, billing accuracy, call volume deflection",
  "Outage comms SLA: callbacks within x min; proactive notify coverage %",
  "Collections SLA: QA AQL  target; regulator evidence packs on time",
  "Renewables SLA: backlog burn-down; aging cycle-time SLAs",
  "Permit/work order SLA: completeness & approval rate ",
  "Dashboards: regulator-defined KPIs, evidence-linked metrics"
];
const tools: Bullet[] = [
  "CIS/Billing: SAP IS-U, Oracle CC&B, Hansen, legacy CIS",
  "AMI/Meter data: Itron, Landis+Gyr, Sensus, internal MDMS",
  "Outage/OMS: GE, Milsoft, OSIsoft PI, custom OMS consoles",
  "CRM: Salesforce, ServiceNow, Zendesk for CX + case intake",
  "Regulatory Reporting: BI (Power BI, Tableau) with evidence links",
  "Permitting/Locate: 811 portals, internal workflow tools"
];
const compliance: Bullet[] = [
  "Regulator-defined SLAs embedded in QA dashboards",
  "Defect taxonomy aligned to tariff/policy requirements",
  "Evidence tiles for regulator submissions (rebill, hardship, outage comms)",
  "Change control for tariff/policy/version updates",
  "Continuity playbooks for storm season and outage surges"
];
const kpis: Bullet[] = [
  "Billing accuracy; rebill %; meter read exception rate",
  "Outage comms timeliness; callback completion %",
  "Collections QA pass rate; hardship program compliance %",
  "Renewables backlog aging; SLA attainment; DSAT",
  "Permit/work order cycle-time; approval/reject rate",
  "Regulator dashboard submission timeliness & accuracy"
];
export default function UtilitiesEnergyPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Utilities &amp; Energy</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            From meter-to-cash to outages, renewables, and regulatory dashboards-we stabilize operations with staffing or outcome SLAs, QA, and audit-ready evidence.
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
            <p className="muted text-sm mt-2">Customer care, billing, outage desk, renewables, and permitting desks with QA sampling.</p>
            <a className="btn-outline mt-3" href="/services/staffing/staff-augmentation">Explore</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Managed Services</div>
            <p className="muted text-sm mt-2">Outcome SLAs (rebill accuracy, outage comms, backlog aging) with dashboards.</p>
            <a className="btn-outline mt-3" href="/services/managed-services">Compare</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Consulting</div>
            <p className="muted text-sm mt-2">Diagnostics to design tariff-aligned QA, outage surge buffers, and regulator dashboards.</p>
            <a className="btn-outline mt-3" href="/services/consulting">Diagnostics</a>
          </article>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Stabilize meter-to-cash &amp; outage desks</h2>
            <p className="text-slate-700 mt-1">Well propose staffing or outcome SLAs for billing, outages, renewables, and compliance-backed by QA and evidence.</p>
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

