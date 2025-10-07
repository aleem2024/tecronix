"use client";
import { useState } from "react";

const models = ["Staffing", "Managed Services (Outcomes)", "Consulting", "Hybrid"];
const industries = ["Healthcare RCM", "Logistics", "Manufacturing", "Finance & Accounting", "Other / Mixed"];

export default function RfpClient() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", industry: industries[0],
    model: models[0], timeline: "", budget: "", scope: "", systems: "", slas: "", notes: ""
  });
  const update = (k: string, v: string) => setForm(prev => ({ ...prev, [k]: v }));

  const mailtoHref = () => {
    const subject = encodeURIComponent("RFP: " + (form.company || "New Inquiry"));
    const body = encodeURIComponent(
`Name: ${form.name}
Company: ${form.company}
Email: ${form.email}
Industry: ${form.industry}
Preferred Model: ${form.model}
Timeline: ${form.timeline}
Budget (optional): ${form.budget}

Scope:
${form.scope}

Systems & Access:
${form.systems}

Targets (SLAs/QA):
${form.slas}

Notes:
${form.notes}
`);
    return `mailto:sales@tecronix.com?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Request for Proposal</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Tell us what you need. We will return a clear proposal and (optionally) a pilot plan with SLAs/QA.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#form">Share Scope</a>
            <a className="btn-outline" href="#process">Our Process</a>
            <a className="btn-primary" href="/templates/rfp-checklist.md" download>Download Checklist</a>
          </div>
        </div>
      </section>

      <section id="form" className="container py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 card">
            <h2 className="font-semibold">Scope Intake</h2>
            <div className="grid md:grid-cols-2 gap-3 mt-4">
              <label className="grid gap-1">
                <span className="text-sm text-slate-600">Your Name</span>
                <input className="rounded-xl px-4 py-3 border" value={form.name} onChange={e=>update("name", e.target.value)} />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-slate-600">Work Email</span>
                <input className="rounded-xl px-4 py-3 border" value={form.email} onChange={e=>update("email", e.target.value)} />
              </label>
              <label className="grid gap-1 md:col-span-2">
                <span className="text-sm text-slate-600">Company</span>
                <input className="rounded-xl px-4 py-3 border" value={form.company} onChange={e=>update("company", e.target.value)} />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-slate-600">Industry</span>
                <select className="rounded-xl px-4 py-3 border" value={form.industry} onChange={e=>update("industry", e.target.value)}>
                  {industries.map(i => <option key={i} value={i}>{i}</option>)}
                </select>
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-slate-600">Preferred Model</span>
                <select className="rounded-xl px-4 py-3 border" value={form.model} onChange={e=>update("model", e.target.value)}>
                  {models.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-slate-600">Timeline</span>
                <input className="rounded-xl px-4 py-3 border" placeholder="e.g., Pilot in 68 weeks" value={form.timeline} onChange={e=>update("timeline", e.target.value)} />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-slate-600">Budget (optional)</span>
                <input className="rounded-xl px-4 py-3 border" placeholder="$ or range" value={form.budget} onChange={e=>update("budget", e.target.value)} />
              </label>
            </div>

            <div className="grid gap-3 mt-4">
              <label className="grid gap-1">
                <span className="text-sm text-slate-600">Scope (processes, volumes, schedules, geos)</span>
                <textarea className="rounded-xl px-4 py-3 border min-h-[120px]" value={form.scope} onChange={e=>update("scope", e.target.value)} />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-slate-600">Systems &amp; Access</span>
                <textarea className="rounded-xl px-4 py-3 border min-h-[100px]" value={form.systems} onChange={e=>update("systems", e.target.value)} />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-slate-600">Targets (SLAs/QA, definitions, evidence)</span>
                <textarea className="rounded-xl px-4 py-3 border min-h-[100px]" value={form.slas} onChange={e=>update("slas", e.target.value)} />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-slate-600">Notes / Risks</span>
                <textarea className="rounded-xl px-4 py-3 border min-h-[80px]" value={form.notes} onChange={e=>update("notes", e.target.value)} />
              </label>
            </div>

            <div className="mt-4 flex gap-3">
              <a className="btn-outline" href="/templates/rfp-checklist.md" download>Download Checklist</a>
              <a className="btn-primary" href={mailtoHref()}>Submit via Email</a>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Demo submission uses <code>mailto:</code>. For production, connect this form to your CRM or ticketing system.
            </p>
          </article>

          <aside className="card">
            <h3 className="font-semibold">What We Return</h3>
            <ul className="mt-3 text-slate-700 text-sm space-y-2">
              <li>Model recommendation (Staffing / Outcomes / Consulting)</li>
              <li>Pilot plan with SLAs/QA and dashboards</li>
              <li>Commercials with assumptions</li>
              <li>Risks &amp; mitigations, change control</li>
            </ul>
            <div className="mt-4 grid gap-3">
              <a className="btn-outline" href="/employers/compare-models">Compare Models</a>
              <a className="btn-outline" href="/tools/roi-calculator">Estimate ROI</a>
              <a className="btn-outline" href="/employers/onboarding">Onboarding</a>
            </div>
          </aside>
        </div>
      </section>

      <section id="process" className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-2 gap-10">
          <article className="card">
            <h2 className="font-semibold">Our RFP Process</h2>
            <ol className="mt-3 list-decimal pl-6 text-slate-700 space-y-2">
              <li>Scope review &amp; clarifications</li>
              <li>Model fit (Staffing vs. Outcomes vs. Consulting)</li>
              <li>Pilot design: SOPs/QA, dashboards, go/no-go criteria</li>
              <li>Commercials &amp; SOW assumptions</li>
            </ol>
          </article>
          <article className="card">
            <h2 className="font-semibold">Options</h2>
            <ul className="mt-3 text-slate-700 text-sm space-y-2">
              <li>NDAs and diligence pack via Trust Center</li>
              <li>Reference calls on request</li>
              <li>Hybrid models (e.g., staffed QA + outcome production)</li>
            </ul>
          </article>
        </div>
      </section>

      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Ready to start?</h2>
            <p className="text-slate-700 mt-1">Send the form via email, or attach the checklist with any additional docs.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/templates/rfp-checklist.md" download>Checklist</a>
            <a className="btn-primary" href="mailto:sales@tecronix.com">Email Sales</a>
          </div>
        </div>
      </section>
    </main>
  );
}


