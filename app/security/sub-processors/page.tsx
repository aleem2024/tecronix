import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sub-Processors - Vendor Registry & Regions | Tecronix",
  description:
    "Transparency registry for vendors that may process data on our behalf, including service role, regions, and last update. Updated regularly."
};
type Vendor = {
  name: string;
  role: string;
  region: string;
  notes?: string;
  lastUpdate: string;
};
const vendors: Vendor[] = [
  { name: "AWS", role: "Cloud infrastructure (compute, storage, DB)", region: "US-East, US-West", lastUpdate: "2024-12-01" },
  { name: "Microsoft Azure", role: "Cloud infrastructure (backup, AI services)", region: "US", lastUpdate: "2024-12-01" },
  { name: "Google Workspace", role: "Email, docs, collaboration", region: "US", lastUpdate: "2024-12-01" },
  { name: "Atlassian (Jira/Confluence)", role: "Ticketing, documentation", region: "US", lastUpdate: "2024-12-01" },
  { name: "Twilio", role: "SMS, voice, notifications", region: "US", lastUpdate: "2024-12-01" },
  { name: "Stripe", role: "Billing & payments (PCI-DSS scoped)", region: "US", lastUpdate: "2024-12-01" },
  { name: "Salesforce", role: "CRM, case management", region: "US", lastUpdate: "2024-12-01" },
  { name: "Zendesk", role: "Customer support ticketing (where scoped)", region: "US", lastUpdate: "2024-12-01" }
];
const faq = [
  { q: "How often is this registry updated?", a: "Quarterly, or sooner if a new vendor is onboarded or scope/region changes." },
  { q: "How will we be notified of updates?", a: "Customer notification email and change log entry. Critical changes: 30 days prior notice." },
  { q: "Can vendors be scoped out?", a: "Yes. Depending on your contract, certain vendors can be excluded or restricted by environment." }
];
export default function SubProcessorsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Sub-Processors</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Transparency registry of vendors that may process customer data on our behalf.
            Includes service roles, regions, and last update. Updated regularly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#registry">Registry</a>
            <a className="btn-outline" href="#faq">FAQ</a>
            <a className="btn-primary" href="/contact#trust">Contact Trust</a>
          </div>
        </div>
      </section>
      {/* REGISTRY */}
      <section id="registry" className="container py-12">
        <div className="card overflow-x-auto">
          <h2 className="font-semibold">Vendor Registry</h2>
          <table className="w-full text-sm mt-3">
            <thead className="bg-slate-50">
              <tr className="text-left">
                <th className="px-4 py-3">Vendor</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Region(s)</th>
                <th className="px-4 py-3">Last Update</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map(v => (
                <tr key={v.name} className="border-t align-top">
                  <td className="px-4 py-2 font-medium">{v.name}</td>
                  <td className="px-4 py-2">{v.role}</td>
                  <td className="px-4 py-2">{v.region}</td>
                  <td className="px-4 py-2">{v.lastUpdate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="muted text-xs mt-3">This list may change. Customers will be notified according to contract terms.</p>
        </div>
      </section>
      {/* FAQ */}
      <section id="faq" className="bg-slate-100">
        <div className="container py-12 grid lg:grid-cols-2 gap-10">
          <article className="card">
            <h2 className="font-semibold">FAQs</h2>
            <div className="mt-3 space-y-4">
              {faq.map(f => (
                <div key={f.q}>
                  <div className="font-medium">{f.q}</div>
                  <p className="muted text-sm mt-1">{f.a}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="card">
            <h2 className="font-semibold">Need More?</h2>
            <p className="muted text-sm mt-2">
              For diligence packs, NDAs, or regional hosting requirements, contact our Trust team.
            </p>
            <div className="mt-4 flex gap-3">
              <a className="btn-outline" href="/trust">Trust Center</a>
              <a className="btn-primary" href="/contact#trust">Contact Trust</a>
            </div>
          </article>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Need vendor diligence?</h2>
            <p className="text-slate-700 mt-1">We provide evidence packs, contracts, and security attestations for all listed sub-processors.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/docs/soc-brief.pdf" download>Security Brief</a>
            <a className="btn-primary" href="/contact#trust">Contact Trust</a>
          </div>
        </div>
      </section>
    </main>
  );
}
