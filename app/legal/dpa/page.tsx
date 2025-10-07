import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Processing Addendum (DPA)  Overview | Tecronix",
  description: "Roles and responsibilities, technical & organizational measures (TOMs), sub-processor oversight, international transfers, and how to request a signed DPA."
};

type Section = { title: string; points: string[] };

const roles: Section = {
  title: "Roles & Responsibilities",
  points: [
    "Tecronix acts as a Processor (or Service Provider) when processing Client Personal Data under the SOW.",
    "Client acts as Controller (or Business) and determines the purposes and means of processing.",
    "Where Tecronix determines purposes and means for its own data, it acts as Controller for that data."
  ]
};

const toms: Section = {
  title: "Technical & Organizational Measures (TOMs)",
  points: [
    "Access Controls: least-privilege, MFA where supported, JML processes.",
    "Data Protection: encryption in transit and at rest (where supported), segmentation, secure disposal.",
    "Operations: SOPs/runbooks, QA sampling (AQL), change control, incident response with severity targets.",
    "Monitoring: logging with alerting, vulnerability management, vendor risk review.",
    "Continuity: backups where applicable, recovery procedures aligned to system criticality."
  ]
};

const subs: Section = {
  title: "Sub-Processors",
  points: [
    "Tecronix maintains a registry of authorized sub-processors used in delivery.",
    "Client is notified of material changes as set out in the Agreement.",
    "See the live registry on the Sub-Processors page (CSV available)."
  ]
};

const transfers: Section = {
  title: "International Transfers",
  points: [
    "Standard Contractual Clauses (SCCs) or UK IDTA/UK Addendum as applicable.",
    "Transfer risk assessments for high-risk scenarios.",
    "Regional data handling aligned to SOW and client preferences where feasible."
  ]
};

const dataSubject: Section = {
  title: "Data Subject Requests & Cooperation",
  points: [
    "Tecronix shall assist Client in responding to requests to exercise rights (access, deletion, etc.).",
    "Requests received directly by Tecronix will be forwarded to the Client unless otherwise required by law.",
    "Security incidents will be handled per Incident Response with prompt notification consistent with law and contract."
  ]
};

const sections: Section[] = [roles, toms, subs, transfers, dataSubject];

export default function DpaOverviewPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Data Processing Addendum (DPA)</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            This page summarizes our standard DPA. For a countersigned copy tailored to your SOW, contact our Privacy team.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#overview">Overview</a>
            <a className="btn-outline" href="#downloads">Downloads</a>
            <a className="btn-primary" href="mailto:privacy@tecronix.com">Request Signed DPA</a>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="container py-12 grid lg:grid-cols-2 gap-6">
        {sections.map(s => (
          <article key={s.title} className="card">
            <h2 className="font-semibold">{s.title}</h2>
            <ul className="mt-3 text-slate-700 text-sm space-y-2">
              {s.points.map(p => <li key={p}>{p}</li>)}
            </ul>
          </article>
        ))}
      </section>

      {/* LINKS */}
      <section className="bg-slate-100">
        <div className="container py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a className="card block hover:shadow-sm" href="/security/sub-processors">
            <div className="font-semibold">Sub-Processors</div>
            <p className="muted text-sm mt-2">Live registry and CSV download.</p>
          </a>
          <a className="card block hover:shadow-sm" href="/security/incident-response">
            <div className="font-semibold">Incident Response</div>
            <p className="muted text-sm mt-2">Severity matrix and targets.</p>
          </a>
          <a className="card block hover:shadow-sm" href="/trust">
            <div className="font-semibold">Trust Center</div>
            <p className="muted text-sm mt-2">Security, reliability, compliance.</p>
          </a>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section id="downloads" className="container py-12">
        <h2>Downloads</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a className="card block hover:shadow-sm" href="/templates/dpa-template.md" download>
            <div className="font-semibold">Standard DPA Template (MD)</div>
            <div className="text-sm text-slate-600 mt-2">Placeholder  replace with counsel-approved version.</div>
          </a>
          <a className="card block hover:shadow-sm" href="/docs/soc-brief.pdf" download>
            <div className="font-semibold">Security &amp; Controls Brief (PDF)</div>
            <div className="text-sm text-slate-600 mt-2">High-level controls overview for diligence.</div>
          </a>
          <a className="card block hover:shadow-sm" href="/templates/sub-processors.csv" download>
            <div className="font-semibold">Sub-Processors CSV</div>
            <div className="text-sm text-slate-600 mt-2">Current registry format.</div>
          </a>
        </div>
        <p className="text-xs text-slate-500 mt-3">
        </p>
      </section>

      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Need a countersigned DPA?</h2>
            <p className="text-slate-700 mt-1">Email our Privacy team with your SOW and vendor forms.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/legal/privacy">Privacy Policy</a>
            <a className="btn-primary" href="mailto:privacy@tecronix.com">Request Signed DPA</a>
          </div>
        </div>
      </section>
    </main>
  );
}


