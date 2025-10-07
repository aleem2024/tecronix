import type { Metadata } from "next";





export const metadata: Metadata = {


  title: "Pricing & Engagement Models | Tecronix",


  description: "Transparent pricing signals for staffing (contract, C2H, direct hire), managed services (outcomes), and consulting/diagnostics. Request a scoped quote."


};





export default function PricingPage() {


  const cards = [


    {


      title: "Staffing & Recruiting",


      badge: "Hire People",


      points: [


        "Contract (W-2): hourly bill rate with weekly cadence & coaching notes.",


        "Contract-to-Hire: hourly + conversion credits (pro-rated).",


        "Direct Hire / Executive: fixed or tiered fee; evidence summaries & 30/60/90."


      ],


      cta: { label: "Start a Staffing Intake", href: "/solutions/staffing#intake" }


    },


    {


      title: "Managed Services (Outcomes)",


      badge: "Buy Outcomes",


      points: [


        "Fixed or unit-based pricing tied to SOPs, SLAs/QA, dashboards.",


        "Pilots 48 weeks to validate throughput, quality, reliability.",


        "Change control for scope; weekly notes with owners & due dates."


      ],


      cta: { label: "Scope an Outcome Pilot", href: "/solutions/outsourcing" }


    },


    {


      title: "Consulting & Diagnostics",


      badge: "Advisory",


      points: [


        "Fixed-fee assessments with playbooks and prioritized roadmap.",


        "Workshops, scorecards, and hiring/operations system design.",


        "Optional coaching and implementation support."


      ],


      cta: { label: "Book a Diagnostic", href: "/solutions/consulting" }


    }


  ];





  const signals = [


    ["Rate Cards", "Published internally by role/level/market; shared on request."],


    ["SLA/QA", "Targets and sampling plans defined up front (AQL where applicable)."],


    ["Change Control", "Scope, interfaces, and exception paths captured in runbooks."],


    ["Evidence", "Artifacts included: scorecards, macro libraries, dashboards, notes."]


  ];





  return (


    <main>


      {/* HERO */}


      <section className="bg-slate-900 text-white">


        <div className="container py-16">


          <h1 className="max-w-5xl">Pricing &amp; Engagement Models</h1>


          <p className="mt-4 max-w-3xl text-white/80">


            Clear models, predictable delivery. Choose to hire people or buy outcomes  or start with a diagnostic.


          </p>


          <div className="mt-6 flex flex-wrap gap-3">


            <a className="btn-outline" href="#models">Models</a>


            <a className="btn-outline" href="#signals">What&apos;s Included</a>


            <a className="btn-primary" href="#quote">Request a Quote</a>


          </div>


        </div>


      </section>





      {/* MODELS */}


      <section id="models" className="container py-12">


        <h2>Engagement Models</h2>


        <div className="mt-6 grid md:grid-cols-3 gap-6">


          {cards.map(c => (


            <article key={c.title} className="card">


              <div className="badge">{c.badge}</div>


              <h3 className="font-semibold mt-2">{c.title}</h3>


              <ul className="mt-3 text-slate-700 text-sm space-y-2">


                {c.points.map(p => <li key={p}>{p}</li>)}


              </ul>


              <a href={c.cta.href} className="btn-primary mt-4 inline-block">{c.cta.label}</a>


            </article>


          ))}


        </div>


      </section>





      {/* WHAT'S INCLUDED */}


      <section id="signals" className="container py-12 grid lg:grid-cols-2 gap-10">


        <article className="card">


          <h3 className="font-semibold">Transparency Signals</h3>


          <ul className="mt-3 text-slate-700 text-sm space-y-2">


            {signals.map(([t,d]) => (


              <li key={t}>


                <strong>{t}: </strong><span className="text-slate-700">{d}</span>


              </li>


            ))}


          </ul>


        </article>


        <article className="card bg-slate-50">


          <h3 className="font-semibold">Typical Ranges (Illustrative)</h3>


          <ul className="mt-3 text-slate-700 text-sm space-y-2">


            <li><strong>Staffing:</strong> bill rates vary by role/market; direct-hire fees fixed/tiered.</li>


            <li><strong>Outcomes:</strong> fixed monthly or per-unit with SLA/QA gates.</li>


            <li><strong>Consulting:</strong> fixed fee per diagnostic or workshop series.</li>


          </ul>


          <p className="text-xs text-slate-500 mt-3">All figures are placeholders for demo purposes. Final quotes follow scoped intake.</p>


        </article>


      </section>





      {/* QUOTE FORM */}


      <section id="quote" className="bg-slate-100">


        <div className="container py-12">


          <h2>Request a Quote</h2>


          <form className="card mt-6 grid md:grid-cols-2 gap-3">


            <input className="rounded-xl px-4 py-3 border" placeholder="First name" aria-label="First name" />


            <input className="rounded-xl px-4 py-3 border" placeholder="Last name" aria-label="Last name" />


            <input className="rounded-xl px-4 py-3 border md:col-span-2" placeholder="Work email" type="email" aria-label="Work email" />


            <input className="rounded-xl px-4 py-3 border md:col-span-2" placeholder="Company" aria-label="Company" />


            <select className="rounded-xl px-4 py-3 border" aria-label="Engagement">


              <option>Engagement: Staffing</option>


              <option>Engagement: Managed Services (Outcomes)</option>


              <option>Engagement: Consulting / Diagnostic</option>


            </select>


            <select className="rounded-xl px-4 py-3 border" aria-label="Timeline">


              <option>Timeline: ASAP</option>


              <option>Timeline: 24 weeks</option>


              <option>Timeline: This quarter</option>


            </select>


            <textarea className="rounded-xl px-4 py-3 border md:col-span-2 min-h-[140px]" placeholder="Describe scope: outcomes/roles, volumes, systems, SLAs, constraints."></textarea>


            <button type="button" className="btn-primary md:col-span-2">Request Quote</button>




          </form>


        </div>


      </section>





      {/* FAQ */}


      <section className="container py-12">


        <h2>Pricing FAQs</h2>


        <div className="mt-4 grid md:grid-cols-2 gap-6 text-slate-700">


          <details className="p-4 rounded-2xl border">


            <summary className="font-medium">Do you publish rate cards?</summary>


            <p className="mt-2">We maintain internal rate cards by role/level/market and share tailored ranges after intake.</p>


          </details>


          <details className="p-4 rounded-2xl border">


            <summary className="font-medium">What if scope changes?</summary>


            <p className="mt-2">We use change control. Updates are captured in runbooks with impacts to SLAs/price noted.</p>


          </details>


          <details className="p-4 rounded-2xl border">


            <summary className="font-medium">How do pilots work?</summary>


            <p className="mt-2">Fixed-fee 48 week pilots with SOPs, SLAs/QA, dashboards, and a go/no-go review.</p>


          </details>


          <details className="p-4 rounded-2xl border">


            <summary className="font-medium">Any discounts?</summary>


            <p className="mt-2">Volume and term discounts may apply. Well model options during intake.</p>


          </details>


        </div>


      </section>





      {/* CTA */}


      <section>


        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">


          <div>


            <h2>Ready to model your options?</h2>


            <p className="text-slate-700 mt-1">Well scope quickly and share a clear quote with assumptions.</p>


          </div>


          <a href="#quote" className="btn-primary">Request a Quote</a>


        </div>


      </section>


    </main>


  );


}




