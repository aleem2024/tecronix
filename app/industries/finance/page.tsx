import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finance & Accounting Staffing & Outsourcing | Tecronix',
  description: 'Close, AP/AR, payroll, FP&A, audit & controls — plus managed F&A services with SLAs, QA, and dashboards. U.S. compliance and multi-entity experience.'
};

export default function FinanceIndustryPage() {
  return (
    <main>
      {/* HERO */}
      <section className='bg-slate-900 text-white'>
        <div className='container py-16'>
          <h1 className='max-w-4xl'>Finance & Accounting: Accuracy, Speed, and Control</h1>
          <p className='mt-4 max-w-3xl text-white/80'>
            From close acceleration and reconciliations to AR collections and payroll — we staff specialists and operate
            managed F&A teams with SLAs, quality checks, and audit-ready evidence.
          </p>
          <div className='mt-8 flex flex-wrap gap-4'>
            <a href='/contact' className='btn-primary'>Request F&A Talent</a>
            <a href='#roles' className='btn-outline'>Roles We Fill</a>
          </div>
        </div>
      </section>

      {/* WHY Tecronix FOR F&A */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article>
          <h2>Why Tecronix for F&A Teams</h2>
          <p className='mt-3 text-slate-700'>
            Accuracy and timeliness are non-negotiable. We screen for accounting fundamentals, ERP proficiency, and
            control awareness — and we run playbooks that shorten cycle time without adding risk.
          </p>
          <ul className='mt-4 list-disc pl-6 text-slate-700 space-y-2'>
            <li>Technical screens (journal entries, accruals, reconciliations, revenue recognition basics)</li>
            <li>ERP & tools assessments (NetSuite, SAP, Oracle, QuickBooks, BlackLine, Coupa)</li>
            <li>Close cadences and checklists aligned to materiality</li>
            <li>QA sampling and maker–checker workflows for accuracy</li>
          </ul>
        </article>
        <aside className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>Delivery Snapshot</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>Multi-entity, multi-currency experience</li>
            <li>Revenue, expense, and balance sheet substantiation</li>
            <li>Aging/collections playbooks and dispute handling</li>
            <li>Dashboards for timeliness, accuracy, and risk</li>
          </ul>
        </aside>
      </section>

      {/* ROLES */}
      <section id='roles' className='container py-12'>
        <h2>Roles We Fill</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6 text-slate-700'>
          <ul className='space-y-1'>
            <li>AP Specialists & Managers</li>
            <li>AR Specialists, Billing, Collections</li>
            <li>Payroll Specialists & Managers</li>
            <li>Revenue Operations & Billing Analysts</li>
          </ul>
          <ul className='space-y-1'>
            <li>General Accountant / Senior Accountant</li>
            <li>Cost Accountant & Inventory Accountant</li>
            <li>GL / Fixed Assets / Intercompany</li>
            <li>Audit & SOX Compliance Analysts</li>
          </ul>
          <ul className='space-y-1'>
            <li>FP&A Analysts & Managers</li>
            <li>Finance Operations & Treasury</li>
            <li>Controllers & Assistant Controllers</li>
            <li>Directors of Finance & CFOs</li>
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
              Contract, C2H, and direct hire with technical screens and reference checks for control awareness.
            </p>
            <div className='text-sm text-slate-600 mt-2'>Learn more →</div>
          </a>
          <a href='/solutions/outsourcing' className='p-6 rounded-2xl border hover:shadow-sm transition block'>
            <h3 className='font-semibold'>Managed F&A</h3>
            <p className='mt-2 text-slate-700 text-sm'>
              Close acceleration, AP/AR, collections, and reconciliations with SLAs, QA, and audit evidence.
            </p>
            <div className='text-sm text-slate-600 mt-2'>Learn more →</div>
          </a>
          <a href='/solutions/consulting' className='p-6 rounded-2xl border hover:shadow-sm transition block'>
            <h3 className='font-semibold'>Finance Ops & Controls</h3>
            <p className='mt-2 text-slate-700 text-sm'>
              Month-end redesign, policies, and KPI dashboards to improve timeliness and accuracy.
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
            <li>Scope: entities, volumes, thresholds, and deadlines</li>
            <li>Playbooks: JE policies, reconciliations, three-way match, approval flows</li>
            <li>Run: checklists, aging reviews, exception handling, and QA sampling</li>
            <li>Evidence: reconciliations, tie-outs, and control documentation</li>
            <li>Improve: cycle-time analysis, automation, and variance insights</li>
          </ol>
        </article>
        <article className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>Key KPIs</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>Close timeliness & number of late reconciliations</li>
            <li>AP: on-time payments, discount capture, exceptions</li>
            <li>AR: DSO, CEI, aged buckets, dispute cycle time</li>
            <li>Accuracy: recon breaks, JE errors, audit findings</li>
          </ul>
        </article>
      </section>

      {/* CASES */}
      <section className='container py-12'>
        <h2>Recent Outcomes</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Close Acceleration','Reduced close from 12 to 7 days; late recons down 80%.'],
            ['Collections Program','DSO −9 days and CEI +7 pts with dispute playbook.'],
            ['AP Controls','Exception rate −35% via PO policy and three-way match.']
          ].map(([title, text]) => (
            <article key={title as string} className='p-6 rounded-2xl border'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* COMPLIANCE & CONTROLS */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article className='p-6 rounded-2xl border'>
          <h3 className='font-semibold'>Compliance & Controls</h3>
          <p className='mt-2 text-slate-700'>
            GAAP-aligned processes, segregation of duties, approval matrices, evidence archiving, and audit readiness.
          </p>
        </article>
        <article className='p-6 rounded-2xl border'>
          <h3 className='font-semibold'>Systems & Tools</h3>
          <p className='mt-2 text-slate-700'>
            NetSuite, SAP, Oracle, QuickBooks, BlackLine, Coupa, Bill, Workday, Adaptive/Anaplan, and more.
          </p>
        </article>
      </section>

      {/* FAQ */}
      <section className='container py-12'>
        <h2>Finance & Accounting FAQs</h2>
        <div className='mt-4 grid md:grid-cols-2 gap-6 text-slate-700'>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Can you handle monthly close end-to-end?</summary>
            <p className='mt-2'>Yes — we can staff roles or run a managed close with SLAs and audit-ready evidence.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Do you support multi-entity/multi-currency?</summary>
            <p className='mt-2'>We do — with intercompany, eliminations, and FX remeasurement experience.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>What about SOX and internal controls?</summary>
            <p className='mt-2'>We implement policies, maker–checker, and documentation to support audits.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Do you integrate with our ERP?</summary>
            <p className='mt-2'>Yes — we align to your ERP and approval flows with least-privilege access.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-slate-100'>
        <div className='container py-12 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <h2>Need F&A coverage or a managed program?</h2>
            <p className='text-slate-700 mt-1'>Share your month-end calendar and priorities — we’ll propose staffing or managed F&A.</p>
          </div>
          <a href='/contact' className='btn-primary'>Request F&A Talent</a>
        </div>
      </section>
    </main>
  );
}
