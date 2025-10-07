export const metadata = {
  title: 'Technology: DevOps Velocity | Case Study | Tecronix',
  description: 'Improved time-to-ship with pod model and pipeline quality gates.',
};
export default function Page() {
  return (
    <main className="prose mx-auto max-w-3xl px-6 py-10">
      <p><a href="/case-studies">← Back to Case Studies</a></p>
      <h1>Technology: DevOps Velocity</h1>
      <p className="lead"><strong>Industry:</strong> Technology - Improved time-to-ship with pod model and pipeline quality gates.</p>
      <h2>Challenge</h2>
      <p>Legacy processes and capacity constraints were driving missed SLAs, inconsistent quality, and rising costs.</p>
      <h2>Solution</h2>
      <ul>
        <li>Pod operating model</li>
        <li>DOR/DEF definitions</li>
        <li>CI checks & contract tests</li>
      </ul>
      <h2>Outcomes</h2>
      <ul>
        <li>Lead time -35%</li>
        <li>Change fail rate -22%</li>
        <li>MTTR -28%</li>
      </ul>
      <h2>Delivery &amp; Stack</h2>
      <ul>
        <li>CI/CD</li>
        <li>IaC</li>
        <li>Pact/contract testing</li>
      </ul>
      <h2>Why it worked</h2>
      <p>Clear SLAs, layered QA, and weekly governance created a tight feedback loop between operations, technology, and stakeholders.</p>
    </main>
  );
}
