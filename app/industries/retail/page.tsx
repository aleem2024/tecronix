import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retail & eCommerce Staffing & Outsourcing | Tecronix',
  description: 'Store operations, DCs, catalog/content, CX, digital product — plus managed programs for PDP enrichment, service desks, and peak ramp. Measurable KPIs with safety and quality.'
};

export default function RetailIndustryPage() {
  return (
    <main>
      {/* HERO */}
      <section className='bg-slate-900 text-white'>
        <div className='container py-16'>
          <h1 className='max-w-4xl'>Retail & eCommerce: Convert, Fulfill, Delight</h1>
          <p className='mt-4 max-w-3xl text-white/80'>
            From stores and DCs to digital product and CX — we staff frontline associates, analysts, and leaders, and we operate
            managed programs that improve conversion, accuracy, and OTIF with clear SLAs.
          </p>
          <div className='mt-8 flex flex-wrap gap-4'>
            <a href='/contact' className='btn-primary'>Request Retail Talent</a>
            <a href='#roles' className='btn-outline'>Roles We Fill</a>
          </div>
        </div>
      </section>

      {/* WHY Tecronix */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article>
          <h2>Why Tecronix for Retail & eCom</h2>
          <p className='mt-3 text-slate-700'>
            Every handoff shapes the customer experience. We align staffing and outcome-based teams to the funnel:
            discover → PDP → cart → checkout → pick/pack/ship → returns. Programs run on SOPs, QA, and dashboards.
          </p>
          <ul className='mt-4 list-disc pl-6 text-slate-700 space-y-2'>
            <li>Store staffing waves with training pods and sales behaviors</li>
            <li>eCom ops: PDP enrichment, taxonomy, imagery, and accessibility</li>
            <li>CX: email/chat/phone macros, QA sampling, and FCR improvement</li>
            <li>DC: engineered standards, UPH, quality at source, and safety</li>
          </ul>
        </article>
        <aside className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>Delivery Snapshot</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>Weekly dashboards: conversion, UPH, accuracy, CSAT</li>
            <li>Tiered huddles; visual management & exception paths</li>
            <li>Peak ramp playbooks with staggered starts</li>
            <li>A11y & SEO checks for PDPs and content</li>
          </ul>
        </aside>
      </section>

      {/* ROLES */}
      <section id='roles' className='container py-12'>
        <h2>Roles We Fill</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6 text-slate-700'>
          <ul className='space-y-1'>
            <li>Store Associates & Supervisors</li>
            <li>Visual Merchandising & Inventory Control</li>
            <li>Loss Prevention & AP</li>
            <li>District/Regional Managers</li>
          </ul>
          <ul className='space-y-1'>
            <li>eCom Ops & Catalog Specialists</li>
            <li>Content Producers & Copywriters</li>
            <li>Digital Designers & Merchandisers</li>
            <li>Product Managers & Analysts</li>
          </ul>
          <ul className='space-y-1'>
            <li>CX Agents & Team Leads (Email/Chat/Phone)</li>
            <li>Warehouse/DC Associates, Leads & Managers</li>
            <li>Transportation & Last-Mile Coordinators</li>
            <li>Supply Chain & Inventory Planners</li>
          </ul>
        </div>
      </section>

      {/* MANAGED PROGRAMS */}
      <section className='container py-12'>
        <h2>Outcome-Based Programs</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['PDP Enrichment & Taxonomy','Attributes, imagery, alt text, and categories to improve discoverability and conversion.'],
            ['CX Quality & FCR','Macros, QA sampling, coaching loops, and FCR uplift with CSAT.'],
            ['Pick/Pack/Ship Performance','UPH, QC sampling, damages reduction, and ship-on-time.'],
            ['Returns & Refurb','RMA handling, grading, and salvage decisions with disposition rules.'],
            ['Store Launch & Peak','Hiring waves, onboarding pods, incentives, and coverage models.'],
            ['Content Production','Copy/imagery at scale with brand and accessibility guidelines.']
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
            <li>Intake: funnel diagnostics, volumes, content gaps, SLAs</li>
            <li>Design: SOPs, macros/templates, QA rubric, capacity model</li>
            <li>Run: tiered huddles, exception handling, and coaching</li>
            <li>Measure: conversion, AOV, returns, UPH, CSAT/FCR, OTIF</li>
            <li>Improve: tests, taxonomy refresh, incentives, and training</li>
          </ol>
        </article>
        <article className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>Key KPIs</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>Web: conversion, PDP engagement, Core Web Vitals</li>
            <li>CX: CSAT, FCR, handle time, QA pass rate</li>
            <li>DC: UPH, pick/ship accuracy, damages, OTIF</li>
            <li>Stores: sales/hr, conversion, shrink, labor variance</li>
          </ul>
        </article>
      </section>

      {/* CASES */}
      <section className='container py-12'>
        <h2>Recent Outcomes</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Peak Ramp','180 seasonal hires; UPH +14%, OTIF +8 pts with waves & macros.'],
            ['PDP Conversion','+6.2% conversion from enrichment and a11y fixes.'],
            ['CX Quality','QA pass +9 pts; FCR +7 pts via macro refresh and coaching.']
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
            Accessibility (WCAG), privacy-aware handling of PII, OSHA awareness in DCs/stores, and brand compliance for content.
          </p>
        </article>
        <article className='p-6 rounded-2xl border'>
          <h3 className='font-semibold'>Systems & Tooling</h3>
          <p className='mt-2 text-slate-700'>
            eCom platforms (Shopify, SFCC, Magento), PIM/DAM, ticketing (Zendesk, Salesforce), WMS/TMS, and analytics suites.
          </p>
        </article>
      </section>

      {/* FAQ */}
      <section className='container py-12'>
        <h2>Retail & eCom FAQs</h2>
        <div className='mt-4 grid md:grid-cols-2 gap-6 text-slate-700'>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>How do you handle seasonal peak?</summary>
            <p className='mt-2'>Hiring waves with training pods, incentives, and staggered shifts to protect quality and UPH.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Can you improve PDPs at scale?</summary>
            <p className='mt-2'>Yes — enrichment factories with taxonomy rules, a11y checks, and QA sampling.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Do you run omnichannel support?</summary>
            <p className='mt-2'>We operate email/chat/phone queues with macros, QA, and FCR targets.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>What DC metrics do you track?</summary>
            <p className='mt-2'>UPH, pick/ship accuracy, damages, OTIF, carrier OTD, and safety indicators.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-slate-100'>
        <div className='container py-12 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <h2>Need store/DC staffing or digital ops support?</h2>
            <p className='text-slate-700 mt-1'>Tell us your volumes and targets — we’ll propose staffing or a managed program.</p>
          </div>
          <a href='/contact' className='btn-primary'>Request Retail Talent</a>
        </div>
      </section>
    </main>
  );
}
