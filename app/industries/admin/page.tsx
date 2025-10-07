import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Administrative & Support Staffing | Tecronix',
  description: 'Hire executive assistants, customer support, HR ops, office management, and back-office specialists — or run managed service desks with SLAs. Fast, reliable coverage nationwide.'
};

export default function AdminIndustryPage() {
  return (
    <main>
      {/* HERO */}
      <section className='bg-slate-900 text-white'>
        <div className='container py-16'>
          <h1 className='max-w-4xl'>Administrative & Support: The Backbone of Daily Operations</h1>
          <p className='mt-4 max-w-3xl text-white/80'>
            From executive assistants and office managers to customer support and HR operations — we provide dependable people
            and managed teams that keep work moving with quality and care.
          </p>
          <div className='mt-8 flex flex-wrap gap-4'>
            <a href='/contact' className='btn-primary'>Request Admin Talent</a>
            <a href='#roles' className='btn-outline'>Roles We Fill</a>
          </div>
        </div>
      </section>

      {/* WHY Tecronix FOR ADMIN */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article>
          <h2>Why Tecronix for Administrative & Support</h2>
          <p className='mt-3 text-slate-700'>
            Reliability and empathy matter. We screen for organization, communication, and service mindset — then validate tools proficiency
            (Office/Google, calendars, ticketing/CRM, HRIS) and privacy awareness to protect sensitive data.
          </p>
          <ul className='mt-4 list-disc pl-6 text-slate-700 space-y-2'>
            <li>Behavior-based interviews focused on service, prioritization, and confidentiality</li>
            <li>Tools assessments (calendars, spreadsheets, CRMs, ticketing)</li>
            <li>Coverage plans for PTO, peaks, and multi-timezone teams</li>
            <li>Managed service desks available with SLAs and QA</li>
          </ul>
        </article>
        <aside className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>Delivery Snapshot</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>Shortlists in days for common roles</li>
            <li>Phone & writing samples to verify tone and clarity</li>
            <li>Background checks aligned to role sensitivity</li>
            <li>Onboarding checklists and 30/60/90 follow-ups</li>
          </ul>
        </aside>
      </section>

      {/* ROLES */}
      <section id='roles' className='container py-12'>
        <h2>Roles We Fill</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6 text-slate-700'>
          <ul className='space-y-1'>
            <li>Executive Assistants & Administrative Assistants</li>
            <li>Office Managers & Front Desk Coordinators</li>
            <li>Reception & Facilities Support</li>
            <li>Travel & Expense Coordinators</li>
          </ul>
          <ul className='space-y-1'>
            <li>Customer Support (Phone/Email/Chat)</li>
            <li>Claims & Case Management Associates</li>
            <li>Order Entry / Sales Support</li>
            <li>Collections / Billing Support</li>
          </ul>
          <ul className='space-y-1'>
            <li>HR Operations & Recruiting Coordinators</li>
            <li>Data Entry & Records Specialists</li>
            <li>Project Coordinators</li>
            <li>Procurement / Vendor Admin</li>
          </ul>
        </div>
      </section>

      {/* ENGAGEMENT OPTIONS */}
      <section className='container py-12'>
        <h2>How We Engage</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          <a href='/solutions/staffing' className='p-6 rounded-2xl border hover:shadow-sm transition block'>
            <h3 className='font-semibold'>Staffing</h3>
            <p className='mt-2 text-slate-700 text-sm'>
              Contract, C2H, and direct hire with tools proficiency checks and service simulations.
            </p>
            <div className='text-sm text-slate-600 mt-2'>Learn more →</div>
          </a>
          <a href='/solutions/outsourcing' className='p-6 rounded-2xl border hover:shadow-sm transition block'>
            <h3 className='font-semibold'>Managed Service Desk</h3>
            <p className='mt-2 text-slate-700 text-sm'>
              Outcome-based inbox/ticket handling with SLAs, QA sampling, knowledge base, and continuous improvement.
            </p>
            <div className='text-sm text-slate-600 mt-2'>Learn more →</div>
          </a>
          <a href='/solutions/consulting' className='p-6 rounded-2xl border hover:shadow-sm transition block'>
            <h3 className='font-semibold'>Process & Tools Enablement</h3>
            <p className='mt-2 text-slate-700 text-sm'>
              Intake, triage, macros, and templates; reporting that leaders and agents actually use.
            </p>
            <div className='text-sm text-slate-600 mt-2'>Learn more →</div>
          </a>
        </div>
      </section>

      {/* OPERATING MODEL */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article>
          <h2>Operating Model</h2>
          <ol className='mt-4 list-decimal pl-6 space-y-2 text-slate-700'>
            <li>Intake & SLAs — define channels, priority matrix, and response targets</li>
            <li>Playbooks — macros, templates, tone guidelines, escalation paths</li>
            <li>Hiring & Training — simulations, shadowing, and QA rubrics</li>
            <li>Run & Improve — weekly calibrations, dashboards, and retros</li>
            <li>Governance — QBRs, roadmap, and continuous improvement</li>
          </ol>
        </article>
        <article className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>Key KPIs</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>Time to First Response / Resolution</li>
            <li>CSAT / NPS & QA pass rate</li>
            <li>Backlog, reopen rate, and escalations</li>
            <li>Handle time & capacity utilization</li>
          </ul>
        </article>
      </section>

      {/* CASES */}
      <section className='container py-12'>
        <h2>Recent Outcomes</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Inbox Stabilization','Cut backlog 61% with macros and priority matrix; CSAT +18 pts.'],
            ['EA Coverage','Provided executive support across timezones; scheduling conflicts down 42%.'],
            ['HR Ops Surge','Processed 3k tickets in 6 weeks; first-response time from 2d → 6h.']
          ].map(([title, text]) => (
            <article key={title as string} className='p-6 rounded-2xl border'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PRIVACY & ACCESS */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article className='p-6 rounded-2xl border'>
          <h3 className='font-semibold'>Privacy & Security</h3>
          <p className='mt-2 text-slate-700'>
            Least-privilege access, confidentiality agreements, and data handling SOPs. Role-based training for PHI/PII where applicable.
          </p>
        </article>
        <article className='p-6 rounded-2xl border'>
          <h3 className='font-semibold'>Accessibility & Inclusion</h3>
          <p className='mt-2 text-slate-700'>
            Accessible communication standards, language support options, and inclusive service guidelines for customer-facing teams.
          </p>
        </article>
      </section>

      {/* FAQ */}
      <section className='container py-12'>
        <h2>Administrative & Support FAQs</h2>
        <div className='mt-4 grid md:grid-cols-2 gap-6 text-slate-700'>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Can you support multi-language queues?</summary>
            <p className='mt-2'>Yes — we recruit bilingual agents and add translation workflows where needed.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Do you validate typing and writing?</summary>
            <p className='mt-2'>We include speed/accuracy checks and short writing samples calibrated to brand tone.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>How do you handle sensitive data?</summary>
            <p className='mt-2'>Role-based access, NDAs, and SOPs for PII/PHI with periodic audits and training.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Can you run a managed helpdesk?</summary>
            <p className='mt-2'>Yes — inbox/ticketing with SLAs, QA sampling, coaching, and QBRs.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-slate-100'>
        <div className='container py-12 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <h2>Need reliable coverage and great service?</h2>
            <p className='text-slate-700 mt-1'>Tell us your volumes, tools, and SLAs — we’ll propose roles or a managed desk.</p>
          </div>
          <a href='/contact' className='btn-primary'>Request Admin Talent</a>
        </div>
      </section>
    </main>
  );
}
