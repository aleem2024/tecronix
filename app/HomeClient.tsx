"use client";
import { useEffect, useState } from "react";

function AnimatedMetric({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const step = () => {
      start += value / (duration / 16);
      if (start < value) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };
    requestAnimationFrame(step);
  }, [value]);

  return (
    <div>
      <div className="text-3xl font-bold text-cyan-500">
        {count}
        {suffix}
      </div>
      <div className="text-xs font-medium uppercase tracking-wide text-slate-600 mt-1">{label}</div>
    </div>
  );
}

function MetricsBar() {
  const metrics = [
    { value: 74, suffix: "+", label: "Client NPS" },
    { value: 93, suffix: "%", label: "Candidate Retention" },
    { value: 98, suffix: "%", label: "SLA Attainment" },
    { value: 10, suffix: "+", label: "Delivery Locations" }
  ];
  return (
    <section className="bg-slate-50 relative z-20">
      <div className="container py-10 grid md:grid-cols-4 gap-6 text-center">
        {metrics.map((m) => (
          <AnimatedMetric key={m.label} value={m.value} label={m.label} suffix={m.suffix} />
        ))}
      </div>
    </section>
  );
}

export default function HomeClient() {
  return (
    <main>
{/* SUPER HERO — action-first tiles */}
<section
  className="relative text-white"
  style={{
    backgroundImage: "url('/img/hero-employers-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Gradient Overlay for readability */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(90deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.5) 100%)",
    }}
  ></div>

  <div className="container py-16 relative z-10">
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
      {/* Left Text Content */}
      <div className="max-w-3xl">
        <p className="text-white/70 text-sm uppercase tracking-wide">
          Staffing · Managed Services · Executive Search
        </p>
        <h1 className="mt-2 font-bold text-4xl sm:text-5xl leading-tight">
          Find a Job. Hire Talent. Explore Consulting.{" "}
          <span className="text-white/80">Solutions, Discovered.</span>
        </h1>
        <p className="mt-4 text-white/80 text-lg leading-relaxed">
          Operator-led recruiters and managed teams delivering outcomes with SLAs, scorecards,
          and clear communication.
        </p>
      </div>

      {/* Action Cards */}
      <div className="grid sm:grid-cols-2 gap-3 min-w-[320px]">
        <a
          href="/jobs"
          className="p-5 rounded-2xl bg-white text-slate-900 hover:shadow-md transition block"
        >
          <div className="text-xs uppercase tracking-wide text-slate-500">
            For Talent
          </div>
          <div className="font-semibold mt-1">Find a Job</div>
          <div className="text-sm text-slate-600 mt-1">
            Browse roles across U.S. markets.
          </div>
        </a>

        <a
          href="/employers"
          className="p-5 rounded-2xl border border-white/40 hover:shadow-md transition block"
        >
          <div className="text-xs uppercase tracking-wide text-white/70">
            For Employers
          </div>
          <div className="font-semibold text-white mt-1">Hire Talent</div>
          <div className="text-sm text-white/80 mt-1">
            Request staffing or a sample shortlist.
          </div>
        </a>

        <a
          href="/solutions/consulting"
          className="p-5 rounded-2xl border border-white/40 hover:shadow-md transition block"
        >
          <div className="text-xs uppercase tracking-wide text-white/70">
            For Leaders
          </div>
          <div className="font-semibold text-white mt-1">
            Explore Consulting
          </div>
          <div className="text-sm text-white/80 mt-1">
            Fix funnels, SLAs, dashboards, training.
          </div>
        </a>

        <a
          href="/solutions/outsourcing"
          className="p-5 rounded-2xl border border-white/40 hover:shadow-md transition block"
        >
          <div className="text-xs uppercase tracking-wide text-white/70">
            Outcome-Based
          </div>
          <div className="font-semibold text-white mt-1">
            Solution Discovered
          </div>
          <div className="text-sm text-white/80 mt-1">
            Managed teams with KPIs & QBRs.
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

      {/* METRICS BAR */}
      <div className="relative z-20 bg-white">
        <MetricsBar />
      </div>

      {/* CLIENT LOGOS */}
      <section className="container py-10">
        <h2 className="text-center text-slate-700 text-lg font-semibold mb-6">
          Trusted by leaders in healthcare, technology, and logistics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-center">
          {["Healthcare", "Finance", "Retail", "Logistics", "Technology"].map((l) => (
            <div key={l} className="p-4 rounded-xl border bg-white text-center text-sm text-slate-600">
              {l}
            </div>
          ))}
        </div>
      </section>

      {/* PRIMARY CHOICES */}
      <section className="container py-4 grid lg:grid-cols-3 gap-8">
        {[
          {
            title: "Hire Talent (Staffing)",
            cat: "Start here",
            desc:
              "W-2 contract, contract-to-hire, and direct hire across technology, healthcare, finance, manufacturing, logistics, retail, and admin.",
            href: "/solutions/staffing",
            bullets: [
              "Scorecards, structured interviews, references",
              "Worker classification, I-9/E-Verify, background checks",
              "Weekly pipelines and action notes",
            ],
          },
          {
            title: "Managed Services (Outcome Delivery)",
            cat: "Buy outcomes",
            desc:
              "Delivery teams for service desks, revenue cycle, data ops, content, and PMO — built around SLAs, governance, and continuous improvement.",
            href: "/solutions/outsourcing",
            bullets: [
              "Playbooks, SLAs, SOPs, KPIs, and QBRs",
              "Dashboards for throughput, quality, and reliability",
              "Transition plans and steady-state handoff",
            ],
          },
          {
            title: "Executive Search",
            cat: "Leadership",
            desc:
              "Confidential C-suite and VP searches with market mapping, competency models, calibrated slates, and close plans.",
            href: "/solutions/executive-search",
            bullets: [
              "Stakeholder alignment & success profiles",
              "Structured assessments & diligence",
              "Onboarding plans for early wins",
            ],
          },
        ].map((card) => (
          <article key={card.title} className="p-6 rounded-2xl border hover:shadow-sm transition">
            <div className="text-xs uppercase tracking-wide text-slate-500">{card.cat}</div>
            <h2 className="mt-1">{card.title}</h2>
            <p className="text-slate-700 mt-2">{card.desc}</p>
            <ul className="mt-3 list-disc pl-6 text-slate-700 text-sm space-y-1">
              {card.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <a href={card.href} className="btn-outline mt-4 inline-block">
              Explore {card.title.split(" ")[0]}
            </a>
          </article>
        ))}
      </section>

      {/* INDUSTRY CARDS */}
      <section className="container py-12">
        <h2>We Know Your World</h2>
        <p className="text-slate-700 mt-2 max-w-3xl">
          Domain recruiters and delivery leads across major industries.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            ["Technology", "/industries/technology", "Engineers, data/AI, cloud/devops, security, product/UX."],
            ["Healthcare", "/industries/healthcare", "RNs, allied, HIM, revenue cycle, patient access, EHR."],
            ["Finance & Accounting", "/industries/finance", "Close, AP/AR, payroll, FP&A, audit & controls."],
            ["Manufacturing", "/industries/manufacturing", "Production, maintenance, quality, EHS, IE."],
            ["Logistics & Supply Chain", "/industries/logistics", "DC ops, transportation, planning & procurement."],
            ["Retail & eCom", "/industries/retail", "Stores/DCs, catalog/content, CX & digital."],
          ].map(([name, href, blurb]) => (
            <a
              key={href as string}
              href={href as string}
              className="p-6 rounded-2xl border hover:shadow-sm transition block"
            >
              <div className="font-semibold">{name}</div>
              <p className="text-slate-600 text-sm mt-2">{blurb}</p>
              <div className="text-slate-600 text-sm mt-3">Learn more →</div>
            </a>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="bg-slate-50">
        <div className="container py-12">
          <h2>What People Say</h2>
          <p className="text-slate-700 mt-1">A few words from our clients and candidates.</p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <figure className="p-6 rounded-2xl border bg-white">
              <blockquote className="italic text-slate-700">
                “Tecronix’s managed teams made RCM delivery measurable — SLAs, QA, dashboards. We improved overturns by 27% in two quarters.”
              </blockquote>
              <figcaption className="mt-3 text-sm text-slate-600">
                VP, Revenue Cycle Operations (Client)
              </figcaption>
            </figure>
            <figure className="p-6 rounded-2xl border bg-white">
              <blockquote className="italic text-slate-700">
                “The interview process was structured, fair, and fast. I had my offer within a week, and onboarding was seamless.”
              </blockquote>
              <figcaption className="mt-3 text-sm text-slate-600">
                Senior Backend Engineer (Candidate)
              </figcaption>
            </figure>
          </div>
          <div className="text-center mt-8">
            <a href="/testimonials" className="btn-outline">
              View All Testimonials
            </a>
          </div>
        </div>
      </section>

{/* JOBS PREVIEW */}
<section className="container py-12">
  <div className="flex items-end justify-between">
    <div>
      <h2>Latest Jobs</h2>
      <p className="text-slate-700 mt-1">
        Highlighted roles from our U.S. clients.
      </p>
    </div>
    <a href="/jobs" className="btn-outline">
      Browse All Jobs
    </a>
  </div>

  <div className="mt-6 grid md:grid-cols-3 gap-6">
    {[
      [
        'Senior Backend Engineer',
        'Austin, TX (Hybrid) · Technology',
        '/jobs/senior-backend-engineer-austin-tx',
      ],
      [
        'Revenue Cycle Specialist',
        'Chicago, IL (On-site) · Healthcare',
        '/jobs/revenue-cycle-specialist-chicago-il',
      ],
      [
        'AP Specialist',
        'Columbus, OH (Hybrid) · Finance',
        '/jobs/ap-specialist-columbus-oh',
      ],
    ].map(([title, meta, href]) => (
      <a
        key={href as string}
        href={href as string}
        className="p-6 rounded-2xl border hover:shadow-sm transition block"
      >
        <div className="font-semibold">{title}</div>
        <div className="text-slate-600 text-sm mt-1">{meta}</div>
        <div className="text-sm text-slate-600 mt-3">View role →</div>
      </a>
    ))}
  </div>
</section>

{/* INSIGHTS PREVIEW */}
<section className="bg-slate-100">
  <div className="container py-12 grid md:grid-cols-2 gap-10 items-center">
    <div>
      <h2>Insights &amp; Salary Guides</h2>
      <p className="text-slate-700 mt-1">
        Playbooks, case studies, and market pay data to make better decisions.
      </p>

      <div className="mt-4 flex gap-3">
        <a href="/blog" className="btn-primary">
          Read Insights
        </a>
        <a href="/case-studies" className="btn-primary">
          Case Studies
        </a>
        <a href="/salary-guides/2025-us-tech" className="btn-outline">
          2025 Tech Salaries
        </a>
      </div>
    </div>

    <div className="grid sm:grid-cols-2 gap-3">
      {[
        ['2025 U.S. Tech Salary Guide', '/salary-guides/2025-us-tech'],
        ['Structured Interviews that Scale', '/insights'],
        ['Revenue Cycle: 30% Throughput', '/insights'],
        ['Retail Peak Ramp: OTIF +8 pts', '/insights'],
      ].map(([title, href]) => (
        <a
          key={href as string}
          href={href as string}
          className="p-4 rounded-2xl border bg-white hover:shadow-sm transition block"
        >
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-xs text-slate-600 mt-1">Read more →</div>
        </a>
      ))}
    </div>
  </div>
</section>

      
      {/* CTA STRIP */}
      <section className="container py-12">
        <div className="p-6 rounded-2xl border flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2>Ready to move?</h2>
            <p className="text-slate-700 mt-1">
              Whether you need people or outcomes, we’ll propose a plan and show a sample shortlist.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a href="/contact" className="btn-primary">Request Talent</a>
            <a href="/job-seekers#upload" className="btn-outline">Upload Resume</a>
          </div>
        </div>
      </section>
    </main>
  );
}

