import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Employer Onboarding - Access, SOPs, QA & Dashboards | Tecronix",
  description:
    "Exactly how we start: environment access, SOP capture, QA calibration, coverage setup, dashboards, and change control. Includes week-by-week plan and RACI."
};
type Bullet = string;
const weekByWeek = [
  {
    week: "Week 0 (Prep)",
    items: [
      "Kickoff call; confirm scope lanes, success metrics, timeline",
      "DPA/BAA (as needed), security review, sub-processor add (if applicable)",
      "Access requirements list (RBAC, IP allowlists, VPN/VDI, SSO)",
      "Artifacts request: SOPs, policy/version history, sample data/evidence"
    ]
  },
  {
    week: "Week 1",
    items: [
      "Environment access provisioned (least-privilege); JML owners named",
      "Shadowing + SOP walkthroughs; draft defect taxonomy by lane",
      "Coverage grid proposal (shifts, surge buffers) with buffer math",
      "Dashboard definitions draft (metrics + drill-to-evidence)"
    ]
  },
  {
    week: "Week 2",
    items: [
      "Calibration v1: sample reviews with AQL targets and examples",
      "Pod setup & cross-train matrix; coaching notes workflow",
      "Ticketing flows (change control, incidents, exceptions)",
      "Pilot success gates finalized (p50/p90, accuracy, backlog burn)"
    ]
  },
  {
    week: "Week 3",
    items: [
      "Pilot start: daily standups and scorecards; definitions embedded",
      "Dashboards wired (read-only data or exports) + evidence tiles",
      "Incident Response alignment (severities, notify windows)"
    ]
  },
  {
    week: "Week 4+",
    items: [
      "Pilot checkpoint; go/no-go with success gates",
      "Scale plan or migration to Managed Services (if chosen)",
      "PIR cadence; continuous improvement backlog and owners"
    ]
  }
];
const access = [
  "SSO (preferred) or least-privilege user accounts per tool",
  "Network control: IP allowlists or VPN/VDI; device posture if required",
  "JML: named approvers for join/move/leave; quarterly access reviews",
  "Secrets rotation cadence; shared vaults where applicable"
];
const qa = [
  "Defect taxonomy tied to policy/SOP version with examples",
  "AQL sampling targets; dual-review on high-risk classes",
  "Calibration cadence (weekly initially), reviewer FP/FN analysis",
  "Coaching notes linked to defects; recurrence watchlists"
];
const dashboards = [
  "Metric definitions cataloged next to charts to prevent drift",
  "SLA attainment (p50/p90) + QA %, defect mix, backlog aging",
  "Drill to sample evidence tiles (immutable links or exports)",
  "Executive roll-up and lane-level deep dives"
];
const changeControl = [
  "Ticketed SOP/policy updates with effective dates and training attestations",
  "Versioned templates (macros, evidence, representments) with owners",
  "Release windows and rollback procedures",
  "Audit trail exports on request"
];
const raci = [
  { role: "Client Sponsor", resp: "Approves scope, commercials, and success metrics" },
  { role: "Client Ops Owner", resp: "SOPs, policy, and access; reviews definitions/QA" },
  { role: "Tecronix Delivery Lead", resp: "Owns timeline, pods, QA, and dashboards" },
  { role: "Tecronix QA Lead", resp: "Taxonomy, sampling plan, calibration & coaching" },
  { role: "Tecronix Security/Trust", resp: "Access, DPA/BAA, sub-processors, IR mapping" },
  { role: "Joint WFM/Analyst", resp: "Coverage math, surge buffers, and metrics wiring" }
];
export default function EmployersOnboardingPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Employer Onboarding</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            A clear path from access and SOP capture to QA calibration, coverage, dashboards, and change control -
            with a week-by-week plan and RACI so everyone knows what to do.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#timeline">Timeline</a>
            <a className="btn-outline" href="#qa">QA &amp; Calibration</a>
            <a className="btn-outline" href="#dashboards">Dashboards</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
      {/* TIMELINE */}
      <section id="timeline" className="container py-12">
        <h2 className="font-semibold">Week-by-Week</h2>
        <div className="grid lg:grid-cols-2 gap-6 mt-4">
          {weekByWeek.map(w => (
            <article key={w.week} className="card">
              <div className="text-xs text-slate-500">Phase</div>
              <div className="text-lg font-semibold mt-1">{w.week}</div>
              <ul className="mt-3 list-disc pl-5 text-slate-700 text-sm space-y-1">
                {w.items.map(i => <li key={i}>{i}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
      {/* ACCESS & SECURITY */}
      <section className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-2 gap-10">
          <article className="card">
            <h2 className="font-semibold">Access &amp; Security</h2>
            <ul className="mt-3 list-disc pl-5 text-slate-700 text-sm space-y-2">
              {access.map(a => <li key={a}>{a}</li>)}
            </ul>
            <div className="mt-4 flex gap-3">
              <a className="btn-outline" href="/trust">Trust Center</a>
              <a className="btn-outline" href="/security/incident-response">Incident Response</a>
              <a className="btn-outline" href="/security/sub-processors">Sub-Processors</a>
            </div>
          </article>
          <article className="card" id="qa">
            <h2 className="font-semibold">QA &amp; Calibration</h2>
            <ul className="mt-3 list-disc pl-5 text-slate-700 text-sm space-y-2">
              {qa.map(q => <li key={q}>{q}</li>)}
            </ul>
          </article>
        </div>
      </section>
      {/* DASHBOARDS & CHANGE CONTROL */}
      <section id="dashboards" className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h2 className="font-semibold">Dashboards &amp; Evidence</h2>
          <ul className="mt-3 list-disc pl-5 text-slate-700 text-sm space-y-2">
            {dashboards.map(d => <li key={d}>{d}</li>)}
          </ul>
        </article>
        <article className="card">
          <h2 className="font-semibold">Change Control</h2>
          <ul className="mt-3 list-disc pl-5 text-slate-700 text-sm space-y-2">
            {changeControl.map(c => <li key={c}>{c}</li>)}
          </ul>
        </article>
      </section>
      {/* RACI */}
      <section className="bg-slate-100">
        <div className="container py-12">
          <h2 className="font-semibold">RACI</h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr className="text-left">
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Responsibilities</th>
                </tr>
              </thead>
              <tbody>
                {raci.map(r => (
                  <tr key={r.role} className="border-t align-top">
                    <td className="px-4 py-3 font-medium">{r.role}</td>
                    <td className="px-4 py-3">{r.resp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Ready to onboard?</h2>
            <p className="text-slate-700 mt-1">
              We will map access, finalize QA & coverage, and start a pilot with clear success gates.
            </p>
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
