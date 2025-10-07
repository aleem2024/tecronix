import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing & Creative Staffing & Outsourcing | Tecronix',
  description: 'Hire brand, growth, content, design, and marketing ops — or run managed content operations with SLAs. Campaign speed, quality, and measurable ROI.'
};

export default function MarketingIndustryPage() {
  return (
    <main>
      {/* HERO */}
      <section className='bg-slate-900 text-white'>
        <div className='container py-16'>
          <h1 className='max-w-4xl'>Marketing & Creative: Grow Brand and Pipeline</h1>
          <p className='mt-4 max-w-3xl text-white/80'>
            From brand systems and performance campaigns to content engines and marketing ops — we staff high-signal talent and
            operate outcome-based programs that move the numbers.
          </p>
          <div className='mt-8 flex flex-wrap gap-4'>
            <a href='/contact' className='btn-primary'>Request Marketing Talent</a>
            <a href='#roles' className='btn-outline'>Roles We Fill</a>
          </div>
        </div>
      </section>

      {/* WHY Tecronix FOR MARKETING */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article>
          <h2>Why Tecronix for Growth & Brand</h2>
          <p className='mt-3 text-slate-700'>
            We pair creative judgment with operating rigor: clear briefs, sprint cadences, experiment design, and dashboards that tie
            work to pipeline and revenue. Your teams get the talent and the system to win.
          </p>
          <ul className='mt-4 list-disc pl-6 text-slate-700 space-y-2'>
            <li>Structured intake & creative briefs with acceptance criteria</li>
            <li>Experiment roadmaps with statistical guardrails</li>
            <li>Design systems & content playbooks for reuse and speed</li>
            <li>Attribution, MQL→SQL→Revenue visibility, and QA</li>
          </ul>
        </article>
        <aside className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>Delivery Snapshot</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>Calibrated portfolios & work samples with rubrics</li>
            <li>Weekly sprint reviews; monthly performance readouts</li>
            <li>MarTech-aware talent (HubSpot/Marketo/SFDC/GA4)</li>
            <li>Outcome-backed managed content programs</li>
          </ul>
        </aside>
      </section>

      {/* ROLES */}
      <section id='roles' className='container py-12'>
        <h2>Roles We Fill</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6 text-slate-700'>
          <ul className='space-y-1'>
            <li>Brand & Communications Managers</li>
            <li>Content Strategists & Writers</li>
            <li>Social Media Managers & Community</li>
            <li>PR & Analyst Relations</li>
          </ul>
          <ul className='space-y-1'>
            <li>Growth / Demand Gen Managers</li>
            <li>Lifecycle / Email / CRM Specialists</li>
            <li>SEO/SEM Managers & Web Producers</li>
            <li>Marketing Operations & RevOps</li>
          </ul>
          <ul className='space-y-1'>
            <li>Designers (Brand, Product, Motion)</li>
            <li>Video Editors & Producers</li>
            <li>Copywriters & UX Writers</li>
            <li>Creative Directors & Art Directors</li>
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
              Contract creatives, C2H growth marketers, and direct hire leaders. Portfolios and work samples calibrated to your brand.
            </p>
            <div className='text-sm text-slate-600 mt-2'>Learn more →</div>
          </a>
          <a href='/solutions/outsourcing' className='p-6 rounded-2xl border hover:shadow-sm transition block'>
            <h3 className='font-semibold'>Managed Content</h3>
            <p className='mt-2 text-slate-700 text-sm'>
              Outcome-based content engines (blog, video, design, web) with editorial calendar, SLAs, and performance dashboards.
            </p>
            <div className='text-sm text-slate-600 mt-2'>Learn more →</div>
          </a>
          <a href='/solutions/consulting' className='p-6 rounded-2xl border hover:shadow-sm transition block'>
            <h3 className='font-semibold'>Ops & Attribution</h3>
            <p className='mt-2 text-slate-700 text-sm'>
              Funnel taxonomy, lifecycle programs, and dashboards to align marketing, sales, and finance on revenue impact.
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
            <li>Brief & Goals — audience, message, CTA, acceptance criteria</li>
            <li>Plan — calendar, channels, offer, experiment design</li>
            <li>Produce — brand-safe assets, QA, accessibility checks</li>
            <li>Launch — coordinated campaign execution</li>
            <li>Measure — attribution, lift, and ROI</li>
            <li>Improve — retros, learnings, and next tests</li>
          </ol>
        </article>
        <article className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>Key KPIs</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>Qualified pipeline & revenue attribution</li>
            <li>Lead-to-MQL-to-SQL conversion</li>
            <li>Engagement & retention (CTR, CVR, LTV/CAC)</li>
            <li>Content velocity & reuse rate</li>
          </ul>
        </article>
      </section>

      {/* CASES */}
      <section className='container py-12'>
        <h2>Recent Outcomes</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Demand Gen Program','+38% MQLs and +14 pts opp conversion via lifecycle & offer redesign.'],
            ['Brand System Refresh','New guidelines cut asset production time 32% while lifting recall.'],
            ['Content Engine','Shipped 40 assets/quarter; organic traffic +27% within two quarters.']
          ].map(([title, text]) => (
            <article key={title as string} className='p-6 rounded-2xl border'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PORTFOLIO & QA */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article className='p-6 rounded-2xl border'>
          <h3 className='font-semibold'>Portfolio Calibration</h3>
          <p className='mt-2 text-slate-700'>
            We assess portfolios against your brand & goals: craft, concept, conversion impact, and accessibility — with rubrics for consistent quality.
          </p>
        </article>
        <article className='p-6 rounded-2xl border'>
          <h3 className='font-semibold'>Legal & Brand Safety</h3>
          <p className='mt-2 text-slate-700'>
            Rights & usage checks, claims review, and inclusive language guidelines reduce risk while protecting brand trust.
          </p>
        </article>
      </section>

      {/* FAQ */}
      <section className='container py-12'>
        <h2>Marketing FAQs</h2>
        <div className='mt-4 grid md:grid-cols-2 gap-6 text-slate-700'>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>How do you measure impact?</summary>
            <p className='mt-2'>We define funnel taxonomy and dashboards that tie programs to opportunities and revenue, not just clicks.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Do you handle brand & web together?</summary>
            <p className='mt-2'>Yes — brand systems, content, and web production can be staffed or run as a managed content engine.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>What about accessibility?</summary>
            <p className='mt-2'>We include alt text, color contrast checks, and captions as part of QA to reach more audiences.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Can you provide leadership?</summary>
            <p className='mt-2'>We place Heads/VPs of Marketing and Creative Directors via executive search when needed.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-slate-100'>
        <div className='container py-12 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <h2>Need pipeline and a stronger brand?</h2>
            <p className='text-slate-700 mt-1'>Share goals — we’ll propose talent or a managed content engine with clear KPIs.</p>
          </div>
          <a href='/contact' className='btn-primary'>Request Marketing Talent</a>
        </div>
      </section>
    </main>
  );
}
