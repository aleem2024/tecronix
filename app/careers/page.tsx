import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Tecronix  Build reliable hiring & delivery systems",
  description: "Join Tecronix. We help companies hire people and buy outcomes. See why to join, culture & inclusion, benefits highlights, and open roles."
};

export default function CareersPage() {
  const perks = [
    ["Healthcare","Medical, dental, and vision plans (placeholders)."],
    ["401(k)","Company match with immediate eligibility (placeholder)."],
    ["Flexible Time","Flexible PTO and paid holidays."],
    ["Learning","Annual learning stipend and certification support."],
    ["Hybrid","Remote-friendly with hub in Austin; meeting spaces in NYC/Chicago."],
    ["Well-Being","Employee assistance resources and wellness stipend."]
  ];

  const values = [
    ["Evidence > Buzzwords","We use data and artifacts to make decisions and earn trust."],
    ["Clarity","Clear scope, definitions, and exception paths reduce surprises."],
    ["Reliability","SOPs, SLAs/QA, and dashboards  we ship predictably."],
    ["Inclusion","Accessible experiences and diverse pipelines by design."]
  ];

  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Careers at Tecronix</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            We help companies hire people and buy outcomes  with structured hiring, managed services, and diagnostics.
            If you like building systems that work, youll fit right in.
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <a href="#open-roles" className="btn-primary">See Open Roles</a>
            <a href="/careers/faq" className="btn-outline">FAQs</a>
            <a href="/careers/internships" className="btn-outline">Internship at Tecronix</a>
			<a href="/careers/culture" className="btn-outline">Our Culture</a>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="container py-12 grid lg:grid-cols-2 gap-10">
        <article>
          <h2>Why Join Tecronix</h2>
          <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-2">
            <li>Work on meaningful problems across staffing, healthcare RCM, F&amp;A, and tech delivery.</li>
            <li>Ship real systems: SOPs, macros, QA sampling, SLAs, dashboards.</li>
            <li>Grow fast with clear feedback, coaching notes, and learning stipends.</li>
          </ul>
        </article>
        <aside className="card">
          <h3 className="font-semibold">How We Work</h3>
          <ul className="mt-3 text-slate-700 space-y-2">
            <li>Weekly notes with owners and due dates</li>
            <li>Artifact-first: runbooks, rubrics, and evidence summaries</li>
            <li>Bias toward pilots  scale with quality locked in</li>
          </ul>
        </aside>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="container py-12">
        <h2>Benefits Highlights</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {perks.map(([t,d]) => (
            <article key={t as string} className="card">
              <div className="font-semibold">{t}</div>
              <p className="muted mt-2 text-sm">{d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CULTURE & DEI */}
      <section id="culture" className="container py-12 grid lg:grid-cols-2 gap-10">
        <article>
          <h2>Culture & Inclusion</h2>
          <p className="mt-2 text-slate-700">
            We build teams where people can do their best work. That means accessible experiences, structured evaluation,
            and clear expectations. We celebrate diverse backgrounds and perspectives.
          </p>
          <ul className="mt-4 grid gap-3">
            {values.map(([k,v]) => (
              <li key={k as string} className="p-4 rounded-2xl border bg-white">
                <div className="font-semibold">{k}</div>
                <p className="text-sm text-slate-700 mt-1">{v}</p>
              </li>
            ))}
          </ul>
        </article>
        <aside className="card">
          <h3 className="font-semibold">Hiring Process</h3>
          <ol className="mt-3 list-decimal pl-6 text-slate-700 space-y-2">
            <li>Apply or share your resume with context</li>
            <li>Intro chat (expectations, timeline, constraints)</li>
            <li>Structured interviews + work-sample (role dependent)</li>
            <li>Decision with evidence summary & next steps</li>
          </ol>
          <a href="/job-seekers#upload" className="btn-primary mt-4 inline-block">Submit Your Resume</a>
        </aside>
      </section>

      {/* OPEN ROLES */}
      <section id="open-roles" className="bg-slate-100">
        <div className="container py-12">
          <h2>Open Roles</h2>
          <p className="muted mt-2">Browse featured roles below or view all roles on our jobs page.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              ["Delivery Operations Lead","Austin, TX (Hybrid)","/jobs/senior-backend-engineer-austin-tx"],
              ["RCM Appeals Specialist","Remote (U.S.)","/jobs/senior-backend-engineer-austin-tx"],
              ["AP Manager (F&A)","Chicago, IL (Hybrid)","/jobs/senior-backend-engineer-austin-tx"]
            ].map(([t,l,href]) => (
              <a key={t as string} href={href as string} className="card block hover:shadow-sm">
                <div className="font-semibold">{t}</div>
                <div className="text-sm text-slate-600 mt-1">{l}</div>
                <div className="text-sm text-slate-600 mt-3">View role </div>
              </a>
            ))}
          </div>
          <div className="mt-6">
            <a href="/jobs" className="btn-outline">View All Jobs</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-12">
        <h2>Careers FAQs</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6 text-slate-700">
          <details className="p-4 rounded-2xl border">
            <summary className="font-medium">Do you support remote roles?</summary>
            <p className="mt-2">Yes  many roles are remote or hybrid; on-site where the work requires it.</p>
          </details>
          <details className="p-4 rounded-2xl border">
            <summary className="font-medium">What if I need an accommodation?</summary>
            <p className="mt-2">Email <a className="underline" href="mailto:access@tecronix.com">access@tecronix.com</a> or visit our <a className="underline" href="/legal/accessibility">Accessibility page</a>.</p>
          </details>
          <details className="p-4 rounded-2xl border">
            <summary className="font-medium">Do you sponsor visas?</summary>
            <p className="mt-2">Case-by-case depending on role and timing. Mention this in your application.</p>
          </details>
          <details className="p-4 rounded-2xl border">
            <summary className="font-medium">How fast is the process?</summary>
            <p className="mt-2">We aim for 24 weeks from intro to decision; it varies by role.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Build systems that make work reliable.</h2>
            <p className="text-slate-700 mt-1">Apply now or share your resume for future roles.</p>
          </div>
          <div className="flex gap-3">
            <a href="/jobs" className="btn-outline">Browse Jobs</a>
            <a href="/job-seekers#upload" className="btn-primary">Upload Resume</a>
          </div>
        </div>
      </section>
    </main>
  );
}


