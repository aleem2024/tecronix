import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Investors - Overview, Metrics & Governance | Tecronix",
  description:
    "Business overview for prospective investors: model, go-to-market, sample metrics, governance, and contact."
};
type Bullet = string;
const highlights: Bullet[] = [
  "US-first staffing & managed services across CX, back office, and regulated operations",
  "Outcome-based programs with SLAs, QA (AQL/defect classes), and dashboards",
  "Industry focus: Healthcare RCM, BFSI, Retail/eComm, Telecom/Media, Manufacturing, Utilities",
  "Hybrid delivery (onshore/nearshore) and continuity planning sized to forecast error"
];
const model: Bullet[] = [
  "Staffing: hourly/monthly capacity; pod/lead options; QA sampling available",
  "Managed Services: outcome pricing (per case/pack) with SLA incentives; dashboards included",
  "Consulting: short diagnostics to design SOP/QA/coverage and pilot plan",
  "Pathways: staff now  outcomes later; managed QA lanes paired with client production"
];
const gtm: Bullet[] = [
  "Direct sales with founder support; RFP motions for regulated buyers",
  "Land with diagnostic or pilot; expand via lanes (QA, appeals, exceptions)",
  "Referenceable case studies and playbooks by industry",
  "Partnerships with tooling vendors; compliance-first diligence"
];
const sampleMetrics: Bullet[] = [
  "Logo acquisition: pilots with 8-12 week success criteria",
  "Unit economics: contribution margin tracked by lane and site",
  "SLA attainment: outcome programs with 95%+ adherence targets",
  "Churn mitigation via calibration cadence and change control"
];
const governance: Bullet[] = [
  "Board with independent seat; quarterly audit/readout cadence",
  "Security/privacy oversight with sub-processor register and DPAs/BAAs",
  "Change control on SOPs/training; incident response SLAs",
  "Financial controls: revenue recognition by model; collections risk review"
];
const faqs = [
  { q: "What is the capital intensity?", a: "Low capex; working capital mainly driven by receivables. Outcome packs can improve cash timing." },
  { q: "What are key risks?", a: "Concentration in early phases, policy/version changes in regulated work, and seasonality; mitigated with diversification and surge buffers." },
  { q: "Where is delivery?", a: "US-led with nearshore options. Data residency honored per client; least-privilege access and JML controls." },
  { q: "How do you price?", a: "Capacity (staffing) or outcomes (managed). Pilots de-risk scope; dashboards/evidence included for outcomes." },
  { q: "Whats the roadmap?", a: "Deeper managed offerings in BFSI/RCM, QA-as-a-service, and standardized playbooks for peak seasons and regulated audits." }
];
export default function InvestorsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Investors</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            A durable operations platform: staffing for speed, outcomes for accountability, and consulting for clarity.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#overview">Overview</a>
            <a className="btn-outline" href="#metrics">Metrics</a>
            <a className="btn-primary" href="#contact">Investor Contact</a>
          </div>
        </div>
      </section>
      {/* OVERVIEW */}
      <section id="overview" className="container py-12 grid lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2 card">
          <h2 className="font-semibold">Highlights</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {highlights.map(h => <li key={h}>{h}</li>)}
          </ul>
          <h2 className="font-semibold mt-8">Business Model</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {model.map(m => <li key={m}>{m}</li>)}
          </ul>
          <h2 className="font-semibold mt-8">Go-to-Market</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {gtm.map(g => <li key={g}>{g}</li>)}
          </ul>
        </article>
        <aside className="card">
          <h3 className="font-semibold">Documents</h3>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li><a className="underline" href="/docs/press-factsheet.pdf" download>Company Factsheet (PDF)</a></li>
            <li><a className="underline" href="/docs/soc-brief.pdf" download>Security &amp; Controls Brief (PDF)</a></li>
            <li><a className="underline" href="/docs/brand-assets.zip" download>Brand Assets (ZIP)</a></li>
          </ul>
          <div className="mt-4 grid gap-3">
            <a className="btn-outline" href="/case-studies">Case Studies</a>
            <a className="btn-outline" href="/trust">Trust Center</a>
            <a className="btn-outline" href="/employers/pricing">Pricing Approaches</a>
          </div>
        </aside>
      </section>
      {/* METRICS & GOVERNANCE */}
      <section id="metrics" className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-2 gap-10">
          <article className="card">
            <h2 className="font-semibold">Sample Operating Metrics</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              {sampleMetrics.map(s => <li key={s}>{s}</li>)}
            </ul>
            <p className="muted text-sm mt-3">
              Metric definitions travel with dashboards; evidence tiles link to samples for audits and reviews.
            </p>
          </article>
          <article className="card">
            <h2 className="font-semibold">Governance</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              {governance.map(g => <li key={g}>{g}</li>)}
            </ul>
            <div className="mt-4 flex gap-3">
              <a className="btn-outline" href="/security/sub-processors">Sub-Processors</a>
              <a className="btn-outline" href="/security/incident-response">Incident Response</a>
            </div>
          </article>
        </div>
      </section>
      {/* FAQ */}
      <section className="container py-12">
        <h2 className="font-semibold">FAQs</h2>
        <div className="grid lg:grid-cols-2 gap-6 mt-4">
          {faqs.map(f => (
            <article key={f.q} className="p-4 rounded-2xl border">
              <div className="font-medium">{f.q}</div>
              <p className="muted text-sm mt-1">{f.a}</p>
            </article>
          ))}
        </div>
      </section>
      {/* CONTACT */}
      <section id="contact">
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Investor Contact</h2>
            <p className="text-slate-700 mt-1">
              Email <a className="underline" href="mailto:investors@tecronix.com">investors@tecronix.com</a> for materials or to schedule time.
            </p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/press">Press</a>
            <a className="btn-primary" href="/contact">General Contact</a>
          </div>
        </div>
      </section>
    </main>
  );
}


