import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tecronix Opens Austin HQ & Delivery Center | Tecronix",
  description: "Tecronix establishes its Austin headquarters and delivery center to expand nationwide staffing, managed services, and consulting operations."
};

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-4xl">Tecronix Opens Austin HQ & Delivery Center</h1>
          <p className="mt-2 text-white/80">November 2024</p>
          <p className="mt-4 max-w-3xl text-white/80">Tecronix establishes its Austin headquarters and delivery center to expand nationwide staffing, managed services, and consulting operations.</p>
        </div>
      </section>

      {/* BODY */}
      <section className="container py-12 prose prose-slate">
              <p><strong>Austin, TX — November 2024.</strong> Tecronix today announced the opening of its new headquarters and delivery center in downtown Austin, Texas. The facility supports Tecronix’s rapidly growing client base across healthcare, technology, and logistics.</p>

      <h2>Strategic Expansion</h2>
      <p>The new Austin HQ will serve as a central hub for staffing, managed services, and consulting operations, housing delivery leads, recruiters, and quality assurance teams. The site was selected for its access to skilled talent and strong technology ecosystem.</p>

      <p>“Austin’s combination of innovation, workforce availability, and connectivity made it an ideal choice,” said <strong>Alex Carter</strong>, CEO of Tecronix. “This move strengthens our ability to collaborate with clients and accelerate delivery timelines.”</p>

      <h2>Facilities &amp; Capabilities</h2>
      <ul>
        <li>150-seat delivery center supporting staffing and managed service pods.</li>
        <li>Dedicated training zones for recruiter enablement and process calibration.</li>
        <li>Secure collaboration spaces compliant with SOC-2 and HIPAA standards.</li>
        <li>On-site analytics team supporting workforce and SLA insights.</li>
      </ul>

      <p>The Austin delivery hub enhances service coverage across all U.S. time zones and anchors Tecronix’s commitment to measurable delivery excellence.</p>

      <h2>About Tecronix</h2>
      <p>Tecronix delivers staffing, outsourcing, and consulting solutions nationwide — helping organizations hire faster and operate better through data, discipline, and playbooks that scale.</p>
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

