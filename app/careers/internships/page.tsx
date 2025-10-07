import type { Metadata } from "next";





export const metadata: Metadata = {


  title: "Internships  Build Systems, Ship Outcomes | Tecronix Careers",


  description: "Paid internship program focused on structured hiring, delivery runbooks, and outcome pilots. Tracks in Delivery Ops, Analytics, and Talent."


};





type Track = { name: string; focus: string; projects: string[]; };


type Milestone = { when: string; what: string; };


type FAQ = { q: string; a: string; };





const tracks: Track[] = [


  {


    name: "Delivery Ops",


    focus: "Runbooks, SOPs, QA sampling, and weekly notes.",


    projects: [


      "Draft a mini runbook for a 2-step process with exception paths",


      "Design a basic QA sampling plan with AQL and calibration notes",


      "Write a weekly note with risks, owners, and due dates"


    ]


  },


  {


    name: "Analytics",


    focus: "Dashboards, reliability metrics, and data hygiene.",


    projects: [


      "Define throughput/quality/reliability metrics for a pilot",


      "Mock a simple dashboard spec with tiles and owners",


      "Propose a lightweight evidence taxonomy for links/logs"


    ]


  },


  {


    name: "Talent",


    focus: "Structured hiring, scorecards, and work-samples.",


    projects: [


      "Draft a success profile for an ops role with signals",


      "Build a 30-minute work-sample and grading rubric",


      "Write an evidence summary template for decisions"


    ]


  }


];





const timeline: Milestone[] = [


  { when: "Applications Open", what: "January 15 (Spring) / August 15 (Fall)" },


  { when: "Interviews", what: "2 weeks after application  structured, short, and focused" },


  { when: "Offers", what: "Rolling  we decide quickly with clear feedback" },


  { when: "Program Length", what: "1012 weeks (paid), hybrid/remote options" }


];





const faqs: FAQ[] = [


  { q: "Is the internship paid?", a: "Yes. We offer competitive pay and provide equipment if needed." },


  { q: "Remote or in-person?", a: "Hybrid/remote depending on team and track. Austin hub optional." },


  { q: "Do I need prior experience?", a: "We look for clarity of thought and examples of systems thinking. Coursework or projects are welcome." },


  { q: "Visa sponsorship?", a: "Case-by-case based on timing and regulations. Mention in your application." },


  { q: "Accommodations?", a: "Email access@tecronix.com to request a reasonable accommodation at any stage." }


];





export default function InternshipsPage() {


  return (


    <main>


      {/* HERO */}


      <section className="bg-slate-900 text-white">


        <div className="container py-16">


          <h1 className="max-w-5xl">Internships at Tecronix</h1>


          <p className="mt-4 max-w-3xl text-white/80">


            Work on real systems: runbooks, scorecards, dashboards, and QA plans. Learn to ship reliable outcomes.


          </p>


          <div className="mt-6 flex flex-wrap gap-3">


            <a className="btn-outline" href="#tracks">Tracks</a>


            <a className="btn-outline" href="#timeline">Timeline</a>


            <a className="btn-primary" href="#apply">Apply</a>


          </div>


        </div>


      </section>





      {/* TRACKS */}


      <section id="tracks" className="container py-12">


        <h2>Tracks &amp; Example Projects</h2>


        <div className="mt-6 grid lg:grid-cols-3 gap-6">


          {tracks.map(t => (


            <article key={t.name} className="card">


              <div className="font-semibold">{t.name}</div>


              <p className="muted mt-2 text-sm">{t.focus}</p>


              <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">


                {t.projects.map(p => <li key={p}>{p}</li>)}


              </ul>


            </article>


          ))}


        </div>


      </section>





      {/* TIMELINE */}


      <section id="timeline" className="container py-12 grid lg:grid-cols-2 gap-10">


        <article className="card">


          <h3 className="font-semibold">Program Timeline</h3>


          <ul className="mt-3 text-slate-700 text-sm space-y-2">


            {timeline.map(m => <li key={m.when}><strong>{m.when}:</strong> {m.what}</li>)}


          </ul>


          <p className="text-xs text-slate-500 mt-3">Dates shown are placeholders; update each season.</p>


        </article>


        <article className="card bg-slate-50">


          <h3 className="font-semibold">What You&apos;ll Learn</h3>


          <ul className="mt-3 text-slate-700 text-sm space-y-2">


            <li>Structured problem framing and scope clarity</li>


            <li>Writing SOPs and sampling plans</li>


            <li>Designing simple, useful dashboards</li>


            <li>Communicating with weekly notes (owners/dates)</li>


          </ul>


        </article>


      </section>





      {/* ELIGIBILITY */}


      <section className="container py-12 grid lg:grid-cols-2 gap-10">


        <article className="card">


          <h3 className="font-semibold">Eligibility</h3>


          <ul className="mt-3 text-slate-700 text-sm space-y-2">


            <li>Currently enrolled or recent graduate (all backgrounds welcome)</li>


            <li>Comfort with clear writing and basic spreadsheets</li>


            <li>Curiosity about operations, analytics, or hiring systems</li>


          </ul>


        </article>


        <article className="card">


          <h3 className="font-semibold">Mentorship &amp; Feedback</h3>


          <p className="mt-2 text-sm text-slate-700">


            You&apos;ll have a dedicated mentor and weekly feedback loops. We value clarity, initiative, and kindness.


          </p>


        </article>


      </section>





      {/* APPLY */}


      <section id="apply" className="bg-slate-100">


        <div className="container py-12 grid lg:grid-cols-2 gap-10">


          <article>


            <h2>Apply for an Internship</h2>


            <p className="mt-2 text-slate-700">


              Tell us about a system you improved  anything from a campus club process to a project or a job.


            </p>


          </article>


          <aside className="card">


            <form className="grid gap-3">


              <select className="rounded-xl px-4 py-3 border" aria-label="Track">


                {tracks.map(t => <option key={t.name}>{t.name}</option>)}


              </select>


              <input className="rounded-xl px-4 py-3 border" placeholder="Full name" aria-label="Full name" />


              <input className="rounded-xl px-4 py-3 border" type="email" placeholder="Email" aria-label="Email" />


              <input className="rounded-xl px-4 py-3 border" placeholder="School / Program (optional)" aria-label="School" />


              <textarea className="rounded-xl px-4 py-3 border min-h-[140px]" placeholder="Tell us about a system you improved and the outcome." aria-label="Story"></textarea>


              <button type="button" className="btn-primary">Submit Application</button>




            </form>


          </aside>


        </div>


      </section>





      {/* FAQ */}


      <section className="container py-12">


        <h2>Internship FAQ</h2>


        <div className="mt-4 grid md:grid-cols-2 gap-6">


          {faqs.map(f => (


            <details key={f.q} className="p-4 rounded-2xl border bg-white">


              <summary className="font-medium">{f.q}</summary>


              <p className="mt-2 text-slate-700 text-sm">{f.a}</p>


            </details>


          ))}


        </div>


      </section>





      {/* CTA */}


      <section>


        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">


          <div>


            <h2>Not ready to apply?</h2>


            <p className="text-slate-700 mt-1">Join our talent network or browse full-time roles.</p>


          </div>


          <div className="flex gap-3">


            <a className="btn-outline" href="/job-seekers#upload">Join Talent Network</a>


            <a className="btn-primary" href="/jobs">Browse Jobs</a>


          </div>


        </div>


      </section>


    </main>


  );


}







