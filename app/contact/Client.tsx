"use client";
import { useState } from "react";

export default function ContactClient() {
  const [dept, setDept] = useState("Sales");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const mailto = `mailto:${(dept==="Trust"?"trust":dept==="Support"?"support":dept==="Recruiting"?"careers":"sales")}@tecronix.com?subject=${encodeURIComponent(dept + " inquiry from " + (name||""))}&body=${encodeURIComponent(msg + "\n\nFrom: " + name + " <" + email + ">")}`;

  return (
    <main>
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Contact</h1>
          <p className="mt-4 max-w-3xl text-white/80">Reach Sales, Support, Trust (Security/Privacy), or Recruiting.</p>
        </div>
      </section>

      <section className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h2 className="font-semibold">Send a Message</h2>
          <div className="grid gap-3 mt-4">
            <label className="grid gap-1">
              <span className="text-sm text-slate-600">Department</span>
              <select className="rounded-xl px-4 py-3 border" value={dept} onChange={e=>setDept(e.target.value)}>
                <option>Sales</option><option>Support</option><option>Trust</option><option>Recruiting</option>
              </select>
            </label>
            <label className="grid gap-1"><span className="text-sm text-slate-600">Your Name</span>
              <input className="rounded-xl px-4 py-3 border" value={name} onChange={e=>setName(e.target.value)} /></label>
            <label className="grid gap-1"><span className="text-sm text-slate-600">Email</span>
              <input className="rounded-xl px-4 py-3 border" value={email} onChange={e=>setEmail(e.target.value)} /></label>
            <label className="grid gap-1"><span className="text-sm text-slate-600">Message</span>
              <textarea className="rounded-xl px-4 py-3 border min-h-[120px]" value={msg} onChange={e=>setMsg(e.target.value)} /></label>
          </div>
          <div className="mt-4 flex gap-3">
            <a className="btn-primary" href={mailto}>Send via Email</a>
            <a className="btn-outline" href="/rfp">Start an RFP</a>
          </div>
        </article>

        <aside className="card">
          <h3 className="font-semibold">Office</h3>
          <ul className="mt-3 text-slate-700 text-sm space-y-1">
            <li>500 Congress Ave, Austin, TX 78701</li>
            <li>+1 (512) 555-0188</li>
            <li><a className="underline" href="mailto:hello@tecronix.com">hello@tecronix.com</a></li>
          </ul>
          <h3 className="font-semibold mt-6">Departments</h3>
          <ul className="mt-3 text-slate-700 text-sm space-y-1">
            <li>Sales  sales@tecronix.com</li>
            <li>Support  support@tecronix.com</li>
            <li>Trust (Security/Privacy)  trust@tecronix.com</li>
            <li>Recruiting  careers@tecronix.com</li>
          </ul>
        </aside>
      </section>
    </main>
  );
}


