import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2025 U.S. Tech Salary Guide | Tecronix',
  description: 'Compensation bands for U.S. software, data/AI, cloud/devops, security, product, and UX roles by level and work model. Notes on geography and pay drivers.'
};

type Band = { role: string; level: string; low: number; mid: number; high: number; model: 'Remote'|'Hybrid'|'On-site' };

const BANDS: Band[] = [
  // Software Engineering
  { role: 'Software Engineer (Full-Stack)', level: 'Mid', low: 105000, mid: 130000, high: 160000, model: 'Remote' },
  { role: 'Software Engineer (Full-Stack)', level: 'Senior', low: 145000, mid: 185000, high: 230000, model: 'Hybrid' },
  { role: 'Backend Engineer (Node/Java)', level: 'Senior', low: 150000, mid: 190000, high: 240000, model: 'Hybrid' },
  { role: 'Frontend Engineer (React)', level: 'Mid', low: 110000, mid: 135000, high: 165000, model: 'Remote' },
  { role: 'Staff Engineer (Platform)', level: 'Staff', low: 190000, mid: 235000, high: 290000, model: 'Hybrid' },
  // Data & AI
  { role: 'Data Analyst', level: 'Mid', low: 90000, mid: 110000, high: 135000, model: 'Remote' },
  { role: 'Analytics Engineer', level: 'Senior', low: 135000, mid: 165000, high: 200000, model: 'Hybrid' },
  { role: 'Data Scientist (ML)', level: 'Senior', low: 150000, mid: 185000, high: 230000, model: 'Hybrid' },
  { role: 'ML Engineer', level: 'Staff', low: 200000, mid: 245000, high: 310000, model: 'Hybrid' },
  // Cloud / DevOps / Security
  { role: 'DevOps Engineer', level: 'Senior', low: 140000, mid: 175000, high: 215000, model: 'Hybrid' },
  { role: 'SRE', level: 'Senior', low: 150000, mid: 185000, high: 225000, model: 'Hybrid' },
  { role: 'Security Engineer (AppSec)', level: 'Senior', low: 155000, mid: 190000, high: 235000, model: 'Hybrid' },
  // Product & UX
  { role: 'Product Manager', level: 'Mid', low: 120000, mid: 145000, high: 180000, model: 'Hybrid' },
  { role: 'Senior Product Manager', level: 'Senior', low: 150000, mid: 185000, high: 230000, model: 'Hybrid' },
  { role: 'UX Designer', level: 'Mid', low: 95000, mid: 120000, high: 150000, model: 'Remote' },
  { role: 'UX Researcher', level: 'Senior', low: 135000, mid: 165000, high: 200000, model: 'Hybrid' }
];

function fmt(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export default function SalaryGuideTech2025() {
  return (
    <main>
      {/* HERO */}
      <section className='bg-slate-900 text-white'>
        <div className='container py-16'>
          <nav className='text-white/70 text-sm'><a href='/blog' className='underline'>Insights</a> / Salary Guides</nav>
          <h1 className='max-w-4xl mt-2'>2025 U.S. Tech Salary Guide</h1>
          <p className='mt-4 max-w-3xl text-white/80'>
            Benchmarks for software, data/AI, cloud/devops, security, product, and UX. Use bands as a starting point; adjust for geo, level calibration,
            scarcity, and total rewards. For detailed bands by market, contact our team.
          </p>
          <div className='mt-8 flex flex-wrap gap-4'>
            <a href='#table' className='btn-primary'>View Salary Table</a>
            <a href='/contact' className='btn-outline'>Request Market-Specific Bands</a>
          </div>
        </div>
      </section>

      {/* NOTES */}
      <section className='container py-10 grid md:grid-cols-2 gap-10'>
        <article>
          <h2>How to Use These Bands</h2>
          <ul className='mt-3 list-disc pl-6 text-slate-700 space-y-2'>
            <li><strong>Leveling:</strong> Align candidate scope-of-impact (feature, pillar, platform) to level before comping.</li>
            <li><strong>Geo:</strong> National-remote vs. high-cost hybrid markets can swing ±10–20%.</li>
            <li><strong>Work Model:</strong> On-site scarcity premiums exist for hard-to-fill locales/shifts.</li>
            <li><strong>Total Rewards:</strong> Equity, bonus targets, and benefits reshape offers; compare OTE not just base.</li>
          </ul>
        </article>
        <aside className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>Assumptions</h3>
          <ul className='mt-3 text-slate-700 space-y-2 text-sm'>
            <li>Mid = 3–5 yrs; Senior = 6–10; Staff = principal-track IC</li>
            <li>Bands reflect base salary. Add bonus/equity for OTE.</li>
            <li>Ranges are directional; calibrate per role and company stage.</li>
          </ul>
        </aside>
      </section>

      {/* TABLE */}
      <section id='table' className='container pb-12'>
        <div className='overflow-x-auto'>
          <table className='min-w-full text-sm'>
            <thead>
              <tr className='text-left border-b'>
                <th className='py-3 pr-4'>Role</th>
                <th className='py-3 pr-4'>Level</th>
                <th className='py-3 pr-4'>Work Model</th>
                <th className='py-3 pr-4'>Low</th>
                <th className='py-3 pr-4'>Mid</th>
                <th className='py-3 pr-4'>High</th>
              </tr>
            </thead>
            <tbody className='align-top text-slate-700'>
              {BANDS.map((b, i) => (
                <tr key={i} className='border-b'>
                  <td className='py-3 pr-4'>{b.role}</td>
                  <td className='py-3 pr-4'>{b.level}</td>
                  <td className='py-3 pr-4'>{b.model}</td>
                  <td className='py-3 pr-4'>{fmt(b.low)}</td>
                  <td className='py-3 pr-4'>{fmt(b.mid)}</td>
                  <td className='py-3 pr-4'>{fmt(b.high)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className='text-xs text-slate-500 mt-3'>
          Disclaimer: Directional ranges for planning; not a promise or offer. Use with market data and internal parity checks.
        </p>
      </section>

      {/* FAQ */}
      <section className='container py-12'>
        <h2>Salary Guide FAQs</h2>
        <div className='mt-4 grid md:grid-cols-2 gap-6 text-slate-700'>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Do you provide city-specific bands?</summary>
            <p className='mt-2'>Yes — we publish market cuts (e.g., Austin, Bay Area, NYC, Atlanta, Dallas). Contact us for a tailored sheet.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>How often do bands change?</summary>
            <p className='mt-2'>We review quarterly and after notable market shifts (macro, demand spikes, regulatory changes).</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Can you advise on offers?</summary>
            <p className='mt-2'>We help structure base/bonus/equity and close plans that align expectations and acceptance odds.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Do you publish non-tech guides?</summary>
            <p className='mt-2'>Yes — see Finance, Healthcare, and Operations salary guides in Insights.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-slate-100'>
        <div className='container py-12 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <h2>Need calibrated bands for your market?</h2>
            <p className='text-slate-700 mt-1'>We’ll share market-specific ranges and help align your leveling & offers.</p>
          </div>
          <a href='/contact' className='btn-primary'>Request Market Data</a>
        </div>
      </section>
    </main>
  );
}

