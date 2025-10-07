import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Executive Search | Tecronix — VP & C-Suite with Diligence and Onboarding',
  description: 'Retained executive search for VP and C-suite roles across technology, healthcare, finance, and operations. Competency models, slate calibration, structured diligence, and 90-day onboarding.'
};

export default function ExecutiveSearchPage() {
  return (
    <main>
      {/* HERO */}
      <section className='bg-slate-900 text-white'>
        <div className='container py-16'>
          <h1 className='max-w-4xl'>Executive Search: Leaders Who Ship Outcomes</h1>
          <p className='mt-4 max-w-3xl text-white/80'>
            Confidential retained searches for VP and C-suite roles. Success profiles, market mapping, calibrated slates,
            structured diligence, and onboarding that accelerates impact.
          </p>
          <div className='mt-8 flex flex-wrap gap-4'>
            <a href='#scope' className='btn-primary'>What We Do</a>
            <a href='/contact' className='btn-outline'>Start a Search</a>
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section id='scope' className='container py-12'>
        <h2>Scope & Specializations</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Technology Leadership','CTO, VP Engineering, VP Product, VP Data/AI, CISO'],
            ['Go-To-Market','CRO, CMO, VP Sales, VP Marketing, VP CS'],
            ['Operations & Finance','COO, VP Ops, CFO/Controller, VP Supply Chain'],
            ['Healthcare & Clinical','CNO, VP Revenue Cycle, VP HIM, VP Patient Access'],
            ['People & Talent','CHRO, VP People, VP Talent/TA, DEI leaders'],
            ['Retail & eCom','VP Digital, VP Merch, VP Stores/DC Operations']
          ].map(([title, blurb]) => (
            <article key={title as string} className='p-6 rounded-2xl border'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{blurb}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article>
          <h2>Our Retained Process</h2>
          <ol className='mt-4 list-decimal pl-6 space-y-2 text-slate-700'>
            <li><strong>Success Profile:</strong> outcomes, competencies, scope-of-impact, first-12-month goals.</li>
            <li><strong>Market Map:</strong> target companies, adjacency logic, diversity goals, no-poach constraints.</li>
            <li><strong>Sourcing & Outreach:</strong> direct, confidential, with calibrated EVP & comp positioning.</li>
            <li><strong>Longlist → Shortlist:</strong> evidence-based write-ups, artifacts, risk/mitigation notes.</li>
            <li><strong>Interview Design:</strong> structured panels with case prompts and scoring rubrics.</li>
            <li><strong>Diligence:</strong> references, work-sample back checks, background/education verification.</li>
            <li><strong>Offer & Close:</strong> expectation alignment, acceptance plan, resignation risk management.</li>
            <li><strong>Onboarding:</strong> 30/60/90 plan, stakeholder map, early-wins milestones.</li>
          </ol>
        </article>
        <aside className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>What You See Weekly</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>Pipeline: mapped → contacted → engaged → interviewing → finalist</li>
            <li>Diversity slate composition and movement</li>
            <li>Market intel: comp, narratives, acceptance risks</li>
            <li>Close plan and onboarding preview</li>
          </ul>
        </aside>
      </section>

      {/* DELIVERABLES */}
      <section className='container py-12'>
        <h2>Deliverables</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Success Profile & Scorecard','Competencies, behaviors, outcomes, and rubric.'],
            ['Market Map','Targets, adjacency logic, and diversity goals.'],
            ['Candidate Write-Ups','Evidence, artifacts, risks, and comp alignment.'],
            ['Diligence Pack','References, verification, and scenario debriefs.'],
            ['Offer Toolkit','Narratives, comparables, and acceptance plan.'],
            ['Onboarding Plan','Stakeholders, 30/60/90, and success metrics.']
          ].map(([title, blurb]) => (
            <article key={title as string} className='p-6 rounded-2xl border'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{blurb}</p>
            </article>
          ))}
        </div>
      </section>

      {/* COMMERICALS */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article>
          <h2>Commercials & Guarantees</h2>
          <ul className='mt-3 list-disc pl-6 text-slate-700 space-y-2'>
            <li>Retained fee structure with staged milestones (launch / slate / close).</li>
            <li>Replacement guarantee window for unforeseen separations.</li>
            <li>Expense policy transparent and pre-approved.</li>
          </ul>
        </article>
        <article className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>Confidentiality & Conflicts</h3>
          <p className='mt-2 text-slate-700'>
            Clear no-poach windows, conflict checks, NDA/PA, and discreet outreach. Candidate data handled under least-privilege access.
          </p>
        </article>
      </section>

      {/* CASES */}
      <section className='container py-12'>
        <h2>Recent Placements</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['VP Engineering · SaaS','Closed in 72 days; platform reliability +19% within two quarters.'],
            ['CNO · Regional Health System','Patient throughput up; denials down with new RC governance.'],
            ['VP Supply Chain · Retail','OTIF +8 pts after network & labor standards program.']
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
        <h2>Executive Search FAQs</h2>
        <div className='mt-4 grid md:grid-cols-2 gap-6 text-slate-700'>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>How long does a typical search take?</summary>
            <p className='mt-2'>8–12 weeks for VP; C-suite may take longer based on market and scope.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Do you present diverse slates?</summary>
            <p className='mt-2'>Yes — we commit to slate composition goals agreed at kickoff and report progress weekly.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Can you run confidential backfills?</summary>
            <p className='mt-2'>Absolutely. Discreet outreach and scheduling minimize exposure risk.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Do you help with onboarding?</summary>
            <p className='mt-2'>We co-author a 30/60/90 plan and run alignment sessions with key stakeholders.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-slate-100'>
        <div className='container py-12 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <h2>Ready to hire a leader?</h2>
            <p className='text-slate-700 mt-1'>We’ll share a sample success profile and a first market map within days.</p>
          </div>
          <a href='/contact' className='btn-primary'>Start a Search</a>
        </div>
      </section>
    </main>
  );
}

