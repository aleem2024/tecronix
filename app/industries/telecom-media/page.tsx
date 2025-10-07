import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Telecom & Media | Tecronix",
  description:
    "Staffing and managed services for provisioning, billing, credits/adjustments, network assurance, content moderation, and partner ops-anchored by SLAs, QA, and dashboards."
};
type Bullet = string;
const painPoints: Bullet[] = [
  "Provisioning fallout and order jeopardy; install/activation delays",
  "Billing disputes; credits/adjustments leakage and callbacks",
  "Assurance tickets aging (trouble tickets, truck rolls, MTTR)",
  "Content moderation/compliance spikes; variant drift by policy",
  "Partner/affiliate ops: spiffs, clawbacks, reconciliation gaps",
  "Fragmented dashboards; metric definitions drift across teams"
];
const rolesWeStaff: Bullet[] = [
  "Order Entry/Provisioning, Jeopardy Desk, Dispatch Scheduling",
  "Billing Support, Refunds/Credits, Adjustments QA",
  "Assurance/Ticketing (NOC L1), Escalations/Callbacks Desk",
  "Content Moderation (policy variants, quality reviewers)",
  "Partner Ops: commissions/spiffs reconciliation, dispute desk",
  "WFM & QA Analysts, Knowledge Authors, Ops Reporting"
];
const outcomes: Bullet[] = [
  "Provisioning fallout burn-down with p90 install/activation SLA",
  "Billing adjustment accuracy  and callbacks  via evidence packs",
  "Assurance MTTR  with triage SOPs and exception playbooks",
  "Policy-aligned moderation with AQL QA and calibration cadence",
  "Partner reconciliation timeliness SLAs; clawback leakage ",
  "Dashboards with definitions; evidence-linked samples for audits"
];
const tools: Bullet[] = [
  "Order/Provisioning: Amdocs, NetCracker, Oracle BRM, custom OSS",
  "Assurance/Ticketing: Remedy, ServiceNow, Jira, proprietary NMS",
  "Billing/CRM: Salesforce, Zuora, Oracle BRM; payment gateways",
  "Moderation/Trust & Safety consoles; internal decision tools",
  "Partner/Channel: Impact, TUNE, custom commission engines",
  "BI & Docs: Power BI/Tableau/Looker; SharePoint/Confluence evidence"
];
const compliance: Bullet[] = [
  "Least-privilege access, JML, periodic reviews",
  "AQL QA with defect classes tied to tariff/policy/content rules",
  "Evidence tiles for credits/adjustments and moderation actions",
  "Change control for policy/version; training attestations",
  "Incident Response SLAs; continuity for launch/peak periods"
];
const kpis: Bullet[] = [
  "Install/activation p50/p90; fallout rate; jeopardy saves",
  "Billing adjustment accuracy; refund DSAT; callback rate",
  "MTTR by ticket class; repeat ticket rate; truck roll avoid %",
  "Moderation accuracy; FP/FN reviewer analysis; appeal rate",
  "Partner reconciliation timeliness; clawback leakage %",
  "Definition adherence; audit ask turnaround"
];
export default function TelecomMediaPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Telecom &amp; Media</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            From provisioning and billing to assurance, moderation, and partner ops-we stabilize operations with staffing or outcome SLAs, QA, and dashboards.
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
            <p className="muted text-sm mt-2">Provisioning, billing support, assurance L1, moderation, and partner ops with QA sampling.</p>
            <a className="btn-outline mt-3" href="/services/staffing/staff-augmentation">Explore</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Managed Services</div>
            <p className="muted text-sm mt-2">Outcome SLAs (activation TAT, MTTR, accuracy) with dashboards and evidence.</p>
            <a className="btn-outline mt-3" href="/services/managed-services">Compare</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Consulting</div>
            <p className="muted text-sm mt-2">Diagnostics to design jeopardy playbooks, MTTR improvements, and moderation variants.</p>
            <a className="btn-outline mt-3" href="/services/consulting">Diagnostics</a>
          </article>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Keep activations on-time. Cut callbacks.</h2>
            <p className="text-slate-700 mt-1">Well propose staffing or outcome SLAs for provisioning, billing, assurance, and moderation.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/rfp">Start an RFP</a>
            <a className="btn-primary" href="/contact">Talk to Telecom/Media Lead</a>
          </div>
        </div>
      </section>
    </main>
  );
}

