import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers FAQ | Tecronix",
  description: "Common questions about applying, interview process, remote/hybrid work, accommodations, background checks, and timelines."
};

export default function CareersFaqPage() {
  const faqs = [
    {
      q: "How do I apply?",
      a: "Apply via our Jobs page or share your resume on Job Seekers. Add context on your goals, timeline, and constraints so we can route quickly."
    },
    {
      q: "What does the interview process look like?",
      a: "Intro chat  structured interviews with scorecards  role-appropriate work-sample (where allowed)  decision with an evidence summary."
    },
    {
      q: "Do you support remote or hybrid roles?",
      a: "Yes. Many roles are remote or hybrid. Some delivery or client roles require on-site coverage; the job post will specify."
    },
    {
      q: "Do you offer accommodations?",
      a: "Yes. Email access@tecronix.com or use our Accessibility page to request an accommodation for the hiring process."
    },
    {
      q: "Do you sponsor visas?",
      a: "Case-by-case depending on role and timing. Mention this early in your application so we can advise."
    },
    {
      q: "Are background checks required?",
      a: "For certain roles and clients, yes  where permitted by law and required by policy. We will inform you before any checks occur."
    },
    {
      q: "What is the typical timeline?",
      a: "We aim for 24 weeks from intro to decision, but it varies by role, interviewer availability, and work-sample scheduling."
    },
    {
      q: "How do I follow up?",
      a: "Reply to your recruiters email or to careers@tecronix.com with the role title in the subject."
    }
  ];

  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Careers FAQ</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Answers to common questions about applying, interviewing, and working at Tecronix.
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <a href="/jobs" className="btn-outline">Browse Jobs</a>
            <a href="/job-seekers#upload" className="btn-primary">Upload Resume</a>
          </div>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="container py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map(item => (
            <details key={item.q} className="p-4 rounded-2xl border">
              <summary className="font-medium">{item.q}</summary>
              <p className="mt-2 text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* LINKS */}
      <section className="container pb-12">
        <div className="card">
          <h2 className="font-semibold">Helpful Links</h2>
          <ul className="mt-3 text-slate-700 text-sm space-y-2">
            <li><a className="underline" href="/careers">Careers Overview</a></li>
            <li><a className="underline" href="/careers/benefits">Benefits & Perks</a></li>
            <li><a className="underline" href="/careers/culture">Culture & Inclusion</a></li>
            <li><a className="underline" href="/legal/accessibility">Accessibility Statement</a></li>
            <li><a className="underline" href="/jobs">Jobs</a></li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-100">
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Still have questions?</h2>
            <p className="text-slate-700 mt-1">We&apos;re happy to help  reach out and we&apos;ll get back quickly.</p>
          </div>
          <div className="flex gap-3">
            <a href="/contact#form" className="btn-outline">Contact Us</a>
            <a href="mailto:careers@tecronix.com" className="btn-primary">Email Careers</a>
          </div>
        </div>
      </section>
    </main>
  );
}


