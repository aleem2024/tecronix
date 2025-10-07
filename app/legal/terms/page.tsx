import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Tecronix",
  description: "Website terms: acceptance, permitted use, intellectual property, disclaimers, limitations, and contact."
};

type Section = { title: string; body: string };

const sections: Section[] = [
  {
    title: "Acceptance of Terms",
    body:
      "By accessing or using this website, you agree to these Terms of Use. If you do not agree, do not use the site. We may update these Terms; continued use means you accept the changes."
  },
  {
    title: "Eligibility",
    body:
      "You represent that you are at least the age of majority in your jurisdiction and have authority to enter into these Terms."
  },
  {
    title: "Permitted Use",
    body:
      "You may access the site for lawful purposes and in accordance with these Terms. You may not: (a) attempt to gain unauthorized access; (b) interfere with the operation or security of the site; (c) use automated scraping or data extraction except as permitted by applicable law; (d) upload unlawful, infringing, or harmful content."
  },
  {
    title: "Intellectual Property",
    body:
      "All content, logos, and designs are owned by Tecronix or its licensors and protected by law. Except for the limited rights to view pages, you may not copy, modify, distribute, or create derivative works without prior written consent."
  },
  {
    title: "User Submissions",
    body:
      "If you submit content (e.g., forms, resumes), you grant us a non-exclusive license to use that content for the purposes described on the page where it was submitted, subject to our Privacy Policy."
  },
  {
    title: "Third-Party Links",
    body:
      "Links to third-party sites are provided for convenience. We are not responsible for the content, policies, or practices of third parties."
  },
  {
    title: "No Warranties",
    body:
      "The site and its content are provided 'as is' and 'as available' without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, or non-infringement."
  },
  {
    title: "Limitation of Liability",
    body:
      "To the maximum extent permitted by law, Tecronix and its affiliates are not liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, data, or goodwill arising from or related to your use of the site."
  },
  {
    title: "Indemnification",
    body:
      "You agree to indemnify and hold harmless Tecronix and its affiliates from claims arising out of your use of the site or violation of these Terms."
  },
  {
    title: "Governing Law & Venue",
    body:
      "These Terms are governed by the laws of the State of Texas, without regard to conflict of laws principles. Exclusive venue lies in state or federal courts located in Travis County, Texas."
  },
  {
    title: "Termination",
    body:
      "We may suspend or terminate access to the site at any time for any reason. Upon termination, your right to use the site ceases immediately."
  },
  {
    title: "Contact",
    body:
      "Questions about these Terms: legal@tecronix.com. Mailing address: 500 Congress Ave, Austin, TX 78701, USA."
  }
];

export default function TermsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Terms of Use</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Please read these Terms carefully before using our website.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#terms">Read Terms</a>
            <a className="btn-outline" href="/legal/privacy">Privacy Policy</a>
            <a className="btn-primary" href="/legal/disclaimer">Website Disclaimer</a>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section id="terms" className="container py-12">
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
          <a className="card block hover:shadow-sm" href="/legal/privacy">
            <div className="font-semibold">Privacy Policy</div>
            <p className="muted text-sm mt-2">How we handle information and your rights.</p>
          </a>
          <a className="card block hover:shadow-sm" href="/legal/cookies">
            <div className="font-semibold">Cookie Notice</div>
            <p className="muted text-sm mt-2">Manage preferences for optional cookies.</p>
          </a>
          <a className="card block hover:shadow-sm" href="/legal/dpa">
            <div className="font-semibold">DPA Overview</div>
            <p className="muted text-sm mt-2">Processor obligations, TOMs, and transfers.</p>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Need contract language?</h2>
            <p className="text-slate-700 mt-1">We can align terms to your procurement and compliance needs.</p>
          </div>
          <a className="btn-primary" href="mailto:legal@tecronix.com">Email Legal</a>
        </div>
      </section>
    </main>
  );
}

