import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Templates | Tecronix",
  description: "Whitepapers, checklists, and templates for staffing, managed services, and diagnostics across industries."
};

type Item = { href: string; title: string; tag: string; desc: string };

const whitepapers: Item[] = [
  { href: "/docs/soc-brief.pdf", title: "Security & Controls Brief", tag: "Trust", desc: "Overview of access, audit logs, evidence capture, and retention." },
  { href: "/docs/rcm-denials-playbook.pdf", title: "Healthcare Denials Playbook", tag: "Healthcare / RCM", desc: "Payer sequencing, appeal QA sampling, and overturn/TTR metrics." }
];

const templates: Item[] = [
  { href: "/docs/interview-kit-template.docx", title: "Interview Kit & Scorecard Template", tag: "Staffing", desc: "Success profile, interview kits, rubrics, and evidence summary." },
  { href: "/docs/oee-improvement-template.xlsx", title: "OEE Improvement Template", tag: "Manufacturing", desc: "Availability, performance, quality  track and choose the right lever." },
  { href: "/docs/wms-scan-compliance-checklist.pdf", title: "WMS Scan Compliance Checklist", tag: "Logistics", desc: "RF prompts, location hygiene, replen rules, and exception dashboards." }
];

const brandDocs: Item[] = [
  { href: "/docs/press-factsheet.pdf", title: "Press Factsheet", tag: "Press", desc: "Company snapshot for media and analysts." },
  { href: "/docs/brand-assets.zip", title: "Brand Assets (Logos)", tag: "Brand", desc: "Approved logo pack and usage notes." },
  { href: "/docs/insurance-coi.pdf", title: "Certificate of Insurance (COI)", tag: "Trust", desc: "Proof of insurance (placeholder)." }
];

export default function ResourcesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Resources &amp; Templates</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Practical tools for hiring systems and outcome-based delivery. Replace placeholders with your final assets before launch.
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <a className="btn-outline" href="#whitepapers">Whitepapers</a>
            <a className="btn-outline" href="#templates">Templates</a>
            <a className="btn-primary" href="#subscribe">Subscribe</a>
          </div>
        </div>
      </section>

      {/* WHITEPAPERS */}
      <section id="whitepapers" className="container py-12">
        <h2>Whitepapers</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whitepapers.map(d => (
            <a key={d.href} href={d.href} className="card block hover:shadow-sm">
              <div className="badge">{d.tag}</div>
              <div className="font-semibold mt-2">{d.title}</div>
              <p className="muted mt-2 text-sm">{d.desc}</p>
              <div className="text-sm text-slate-600 mt-3">Download </div>
            </a>
          ))}
        </div>
      </section>

      {/* TEMPLATES */}
      <section id="templates" className="container py-12">
        <h2>Templates &amp; Checklists</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map(d => (
            <a key={d.href} href={d.href} className="card block hover:shadow-sm">
              <div className="badge">{d.tag}</div>
              <div className="font-semibold mt-2">{d.title}</div>
              <p className="muted mt-2 text-sm">{d.desc}</p>
              <div className="text-sm text-slate-600 mt-3">Download </div>
            </a>
          ))}
        </div>
      </section>

      {/* BRAND & TRUST */}
      <section className="container py-12">
        <h2>Brand &amp; Trust</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandDocs.map(d => (
            <a key={d.href} href={d.href} className="card block hover:shadow-sm">
              <div className="badge">{d.tag}</div>
              <div className="font-semibold mt-2">{d.title}</div>
              <p className="muted mt-2 text-sm">{d.desc}</p>
              <div className="text-sm text-slate-600 mt-3">Download </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="subscribe" className="bg-slate-100">
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Want monthly playbooks?</h2>
            <p className="text-slate-700 mt-1">Subscribe and get practical templates and case notes.</p>
          </div>
          <a className="btn-primary" href="/newsletter">Subscribe</a>
        </div>
      </section>
    </main>
  );
}

