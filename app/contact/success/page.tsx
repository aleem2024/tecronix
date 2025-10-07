import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanks  We Received Your Message | Tecronix",
  description: "Confirmation page with next steps after contacting Tecronix. Links to RFP, pricing, and resources."
};

export default function ContactSuccessPage() {
  return (
    <main>
      {/* HERO / CONFIRMATION */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Thanks  we received your message</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Our team will review and get back to you shortly. If this is urgent, please email{" "}
            <a className="underline" href="mailto:hello@tecronix.com">hello@tecronix.com</a>.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="/rfp">Run an RFP</a>
            <a className="btn-outline" href="/pricing">See Pricing Models</a>
            <a className="btn-primary" href="/resources">Browse Resources</a>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h2 className="font-semibold">What happens next</h2>
          <ol className="mt-3 list-decimal pl-6 text-slate-700 text-sm space-y-2">
            <li>We confirm scope and timeline via email.</li>
            <li>We may request artifacts (e.g., job specs, SOPs, systems).</li>
            <li>We propose options (staffing, outcomes pilot, or diagnostic).</li>
            <li>We agree on next steps and owners/dates.</li>
          </ol>
        </article>
        <article className="card bg-slate-50">
          <h3 className="font-semibold">Need faster help?</h3>
          <p className="mt-2 text-sm text-slate-700">
            For active programs, use the <a className="underline" href="/support">Support</a> page for portals and ticketing.
          </p>
          <ul className="mt-3 text-slate-700 text-sm space-y-2">
            <li>Delivery: <a className="underline" href="mailto:delivery@tecronix.com">delivery@tecronix.com</a></li>
            <li>Security: <a className="underline" href="mailto:security@tecronix.com">security@tecronix.com</a></li>
            <li>Privacy: <a className="underline" href="mailto:privacy@tecronix.com">privacy@tecronix.com</a></li>
          </ul>
        </article>
      </section>

      {/* LINKS */}
      <section className="container pb-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a className="card block hover:shadow-sm" href="/solutions/staffing">
          <div className="font-semibold">Staffing (Hire People)</div>
          <p className="muted text-sm mt-2">Contract, C2H, direct hire  structured hiring and onboarding.</p>
        </a>
        <a className="card block hover:shadow-sm" href="/solutions/outsourcing">
          <div className="font-semibold">Managed Services (Buy Outcomes)</div>
          <p className="muted text-sm mt-2">SOPs, SLAs/QA, dashboards  pilots in 48 weeks.</p>
        </a>
        <a className="card block hover:shadow-sm" href="/solutions/consulting">
          <div className="font-semibold">Consulting & Diagnostics</div>
          <p className="muted text-sm mt-2">Scorecards, playbooks, and system design.</p>
        </a>
      </section>
    </main>
  );
}


