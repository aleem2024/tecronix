import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Hire: Scorecards, Work-Samples, and Decision Hygiene",
  description: "A detailed walkthrough of Tecronixs hiring system: success profiles, interview kits, structured sourcing, and evidence summaries."
};

export default function HowWeHirePost() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <p className="text-white/70 text-sm">Playbook Â· Jan 2025</p>
          <h1 className="max-w-5xl">How We Hire: Scorecards, Work-Samples, and Decision Hygiene</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            The repeatable system we use across functions to reduce cycle time and increase offer quality.
          </p>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="container py-12 prose">
        <h2>Why a System?</h2>
        <p>
          Ad-hoc interviews create noise and slow decisions. A lightweight system keeps signal high while
          moving fast. Heres how we structure it.
        </p>

        <h2>1) Success Profile</h2>
        <ul>
          <li>612 month outcomes and constraints</li>
          <li>Interfaces (teams, systems) and guardrails</li>
          <li>What good looks like at 30/60/90 days</li>
        </ul>

        <h2>2) Scorecard & Interview Kit</h2>
        <p>
          Behaviors, knowledge, and work-sample prompts that reflect the actual job. We provide examples and
          rubrics so interviewers can focus on evidence.
        </p>

        <h2>3) Calibrated Sourcing</h2>
        <p>
          Communities, OSS/projects, meetups, referrals, and targeted outreach. We measure stage conversion rates
          to keep the top of funnel aligned.
        </p>

        <h2>4) Evidence Summaries</h2>
        <p>
          Each interviewer writes a short summary: what the candidate did, not buzzwords. Hiring managers can
          compare signals quickly and decide.
        </p>

        <h2>5) Onboarding & Early Risk</h2>
        <p>
          Clear owners, first deliverables, and 30/60/90 check-ins. We flag early risks and align support.
        </p>

        <h2>Artifacts You Get</h2>
        <ul>
          <li>Success profile & scorecard</li>
          <li>Interview kit & rubrics</li>
          <li>Evidence summaries template</li>
          <li>Offer close plan & onboarding checklist</li>
        </ul>

        <h2>Want Help?</h2>
        <p>
          We can build this with your team or run searches end-to-end. Start with a quick intake and well
          ship a calibrated shortlist fast.
        </p>
      </article>

      {/* CTAs */}
      <section className="bg-slate-100">
        <div className="container py-12 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2>Put it into practice.</h2>
            <p className="text-slate-700 mt-1">Kick off an intake or see our staffing model.</p>
          </div>
          <div className="flex gap-3">
            <a href="/solutions/staffing#intake" className="btn-outline">Start an Intake</a>
            <a href="/employers#solutions" className="btn-primary">For Employers</a>
          </div>
        </div>
      </section>
    </main>
  );
}

