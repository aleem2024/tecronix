import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Case Study: Outage Communications Desk | Tecronix",
  description:
    "Storm-mode macros, ETA messaging, callback discipline, and adherence dashboards stabilized customer ops during major outage events."
};
type Bullet = string;
const context: Bullet[] = [
  "Investor-owned utility in the Southeast; frequent storm seasons and wildfire-related PSPS events.",
  "ASA and CSAT collapsed during events; messaging inconsistencies on ETRs drove callbacks.",
  "No clear playbook for switching between normal and outage modes."
];
const approach: Bullet[] = [
  "Storm-mode playbooks with variant macros and ETR message templates.",
  "Knowledge tiles for known issues; deflection logic and callback suppression rules.",
  "Coverage/adherence grid by hour; surge buffers sized to forecast error.",
  "QA variant with storm-specific defect classes and rapid calibration.",
  "Dashboards: ASA, callback %, ETR accuracy notes, and adherence."
];
const results: Bullet[] = [
  "ASA < 60s achieved across major events with prioritized routing.",
  "Callback rate -22% through suppression and proactive messaging.",
  "ETR accuracy notes standardized; DSAT drivers reduced.",
  "Adherence stabilized via clear coverage and break rules."
];
const lessons: Bullet[] = [
  "Mode switching must change macros, QA, and routing- not just headcount.",
  "Callback suppression tied to known-issue banners prevents loops.",
  "ETR language templates cut ambiguity (and regulator complaints).",
  "Calibration cadence should increase during events, then taper."
];
export default function CaseStudyUtilitiesOutage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <p><a className="text-white/80 underline" href="/case-studies"> All case studies</a></p>
          <h1 className="max-w-5xl mt-2">Outage Communications Desk</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Storm-mode macros, ETR messaging, and adherence dashboards kept service steady during severe-weather events.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm">Energy &amp; Utilities</span>
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm">Staffing (Pod)</span>
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
            <li><strong>Model:</strong> Staffing (Lead + associates)</li>
            <li><strong>Scope:</strong> Outage-mode CX, ETR messaging, deflection</li>
            <li><strong>QA:</strong> Storm-variant defect classes; fast calibration</li>
            <li><strong>Dashboards:</strong> ASA, callbacks, adherence, ETR notes</li>
          </ul>
          <div className="mt-4 grid gap-3">
            <a className="btn-outline" href="/industries/energy-utilities">Energy &amp; Utilities</a>
            <a className="btn-outline" href="/services/staffing">Staffing Services</a>
            <a className="btn-outline" href="/employers/compare-models">Compare Models</a>
          </div>
          <div className="mt-6 p-4 rounded-2xl bg-slate-50">
            <div className="font-semibold">Prepare for storm season</div>
            <p className="muted text-sm mt-1">Well tailor storm-mode macros, coverage, and QA variants for your territories.</p>
            <a className="btn-primary mt-3 inline-block" href="/rfp">Start an RFP</a>
          </div>
        </aside>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Keep service steady-storm or shine</h2>
            <p className="text-slate-700 mt-1">Get an outage communications playbook with staffing and QA to match.</p>
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

