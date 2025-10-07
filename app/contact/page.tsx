import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Tecronix USA — Talk to Sales or Recruiting',
  description: 'Get in touch with Tecronix USA. Offices in Austin (HQ), San Jose, Chicago, and New York. Contact sales, recruiting, or support.',
};

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-4xl">Let’s Talk</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Tell us about your hiring goals or the outcomes you need. We’ll propose roles, a delivery model, and a first shortlist.
          </p>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section className="container py-6">
        <div className="p-6 rounded-2xl border">
          <h2 className="text-xl font-semibold">Send a Message</h2>
          <p className="mt-2 text-slate-700">We usually respond within one business day.</p>
          <ContactForm />
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="container py-12 grid md:grid-cols-3 gap-6">
        {[
          ['Sales', 'tecronix.com', '(737) 555-0147', '/contact'],
          ['Recruiting', 'tecronix.com', '(737) 555-0162', '/job-seekers#upload'],
          ['Support', 'tecronix.com', '(737) 555-0173', '/'],
        ].map(([label, email, phone, link]) => (
          <a
            key={label as string}
            href={link as string}
            className="p-6 rounded-2xl border hover:shadow-sm transition block"
          >
            <h3 className="font-semibold">{label}</h3>
            <p className="text-slate-700 mt-2 text-sm">
              Email: <span className="underline">{email as string}</span>
              <br />
              Phone: {phone as string}
            </p>
            <div className="text-sm text-slate-600 mt-2">Open form →</div>
          </a>
        ))}
      </section>

      {/* OFFICES */}
      <section className="container py-12">
        <h2>Our Offices</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            [
              'Austin, TX (HQ)',
              '401 Congress Ave, Suite 150, Austin, TX 78701',
            ],
            ['San Jose, CA', '111 North Market St, Suite 300, San Jose, CA 95113'],
            ['Chicago, IL', '233 S Wacker Dr, 84th Floor, Chicago, IL 60606'],
            ['New York, NY', '1350 Broadway, 12th Floor, New York, NY 10018'],
          ].map(([city, addr]) => (
            <article key={city as string} className="p-6 rounded-2xl border">
              <div className="font-semibold">{city}</div>
              <p className="text-slate-700 mt-2 text-sm">{addr}</p>
              <p className="text-slate-500 mt-1 text-xs">
                Visits by appointment only.
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-100">
        <div className="container py-12 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2>Prefer email?</h2>
            <p className="text-slate-700 mt-1">
              sales@tecronix.com · jobs@tecronix.com · support@tecronix.com
            </p>
          </div>
          <a href="mailto:sales@tecronix.com" className="btn-primary">
            Email Sales
          </a>
        </div>
      </section>
    </main>
  );
}
