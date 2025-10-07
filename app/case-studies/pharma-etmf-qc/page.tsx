import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Case Study: eTMF QC - Inspection-Ready Completeness & Accuracy | Tecronix",
  description:
    "Outcome program for eTMF quality control: defect classes, checklist gates, dual-review on high-risk artifacts, and inspection-ready dashboards."
};
type Bullet = string;
const context: Bullet[] = [
  "Global sponsor with multi-country Phase II/III studies; CRO mix varied by region.",
  "eTMF completeness and QC accuracy were inconsistent across sites/vendors.",
  "Inspection risk: missing essential documents and outdated versions."
];
const approach: Bullet[] = [
  "Outcome lane: per-artifact QC with completeness and accuracy SLAs.",
  "Defect taxonomy aligned to DIA reference model and SOP versions.",
  "Checklist gates per artifact type; version control & effective-date checks.",
  "Dual-review for high-risk artifacts (e.g., ICF, Safety, PV agreements).",
  "Dashboards: completeness %, accuracy %, age buckets, site/vendor heatmaps."
];
const playbooks: Bullet[] = [
  "Artifact-specific QC checklists (ICF, IB, CV, Delegation Log, Safety Letters).",
  "Version/expiry checks with effective-dates; supersede/retire flow.",
  "Site activation packet sanity checks; late upload chase SOP.",
  "Discrepancy management with reason codes and recurrence watchlist."
];
const results: Bullet[] = [
  "Completeness to 98%+ on critical sections pre-inspection.",
  "Accuracy AQL  99.5% on dual-review classes; overall QC  99.0%.",
  "Aged discrepancies (>14d) down 63% with chase SOP and owners.",
  "Inspection findings reduced; faster closeouts across sites."
];
const lessons: Bullet[] = [
  "Defect classes + examples keep reviewer alignment high.",
  "Dual-review only where risk and cost justify; rotate pairs.",
  "Heatmaps focus coaching on sites/vendors with recurring gaps.",
  "Definitions embedded in dashboards prevent metric drift."
];
export default function CaseStudyPharmaEtmfQc() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <p><a className="text-white/80 underline" href="/case-studies"> All case studies</a></p>
          <h1 className="max-w-5xl mt-2">eTMF QC - Inspection-Ready Completeness &amp; Accuracy</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Outcome-based QC with defect classes, checklist gates, and inspection-ready dashboards brought consistency across sites and vendors.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm">Life Sciences</span>
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
          <h2 className="font-semibold mt-8">Operational Playbooks</h2>
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
            <li><strong>Model:</strong> Managed Services (per-artifact QC)</li>
            <li><strong>Scope:</strong> Completeness &amp; accuracy QC for DIA sections</li>
            <li><strong>QA:</strong> AQL with defect classes; dual-review on high-risk</li>
            <li><strong>Dashboards:</strong> Completeness, accuracy, aging, heatmaps</li>
          </ul>
          <div className="mt-4 grid gap-3">
            <a className="btn-outline" href="/services/managed-services">Managed Services</a>
            <a className="btn-outline" href="/employers/compare-models">Compare Models</a>
          </div>
          <div className="mt-6 p-4 rounded-2xl bg-slate-50">
            <div className="font-semibold">Make inspections boring</div>
            <p className="muted text-sm mt-1">QC gates, defect classes, and evidence make findings rare and easy to address.</p>
            <a className="btn-primary mt-3 inline-block" href="/rfp">Start an RFP</a>
          </div>
        </aside>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Ready for inspection-ready QC?</h2>
            <p className="text-slate-700 mt-1">Well set outcome SLAs, QA, and dashboards aligned to your SOPs and DIA model.</p>
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

