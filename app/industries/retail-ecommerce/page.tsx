import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Retail & eCommerce | Tecronix",
  description:
    "Staffing and managed services for CX, orders/refunds, catalog & content, fraud/chargebacks, marketplace compliance-anchored by SLAs, QA, and dashboards."
};
type Bullet = string;
const painPoints: Bullet[] = [
  "Refund/adjustment leakage and callbacks driving DSAT",
  "Catalog/content defects (attributes, images, taxonomy) causing returns",
  "Peak season surge planning; WISMO & promise-keep gaps",
  "Chargebacks/fraud disputes with low win-rate and poor evidence",
  "Marketplace policy violations and take-down risks",
  "Fragmented reporting; metric definition drift across teams"
];
const rolesWeStaff: Bullet[] = [
  "CX agents (voice/chat/email), Social response, WISMO desk",
  "Orders/refunds/returns desk; warranty & replacements",
  "Catalog ops, listing QA, content moderation for UGC/reviews",
  "Fraud/chargebacks analysts; evidence assembly; network rules",
  "Marketplace compliance & appeal desk (Amazon, eBay, etc.)",
  "QA reviewers, knowledge authors, WFM & reporting analysts"
];
const outcomes: Bullet[] = [
  "Refund/adjustment accuracy , callbacks  via policy-aligned macros",
  "Catalog defect rate ; return reasons tracked to attribute root cause",
  "Promise-keep  with proactive comms; WISMO deflection",
  "Chargeback win-rate  with network-aligned evidence kits",
  "Policy compliance ; takedown risk ; faster reinstatement",
  "Unified dashboards with drill-to-evidence tiles"
];
const tools: Bullet[] = [
  "Commerce: Shopify, Magento, BigCommerce, Salesforce Commerce",
  "CX/CRM: Zendesk, Salesforce Service, Kustomer",
  "Fraud/Payments: Stripe, Adyen, Riskified, Sift, Signifyd",
  "Marketplaces: Amazon Seller Central, eBay, Walmart, Etsy",
  "BI & Docs: Power BI/Tableau/Looker; SharePoint/Confluence evidence"
];
const compliance: Bullet[] = [
  "Defect taxonomy tied to policy/version with examples",
  "AQL sampling; calibration cadence; reviewer FP/FN analysis",
  "Evidence kits for disputes and marketplace appeals",
  "Change control for macros, policies, and content standards"
];
const kpis: Bullet[] = [
  "Refund accuracy; callback rate; DSAT",
  "Catalog defect rate; return reasons (attributed)",
  "Promise-keep; EDD variance; WISMO deflection %",
  "Chargeback win-rate; TAT; evidence completeness",
  "Marketplace violation rate; reinstatement cycle-time",
  "Definition adherence; audit ask turnaround"
];
export default function RetailEcomPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Retail &amp; eCommerce</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Protect margin and promise-keep-from CX and refunds to catalog, chargebacks, and marketplace compliance-with staffing or outcome SLAs, QA, and dashboards.
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
            <p className="muted text-sm mt-2">CX, refunds, catalog ops, and marketplace compliance with QA sampling.</p>
            <a className="btn-outline mt-3" href="/services/staffing/staff-augmentation">Explore</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Managed Services</div>
            <p className="muted text-sm mt-2">Outcome SLAs (accuracy, win-rate, deflection) with dashboards and evidence.</p>
            <a className="btn-outline mt-3" href="/services/managed-services">Compare</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Consulting</div>
            <p className="muted text-sm mt-2">Diagnostics to design refund playbooks, catalog QA, and chargeback kits.</p>
            <a className="btn-outline mt-3" href="/services/consulting">Diagnostics</a>
          </article>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Protect margin. Delight customers.</h2>
            <p className="text-slate-700 mt-1">Well propose staffing or outcome SLAs for CX, refunds, catalog, and chargebacks.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/rfp">Start an RFP</a>
            <a className="btn-primary" href="/contact">Talk to Retail Lead</a>
          </div>
        </div>
      </section>
    </main>
  );
}

