"use client";
import { useEffect, useState } from "react";

type Incident = { id: string; sev: "SEV-1" | "SEV-2" | "SEV-3" | "SEV-4"; title: string; when: string; status: "Investigating"|"Monitoring"|"Resolved" };
export default function StatusClient() {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  useEffect(() => {
    // Placeholder feed; replace with real status API or JSON file.
    setIncidents([
      { id:"ex1", sev:"SEV-3", title:"Email delivery delay (US-East)", when:"2025-08-10 14:20 UTC", status:"Resolved" }
    ]);
  }, []);

  return (
    <main>
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Status</h1>
          <p className="mt-4 max-w-3xl text-white/80">Operational. Recent incidents are listed below.</p>
        </div>
      </section>

      <section className="container py-12">
        <h2>Recent Incidents</h2>
        <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {incidents.map(i => (
            <article key={i.id} className="card">
              <div className="flex items-center justify-between">
                <div className="font-semibold">{i.title}</div>
                <span className="badge">{i.sev}</span>
              </div>
              <div className="text-sm text-slate-600 mt-1">{i.when}</div>
              <div className="text-sm mt-2"><strong>Status:</strong> {i.status}</div>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <a className="btn-outline" href="/security/incident-response">Incident Response</a>
        </div>
      </section>
    </main>
  );
}
