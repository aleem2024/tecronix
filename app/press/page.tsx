import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Press | Tecronix",
  description:
    "Press releases, company news, and media resources for Tecronix — staffing, managed services, and consulting updates."
};

const items = [
  {
    href: "/press/rcm-program",
    date: "Jan 2025",
    title: "Tecronix Launches National Healthcare RCM Program",
    blurb:
      "Outcome-based RCM model with payer playbooks, SLAs/QA, and transparent dashboards for providers nationwide."
  },
  {
    href: "/press/austin-hq",
    date: "Nov 2024",
    title: "Tecronix Opens Austin HQ & Delivery Center",
    blurb:
      "Austin hub for staffing, managed services, and consulting — reinforcing nationwide delivery and client engagement."
  },
  {
    href: "/press/cx-framework",
    date: "Sep 2024",
    title: "SLA/QA Framework for eCommerce CX",
    blurb:
      "New macros and QA sampling with AQL and accessibility checks improve service-level reliability across eCommerce clients."
  },
  {
    href: "/press/partnership-ai-tools",
    date: "Jul 2024",
    title: "Tecronix Partners with AI Workforce Tools Provider",
    blurb:
      "Strategic collaboration to enhance workforce analytics, capacity forecasting, and SLA prediction models."
  },
  {
    href: "/press/diversity-report-2024",
    date: "Mar 2024",
    title: "Tecronix Releases 2024 Diversity & Inclusion Report",
    blurb:
      "Annual transparency report highlighting equitable hiring practices, leadership representation, and inclusive sourcing initiatives."
  }
];

export default function PressIndexPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">News &amp; Press</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Company updates, product launches, and resources for journalists, analysts, and industry partners.
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <a className="btn-outline" href="#media">
              Media Kit
            </a>
            <a className="btn-primary" href="#contact">
              Press Contact
            </a>
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="container py-12">
        <h2>Latest Releases</h2>
        <p className="text-slate-700 mt-2 max-w-3xl">
          Recent announcements, partnerships, and updates from Tecronix across industries.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="card block hover:shadow-sm transition">
              <div className="text-sm text-slate-600">{i.date}</div>
              <div className="font-semibold mt-1">{i.title}</div>
              <p className="muted mt-2 text-sm">{i.blurb}</p>
              <div className="text-sm text-slate-600 mt-3">Read →</div>
            </a>
          ))}
        </div>
      </section>

      {/* MEDIA KIT & CONTACT */}
      <section id="media" className="bg-slate-50">
        <div className="container py-12 grid md:grid-cols-2 gap-10">
          {/* MEDIA KIT */}
          <article className="p-6 rounded-2xl border bg-white">
            <h3 className="font-semibold text-slate-800">Media Kit</h3>
            <p className="text-slate-700 text-sm mt-2">
              Download key materials and brand assets for journalists, partners, and analysts. Updated quarterly.
            </p>
            <ul className="mt-4 text-slate-700 text-sm space-y-2">
              <li>
                <a className="underline hover:text-indigo-600" href="/docs/press-factsheet.pdf">
                  Press Factsheet (PDF)
                </a>
              </li>
              <li>
                <a className="underline hover:text-indigo-600" href="/docs/brand-assets.zip">
                  Brand Assets (ZIP)
                </a>
              </li>
              <li>
                <a className="underline hover:text-indigo-600" href="/docs/soc-brief.pdf">
                  Security &amp; Controls Brief (PDF)
                </a>
              </li>
              <li>
                <a className="underline hover:text-indigo-600" href="/docs/style-guide.pdf">
                  Editorial &amp; Style Guide (PDF)
                </a>
              </li>
            </ul>
            <p className="text-xs text-slate-500 mt-3">
              Replace placeholder files with final versions before launch.
            </p>
          </article>

          {/* PRESS CONTACT */}
          <article id="contact" className="p-6 rounded-2xl border bg-white">
            <h3 className="font-semibold text-slate-800">Press Contact</h3>
            <p className="text-slate-700 text-sm mt-2">
              For interviews, quotes, or verification requests, please reach out to our communications team.
            </p>
            <ul className="mt-4 text-slate-700 text-sm space-y-1">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  className="underline hover:text-indigo-600"
                  href="mailto:press@tecronix.com"
                >
                  press@tecronix.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong> +1 (512) 555-0188
              </li>
              <li>
                <strong>Office:</strong> 500 Congress Ave, Austin, TX 78701
              </li>
            </ul>

            <div className="mt-6">
              <a href="/about" className="btn-outline text-sm">
                Learn More About Tecronix
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-100">
        <div className="container py-12 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2>Want to feature Tecronix?</h2>
            <p className="text-slate-700 mt-1">
              Contact our media relations team for statements, insights, or commentary.
            </p>
          </div>
          <a href="mailto:press@tecronix.com" className="btn-primary">
            Contact Media Team
          </a>
        </div>
      </section>
    </main>
  );
}

