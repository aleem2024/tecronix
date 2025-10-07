import type { Metadata } from "next";





export const metadata: Metadata = {


  title: "Client Onboarding | Tecronix",


  description: "Step-by-step onboarding for staffing, managed services (outcomes), or consulting  owners, artifacts, integrations, and kickoff."


};





type Step = { title: string; detail: string; owners: string[]; week: string };


type Artifact = { name: string; purpose: string; link?: string };


type Integration = { system: string; notes: string; required: boolean };





const steps: Step[] = [


  { title: "Scoping & Success Criteria", week: "Week 01", owners: ["Sponsor","Tecronix Delivery"], detail: "Lock scope, interfaces, volumes, SLAs/QA, dashboards, and change control. Capture risks/assumptions." },


  { title: "Access & Security", week: "Week 1", owners: ["Client IT/Sec","Tecronix Sec"], detail: "Provision least-privilege access. Enable MFA where supported. Confirm retention and audit requirements." },


  { title: "Runbook & Artifacts", week: "Week 12", owners: ["Tecronix Delivery","Client Ops"], detail: "Draft SOPs, sampling plans (AQL where applicable), weekly notes template, and escalation paths." },


  { title: "Sourcing/Stand-up", week: "Week 23", owners: ["Tecronix Talent","Client Hiring Manager"], detail: "Calibrated search (staffing) or pilot cells (outcomes). Set interview kits or process controls." },


  { title: "Calibration & QA", week: "Week 34", owners: ["Tecronix QA","Client Ops"], detail: "Pilot tasks with sampling, coach on misses, and tune rubrics/SOPs. Validate dashboard signals." },


  { title: "Go-Live & Governance", week: "Week 48", owners: ["Sponsor","Delivery"], detail: "Weekly notes with owners/dates, dashboard reviews, change control for scope/interfaces." }


];





const artifacts: Artifact[] = [


  { name: "Runbook (SOPs & Interfaces)", purpose: "Single source of truth for process steps, inputs/outputs, exceptions.", link: "/docs/sample-sow.pdf" },


  { name: "Weekly Notes Template", purpose: "Owners, due dates, risks, decisions, and follow-ups.", link: "/resources" },


  { name: "QA Sampling Plan", purpose: "What to sample, frequency, AQL thresholds, and calibration notes.", link: "/trust" },


  { name: "Dashboard Spec", purpose: "Throughput, quality, reliability, and leading indicators.", link: "/support" },


  { name: "Access Matrix", purpose: "Roles, permissions, and joiner/mover/leaver steps.", link: "/trust" }


];





const integrations: Integration[] = [


  { system: "ATS / HRIS", notes: "Req intake, status updates, and structured feedback for staffing programs.", required: true },


  { system: "EMR / RCM (Healthcare)", notes: "Role-scoped access; BAA if PHI in scope; evidence capture in appeals.", required: false },


  { system: "ERP / Finance", notes: "SoD and approvals for posting; artifact links for audit.", required: false },


  { system: "WMS / OMS (Logistics)", notes: "RF/scan compliance prompts and exception dashboards.", required: false },


  { system: "SFTP / File Transfer", notes: "Keys, folders, retention, and checksums for file exchanges.", required: true },


  { system: "Ticketing (ITSM)", notes: "Incidents/requests/change control; map priorities and SLAs.", required: true },


  { system: "BI / Dashboards", notes: "Secure dataset and tiles for program governance.", required: true }


];





const kickoffAgenda = [


  ["Welcome & Roles", "Sponsors, decision rights, escalation path."],


  ["Scope Review", "Confirm outcomes/roles, volumes, constraints, and exceptions."],


  ["Security & Access", "Matrix, MFA, retention, and audit trails."],


  ["Runbook Artifacts", "SOPs, sampling plan, weekly notes, and dashboard spec."],


  ["Integrations", "Systems, environments, timelines, and owners."],


  ["Dates & Next Steps", "Milestones, owners, and communication cadence."]


];





const faqs = [


  ["How long does onboarding take?", "Staffing calibration starts within 4872 hours; outcome pilots typically start in Week 1 after scope lock and access."],


  ["Who needs to attend kickoff?", "Sponsor, hiring manager or process owner, security/IT contact, and Tecronix delivery/talent leads."],


  ["Can you work in our systems?", "Yes  we prefer to, with least-privilege access and audit trails."],


  ["How do changes get tracked?", "Change control in the runbook with owners, effective dates, and impact to SLAs/QA and commercials."]


];





export default function OnboardingPage() {


  return (


    <main>


      {/* HERO */}


      <section className="bg-slate-900 text-white">


        <div className="container py-16">


          <h1 className="max-w-5xl">Client Onboarding</h1>


          <p className="mt-4 max-w-3xl text-white/80">


            A clear path to go live  whether youre hiring people, buying outcomes, or running a diagnostic.


          </p>


          <div className="mt-6 flex flex-wrap gap-3">


            <a className="btn-outline" href="#timeline">Timeline</a>


            <a className="btn-outline" href="#artifacts">Artifacts</a>


            <a className="btn-outline" href="#integrations">Integrations</a>


            <a className="btn-primary" href="#kickoff">Kickoff</a>


          </div>


        </div>


      </section>





      {/* TIMELINE */}


      <section id="timeline" className="container py-12">


        <h2>Timeline &amp; Owners</h2>


        <div className="mt-6 grid md:grid-cols-2 gap-6">


          {steps.map(s => (


            <article key={s.title} className="card">


              <div className="flex items-start justify-between gap-4">


                <div className="font-semibold">{s.title}</div>


                <div className="badge">{s.week}</div>


              </div>


              <p className="muted mt-2 text-sm">{s.detail}</p>


              <div className="text-xs text-slate-600 mt-3"><strong>Owners:</strong> {s.owners.join(", ")}</div>


            </article>


          ))}


        </div>


      </section>





      {/* ARTIFACTS */}


      <section id="artifacts" className="container py-12">


        <h2>Core Artifacts</h2>


        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">


          {artifacts.map(a => (


            <a key={a.name} className="card block hover:shadow-sm" href={a.link || "#"}>


              <div className="font-semibold">{a.name}</div>


              <p className="muted mt-2 text-sm">{a.purpose}</p>


              <div className="text-sm text-slate-600 mt-3">{a.link ? "View " : "Preview "}</div>


            </a>


          ))}


        </div>


        <p className="text-xs text-slate-500 mt-3">Replace placeholders in <code>/public/docs</code> before launch.</p>


      </section>





      {/* INTEGRATIONS */}


      <section id="integrations" className="container py-12">


        <h2>Systems &amp; Integrations</h2>


        <div className="mt-6 grid lg:grid-cols-2 gap-6">


          {integrations.map(i => (


            <article key={i.system} className="card">


              <div className="flex items-center justify-between">


                <div className="font-semibold">{i.system}</div>


                <span className={"text-xs px-2 py-1 rounded-full " + (i.required ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-700")}>


                  {i.required ? "Required" : "Optional"}


                </span>


              </div>


              <p className="muted mt-2 text-sm">{i.notes}</p>


            </article>


          ))}


        </div>


      </section>





      {/* KICKOFF */}


      <section id="kickoff" className="bg-slate-100">


        <div className="container py-12 grid lg:grid-cols-2 gap-10">


          <article>


            <h2>Kickoff Agenda</h2>


            <ol className="mt-3 list-decimal pl-6 text-slate-700 space-y-2">


              {kickoffAgenda.map(([t,d]) => (


                <li key={t as string}><strong>{t}:</strong> {d}</li>


              ))}


            </ol>


            <p className="text-xs text-slate-500 mt-3">We keep kickoff to 6075 minutes; follow-ups go into weekly notes.</p>


          </article>


          <aside className="card">


            <h3 className="font-semibold">Share Pre-Kickoff Details</h3>


            <form className="grid gap-3">


              <input className="rounded-xl px-4 py-3 border" placeholder="Company" aria-label="Company" />


              <input className="rounded-xl px-4 py-3 border" placeholder="Primary contact email" type="email" aria-label="Email" />


              <select className="rounded-xl px-4 py-3 border" aria-label="Engagement type">


                <option>Staffing (Hire People)</option>


                <option>Managed Services (Buy Outcomes)</option>


                <option>Consulting / Diagnostic</option>


              </select>


              <textarea className="rounded-xl px-4 py-3 border min-h-[120px]" placeholder="Scope, systems, volumes, dates, constraints" aria-label="Scope"></textarea>


              <button type="button" className="btn-primary">Send Details</button>




            </form>


          </aside>


        </div>


      </section>





      {/* FAQ */}


      <section className="container py-12">


        <h2>Onboarding FAQ</h2>


        <div className="mt-4 grid md:grid-cols-2 gap-6">


          {faqs.map(([q,a]) => (


            <details key={q as string} className="p-4 rounded-2xl border bg-white">


              <summary className="font-medium">{q}</summary>


              <p className="mt-2 text-slate-700 text-sm">{a as string}</p>


            </details>


          ))}


        </div>


      </section>





      {/* CTA */}


      <section>


        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">


          <div>


            <h2>Ready to kick off?</h2>


            <p className="text-slate-700 mt-1">Well align scope and ship a clean start.</p>


          </div>


          <div className="flex gap-3">


            <a className="btn-outline" href="/rfp">Start an RFP</a>


            <a className="btn-primary" href="/contact">Schedule Kickoff</a>


          </div>


        </div>


      </section>


    </main>


  );


}




