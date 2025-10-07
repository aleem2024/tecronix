import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ  Employers & Job Seekers | Tecronix",
  description: "General FAQ hub covering staffing vs. outcomes, timelines, billing & contracts, accessibility, and data/privacy."
};

type QA = { q: string; a: string };
type QAGroup = { title: string; items: QA[] };

const groups: QAGroup[] = [
  {
    title: "Employers",
    items: [
      {
        q: "Whats the difference between staffing and managed services (outcomes)?",
        a: "Staffing = hire people (contract, C2H, direct). Managed services = buy outcomes with SOPs, SLAs/QA, and dashboards. We can help choose the right model or start with a pilot."
      },
      {
        q: "How fast can we start?",
        a: "Shortlists in 714 days for staffing. Outcome pilots can start within a week of scope lock."
      },
      {
        q: "Do you work inside our systems?",
        a: "Yes  least-privilege access with audit trails. We align on runbooks, evidence capture, and retention."
      },
      {
        q: "Do you support peak/surge coverage?",
        a: "Yes  surge pods, cross-training, and capacity models are part of our delivery system."
      }
    ]
  },
  {
    title: "Job Seekers",
    items: [
      {
        q: "How do I apply?",
        a: "Browse roles on /jobs or upload your resume on /job-seekers with context on goals and timeline."
      },
      {
        q: "Do you support remote or hybrid roles?",
        a: "Yes  many roles are remote/hybrid; on-site where required by the work."
      },
      {
        q: "Accommodations during hiring?",
        a: "Email access@tecronix.com or see /legal/accessibility to request a reasonable accommodation."
      },
      {
        q: "Visa sponsorship?",
        a: "Case-by-case depending on role and timing  mention this in your application."
      }
    ]
  },
  {
    title: "Billing & Contracts",
    items: [
      {
        q: "How is pricing structured?",
        a: "Staffing: hourly bill rate (contract) or fixed/tiered fee (direct-hire). Outcomes: fixed monthly or unit-based tied to SLAs/QA. Consulting: fixed-fee diagnostics or workshops. See /pricing."
      },
      {
        q: "What about change control?",
        a: "Scope/interface changes are captured in the runbook with impact to SLAs and commercials noted."
      },
      {
        q: "Do you sign NDAs/BAAs?",
        a: "Yes  NDAs for RFPs and BAAs where PHI is in scope. See /rfp for docs."
      }
    ]
  },
  {
    title: "Legal, Privacy & Accessibility",
    items: [
      {
        q: "How do you handle data and privacy requests?",
        a: "We maintain audit trails and honor applicable privacy requests. Contact privacy@tecronix.com and see /legal/privacy."
      },
      {
        q: "Accessibility policy?",
        a: "We design for access and provide an Accessibility Statement at /legal/accessibility. Please report issues so we can fix them."
      },
      {
        q: "Where can I find terms and cookies info?",
        a: "See /legal/terms and /legal/cookies (cookies page coming soon in this build sequence)."
      }
    ]
  }
];

export default function FaqHubPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Quick answers for employers and job seekers  plus billing, legal, and accessibility notes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#employers">Employers</a>
            <a className="btn-outline" href="#job-seekers">Job Seekers</a>
            <a className="btn-outline" href="#billing">Billing & Contracts</a>
            <a className="btn-primary" href="#legal">Legal & Accessibility</a>
          </div>
        </div>
      </section>

      {/* GROUPS */}
      <section className="container py-12 grid lg:grid-cols-2 gap-10">
        {groups.map(g => (
          <div key={g.title} id={
            g.title === "Employers" ? "employers" :
            g.title === "Job Seekers" ? "job-seekers" :
            g.title.startsWith("Billing") ? "billing" : "legal"
          }>
            <h2 className="font-semibold">{g.title}</h2>
            <div className="mt-4 grid gap-4">
              {g.items.map(item => (
                <details key={item.q} className="p-4 rounded-2xl border bg-white">
                  <summary className="font-medium">{item.q}</summary>
                  <p className="mt-2 text-slate-700 text-sm">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-slate-100">
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Didnt find what you need?</h2>
            <p className="text-slate-700 mt-1">Reach out  we respond quickly.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/contact#form">Contact Us</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
    </main>
  );
}


