import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Tecronix",
  description: "Leadership and advisors focused on reliable hiring and outcome delivery."
};

type Person = { name: string; role: string; bio: string; img?: string; link?: string };

const leadership: Person[] = [
  { name: "Alex Turner", role: "Founder & CEO", bio: "Built hiring and delivery systems across tech and operations. Loves boring, reliable releases and clean dashboards." },
  { name: "Priya Desai", role: "COO", bio: "Scaled multi-site operations with SOPs, QA sampling, and weekly governance notes." },
  { name: "Marcus Lee", role: "VP, Delivery", bio: "Outcome programs across RCM, F&A, and logistics  SLAs, AQL sampling, and evidence hygiene." },
  { name: "Dana Kim", role: "Head of Talent", bio: "Structured hiring, scorecards, and work-samples; diversity sourcing and accessible experiences." }
];

const advisors: Person[] = [
  { name: "Taylor Nguyen", role: "Healthcare RCM Advisor", bio: "Payer playbooks and appeal QA." },
  { name: "Sofia Alvarez", role: "Finance & Accounting Advisor", bio: "Close governance and controls." },
  { name: "Ethan Brooks", role: "Manufacturing Advisor", bio: "OEE and containment programs." },
  { name: "Lena Park", role: "Security & Privacy Advisor", bio: "Access models, audit logs, retention." }
];

export default function TeamPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Our Team</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Were builders  of hiring systems and outcome programs. Clarity, evidence, and reliability are our operating principles.
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <a className="btn-outline" href="#leadership">Leadership</a>
            <a className="btn-outline" href="#advisors">Advisors</a>
            <a className="btn-primary" href="/careers">Were hiring</a>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="container py-12">
        <h2>Leadership</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map(p => (
            <article key={p.name} className="card">
              <div className="h-28 w-28 rounded-full bg-slate-200" aria-hidden="true"></div>
              <div className="font-semibold mt-3">{p.name}</div>
              <div className="text-sm text-slate-600">{p.role}</div>
              <p className="muted mt-2 text-sm">{p.bio}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ADVISORS */}
      <section id="advisors" className="container py-12">
        <h2>Advisory Board</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisors.map(p => (
            <article key={p.name} className="card">
              <div className="h-24 w-24 rounded-full bg-slate-200" aria-hidden="true"></div>
              <div className="font-semibold mt-3">{p.name}</div>
              <div className="text-sm text-slate-600">{p.role}</div>
              <p className="muted mt-2 text-sm">{p.bio}</p>
            </article>
          ))}
        </div>
      </section>

      {/* LINKS */}
      <section className="container py-12 grid lg:grid-cols-3 gap-6">
        <a className="card block hover:shadow-sm" href="/careers/culture">
          <div className="font-semibold">How We Work</div>
          <p className="muted text-sm mt-2">Values, inclusion, and ways of working.</p>
        </a>
        <a className="card block hover:shadow-sm" href="/case-studies">
          <div className="font-semibold">Case Studies</div>
          <p className="muted text-sm mt-2">Outcome snapshots across industries.</p>
        </a>
        <a className="card block hover:shadow-sm" href="/press">
          <div className="font-semibold">Press & Media</div>
          <p className="muted text-sm mt-2">Factsheet and brand assets.</p>
        </a>
      </section>

      {/* CTA */}
      <section className="bg-slate-100">
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Want to work with us?</h2>
            <p className="text-slate-700 mt-1">Were hiring  and we love clear, evidence-driven builders.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/careers">Careers</a>
            <a className="btn-primary" href="/jobs">Open Roles</a>
          </div>
        </div>
      </section>
    </main>
  );
}

