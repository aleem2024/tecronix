export const metadata = {
  title: 'Logistics: Ops Cost Reduction | Case Study | Tecronix',
  description: 'Lowered cost per shipment via data cleanup and WMS support.',
};
export default function Page() {
  return (
    <main className="prose mx-auto max-w-3xl px-6 py-10">
      <p><a href="/case-studies">← Back to Case Studies</a></p>
      <h1>Logistics: Ops Cost Reduction</h1>
      <p className="lead"><strong>Industry:</strong> Logistics - Lowered cost per shipment via data cleanup and WMS support.</p>
      <h2>Challenge</h2>
      <p>Legacy processes and capacity constraints were driving missed SLAs, inconsistent quality, and rising costs.</p>
      <h2>Solution</h2>
      <ul>
        <li>SKU/location data hygiene sprints</li>
        <li>WMS pick/pack playbooks</li>
        <li>Vendor SLA alignment</li>
      </ul>
      <h2>Outcomes</h2>
      <ul>
        <li>Cost/shipment -18%</li>
        <li>Dock-to-stock -12%</li>
        <li>Pick errors -28%</li>
      </ul>
      <h2>Delivery &amp; Stack</h2>
      <ul>
        <li>WMS/TMS</li>
        <li>Data quality checks</li>
        <li>Ops dashboards</li>
      </ul>
      <h2>Why it worked</h2>
      <p>Clear SLAs, layered QA, and weekly governance created a tight feedback loop between operations, technology, and stakeholders.</p>
    </main>
  );
}
