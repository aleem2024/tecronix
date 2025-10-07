import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Templates & Downloads | Tecronix",
  description: "RFP, runbook, onboarding, QA sampling, DPA, and security report templates  ready to download and tailor."
};

type Tpl = { name: string; href: string; desc: string; ext: "MD" | "CSV" | "PDF" | "ZIP" };

const templates: Tpl[] = [
  { name: "RFP Checklist", href: "/templates/rfp-checklist.md", desc: "Scope staffing, outcomes, or consulting with clear sections.", ext: "MD" },
  { name: "Runbook Outline", href: "/templates/runbook-outline.md", desc: "Document SOPs, exceptions, QA sampling, dashboards, and change control.", ext: "MD" },
  { name: "QA Sampling Plan", href: "/templates/qa-sampling-plan.csv", desc: "Start a defect taxonomy with AQL and acceptance rules.", ext: "CSV" },
  { name: "Onboarding Kickoff Checklist", href: "/templates/onboarding-kickoff-checklist.md", desc: "Access, SOP seed, SLAs/QA, dashboards, comms cadence.", ext: "MD" },
  { name: "DPA Template (Placeholder)", href: "/templates/dpa-template.md", desc: "Controller/Processor roles, TOMs, sub-processors, transfers.", ext: "MD" },
  { name: "Vulnerability Report Template", href: "/templates/vuln-report.md", desc: "Structured format for coordinated security reports.", ext: "MD" },
  { name: "Sub-Processors Registry (Sample)", href: "/templates/sub-processors.csv", desc: "Transparency registry format for vendors.", ext: "CSV" }
];

export default function TemplatesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Templates &amp; Downloads</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Practical starting points for proposals, runbooks, onboarding, QA sampling, privacy, and security.
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <a className="btn-outline" href="#list">Browse</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section id="list" className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map(t => (
            <a key={t.name} className="card block hover:shadow-sm" href={t.href} download>
              <div className="flex items-center justify-between">
                <div className="font-semibold">{t.name}</div>
                <div className="badge">{t.ext}</div>
              </div>
              <p className="muted text-sm mt-2">{t.desc}</p>
              <div className="text-sm text-slate-600 mt-3">Download </div>
            </a>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-4">
          These files are placeholders. Replace with your finalized documents before launch.
        </p>
      </section>

      {/* LINKS */}
      <section className="bg-slate-100">
        <div className="container py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a className="card block hover:shadow-sm" href="/rfp">
            <div className="font-semibold">Request for Proposal</div>
            <p className="muted text-sm mt-2">Kick off with scope, SLAs/QA, and pilot plan.</p>
          </a>
          <a className="card block hover:shadow-sm" href="/trust">
            <div className="font-semibold">Trust Center</div>
            <p className="muted text-sm mt-2">Security, reliability, and compliance.</p>
          </a>
          <a className="card block hover:shadow-sm" href="/employers/onboarding">
            <div className="font-semibold">Onboarding</div>
            <p className="muted text-sm mt-2">Kickoff  pilot  scale, with clear governance.</p>
          </a>
        </div>
      </section>
    </main>
  );
}

