import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Support | Tecronix",
  description: "Support hub for active clients and programs: portals, ticketing, SLAs, escalation, and contacts."
};

export default function SupportPage() {
  const portals = [
    { name: "Client Portal (Placeholder)", desc: "View dashboards, weekly notes, artifacts, and invoices.", href: "#", note: "Connect your portal before launch." },
    { name: "Ticketing (Placeholder)", desc: "Submit requests, incidents, or change-control items.", href: "#", note: "Hook to your ITSM (e.g., JSM, ServiceNow, Zendesk)." },
    { name: "Time & Attendance (Placeholder)", desc: "Approve timecards and view schedules.", href: "#", note: "Link to your T&A system if applicable." }
  ];

  const slas = [
    ["Incident Acknowledgement","Within 2 business hours (Priority 1); within 4 hours (Priority 2)."],
    ["Resolution Targets","P1: workaround within 8 hours; P2: within 1 business day (targets illustrative)."],
    ["Change Control","Runbook updates tracked with owners, effective date, and rollback notes."]
  ];

  const contacts = [
    ["Delivery Manager","delivery@tecronix.com"],
    ["Account Manager","accounts@tecronix.com"],
    ["Security","security@tecronix.com"],
    ["Privacy","privacy@tecronix.com"],
    ["Billing","billing@tecronix.com"]
  ];

  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Client Support</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            For active programs and retained services: portals, ticketing, SLAs, and escalation paths.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#portals">Portals</a>
            <a className="btn-outline" href="#sla">SLAs</a>
            <a className="btn-primary" href="#contact">Contacts</a>
          </div>
        </div>
      </section>

      {/* PORTALS */}
      <section id="portals" className="container py-12">
        <h2>Portals & Tools</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portals.map(p => (
            <a key={p.name} href={p.href} className="card block hover:shadow-sm" aria-disabled={p.href === '#'}>
              <div className="font-semibold">{p.name}</div>
              <p className="muted mt-2 text-sm">{p.desc}</p>
              <div className="text-xs text-slate-500 mt-3">{p.note}</div>
            </a>
          ))}
        </div>
      </section>

      {/* SLAS */}
      <section id="sla" className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h3 className="font-semibold">Service Levels (Illustrative)</h3>
          <ul className="mt-3 text-slate-700 text-sm space-y-2">
            {slas.map(([t,d]) => (
              <li key={t}><strong>{t}: </strong><span className="text-slate-700">{d}</span></li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 mt-3">Final SLAs are defined in your SOW and runbook.</p>
        </article>
        <article className="card bg-slate-50">
          <h3 className="font-semibold">Escalation Path</h3>
          <ol className="mt-3 list-decimal pl-6 text-slate-700 text-sm space-y-2">
            <li>Ticket with priority and impact (include links/screenshots).</li>
            <li>Escalate to Delivery Manager if blocking a milestone.</li>
            <li>Account Manager for commercial or scope concerns.</li>
            <li>Security/Privacy for incidents or data issues.</li>
          </ol>
        </article>
      </section>

      {/* CONTACTS */}
      <section id="contact" className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-2 gap-10">
          <article>
            <h2>Contact Support</h2>
            <ul className="mt-3 text-slate-700 text-sm space-y-2">
              {contacts.map(([role,email]) => (
                <li key={role}><strong>{role}:</strong> <a className="underline" href={`mailto:${email}`}>{email}</a></li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 mt-3">Response targets follow the SLAs above unless your SOW specifies different terms.</p>
          </article>
          <aside className="card">
            <h3 className="font-semibold">Submit a Ticket (Placeholder)</h3>
            <form className="grid gap-3 mt-3">
              <input className="rounded-xl px-4 py-3 border" placeholder="Email" type="email" aria-label="Email" />
              <select className="rounded-xl px-4 py-3 border" aria-label="Priority">
                <option>Priority: P1 (Critical)</option>
                <option>Priority: P2 (High)</option>
                <option>Priority: P3 (Normal)</option>
              </select>
              <textarea className="rounded-xl px-4 py-3 border min-h-[120px]" placeholder="Describe the issue, impact, and any links/screenshots." aria-label="Description"></textarea>
              <button type="button" className="btn-primary">Submit Ticket</button>
            </form>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Need program changes?</h2>
            <p className="text-slate-700 mt-1">Use change control to update scope, interfaces, or SLAs.</p>
          </div>
          <a className="btn-primary" href="/rfp">Request a Change</a>
        </div>
      </section>
    </main>
  );
}

