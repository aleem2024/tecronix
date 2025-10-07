"use client";
import { useMemo, useState } from "react";

type Num = number;
function toNum(v: string, d = 0): Num {
  const n = Number(String(v).replace(/[^0-9.\-]/g, ""));
  return Number.isFinite(n) ? n : d;
}

export default function RoiClient() {
  const [volume, setVolume] = useState("10000");
  const [currentCpu, setCurrentCpu] = useState("4.50");
  const [targetCpu, setTargetCpu] = useState("3.60");
  const [defectNow, setDefectNow] = useState("2.5");
  const [defectTarget, setDefectTarget] = useState("1.2");
  const [pilotCost, setPilotCost] = useState("25000");
  const [months, setMonths] = useState("12");

  const model = useMemo(() => {
    const vol = toNum(volume);
    const cNow = toNum(currentCpu);
    const cTgt = toNum(targetCpu);
    const dNow = toNum(defectNow) / 100;
    const dTgt = toNum(defectTarget) / 100;
    const setup = toNum(pilotCost);
    const horizon = Math.max(1, Math.round(toNum(months)));

    const baseMonthlyCost = vol * cNow;
    const targetMonthlyCost = vol * cTgt;
    const costSavingsPerMonth = Math.max(0, baseMonthlyCost - targetMonthlyCost);

    const defectsNow = vol * dNow;
    const defectsTgt = vol * dTgt;
    const avoidedDefects = Math.max(0, defectsNow - defectsTgt);
    const qualitySavingsPerMonth = avoidedDefects * cNow;

    const totalSavingsPerMonth = costSavingsPerMonth + qualitySavingsPerMonth;
    const totalSavingsHorizon = totalSavingsPerMonth * horizon;

    const netBenefit = totalSavingsHorizon - setup;
    const roi = setup > 0 ? (netBenefit / setup) : Infinity;
    const paybackMonths = totalSavingsPerMonth > 0 ? (setup / totalSavingsPerMonth) : Infinity;

    return {
      baseMonthlyCost, targetMonthlyCost, costSavingsPerMonth,
      defectsNow, defectsTgt, qualitySavingsPerMonth,
      totalSavingsPerMonth, totalSavingsHorizon, netBenefit, roi, paybackMonths
    };
  }, [volume, currentCpu, targetCpu, defectNow, defectTarget, pilotCost, months]);

  const fmt = (n: Num, d = 2) => (Number.isFinite(n) ? n : 0).toLocaleString(undefined, { minimumFractionDigits: d, maximumFractionDigits: d });
  const fmtMoney = (n: Num) => `$${fmt(n, 2)}`;

  return (
    <main>
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">ROI Calculator</h1>
          <p className="mt-4 max-w-3xl text-white/80">Directional estimate for pilots and programs. Replace placeholders with your real numbers.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#inputs">Inputs</a>
            <a className="btn-outline" href="#results">Results</a>
            <a className="btn-primary" href="/templates/roi-model-sample.csv" download>Download CSV</a>
          </div>
        </div>
      </section>

      <section id="inputs" className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h2 className="font-semibold">Inputs (Monthly)</h2>
          <div className="grid md:grid-cols-2 gap-3 mt-4">
            <label className="grid gap-1"><span className="text-sm text-slate-600">Volume (units)</span>
              <input className="rounded-xl px-4 py-3 border" value={volume} onChange={e=>setVolume(e.target.value)} /></label>
            <label className="grid gap-1"><span className="text-sm text-slate-600">Current Cost / Unit ($)</span>
              <input className="rounded-xl px-4 py-3 border" value={currentCpu} onChange={e=>setCurrentCpu(e.target.value)} /></label>
            <label className="grid gap-1"><span className="text-sm text-slate-600">Target Cost / Unit ($)</span>
              <input className="rounded-xl px-4 py-3 border" value={targetCpu} onChange={e=>setTargetCpu(e.target.value)} /></label>
            <label className="grid gap-1"><span className="text-sm text-slate-600">Current Defect Rate (%)</span>
              <input className="rounded-xl px-4 py-3 border" value={defectNow} onChange={e=>setDefectNow(e.target.value)} /></label>
            <label className="grid gap-1"><span className="text-sm text-slate-600">Target Defect Rate (%)</span>
              <input className="rounded-xl px-4 py-3 border" value={defectTarget} onChange={e=>setDefectTarget(e.target.value)} /></label>
            <label className="grid gap-1"><span className="text-sm text-slate-600">One-Time Pilot Cost ($)</span>
              <input className="rounded-xl px-4 py-3 border" value={pilotCost} onChange={e=>setPilotCost(e.target.value)} /></label>
            <label className="grid gap-1"><span className="text-sm text-slate-600">Horizon (months)</span>
              <input className="rounded-xl px-4 py-3 border" value={months} onChange={e=>setMonths(e.target.value)} /></label>
          </div>
          <p className="text-xs text-slate-500 mt-3">Directional model only. Use your SOW for binding commercials.</p>
        </article>

        <aside className="card">
          <h3 className="font-semibold">Snapshot</h3>
          <ul className="mt-3 text-slate-700 text-sm space-y-2">
            <li>Base Monthly Cost: <strong>{fmtMoney(model.baseMonthlyCost)}</strong></li>
            <li>Target Monthly Cost: <strong>{fmtMoney(model.targetMonthlyCost)}</strong></li>
            <li>Cost Savings / Month: <strong>{fmtMoney(model.costSavingsPerMonth)}</strong></li>
            <li>Defects Now  Target: <strong>{fmt(model.defectsNow,0)}</strong>  <strong>{fmt(model.defectsTgt,0)}</strong></li>
            <li>Quality Savings / Month: <strong>{fmtMoney(model.qualitySavingsPerMonth)}</strong></li>
          </ul>
        </aside>
      </section>

      <section id="results" className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-3 gap-6">
          <article className="p-4 rounded-2xl border bg-white">
            <div className="text-xs text-slate-500">Total Savings (Horizon)</div>
            <div className="text-2xl font-semibold mt-1">{fmtMoney(model.totalSavingsHorizon)}</div>
          </article>
          <article className="p-4 rounded-2xl border bg-white">
            <div className="text-xs text-slate-500">Net Benefit (After Setup)</div>
            <div className={"text-2xl font-semibold mt-1 " + (model.netBenefit >= 0 ? "text-emerald-700" : "text-rose-700")}>
              {fmtMoney(model.netBenefit)}
            </div>
          </article>
          <article className="p-4 rounded-2xl border bg-white">
            <div className="text-xs text-slate-500">ROI (Net / Setup)</div>
            <div className="text-2xl font-semibold mt-1">
              {Number.isFinite(model.roi) ? (model.roi*100).toFixed(0) + "%" : ""}
            </div>
          </article>
        </div>

        <div className="container pb-12">
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <article className="card">
              <h3 className="font-semibold">Monthly Savings</h3>
              <ul className="mt-3 text-slate-700 text-sm space-y-2">
                <li>Cost Savings / Month: <strong>{fmtMoney(model.costSavingsPerMonth)}</strong></li>
                <li>Quality Savings / Month: <strong>{fmtMoney(model.qualitySavingsPerMonth)}</strong></li>
                <li>Total Savings / Month: <strong>{fmtMoney(model.totalSavingsPerMonth)}</strong></li>
              </ul>
            </article>
            <article className="card">
              <h3 className="font-semibold">Payback</h3>
              <p className="mt-2 text-slate-700 text-sm">Estimated payback: <strong>{Number.isFinite(model.paybackMonths) ? model.paybackMonths.toFixed(1) + " months" : ""}</strong></p>
              <p className="text-xs text-slate-500 mt-2">Simple payback shown (no discount rate).</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

