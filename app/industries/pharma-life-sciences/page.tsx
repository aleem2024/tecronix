import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pharma & Life Sciences | Tecronix",
  description:
    "Staffing and managed services for pharma, biotech, and med devices-clinical ops support, PV/case processing, regulatory submissions, labeling, RIM data stewardship, MSL/medical info, and QA/CSV with measurable SLAs."
};
type Bullet = string;
const painPoints: Bullet[] = [
  "PV/ICSR surges (literature, spontaneous, solicited) with case aging and compliance risk",
  "Clinical ops document control and TMF completeness gaps (eTMF QC findings)",
  "Submission assembly bottlenecks (Module 1/2/3) and publishing timelines slip",
  "Labeling change control complexity across markets; artwork/versioning errors",
  "RIM/IDMP data quality issues; master data stewardship and lineage gaps",
  "Medical information response backlog and knowledge base drift"
];
const rolesWeStaff: Bullet[] = [
  "Pharmacovigilance Case Processors, Triage/QC, Literature Reviewers",
  "Clinical Operations Assistants, eTMF Specialists, Document Controllers",
  "Regulatory Ops Associates, Submissions Publishers, Labeling Coordinators",
  "RIM/IDMP Data Stewards, Master Data Analysts, CMC Admin Support",
  "Medical Information Specialists, MSL Coordination, Inquiry Response",
  "Quality/CSV Assistants: SOP control, training records, deviation/CAPA admin"
];
const outcomes: Bullet[] = [
  "PV hub: compliant ICSR processing with aging controls and calibrated QC sampling",
  "eTMF QC: completeness  with checklist gates and last-mile document hunts",
  "Submission desk: assembly/publishing turn time ; tracked defects with AQL classes",
  "Labeling change control: artwork proofing workflow, country packs, version audit",
  "RIM data quality: controlled attributes, lineage evidence, and reconciliation rhythm",
  "Med info response: standard letters library, review workflow, and SLA adherence"
];
const tools: Bullet[] = [
  "PV/Case Mgmt: Argus, ArisG, SafetyWorks; Literature: Embase, PubMed tools",
  "eTMF/CTMS: Veeva Vault, Medidata, Oracle; Study tools & portals",
  "RIM/IDMP: Veeva RIM, Ennov, Amplexor; Submissions: eCTD tools (Lorenz, eCTDmanager)",
  "Labeling/artwork: Esko, GLAMS, Veeva; Change control via QMS",
  "QMS/CSV: TrackWise, MasterControl, Veeva QMS; Training: LMS integrations"
];
const compliance: Bullet[] = [
  "GxP-aware processes; role-based access with JML and periodic reviews",
  "PV timeliness (ICSR/PSUR/PADER) and QC sampling with calibrated defect classes",
  "SOP/version control with change logs; training records tied to effective dates",
  "Audit/inspection readiness: evidence tiles linking artifacts to outcomes",
  "Privacy & data processing aligned to DPA; validated systems and CSV notes"
];
const kpis: Bullet[] = [
  "ICSR cycle time & aging, QC hit rate, regulatory timeliness",
  "eTMF completeness, document QC defects, inspection findings",
  "Submission assembly/publishing TAT, defect density by module",
  "Label change lead time, artwork errors, country pack readiness",
  "RIM attribute completeness, reconciliation exceptions",
  "Med info response SLA, standard letter coverage, escalations"
];
export default function PharmaLifeSciencesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Pharma &amp; Life Sciences</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            PV, clinical, regulatory, labeling, and RIM support with staffing or outcome SLAs.
            We bring SOPs, QA, and dashboards tuned to regulatory timeliness.
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
            <a className="btn-outline" href="/employers">For Employers</a>
            <a className="btn-outline" href="/job-seekers">For Job Seekers</a>
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
            <p className="muted text-sm mt-2">PV, clinical, and reg ops capacity with calibrated QA sampling.</p>
            <a className="btn-outline mt-3" href="/employers">Explore</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Managed Services</div>
            <p className="muted text-sm mt-2">Outcome SLAs (timeliness, completeness, quality) with evidence dashboards.</p>
            <a className="btn-outline mt-3" href="/employers/compare-models">Compare</a>
          </article>
          <article className="card">
            <div className="text-xs text-slate-500">Model</div>
            <div className="text-xl font-semibold mt-1">Consulting</div>
            <p className="muted text-sm mt-2">Diagnostics to design PV hubs, eTMF QC programs, and RIM stewardship.</p>
            <a className="btn-outline mt-3" href="/consulting/diagnostics">Diagnostics</a>
          </article>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Hit timeliness. Reduce findings.</h2>
            <p className="text-slate-700 mt-1">Well propose staffing or outcome SLAs with PV/regulatory QA and inspection readiness.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/rfp">Start an RFP</a>
            <a className="btn-primary" href="/contact">Talk to Pharma Lead</a>
          </div>
        </div>
      </section>
    </main>
  );
}

