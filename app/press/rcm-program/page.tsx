import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tecronix Launches National Healthcare RCM Program | Tecronix",
  description: "Tecronix introduces an outcome-based Revenue Cycle Management (RCM) program for healthcare providers, featuring payer playbooks, QA standards, and transparent dashboards."
};

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-4xl">Tecronix Launches National Healthcare RCM Program</h1>
          <p className="mt-2 text-white/80">January 2025</p>
          <p className="mt-4 max-w-3xl text-white/80">
            Tecronix expands its managed services portfolio with a nationwide healthcare RCM program built on measurable outcomes, payer intelligence, and operational transparency.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="container py-12 prose prose-slate">
        <p>
          <strong>Austin, TX — January 2025.</strong> Tecronix today announced the launch of its national
          <em> Revenue Cycle Management (RCM)</em> program, enabling U.S. healthcare providers to manage billing,
          appeals, and denials through outcome-based delivery models. The offering unites technology, trained
          specialists, and analytics to improve accuracy and predictability.
        </p>

        <h2>Program Highlights</h2>
        <ul>
          <li>Payer-specific playbooks and calibrated appeal templates for predictable overturns.</li>
          <li>Quality Assurance (QA) sampling built on AQL standards and audit transparency.</li>
          <li>Operational dashboards covering first-pass yield, appeal cycle time, and overturn ratios.</li>
          <li>HIPAA-compliant data handling and SOC-2 aligned governance.</li>
        </ul>

        <p>
          “Our healthcare partners asked for delivery models that move away from headcount and toward results,”
          said <strong>Jasmine Patel</strong>, Chief Operating Officer at Tecronix. “We’ve built a managed
          service that integrates domain expertise with repeatable processes and visibility.”
        </p>

        <h2>Outcome-Based Model</h2>
        <p>
          Unlike traditional outsourcing, Tecronix’s RCM service operates on measurable SLAs — including denial
          overturn rate, average days to resolution, and QA accuracy. Clients can access real-time data through
          dashboards that provide payer-level insights and compliance traceability.
        </p>

        <h2>Technology &amp; Playbooks</h2>
        <p>
          The platform includes payer playbooks maintained by Tecronix analysts, linking evidence templates,
          coding references, and appeal letter libraries. Continuous improvement is driven through feedback loops
          and retrospective reviews between client revenue cycle teams and Tecronix delivery pods.
        </p>

        <p>
          Tecronix’s healthcare vertical now supports <strong>20+</strong> provider networks and aims to expand
          to additional specialties, including behavioral health and DME, by mid-2025.
        </p>

        <h2>About Tecronix</h2>
        <p>
          Tecronix delivers staffing, outsourcing, and consulting solutions across Healthcare, Technology,
          Finance, and Logistics sectors. The company emphasizes structured hiring, measurable outcomes, and
          continuous improvement through playbooks and analytics.
        </p>
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

