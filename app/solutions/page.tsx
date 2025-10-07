import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions | Tecronix — Staffing, Outsourcing, Consulting, Executive Search',
  description: 'Explore staffing, outsourcing, consulting, and executive search solutions for U.S. employers. Models, process, ROI, and compliance.'
};

export default function SolutionsPage() {
  return (
    <main>
      {/* HERO */}
      <section className='bg-slate-900 text-white'>
        <div className='container py-16'>
          <h1 className='max-w-4xl'>Solutions that Scale with Your Business</h1>
          <p className='mt-4 max-w-3xl text-white/80'>
            From on-demand staffing to outcome-based outsourcing and executive search, choose a model aligned to speed, risk, and ROI — nationwide.
          </p>
          <div className='mt-8 flex flex-wrap gap-4'>
            <a href='/contact' className='btn-primary'>Request Talent</a>
            <a href='#compare' className='btn-outline'>Compare Models</a>
          </div>
        </div>
      </section>

      {/* QUICK CARDS */}
      <section className='container py-12 grid md:grid-cols-4 gap-6'>
        {[
          ['Staffing','Fast access to vetted talent — contract, temp-to-perm, and direct hire.','/solutions/staffing'],
          ['Outsourcing','Outcome-based delivery with managed teams and SLAs.','/solutions/outsourcing'],
          ['Consulting','Targeted expertise: workforce analytics, process, change.','/solutions/consulting'],
          ['Executive Search','Confidential leadership hiring with assessment & diligence.','/solutions/executive-search'],
        ].map(([title, desc, href]) => (
          <a key={title as string} href={href as string} className='p-6 rounded-2xl border hover:shadow-sm transition'>
            <h2 className='text-xl font-semibold'>{title}</h2>
            <p className='mt-2 text-slate-700'>{desc}</p>
            <div className='mt-3 text-sm text-slate-600'>Learn more →</div>
          </a>
        ))}
      </section>

      {/* STAFFING SECTION */}
      <section className='container py-12'>
        <h2>Staffing</h2>
        <p className='mt-3 text-slate-700 max-w-3xl'>
          Scale up or down quickly with W-2 contractors, temp-to-perm pilots, or direct hire recruiting. We calibrate on competencies,
          outcomes, compensation, and culture to deliver shortlists you can hire from with confidence.
        </p>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Contract / Temporary','Elastic capacity for projects, backfills, and peak seasons. Payroll, timesheets, ACA handled.','/solutions/staffing#contract'],
            ['Contract-to-Hire','Try-before-you-hire with conversion terms and milestone reviews.','/solutions/staffing#c2h'],
            ['Direct Hire (Perm)','Full-cycle search, structured interviews, references & offer support.','/solutions/staffing#direct']
          ].map(([title, body, href]) => (
            <a key={title as string} href={href as string} className='p-5 rounded-2xl border hover:shadow-sm transition'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{body}</p>
              <div className='text-sm text-slate-600 mt-2'>Explore →</div>
            </a>
          ))}
        </div>
      </section>

      {/* OUTSOURCING SECTION */}
      <section className='container py-12'>
        <h2>Outsourcing</h2>
        <p className='mt-3 text-slate-700 max-w-3xl'>
          Deliver outcomes with managed teams. We define scope, SLAs, and governance, then execute with transparent reporting and continuous improvement.
          Ideal for service desks, back-office ops, data operations, and repeatable workflows.
        </p>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Managed Services','Runbooks, SLAs, and steady-state delivery with change control.','/solutions/outsourcing#ms'],
            ['Project-Based (SOW)','Time-bound outcomes with milestone billing and acceptance.','/solutions/outsourcing#sow'],
            ['RPO / MSP','Recruitment or contingent workforce programs with centralized governance.','/solutions/outsourcing#rpo-msp']
          ].map(([title, body, href]) => (
            <a key={title as string} href={href as string} className='p-5 rounded-2xl border hover:shadow-sm transition'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{body}</p>
              <div className='text-sm text-slate-600 mt-2'>Explore →</div>
            </a>
          ))}
        </div>
      </section>

      {/* CONSULTING SECTION */}
      <section className='container py-12'>
        <h2>Consulting</h2>
        <p className='mt-3 text-slate-700 max-w-3xl'>
          Close capability gaps fast: workforce analytics, process optimization, talent ops, and organizational change — pragmatic deliverables, measurable ROI.
        </p>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Workforce Analytics','Capacity modeling, funnel metrics, compensation bands, DEI KPIs.','/solutions/consulting#analytics'],
            ['Talent Operations','Hiring process design, scorecards, interviewer enablement, ATS hygiene.','/solutions/consulting#talent-ops'],
            ['Change & Enablement','Playbooks, training, and adoption for leaders and teams.','/solutions/consulting#change']
          ].map(([title, body, href]) => (
            <a key={title as string} href={href as string} className='p-5 rounded-2xl border hover:shadow-sm transition'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{body}</p>
              <div className='text-sm text-slate-600 mt-2'>Explore →</div>
            </a>
          ))}
        </div>
      </section>

      {/* EXECUTIVE SEARCH SECTION */}
      <section className='container py-12'>
        <h2>Executive Search</h2>
        <p className='mt-3 text-slate-700 max-w-3xl'>
          Confidential leadership hiring for VP/C-suite. Market mapping, competency modeling, leadership assessment, references, and
          offer orchestration with stakeholder workshops.
        </p>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['C-Suite & VP','CEO, COO, CTO/CIO, CFO, CMO, CHRO, CRO.','/solutions/executive-search#csuite'],
            ['Leadership Assessment','Competency & behavior-based evaluation, references, 360 inputs.','/solutions/executive-search#assessment'],
            ['Confidential Searches','Tight controls, NDAs, and calibrated slates.','/solutions/executive-search#confidential']
          ].map(([title, body, href]) => (
            <a key={title as string} href={href as string} className='p-5 rounded-2xl border hover:shadow-sm transition'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{body}</p>
              <div className='text-sm text-slate-600 mt-2'>Explore →</div>
            </a>
          ))}
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section id='compare' className='container py-12'>
        <h2>Compare Models</h2>
        <div className='mt-6 overflow-x-auto'>
          <table className='min-w-full text-sm'>
            <thead>
              <tr className='text-left border-b'>
                <th className='py-3 pr-6'>Model</th>
                <th className='py-3 pr-6'>Best For</th>
                <th className='py-3 pr-6'>Speed</th>
                <th className='py-3 pr-6'>Cost Basis</th>
                <th className='py-3 pr-6'>Risk</th>
              </tr>
            </thead>
            <tbody className='align-top text-slate-700'>
              <tr className='border-b'>
                <td className='py-3 pr-6 font-medium'>Staffing (Contract)</td>
                <td className='py-3 pr-6'>Elastic capacity, backfills, projects</td>
                <td className='py-3 pr-6'>Fast</td>
                <td className='py-3 pr-6'>Hourly (W-2 payroll handled)</td>
                <td className='py-3 pr-6'>Low-to-Med</td>
              </tr>
              <tr className='border-b'>
                <td className='py-3 pr-6 font-medium'>Staffing (Direct Hire)</td>
                <td className='py-3 pr-6'>Core roles, long-term needs</td>
                <td className='py-3 pr-6'>Moderate</td>
                <td className='py-3 pr-6'>Placement fee</td>
                <td className='py-3 pr-6'>Low</td>
              </tr>
              <tr className='border-b'>
                <td className='py-3 pr-6 font-medium'>Outsourcing (Managed)</td>
                <td className='py-3 pr-6'>Steady-state operations with SLAs</td>
                <td className='py-3 pr-6'>Fast after spin-up</td>
                <td className='py-3 pr-6'>Monthly / per-unit</td>
                <td className='py-3 pr-6'>Low (provider-managed)</td>
              </tr>
              <tr className='border-b'>
                <td className='py-3 pr-6 font-medium'>Project (SOW)</td>
                <td className='py-3 pr-6'>Time-bound deliverables</td>
                <td className='py-3 pr-6'>By phase</td>
                <td className='py-3 pr-6'>Milestone billing</td>
                <td className='py-3 pr-6'>Low (acceptance tied)</td>
              </tr>
              <tr>
                <td className='py-3 pr-6 font-medium'>Executive Search</td>
                <td className='py-3 pr-6'>Leadership & confidential roles</td>
                <td className='py-3 pr-6'>Deliberate</td>
                <td className='py-3 pr-6'>Retained</td>
                <td className='py-3 pr-6'>Low</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-slate-100'>
        <div className='container py-12 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <h2>Not sure where to start?</h2>
            <p className='text-slate-700 mt-1'>Tell us your goals — we’ll recommend the right model and timeline.</p>
          </div>
          <a href='/contact' className='btn-primary'>Talk to an Expert</a>
        </div>
      </section>
    </main>
  );
}
