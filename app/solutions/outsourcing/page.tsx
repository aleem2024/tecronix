import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Outsourcing (Managed Services) | tecronix USA — Buy Outcomes with SLAs',
  description: 'Outcome-based teams for service desks, revenue cycle, data ops, catalog/content, PMO and more — with SLAs, SOPs, QA, dashboards, and governance. U.S. compliance and change management.'
};

export default function OutsourcingPage() {
  const programs = [
    { area: "Technology", items: ["Content Ops", "Sustaining Engineering", "QA/Test"] , href:"/industries/technology"},
    { area: "Healthcare / RCM", items: ["Denials Mgmt", "Eligibility & Prior Auth", "DNFB Cleanup"], href:"/industries/healthcare"},
    { area: "Finance & Accounting", items: ["AP Exceptions", "Close Governance", "Collections"], href:"/industries/finance-accounting"},
    { area: "Manufacturing", items: ["Quality Containment", "PM Backlog Reduction", "Throughput Uplift"], href:"/industries/manufacturing"},
    { area: "Logistics", items: ["Dock-to-Stock", "Pick Accuracy", "Cycle Count Health"], href:"/industries/logistics"},
    { area: "Retail & Admin", items: ["CX Reliability", "PDP Enrichment", "Launch Readiness"], href:"/industries/retail-admin"},
  ];

  return (
    <main>
      {/* HERO */}
      <section className='bg-slate-900 text-white'>
        <div className='container py-16'>
          <h1 className='max-w-5xl'>Outsourcing: Buy Outcomes, Not Just Hours</h1>
          <p className='mt-4 max-w-3xl text-white/80'>
            We design, stand up, and operate managed teams with SLAs, SOPs, QA sampling, and dashboards. Start small, scale with confidence.
          </p>
          <div className='mt-8 flex flex-wrap gap-4'>
            <a href='#design' className='btn-primary'>How It Works</a>
            <a href='/contact' className='btn-outline'>Request a Proposal</a>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="container py-7">
        <div className="grid md:grid-cols-4 gap-1">
          {[
            ["< 1 week","Typical pilot stand-up"],
            ["SOPs & Macros","Versioned runbooks"],
            ["SLAs & QA","Sampling with AQL targets"],
            ["Dashboards","Throughput A· Quality A· Reliability"]
          ].map(([k,v]) => (
            <div key={k as string} className="card text-center">
              <div className="text-2xl font-bold">{k}</div>
              <div className="muted mt-1">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* USE CASES */}
      <section className='container py-12'>
        <h2>What We Operate</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Service & Support Desks','HR, IT, CX/email/chat/phone with intake, macros, QA, and reporting.'],
            ['Revenue Cycle','Patient access, coding, AR follow-up, and denials with QA and compliance.'],
            ['Finance Ops','AP/AR, reconciliations, payroll support, and close activities.'],
            ['Data Operations','Data clean-up, enrichment, QA, and stewardship workflows.'],
            ['Catalog & Content','PDP setup, enrichment, imagery/alt text, audits, and publishing cadences.'],
            ['Project & PMO','Intake, prioritization, status cadence, and risk tracking.']
          ].map(([title, blurb]) => (
            <article key={title as string} className='p-6 rounded-2xl border'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{blurb}</p>
            </article>
          ))}
        </div>
      </section>

      {/* DESIGN & TRANSITION */}
      <section id='design' className='container py-12 grid md:grid-cols-2 gap-10'>
        <article>
          <h2>Design → Stand-Up → Run</h2>
          <ol className='mt-4 list-decimal pl-6 space-y-2 text-slate-700'>
            <li><strong>Discovery & Baseline:</strong> volumes, arrival patterns, SLAs, definitions, exceptions.</li>
            <li><strong>Service Design:</strong> SOPs, RACI, skills matrix, tooling, and data model.</li>
            <li><strong>Transition:</strong> knowledge transfer, shadow ↔ reverse shadow, pilots.</li>
            <li><strong>Run:</strong> tiered huddles, visual management, exception handling, QA.</li>
            <li><strong>Improve:</strong> PDCA, backlog grooming, automation opportunities.</li>
          </ol>
        </article>
        <aside className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>Artifacts We Deliver</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>Service charter with SLAs/OLAs & definitions</li>
            <li>SOP playbook, templates/macros, and QA rubric</li>
            <li>Capacity model & staffing plan (by interval)</li>
            <li>Dashboards: throughput, quality, reliability</li>
          </ul>
        </aside>
      </section>

      {/* KPIs */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article className='p-6 rounded-2xl border'>
          <h3 className='font-semibold'>Core KPIs</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>Throughput & backlog burn-down</li>
            <li>Quality (QA pass rate, defects/DPMO, rework)</li>
            <li>Reliability (SLA attainment, schedule adherence)</li>
            <li>Experience (CSAT, FCR where applicable)</li>
          </ul>
        </article>
        <article className='p-6 rounded-2xl border'>
          <h3 className='font-semibold'>Compliance & Controls</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>Least-privilege access & evidence logging</li>
            <li>Privacy-aware handling of PII/PHI/PCI as applicable</li>
            <li>Change management, approvals, and audit trails</li>
            <li>Periodic control testing and sampling</li>
          </ul>
        </article>
      </section>

      {/* GOVERNANCE */}
      <section className='container py-12'>
        <h2>Governance & Communication</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Cadence','Daily tier-1 huddles, weekly ops review, monthly performance, quarterly business review (QBR).'],
            ['Transparency','Shared dashboards and notes: risks, root causes, actions, owners, due dates.'],
            ['Stakeholders','Clear RACI across your leaders and our engagement team.']
          ].map(([title, blurb]) => (
            <article key={title as string} className='p-6 rounded-2xl border'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{blurb}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PRICING MODELS */}
      <section className='container py-12'>
        <h2>Commercial Models</h2>
        <div className='mt-6 overflow-x-auto'>
          <table className='min-w-full text-sm'>
            <thead>
              <tr className='text-left border-b'>
                <th className='py-3 pr-6'>Model</th>
                <th className='py-3 pr-6'>Best For</th>
                <th className='py-3 pr-6'>How It Works</th>
              </tr>
            </thead>
            <tbody className='align-top text-slate-700'>
              <tr className='border-b'>
                <td className='py-3 pr-6 font-medium'>Monthly Unit Price</td>
                <td className='py-3 pr-6'>Stable repeatable volumes</td>
                <td className='py-3 pr-6'>Per-FTE equivalent with SLA targets & credits.</td>
              </tr>
              <tr className='border-b'>
                <td className='py-3 pr-6 font-medium'>Per-Transaction</td>
                <td className='py-3 pr-6'>High-volume standardized tasks</td>
                <td className='py-3 pr-6'>Price per item/case; quality/rework guardrails.</td>
              </tr>
              <tr>
                <td className='py-3 pr-6 font-medium'>Milestone-Based</td>
                <td className='py-3 pr-6'>Projects & transitions</td>
                <td className='py-3 pr-6'>Fixed price by deliverable; outcomes & acceptance.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className='text-xs text-slate-500 mt-3'>We tailor commercials to scope, complexity, risk, and expected improvements.</p>
      </section>

      {/* CASES */}
      <section className='container py-12'>
        <h2>Recent Outcomes</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Revenue Cycle','30% throughput lift and 18% aging reduction in 8 weeks with QA program.'],
            ['Catalog Ops','“No info” returns down 14% after PDP enrichment and image/alt QA.'],
            ['Service Desk','FCR +9 pts and backlog −61% via macros and priority matrix.']
          ].map(([title, text]) => (
            <article key={title as string} className='p-6 rounded-2xl border'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className='container py-12'>
        <h2>Outsourcing FAQs</h2>
        <div className='mt-4 grid md:grid-cols-2 gap-6 text-slate-700'>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Can you start with a pilot?</summary>
            <p className='mt-2'>Yes — we prefer pilots to calibrate SOPs, QA, and metrics before scaling.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Do you operate on our systems?</summary>
            <p className='mt-2'>Usually, yes. We align to your tools and policies with least-privilege access and evidence logging.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>How do you ensure quality?</summary>
            <p className='mt-2'>Defined acceptance criteria, QA sampling, coaching loops, and visible dashboards tied to SLAs.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Where are teams based?</summary>
            <p className='mt-2'>Primarily U.S.-based with options for blended models depending on compliance and work type.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-slate-100'>
        <div className='container py-12 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <h2>Ready to buy outcomes?</h2>
            <p className='text-slate-700 mt-1'>We’ll propose a pilot and show the roadmap to scale.</p>
          </div>
          <a href='/contact' className='btn-primary'>Request a Proposal</a>
        </div>
      </section>
    </main>
  );
}


