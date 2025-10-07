import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Logistics & Supply Chain Staffing & Outsourcing | tecronix USA',
  description: 'DC operations, transportation, inventory, planning & procurement — plus managed programs for inbound/outbound, cycle counts, slotting, and last-mile. Safety-first with measurable KPIs.'
};

export default function LogisticsIndustryPage() {
  return (
    <main>
      {/* HERO */}
      <section className='bg-slate-900 text-white'>
        <div className='container py-16'>
          <h1 className='max-w-4xl'>Logistics & Supply Chain: OTIF, Safety, Cost</h1>
          <p className='mt-4 max-w-3xl text-white/80'>
            From distribution centers and cross-docks to transportation planning and inventory control — we staff associates,
            supervisors, and leaders, and operate managed programs with SLAs tied to OTIF and cost-per-unit.
          </p>
          <div className='mt-8 flex flex-wrap gap-4'>
            <a href='/contact' className='btn-primary'>Request Logistics Talent</a>
            <a href='#roles' className='btn-outline'>Roles We Fill</a>
          </div>
        </div>
      </section>

      {/* WHY tecronix */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article>
          <h2>Why tecronix for DCs & Networks</h2>
          <p className='mt-3 text-slate-700'>
            Flow beats chaos. We combine stable staffing with engineered standards, safety leadership, and visual controls.
            Managed programs run to takt with QA checks, exception handling, and daily tiered huddles.
          </p>
          <ul className='mt-4 list-disc pl-6 text-slate-700 space-y-2'>
            <li>Standard work & engineered rates with coaching</li>
            <li>Slotting/zone design and pick path optimization</li>
            <li>Cycle counting, location accuracy, and inventory health</li>
            <li>Safety programs with near-miss capture and correction</li>
          </ul>
        </article>
        <aside className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>Delivery Snapshot</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>Inbound: receiving, put-away, ASN & damage handling</li>
            <li>Outbound: picking, packing, QC, load planning</li>
            <li>Transportation: routing, tendering, carrier compliance</li>
            <li>Inventory: cycle counts, root cause, slot maintenance</li>
          </ul>
        </aside>
      </section>

      {/* ROLES */}
      <section id='roles' className='container py-12'>
        <h2>Roles We Fill</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6 text-slate-700'>
          <ul className='space-y-1'>
            <li>Warehouse Associates (Picking/Packing/Receiving)</li>
            <li>Forklift/Reach/Order Picker Operators</li>
            <li>Shipping/Receiving Clerks & Inventory Control</li>
            <li>QC/QA Technicians</li>
          </ul>
          <ul className='space-y-1'>
            <li>Supervisors & Leads (Inbound/Outbound)</li>
            <li>Transportation Coordinators/Planners</li>
            <li>Demand/Inventory Planners</li>
            <li>Procurement/Buyer & Sourcing</li>
          </ul>
          <ul className='space-y-1'>
            <li>Industrial Engineers & CI/Lean</li>
            <li>WMS/TMS Analysts (Manhattan, Blue Yonder, SAP)</li>
            <li>Operations Managers & DC Managers</li>
            <li>Supply Chain Directors</li>
          </ul>
        </div>
      </section>

      {/* MANAGED PROGRAMS */}
      <section className='container py-12'>
        <h2>Outcome-Based Programs</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Inbound Stabilization','Dock-to-stock time, damages, ASN accuracy, and location integrity.'],
            ['Outbound Performance','Pick accuracy, units/hour, wave management, and trailer readiness.'],
            ['Cycle Count & Health','ABC cycle counts, location audits, and root-cause protections.'],
            ['Slotting & Replenishment','Velocity-based slotting, pick path, and min/max replenishment.'],
            ['Returns & Refurbs','RMA processing, grading, and salvage decisioning.'],
            ['Peak Ramp','Hiring waves, training pods, and staggered start playbooks.']
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
            <li>Intake: volumes, cube, service profile, constraints</li>
            <li>Stabilize: staffing plan, training, standard work, 5S</li>
            <li>Run: tiered huddles, visual controls, exception paths</li>
            <li>Measure: UPH, pick accuracy, OTIF, detention/dwell</li>
            <li>Improve: slotting refresh, route optimization, CI events</li>
          </ol>
        </article>
        <article className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>Key KPIs</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>UPH/LPH and cost-per-unit</li>
            <li>Pick/ship accuracy and damages</li>
            <li>OTIF and carrier on-time pickup</li>
            <li>Safety: TRIR, near-miss closure, ergonomic scores</li>
          </ul>
        </article>
      </section>

      {/* CASES */}
      <section className='container py-12'>
        <h2>Recent Outcomes</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Holiday Peak','Ramp 180 associates; UPH +14% and OTIF +8 pts with waves.'],
            ['Cycle Count Reset','Location accuracy +6.5 pts after audits and root-cause fixes.'],
            ['Outbound Quality','Pick accuracy 99.6% with QC sampling and retraining.']
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
            OSHA awareness, PIT certifications, hazmat/HAZCOM, load securement, and food-grade or pharma GMP awareness where applicable.
          </p>
        </article>
        <article className='p-6 rounded-2xl border'>
          <h3 className='font-semibold'>Systems & Tooling</h3>
          <p className='mt-2 text-slate-700'>
            WMS/TMS (Manhattan, Blue Yonder, SAP EWM), RF scanners, labeling, routing optimization, and dock scheduling.
          </p>
        </article>
      </section>

      {/* FAQ */}
      <section className='container py-12'>
        <h2>Logistics FAQs</h2>
        <div className='mt-4 grid md:grid-cols-2 gap-6 text-slate-700'>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Do you staff multiple shifts and peak?</summary>
            <p className='mt-2'>Yes — day/night/weekend coverage and peak ramp plans with training pods.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Can you run cycle count and slotting?</summary>
            <p className='mt-2'>We operate cycle counting and periodic slotting refresh with KPIs and audits.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Do you support carrier management?</summary>
            <p className='mt-2'>We help with routing/tendering, on-time pickup, and dwell management.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>What safety practices do you enforce?</summary>
            <p className='mt-2'>PPE, PIT training, JHAs/JSAs, near-miss capture, and corrective action tracking.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-slate-100'>
        <div className='container py-12 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <h2>Need DC staffing or an outcome-based program?</h2>
            <p className='text-slate-700 mt-1'>Share your volumes and service profile — we’ll propose staffing or a managed solution.</p>
          </div>
          <a href='/contact' className='btn-primary'>Request Logistics Talent</a>
        </div>
      </section>
    </main>
  );
}

