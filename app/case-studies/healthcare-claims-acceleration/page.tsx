export const metadata = {
  title: 'Healthcare RCM: Claims Acceleration | Case Study | Tecronix',
  description: 'Reduced denial cycle time and increased clean-claim rates with SOPs and QA.',
};
export default function Page() {
  return (
    <main className="prose mx-auto max-w-3xl px-6 py-10">
      <p><a href="/case-studies">← Back to Case Studies</a></p>
      <h1>Healthcare RCM: Claims Acceleration</h1>
      <p className="lead"><strong>Industry:</strong> Healthcare - Reduced denial cycle time and increased clean-claim rates with SOPs and QA.</p>
      <h2>Challenge</h2>
      <p>Legacy processes and capacity constraints were driving missed SLAs, inconsistent quality, and rising costs.</p>
      <h2>Solution</h2>
      <ul>
        <li>Built denial taxonomy and intake SOPs</li>
        <li>Introduced two-step QA with exception queues</li>
        <li>Weekly payer-specific playbooks</li>
      </ul>
      <h2>Outcomes</h2>
      <ul>
        <li>22% faster denial resolution</li>
        <li>Clean-claim rate +9pp</li>
        <li>Rework -18%</li>
      </ul>
      <h2>Delivery &amp; Stack</h2>
      <ul>
        <li>RCM platform</li>
        <li>QA worksheets</li>
        <li>Dashboarding</li>
      </ul>
      <h2>Why it worked</h2>
      <p>Clear SLAs, layered QA, and weekly governance created a tight feedback loop between operations, technology, and stakeholders.</p>
    </main>
  );
}
