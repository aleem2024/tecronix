import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consulting | tecronix USA — Talent Operations, Hiring Systems, and Delivery Excellence',
  description: 'Design scorecards, interview loops, SLAs, SOPs, dashboards, and operating models. We fix the system: faster hiring, stronger quality, and predictable delivery across functions.'
};

export default function ConsultingSolutionPage() {
  return (
    <main>
      {/* HERO */}
      <section className='bg-slate-900 text-white'>
        <div className='container py-16'>
          <h1 className='max-w-4xl'>Consulting: Build the System That Wins</h1>
          <p className='mt-4 max-w-3xl text-white/80'>
            When ad-hoc isn’t cutting it, we design scorecards, interview kits, hiring funnels, SOPs, SLAs, and dashboards — then help you run them.
            Results: faster cycles, better quality, and fewer surprises.
          </p>
          <div className='mt-8 flex flex-wrap gap-4'>
            <a href='#capabilities' className='btn-primary'>What We Fix</a>
            <a href='/contact' className='btn-outline'>Request Talent</a>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id='capabilities' className='container py-12'>
        <h2>Core Capabilities</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Talent Operations','Scorecards, interview design, funnel analytics, recruiter enablement.'],
            ['Hiring Systems','Intake to offer loop with SLAs, templates, and decision hygiene.'],
            ['Org & Process','RACI, SOPs, tiered huddles, risk registers, and visual management.'],
            ['Quality & SLAs','Definitions, QA sampling, acceptance criteria, and service reviews.'],
            ['Analytics & Dashboards','Pipelines, throughput, reliability, quality, and forecasting.'],
            ['Change & Enablement','Playbooks, training, comms plans, and leadership cadence.']
          ].map(([title, blurb]) => (
            <article key={title as string} className='p-6 rounded-2xl border'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{blurb}</p>
            </article>
          ))}
        </div>
      </section>

      {/* OFFERINGS */}
      <section className='container py-12'>
        <h2>Engagements We Run</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Hiring System Diagnostic (4–6 weeks)','Assess intake → offer. Deliver scorecards, loop design, SLAs, and reporting.'],
            ['Recruiting Analytics & Capacity','Build dashboards, staffing models, and productivity targets with coaching.'],
            ['Managed Intake & Calibration','We facilitate intakes, write success profiles, and keep loops on-rails.'],
            ['SLA & SOP Program','Stand up SOPs, QA rubrics, and cadence for service teams (RCM, F&A, CX).'],
            ['Delivery Playbook','From backlog to QBRs — templates, definitions, and operating rhythm.'],
            ['Org Redesign & RACI','Clarify ownership, handoffs, and escalation paths; implement tiered huddles.']
          ].map(([title, text]) => (
            <article key={title as string} className='p-6 rounded-2xl border'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* METHOD */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article>
          <h2>Method: Diagnose → Design → Enable → Run</h2>
          <ol className='mt-4 list-decimal pl-6 space-y-2 text-slate-700'>
            <li><strong>Diagnose:</strong> interviews, artifact review, funnel metrics, and risk scan.</li>
            <li><strong>Design:</strong> scorecards, loops, SOPs, SLAs, dashboards, and RACI.</li>
            <li><strong>Enable:</strong> playbooks, training, comms, and pilot coaching.</li>
            <li><strong>Run:</strong> weekly cadence, KPI reviews, and QBRs — or handoff.</li>
          </ol>
          <p className='text-slate-600 text-sm mt-3'>We can deliver and step back, or we can operate with you until it sticks.</p>
        </article>
        <aside className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>Artifacts You Get</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>Success profiles & interview kits</li>
            <li>SOPs, QA rubrics, and SLAs/OLAs</li>
            <li>Dashboards (hiring and service delivery)</li>
            <li>RACI, comms plan, and risk register</li>
          </ul>
        </aside>
      </section>

      {/* EXAMPLES */}
      <section className='container py-12'>
        <h2>Before/After Examples</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Hiring Cycle Time','Median from 53 → 26 days via intake, scorecards, and panel discipline.'],
            ['Offer Acceptance','+11 pts with expectation alignment and structured close plan.'],
            ['Service Reliability','SLA attainment +15 pts after SOPs, QA sampling, and tiered huddles.']
          ].map(([title, text]) => (
            <article key={title as string} className='p-6 rounded-2xl border'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* COMMERCIALS */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article>
          <h2>Commercials</h2>
          <ul className='mt-3 list-disc pl-6 text-slate-700 space-y-2'>
            <li>Fixed-fee diagnostic with defined deliverables.</li>
            <li>Milestone-based projects for design & enablement.</li>
            <li>Optional run-state support or transition to managed services.</li>
          </ul>
        </article>
        <article className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>Change Management</h3>
          <p className='mt-2 text-slate-700'>
            We build adoption plans: leadership alignment, enablement materials, office hours, and KPI checkpoints with clear owners.
          </p>
        </article>
      </section>

      {/* FAQ */}
      <section className='container py-12'>
        <h2>Consulting FAQs</h2>
        <div className='mt-4 grid md:grid-cols-2 gap-6 text-slate-700'>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Can you work alongside our in-house TA/ops?</summary>
            <p className='mt-2'>Yes — we co-design with your team and enable them with playbooks and training.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>What tools do you support?</summary>
            <p className='mt-2'>Most major ATS/HRIS/ITSM/BI stacks. We adapt templates to your systems and governance.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Will you run the new process after design?</summary>
            <p className='mt-2'>We can operate temporarily (or fully via managed services) until your team is ready to own it.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>How fast do we see impact?</summary>
            <p className='mt-2'>Diagnostics deliver quick wins in weeks; full designs land in 4–8 weeks with measurable KPIs.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-slate-100'>
        <div className='container py-12 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <h2>Want a faster, higher-signal hiring and delivery system?</h2>
            <p className='text-slate-700 mt-1'>We’ll run a diagnostic and give you the playbook — or help you run it.</p>
          </div>
          <a href='/contact' className='btn-primary'>Request a Diagnostic</a>
        </div>
      </section>
    </main>
  );
}


