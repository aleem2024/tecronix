import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Case Study: BFCM CX Surge Coverage & Macros | Tecronix",
  description:
    "How a retail brand handled Black Friday/Cyber Monday peaks with a coverage grid, tuned macros, QA sampling, and surge buffers-improving response times and CSAT."
};
type Bullet = string;
const context: Bullet[] = [
  "DTC brand with rapid Q4 growth; marketing drove 4-7x message volume spikes.",
  "Mixed macros and stale knowledge increased handle time and DSAT during promos.",
  "Coverage windows misaligned to arrival curves; limited surge buffer."
];
const approach: Bullet[] = [
  "Coverage grid sized to forecast error; surge buffers with notice terms.",
  "Macro/knowledge refresh and promo playbooks; variant QA defect classes.",
  "Channel routing: chat-first for presales, email for post-order exceptions.",
  "Daily calibration during peak; WBR dashboards for response/resolve."
];
const playbooks: Bullet[] = [
  "Promo macro pack (shipping cutoffs, promos, returns window, bundle rules).",
  "Exception handling trees for WISMO/WISMR, address changes, split shipments.",
  "CS social care guidelines and escalation matrix.",
  "Post-peak unwind: backlog burn-down lanes and aged-message priorities."
];
const results: Bullet[] = [
  "First response < 10m for chat/email during BFCM window.",
  "Voice ASA < 60s with callback suppression for known issues.",
  "CSAT +8 pts; DSAT drivers reduced (policy clarity, speed).",
  "Agent ramp time  via refreshed macros and examples."
];
const lessons: Bullet[] = [
  "Promo-specific defect classes make QA actionable.",
  "Forecast error bands are essential to sizing surge buffers.",
  "Macro examples (good/better/best) reduce variability quickly.",
  "Unwind playbook prevents long-tail backlog drag."
];
export default function CaseStudyRetailPeakCX() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <p><a className="text-white/80 underline" href="/case-studies"> All case studies</a></p>
          <h1 className="max-w-5xl mt-2">BFCM CX Surge Coverage &amp; Macros</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            A coverage grid, tuned macros, and promo QA variants stabilized CX during peak season-cutting response times and lifting CSAT.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm">Retail &amp; eCommerce</span>
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm">Staffing (Pod)</span>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
      {/* OVERVIEW */}
      <section className="container py-12 grid lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2 card">
          <h2 className="font-semibold">Context</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {context.map(x => <li key={x}>{x}</li>)}
          </ul>
          <h2 className="font-semibold mt-8">Approach</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {approach.map(a => <li key={a}>{a}</li>)}
          </ul>
          <h2 className="font-semibold mt-8">Promo Playbooks</h2>
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
            <li><strong>Model:</strong> Staffing (Pod with Lead + 6 associates)</li>
            <li><strong>Scope:</strong> Chat/email/voice coverage; macro refresh; promo QA</li>
            <li><strong>QA:</strong> AQL with promo defect classes; daily calibration in peak</li>
            <li><strong>Dashboards:</strong> First response, ASA, CSAT, backlog aging</li>
          </ul>
          <div className="mt-4 grid gap-3">
            <a className="btn-outline" href="/industries/retail-ecommerce">Retail &amp; eCommerce</a>
            <a className="btn-outline" href="/services/staffing">Staffing Services</a>
            <a className="btn-outline" href="/employers/compare-models">Compare Models</a>
          </div>
          <div className="mt-6 p-4 rounded-2xl bg-slate-50">
            <div className="font-semibold">Plan your next peak</div>
            <p className="muted text-sm mt-1">Well size surge buffers and deliver macro packs and QA variants.</p>
            <a className="btn-primary mt-3 inline-block" href="/rfp">Start an RFP</a>
          </div>
        </aside>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Make peaks predictable</h2>
            <p className="text-slate-700 mt-1">Get a coverage grid, macro pack, and QA plan tuned for your promos.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/services/staffing">Explore Staffing</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
    </main>
  );
}

