import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Incident Response - Severities, SLAs, Roles & Runbooks | Tecronix",
  description:
    "Our incident response framework: severity definitions, response SLAs, roles/RACI, runbook phases, evidence handling, communications, and PIR."
};
type Bullet = string;
const severities = [
  { sev: "SEV-1 (Critical)", targets: [
    "Affects regulated data or many customers; major service impact",
    "Acknowledge  15 min, engage command channel immediately",
    "Hourly external comms (as applicable) until contained"
  ]},
  { sev: "SEV-2 (High)", targets: [
    "Material impact with containment workarounds available",
    "Acknowledge  30 min; comms every 2-4 hours until stable"
  ]},
  { sev: "SEV-3 (Medium)", targets: [
    "Limited scope or degraded component; no regulated impact",
    "Acknowledge  4 hours; daily updates until resolved"
  ]},
  { sev: "SEV-4 (Low)", targets: [
    "Minor defect or documentation/alerting issue",
    "Track and close within standard backlog SLAs"
  ]}
];
const roles = [
  { role: "Incident Commander (IC)", resp: "Owns timeline, decisions, and status comms; ensures roles are staffed" },
  { role: "Comms Lead", resp: "Stakeholder updates (internal/external/regulator) and message approvals" },
  { role: "Technical Lead", resp: "Directs triage, containment, and recovery tasks; artifacts to Evidence Lead" },
  { role: "Evidence Lead", resp: "Collects immutable evidence tiles; maintains chain of custody & log" },
  { role: "Security/Privacy", resp: "Assessment of data impact; coordinates DPA/BAA/SCC and regulator steps" },
  { role: "Client Owner", resp: "Customer-specific notices and contractual obligations" }
];
const phases = [
  { name: "Detect & Acknowledge", points: [
    "Verify signal (alert, report) and declare severity",
    "Staff roles; open incident channel and timeline"
  ]},
  { name: "Contain", points: [
    "Block/limit blast radius; rotate secrets; access reviews",
    "Stabilize service; prepare interim customer messaging"
  ]},
  { name: "Eradicate & Recover", points: [
    "Remove root cause; restore services; monitor for reoccurrence",
    "Validate integrity; confirm metrics within thresholds"
  ]},
  { name: "Communicate", points: [
    "Internal cadence by severity; customer/regulator notices as required",
    "Single source of truth for status; approved talking points"
  ]},
  { name: "Post-Incident Review (PIR)", points: [
    "Root cause analysis; timeline; what went well/poorly",
    "Actions with owners/dates; change control updates"
  ]}
];
const evidence: Bullet[] = [
  "Immutable links to logs, alerts, tickets, and dashboards",
  "Screenshots/hashes for changed artifacts; who/when/what",
  "Access reviews (JML), credential rotations, and approvals",
  "Copy of customer communications and regulator filings"
];
export default function IncidentResponsePage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Incident Response</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Severity definitions, SLAs, roles, and runbooks to detect, contain, and recover quickly -
            with audit-ready evidence and a clear PIR process.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#severities">Severities &amp; SLAs</a>
            <a className="btn-outline" href="#roles">Roles</a>
            <a className="btn-outline" href="#phases">Runbook</a>
            <a className="btn-primary" href="/docs/incident-response-playbook.pdf" download>Download Playbook</a>
          </div>
        </div>
      </section>
      {/* SEVERITIES */}
      <section id="severities" className="container py-12">
        <h2 className="font-semibold">Severities &amp; Target SLAs</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {severities.map(s => (
            <article key={s.sev} className="card">
              <div className="text-xs text-slate-500">Severity</div>
              <div className="text-lg font-semibold mt-1">{s.sev}</div>
              <ul className="mt-3 list-disc pl-5 text-slate-700 text-sm space-y-1">
                {s.targets.map(t => <li key={t}>{t}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
      {/* ROLES */}
      <section id="roles" className="bg-slate-100">
        <div className="container py-12">
          <h2 className="font-semibold">Roles &amp; RACI</h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr className="text-left">
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Responsibilities</th>
                </tr>
              </thead>
              <tbody>
                {roles.map(r => (
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
      {/* PHASES */}
      <section id="phases" className="container py-12 grid lg:grid-cols-3 gap-6">
        {phases.map(p => (
          <article key={p.name} className="card">
            <div className="text-xs text-slate-500">Phase</div>
            <div className="text-lg font-semibold mt-1">{p.name}</div>
            <ul className="mt-3 list-disc pl-5 text-slate-700 text-sm space-y-1">
              {p.points.map(pt => <li key={pt}>{pt}</li>)}
            </ul>
          </article>
        ))}
      </section>
      {/* EVIDENCE */}
      <section className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-2 gap-10">
          <article className="card">
            <h2 className="font-semibold">Evidence Requirements</h2>
            <ul className="mt-3 list-disc pl-5 text-slate-700 text-sm space-y-2">
              {evidence.map(e => <li key={e}>{e}</li>)}
            </ul>
          </article>
          <article className="card">
            <h2 className="font-semibold">Templates &amp; Exports</h2>
            <ul className="mt-3 list-disc pl-5 text-slate-700 text-sm space-y-2">
              <li><a className="underline" href="/docs/incident-response-playbook.pdf" download>Incident Response Playbook (PDF)</a></li>
              <li><a className="underline" href="/docs/bcdr-summary.pdf" download>BC/DR Summary (PDF)</a></li>
              <li><a className="underline" href="/docs/isms-overview.pdf" download>ISMS Overview (PDF)</a></li>
            </ul>
            <p className="muted text-xs mt-2">Replace placeholders with approved documents before launch.</p>
          </article>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Need to align our IR plan to your clauses?</h2>
            <p className="text-slate-700 mt-1">We can map severities, comms, and evidence to your regulator or customer requirements.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/trust">Trust Center</a>
            <a className="btn-primary" href="/contact#trust">Contact Trust</a>
          </div>
        </div>
      </section>
    </main>
  );
}

