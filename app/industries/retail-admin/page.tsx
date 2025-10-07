import type { Metadata } from "next";





export const metadata: Metadata = {


  title: "Retail & Admin Staffing & Outsourcing | Tecronix",


  description: "CX, merchandising/content, catalog ops, store/admin  or outcome programs like CX reliability, PDP enrichment, and launch readiness with macros, QA, and SLAs."


};





export default function RetailAdminIndustryPage() {


  return (


    <main>


      {/* HERO */}


      <section className="bg-slate-900 text-white">


        <div className="container py-16">


          <h1 className="max-w-5xl">Retail &amp; Admin</h1>


          <p className="mt-4 max-w-3xl text-white/80">


            Deliver better CX and content ops. We staff CX agents, merchandising/catalog ops, and admin support  or run


            outcome-based programs with macros, QA, and accessibility checks.


          </p>


          <div className="mt-6 flex flex-wrap gap-3">


            <a href="#intake" className="btn-primary">Start a Retail Intake</a>


            <a href="/jobs" className="btn-outline">Browse Roles</a>


          </div>


        </div>


      </section>





      {/* COVERAGE */}


      <section className="container py-12">


        <h2>Functions We Cover</h2>


        <div className="mt-6 grid lg:grid-cols-3 gap-6">


          {[


            ["Customer Experience (CX)","Omnichannel support, FCR, escalations, and order issues."],


            ["Merchandising & Content","PDP enrichment, imagery/alt text, taxonomy refresh."],


            ["Catalog Ops","SKU setup, attributes, bundles, and launch checklists."],


            ["Trust & Safety","Moderation, appeals handling, and policy enforcement."],


            ["Store/Admin","Scheduling, payroll/time edits, executive assistance."],


            ["Community & Social","Social DMs, forums, sentiment, escalation."]


          ].map(([t,d]) => (


            <article key={t as string} className="card">


              <div className="font-semibold">{t}</div>


              <p className="muted mt-2 text-sm">{d}</p>


            </article>


          ))}


        </div>


      </section>





      {/* OUTCOME PROGRAMS */}


      <section className="container py-12">


        <h2>Outcome-Based Programs</h2>


        <div className="mt-6 grid lg:grid-cols-3 gap-6">


          {[


            ["CX Reliability","FCR/CSAT with macro libraries, QA sampling, accessibility checks."],


            ["PDP Enrichment","Publish SLAs, image QA, taxonomy, and accessibility rules."],


            ["Launch Readiness","SKU readiness checklists and variant/price validation."]


          ].map(([t,d]) => (


            <article key={t as string} className="card">


              <div className="badge">Outcome</div>


              <div className="font-semibold mt-2">{t}</div>


              <p className="muted mt-2 text-sm">{d}</p>


              <div className="text-sm text-slate-600 mt-3"><a href="/solutions/outsourcing">See managed services </a></div>


            </article>


          ))}


        </div>


      </section>





      {/* KPIs & TOOLS */}


      <section className="container py-12 grid lg:grid-cols-2 gap-10">


        <article>


          <h2>KPIs We Drive</h2>


          <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-2">


            <li>FCR, CSAT/NPS, and AHT</li>


            <li>Publish time, content accuracy, accessibility defect rate</li>


            <li>Order accuracy and escalation volume</li>


            <li>Task completion rates and audit scores</li>


          </ul>


        </article>


        <aside className="card bg-slate-50">


          <h3 className="font-semibold">Systems & Tools</h3>


          <ul className="mt-3 space-y-2 text-slate-700">


            <li>Helpdesk/CRM (Zendesk, Salesforce, Freshdesk, Intercom)</li>


            <li>CMS/PIM/DAM, image pipelines, accessibility tooling</li>


            <li>Order/fulfillment systems; fraud/T&S platforms</li>


            <li>QA dashboards, macro libraries, translations</li>


          </ul>


        </aside>


      </section>





      {/* HIRING SYSTEM */}


      <section className="container py-12 grid lg:grid-cols-2 gap-10">


        <article>


          <h2>How We Staff CX &amp; Content</h2>


          <ol className="mt-4 list-decimal pl-6 space-y-2 text-slate-700">


            <li>Success profile: channels, volumes, SLAs, accessibility, brand voice.</li>


            <li>Scorecards: scenario handling, tone, accuracy, policy knowledge.</li>


            <li>Work-samples: macro writing, PDP QA, or CX scenarios (where allowed).</li>


            <li>Onboarding: runbooks, macro libraries, QA cadence, calibration.</li>


          </ol>


        </article>


        <article className="card">


          <h3 className="font-semibold">Interview Signals</h3>


          <ul className="mt-3 space-y-2 text-slate-700">


            <li>Accessible writing and tone control</li>


            <li>Policy interpretation & escalation hygiene</li>


            <li>Attention to detail in content and taxonomy</li>


            <li>Throughput discipline with quality mindset</li>


          </ul>


        </article>


      </section>





      {/* CASES */}


      <section className="container py-12">


        <h2>Recent Outcomes</h2>


        <div className="mt-6 grid md:grid-cols-3 gap-6">


          {[


            ["CX Macro Refresh","FCR +6 pts, AHT 11% via new macros and training."],


            ["PDP Accessibility","Defects 31%, publish time 22% with QA sampling."],


            ["Launch QA","Post-launch defects 18% via SKU/variant checklist."]


          ].map(([t,d]) => (


            <article key={t as string} className="card">


              <div className="font-semibold">{t}</div>


              <p className="muted mt-2 text-sm">{d}</p>


            </article>


          ))}


        </div>


      </section>





      {/* INTAKE */}


      <section id="intake" className="bg-slate-100">


        <div className="container py-12">


          <h2>Kick Off a Retail/Admin Intake</h2>


          <form className="card mt-6 grid md:grid-cols-2 gap-3">


            <input className="rounded-xl px-4 py-3 border" placeholder="First name" />


            <input className="rounded-xl px-4 py-3 border" placeholder="Last name" />


            <input className="rounded-xl px-4 py-3 border md:col-span-2" placeholder="Work email" />


            <input className="rounded-xl px-4 py-3 border md:col-span-2" placeholder="Company / Brand" />


            <select className="rounded-xl px-4 py-3 border">


              <option>Need: Staffing (Hire People)</option>


              <option>Need: Managed Services (Buy Outcomes)</option>


              <option>Need: Consulting / Diagnostic</option>


            </select>


            <select className="rounded-xl px-4 py-3 border">


              <option>Timeline: ASAP</option>


              <option>Timeline: 24 weeks</option>


              <option>Timeline: This quarter</option>


            </select>


            <textarea className="rounded-xl px-4 py-3 border md:col-span-2 min-h-[120px]" placeholder="Describe CX channels, content scope, KPIs (FCR, CSAT, AHT), and systems."></textarea>


            <button type="button" className="btn-primary md:col-span-2">Submit</button>




          </form>


        </div>


      </section>





      {/* FAQ */}


      <section className="container py-12">


        <h2>Retail/Admin FAQs</h2>


        <div className="mt-4 grid md:grid-cols-2 gap-6 text-slate-700">


          <details className="p-4 rounded-2xl border">


            <summary className="font-medium">Do you build macro libraries?</summary>


            <p className="mt-2">Yes  scenario-based macros with tone/brand guidance and version control.</p>


          </details>


          <details className="p-4 rounded-2xl border">


            <summary className="font-medium">Do you localize content?</summary>


            <p className="mt-2">We support translation workflows and localized macro sets.</p>


          </details>


          <details className="p-4 rounded-2xl border">


            <summary className="font-medium">Accessibility coverage?</summary>


            <p className="mt-2">Alt text, link names, color contrast, and headings included in QA checklists.</p>


          </details>


          <details className="p-4 rounded-2xl border">


            <summary className="font-medium">How fast can we start?</summary>


            <p className="mt-2">Shortlists in 714 days; outcome pilots in under a week after scope lock.</p>


          </details>


        </div>


      </section>





      {/* CTA */}


      <section>


        <div className="container py-12 flex flex-wrap items-center justify-between gap-4">


          <div>


            <h2>Better CX and content operations.</h2>


            <p className="text-slate-700 mt-1">Define scope and well staff or stand up the program quickly.</p>


          </div>


          <a href="#intake" className="btn-primary">Start a Retail Intake</a>


        </div>


      </section>


    </main>


  );


}




