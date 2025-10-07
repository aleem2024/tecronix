import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jobs | tecronix USA — Search Open Roles Across the U.S.',
  description: 'Browse open jobs across technology, healthcare, finance & accounting, manufacturing, logistics, retail, and admin. Remote, hybrid, and on-site roles nationwide.'
};

const CATEGORIES = [
  'Technology',
  'Healthcare',
  'Finance & Accounting',
  'Manufacturing',
  'Logistics',
  'Retail & eCom',
  'Admin & Support'
];

const LOCATIONS = [
  'Remote (U.S.)',
  'Austin, TX',
  'San Jose, CA',
  'Chicago, IL',
  'New York, NY',
  'Columbus, OH',
  'Dallas–Fort Worth, TX',
];

const JOBS: Array<{
  title: string;
  location: string;
  category: string;
  type: string;
  href: string;
  summary: string;
}> = [
  {
    title: 'Senior Backend Engineer',
    location: 'Austin, TX (Hybrid)',
    category: 'Technology',
    type: 'Full-time',
    href: '/jobs/senior-backend-engineer-austin-tx',
    summary: 'Build services and APIs; reliability and performance focus.'
  },
  {
    title: 'Revenue Cycle Specialist',
    location: 'Chicago, IL (On-site)',
    category: 'Healthcare',
    type: 'Contract-to-Hire',
    href: '/jobs/revenue-cycle-specialist-chicago-il',
    summary: 'AR follow-up and denials; quality and throughput targets.'
  },
  {
    title: 'AP Specialist',
    location: 'Columbus, OH (Hybrid)',
    category: 'Finance & Accounting',
    type: 'Contract',
    href: '/jobs/ap-specialist-columbus-oh',
    summary: 'Three-way match, reconciliations, and vendor support.'
  },
  {
    title: 'Technical Recruiter',
    location: 'Remote (U.S.)',
    category: 'Admin & Support',
    type: 'Full-time',
    href: '/jobs/technical-recruiter-remote-us',
    summary: 'Source and close engineers with structured interviews.'
  },
  {
    title: 'Healthcare Recruiter',
    location: 'Chicago, IL (Hybrid)',
    category: 'Healthcare',
    type: 'Full-time',
    href: '/jobs/healthcare-recruiter-chicago-il',
    summary: 'Recruit RNs/allied; credential awareness and coverage planning.'
  },
  {
    title: 'Engagement Manager (Managed Services)',
    location: 'Austin, TX (Hybrid)',
    category: 'Admin & Support',
    type: 'Full-time',
    href: '/jobs/engagement-manager-managed-services-austin-tx',
    summary: 'Run SLA programs with QA, dashboards, and QBRs.'
  },
  {
    title: 'Sr. Talent Operations Consultant',
    location: 'New York, NY (Hybrid)',
    category: 'Admin & Support',
    type: 'Contract',
    href: '/jobs/senior-talent-ops-consultant-nyc-ny',
    summary: 'Design scorecards, interview loops, and hiring analytics.'
  },
  {
    title: 'Finance Operations Analyst',
    location: 'San Jose, CA (Hybrid)',
    category: 'Finance & Accounting',
    type: 'Full-time',
    href: '/jobs/finance-ops-analyst-san-jose-ca',
    summary: 'Close acceleration and variance insights; ERP fluency.'
  }
];

export default function JobsIndexPage() {
  return (
    <main>
      {/* HERO */}
      <section className='bg-slate-900 text-white'>
        <div className='container py-16'>
          <h1 className='max-w-4xl'>Open Jobs</h1>
          <p className='mt-4 max-w-3xl text-white/80'>
            Search roles across the U.S. Filter by location and category, then apply in minutes.
          </p>
          <div className='mt-6 flex flex-wrap gap-3'>
            <a href='/job-seekers#upload' className='btn-outline'>Upload Your Resume</a>
            <a href='/job-seekers' className='btn-outline'>Candidate Guides</a>
          </div>
        </div>
      </section>

      {/* FILTER BAR (static demo UI — wire to ATS later) */}
      <section className='container py-8'>
        
      </section>

      {/* LISTINGS */}
      <section className='container pb-6'>
        <div className='flex items-center justify-between'>
          <h2>Results</h2>
          <div className='text-sm text-slate-600'>{JOBS.length} roles</div>
        </div>
        <div className='mt-4 grid md:grid-cols-2 gap-4'>
          {JOBS.map((job) => (
            <a key={job.href} href={job.href} className='p-5 rounded-2xl border hover:shadow-sm transition block'>
              <div className='flex items-start justify-between gap-4'>
                <div>
                  <div className='font-semibold'>{job.title}</div>
                  <div className='text-slate-600 text-sm mt-1'>{job.location} · {job.category} · {job.type}</div>
                </div>
                <div className='text-sm text-slate-600'>View →</div>
              </div>
              <p className='text-slate-700 text-sm mt-3'>{job.summary}</p>
            </a>
          ))}
        </div>
      </section>

      {/* CATEGORIES QUICK NAV */}
      <section className='container py-12'>
        <h2>Browse by Category</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Technology','/industries/technology'],
            ['Healthcare','/industries/healthcare'],
            ['Finance & Accounting','/industries/finance'],
            ['Manufacturing','/industries/manufacturing'],
            ['Logistics','/industries/logistics'],
            ['Retail & eCom','/industries/retail']
          ].map(([label, href]) => (
            <a key={href as string} href={href as string} className='p-6 rounded-2xl border hover:shadow-sm transition block'>
              <div className='font-semibold'>{label}</div>
              <div className='text-sm text-slate-600 mt-2'>Learn more →</div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className='bg-slate-100'>
        <div className='container py-12 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <h2>Don’t see your perfect role?</h2>
            <p className='text-slate-700 mt-1'>Upload your resume — we’ll reach out when there’s a match.</p>
          </div>
          <a href='/job-seekers#upload' className='btn-primary'>Upload Resume</a>
        </div>
      </section>
    </main>
  );
}


