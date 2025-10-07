import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Case Study: Disputes SLA Turnaround & Win-Rate Lift (BFSI) | Tecronix",
  description:
    "Outcome desk for card disputes with AQL QA, evidence tiles, dual-review on high-risk, and dashboard definitions. Win-rate up, TAT stabilized, audit asks faster."
};
type Bullet = string;
const context: Bullet[] = [
  "Digital issuer with fast growth; Reg E/Z disputes rising 35% QoQ.",
  "Win-rate inconsistent; evidence packs varied by analyst and network rules.",
  "Aging burst during promos/outages; callback loops increased DSAT."
];
const approach: Bullet[] = [
  "Outcome desk with TAT SLA (p50/p90) and win-rate target per dispute class.",
  "Defect taxonomy mapped to policy/network bulletins; AQL QA with reviewer FP/FN tracking.",
  "Evidence tiles: merchant docs, cardholder affidavit, usage pattern, chargeback codes.",
  "Dual-review for high-risk classes; lightweight peer-check for routine disputes.",
  "Dashboards with definitions; drill-through to sample evidence for audits."
];
const playbooks: Bullet[] = [
  "Intake checklist by network code; affidavit completeness gates.",
  "Chargeback reason code tree; representment templates by network.",
  "Known-issue routing and callback suppression to stop loops.",
  "Aging burn-down lanes with p90 guardrails and exception paths."
];
const results: Bullet[] = [
  "Win-rate +9.4 pts in 90 days (mix-adjusted).",
  "p90 TAT stabilized within SLA; backlog aging reduced 41%.",
  "QA pass rate +15 pts; top three defect classes down materially.",
  "Audit ask turnaround cut from days to hours via evidence tiles."
];
const lessons: Bullet[] = [
  "Policy-aligned defect classes make coaching objective and fast.",
  "Dual-review only where risk justifies the cost; rotate to avoid fatigue.",
  "Definitions embedded in dashboards prevent metric drift.",
  "Callback suppression tied to known-issue banners reduces DSAT."
];
export default function CaseStudyBfsDisputes() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <p><a className="text-white/80 underline" href="/case-studies"> All case studies</a></p>
          <h1 className="max-w-5xl mt-2">Disputes SLA Turnaround &amp; Win-Rate Lift</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            An outcome desk with AQL QA, evidence tiles, and targeted dual-review stabilized TAT and lifted win-rate-
            while making audits faster.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm">Banking &amp; Financial Services</span>
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm">Managed Services</span>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
      {/* BODY */}
      <section className="container py-12 grid lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2 card">
          <h2 className="font-semibold">Context</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {context.map(c => <li key={c}>{c}</li>)}
          </ul>
          <h2 className="font-semibold mt-8">Approach</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {approach.map(a => <li key={a}>{a}</li>)}
          </ul>
          <h2 className="font-semibold mt-8">Playbooks</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {playbooks.map(p => <li key={p}>{p}</li>)}
          </ul>
          <h2 className="font-semibold mt-8">Measured Results</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {results.map(r => <li key={r}>{r}</li>)}
          </ul>
          <h2 className="font-semibold mt-8">Lessons Learned</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {lessons.map(l => <li key={l}>{l}</li>)}
          </ul>
        </article>
        <aside className="card">
          <h3 className="font-semibold">Engagement Snapshot</h3>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li><strong>Model:</strong> Managed Services (outcomes with SLAs)</li>
            <li><strong>Scope:</strong> Disputes intake  representment  audit evidence</li>
            <li><strong>QA:</strong> AQL with policy/network-aligned defect classes</li>
            <li><strong>Dashboards:</strong> TAT (p50/p90), win-rate, QA pass, defect mix</li>
          </ul>
          <div className="mt-4 grid gap-3">
            <a className="btn-outline" href="/industries/banking-financial-services">BFSI</a>
            <a className="btn-outline" href="/services/managed-services">Managed Services</a>
            <a className="btn-outline" href="/employers/compare-models">Compare Models</a>
          </div>
          <div className="mt-6 p-4 rounded-2xl bg-slate-50">
            <div className="font-semibold">Lift win-rate with evidence</div>
            <p className="muted text-sm mt-1">Well tailor defect classes, templates, and dual-review to your policy and networks.</p>
            <a className="btn-primary mt-3 inline-block" href="/rfp">Start an RFP</a>
          </div>
        </aside>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Ready to stabilize disputes?</h2>
            <p className="text-slate-700 mt-1">Get SLA-backed outcomes with QA and audit-ready evidence tiles.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/services/managed-services">Explore Outcomes</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
    </main>
  );
}

