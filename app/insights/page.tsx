import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights  Blog | Tecronix",
  description: "We publish practical playbooks and case notes on our blog. You\'ll be redirected shortly."
};

export default function InsightsAliasPage() {
  return (
    <main>
      {/* META-REFRESH (static-friendly) */}
      <head>
        <meta httpEquiv="refresh" content="1; url=/blog" />
      </head>

      {/* FALLBACK CONTENT */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Insights has moved</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Our latest posts live on the blog. We\'re redirecting you now.
          </p>
          <div className="mt-6">
            <a className="btn-primary" href="/blog">Go to Blog</a>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <h2>Popular Posts</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a className="card block hover:shadow-sm" href="/blog/structured-hiring-scorecards">
            <div className="font-semibold">Structured Hiring: Scorecards That Actually Predict</div>
            <p className="muted text-sm mt-2">Success profiles, interview kits, and evidence summaries.</p>
          </a>
          <a className="card block hover:shadow-sm" href="/blog/outcome-pilots-4-8-weeks">
            <div className="font-semibold">Outcome Pilots in 48 Weeks</div>
            <p className="muted text-sm mt-2">SOPs, SLAs/QA, and dashboards  pilot  go/no-go.</p>
          </a>
          <a className="card block hover:shadow-sm" href="/blog/healthcare-denials-playbook">
            <div className="font-semibold">Healthcare Denials Playbook</div>
            <p className="muted text-sm mt-2">Payer sequencing and appeal QA that raise overturns.</p>
          </a>
        </div>
      </section>
    </main>
  );
}

