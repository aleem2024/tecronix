import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | tecronix USA — Our Mission, Team & Approach',
  description: 'Learn about tecronix USA: our mission, principles, leadership team, diversity commitments, and how we deliver staffing, outsourcing, and executive search with measurable outcomes.'
};

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className='bg-slate-900 text-white'>
        <div className='container py-16'>
          <h1 className='max-w-4xl'>About tecronix USA</h1>
          <p className='mt-4 max-w-3xl text-white/80'>
            We help employers hire faster and operate better — with staffing, outcome-based outsourcing, and executive search. 
            Our promise: clarity, speed, and measurable results.
          </p>
        </div>
      </section>

      {/* MISSION & PRINCIPLES */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article>
			<h2>Why Tecronix</h2>
			<p className='mt-3 text-slate-700'>
			  Tecronix exists to help organizations hire better, deliver faster, and scale reliably.
			  Our approach blends staffing, outsourcing, and executive search — all grounded in measurable outcomes.
			  We believe clarity and accountability are the foundations of every great team.
			</p>
			<ul className='mt-4 list-disc pl-6 text-slate-700 space-y-2'>
			  <li><strong>Clarity first:</strong> every engagement starts with well-defined roles, deliverables, and dashboards.</li>
			  <li><strong>People-centric:</strong> respectful hiring, fair processes, and inclusive opportunities for all.</li>
			  <li><strong>Accountable outcomes:</strong> whether it’s fill rate, cycle time, or quality score — we measure and improve weekly.</li>
			  <li><strong>Operational excellence:</strong> we standardize what works, automate the repetitive, and document everything.</li>
			  <li><strong>Trusted partnerships:</strong> long-term relationships with clients, built on transparency and delivery consistency.</li>
			</ul>

        </article>
<aside className="p-6 rounded-2xl border bg-indigo-50">
  <h3 className="font-semibold text-indigo-800">Our Promise</h3>
  <p className="mt-3 text-slate-700 text-sm">
    Every partnership with Tecronix begins with clarity, respect, and accountability.  
    We don’t chase volume - we focus on predictable outcomes, transparent communication, and measurable impact.
  </p>

  <ul className="mt-2  y list-disc pl-5 text-slate-700 text-sm space-y-2">
    <li><strong>Transparency Always:</strong> Dashboards, scorecards, and live delivery metrics shared openly with every client.</li>
    <li><strong>Accountability in Action:</strong> SLAs and KPIs are reviewed weekly — we don’t hide from data, we use it.</li>
    <li><strong>Speed + Precision:</strong> Rapid turnarounds without shortcuts — quality validated through evidence, not guesswork.</li>
    <li><strong>Continuous Improvement:</strong> Every engagement includes retrospectives, feedback loops, and playbook updates.</li>
    <li><strong>Compliance Built-In:</strong> Background checks, data handling, and credentialing aligned with all state and federal standards.</li>
  </ul>

  <div className="mt-2 p-2 rounded-xl bg-white border text-sm text-slate-700">
    <p>
      Whether you’re scaling teams or building a managed service program, our commitment is simple:
      <span className="font-semibold text-indigo-700"> deliver measurable value — fast, fair, and transparently.</span>
    </p>
  </div>
</aside>
      </section>

{/* TESTIMONIALS PREVIEW */}
<section className="bg-slate-50">
  <div className="container py-6">
    <h2>What Clients & Candidates Say</h2>
    <p className="mt-3 text-slate-700 max-w-3xl">
      Our work earns trust — from clients scaling teams to candidates building careers. See highlights from recent programs.
    </p>

    <div className="mt-6 grid md:grid-cols-3 gap-6">
      {[
        {
          quote:
            "Tecronix redefined how we hire and manage delivery. Faster onboarding, clearer dashboards, and real accountability.",
          name: "VP Operations",
          role: "National Healthcare Client"
        },
        {
          quote:
            "Structured interviews and feedback summaries made the hiring process fair and transparent. Clear expectations from day one.",
          name: "Candidate",
          role: "Technology Sector"
        },
        {
          quote:
            "Their managed service team consistently met SLAs — communication was top-notch and reports were audit-ready every week.",
          name: "Program Director",
          role: "Finance & Accounting Client"
        }
      ].map((q) => (
        <figure
          key={q.name}
          className="p-6 rounded-2xl border bg-white hover:shadow-sm transition"
        >
          <blockquote className="italic text-slate-700">“{q.quote}”</blockquote>
          <figcaption className="mt-3 text-sm text-slate-600">
            <div className="font-medium">{q.name}</div>
            <div>{q.role}</div>
          </figcaption>
        </figure>
      ))}
    </div>

    <div className="mt-8 text-center">
      <a href="/testimonials" className="btn-primary">
        Read Full Testimonials
      </a>
    </div>
  </div>
</section>


      {/* IMPACT STRIP */}
      <section className='container py-8'>
        <div className='grid md:grid-cols-4 gap-4'>
          {[
            ['10,000+','Candidates placed'],
            ['50 states','Nationwide coverage'],
            ['250+','Active clients'],
            ['97%','Client satisfaction']
          ].map(([n, l]) => (
            <div key={l as string} className='p-6 rounded-2xl border text-center'>
              <div className='text-3xl font-bold'>{n}</div>
              <div className='text-slate-600 mt-1'>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className='container py-12'>
        <h2>Leadership Team</h2>
        <p className='text-slate-700 mt-2 max-w-3xl'>
          Operator-led and hands-on. Our leaders coach recruiters and delivery teams weekly — aligning strategy to the work.
        </p>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Alex Carter','Chief Executive Officer','20+ years scaling staffing and managed services programs across tech and healthcare.'],
            ['Jasmine Patel','Chief Operating Officer','Built outcome-based delivery models; obsessed with SLAs, dashboards, and coaching.'],
            ['Evan Brooks','Head of Talent','Engineering leader turned recruiting operator; structured interviews and scorecards advocate.']
          ].map(([name, role, bio]) => (
            <article key={name as string} className='p-6 rounded-2xl border'>
              <div className='font-semibold'>{name}</div>
              <div className='text-slate-600 text-sm'>{role}</div>
              <p className='text-slate-700 mt-2 text-sm'>{bio}</p>
            </article>
          ))}
        </div>
      </section>

      {/* DIVERSITY, EQUITY & INCLUSION */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article className='p-6 rounded-2xl border'>
          <h3 className='font-semibold'>Diversity, Equity & Inclusion</h3>
          <p className='mt-2 text-slate-700'>
            We design hiring processes that reduce bias and expand access: structured interviews, rubric-led assessments,
            diverse sourcing channels, and slate composition goals by role family.
          </p>
        </article>
        <article className='p-6 rounded-2xl border'>
          <h3 className='font-semibold'>Privacy & Security</h3>
          <p className='mt-2 text-slate-700'>
            Least-privilege access, NDA/PA, and data handling SOPs. Background checks and credentialing per role and state law.
          </p>
        </article>
      </section>

{/* MORE ABOUT TECRONIX */}
<section className='container py-12'>
  <h2>More About Tecronix</h2>
  <p className='text-slate-700 mt-2 max-w-3xl'>
    Learn more about our network, insights, and transparency initiatives.
  </p>

  <div className='mt-6 grid md:grid-cols-2 lg:grid-cols-5 gap-6'>
    <a href='/partners' className='p-6 rounded-2xl border hover:shadow-sm transition block'>
      <h3 className='font-semibold'>Our Partners</h3>
      <p className='text-sm text-slate-700 mt-2'>
        Explore collaborations with technology, HR, and service partners who help deliver scalable results.
      </p>
    </a>

    <a href='/newsletter' className='p-6 rounded-2xl border hover:shadow-sm transition block'>
      <h3 className='font-semibold'>Newsletter & Updates</h3>
      <p className='text-sm text-slate-700 mt-2'>
        Get Tecronix insights, hiring playbooks, and operational best practices straight to your inbox.
      </p>
    </a>

    <a href='/glossary' className='p-6 rounded-2xl border hover:shadow-sm transition block'>
      <h3 className='font-semibold'>Glossary</h3>
      <p className='text-sm text-slate-700 mt-2'>
        Common staffing, outsourcing, and operations terms explained — a quick reference for recruiters and clients alike.
      </p>
    </a>

    <a href='/investors' className='p-6 rounded-2xl border hover:shadow-sm transition block'>
      <h3 className='font-semibold'>Investors & Transparency</h3>
      <p className='text-sm text-slate-700 mt-2'>
        Review our performance metrics, governance, and sustainability commitments.
      </p>
    </a>

    <a href='/press' className='p-6 rounded-2xl border hover:shadow-sm transition block'>
      <h3 className='font-semibold'>Press & Media</h3>
      <p className='text-sm text-slate-700 mt-2'>
        Read announcements, news, and media coverage about Tecronix — our growth, innovations, and community impact.
      </p>
    </a>
  </div>
</section>



      {/* TIMELINE */}
      <section className='container py-12'>
        <h2>Our Story</h2>
        <div className='mt-6 grid md:grid-cols-4 gap-6'>
          {[
            ['2018','Founded in Austin, TX','Focused on tech staffing and interviewing systems.'],
            ['2020','Healthcare & F&A','Expanded to clinical ops and finance/accounting programs.'],
            ['2022','Managed Services','Launched outcome-based teams with SLAs and QBRs.'],
            ['2024','Executive Search','Added retained leadership search for VP/C-suite roles.']
          ].map(([year, title, text]) => (
            <article key={year as string} className='p-6 rounded-2xl border'>
              <div className='text-slate-500 text-sm'>{year}</div>
              <div className='font-semibold mt-1'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CAREERS */}
      <section className='bg-slate-100'>
        <div className='container py-12 grid md:grid-cols-2 gap-10 items-center'>
          <div>
            <h2>Careers at tecronix</h2>
            <p className='text-slate-700 mt-1'>
              Join recruiters, consultants, delivery leads, and operators who care about outcomes and people.
            </p>
          </div>
          <div className='p-6 rounded-2xl border bg-white'>
            <div className='text-sm text-slate-600'>We’re hiring for:</div>
            <ul className='mt-2 list-disc pl-6 text-sm text-slate-700 space-y-1'>
              <li>Technical Recruiters (U.S. remote)</li>
              <li>Healthcare Recruiters (Midwest)</li>
              <li>Engagement Managers (Managed Services)</li>
            </ul>
            <div className='mt-4 flex gap-3'>
              <a href='/jobs' className='btn-primary'>See Open Roles</a>
              <a href='/job-seekers#upload' className='btn-outline'>Send Your Resume</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='container py-12'>
        <div className='p-6 rounded-2xl border flex flex-wrap items-center justify-between gap-4'>
          <div>
            <h2>Want the full picture?</h2>
            <p className='text-slate-700 mt-1'>Explore solutions and industries, or contact us for a sample delivery plan.</p>
          </div>
          <div className='flex gap-3'>
            <a href='/solutions/staffing' className='btn-outline'>Explore Solutions</a>
            <a href='/contact' className='btn-primary'>Contact Us</a>
          </div>
        </div>
      </section>
    </main>
  );
}

