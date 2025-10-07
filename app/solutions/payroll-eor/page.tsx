import type { Metadata } from "next";





export const metadata: Metadata = {


  title: "Payroll & Employer of Record (EOR) | Tecronix",


  description: "Put contractors on our W-2 with compliant onboarding, payroll, benefits, timekeeping, and worker classification guardrails. Rapid starts and clean offboarding."


};





export default function PayrollEorPage() {


  return (


    <main>


      {/* HERO */}


      <section className="bg-slate-900 text-white">


        <div className="container py-16">


          <h1 className="max-w-5xl">Payroll & Employer of Record (EOR)</h1>


          <p className="mt-4 max-w-3xl text-white/80">


            Already found a contractor? Put them on our W-2. We handle onboarding, payroll, taxes, benefits, timekeeping, and compliance across the U.S.  with simple monthly invoicing.


          </p>


          <div className="mt-6 flex flex-wrap gap-3">


            <a href="#start" className="btn-primary">Start Payrolling</a>


            <a href="#how" className="btn-outline">How It Works</a>


            <a href="#pricing" className="btn-outline">Pricing</a>


          </div>


        </div>


      </section>





      {/* PROOF STRIP */}


      <section className="container py-10">


        <div className="grid md:grid-cols-4 gap-4">


          {[


            ["4872 hrs","Typical start time"],


            ["50 states","U.S. coverage"],


            ["W-2","Benefits & taxes handled"],


            ["One invoice","No admin burden"]


          ].map(([k,v]) => (


            <div key={k as string} className="card text-center">


              <div className="text-3xl font-bold">{k}</div>


              <div className="muted mt-1">{v}</div>


            </div>


          ))}


        </div>


      </section>





      {/* WHAT'S INCLUDED */}


      <section className="container py-12">


        <h2>What&apos;s Included</h2>


        <div className="mt-6 grid md:grid-cols-3 gap-6">


          {[


            ["Onboarding","I-9/E-Verify, background/drug where permitted, policy ack, equipment attestations."],


            ["Payroll & Taxes","Multi-state withholding, overtime rules, expense reimbursements, W-2 year-end forms."],


            ["Benefits","Medical, dental, vision (eligibility varies). PTO policies aligned to assignment."],


            ["Time & Approvals","Timesheets, manager approvals, holiday calendars, and cutoff reminders."],


            ["Compliance","Worker classification guardrails, ACA tracking, leave coordination, audit trails."],


            ["Offboarding","Final pay, equipment return attestations, access removal checklist."]


          ].map(([t,d]) => (


            <article key={t as string} className="card">


              <div className="font-semibold">{t}</div>


              <p className="muted mt-2 text-sm">{d}</p>


            </article>


          ))}


        </div>


      </section>





      {/* HOW IT WORKS */}


      <section id="how" className="container py-12 grid lg:grid-cols-2 gap-10">


        <article>


          <h2>How It Works</h2>


          <ol className="mt-4 list-decimal pl-6 space-y-2 text-slate-700">


            <li><strong>Submit Details:</strong> contractor info, role, location, rate, expected hours, duration.</li>


            <li><strong>Compliance Check:</strong> worker classification guardrails, background/drug where permitted.</li>


            <li><strong>Offer & Onboarding:</strong> W-2 offer letter, I-9/E-Verify, benefits eligibility review.</li>


            <li><strong>Timekeeping:</strong> weekly timesheets, manager approvals, expense submissions.</li>


            <li><strong>Invoicing:</strong> one consolidated invoice with backup; payroll/taxes handled by us.</li>


            <li><strong>Offboarding:</strong> final pay, asset attestations, and account deprovision checklist.</li>


          </ol>


        </article>


        <aside className="card bg-slate-50">


          <h3 className="font-semibold">Good Fit For</h3>


          <ul className="mt-3 space-y-2 text-slate-700">


            <li>Managers who sourced talent directly and need compliant payrolling</li>


            <li>Vendors/1099s who should be W-2 under policy or risk guardrails</li>


            <li>Fast starts while procurement finishes SOW/MSA paperwork</li>


          </ul>


        </aside>


      </section>





      {/* PRICING */}


      <section id="pricing" className="container py-12">


        <h2>Pricing</h2>


        <div className="mt-6 grid md:grid-cols-3 gap-6">


          {[


            ["Standard Markup","All-in hourly bill rate covers payroll taxes, benefits load, admin, and compliance."],


            ["Volume Bands","Lower markups for teams or multi-role programs (ask about bands/terms)."],


            ["Conversion Option","Clear C2H conversion schedule if you plan to hire after a trial."]


          ].map(([t,d]) => (


            <article key={t as string} className="card">


              <div className="font-semibold">{t}</div>


              <p className="muted mt-2 text-sm">{d}</p>


            </article>


          ))}


        </div>


        <p className="text-xs text-slate-500 mt-3">Exact terms vary by state, benefit elections, and assignment specifics.</p>


      </section>





      {/* RISK & COMPLIANCE */}


      <section className="container py-12 grid md:grid-cols-2 gap-10">


        <article className="card">


          <h3 className="font-semibold">Worker Classification Guardrails</h3>


          <ul className="mt-3 space-y-2 text-slate-700">


            <li>Default to W-2 for directed work; use 1099 only where criteria are met</li>


            <li>Co-employment risk mitigations, manager guidelines, and training</li>


            <li>Overtime rules, breaks, and local leave policies by jurisdiction</li>


          </ul>


        </article>


        <article className="card">


          <h3 className="font-semibold">Security & Access</h3>


          <ul className="mt-3 space-y-2 text-slate-700">


            <li>Least-privilege access; hardware/software attestations</li>


            <li>Policy acknowledgements and periodic audits</li>


            <li>Separation checklist at offboarding</li>


          </ul>


        </article>


      </section>





      {/* START FORM */}


      <section id="start" className="bg-slate-100">


        <div className="container py-12">


          <h2>Start Payrolling</h2>


          <form className="card mt-6 grid md:grid-cols-2 gap-3">


            <input className="rounded-xl px-4 py-3 border" placeholder="Manager first name" />


            <input className="rounded-xl px-4 py-3 border" placeholder="Manager last name" />


            <input className="rounded-xl px-4 py-3 border md:col-span-2" placeholder="Work email" />


            <input className="rounded-xl px-4 py-3 border md:col-span-2" placeholder="Company" />


            <input className="rounded-xl px-4 py-3 border md:col-span-2" placeholder="Contractor name" />


            <div className="grid grid-cols-2 gap-3 md:col-span-2">


              <input className="rounded-xl px-4 py-3 border" placeholder="City" />


              <input className="rounded-xl px-4 py-3 border" placeholder="State" />


            </div>


            <select className="rounded-xl px-4 py-3 border">


              <option>Assignment: Full-time (40 hrs)</option>


              <option>Assignment: Part-time</option>


              <option>Assignment: Variable</option>


            </select>


            <select className="rounded-xl px-4 py-3 border">


              <option>Duration: 3 months</option>


              <option>Duration: 6 months</option>


              <option>Duration: 12 months</option>


              <option>Duration: Open-ended</option>


            </select>


            <textarea className="rounded-xl px-4 py-3 border md:col-span-2 min-h-[120px]" placeholder="Role summary, hourly pay target, start date, and any screening requirements."></textarea>


            <button type="button" className="btn-primary md:col-span-2">Submit</button>




          </form>


        </div>


      </section>





      {/* FAQ */}


      <section className="container py-12">


        <h2>FAQs</h2>


        <div className="mt-4 grid md:grid-cols-2 gap-6 text-slate-700">


          <details className="p-4 rounded-2xl border">


            <summary className="font-medium">Can we keep our own time system?</summary>


            <p className="mt-2">Yes  we can integrate exports or use our standard. Approvals are required for payroll deadlines.</p>


          </details>


          <details className="p-4 rounded-2xl border">


            <summary className="font-medium">Do you support multiple states?</summary>


            <p className="mt-2">Yes  we payroll in all 50 U.S. states. State taxes and leave rules are handled in setup.</p>


          </details>


          <details className="p-4 rounded-2xl border">


            <summary className="font-medium">Benefits eligibility?</summary>


            <p className="mt-2">Varies by assignment hours and duration. We outline options during onboarding.</p>


          </details>


          <details className="p-4 rounded-2xl border">


            <summary className="font-medium">What about 1099 engagements?</summary>


            <p className="mt-2">Where criteria are met, we can support vendor onboarding; otherwise we convert to W-2 payrolling.</p>


          </details>


        </div>


      </section>





      {/* CTA */}


      <section>


        <div className="container py-12 flex flex-wrap items-center justify-between gap-4">


          <div>


            <h2>Move fast  and stay compliant.</h2>


            <p className="text-slate-700 mt-1">We&apos;ll payroll your contractor and start within days.</p>


          </div>


          <a href="#start" className="btn-primary">Start Payrolling</a>


        </div>


      </section>


    </main>


  );


}




