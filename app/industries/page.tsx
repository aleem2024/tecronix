import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries We Serve | tecronix USA',
  description: 'Staffing, outsourcing, and executive search across U.S. industries. Technology, healthcare, finance, manufacturing, logistics, retail, energy, public sector and more.'
};

const INDUSTRIES: { title: string; href: string; blurb: string }[] = [
  { title: 'Technology', href: '/industries/technology', blurb: 'Software, data & AI, cloud/devops, cybersecurity, product, UX.' },
  { title: 'Healthcare', href: '/industries/healthcare', blurb: 'Nursing & allied, HIM, revenue cycle, clinical ops, health tech.' },
  { title: 'Finance & Accounting', href: '/industries/finance', blurb: 'Accounting, FP&A, audit, AR/AP, payroll, tax & treasury.' },
  { title: 'Manufacturing', href: '/industries/manufacturing', blurb: 'Production, quality, maintenance, EHS, industrial engineering.' },
  { title: 'Logistics & Supply Chain', href: '/industries/logistics', blurb: 'Warehouse, transportation, demand planning, procurement.' },
  { title: 'Retail & eCommerce', href: '/industries/retail', blurb: 'Merchandising, planning, storefront ops, digital commerce.' },
  { title: 'Energy & Utilities', href: '/industries/energy', blurb: 'Oil & gas, renewables, grid ops, field techs, project controls.' },
  { title: 'Government & Non-profit', href: '/industries/government', blurb: 'Public sector programs, grants, admin support, compliance.' },
  { title: 'Life Sciences', href: '/industries/life-sciences', blurb: 'Biotech, QA/QC, lab, clinical trials, regulatory affairs.' },
  { title: 'Construction', href: '/industries/construction', blurb: 'Project management, superintendents, trades, safety.' },
  { title: 'Marketing & Creative', href: '/industries/marketing', blurb: 'Brand, growth, content, design, video, marketing ops.' },
  { title: 'Administrative & Support', href: '/industries/admin', blurb: 'EA/PA, customer support, HR ops, office management.' }
];

export default function IndustriesPage() {
  return (
    <main>
      {/* HERO */}
      <section className='bg-slate-900 text-white'>
        <div className='container py-16'>
          <h1 className='max-w-4xl'>Industry Expertise that Drives Results</h1>
          <p className='mt-4 max-w-3xl text-white/80'>
            We recruit specialized talent and deliver managed outcomes across technology, healthcare, finance, manufacturing, logistics,
            retail, energy, public sector and more — with U.S. compliance and market knowledge.
          </p>
          <div className='mt-8'>
            <a href='/contact' className='btn-primary'>Talk to an Industry Specialist</a>
          </div>
        </div>
      </section>

      {/* WHY INDUSTRY FOCUS */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article>
          <h2>Why Industry-Specific Hiring Matters</h2>
          <p className='mt-3 text-slate-700'>
            Context is everything. Role success depends on domain, regulatory nuance, and operating model. Our recruiters are aligned to
            verticals so your shortlists reflect the skills, certifications, and soft factors that matter in your world.
          </p>
          <ul className='mt-4 list-disc pl-6 text-slate-700 space-y-2'>
            <li>Competency scorecards tailored to your industry</li>
            <li>Compliance-aware screening (HIPAA, SOX, FDA, OSHA, DOT & more)</li>
            <li>Comp benchmarks and labor availability by market</li>
            <li>Faster calibration → fewer interviews → better hires</li>
          </ul>
        </article>
        <aside className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>Delivery You Can Trust</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>Blended sourcing (referrals, communities, targeted outreach)</li>
            <li>Structured interviews + practical assessments</li>
            <li>References, background & worker classification checks</li>
            <li>Onboarding support with 30/60/90 success checkpoints</li>
          </ul>
        </aside>
      </section>

      {/* INDUSTRY GRID */}
      <section className='container py-4'>
        <h2 className='mb-6'>Industries We Serve</h2>
        <div className='grid md:grid-cols-3 gap-6'>
          {INDUSTRIES.map((i) => (
            <a key={i.href} href={i.href} className='p-6 rounded-2xl border hover:shadow-sm transition'>
              <div className='font-semibold'>{i.title}</div>
              <p className='text-sm text-slate-600 mt-2'>{i.blurb}</p>
              <div className='text-sm text-slate-600 mt-3'>Learn more →</div>
            </a>
          ))}
        </div>
      </section>

      {/* CASE HIGHLIGHTS */}
      <section className='container py-12'>
        <h2>Recent Outcomes</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Healthcare','Scaled 35 RNs in 21 days for a multi-state system, with 96% retention at 90 days.'],
            ['Manufacturing','Stood up a 24/7 maintenance crew (12 techs) reducing downtime by 18%.'],
            ['Technology','Hired a full-stack squad (7 engineers) to accelerate a critical release.']
          ].map(([title, text]) => (
            <article key={title as string} className='p-6 rounded-2xl border'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className='bg-slate-100'>
        <div className='container py-12 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <h2>Need a plan for your industry?</h2>
            <p className='text-slate-700 mt-1'>Share your goals — we’ll propose roles, timeline, and a first shortlist.</p>
          </div>
          <a href='/contact' className='btn-primary'>Request Talent</a>
        </div>
      </section>
    </main>
  );
}

