import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership | Tecronix",
  description: "Meet the leadership team driving Tecronix  experienced across staffing, outsourcing, and consulting."
};

type Leader = { name: string; role: string; photo: string; bio: string };

const leaders: Leader[] = [
  {
    name: "Alex Morgan",
    role: "Chief Executive Officer",
    photo: "/photos/leaders/ceo.svg",
    bio: "Alex founded Tecronix to mix staffing rigor with outsourcing clarity. Previously led $500M+ operations in staffing and BPO."
  },
  {
    name: "Jamie Patel",
    role: "Chief Operating Officer",
    photo: "/photos/leaders/coo.svg",
    bio: "Jamie drives delivery quality and client success. Deep experience in healthcare RCM and logistics outsourcing."
  },
  {
    name: "Taylor Reed",
    role: "Chief Technology Officer",
    photo: "/photos/leaders/cto.svg",
    bio: "Taylor builds systems for reliability and scale. Background in SaaS, analytics, and workflow automation for F&A teams."
  },
  {
    name: "Morgan Lee",
    role: "Chief Financial Officer",
    photo: "/photos/leaders/cfo.svg",
    bio: "Morgan ensures financial discipline and transparency. Career in Fortune 500 FP&A and growth-stage staffing firms."
  }
];

export default function LeadershipPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Leadership</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Our team combines experience in staffing, managed services, and consulting  with a bias for clarity and reliability.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#team">Meet the Team</a>
            <a className="btn-primary" href="/about">About Us</a>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="container py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {leaders.map(l => (
          <article key={l.name} className="card flex flex-col items-center text-center">
            <img src={l.photo} alt={l.name + " photo"} className="w-32 h-32 rounded-full border mb-4"/>
            <div className="font-semibold">{l.name}</div>
            <div className="text-sm text-slate-600">{l.role}</div>
            <p className="muted text-sm mt-2">{l.bio}</p>
          </article>
        ))}
      </section>

      {/* VALUES */}
      <section className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-2 gap-10">
          <article className="card">
            <h2 className="font-semibold">What Unites Us</h2>
            <ul className="mt-3 text-slate-700 text-sm space-y-2">
              <li>Structured hiring and fair opportunities</li>
              <li>Evidence-driven operations and dashboards</li>
              <li>Client trust: SLAs, QA sampling, and transparency</li>
              <li>Culture of clarity, ownership, and kindness</li>
            </ul>
          </article>
          <article className="card">
            <h2 className="font-semibold">Advisors & Network</h2>
            <p className="mt-2 text-sm text-slate-700">
              Beyond the exec team, we draw on advisors across healthcare, logistics, F&A, and SaaS. We also partner with investors
              and ecosystem peers for perspective.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Want to work with us?</h2>
            <p className="text-slate-700 mt-1">Join our team or start a project together.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/careers/culture">Our Culture</a>
            <a className="btn-primary" href="/contact">Contact Us</a>
          </div>
        </div>
      </section>
    </main>
  );
}

