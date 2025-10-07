import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Case Study: Activation Jeopardy Order Playbook | Tecronix",
  description:
    "Provisioning desk with jeopardy order lanes, field coordination, and evidence-linked QA. Reduced activation lead time and repeat truck rolls."
};
type Bullet = string;
const context: Bullet[] = [
  "National fiber ISP; mix of residential and SMB activations across regions.",
  "Jeopardy orders (missing permits, drop issues, CPE faults) stalled activations.",
  "Dispatch/coordination handoffs and documentation inconsistency caused repeats."
];
const approach: Bullet[] = [
  "Jeopardy taxonomy (permit, plant, premises, CPE, billing) with lane owners.",
  "Pre-visit confirmation macro & photo checks; address/ONT verification gates.",
  "Field coordination desk: appointment accuracy and materials checklist.",
  "Evidence-linked QA for order amendments and COB changes; rollback paths.",
  "Dashboards for activation lead time, jeopardy mix, and repeat visits."
];
const playbooks: Bullet[] = [
  "Permit chase SOPs with escalation clock and regulator notes.",
  "Drop-construction exception tree (aerial vs. buried) and utility locate flow.",
  "CPE swap matrix and firmware baseline; ONT light-level check SOP.",
  "Dispatch SLA rules; no-go criteria and reschedule policies."
];
const results: Bullet[] = [
  "Activation lead time reduced by 28% in pilot regions.",
  "Repeat truck rolls down 17% with pre-visit checks.",
  "Jeopardy recovery rate up 22% via clear owners and clocks.",
  "Stakeholder visibility improved through jeopardy dashboards."
];
const lessons: Bullet[] = [
  "A clear jeopardy taxonomy is the backbone for ownership and SLAs.",
  "Pre-visit confirmations and photo gates cut repeats dramatically.",
  "Evidence tiles make order amendments auditable and faster to review.",
  "Dashboards should separate build vs. install delays to target fixes."
];
export default function CaseStudyTelcoActivationJeopardy() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <p><a className="text-white/80 underline" href="/case-studies"> All case studies</a></p>
          <h1 className="max-w-5xl mt-2">Activation Jeopardy Order Playbook</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            A provisioning desk and jeopardy lanes aligned field, dispatch, and back office-cutting activation lead time and repeat visits.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm">Telecom, Media &amp; Streaming</span>
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm">Hybrid (Staffing + Managed)</span>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
      {/* BODY */}
      <section className="container py-12 grid lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2 card">
          <h2 className="font-semibold">Context</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {context.map(c => <li key={c}>{c}</li>)}
          </ul>
          <h2 className="font-semibold mt-8">Approach</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {approach.map(a => <li key={a}>{a}</li>)}
          </ul>
          <h2 className="font-semibold mt-8">Operational Playbooks</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {playbooks.map(p => <li key={p}>{p}</li>)}
          </ul>
          <h2 className="font-semibold mt-8">Measured Results</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {results.map(r => <li key={r}>{r}</li>)}
          </ul>
          <h2 className="font-semibold mt-8">Lessons Learned</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {lessons.map(l => <li key={l}>{l}</li>)}
          </ul>
        </article>
        <aside className="card">
          <h3 className="font-semibold">Engagement Snapshot</h3>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li><strong>Model:</strong> Hybrid (client-run production + TX QA &amp; jeopardy desk)</li>
            <li><strong>Scope:</strong> Provisioning, dispatch coordination, order amendments</li>
            <li><strong>QA:</strong> Evidence-linked defect classes; change control</li>
            <li><strong>Dashboards:</strong> Lead time, jeopardy mix, repeat visits</li>
          </ul>
          <div className="mt-4 grid gap-3">
            <a className="btn-outline" href="/services/managed-services">Managed Services</a>
            <a className="btn-outline" href="/services/staffing/staff-augmentation">Staff Augmentation</a>
            <a className="btn-outline" href="/industries/telecom-media">Telecom &amp; Media</a>
          </div>
          <div className="mt-6 p-4 rounded-2xl bg-slate-50">
            <div className="font-semibold">Reduce repeat visits</div>
            <p className="muted text-sm mt-1">Well set pre-visit gates, jeopardy lanes, and field coordination SOPs.</p>
            <a className="btn-primary mt-3 inline-block" href="/rfp">Start an RFP</a>
          </div>
        </aside>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Activate faster with fewer repeats</h2>
            <p className="text-slate-700 mt-1">Get a jeopardy playbook with QA and dashboards that align field and back office.</p>
          </div>
        <div className="flex gap-3">
            <a className="btn-outline" href="/services/consulting">Consulting Diagnostic</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
    </main>
  );
}

