"use client";
import { useEffect, useMemo, useState } from "react";
type Row = { Name: string; "Service/Role": string; Region: string; "Data Types": string; Notes: string };

function parseCsv(text: string): Row[] {
  const lines = text.trim().split(/\r?\n/); if (lines.length===0) return [];
  const headers = lines[0].split(",").map(h => h.trim());
  return lines.slice(1).map(line => {
    const cols = line.split(",").map(c => c.trim());
    const obj: any = {}; headers.forEach((h,i)=> obj[h] = cols[i] || ""); return obj as Row;
  });
}

export default function SubProcClient() {
  const [rows, setRows] = useState<Row[]>([]);
  const [q, setQ] = useState("");
  useEffect(()=>{ fetch("/templates/sub-processors.csv",{cache:"no-store"}).then(r=>r.text()).then(t=>setRows(parseCsv(t))).catch(()=>setRows([])); },[]);
  const filtered = useMemo(()=> {
    const n = q.trim().toLowerCase(); if (!n) return rows;
    return rows.filter(r =>
      (r.Name||"").toLowerCase().includes(n) ||
      (r["Service/Role"]||"").toLowerCase().includes(n) ||
      (r.Region||"").toLowerCase().includes(n) ||
      (r["Data Types"]||"").toLowerCase().includes(n)
    );
  }, [rows,q]);

  return (
    <main>
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Sub-Processors</h1>
          <p className="mt-4 max-w-3xl text-white/80">Vendors that may process data on our behalf, depending on services in scope.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#registry">Registry</a>
            <a className="btn-primary" href="/templates/sub-processors.csv" download>Download CSV</a>
          </div>
        </div>
      </section>

      <section id="registry" className="container py-12">
        <div className="grid md:grid-cols-3 gap-3 items-end">
          <div className="md:col-span-2">
            <h2>Current Registry</h2>
            <p className="muted text-sm mt-2">Your SOW defines systems and data flows; not all vendors apply to every client.</p>
          </div>
          <input className="rounded-xl px-4 py-3 border" placeholder="Search name, role, region, or data type" value={q} onChange={e=>setQ(e.target.value)} />
        </div>

        <div className="mt-6 overflow-x-auto rounded-2xl border bg-white">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left p-4 font-semibold">Name</th>
                <th className="text-left p-4 font-semibold">Service/Role</th>
                <th className="text-left p-4 font-semibold">Region</th>
                <th className="text-left p-4 font-semibold">Data Types</th>
                <th className="text-left p-4 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(r => (
                <tr key={r.Name + r.Region} className="border-t align-top">
                  <td className="p-4 font-medium">{r.Name}</td>
                  <td className="p-4">{r["Service/Role"]}</td>
                  <td className="p-4">{r.Region}</td>
                  <td className="p-4">{r["Data Types"]}</td>
                  <td className="p-4">{r.Notes || ""}</td>
                </tr>
              ))}
              {filtered.length===0 && <tr><td className="p-4 text-slate-500" colSpan={5}>No matches.</td></tr>}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

