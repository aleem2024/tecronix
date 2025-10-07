import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Staff Augmentation - Calibrated Pods & QA Sampling | Tecronix",
  description:
    "Flexible staffing with calibrated pods, QA sampling (AQL/defect classes), surge buffers, and clear dashboards. Upgrade paths to Managed Services."
};
type Bullet = string;
const whenToUse: Bullet[] = [
  "You need capacity fast with your tools and SOPs",
  "Scope is stable but volumes vary (seasonal, launch, outage)",
  "You want QA sampling and dashboards without outcome SLAs (yet)",
  "You plan to evolve into Managed Services after a pilot"
];
const roles: Bullet[] = [
  "CX (voice/chat/email, social), Back-office exceptions desks",
  "KYC/KYB analysts, Disputes ops, Collections support",
  "Catalog ops, Marketplace compliance, Content moderation",
  "A/R follow-up, AP/AR clerks, Revenue ops assistants",
  "Logistics control tower, Carrier ops, Claims desk",
  "Analysts for QA, WFM, Reporting, Knowledge authors"
];
const qa: Bullet[] = [
  "Defect taxonomy aligned to your policy/version with examples",
  "AQL sampling by lane; calibration cadence and scorecards",
  "Coaching notes tied to defects; recurrence watchlists",
  "Evidence tiles so QA connects to dashboards and audits"
];
const coverage: Bullet[] = [
  "Shift grids and coverage windows sized to forecast error",
  "Surge buffers for launches, promos, storms, or compliance deadlines",
  "Cross-train matrices and backup rotations",
  "Change windows and rollback procedures"
];
const dashboards: Bullet[] = [
  "Definitions travel with each metric to prevent drift",
  "QA pass %, defect mix, rework %, sample sizes",
  "Throughput, cycle-time (p50/p90), backlog aging",
  "Attendance, occupancy, shrink; coaching completion"
];
const upgradePaths: Bullet[] = [
  "Keep staffing; add more lanes and QA depth",
  "Hybrid: staffed QA + client production (quality-as-a-service)",
  "Migrate lane(s) to Managed Services (outcome SLAs + dashboards)"
];
export default function StaffAugPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Staff Augmentation</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Scale capacity on your stack with calibrated pods, QA sampling, and dashboards - then upgrade lanes to outcomes when ready.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#when">When to Use</a>
            <a className="btn-outline" href="#how">How It Works</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
      {/* WHEN */}
      <section id="when" className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h2 className="font-semibold">When to Use Staffing</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {whenToUse.map(w => <li key={w}>{w}</li>)}
          </ul>
        </article>
        <article className="card">
          <h2 className="font-semibold">Roles We Commonly Staff</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            {roles.map(r => <li key={r}>{r}</li>)}
          </ul>
        </article>
      </section>
      {/* HOW */}
      <section id="how" className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-3 gap-8">
          <article className="card">
            <div className="text-xs text-slate-500">Quality</div>
            <div className="text-lg font-semibold mt-1">QA Sampling</div>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
              {qa.map(q => <li key={q}>{q}</li>)}
            </ul>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Coverage</div>
            <div className="text-lg font-semibold mt-1">Shifts &amp; Buffers</div>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
              {coverage.map(c => <li key={c}>{c}</li>)}
            </ul>
            <div className="mt-4">
              <a className="btn-outline" href="/tools/coverage-calculator">Coverage Calculator</a>
            </div>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Visibility</div>
            <div className="text-lg font-semibold mt-1">Dashboards</div>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
              {dashboards.map(d => <li key={d}>{d}</li>)}
            </ul>
          </article>
        </div>
      </section>
      {/* UPGRADE PATHS */}
      <section className="container py-12">
        <h2 className="font-semibold">Upgrade Paths</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {upgradePaths.map(u => (
            <article key={u} className="p-4 rounded-2xl border">
              <p className="text-sm text-slate-700">{u}</p>
            </article>
          ))}
        </div>
      </section>
      {/* MODELS COMPARE */}
      <section className="bg-slate-100">
        <div className="container py-12">
          <h2 className="font-semibold">Compare Models</h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr className="text-left">
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Staffing</th>
                  <th className="px-4 py-3">Managed Services</th>
                  <th className="px-4 py-3">Consulting</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">Commercial</td>
                  <td className="px-4 py-2">Hourly/FTE capacity</td>
                  <td className="px-4 py-2">Per outcome/pack with SLAs</td>
                  <td className="px-4 py-2">Fixed fee</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Quality</td>
                  <td className="px-4 py-2">QA sampling, AQL</td>
                  <td className="px-4 py-2">QA + evidence tiles, incentives</td>
                  <td className="px-4 py-2">Design defect classes & gates</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Dashboards</td>
                  <td className="px-4 py-2">Throughput, QA, backlog</td>
                  <td className="px-4 py-2">SLAs, guarantees, evidence</td>
                  <td className="px-4 py-2">Definitions & blueprint</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex gap-3">
            <a className="btn-outline" href="/employers/compare-models">Full Comparison</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Scale fast. Stay calibrated.</h2>
            <p className="text-slate-700 mt-1">Spin up pods with QA and dashboards now-upgrade lanes to outcomes later.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/rfp">Start an RFP</a>
            <a className="btn-primary" href="/contact">Talk to Staffing Lead</a>
          </div>
        </div>
      </section>
    </main>
  );
}
