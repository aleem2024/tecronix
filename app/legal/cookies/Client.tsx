"use client";
import { useEffect, useState } from "react";

type Prefs = { required: boolean; analytics: boolean; marketing: boolean; lastUpdated?: string };
const STORAGE_KEY = "tx_cookie_prefs_v1";

function loadPrefs(): Prefs {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { required: true, analytics: false, marketing: false };
    const p = JSON.parse(raw);
    return { required: true, analytics: !!p.analytics, marketing: !!p.marketing, lastUpdated: p.lastUpdated };
  } catch { return { required: true, analytics: false, marketing: false }; }
}
function persistPrefs(p: Prefs) {
  const copy = { ...p, required: true, lastUpdated: new Date().toISOString() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(copy));
  document.cookie = `tx_analytics=${copy.analytics ? "1" : "0"}; path=/; max-age=${60*60*24*180}`;
  document.cookie = `tx_marketing=${copy.marketing ? "1" : "0"}; path=/; max-age=${60*60*24*180}`;
}

export default function CookieClient() {
  const [prefs, setPrefs] = useState<Prefs>({ required: true, analytics: false, marketing: false });
  const [saved, setSaved] = useState(false);
  useEffect(() => { setPrefs(loadPrefs()); }, []);
  const save = () => { persistPrefs(prefs); setSaved(true); setTimeout(()=>setSaved(false), 2500); };
  const acceptAll = () => { const p = { required: true, analytics: true, marketing: true }; setPrefs(p); persistPrefs(p); setSaved(true); setTimeout(()=>setSaved(false), 2500); };
  const rejectAll = () => { const p = { required: true, analytics: false, marketing: false }; setPrefs(p); persistPrefs(p); setSaved(true); setTimeout(()=>setSaved(false), 2500); };

  return (
    <main>
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Cookie Notice & Preferences</h1>
          <p className="mt-4 max-w-3xl text-white/80">We use necessary cookies, and with your permission analytics/marketing cookies.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#what">What We Use</a>
            <a className="btn-outline" href="#manage">Manage Preferences</a>
            <a className="btn-primary" href="/legal/privacy">Privacy Policy</a>
          </div>
        </div>
      </section>

      <section id="what" className="container py-12 grid lg:grid-cols-3 gap-6">
        <article className="card"><div className="font-semibold">Strictly Necessary</div><p className="muted text-sm mt-2">Required for basic site functions.</p></article>
        <article className="card"><div className="font-semibold">Analytics (Optional)</div><p className="muted text-sm mt-2">Aggregated usage metrics.</p></article>
        <article className="card"><div className="font-semibold">Marketing (Optional)</div><p className="muted text-sm mt-2">Campaign performance.</p></article>
      </section>

      <section id="manage" className="bg-slate-100">
        <div className="container py-12">
          <h2>Manage Preferences</h2>
          <div className="mt-6 grid lg:grid-cols-2 gap-10">
            <article className="card"><div className="flex items-center justify-between"><div className="font-semibold">Strictly Necessary</div><span className="badge">Always On</span></div></article>
            <article className="card">
              <div className="flex items-center justify-between">
                <div className="font-semibold">Analytics</div>
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" checked={prefs.analytics} onChange={e=>setPrefs(p=>({ ...p, analytics: e.target.checked }))} />
                  <span className="text-sm">Allow</span>
                </label>
              </div>
            </article>
            <article className="card">
              <div className="flex items-center justify-between">
                <div className="font-semibold">Marketing</div>
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" checked={prefs.marketing} onChange={e=>setPrefs(p=>({ ...p, marketing: e.target.checked }))} />
                  <span className="text-sm">Allow</span>
                </label>
              </div>
            </article>
            <aside className="card bg-slate-50">
              <div className="font-semibold">Your Choices</div>
              <ul className="mt-3 text-slate-700 text-sm space-y-2">
                <li>Analytics: <strong>{prefs.analytics ? "On" : "Off"}</strong></li>
                <li>Marketing: <strong>{prefs.marketing ? "On" : "Off"}</strong></li>
                <li className="text-xs text-slate-500">{prefs.lastUpdated ? `Last updated: ${new Date(prefs.lastUpdated).toLocaleString()}` : "Not saved yet"}</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="btn-outline" onClick={rejectAll}>Reject All</button>
                <button className="btn-outline" onClick={acceptAll}>Accept All</button>
                <button className="btn-primary" onClick={save}>Save Choices</button>
              </div>
              {saved && <div className="mt-3 text-emerald-700 text-sm">Preferences saved.</div>}
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
