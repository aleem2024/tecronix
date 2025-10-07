import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Technology & SaaS | Tecronix",
  description:
    "Staffing and managed services for software & SaaS companies-support, success, implementations, billing/revops, content ops, trust & safety, and GTM enablement with measurable SLAs."
};
type Bullet = string;
const painPoints: Bullet[] = [
  "Tier-1/2 support surges after releases; backlog aging and missed response/resolve SLAs",
  "Onboarding/implementation variability by CSM/PS lead; timelines slip and handoffs break",
  "Billing/revops exceptions (proration, credits, dunning) and AR follow-up fatigue",
  "Security questionnaires & vendor due diligence overload in sales cycles",
  "Content ops debt across docs/help center, release notes, and in-app guides",
  "Trust & Safety queues: abuse, spam, policy enforcement, and appeal handling"
];
const rolesWeStaff: Bullet[] = [
  "Support Associates (T1/T2), Technical Support Specialists, QA Reviewers",
  "Implementations/Onboarding Coordinators, PS Admins, Data Migration Analysts",
  "CS Ops, Renewals/Expansion Assist, Health-score Analysts",
  "RevOps/Billing Ops, Collections/AR, Order Desk, Deal Desk Assistants",
  "Content Ops: Docs writers, editors, localization/QA",
  "Trust & Safety Reviewers, Abuse Ops, Policy QA"
];
const outcomes: Bullet[] = [
  "Support coverage grid: 24x5 with <1h first response and <24h median time to resolve",
  "Playbooked implementations: handoff templates, checklist gates, and milestone burndown",
  "Revenue ops clean-up: dispute aging  30%, payment failure retries , DSO ",
  "Security diligence desk: standardized answers, artifacts, and SLAed turnaround",
  "Help center refresh: search success  and ticket deflection via guided flows",
  "Trust & Safety: calibrated sampling with defect classes and appeal SLA"
];
const tools: Bullet[] = [
  "Support/CX: Zendesk, Intercom, Freshdesk, Salesforce Service, Jira Service Mgmt",
  "CS/Success: Gainsight, Totango, Catalyst; Project/PSA: Asana, Monday, Smartsheet",
  "CRM/RevOps: Salesforce, HubSpot; Billing: Stripe, Chargebee, Zuora, Netsuite",
  "Docs/Content: Git-based docs, Confluence, Notion, MadCap Flare; Guides: Pendo, Appcues",
  "Analytics/Dashboards: Looker, Power BI, Tableau; Ticketing/Dev: Jira"
];
const compliance: Bullet[] = [
  "Least-privilege access with JML workflow and periodic reviews",
  "Evidence-linked QA sampling (AQL/defect classes); calibration sessions",
  "Versioned SOPs with change control; release-linked playbooks",
  "Privacy & DPA alignment; sub-processor registry and regional controls",
  "Incident Response with severity matrix, RTO/RPO notes, and client comms SLAs"
];
const kpis: Bullet[] = [
  "First Response / Time to Resolve by tier and channel",
  "Implementation lead time, milestone slippage, and on-time go-live %",
  "CSAT/PSAT, Escalation rate, Reopen %",
  "DSO, Billing exception rate, Collection success %",
  "Help center search success, ticket deflection, doc freshness",
  "Policy enforcement precision/recall; appeal cycle time"
];
export default function TechnologySaaSPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Technology &amp; SaaS</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Scale support, onboarding, revops, content, and trust &amp; safety with staffing or outcome SLAs.
            We bring playbooks, QA, and dashboards tuned to your release cadence.
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
            <p className="muted text-sm mt-2">Coverage grids for T1/T2 support, onboarding, and revops with QA sampling.</p>
            <a className="btn-outline mt-3" href="/employers">Explore</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Managed Services</div>
            <p className="muted text-sm mt-2">Outcome SLAs (response, resolve, go-live, DSO) with evidence dashboards.</p>
            <a className="btn-outline mt-3" href="/employers/compare-models">Compare</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Consulting</div>
            <p className="muted text-sm mt-2">Diagnostics to tune playbooks, queues, and health-score models.</p>
            <a className="btn-outline mt-3" href="/consulting/diagnostics">Diagnostics</a>
          </article>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Ship faster, stay reliable</h2>
            <p className="text-slate-700 mt-1">Well propose staffing or outcome SLAs aligned to your release cadence and customer SLAs.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/rfp">Start an RFP</a>
            <a className="btn-primary" href="/contact">Talk to Tech/SaaS Lead</a>
          </div>
        </div>
      </section>
    </main>
  );
}

