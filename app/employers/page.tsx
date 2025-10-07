import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'For Employers | tecronix USA — Hire Talent, Buy Outcomes, or Run a Search',
  description: 'Submit roles or outcomes and get a calibrated plan: staffing, outsourcing (managed services), or executive search. Structured intake, clear SLAs, and weekly visibility.'
};

export default function EmployersPage() {
  return (
    <main>
      {/* HERO */}
<section
  className="relative text-white"
  style={{
    backgroundImage: "url('/img/hero-employers-bg.jpg')", // place this file under /public/img/
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-slate-900/70"></div>

  <div className="container py-20 relative z-10">
    <h1 className="max-w-5xl font-bold text-4xl md:text-5xl leading-tight">
      For Employers | Hire Talent, Buy Outcomes, or Run a Search
    </h1>
    <p className="mt-4 max-w-3xl text-white/80">
      Share your roles or the outcomes you need. We’ll propose the right model — staffing,
      managed services, or executive search — with timelines, commercials, and a first
      shortlist or pilot plan.
    </p>
    <div className="mt-6 flex flex-wrap gap-3">
      <a href="/employers/onboarding" className="btn-primary">Start Intake</a>
      <a href="/employers/compare-models" className="btn-outline">Compare Models</a>
    </div>
  </div>
</section>


      {/* PROOF STRIP */}
      <section className='container py-10'>
        <div className='grid md:grid-cols-4 gap-4'>
          {[
            ['7–14d','First shortlist targets'],
            ['50 states','Nationwide U.S. coverage'],
            ['97%','Client satisfaction'],
            ['10,000+','Candidates placed']
          ].map(([n,l]) => (
            <div key={l as string} className='p-6 rounded-2xl border text-center'>
              <div className='text-3xl font-bold'>{n}</div>
              <div className='text-slate-600 mt-1'>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARE MODELS */}
      <section id='compare' className='container py-12'>
        <h2>How We Can Help</h2>
        <div className='mt-6 grid lg:grid-cols-3 gap-6'>
          <a href='/solutions/staffing' className='p-6 rounded-2xl border hover:shadow-sm transition block'>
            <div className='text-xs uppercase tracking-wide text-slate-500'>Hire People</div>
            <div className='font-semibold mt-1'>Staffing</div>
            <p className='text-slate-700 mt-2 text-sm'>Contract, C2H, and direct hire across tech, healthcare, finance, manufacturing, logistics, retail, and admin.</p>
            <div className='text-sm text-slate-600 mt-3'>Explore →</div>
          </a>
          <a href='/solutions/outsourcing' className='p-6 rounded-2xl border hover:shadow-sm transition block'>
            <div className='text-xs uppercase tracking-wide text-slate-500'>Buy Outcomes</div>
            <div className='font-semibold mt-1'>Outsourcing (Managed Services)</div>
            <p className='text-slate-700 mt-2 text-sm'>Teams with SLAs, SOPs, QA, and dashboards for service desks, revenue cycle, F&A, catalog/content, and PMO.</p>
            <div className='text-sm text-slate-600 mt-3'>Explore →</div>
          </a>
          <a href='/solutions/executive-search' className='p-6 rounded-2xl border hover:shadow-sm transition block'>
            <div className='text-xs uppercase tracking-wide text-slate-500'>Hire Leaders</div>
            <div className='font-semibold mt-1'>Executive Search</div>
            <p className='text-slate-700 mt-2 text-sm'>Retained search for VP/C-suite with success profiles, slate calibration, and structured diligence.</p>
            <div className='text-sm text-slate-600 mt-3'>Explore →</div>
          </a>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="container py-12">
        <h2>Functions & Industries</h2>
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          {[
            ["Technology","Engineers, data/ML, SRE, product, UX, security, IT.","/industries/technology"],
            ["Healthcare","RCM (patient access, coding, AR/denials), HIM, clinical support, EHR.","/industries/healthcare"],
            ["Finance & Accounting","AP/AR, payroll, GL/close, FP&A, audit/controls.","/industries/finance-accounting"],
            ["Manufacturing","Maintenance, quality, supervision, EHS, planners.","/industries/manufacturing"],
            ["Logistics","Planners, warehouse leads, inventory control, routing.","/industries/logistics"],
            ["Retail & Admin","CX, merchandising, content/catalog, coordinators.","/industries/retail-admin"]
          ].map(([t,d,href]) => (
            <a key={t as string} href={href as string} className="card block hover:shadow-sm">
              <div className="font-semibold">{t}</div>
              <p className="muted mt-2 text-sm">{d}</p>
            </a>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="container py-12 grid lg:grid-cols-2 gap-10">
        <article>
          <h2>Operating Rhythm</h2>
          <ol className="mt-4 list-decimal pl-6 space-y-2 text-slate-700">
            <li><strong>Define success:</strong> outcomes, constraints, interfaces, KPIs.</li>
            <li><strong>Scorecards & SOPs:</strong> interview kits or runbooks with examples.</li>
            <li><strong>SLAs & QA:</strong> tiers, inclusion/exclusions, sampling plan and calibration notes.</li>
            <li><strong>Dashboards & notes:</strong> throughput/quality/reliability; owners and due dates.</li>
            <li><strong>Governance:</strong> risk register, change control, QBR roadmaps.</li>
          </ol>
        </article>
        <aside className="card bg-slate-50">
          <h3 className="font-semibold">Artifacts You Get</h3>
          <ul className="mt-3 space-y-2 text-slate-700">
            <li>Success profile, scorecard, and interview kit</li>
            <li>SOPs/macros, QA rubrics, sampling plan</li>
            <li>SLA policy and exception matrix</li>
            <li>Dashboard links and weekly note format</li>
          </ul>
        </aside>
      </section>

      {/* INTEGRATIONS */}
      <section className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h3 className="font-semibold">ATS/CRM & Systems</h3>
          <ul className="mt-3 text-slate-700 space-y-2">
            <li>We work in your ATS/CRM or ours; export/import support</li>
            <li>Ticketing/queues for managed services; evidence attachments</li>
            <li>Analytics dashboards with weekly snapshots</li>
          </ul>
        </article>
        <article className="card">
          <h3 className="font-semibold">Security & Compliance</h3>
          <ul className="mt-3 text-slate-700 space-y-2">
            <li>Least-privilege access and audit trails</li>
            <li>W-2 contractors; I-9/E-Verify; background/drug where permitted</li>
            <li>PHI-aware (BAAs) and control evidence for F&A</li>
          </ul>
        </article>
      </section>

      {/* RFP / DUE DILIGENCE */}
      <section id="rfp" className="container py-12">
        <h2>RFP & Due Diligence</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            ["Security Questionnaire","We complete standard security/IT questionnaires and provide control summaries."],
            ["Insurance & Docs","COI, W-9, E-Verify, EEO policy, accessibility statement, sample MSAs/SOWs."],
            ["References & Case Notes","References by function/industry; anonymized case outcomes with KPIs."]
          ].map(([t,d]) => (
            <article key={t as string} className="card">
              <div className="font-semibold">{t}</div>
              <p className="muted mt-2 text-sm">{d}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border p-6 bg-slate-50">
          <div className="font-semibold">Documents (Placeholders)</div>
          <ul className="mt-3 list-disc pl-6 text-sm text-slate-700 space-y-1">
            <li><a className="underline" href="/docs/soc-brief.pdf">Security & Controls Brief (PDF)</a></li>
            <li><a className="underline" href="/docs/insurance-coi.pdf">Certificate of Insurance (PDF)</a></li>
            <li><a className="underline" href="/docs/sample-sow.pdf">Sample SOW (PDF)</a></li>
          </ul>
          <p className="text-xs text-slate-500 mt-3">Replace with your finalized PDFs at deployment.</p>
        </div>
      </section>


      {/* PROCESS */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article>
          <h2>What Happens Next</h2>
          <ol className='mt-4 list-decimal pl-6 space-y-2 text-slate-700'>
            <li>Discovery call and success profile (roles or SLAs/KPIs)</li>
            <li>Plan & commercials (model, timeline, risks, and owners)</li>
            <li>Launch: sourcing sprint or pilot stand-up</li>
            <li>Weekly visibility: pipeline, metrics, actions, risks</li>
            <li>QBRs: progress, improvements, roadmap</li>
          </ol>
        </article>
        <aside className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>You’ll See</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>Scorecards or SLAs with clear definitions</li>
            <li>Weekly notes with decisions and next steps</li>
            <li>Dashboards for throughput, quality, reliability</li>
            <li>Risk register with mitigations</li>
          </ul>
        </aside>
      </section>

      {/* COMPLIANCE */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article className='p-6 rounded-2xl border'>
          <h3 className='font-semibold'>U.S. Compliance</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>Worker classification guardrails; W-2 for contractors</li>
            <li>I-9/E-Verify, background checks, & drug screening as permitted</li>
            <li>Privacy & security SOPs with least-privilege access</li>
            <li>EEO, accessibility, and fair hiring commitments</li>
          </ul>
        </article>
        <article className='p-6 rounded-2xl border'>
          <h3 className='font-semibold'>Service Levels</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>First shortlist targets: 7–14 days (role dependent)</li>
            <li>Interview SLAs and offer decision cadence</li>
            <li>Post-start check-ins (30/60/90) and satisfaction survey</li>
          </ul>
        </article>
      </section>

      {/* CASES */}
      <section className='container py-12'>
        <h2>Recent Outcomes</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Engineering Surge','8 hires in 6 weeks; cycle time −32%.'],
            ['Revenue Cycle','Throughput +30% and aging −18% in 8 weeks.'],
            ['Retail Peak','UPH +14% and OTIF +8 pts via waves and macros.']
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
        <h2>Employer FAQs</h2>
        <div className='mt-4 grid md:grid-cols-2 gap-6 text-slate-700'>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Can you help write the JD & scorecard?</summary>
            <p className='mt-2'>Yes — we produce success profiles, interview kits, and rubrics.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Do you integrate with our systems?</summary>
            <p className='mt-2'>We align to your ATS/HRIS/ITSM/ERP with least-privilege access and evidence logging.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>What if urgency changes?</summary>
            <p className='mt-2'>We can flex sourcing intensity or propose a managed team pilot to stabilize quickly.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Do you cover all 50 states?</summary>
            <p className='mt-2'>Yes — with state-specific compliance and background practices.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-slate-100'>
        <div className='container py-12 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <h2>Ready to start?</h2>
            <p className='text-slate-700 mt-1'>Share your roles or outcomes and we’ll get moving.</p>
          </div>
          <a href='#intake' className='btn-primary'>Start Intake</a>
        </div>
      </section>
    </main>
  );
}

