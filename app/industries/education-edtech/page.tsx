import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Education & EdTech (K-12, Higher Ed) | Tecronix",
  description:
    "Staffing and managed services for universities, K-12 districts, and EdTech-enrollment, financial aid, registrar, CX/support, content ops, proctoring, and compliance with measurable SLAs."
};
type Bullet = string;
const painPoints: Bullet[] = [
  "Seasonal spikes (applications, enrollment, FA verification) causing backlog aging",
  "Student support queues (billing, aid, registrar) missing response/resolve SLAs",
  "Content ops debt across LMS courses, assessments, accessibility remediation",
  "Exam proctoring peaks, incident handling, and appeals workflow inconsistency",
  "Data quality for SIS/LMS integrations; reporting delays (IPEDS, accreditation)",
  "Partner/teacher onboarding variability (K-12) and compliance evidence gaps"
];
const rolesWeStaff: Bullet[] = [
  "Admissions/Enrollment Associates, Financial Aid Verification Specialists",
  "Student Accounts/Billing Support, Registrar/Records Technicians",
  "CX/Helpdesk Agents (chat/voice/email), Knowledge Authors, QA Monitors",
  "LMS Content Ops: course builders, accessibility (WCAG/Section 508) remediators",
  "Assessment/Proctoring Ops, Incident Reviewers, Appeals Coordinators",
  "Data Ops: SIS/LMS integration stewards, reporting assistants"
];
const outcomes: Bullet[] = [
  "Enrollment surge desk: 30-40% cycle time reduction with calibrated triage and checklists",
  "Financial aid verification: rework  via defect-class QA and dual-review for edge cases",
  "Student support: first response < 1h and 24-48h resolution medians during peak",
  "LMS content refresh: accessibility compliance  (WCAG AA) and course readiness on-time",
  "Proctoring incident hub: consistent evidence packs and appeal SLA with audit logs",
  "IPEDS/accreditation data desk: on-time submissions with lineage evidence"
];
const tools: Bullet[] = [
  "SIS: Workday Student, Banner, PeopleSoft, Colleague; CRM: Slate, Salesforce",
  "LMS: Canvas, Blackboard, Moodle; Content: SCORM/xAPI tools, Articulate, Captivate",
  "CX: Zendesk, Freshdesk, Salesforce Service, Intercom; QA/QM suites",
  "Proctoring: ProctorU, Honorlock, Respondus; Testing platforms & item banks",
  "BI/Reporting: Power BI, Tableau; Accessibility: Ally, Siteimprove"
];
const compliance: Bullet[] = [
  "FERPA-aware processes; least-privilege access and periodic reviews",
  "Accessibility standards (WCAG 2.1 AA) with remediation evidence and QA sampling",
  "Versioned SOPs; change control tied to term/semester calendars",
  "Privacy & DPA alignment; sub-processor registry and regional controls",
  "Incident Response with severity matrix and notification SLAs"
];
const kpis: Bullet[] = [
  "Cycle time & queue aging (applications, verification, registrar requests)",
  "First response / time to resolution (CX) by channel",
  "QA pass rate by defect class; rework %",
  "Accessibility compliance rate, course readiness on-time %",
  "Reporting timeliness and evidence completeness score"
];
export default function EducationEdTechPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Education &amp; EdTech (K-12, Higher Ed)</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Scale enrollment, financial aid, registrar, support, content ops, and proctoring with staffing or outcome SLAs.
            We bring playbooks, QA, and dashboards aligned to academic calendars.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#problems">Problems We Solve</a>
            <a className="btn-outline" href="#capabilities">Capabilities</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
      {/* PROBLEMS & ROLES */}
      <section id="problems" className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <div className="font-semibold">Typical Pain Points</div>
          <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
            {painPoints.map(p => <li key={p}>{p}</li>)}
          </ul>
        </article>
        <article className="card">
          <div className="font-semibold">Roles We Staff</div>
          <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
            {rolesWeStaff.map(r => <li key={r}>{r}</li>)}
          </ul>
          <div className="mt-4 flex gap-3">
            <a className="btn-outline" href="/employers">For Employers</a>
            <a className="btn-outline" href="/job-seekers">For Job Seekers</a>
          </div>
        </article>
      </section>
      {/* OUTCOMES & CONTROLS */}
      <section id="capabilities" className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-2 gap-10">
          <article className="card">
            <h2 className="font-semibold">Outcomes &amp; Examples</h2>
            <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
              {outcomes.map(o => <li key={o}>{o}</li>)}
            </ul>
            <div className="mt-4 flex gap-3">
              <a className="btn-outline" href="/case-studies">Case Studies</a>
              <a className="btn-primary" href="/employers/compare-models">Compare Models</a>
            </div>
          </article>
          <article className="card">
            <h3 className="font-semibold">Controls &amp; Compliance</h3>
            <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
              {compliance.map(c => <li key={c}>{c}</li>)}
            </ul>
            <div className="mt-4 flex gap-3">
              <a className="btn-outline" href="/trust">Trust Center</a>
              <a className="btn-outline" href="/security/incident-response">Incident Response</a>
              <a className="btn-outline" href="/security/sub-processors">Sub-Processors</a>
            </div>
          </article>
        </div>
      </section>
      {/* TOOLS & KPIs */}
      <section className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h2 className="font-semibold">Tooling Ecosystem</h2>
          <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
            {tools.map(t => <li key={t}>{t}</li>)}
          </ul>
        </article>
        <article className="card">
          <h2 className="font-semibold">KPIs We Track</h2>
          <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
            {kpis.map(k => <li key={k}>{k}</li>)}
          </ul>
        </article>
      </section>
      {/* PROGRAM SHAPES */}
      <section className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-3 gap-6">
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Staffing</div>
            <p className="muted text-sm mt-2">Enrollment/FA/registrar coverage with QA sampling and surge buffers.</p>
            <a className="btn-outline mt-3" href="/employers">Explore</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Managed Services</div>
            <p className="muted text-sm mt-2">Outcome SLAs (response, resolve, readiness, reporting) with dashboards.</p>
            <a className="btn-outline mt-3" href="/employers/compare-models">Compare</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Consulting</div>
            <p className="muted text-sm mt-2">Diagnostics to design term-based surge plans, SOPs, and QA.</p>
            <a className="btn-outline mt-3" href="/consulting/diagnostics">Diagnostics</a>
          </article>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Make peak weeks boring</h2>
            <p className="text-slate-700 mt-1">Well propose staffing or outcome SLAs aligned to academic calendars and compliance.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/rfp">Start an RFP</a>
            <a className="btn-primary" href="/contact">Talk to Education Lead</a>
          </div>
        </div>
      </section>
    </main>
  );
}

