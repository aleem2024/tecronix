export const metadata = {
  title: 'Company Timeline | tecronix USA',
  description: 'Milestones that shaped our operating model.',
};
const events = [
  { year: '2019', event: 'Founded with staffing + CX focus' },
  { year: '2021', event: 'Launched managed services pods' },
  { year: '2023', event: 'Expanded data & platform practices' },
  { year: '2024', event: 'Introduced outcome-based pricing' }
];
export default function Page() {
  return (
    <main className="prose mx-auto max-w-4xl px-6 py-10">
      <h1>History & Timeline</h1>
      <ul>
        {events.map(e => (<li key={e.year}><strong>{e.year}</strong> - {e.event}</li>))}
      </ul>
    </main>
  );
}

