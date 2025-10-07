import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story  From Hiring Chaos to Reliable Systems | Tecronix",
  description: "How Tecronix formed: clarity, evidence, and reliability. A timeline of milestones and what we learned along the way."
};

type Milestone = {
  date: string;
  title: string;
  detail: string;
};

const timeline: Milestone[] = [
  {
    date: "2022",
    title: "The Spark",
    detail:
      "After years inside tech and operations, we saw the same pattern: vague roles, noisy interviews, and fragile delivery. We started writing the systems we wished we had."
  },
  {
    date: "2023 Q1",
    title: "Structured Hiring v1",
    detail:
      "Success profiles, interview kits, and evidence summaries. Clients cut time-to-decision without lowering the bar."
  },
  {
    date: "2023 Q3",
    title: "Outcomes, Not Just Seats",
    detail:
      "We launched managed services pilots: SOPs, SLAs/QA, dashboards, and change control. Reliability became the product."
  },
  {
    date: "2024",
    title: "Industry Playbooks",
    detail:
      "Healthcare RCM payer playbooks, F&A close governance, OEE programs in manufacturing, and WMS scan discipline in logistics."
  },
  {
    date: "2025",
    title: "Scale with Evidence",
    detail:
      "Artifact-first delivery: runbooks, macro libraries, sampling plans, and weekly notes with owners and due dates."
  }
];

export default function StoryPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Our Story</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            We started Tecronix to fix two universal problems: unclear hiring and unreliable delivery. 
            We build systems  so people can do the best work of their careers.
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <a href="#timeline" className="btn-outline">Timeline</a>
            <a href="#principles" className="btn-outline">Principles</a>
            <a href="#today" className="btn-primary">Where We Are Now</a>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="container py-12">
        <h2>Milestones</h2>
        <ol className="mt-6 grid gap-6">
          {timeline.map(m => (
            <li key={m.title} className="card">
              <div className="text-sm text-slate-600">{m.date}</div>
              <div className="font-semibold mt-1">{m.title}</div>
              <p className="muted mt-2 text-sm">{m.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* PRINCIPLES */}
      <section id="principles" className="container py-12 grid lg:grid-cols-3 gap-6">
        {[
          ["Clarity", "Write the scope, interfaces, and exception paths. Clarity reduces surprises."],
          ["Evidence", "Decisions and delivery artifacts live together  runbooks, rubrics, dashboards."],
          ["Reliability", "SOPs, SLAs/QA, and weekly notes make outcomes predictable."]
        ].map(([t,d]) => (
          <article key={t as string} className="card">
            <div className="font-semibold">{t}</div>
            <p className="muted mt-2 text-sm">{d}</p>
          </article>
        ))}
      </section>

      {/* TODAY */}
      <section id="today" className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h3 className="font-semibold">What We Do Today</h3>
          <ul className="mt-3 text-slate-700 text-sm space-y-2">
            <li>Staffing with structured hiring and onboarding systems</li>
            <li>Outcome programs with SOPs, SLAs/QA, dashboards, and change control</li>
            <li>Diagnostics and playbooks that raise signal and reduce noise</li>
          </ul>
        </article>
        <article className="card bg-slate-50">
          <h3 className="font-semibold">Where We Operate</h3>
          <ul className="mt-3 text-slate-700 text-sm space-y-2">
            <li>Technology, Healthcare/RCM, Finance &amp; Accounting</li>
            <li>Manufacturing, Logistics, and Retail/Admin</li>
            <li>Hybrid/remote teams centered in Austin with U.S. coverage</li>
          </ul>
        </article>
      </section>

      {/* LINKS */}
      <section className="container py-12 grid lg:grid-cols-3 gap-6">
        <a className="card block hover:shadow-sm" href="/team">
          <div className="font-semibold">Meet the Team</div>
          <p className="muted text-sm mt-2">Leadership and advisory board.</p>
        </a>
        <a className="card block hover:shadow-sm" href="/case-studies">
          <div className="font-semibold">Case Studies</div>
          <p className="muted text-sm mt-2">Outcome snapshots across industries.</p>
        </a>
        <a className="card block hover:shadow-sm" href="/careers">
          <div className="font-semibold">Were Hiring</div>
          <p className="muted text-sm mt-2">Build systems that make work reliable.</p>
        </a>
      </section>

      {/* CTA */}
      <section className="bg-slate-100">
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Ready to build reliable systems?</h2>
            <p className="text-slate-700 mt-1">Start with staffing, an outcome pilot, or a diagnostic.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/solutions/staffing">Hire People</a>
            <a className="btn-primary" href="/solutions/outsourcing">Buy Outcomes</a>
          </div>
        </div>
      </section>
    </main>
  );
}

