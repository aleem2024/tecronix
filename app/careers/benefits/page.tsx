import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benefits & Perks | Tecronix Careers",
  description: "Compensation philosophy, health & wellness, time off, equipment & home office, learning budget, and flexible work."
};

type Row = { label: string; us: string; notes?: string };

const health: Row[] = [
  { label: "Medical", us: "Multiple plans with employer contribution", notes: "HSA option; details vary by state" },
  { label: "Dental", us: "PPO with ortho options" },
  { label: "Vision", us: "Annual exam + hardware allowance" },
  { label: "Mental Health", us: "Employee Assistance Program (EAP)", notes: "Confidential sessions; crisis support" },
  { label: "Life & Disability", us: "Company-paid basic life + STD/LTD" }
];

const timeoff: Row[] = [
  { label: "Paid Time Off", us: "Flexible PTO for exempt roles; accrued PTO for hourly" },
  { label: "Sick Leave", us: "Separate bank where required by law" },
  { label: "Parental Leave", us: "Paid leave policy (primary/secondary caregiver)" },
  { label: "Holidays", us: "10+ company holidays + 1 floating" },
  { label: "Volunteer Day", us: "1 paid day per year" }
];

const work: Row[] = [
  { label: "Remote/Hybrid", us: "Role-dependent; many teams support hybrid/remote" },
  { label: "Home Office", us: "One-time stipend + monthly internet subsidy" },
  { label: "Equipment", us: "Laptop + peripherals; accessibility accommodations" },
  { label: "Coworking", us: "Reimbursed where needed (manager approval)" }
];

const growth: Row[] = [
  { label: "Learning Budget", us: "$1,000/year for courses, books, conferences" },
  { label: "Coaching", us: "Peer feedback loops + optional external coaching" },
  { label: "Career Framework", us: "Clear levels, competencies, and expectations" },
  { label: "Internal Mobility", us: "Apply to open roles after 6 months in role" }
];

const faqs: [string,string][] = [
  ["Do you support fully-remote teams?", "Yes  many roles are remote/hybrid. Some delivery roles are on-site by nature depending on client systems."],
  ["What about visas?", "Case-by-case based on role, location, and timing. Mention in your application."],
  ["Can I choose my equipment?", "We provide a standard setup; reasonable substitutions available with manager approval."],
  ["How does PTO work for contractors?", "Contractors follow assignment-specific policies from the staffing client."]
];

export default function CareersBenefitsPage() {
  const Table = ({title, rows}:{title:string; rows:Row[]}) => (
    <section className="container py-8">
      <h2>{title}</h2>
      <div className="mt-4 overflow-x-auto rounded-2xl border bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left p-4 font-semibold">Benefit</th>
              <th className="text-left p-4 font-semibold">US</th>
              <th className="text-left p-4 font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.label} className="border-t align-top">
                <td className="p-4 font-medium">{r.label}</td>
                <td className="p-4 text-slate-700">{r.us}</td>
                <td className="p-4 text-slate-700">{r.notes || ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );

  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Benefits &amp; Perks</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            We design our benefits to support health, flexibility, and growth  so you can focus on shipping great work.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#health">Health</a>
            <a className="btn-outline" href="#timeoff">Time Off</a>
            <a className="btn-outline" href="#work">Work Setup</a>
            <a className="btn-outline" href="#growth">Growth</a>
            <a className="btn-primary" href="/careers/interview-process">How We Hire</a>
          </div>
        </div>
      </section>

      {/* COMP PHILOSOPHY */}
      <section className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h2 className="font-semibold">Compensation Philosophy</h2>
          <p className="mt-2 text-sm text-slate-700">
            We target market-competitive pay with clear levels and bands. Offers consider scope, experience, and location.
            We review bands regularly and avoid negotiation games  we aim for fairness and clarity.
          </p>
        </article>
        <article className="card bg-slate-50">
          <h3 className="font-semibold">Equity &amp; Bonuses</h3>
          <p className="mt-2 text-sm text-slate-700">
            Some roles include performance bonuses or equity grants. Details are listed on the job posting where applicable.
          </p>
        </article>
      </section>

      {/* TABLES */}
      <div id="health"><Table title="Health &amp; Wellness" rows={health} /></div>
      <div id="timeoff"><Table title="Time Off" rows={timeoff} /></div>
      <div id="work"><Table title="Flexible Work &amp; Setup" rows={work} /></div>
      <div id="growth"><Table title="Growth &amp; Learning" rows={growth} /></div>

      {/* LOCATIONS */}
      <section className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h3 className="font-semibold">Locations</h3>
          <p className="mt-2 text-sm text-slate-700">
            Our primary hub is Austin, TX. Many roles are hybrid/remote across the U.S. Some client-facing work may require on-site presence.
          </p>
        </article>
        <article className="card">
          <h3 className="font-semibold">Accommodations</h3>
          <p className="mt-2 text-sm text-slate-700">
            If you need a reasonable accommodation during the hiring process or on the job, email{" "}
            <a className="underline" href="mailto:access@tecronix.com">access@tecronix.com</a>.
          </p>
        </article>
      </section>

      {/* FAQ */}
      <section className="container py-12">
        <h2>FAQ</h2>
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
      <section className="bg-slate-100">
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Ready to explore roles?</h2>
            <p className="text-slate-700 mt-1">See open jobs or join the talent network.</p>
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


