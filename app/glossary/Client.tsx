"use client";
import { useMemo, useState } from "react";

type Term = { term: string; def: string; tags?: string[] };
const TERMS: Term[] = [
  { term: "SLA", def: "Service Level Agreement  target for throughput, quality, or reliability." },
  { term: "AQL", def: "Acceptable Quality Limit  sampling threshold for defects." },
  { term: "RCM", def: "Revenue Cycle Management  healthcare financial workflows." },
  { term: "OEE", def: "Overall Equipment Effectiveness  manufacturing productivity metric." },
  { term: "MTTR", def: "Mean Time To Recovery  reliability metric for incidents." }
];

export default function GlossaryClient() {
  const [q, setQ] = useState("");
  const filtered = useMemo(()=> {
    const n = q.trim().toLowerCase();
    if (!n) return TERMS;
    return TERMS.filter(t => t.term.toLowerCase().includes(n) || t.def.toLowerCase().includes(n));
  }, [q]);

  return (
    <main>
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Glossary</h1>
          <p className="mt-4 max-w-3xl text-white/80">Quick definitions for staffing, outsourcing, and ops.</p>
          <div className="mt-6">
            <input className="rounded-xl px-4 py-3 border bg-white text-slate-900" placeholder="Search terms" value={q} onChange={e=>setQ(e.target.value)} />
          </div>
        </div>
      </section>

      <section className="container py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(t => (
          <article key={t.term} className="card">
            <div className="font-semibold">{t.term}</div>
            <p className="muted text-sm mt-2">{t.def}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

