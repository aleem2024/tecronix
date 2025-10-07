import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Direct Placement - Hire Proven Talent | Tecronix",
  description:
    "Full-time hiring with calibrated scorecards, structured interviews, and optional work trials. Transparent fees, replacement guarantees, and DEI-minded pipelines."
};
type Bullet = string;
const why: Bullet[] = [
  "Hire ready-to-run operators with proven signals from similar stacks",
  "Structured scorecards reduce bias and miss-hires",
  "Faster time-to-accept with curated, briefed candidates",
  "Optional work trials or references from pilot/contract history"
];
const roles: Bullet[] = [
  "CX Leads/Managers, Workforce/QA Analysts",
  "Ops Managers, Program/Project Coordinators",
  "Financial Ops (AR/AP, Billing, Disputes), KYC/KYB Analysts",
  "Content/Catalog Ops Leads, Localization Program Assist",
  "Data/Reporting Associates, Process Excellence Analysts"
];
const process: Bullet[] = [
  "Role intake: competencies, outcomes, coverage grid, compensation bands",
  "Sourcing from active bench + networks; briefed and expectation-set",
  "Structured interviews with rubrics; optional case/working session",
  "Scorecard summaries & reference checks; shortlists with notes",
  "Offer support: calibration to comp bands, start planning, onboarding checklist"
];
const terms: Bullet[] = [
  "Contingent fee with decreasing tiers by level/seniority",
  "Replacement guarantee window with clear triggers",
  "Diversity slate commitment where requested",
  "Confidential searches supported"
];
const tips: Bullet[] = [
  "Share exemplar outcomes and dashboards to speed alignment",
  "Decide interview loop up front to avoid candidate drift",
  "Use the same rubric for every interviewer",
  "Keep turnaround tight: 24-48h between stages"
];
export default function DirectPlacementPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Direct Placement</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Hire full-time talent using structured scorecards and curated pipelines-optionally validated through prior contract or pilot work.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#why">Why</a>
            <a className="btn-outline" href="#process">Process</a>
            <a className="btn-primary" href="/rfp">Request a Shortlist</a>
          </div>
        </div>
      </section>
      {/* WHY & ROLES */}
      <section id="why" className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h2 className="font-semibold">Why Direct Placement</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {why.map(x => <li key={x}>{x}</li>)}
          </ul>
          <div className="mt-4 flex gap-3">
            <a className="btn-outline" href="/services/staffing/temp-to-hire">Temp-to-Hire</a>
            <a className="btn-outline" href="/services/staffing/staff-augmentation">Staff Augmentation</a>
          </div>
        </article>
        <article className="card">
          <h2 className="font-semibold">Typical Roles</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {roles.map(r => <li key={r}>{r}</li>)}
          </ul>
        </article>
      </section>
      {/* PROCESS & TERMS */}
      <section id="process" className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-2 gap-10">
          <article className="card">
            <h2 className="font-semibold">Hiring Process</h2>
            <ol className="mt-3 list-decimal pl-5 text-sm text-slate-700 space-y-2">
              {process.map(p => <li key={p}>{p}</li>)}
            </ol>
          </article>
          <article className="card">
            <h3 className="font-semibold">Commercial Terms</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              {terms.map(t => <li key={t}>{t}</li>)}
            </ul>
            <p className="muted text-sm mt-3">
              We can run confidential searches with NDAs and redacted profiles until late stage.
            </p>
          </article>
        </div>
      </section>
      {/* TIPS & FAQ */}
      <section className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h2 className="font-semibold">Tips for Faster, Better Hires</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {tips.map(t => <li key={t}>{t}</li>)}
          </ul>
        </article>
        <article className="card">
          <h2 className="font-semibold">Pathways</h2>
          <p className="muted text-sm mt-2">
            Many clients use Temp-to-Hire to validate fit, then convert and keep a Staff Aug pod for peaks. Others move to Managed Services for outcome SLAs.
          </p>
          <div className="mt-4 flex gap-3">
            <a className="btn-outline" href="/services/managed-services">Managed Services</a>
            <a className="btn-outline" href="/employers/onboarding">Onboarding</a>
            <a className="btn-outline" href="/employers/pricing">Pricing Approaches</a>
          </div>
        </article>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Ready to see a shortlist?</h2>
            <p className="text-slate-700 mt-1">Share your scorecard and comp bands. Well curate and schedule.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/rfp">Request a Shortlist</a>
            <a className="btn-primary" href="/contact">Talk to Recruiting</a>
          </div>
        </div>
      </section>
    </main>
  );
}

