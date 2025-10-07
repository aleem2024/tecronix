import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Tecronix",
  description: "How we collect, use, share, and protect information  plus your choices and rights."
};

type Section = { title: string; body: string };

const sections: Section[] = [
  {
    title: "Scope",
    body:
      "This Privacy Policy describes how Tecronix (\"we\", \"us\") handles information on this website and related pages linked here. It does not cover third-party websites or services we do not control."
  },
  {
    title: "Information We Collect",
    body:
      "Information you provide (e.g., forms, resumes, emails), usage data (pages viewed, device/browser metadata), and limited cookies for required functionality. Optional analytics/marketing cookies are used only with your consent. Do not submit special-category data unless requested for a specific lawful purpose."
  },
  {
    title: "How We Use Information",
    body:
      "To operate the site, respond to inquiries, evaluate candidates, deliver and improve services, secure and audit systems, comply with law, and communicate updates consistent with your preferences."
  },
  {
    title: "Legal Bases (EEA/UK where applicable)",
    body:
      "Performance of a contract or pre-contract steps, legitimate interests (e.g., site security, service improvement) balanced against your rights, consent where required (e.g., optional cookies/marketing), and legal obligations."
  },
  {
    title: "Sharing",
    body:
      "We share with service providers (sub-processors) under contract, with your direction (e.g., client systems), for legal compliance, or in connection with corporate events. See our Sub-Processors page for typical vendors."
  },
  {
    title: "Retention",
    body:
      "We retain information only as long as necessary for the purposes described, to comply with law, or to resolve disputes. We apply specific retention schedules for candidate and client records."
  },
  {
    title: "Security",
    body:
      "We apply administrative, technical, and physical safeguards including least-privilege access, MFA where supported, logging/monitoring, and incident response procedures. No method is 100% secure; please report concerns to security@tecronix.com."
  },
  {
    title: "Your Choices",
    body:
      "You can manage optional cookies on the Cookie Notice page, opt out of non-essential communications, and choose what information to provide in forms and uploads."
  },
  {
    title: "Your Rights",
    body:
      "Depending on your location, you may have rights to access, correct, delete, restrict, or port your information, and to object to certain processing or withdraw consent. To exercise rights, email privacy@tecronix.com. We may verify your request and respond within applicable timelines."
  },
  {
    title: "International Transfers",
    body:
      "Where information is transferred across borders, we use appropriate safeguards (e.g., Standard Contractual Clauses/IDTA) and conduct transfer assessments as required."
  },
  {
    title: "Children",
    body:
      "This site is not directed to children. We do not knowingly collect information from children without appropriate consent."
  },
  {
    title: "Changes",
    body:
      "We may update this Policy from time to time. Material changes will be highlighted on this page. Continued use of the site after an update indicates acceptance."
  },
  {
    title: "Contact",
    body:
      "Questions or requests: privacy@tecronix.com. Mailing address: 500 Congress Ave, Austin, TX 78701, USA."
  }
];

export default function PrivacyPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Privacy Policy</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            How we collect, use, and protect information  and the choices and rights available to you.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#policy">Read Policy</a>
            <a className="btn-outline" href="/legal/cookies">Cookie Notice</a>
            <a className="btn-primary" href="/security/sub-processors">Sub-Processors</a>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section id="policy" className="container py-12">
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

      {/* LINKS */}
      <section className="bg-slate-100">
        <div className="container py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a className="card block hover:shadow-sm" href="/legal/dpa">
            <div className="font-semibold">DPA Overview</div>
            <p className="muted text-sm mt-2">Roles, security measures, and transfer mechanisms.</p>
          </a>
          <a className="card block hover:shadow-sm" href="/security/incident-response">
            <div className="font-semibold">Incident Response</div>
            <p className="muted text-sm mt-2">Classification, targets, and communication.</p>
          </a>
          <a className="card block hover:shadow-sm" href="/legal/cookies">
            <div className="font-semibold">Cookie Notice</div>
            <p className="muted text-sm mt-2">Manage your cookie preferences.</p>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Need a signed DPA or privacy questionnaire?</h2>
            <p className="text-slate-700 mt-1">Our Privacy &amp; Trust teams can help quickly.</p>
          </div>
          <a className="btn-primary" href="mailto:privacy@tecronix.com">Email Privacy</a>
        </div>
      </section>
    </main>
  );
}


