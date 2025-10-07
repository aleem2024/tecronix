import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | Tecronix",
  description:
    "Hiring systems, outcome-based delivery, and playbooks across Technology, Healthcare/RCM, F&A, Manufacturing, Logistics, and Retail/Admin."
};

type Post = {
  href: string;
  date: string;
  title: string;
  excerpt: string;
  tag: string;
};

const posts: Post[] = [
  {
    href: "/blog/structured-hiring-scorecards",
    date: "2025-01-12",
    title: "Structured Hiring: Scorecards That Actually Predict",
    excerpt:
      "Move beyond vibes: success profiles, interview kits, and evidence summaries that cut time-to-decision without lowering the bar.",
    tag: "Staffing"
  },
  {
    href: "/blog/outcome-pilots-4-8-weeks",
    date: "2024-12-03",
    title: "Outcome Pilots in 4–8 Weeks",
    excerpt:
      "Stand up managed services with SOPs, SLAs/QA, and dashboards. Hit go/no-go with clarity and change control.",
    tag: "Outsourcing"
  },
  {
    href: "/blog/healthcare-denials-playbook",
    date: "2024-11-05",
    title: "Healthcare Denials Playbook: Overturns Without Heroics",
    excerpt:
      "Sequencing rules, appeal QA sampling, and evidence capture that raise overturn rates and speed up TTR.",
    tag: "Healthcare / RCM"
  },
  {
    href: "/blog/oee-three-levers",
    date: "2024-10-14",
    title: "OEE: Three Levers That Move the Needle",
    excerpt:
      "Availability, performance, quality — how to pick the right lever and avoid whack-a-mole in manufacturing.",
    tag: "Manufacturing"
  },
  {
    href: "/blog/wms-scan-compliance",
    date: "2024-09-21",
    title: "WMS & Scan Compliance: The Hidden KPI",
    excerpt:
      "How scan discipline and slotting hygiene quietly drive UPH, accuracy, and dock-to-stock time.",
    tag: "Logistics"
  }
];

export default function BlogIndexPage() {
  const tags = Array.from(new Set(posts.map((p) => p.tag)));

  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Blog &amp; Insights</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Practical notes on hiring systems and outcome-based delivery — staffing, managed services, and diagnostics.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {tags.map((t) => (
              <a key={t} href={`#${encodeURIComponent(t)}`} className="btn-outline">
                {t}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* POSTS */}
      <section className="container py-12 grid lg:grid-cols-2 gap-8">
        {tags.map((tag) => {
          const items = posts.filter((p) => p.tag === tag);
          return (
            <div key={tag} id={encodeURIComponent(tag)}>
              <h2 className="font-semibold text-slate-800">{tag}</h2>
              <div className="mt-4 grid gap-6">
                {items.map((p) => (
                  <a key={p.href} href={p.href} className="card block hover:shadow-sm transition">
                    <div className="text-sm text-slate-600">
                      {new Date(p.date).toLocaleDateString()}
                    </div>
                    <div className="font-semibold mt-1">{p.title}</div>
                    <p className="muted mt-2 text-sm">{p.excerpt}</p>
                    <div className="text-sm text-slate-600 mt-3">Read →</div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="bg-slate-100">
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Want monthly insights?</h2>
            <p className="text-slate-700 mt-1">
              Subscribe for practical playbooks and case notes.
            </p>
          </div>
          <a className="btn-primary" href="/newsletter">
            Subscribe
          </a>
        </div>
      </section>
    </main>
  );
}
