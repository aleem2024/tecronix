import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Trust Center - Security, Privacy, Compliance | Tecronix",
  description:
    "Security, privacy, and compliance at Tecronix. Access our incident response, sub-processor registry, policies, and diligence documents."
};
type Link = { label: string; href: string; note?: string };
const quickLinks: Link[] = [
  { label: "Incident Response", href: "/security/incident-response", note: "Severities, SLAs, roles, comms templates" },
  { label: "Sub-Processors", href: "/security/sub-processors", note: "Vendors, roles, regions" },
  { label: "Cookie Preferences", href: "/legal/cookies", note: "Control analytics/marketing cookies" },
  { label: "Privacy Notice", href: "/legal/privacy", note: "How we handle personal data" },
  { label: "Status Page", href: "/status", note: "Live service status & history" }
];
const diligence = [
  { label: "ISMS Overview (PDF)", href: "/docs/isms-overview.pdf" },
  { label: "BC/DR Summary (PDF)", href: "/docs/bcdr-summary.pdf" },
  { label: "Pen Test Attestation (PDF)", href: "/docs/pen-test-letter.pdf" },
  { label: "DPIA / LIA Template (DOCX)", href: "/docs/dpia-template.docx" },
  { label: "Security & Controls Brief (PDF)", href: "/docs/soc-brief.pdf" },
  { label: "Certificate of Insurance (PDF)", href: "/docs/insurance-coi.pdf" }
];
const topics = [
  {
    title: "Security",
    points: [
      "RBAC & least-privilege access; JML with quarterly reviews",
      "Encryption in transit; at rest where applicable to scope",
      "Endpoint controls for managed devices; network allowlists or VPN/VDI",
      "Security training & phishing simulations; background checks per role",
      "Incident Response with severity targets and evidence requirements"
    ]
  },
  {
    title: "Privacy",
    points: [
      "Data minimization and purpose limitation; retention aligned to contracts",
      "DPA/BAA available by scope; SCCs for cross-border as needed",
      "Subject rights workflow (access, delete, correct) via ticketed process",
      "Cookie controls; privacy-by-design in new lanes and dashboards"
    ]
  },
  {
    title: "Compliance",
    points: [
      "Audit-ready evidence tiles supporting QA and metrics",
      "Change control for SOP/policy/version; training attestations",
      "Sub-processor registry with roles/regions and update history",
      "Regulator-facing dashboards (where applicable) and exports"
    ]
  }
];
export default function TrustCenterPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Trust Center</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Our approach to security, privacy, and compliance. Access runbooks, vendor registry, and diligence documents.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#links">Quick Links</a>
            <a className="btn-outline" href="#topics">What We Do</a>
            <a className="btn-primary" href="/contact#trust">Contact Trust</a>
          </div>
        </div>
      </section>
      {/* QUICK LINKS */}
      <section id="links" className="container py-12">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {quickLinks.map(l => (
            <a key={l.href} href={l.href} className="card hover:shadow-lg transition-shadow">
              <div className="text-lg font-semibold">{l.label}</div>
              {l.note ? <p className="muted text-sm mt-1">{l.note}</p> : null}
            </a>
          ))}
        </div>
      </section>
      {/* TOPICS */}
      <section id="topics" className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-3 gap-6">
          {topics.map(t => (
            <article key={t.title} className="card">
              <div className="text-xs text-slate-500">Program</div>
              <div className="text-lg font-semibold mt-1">{t.title}</div>
              <ul className="mt-3 list-disc pl-5 text-slate-700 text-sm space-y-1">
                {t.points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
      {/* DILIGENCE DOCS */}
      <section className="container py-12">
        <div className="card">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h2 className="font-semibold">Diligence Documents</h2>
            <a className="btn-outline" href="/contact#trust">Request Additional Docs</a>
          </div>
          <ul className="mt-4 grid md:grid-cols-2 gap-3 text-sm">
            {diligence.map(d => (
              <li key={d.href} className="p-3 rounded-xl border flex items-center justify-between">
                <span className="text-slate-800">{d.label}</span>
                <a className="btn-outline" href={d.href} download>Download</a>
              </li>
            ))}
          </ul>
          <p className="muted text-xs mt-3">
          </p>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Questions about security or privacy?</h2>
            <p className="text-slate-700 mt-1">Our Trust team can align to your contract clauses and regulator timelines.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/security/incident-response">Incident Response</a>
            <a className="btn-primary" href="/contact#trust">Contact Trust</a>
          </div>
        </div>
      </section>
    </main>
  );
}
