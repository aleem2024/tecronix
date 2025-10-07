export const metadata = {
  title: 'Back Office: SLA Turnaround | Case Study | Tecronix',
  description: 'Hit aggressive turnaround SLAs with exception routing and WIP limits.',
};
export default function Page() {
  return (
    <main className="prose mx-auto max-w-3xl px-6 py-10">
      <p><a href="/case-studies">← Back to Case Studies</a></p>
      <h1>Back Office: SLA Turnaround</h1>
      <p className="lead"><strong>Industry:</strong> Operations - Hit aggressive turnaround SLAs with exception routing and WIP limits.</p>
      <h2>Challenge</h2>
      <p>Legacy processes and capacity constraints were driving missed SLAs, inconsistent quality, and rising costs.</p>
      <h2>Solution</h2>
      <ul>
        <li>WIP limits per queue</li>
        <li>Aging dashboards</li>
        <li>Daily standups & recoveries</li>
      </ul>
      <h2>Outcomes</h2>
      <ul>
        <li>SLA attainment 98%+</li>
        <li>Aging &gt;7 days -45%</li>
        <li>Reopens -19%</li>
      </ul>
      <h2>Delivery &amp; Stack</h2>
      <ul>
        <li>Ticketing/Case</li>
        <li>WFM</li>
        <li>QA toolkit</li>
      </ul>
      <h2>Why it worked</h2>
      <p>Clear SLAs, layered QA, and weekly governance created a tight feedback loop between operations, technology, and stakeholders.</p>
    </main>
  );
}
