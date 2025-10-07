import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Hire  Interview Process | Tecronix Careers",
  description: "Structured, fair, and fast. Stages, signals, work-sample, and what to expect  with accommodations on request."
};

type Stage = { title: string; time: string; purpose: string; signals: string[] };

const stages: Stage[] = [
  {
    title: "Recruiter Intro",
    time: "2025 min",
    purpose: "Context, role fit, logistics, and your questions.",
    signals: ["Clarity on scope and experience", "Communication", "Motivation & constraints"]
  },
  {
    title: "Hiring Manager",
    time: "3040 min",
    purpose: "Deep dive on outcomes you have shipped and how.",
    signals: ["Problem framing", "Decisions & trade-offs", "Results and evidence"]
  },
  {
    title: "Work-Sample",
    time: "3060 min async",
    purpose: "A realistic task mirroring the role (no spec work).",
    signals: ["Structured thinking", "Writing & prioritization", "Quality of artifacts"]
  },
  {
    title: "Panel / System Tour",
    time: "4060 min",
    purpose: "Walk-through of work-sample and Q&A with peers.",
    signals: ["Collaboration", "Feedback handling", "Ownership"]
  },
  {
    title: "Offer / References",
    time: "2472 hrs",
    purpose: "Mutual fit, compensation, and start plan.",
    signals: ["Expectations alignment", "Start readiness", "References (role-appropriate)"]
  }
];

const tips = [
  "Use examples with numbers, constraints, and trade-offs.",
  "If you do not know, say so  then outline how you would find out.",
  "Prefer artifacts: docs, dashboards, SOP snippets (redact sensitive info).",
  "Timebox answers. We care about clarity more than volume."
];

const faqs: [string,string][] = [
  ["Do you support accommodations?", "Yes. Email access@tecronix.com before any stage and we will adjust (extra time, alt tools, breaks)."],
  ["Is the work-sample timed?", "It is designed to fit within the stated time. If you need more time due to an accommodation, let us know."],
  ["Will I meet the team?", "Yes  the panel includes peers and cross-functional partners where applicable."],
  ["How fast is your process?", "We aim to complete the loop within 12 weeks depending on scheduling."]
];

export default function InterviewProcessPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Our Interview Process</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Structured, fair, and signal-rich. We respect your time and aim for fast decisions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#stages">Stages</a>
            <a className="btn-outline" href="#work-sample">Work-Sample</a>
            <a className="btn-outline" href="#timeline">Timeline</a>
            <a className="btn-primary" href="/jobs">See Open Roles</a>
          </div>
        </div>
      </section>

      {/* STAGES */}
      <section id="stages" className="container py-12">
        <h2>Stages &amp; Signals</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {stages.map(s => (
            <article key={s.title} className="card">
              <div className="flex items-start justify-between gap-4">
                <div className="font-semibold">{s.title}</div>
                <div className="badge">{s.time}</div>
              </div>
              <p className="muted mt-2 text-sm">{s.purpose}</p>
              <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
                {s.signals.map(sig => <li key={sig}>{sig}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* WORK-SAMPLE */}
      <section id="work-sample" className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-2 gap-10">
          <article className="card">
            <h3 className="font-semibold">What to Expect</h3>
            <p className="mt-2 text-sm text-slate-700">
              We use a short, realistic task. No surprises, no unpaid heavy lifts. You can use any tool you like; share a PDF, doc, or spreadsheet.
            </p>
            <ul className="mt-3 text-slate-700 text-sm space-y-2">
              <li>Clear prompt and evaluation rubric</li>
              <li>Focus on structure, assumptions, and clarity</li>
              <li>We provide feedback regardless of outcome</li>
            </ul>
          </article>
          <article className="card">
            <h3 className="font-semibold">Tips</h3>
            <ul className="mt-3 text-slate-700 text-sm space-y-2">
              {tips.map(t => <li key={t}>{t}</li>)}
            </ul>
            <div className="mt-4 flex gap-3">
              <a className="btn-outline" href="/resources/templates">Templates</a>
              <a className="btn-primary" href="/job-seekers/#upload">Apply Now</a>
            </div>
          </article>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h3 className="font-semibold">Typical Timeline</h3>
          <ol className="mt-3 list-decimal pl-6 text-slate-700 space-y-2">
            <li>Intro call within a few days of application</li>
            <li>Manager interview in 25 business days</li>
            <li>Work-sample within 35 days (your schedule)</li>
            <li>Panel the following week</li>
            <li>Decision 2472 hours after final stage</li>
          </ol>
        </article>
        <article className="card">
          <h3 className="font-semibold">Accommodations</h3>
          <p className="mt-2 text-sm text-slate-700">
            We provide reasonable accommodations during hiring and on the job. Email{" "}
            <a className="underline" href="mailto:access@tecronix.com">access@tecronix.com</a>.
          </p>
        </article>
      </section>

      {/* FAQ */}
      <section className="container py-12">
        <h2>FAQ</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          {faqs.map(([q,a]) => (
            <details key={q} className="p-4 rounded-2xl border bg-white">
              <summary className="font-medium">{q}</summary>
              <p className="mt-2 text-slate-700 text-sm">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Ready to apply?</h2>
            <p className="text-slate-700 mt-1">Browse open roles or join the talent network.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/jobs">Open Roles</a>
            <a className="btn-primary" href="/job-seekers#upload">Join Talent Network</a>
          </div>
        </div>
      </section>
    </main>
  );
}


