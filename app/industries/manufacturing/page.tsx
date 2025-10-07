import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manufacturing Staffing & Outsourcing | tecronix USA',
  description: 'Production, maintenance, quality, EHS, and industrial engineering — plus managed programs for reliability, inspections, and document control. Safety-first with measurable KPIs.'
};

export default function ManufacturingIndustryPage() {
  return (
    <main>
      {/* HERO */}
      <section className='bg-slate-900 text-white'>
        <div className='container py-16'>
          <h1 className='max-w-4xl'>Manufacturing: Throughput, Quality, Safety</h1>
          <p className='mt-4 max-w-3xl text-white/80'>
            We staff operators, techs, engineers, and leaders — and run outcome-based programs for inspections, document control,
            reliability, and materials flow. Built on safety and standard work.
          </p>
          <div className='mt-8 flex flex-wrap gap-4'>
            <a href='/contact' className='btn-primary'>Request Manufacturing Talent</a>
            <a href='#roles' className='btn-outline'>Roles We Fill</a>
          </div>
        </div>
      </section>

      {/* WHY tecronix FOR MFG */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article>
          <h2>Why tecronix for the Plant Floor</h2>
          <p className='mt-3 text-slate-700'>
            We combine stable staffing with lean practices: standard work, skills matrices, layered audits, and visual management.
            Managed teams run to takt with quality checks and safety leadership.
          </p>
          <ul className='mt-4 list-disc pl-6 text-slate-700 space-y-2'>
            <li>Safety-first onboarding and refreshers; PPE & JSAs integrated</li>
            <li>Skills matrices with cross-training plans to reduce constraints</li>
            <li>Quality at the source: checklists, go/no-go, layered process audits</li>
            <li>Kitting, line feeding, and replenishment playbooks to protect flow</li>
          </ul>
        </article>
        <aside className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>Delivery Snapshot</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>Daily tiered huddles and andon for help-by-visual</li>
            <li>Gemba walks and corrective actions tracking</li>
            <li>OEE dashboards with constraints/range charts</li>
            <li>QBRs with scrap, rework, and downtime analytics</li>
          </ul>
        </aside>
      </section>

      {/* ROLES */}
      <section id='roles' className='container py-12'>
        <h2>Roles We Fill</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6 text-slate-700'>
          <ul className='space-y-1'>
            <li>Production Operators & Team Leads</li>
            <li>Assemblers, Machinists, Fabricators, Welders</li>
            <li>Materials Handlers, Shipping/Receiving, Kitting</li>
            <li>Warehouse & Inventory Control</li>
          </ul>
          <ul className='space-y-1'>
            <li>Maintenance Technicians (Mech/Electro-Mech)</li>
            <li>Automation/Controls & Instrumentation</li>
            <li>Industrial Electricians</li>
            <li>Reliability Engineers/Planners</li>
          </ul>
          <ul className='space-y-1'>
            <li>Quality Techs/Engineers (Incoming, In-Process, Final)</li>
            <li>Manufacturing/Process Engineers</li>
            <li>Industrial Engineers (IE) & CI/Lean</li>
            <li>EHS Specialists & Managers</li>
          </ul>
        </div>
      </section>

      {/* MANAGED PROGRAMS */}
      <section className='container py-12'>
        <h2>Outcome-Based Programs</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Inspection & Document Control','Incoming/in-process/final inspections, COAs, NCRs/CARs, and revision control.'],
            ['Reliability & PM Optimization','PM routes, lubrication, spares, planner/scheduler, and criticality analysis.'],
            ['Materials Flow & Kitting','Milk runs, line feeding, Kanban sizing, and point-of-use storage.'],
            ['Launch & Changeover','SMED events, standard work, and training for new models.'],
            ['Safety Culture','Layered audits, near-miss capture, JSAs, and hazard abatement.'],
            ['Continuous Improvement','Value stream mapping and kaizen to remove constraints.']
          ].map(([title, text]) => (
            <article key={title as string} className='p-6 rounded-2xl border'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* OPERATING MODEL */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article>
          <h2>Operating Model</h2>
          <ol className='mt-4 list-decimal pl-6 space-y-2 text-slate-700'>
            <li>Intake: demand, takt, changeover cadence, EHS risks</li>
            <li>Stabilize: staffing plan, skills matrix, standard work, 5S</li>
            <li>Run: tiered meetings, visual controls, escalation paths</li>
            <li>Measure: OEE, scrap/rework, safety, schedule adherence</li>
            <li>Improve: constraints removal and SMED/kaizen cycles</li>
          </ol>
        </article>
        <article className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>Key KPIs</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>OEE (Availability, Performance, Quality)</li>
            <li>Scrap & Rework Rate; First Pass Yield</li>
            <li>Unplanned Downtime & MTBF/MTTR</li>
            <li>Safety: TRIR, near-miss closure rate</li>
          </ul>
        </article>
      </section>

      {/* CASES */}
      <section className='container py-12'>
        <h2>Recent Outcomes</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Changeover Reduction','SMED cut changeover −42%; weekly throughput +11%.'],
            ['Reliability Uplift','Planned maintenance +23 pts; unplanned downtime −18%.'],
            ['Quality at Source','FPY +7 pts after checklists and layered audits.']
          ].map(([title, text]) => (
            <article key={title as string} className='p-6 rounded-2xl border'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article className='p-6 rounded-2xl border'>
          <h3 className='font-semibold'>Compliance & Standards</h3>
          <p className='mt-2 text-slate-700'>
            OSHA awareness, lockout/tagout, confined space, powered industrial trucks, and environmental controls. ISO/AS awareness where applicable.
          </p>
        </article>
        <article className='p-6 rounded-2xl border'>
          <h3 className='font-semibold'>Systems & Tooling</h3>
          <p className='mt-2 text-slate-700'>
            CMMS, MES, QMS, and digital work instructions; barcode/RFID for traceability and replenishment signals.
          </p>
        </article>
      </section>

      {/* FAQ */}
      <section className='container py-12'>
        <h2>Manufacturing FAQs</h2>
        <div className='mt-4 grid md:grid-cols-2 gap-6 text-slate-700'>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Do you staff multiple shifts?</summary>
            <p className='mt-2'>Yes — day/night/weekend coverage with float pools and cross-training plans.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Can you run a reliability program?</summary>
            <p className='mt-2'>We can operate PM optimization with planners, techs, and KPI dashboards.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>How do you handle safety?</summary>
            <p className='mt-2'>Safety onboarding, JSAs, PPE checks, and layered audits are standard.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Do you support regulated industries?</summary>
            <p className='mt-2'>Yes — ISO/AS awareness and documentation standards are part of our SOPs.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-slate-100'>
        <div className='container py-12 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <h2>Need dependable plant staffing or a managed program?</h2>
            <p className='text-slate-700 mt-1'>Share your shift plan and constraints — we’ll propose staffing or an outcome-based model.</p>
          </div>
          <a href='/contact' className='btn-primary'>Request Manufacturing Talent</a>
        </div>
      </section>
    </main>
  );
}

