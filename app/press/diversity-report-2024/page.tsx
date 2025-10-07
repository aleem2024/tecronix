import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tecronix Releases 2024 Diversity & Inclusion Report | Tecronix",
  description: "Tecronix publishes its 2024 Diversity & Inclusion Report, highlighting equitable hiring, leadership representation, and workforce transparency."
};

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-4xl">Tecronix Releases 2024 Diversity & Inclusion Report</h1>
          <p className="mt-2 text-white/80">March 2024</p>
          <p className="mt-4 max-w-3xl text-white/80">Tecronix publishes its 2024 Diversity & Inclusion Report, highlighting equitable hiring, leadership representation, and workforce transparency.</p>
        </div>
      </section>

      {/* BODY */}
      <section className="container py-12 prose prose-slate">
              <p><strong>Austin, TX — March 2024.</strong> Tecronix released its annual <em>Diversity & Inclusion Report</em>, reaffirming its commitment to equitable hiring practices and representative leadership across all business lines.</p>

      <h2>Report Highlights</h2>
      <ul>
        <li>54% of total placements identified as women or underrepresented groups.</li>
        <li>Leadership diversity increased by 21% year-over-year.</li>
        <li>Mandatory bias-awareness and inclusive hiring training for all recruiters.</li>
        <li>Quarterly representation reviews embedded into delivery leadership KPIs.</li>
      </ul>

      <p>“Transparency drives progress,” said <strong>Evan Brooks</strong>, Head of Talent at Tecronix. “By publishing our data annually, we hold ourselves accountable and model what we ask of our clients — measurable improvement.”</p>

      <h2>Commitment to Accountability</h2>
      <p>The Diversity & Inclusion Report is part of Tecronix’s broader governance initiative, which also includes SOC-2 audits, sustainability tracking, and public metrics dashboards.</p>

      <h2>About Tecronix</h2>
      <p>Tecronix helps employers hire better, deliver faster, and scale smarter — through staffing, managed services, and consulting designed around measurable outcomes and inclusion.</p>
      </section>

      {/* CTA */}
      <section className="bg-slate-100">
        <div className="container py-12 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2>Media Contact</h2>
            <p className="text-slate-700 text-sm mt-1">
              press@tecronix.com · +1 (512) 555-0188
            </p>
          </div>
          <a href="/press" className="btn-outline">← Back to News</a>
        </div>
      </section>
    </main>
  );
}

