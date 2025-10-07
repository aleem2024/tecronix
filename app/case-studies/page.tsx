import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Case Studies - Proven Outcomes by Industry | Tecronix",
  description:
    "Real programs across Healthcare RCM, Banking/Fintech, Retail/eCommerce, Telecom/Media, Manufacturing, Energy/Utilities, and more. Metrics, playbooks, and lessons learned."
};
type Study = {
  slug: string;
  title: string;
  industry: string;
  model: "Staffing" | "Managed Services" | "Consulting" | "Hybrid";
  summary: string;
  highlights: string[];
  kpis: string[];
};
const studies: Study[] = [
  {
    slug: "bfs-disputes-sla-turnaround",
    title: "Card Disputes Hub with Outcome SLAs",
    industry: "Banking & Financial Services",
    model: "Managed Services",
    summary:
      "Built an outcome-based disputes desk with AQL QA and evidence packs, improving win-rate and TAT during seasonal spikes.",
    highlights: [
      "Outcome SLAs on TAT and documentation quality",
      "Evidence tiles mapped to Reg E/Z definitions",
      "Calibration and dual-review for high-risk"
    ],
    kpis: [
      "Win-rate +9.4 pts",
      "Median TAT -31%",
      "Rework -42%"
    ]
  },
  {
    slug: "retail-peak-cx-coverage",
    title: "BFCM CX Surge Coverage & Macros",
    industry: "Retail & eCommerce",
    model: "Staffing",
    summary:
      "Coverage grid for Black Friday/Cyber Monday with tuned macros, reducing first response and improving CSAT.",
    highlights: [
      "Chat/email macros & knowledge refresh",
      "Surge buffers sized by forecast error",
      "QA sampling with promo-specific defect classes"
    ],
    kpis: [
      "First response < 10m (chat/email)",
      "ASA < 60s (voice) during peaks",
      "CSAT +8 pts"
    ]
  },
  {
    slug: "telco-activation-jeopardy",
    title: "Activation Jeopardy Order Playbook",
    industry: "Telecom, Media & Streaming",
    model: "Hybrid",
    summary:
      "Provisioning desk with jeopardy order lanes and field coordination; dashboards exposed activation lead time.",
    highlights: [
      "Exception lanes with root-cause Pareto",
      "Dispatch confirmation macro & pre-checks",
      "Evidence-linked QA for order amendments"
    ],
    kpis: [
      "Activation lead time -28%",
      "Repeat truck rolls -17%",
      "Jeopardy recovery +22%"
    ]
  },
  {
    slug: "pharma-etmf-qc",
    title: "eTMF QC & Inspection Readiness",
    industry: "Pharma & Life Sciences",
    model: "Managed Services",
    summary:
      "Last-mile document hunts and QC for eTMF with calibrated defect classes; inspection readiness improved.",
    highlights: [
      "Completeness checklist gates",
      "Defect class calibration with sponsor",
      "Evidence chain and version control"
    ],
    kpis: [
      "eTMF completeness +12 pts",
      "QC hit rate +18 pts",
      "Inspection findings -35%"
    ]
  },
  {
    slug: "utilities-outage-communications",
    title: "Outage Communications Desk",
    industry: "Energy & Utilities",
    model: "Staffing",
    summary:
      "Outage-mode macros, ETA messaging, and callback discipline during storms; adherence and CSAT stabilized.",
    highlights: [
      "Storm-mode playbooks & QA variant",
      "Callback suppression/deflection logic",
      "Coverage/adherence dashboards"
    ],
    kpis: [
      "ASA < 60s during events",
      "Callback rate -22%",
      "CSAT +6 pts"
    ]
  },
  {
    slug: "mfg-quality-escape-reduction",
    title: "Manufacturing Quality Escape Reduction",
    industry: "Manufacturing",
    model: "Consulting",
    summary:
      "Diagnostics on sampling and checklists, then pilot QA redesign; escapes and rework materially reduced.",
    highlights: [
      "AQL realignment and reviewer scorecards",
      "Defect taxonomy and drift checks",
      "Change control for SOPs/training"
    ],
    kpis: [
      "Escapes -41%",
      "Rework -27%",
      "Time-to-detect -19%"
    ]
  }
];
const industries = Array.from(new Set(studies.map(s => s.industry))).sort();
export default function CaseStudiesIndex() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Case Studies</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Pilots and programs that hit timeliness, quality, and reliability-with evidence and dashboards.
            Browse by industry and model.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#browse">Browse All</a>
            <a className="btn-outline" href="#by-industry">By Industry</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
      {/* BROWSE ALL */}
      <section id="browse" className="container py-12">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {studies.map(cs => (
            <article key={cs.slug} className="card">
              <div className="text-xs text-slate-500">{cs.industry} Â· {cs.model}</div>
              <h2 className="font-semibold mt-1">{cs.title}</h2>
              <p className="muted text-sm mt-1">{cs.summary}</p>
              <ul className="list-disc pl-5 text-sm text-slate-700 mt-2 space-y-1">
                {cs.highlights.map(h => <li key={h}>{h}</li>)}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {cs.kpis.map(k => (
                  <span key={k} className="inline-block px-2 py-1 rounded-full bg-slate-100 text-slate-700 text-xs">{k}</span>
                ))}
              </div>
              <a className="btn-outline mt-4" href={`/case-studies/${cs.slug}`}>Read More</a>
            </article>
          ))}
        </div>
      </section>
      {/* BY INDUSTRY */}
      <section id="by-industry" className="bg-slate-100">
        <div className="container py-12">
          <h2 className="font-semibold">By Industry</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-4">
            {industries.map(ind => (
              <a key={ind} href={`/industries/${slugify(ind)}`} className="p-4 rounded-2xl border hover:shadow-sm transition">
                <div className="text-slate-900 font-medium">{ind}</div>
                <div className="text-slate-600 text-sm mt-1">See capabilities &rarr;</div>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Want a pilot like these?</h2>
            <p className="text-slate-700 mt-1">Well propose a scoped pilot with SLAs, QA, and dashboards for your queues.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/employers/compare-models">Compare Models</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
    </main>
  );
}
/** simple slugify used for industry links on this static page */
function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

