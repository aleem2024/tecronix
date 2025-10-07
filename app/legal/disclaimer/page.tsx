import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Disclaimer | Tecronix",
  description: "Informational use only. No warranties. No legal, financial, or employment advice. Third-party links and changes."
};

type Section = { title: string; body: string };

const sections: Section[] = [
  {
    title: "Informational Use Only",
    body:
      "This website and the materials available here are provided for general informational purposes. They are not a commitment to deliver specific services or results and do not constitute legal, financial, accounting, or professional advice."
  },
  {
    title: "No Warranties",
    body:
      "Content is provided on an \"as is\" and \"as available\" basis without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, title, and non-infringement. We do not warrant that the site will be uninterrupted, timely, secure, or error-free."
  },
  {
    title: "No Offer of Employment or Services",
    body:
      "Nothing on this site constitutes an offer of employment or a guarantee of services. Any hiring or services are subject to separate written agreements, applicable screening, and defined scope in a statement of work."
  },
  {
    title: "Third-Party Links",
    body:
      "Links to third-party websites are provided for convenience only. We do not control and are not responsible for the content, policies, or practices of third parties."
  },
  {
    title: "Forward-Looking Statements",
    body:
      "Some statements may be forward-looking and involve risks and uncertainties. Actual results may differ materially. We undertake no obligation to update such statements."
  },
  {
    title: "Changes",
    body:
      "We may update, remove, or modify content without notice. Material updates to legal pages will be reflected with a revised date."
  },
  {
    title: "Contact",
    body:
      "Questions regarding this Disclaimer: legal@tecronix.com. Mailing address: 500 Congress Ave, Austin, TX 78701, USA."
  }
];

export default function DisclaimerPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Website Disclaimer</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Please read this important notice about the information on our website.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#disclaimer">Read Disclaimer</a>
            <a className="btn-outline" href="/legal/privacy">Privacy Policy</a>
            <a className="btn-primary" href="/legal/terms">Terms of Use</a>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section id="disclaimer" className="container py-12">
        <div className="grid lg:grid-cols-2 gap-6">
          {sections.map(s => (
            <article key={s.title} className="card">
              <h2 className="font-semibold">{s.title}</h2>
              <p className="muted mt-2 text-sm">{s.body}</p>
            </article>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-6">Last updated: September 2025 (placeholder).</p>
      </section>

      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Need contract language?</h2>
            <p className="text-slate-700 mt-1">Our Legal team can align language with your procurement requirements.</p>
          </div>
          <a className="btn-primary" href="mailto:legal@tecronix.com">Email Legal</a>
        </div>
      </section>
    </main>
  );
}

