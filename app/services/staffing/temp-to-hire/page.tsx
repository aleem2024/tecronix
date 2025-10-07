import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Temp-to-Hire - Try Talent Before You Convert | Tecronix",
  description:
    "De-risk hiring with calibrated contractors you can convert. Structured scorecards, QA sampling, and transparent conversion terms."
};
type Bullet = string;
const why: Bullet[] = [
  "Validate fit in your live workflows before committing to FTE",
  "Reduce miss-hire risk with structured scorecards and coaching history",
  "Speed: ramp in days, convert when headcount opens",
  "Transparent conversion fees and cooling-off options"
];
const whereItFits: Bullet[] = [
  "CX and back office roles with clear metrics and playbooks",
  "Operational analysts, workflow coordinators, and QA monitors",
  "Financial ops (AR/AP, disputes), KYC support, content ops",
  "High-growth teams standardizing SOPs ahead of scale"
];
const process: Bullet[] = [
  "Role intake & scorecard setup (competencies, outputs, coverage)",
  "Shortlist with structured notes, work samples (when applicable)",
  "30/60/90 day checkpoints with manager + QA signals",
  "Conversion readiness packet: scorecards, metrics, attendance",
  "Simple conversion letter with fee and start date"
];
const qaSignals: Bullet[] = [
  "QA pass rate and defect mix over time",
  "Calibration agreement with leads/reviewers",
  "Backlog impact and throughput trend by queue",
  "Escalations/resolves, knowledge tile usage"
];
const terms: Bullet[] = [
  "Conversion fee indexed to tenure (decreasing bands)",
  "Cooling-off period option if youre undecided",
  "Guarantee window post-conversion (credit on rare misfit)",
  "Local compliance & payroll handled pre-conversion"
];
export default function TempToHirePage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Temp-to-Hire</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Try calibrated talent in your stack with real work and real metrics. Convert when the fit is proven-no surprises.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#why">Why</a>
            <a className="btn-outline" href="#process">Process</a>
            <a className="btn-primary" href="/rfp">Request Candidates</a>
          </div>
        </div>
      </section>
      {/* WHY & FIT */}
      <section id="why" className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h2 className="font-semibold">Why Temp-to-Hire</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {why.map(x => <li key={x}>{x}</li>)}
          </ul>
          <div className="mt-4 flex gap-3">
            <a className="btn-outline" href="/employers/compare-models">Compare Models</a>
            <a className="btn-outline" href="/employers/pricing">Pricing Approaches</a>
          </div>
        </article>
        <article className="card">
          <h2 className="font-semibold">Where It Fits</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {whereItFits.map(x => <li key={x}>{x}</li>)}
          </ul>
        </article>
      </section>
      {/* PROCESS & QA SIGNALS */}
      <section id="process" className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-2 gap-10">
          <article className="card">
            <h2 className="font-semibold">Process</h2>
            <ol className="mt-3 list-decimal pl-5 text-sm text-slate-700 space-y-2">
              {process.map(x => <li key={x}>{x}</li>)}
            </ol>
          </article>
          <article className="card">
            <h3 className="font-semibold">What We Measure</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              {qaSignals.map(x => <li key={x}>{x}</li>)}
            </ul>
            <p className="muted text-sm mt-3">
              We can share anonymized exemplars so your managers see how scorecards evolve before conversion.
            </p>
          </article>
        </div>
      </section>
      {/* TERMS */}
      <section className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h2 className="font-semibold">Conversion Terms</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {terms.map(x => <li key={x}>{x}</li>)}
          </ul>
        </article>
        <article className="card">
          <h2 className="font-semibold">Pathways</h2>
          <p className="muted text-sm mt-2">
            Many clients start with Temp-to-Hire, then convert proven talent and keep a pod for peaks. Others move to outcome SLAs after a pilot.
          </p>
          <div className="mt-4 flex gap-3">
            <a className="btn-outline" href="/services/staffing/direct-placement">Direct Placement</a>
            <a className="btn-outline" href="/services/managed-services">Managed Services</a>
            <a className="btn-outline" href="/employers/onboarding">Onboarding</a>
          </div>
        </article>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Ready to trial candidates?</h2>
            <p className="text-slate-700 mt-1">Share your scorecard and coverage. Well shortlist and schedule start dates.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/rfp">Request Candidates</a>
            <a className="btn-primary" href="/contact">Talk to Recruiting</a>
          </div>
        </div>
      </section>
    </main>
  );
}

