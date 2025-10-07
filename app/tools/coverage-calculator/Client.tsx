"use client";
import { useMemo, useState } from "react";
/**
 * Simple interval-based capacity model
 * Inputs:
 *  - Intervals per day (e.g., 24 for hourly, 48 for 30-min)
 *  - Forecast volume per interval (comma/space separated)
 *  - Avg handle time (AHT) in minutes
 *  - Target service coverage (e.g., 0.85 = 85% handled within interval)
 *  - Forecast error band (e.g., Â±15%) to size surge buffers
 *
 * Outputs per interval:
 *  - Base hours needed
 *  - FTE needed (hours / shift_hours)
 *  - Buffer FTE for error band
 *  - Suggested staffed FTE (rounded up)
 */
type Row = {
  i: number;
  forecast: number;
  baseHours: number;
  fte: number;
  bufferFte: number;
  staffedFte: number;
};
function parseSeries(txt: string, n: number): number[] {
  const raw = txt
    .replace(/[\n\r]+/g, " ")
    .split(/[,\s]+/)
    .filter(Boolean)
    .map(Number);
  if (raw.length === 0) return Array(n).fill(0);
  if (raw.length >= n) return raw.slice(0, n);
  // repeat to fill
  const out: number[] = [];
  while (out.length < n) {
    out.push(...raw);
  }
  return out.slice(0, n);
}
export default function Client() {
  const [intervals, setIntervals] = useState(24); // hourly by default
  const [ahtMin, setAhtMin] = useState(6);
  const [target, setTarget] = useState(0.85);
  const [shiftHours, setShiftHours] = useState(8);
  const [errorBand, setErrorBand] = useState(0.15);
  const [seriesTxt, setSeriesTxt] = useState(
    "40,35,30,25,20,15,15,20,30,45,55,65,75,80,85,90,95,80,70,60,50,45,40,35"
  );
  const rows = useMemo<Row[]>(() => {
    const vols = parseSeries(seriesTxt, intervals);
    const out: Row[] = [];
    for (let i = 0; i < intervals; i++) {
      const v = Math.max(0, vols[i] || 0);
      // base hours needed to handle target% within interval
      // naive: hours = (v * AHT) / 60; apply service target headroom (1/target)
      const baseHours = (v * ahtMin) / 60 / Math.max(0.1, target);
      const fte = baseHours / Math.max(0.25, shiftHours); // avoid div by small numbers
      const bufferFte = fte * errorBand;
      const staffedFte = Math.ceil(fte + bufferFte);
      out.push({
        i,
        forecast: v,
        baseHours,
        fte,
        bufferFte,
        staffedFte
      });
    }
    return out;
  }, [seriesTxt, intervals, ahtMin, target, shiftHours, errorBand]);
  const totals = useMemo(() => {
    const baseHours = rows.reduce((s, r) => s + r.baseHours, 0);
    const fte = rows.reduce((s, r) => s + r.fte, 0);
    const bufferFte = rows.reduce((s, r) => s + r.bufferFte, 0);
    const staffedFte = rows.reduce((s, r) => s + r.staffedFte, 0);
    return { baseHours, fte, bufferFte, staffedFte };
  }, [rows]);
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-12">
          <h1 className="max-w-4xl">Coverage &amp; Surge Buffer Calculator</h1>
          <p className="mt-3 max-w-3xl text-white/80">
            Paste your forecast by interval, set handle time and service target, and size buffers using an error band.
            Export results to share with stakeholders.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="btn-outline" href="#inputs">Inputs</a>
            <a className="btn-outline" href="#table">Results</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
      {/* INPUTS */}
      <section id="inputs" className="container py-10 grid lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2 card">
          <h2 className="font-semibold">Forecast by Interval</h2>
          <label className="block mt-3 text-sm text-slate-600">Intervals per day</label>
          <input
            type="number"
            min={4}
            max={96}
            step={1}
            className="mt-1 rounded-xl px-4 py-3 border w-40"
            value={intervals}
            onChange={(e) => setIntervals(Math.max(4, Math.min(96, Number(e.target.value) || 24)))}
          />
          <label className="block mt-4 text-sm text-slate-600">Volumes (comma or space separated)</label>
          <textarea
            className="mt-1 rounded-xl px-4 py-3 border min-h-[120px] w-full"
            value={seriesTxt}
            onChange={(e) => setSeriesTxt(e.target.value)}
          />
        </article>
        <aside className="card">
          <h3 className="font-semibold">Assumptions</h3>
          <div className="grid gap-3 mt-3">
            <label className="grid gap-1">
              <span className="text-sm text-slate-600">Avg Handle Time (minutes)</span>
              <input
                type="number"
                className="rounded-xl px-4 py-3 border"
                value={ahtMin}
                onChange={(e) => setAhtMin(Math.max(0.1, Number(e.target.value) || 6))}
              />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-slate-600">Target Service Coverage (0-1)</span>
              <input
                type="number" step="0.01" min="0.1" max="1"
                className="rounded-xl px-4 py-3 border"
                value={target}
                onChange={(e) => setTarget(Math.max(0.1, Math.min(1, Number(e.target.value) || 0.85)))}
              />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-slate-600">Shift Hours</span>
              <input
                type="number"
                className="rounded-xl px-4 py-3 border"
                value={shiftHours}
                onChange={(e) => setShiftHours(Math.max(0.25, Number(e.target.value) || 8))}
              />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-slate-600">Forecast Error Band (Â± as decimal)</span>
              <input
                type="number" step="0.01" min="0" max="1"
                className="rounded-xl px-4 py-3 border"
                value={errorBand}
                onChange={(e) => setErrorBand(Math.max(0, Math.min(1, Number(e.target.value) || 0.15)))}
              />
            </label>
          </div>
        </aside>
      </section>
      {/* RESULTS */}
      <section id="table" className="container pb-12">
        <div className="card">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h2 className="font-semibold">Results by Interval</h2>
            <button
              className="btn-outline"
              onClick={() => {
                const header = ["Interval","Forecast","Base Hours","FTE","Buffer FTE","Suggested Staffed FTE"];
                const lines = rows.map(r => [
                  r.i + 1,
                  r.forecast,
                  r.baseHours.toFixed(2),
                  r.fte.toFixed(2),
                  r.bufferFte.toFixed(2),
                  r.staffedFte
                ].join(","));
                const csv = [header.join(","), ...lines, "", `TOTALS,,${totals.baseHours.toFixed(2)},${totals.fte.toFixed(2)},${totals.bufferFte.toFixed(2)},${totals.staffedFte}`].join("\n");
                const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "coverage-calculator.csv";
                a.click();
                URL.revokeObjectURL(url);
              }}
            >
              Export CSV
            </button>
          </div>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr className="text-left">
                  <th className="px-4 py-3">Interval</th>
                  <th className="px-4 py-3">Forecast</th>
                  <th className="px-4 py-3">Base Hours</th>
                  <th className="px-4 py-3">FTE</th>
                  <th className="px-4 py-3">Buffer FTE</th>
                  <th className="px-4 py-3">Suggested Staffed FTE</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(r => (
                  <tr key={r.i} className="border-t">
                    <td className="px-4 py-2">{r.i + 1}</td>
                    <td className="px-4 py-2">{r.forecast}</td>
                    <td className="px-4 py-2">{r.baseHours.toFixed(2)}</td>
                    <td className="px-4 py-2">{r.fte.toFixed(2)}</td>
                    <td className="px-4 py-2">{r.bufferFte.toFixed(2)}</td>
                    <td className="px-4 py-2 font-medium">{r.staffedFte}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="border-t bg-slate-50">
                <tr>
                  <td className="px-4 py-3 font-medium">Totals</td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3">{totals.baseHours.toFixed(2)}</td>
                  <td className="px-4 py-3">{totals.fte.toFixed(2)}</td>
                  <td className="px-4 py-3">{totals.bufferFte.toFixed(2)}</td>
                  <td className="px-4 py-3">{totals.staffedFte}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="muted text-xs mt-3">
            This simple model is for directional planning. For Erlang or queueing models, we can wire your telemetry and
            deliver calibrated dashboards. <a className="underline" href="/rfp">Start an RFP</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
