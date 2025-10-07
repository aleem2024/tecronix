import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Culture | Tecronix Careers",
  description: "Values, ways of working, diversity & inclusion, and what employees say about life at Tecronix."
};

const values = [
  {
    title: "Clarity",
    desc: "We cut noise and frame problems clearly. Weekly notes, SOPs, and dashboards help everyone row in the same direction."
  },
  {
    title: "Reliability",
    desc: "We keep promises  to clients and each other. We measure throughput, quality, and reliability; then improve them."
  },
  {
    title: "Ownership",
    desc: "We write it down, assign an owner, and follow through. We escalate early and propose fixes, not just problems."
  },
  {
    title: "Kindness",
    desc: "We give feedback with respect. We assume good intent, listen actively, and support colleagues."
  }
];

const faqs: [string,string][] = [
  ["Do you support remote work?", "Yes  many roles are remote or hybrid. Some delivery roles are client-site specific."],
  ["How do you handle diversity & inclusion?", "We recruit with structured signals, anonymize where possible, and run calibration to avoid bias."],
  ["How are values reinforced?", "Weekly notes, runbooks, scorecards, and recognition programs align with our values."],
  ["What if I see a culture issue?", "We encourage raising concerns to your manager, HR, or anonymously via our reporting channel."]
];

const voices = [
  { name: "Jordan, Delivery Ops", quote: "Weekly notes keep us aligned  I always know owners and due dates." },
  { name: "Riley, Engineering", quote: "We ship fast but not sloppy. The work-sample was exactly what I do on the job." },
  { name: "Sam, Recruiting", quote: "Scorecards make hiring fairer and faster. I love seeing candidates succeed." },
  { name: "Casey, Analytics", quote: "Dashboards arent fluff  they actually guide actions week to week." }
];

export default function CulturePage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Our Culture</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Clarity, reliability, ownership, and kindness. These arent posters  they show up in our SOPs, dashboards, and weekly notes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#values">Values</a>
            <a className="btn-outline" href="#voices">Employee Voices</a>
            <a className="btn-primary" href="/careers/benefits">See Benefits</a>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section id="values" className="container py-12 grid md:grid-cols-2 gap-6">
        {values.map(v => (
          <article key={v.title} className="card">
            <h2 className="font-semibold">{v.title}</h2>
            <p className="muted mt-2 text-sm">{v.desc}</p>
          </article>
        ))}
      </section>

      {/* VOICES */}
      <section id="voices" className="bg-slate-100">
        <div className="container py-12">
          <h2>Employee Voices</h2>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {voices.map(v => (
              <article key={v.name} className="card">
                <p className="text-sm text-slate-700">{v.quote}</p>
                <div className="mt-3 text-xs text-slate-500"> {v.name}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-12">
        <h2>Culture FAQ</h2>
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
            <h2>Want to work this way?</h2>
            <p className="text-slate-700 mt-1">See open roles or join our talent network.</p>
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

