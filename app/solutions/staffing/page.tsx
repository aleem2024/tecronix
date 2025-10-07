import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Staffing Solutions | tecronix USA — Contract, C2H, Direct Hire',
  description: 'Hire fast with structured intake, calibrated scorecards, rigorous screening, and weekly pipeline visibility. U.S. compliance for worker classification, I-9/E-Verify, and background checks.'
};

export default function StaffingSolutionPage() {
  return (
    <main>
      {/* HERO */}
      <section className='bg-slate-900 text-white'>
        <div className='container py-16'>
          <h1 className='max-w-4xl'>Staffing: Capacity When You Need It</h1>
          <p className='mt-4 max-w-3xl text-white/80'>
            Contract, contract-to-hire, and direct hire — delivered with structured interviews, calibrated scorecards,
            and weekly pipelines you can trust.
          </p>
          <div className='mt-8 flex flex-wrap gap-4'>
            <a href='/contact' className='btn-primary'>Request Talent</a>
            <a href='#models' className='btn-outline'>Compare Models</a>
          </div>
        </div>
      </section>

      {/* WHO WE HIRE */}
      <section className='container py-12'>
        <h2>Who We Hire</h2>
        <p className='text-slate-700 mt-2 max-w-3xl'>
          Technology · Healthcare · Finance & Accounting · Manufacturing · Logistics · Retail & eCom · Administrative/Support.
          On-site, hybrid, and remote across the U.S.
        </p>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Technology','Engineers, data/AI, cloud/devops, security, product/UX.','/industries/technology'],
            ['Healthcare','RNs, allied, HIM, revenue cycle, access, EHR.','/industries/healthcare'],
            ['Finance & Accounting','Close, AP/AR, payroll, FP&A, audit & controls.','/industries/finance'],
            ['Manufacturing','Operators, maintenance, quality, EHS, IE.','/industries/manufacturing'],
            ['Logistics','DC ops, inventory, transportation & planning.','/industries/logistics'],
            ['Retail & eCom','Stores/DCs, catalog/content, CX & digital.','/industries/retail'],
          ].map(([name, blurb, href]) => (
            <a key={name as string} href={href as string} className='p-6 rounded-2xl border hover:shadow-sm transition block'>
              <div className='font-semibold'>{name}</div>
              <p className='text-slate-600 text-sm mt-2'>{blurb}</p>
              <div className='text-sm text-slate-600 mt-3'>Learn more →</div>
            </a>
          ))}
        </div>
      </section>

      {/* MODELS */}
      <section id='models' className='container py-12'>
        <h2>Engagement Models</h2>
        <div className='mt-6 overflow-x-auto'>
          <table className='min-w-full text-sm'>
            <thead>
              <tr className='text-left border-b'>
                <th className='py-3 pr-6'>Model</th>
                <th className='py-3 pr-6'>Best For</th>
                <th className='py-3 pr-6'>Pricing</th>
                <th className='py-3 pr-6'>Commitment</th>
              </tr>
            </thead>
            <tbody className='align-top text-slate-700'>
              <tr className='border-b'>
                <td className='py-3 pr-6 font-medium'>Contract (W-2)</td>
                <td className='py-3 pr-6'>Variable demand, projects, backfills</td>
                <td className='py-3 pr-6'>Hourly bill rate</td>
                <td className='py-3 pr-6'>Flexible; extend/convert anytime</td>
              </tr>
              <tr className='border-b'>
                <td className='py-3 pr-6 font-medium'>Contract-to-Hire</td>
                <td className='py-3 pr-6'>Try-before-hire, budget timing</td>
                <td className='py-3 pr-6'>Hourly → conversion terms</td>
                <td className='py-3 pr-6'>Conversion after min. hours</td>
              </tr>
              <tr>
                <td className='py-3 pr-6 font-medium'>Direct Hire</td>
                <td className='py-3 pr-6'>FTE roles, leadership, hard-to-find</td>
                <td className='py-3 pr-6'>Placement fee (with guarantee)</td>
                <td className='py-3 pr-6'>One-time per placement</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* PROCESS */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article>
          <h2>Our Hiring Playbook</h2>
          <ol className='mt-4 list-decimal pl-6 space-y-2 text-slate-700'>
            <li><strong>Intake & Scorecard:</strong> outcomes, competencies, must-haves, nice-to-haves.</li>
            <li><strong>Sourcing Sprint:</strong> referrals, communities, direct outreach, calibrated JD.</li>
            <li><strong>Screen & Assess:</strong> structured phone screens + role-relevant work samples.</li>
            <li><strong>Shortlist & Debrief:</strong> write-ups with evidence, risks, and comp alignment.</li>
            <li><strong>References & Checks:</strong> references, background, and credentials as needed.</li>
            <li><strong>Offer & Close:</strong> expectations alignment, start date plan, 30/60/90 support.</li>
          </ol>
        </article>
        <aside className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>What You See Weekly</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>Pipeline: sourced → screened → submitted → interview → offer</li>
            <li>Conversion & bottleneck notes with actions</li>
            <li>Market intel: comp ranges, candidate feedback</li>
            <li>Close plan and risk register</li>
          </ul>
        </aside>
      </section>

      {/* COMPLIANCE */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article className='p-6 rounded-2xl border'>
          <h3 className='font-semibold'>U.S. Compliance</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>Worker classification guardrails (W-2 only for contractors)</li>
            <li>I-9/E-Verify, background checks, and drug screening as permitted</li>
            <li>HIPAA/PHI awareness for healthcare; privacy & data handling SOPs</li>
            <li>EEO, accessibility, and inclusive hiring practices</li>
          </ul>
        </article>
        <article className='p-6 rounded-2xl border'>
          <h3 className='font-semibold'>Service Levels</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>First shortlist targets: 7–14 calendar days for common roles</li>
            <li>Response SLAs during interview loops</li>
            <li>30/60/90 check-ins post-start (contract & perm)</li>
          </ul>
        </article>
      </section>

      {/* CASES */}
      <section className='container py-12'>
        <h2>Recent Outcomes</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Engineering Surge','Hired 8 engineers in 6 weeks; cycle time down 32%.'],
            ['Revenue Cycle Team','Cleared AR backlog; accuracy +4.5 pts in 8 weeks.'],
            ['Night-Shift Maintenance','Uptime improved; unplanned downtime −18%.']
          ].map(([title, text]) => (
            <article key={title as string} className='p-6 rounded-2xl border'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PRICING & GUARANTEES */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article>
          <h2>Pricing & Guarantees</h2>
          <ul className='mt-3 list-disc pl-6 text-slate-700 space-y-2'>
            <li><strong>Contract:</strong> hourly bill rate with volume/term discounts.</li>
            <li><strong>Contract-to-Hire:</strong> hourly with agreed conversion terms.</li>
            <li><strong>Direct Hire:</strong> % of first-year base; replacement guarantee window.</li>
          </ul>
          <p className='text-slate-600 text-sm mt-3'>We’ll tailor commercials to role family, volume, and urgency.</p>
        </article>
        <aside className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>Get a Sample Shortlist</h3>
          <p className='mt-2 text-slate-700 text-sm'>We’ll share anonymized profiles within your criteria to calibrate fast.</p>
          <a href='/contact' className='btn-primary mt-3 inline-block'>Request Talent</a>
        </aside>
      </section>

      {/* FAQ */}
      <section className='container py-12'>
        <h2>Staffing FAQs</h2>
        <div className='mt-4 grid md:grid-cols-2 gap-6 text-slate-700'>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>How fast can you deliver a shortlist?</summary>
            <p className='mt-2'>Typically 7–14 days for common roles; niche or executive may take longer — we’ll set targets at intake.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Do you handle nationwide roles?</summary>
            <p className='mt-2'>Yes — we hire across all 50 states with state-specific compliance.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Can you help write the JD and scorecard?</summary>
            <p className='mt-2'>Absolutely — we create success profiles, interview kits, and rubrics for consistent quality.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>What if a hire doesn’t work out?</summary>
            <p className='mt-2'>We include replacement guarantees for direct hire and manage transitions for contract roles.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-slate-100'>
        <div className='container py-12 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <h2>Need people on the ground fast?</h2>
            <p className='text-slate-700 mt-1'>Share your roles and timeline — we’ll propose a plan and start sourcing.</p>
          </div>
          <a href='/contact' className='btn-primary'>Request Talent</a>
        </div>
      </section>
    </main>
  );
}


