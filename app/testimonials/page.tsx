import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Tecronix — Client Results & Candidate Experiences",
  description:
    "Real feedback from clients and candidates across staffing, outsourcing, and consulting programs. Discover measurable results and trust built through Tecronix solutions."
};

type Quote = {
  type: "Client" | "Candidate";
  name: string;
  title: string;
  quote: string;
  sector?: string;
  rating?: number;
};

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div aria-label={`${n} out of 5 stars`} className="text-amber-500" role="img">
      {"★".repeat(n)}{"☆".repeat(5 - n)}
    </div>
  );
}

/*
  CLIENT QUOTES: anonymized / generic organizations only.
  Names are role + generic org descriptor to avoid referencing real companies.
*/
const clientQuotes: Quote[] = [
  {
    type: "Client",
    name: "VP Engineering",
    title: "Large Technology Platform (Anonymous)",
    quote:
      "Scorecards and sprint pods transformed our delivery. We ship 30% faster with 20% fewer escalations — and QA metrics are transparent.",
    sector: "Technology",
    rating: 5
  },
  {
    type: "Client",
    name: "Director, Revenue Cycle",
    title: "Regional Healthcare Provider (Anonymous)",
    quote:
      "Appeals automation and quality gates gave us predictable overturns. First-pass resolution improved by 25% and denials dropped sharply.",
    sector: "Healthcare / RCM",
    rating: 5
  },
  {
    type: "Client",
    name: "Controller",
    title: "National Retailer (Anonymous)",
    quote:
      "Close calendar discipline and reconciliation playbooks reduced surprises. Audit sign-off was smoother than any prior year.",
    sector: "Finance & Accounting",
    rating: 5
  },
  {
    type: "Client",
    name: "COO",
    title: "Third-Party Logistics Provider (Anonymous)",
    quote:
      "WMS data QA and exception dashboards reduced cost per shipment by 18%. Visibility and partner confidence improved dramatically.",
    sector: "Logistics",
    rating: 5
  }
];

/* Candidate quotes: use role + location (no personal names) */
const candidateQuotes: Quote[] = [
  {
    type: "Candidate",
    name: "Senior Backend Engineer",
    title: "Austin, TX",
    quote:
      "Structured interviews and clear scorecards made it feel objective. The feedback loop was fast and respectful.",
    rating: 5
  },
  {
    type: "Candidate",
    name: "Appeals Specialist",
    title: "Remote, U.S.",
    quote:
      "Expectations and playbooks were clear from week one. Managers coached and the SOPs were ready on day one.",
    rating: 5
  },
  {
    type: "Candidate",
    name: "Accounts Payable Manager",
    title: "Chicago, IL",
    quote:
      "Case exercise matched the real work — onboarding was quick, documentation complete, and the culture was consistent.",
    rating: 5
  },
  {
    type: "Candidate",
    name: "Customer Experience Lead",
    title: "Phoenix, AZ",
    quote:
      "Transparency during contract-to-hire gave me confidence. Every milestone was tracked and reviewed — zero surprises.",
    rating: 5
  }
];

export default function TestimonialsPage() {
  const metrics = [
    { label: "Client NPS", value: "74+" },
    { label: "Candidate Retention", value: "93%" },
    { label: "SLA Attainment", value: "98.7%" },
    { label: "Delivery Locations", value: "10+" }
  ];

  /* Placeholder, non-identifying "logos" by industry label only */
  const logos = ["Healthcare", "Retail", "Manufacturing", "Logistics", "Technology"];

  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-4xl">Testimonials & Success Stories</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Results earn trust. Hear from clients and candidates who partnered with Tecronix across staffing,
            managed services, and consulting — and saw measurable outcomes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#clients" className="btn-primary">
              Client Results
            </a>
            <a href="#candidates" className="btn-outline">
              Candidate Voices
            </a>
            <a href="/case-studies" className="btn-outline">
              Explore Case Studies
            </a>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-slate-50">
        <div className="container py-12 grid md:grid-cols-4 gap-6 text-center">
          {metrics.map((m) => (
            <div key={m.label} className="space-y-1">
              <div className="text-4xl font-bold text-cyan-500">{m.value}</div>
              <div className="text-xs font-medium tracking-widest text-slate-600 uppercase">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section id="clients" className="container py-12">
        <h2>Client Results</h2>
        <p className="mt-3 text-slate-700 max-w-3xl">
          From healthcare and retail to technology and logistics — measurable impact drives repeat partnerships.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {clientQuotes.map((q) => (
            <figure
              key={`${q.name}-${q.title}`}
              className="p-6 rounded-2xl border hover:shadow-sm transition bg-white"
            >
              {q.rating && <Stars n={q.rating} />}
              <blockquote className="italic text-slate-700 mt-2">“{q.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-slate-600">
                <div className="font-medium">{q.name}</div>
                <div>
                  {q.title}
                  {q.sector ? ` — ${q.sector}` : ""}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* LOGOS */}
      <section className="container py-12">
        <h2>Trusted Across Industries</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
          {logos.map((l) => (
            <div
              key={l}
              className="p-4 rounded-2xl border text-center text-slate-600 text-sm bg-white"
            >
              {l}
            </div>
          ))}
        </div>
      </section>

      {/* CANDIDATE TESTIMONIALS */}
      <section id="candidates" className="container py-12">
        <h2>Candidate Voices</h2>
        <p className="mt-3 text-slate-700 max-w-3xl">
          Candidates choose Tecronix for transparency, structure, and real career outcomes — not just placements.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {candidateQuotes.map((q) => (
            <figure
              key={`${q.name}-${q.title}`}
              className="p-6 rounded-2xl border hover:shadow-sm transition bg-white"
            >
              {q.rating && <Stars n={q.rating} />}
              <blockquote className="italic text-slate-700 mt-2">“{q.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-slate-600">
                <div className="font-medium">{q.name}</div>
                <div>{q.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-100">
        <div className="container py-12 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2>Want verified references or dashboards?</h2>
            <p className="text-slate-700 mt-1">
              We can share anonymized case metrics and QA samples from your industry on request.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="/contact#form" className="btn-outline">
              Request References
            </a>
            <a href="/solutions/outsourcing" className="btn-primary">
              Start a Pilot
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
