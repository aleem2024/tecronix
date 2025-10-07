import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare Staffing & Outsourcing | tecronix USA',
  description: 'RNs, allied health, HIM, revenue cycle, patient access, EHR, and clinical operations — plus managed services with SLAs and compliance. Nationwide U.S. coverage.'
};

export default function HealthcareIndustryPage() {
  return (
    <main>
      {/* HERO */}
      <section className='bg-slate-900 text-white'>
        <div className='container py-16'>
          <h1 className='max-w-4xl'>Healthcare: Safe, Compliant, Patient-First Delivery</h1>
          <p className='mt-4 max-w-3xl text-white/80'>
            Clinical and non-clinical staffing across hospitals, health systems, physician groups, payers, and revenue cycle —
            with privacy and safety controls built-in. Managed services available for access, coding, AR, denials, and HIM.
          </p>
          <div className='mt-8 flex flex-wrap gap-4'>
            <a href='/contact' className='btn-primary'>Request Healthcare Talent</a>
            <a href='#roles' className='btn-outline'>Roles We Fill</a>
          </div>
        </div>
      </section>

      {/* WHY tecronix FOR HEALTHCARE */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article>
          <h2>Why tecronix for Clinical & Revenue Cycle</h2>
          <p className='mt-3 text-slate-700'>
            We align staffing and managed services to quality-of-care, throughput, and compliance. Screening includes credentials,
            licensure, and scenario-based exercises for accuracy and bedside/service standards. Programs are measured on SLAs and outcomes.
          </p>
          <ul className='mt-4 list-disc pl-6 text-slate-700 space-y-2'>
            <li>License/credential verification and primary source checks</li>
            <li>HIPAA/PHI awareness, privacy by design, least-privilege access</li>
            <li>Quality gates: chart audits, coding accuracy, call QA rubrics</li>
            <li>Staffing waves to stabilize coverage across shifts and units</li>
          </ul>
        </article>
        <aside className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>Delivery Snapshot</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>Joint Commission-aligned processes for clinical staff</li>
            <li>Onboarding checklists and competencies validation</li>
            <li>SLA dashboards for throughput, quality, and denials</li>
            <li>QBRs with improvement roadmaps</li>
          </ul>
        </aside>
      </section>

      {/* COVERAGE */}
      <section className="container py-12">
        <h2>Functions We Cover</h2>
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          {[
            ["Patient Access","Scheduling, registration, insurance verification, eligibility & prior authorization."],
            ["Coding & HIM QA","Inpatient/outpatient/professional coding, audits, queries, DNFB/discharged not final coded."],
            ["AR & Denials","Follow-up, appeals, payer-specific workflows, overturn narratives, and P2P escalations."],
            ["Cash Posting","Payments, remits, zero-pay, adjustments, refunds, and reconciliation."],
            ["Billing","Claims submission, scrubber edits, corrections, and re-bills."],
            ["Self-Pay & Early-Out","Statements, inbound calls, payment plans, charity screening."]
          ].map(([t,d]) => (
            <article key={t as string} className="card">
              <div className="font-semibold">{t}</div>
              <p className="muted mt-2 text-sm">{d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* OUTCOME PROGRAMS */}
      <section className="container py-12">
        <h2>Outcome-Based Programs</h2>
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          {[
            ["Denials Management","Overturn rate and TTR targets with payer playbooks, appeal templates, and evidence capture."],
            ["Eligibility & Prior Auth","Clean auths and reduced preventable denials with checklists and exception paths."],
            ["DNFB Cleanup","Age and dollar thresholds with daily cadence, RCA on recurring edits, and dashboarding."]
          ].map(([t,d]) => (
            <article key={t as string} className="card">
              <div className="badge">Outcome</div>
              <div className="font-semibold mt-2">{t}</div>
              <p className="muted mt-2 text-sm">{d}</p>
              <div className="text-sm text-slate-600 mt-3"><a href="/solutions/outsourcing">See managed services </a></div>
            </article>
          ))}
        </div>
      </section>

      {/* ROLES */}
      <section id='roles' className='container py-12'>
        <h2>Roles We Fill</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6 text-slate-700'>
          <ul className='space-y-1'>
            <li>Registered Nurses (Med/Surg, ICU, ED, OR, PACU)</li>
            <li>Licensed Vocational/Practical Nurses (LVN/LPN)</li>
            <li>Certified Nursing Assistants (CNA)</li>
            <li>Allied Health (RT, PT/OT, Pharm Tech, Lab)</li>
          </ul>
          <ul className='space-y-1'>
            <li>HIM & Coding (Inpatient/Outpatient, Pro-Fee, Auditors)</li>
            <li>Revenue Cycle (AR follow-up, Denials, Billing)</li>
            <li>Patient Access & Scheduling (Front Desk, Auth/Referrals)</li>
            <li>Case Management & Utilization Review</li>
          </ul>
          <ul className='space-y-1'>
            <li>EHR Analysts & Trainers (Epic/Cerner/Meditech)</li>
            <li>Clinical Informatics & Data</li>
            <li>Healthcare Finance & Compliance (HCC, CDI)</li>
            <li>Leadership (CNO, Directors, RCM Leaders)</li>
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
              Contract, C2H, and direct hire for clinical and non-clinical roles; credential and compliance workflows integrated.
            </p>
            <div className='text-sm text-slate-600 mt-2'>Learn more →</div>
          </a>
          <a href='/solutions/outsourcing' className='p-6 rounded-2xl border hover:shadow-sm transition block'>
            <h3 className='font-semibold'>Managed Revenue Cycle</h3>
            <p className='mt-2 text-slate-700 text-sm'>
              Access, coding, billing, and AR/denials teams with SLAs, QA sampling, and dashboards.
            </p>
            <div className='text-sm text-slate-600 mt-2'>Learn more →</div>
          </a>
          <a href='/solutions/consulting' className='p-6 rounded-2xl border hover:shadow-sm transition block'>
            <h3 className='font-semibold'>Clinical Ops & EHR</h3>
            <p className='mt-2 text-slate-700 text-sm'>
              Throughput, documentation quality, and EHR adoption programs with training and rounding.
            </p>
            <div className='text-sm text-slate-600 mt-2'>Learn more →</div>
          </a>
        </div>
      </section>
	  
      {/* KPIs & TOOLS */}
      <section className="container py-12 grid lg:grid-cols-2 gap-10">
        <article>
          <h2>KPIs We Drive</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-700">
            <li>Overturn rate & time-to-resolution (TTR)</li>
            <li>Clean claim rate & first-pass yield</li>
            <li>DNFB days & discharged-not-final-coded backlog</li>
            <li>Cash posting timeliness & unapplied balances</li>
          </ul>
        </article>
        <aside className="card bg-slate-50">
          <h3 className="font-semibold">Systems & Playbooks</h3>
          <ul className="mt-3 space-y-2 text-slate-700">
            <li>PM/EHR & clearinghouses; scrubbers & payer portals</li>
            <li>Payer-specific appeal templates and sequencing rules</li>
            <li>QA sampling plans by denial reason; calibration notes</li>
            <li>Evidence links, audit trails, and retention practices</li>
          </ul>
        </aside>
      </section>

      {/* HIRING SYSTEM */}
      <section className="container py-12 grid lg:grid-cols-2 gap-10">
        <article>
          <h2>How We Staff RCM</h2>
          <ol className="mt-4 list-decimal pl-6 space-y-2 text-slate-700">
            <li>Success profile: payer mix, volumes, DNFB/AR aging, and compliance constraints.</li>
            <li>Scorecards: accuracy, throughput, payer fluency, and documentation hygiene.</li>
            <li>Evidence summaries: appeal quality, coding audit results, and RCA of denials.</li>
            <li>Onboarding: playbooks, coverage plan, calibrations, and escalation matrix.</li>
          </ol>
        </article>
        <article className="card">
          <h3 className="font-semibold">Compliance & Privacy</h3>
          <ul className="mt-3 space-y-2 text-slate-700">
            <li>BAAs where PHI is in scope</li>
            <li>Least-privilege access and audit logs</li>
            <li>Retention schedules and evidence capture</li>
            <li>Training and policy acknowledgments</li>
          </ul>
        </article>
      </section>

      {/* CASES */}
      <section className='container py-12'>
        <h2>Recent Outcomes</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Patient Access Stabilization','Abandonment −22% and auth turnaround improved with staffing + SOPs.'],
            ['Coding Accuracy','+5.1 pts accuracy with audit/feedback loop and targeted training.'],
            ['AR Backlog Reduction','Aging >90 days down 18% in 8 weeks via denials workstream.']
          ].map(([title, text]) => (
            <article key={title as string} className='p-6 rounded-2xl border'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* COMPLIANCE & SAFETY */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article className='p-6 rounded-2xl border'>
          <h3 className='font-semibold'>Compliance & Safety</h3>
          <p className='mt-2 text-slate-700'>
            HIPAA/PHI handling, OSHA awareness, immunization and fit-testing (role dependent), and incident reporting standards.
          </p>
        </article>
        <article className='p-6 rounded-2xl border'>
          <h3 className='font-semibold'>Credentialing</h3>
          <p className='mt-2 text-slate-700'>
            Primary source verification, license monitoring, skills checklists, and ongoing CE tracking where required.
          </p>
        </article>
      </section>

      {/* FAQ */}
      <section className='container py-12'>
        <h2>Healthcare FAQs</h2>
        <div className='mt-4 grid md:grid-cols-2 gap-6 text-slate-700'>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Do you cover multiple facilities and shifts?</summary>
            <p className='mt-2'>Yes — we plan for multi-site coverage and surge staffing across days/nights/weekends.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Can you run managed revenue cycle?</summary>
            <p className='mt-2'>Yes — access, coding, billing, AR/denials with SLAs, QA, and dashboards.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>How do you verify credentials?</summary>
            <p className='mt-2'>Primary source checks, license monitoring, and role-based competencies validation.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Do you work in our EHR?</summary>
            <p className='mt-2'>We align to your EHR (Epic/Cerner/Meditech) with least-privilege access controls.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-slate-100'>
        <div className='container py-12 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <h2>Need clinical or revenue cycle support?</h2>
            <p className='text-slate-700 mt-1'>Tell us your units or work queues — we’ll propose staffing or a managed program.</p>
          </div>
          <a href='/contact' className='btn-primary'>Request Healthcare Talent</a>
        </div>
      </section>
    </main>
  );
}


