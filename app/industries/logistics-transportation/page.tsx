import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Logistics & Transportation | Tecronix",
  description:
    "Staffing and managed services for fulfillment, exceptions, carrier ops, claims, customs, and network control towers-anchored by SLAs, QA, and dashboards."
};
type Bullet = string;
const painPoints: Bullet[] = [
  "Fulfillment and wave exceptions piling up; miss-sorts and late handoffs",
  "Carrier EDD promise misses; WISMO spikes drive DSAT and callbacks",
  "Claims backlog and leakage; evidence packs inconsistent by carrier",
  "Dock/yard visibility gaps; detention/demurrage not reclaimed",
  "Customs/brokerage documentation defects causing holds and fees",
  "Fragmented reporting; no single view of OTIF and cost-to-serve"
];
const rolesWeStaff: Bullet[] = [
  "Fulfillment exceptions desk (pick/pack/ship, wave restarts, ASN fixes)",
  "Transportation control tower (TMS monitors, ETA/EDD updates, re-route)",
  "Carrier ops coordinators (tender, track & trace, POD validation)",
  "Claims & damages desk, loss prevention evidence assembly",
  "Freight audit & pay associates; invoice reconciliation",
  "Customs/brokerage docs QA (commercial inv., HS codes, origin, COO)"
];
const outcomes: Bullet[] = [
  "OTIF with proactive exception handling and ETA recalculation",
  "WISMO deflection via proactive notifications & self-serve tracking",
  "Claims cycle-time  and recovery  with evidence templates",
  "Freight audit recoveries ; duplicate/overbill detection",
  "Customs hold rate  with document QA and broker SLAs",
  "Unified dashboards: promise-keep, cost-to-serve, lane heatmaps"
];
const tools: Bullet[] = [
  "WMS/TMS: Manhattan, Blue Yonder, Oracle, SAP, Project44, FourKites",
  "Carrier portals & EDI/X12 (204/214/210), API event streams",
  "Parcel: UPS/FedEx/USPS/DHL consoles; label/manifest systems",
  "Freight audit & pay platforms; AP automation",
  "Brokerage/customs: Descartes, WiseTech, in-house systems",
  "BI: Power BI, Tableau, Looker; evidence in SharePoint/Confluence"
];
const compliance: Bullet[] = [
  "Role-based access; JML; least-privilege credentials per portal",
  "QA sampling with AQL; defect classes tied to SOPs and carrier SLAs",
  "Evidence tiles for claims, OS&D photos, POD, weigh/inspect docs",
  "Change control for carrier policy/version and access rotations",
  "Incident Response runbooks and continuity for peak season"
];
const kpis: Bullet[] = [
  "OTIF/Promise keep; EDD variance; on-time pickup/delivery",
  "Exception burn-down; p90 cycle times; re-route saves",
  "Claims recovery rate; cycle-time; leakage %",
  "Freight audit recovery; duplicate/overbill catch rate",
  "Customs hold rate; doc defect rate; clearance cycle-time",
  "Cost-to-serve by lane/customer; DSAT and WISMO deflection"
];
export default function LogisticsTransportationPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Logistics &amp; Transportation</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Keep promises and costs in line-from fulfillment and carrier ops to claims, customs, and control towers-
            with staffing or outcome SLAs, QA, and dashboards.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#problems">Problems We Solve</a>
            <a className="btn-outline" href="#capabilities">Capabilities</a>
            <a className="btn-primary" href="/rfp">Start an RFP</a>
          </div>
        </div>
      </section>
      {/* PROBLEMS & ROLES */}
      <section id="problems" className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <div className="font-semibold">Typical Pain Points</div>
          <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
            {painPoints.map(p => <li key={p}>{p}</li>)}
          </ul>
        </article>
        <article className="card">
          <div className="font-semibold">Roles We Staff</div>
          <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
            {rolesWeStaff.map(r => <li key={r}>{r}</li>)}
          </ul>
          <div className="mt-4 flex gap-3">
            <a className="btn-outline" href="/services/staffing/staff-augmentation">Staffing</a>
            <a className="btn-outline" href="/services/managed-services">Managed Services</a>
          </div>
        </article>
      </section>
      {/* OUTCOMES & CONTROLS */}
      <section id="capabilities" className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-2 gap-10">
          <article className="card">
            <h2 className="font-semibold">Outcomes &amp; Examples</h2>
            <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
              {outcomes.map(o => <li key={o}>{o}</li>)}
            </ul>
            <div className="mt-4 flex gap-3">
              <a className="btn-outline" href="/case-studies">Case Studies</a>
              <a className="btn-primary" href="/employers/compare-models">Compare Models</a>
            </div>
          </article>
          <article className="card">
            <h3 className="font-semibold">Controls &amp; Compliance</h3>
            <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
              {compliance.map(c => <li key={c}>{c}</li>)}
            </ul>
            <div className="mt-4 flex gap-3">
              <a className="btn-outline" href="/trust">Trust Center</a>
              <a className="btn-outline" href="/security/incident-response">Incident Response</a>
              <a className="btn-outline" href="/security/sub-processors">Sub-Processors</a>
            </div>
          </article>
        </div>
      </section>
      {/* TOOLS & KPIs */}
      <section className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h2 className="font-semibold">Tooling Ecosystem</h2>
          <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
            {tools.map(t => <li key={t}>{t}</li>)}
          </ul>
        </article>
        <article className="card">
          <h2 className="font-semibold">KPIs We Track</h2>
          <ul className="mt-3 text-slate-700 text-sm space-y-2 list-disc pl-5">
            {kpis.map(k => <li key={k}>{k}</li>)}
          </ul>
        </article>
      </section>
      {/* PROGRAM SHAPES */}
      <section className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-3 gap-6">
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Staffing</div>
            <p className="muted text-sm mt-2">Exceptions desks, control tower monitors, claims, and freight AP with QA sampling.</p>
            <a className="btn-outline mt-3" href="/services/staffing/staff-augmentation">Explore</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Managed Services</div>
            <p className="muted text-sm mt-2">Outcome SLAs (OTIF, EDD variance, claims cycle-time/recovery) with dashboards.</p>
            <a className="btn-outline mt-3" href="/services/managed-services">Compare</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Consulting</div>
            <p className="muted text-sm mt-2">Diagnostics to design promise-keep playbooks, surge buffers, and evidence kits.</p>
            <a className="btn-outline mt-3" href="/services/consulting">Diagnostics</a>
          </article>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Keep promises. Cut leakage.</h2>
            <p className="text-slate-700 mt-1">Well propose staffing or outcome SLAs for exceptions, carrier ops, claims, and customs.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/rfp">Start an RFP</a>
            <a className="btn-primary" href="/contact">Talk to Logistics Lead</a>
          </div>
        </div>
      </section>
    </main>
  );
}

