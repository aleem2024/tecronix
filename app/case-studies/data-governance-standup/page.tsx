export const metadata = {
  title: 'Data & Analytics: Governance Standup | Case Study | Tecronix',
  description: 'Established data quality checks and lineage mapping.',
};
export default function Page() {
  return (
    <main className="prose mx-auto max-w-3xl px-6 py-10">
      <p><a href="/case-studies">← Back to Case Studies</a></p>
      <h1>Data & Analytics: Governance Standup</h1>
      <p className="lead"><strong>Industry:</strong> Data & Analytics - Established data quality checks and lineage mapping.</p>
      <h2>Challenge</h2>
      <p>Legacy processes and capacity constraints were driving missed SLAs, inconsistent quality, and rising costs.</p>
      <h2>Solution</h2>
      <ul>
        <li>DQ dimensions & thresholds</li>
        <li>Ownership/RACI</li>
        <li>Incident playbooks</li>
      </ul>
      <h2>Outcomes</h2>
      <ul>
        <li>DQ incidents -40%</li>
        <li>Refresh latency -22%</li>
        <li>Coverage +60%</li>
      </ul>
      <h2>Delivery &amp; Stack</h2>
      <ul>
        <li>Warehouse/Lake</li>
        <li>Catalog/Lineage</li>
        <li>DQ monitors</li>
      </ul>
      <h2>Why it worked</h2>
      <p>Clear SLAs, layered QA, and weekly governance created a tight feedback loop between operations, technology, and stakeholders.</p>
    </main>
  );
}
