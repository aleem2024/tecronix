import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsible Disclosure | Tecronix",
  description: "Guidelines for reporting security issues to Tecronix. Scope, safe harbor, non-eligibility, and how to contact us."
};

const scope = [
  "Public website and related assets",
  "Client/candidate portals we host (if applicable)  only with your own test data/accounts",
  "Out of scope: third-party services we do not control, physical security, and social engineering"
];

const nonEligible = [
  "Clickjacking on pages with no sensitive actions",
  "Self-XSS or issues requiring victim collaboration",
  "Rate limiting or lack of best-practice headers alone",
  "Disclosure of public/low-sensitivity metadata without impact",
  "Automated scanning that causes service degradation"
];

const rules = [
  "Do not access, modify, or exfiltrate data that is not yours.",
  "Do not impact availability or reliability (no DoS/DDoS).",
  "Give us reasonable time to remediate before public disclosure.",
  "Follow applicable laws and do not violate privacy or safety."
];

export default function ResponsibleDisclosurePage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Responsible Disclosure</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            We appreciate coordinated security research and responsible reporting. Heres how to reach us and whats in scope.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="#how">How to Report</a>
            <a className="btn-outline" href="#scope">Scope</a>
            <a className="btn-primary" href="/keys/pgp.asc">PGP Key</a>
          </div>
        </div>
      </section>

      {/* HOW TO REPORT */}
      <section id="how" className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h2 className="font-semibold">How to Report</h2>
          <ol className="mt-3 list-decimal pl-6 text-slate-700 text-sm space-y-2">
            <li>Email <a className="underline" href="mailto:security@tecronix.com">security@tecronix.com</a> with a clear summary and steps to reproduce.</li>
            <li>Optionally encrypt with our <a className="underline" href="/keys/pgp.asc">PGP public key</a>.</li>
            <li>Include impact, affected URLs, screenshots or request/response snippets (redact secrets).</li>
          </ol>
          <div className="mt-4 flex gap-3">
            <a className="btn-outline" href="/templates/vuln-report.md" download>Download Report Template</a>
            <a className="btn-primary" href="mailto:security@tecronix.com">Email Security</a>
          </div>
        </article>
        <article className="card bg-slate-50">
          <h3 className="font-semibold">Safe Harbor</h3>
          <p className="mt-2 text-sm text-slate-700">
            If you follow these guidelines, we will not pursue legal action regarding your research. This does not grant permission
            to access data that is not yours or to violate any laws. We ask for a reasonable disclosure window to remediate.
          </p>
        </article>
      </section>

      {/* SCOPE */}
      <section id="scope" className="container py-12 grid lg:grid-cols-2 gap-10">
        <article className="card">
          <h2 className="font-semibold">In Scope (Examples)</h2>
          <ul className="mt-3 text-slate-700 text-sm space-y-2">
            {scope.map(item => <li key={item}>{item}</li>)}
          </ul>
        </article>
        <article className="card">
          <h2 className="font-semibold">Not Eligible</h2>
          <ul className="mt-3 text-slate-700 text-sm space-y-2">
            {nonEligible.map(item => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </section>

      {/* RULES */}
      <section className="bg-slate-100">
        <div className="container py-12">
          <h2>Rules of Engagement</h2>
          <ul className="mt-3 text-slate-700 text-sm space-y-2">
            {rules.map(r => <li key={r}>{r}</li>)}
          </ul>
          <p className="text-xs text-slate-500 mt-3">
            We currently do not run a public bug bounty program; discretionary thank-yous may be offered for impactful reports.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Found a security issue?</h2>
            <p className="text-slate-700 mt-1">Email our Security team  we appreciate your help keeping users safe.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-outline" href="/keys/pgp.asc">PGP Key</a>
            <a className="btn-primary" href="mailto:security@tecronix.com">Email Security</a>
          </div>
        </div>
      </section>
    </main>
  );
}



