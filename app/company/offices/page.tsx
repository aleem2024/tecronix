export const metadata = {
  title: 'Offices & Locations | tecronix USA',
  description: 'Where we operate and how we support clients.',
};
const locations = [
  { city: 'New York, NY',     role: 'HQ & Client Services' },
  { city: 'Austin, TX',       role: 'Engineering & Delivery' },
  { city: 'Phoenix, AZ',      role: 'Finance & Operations' },
  { city: 'Remote (US-wide)', role: 'Distributed Teams' }
];
export default function Page() {
  return (
    <main className="prose mx-auto max-w-4xl px-6 py-10">
      <h1>Offices & Locations</h1>
      <ul>
        {locations.map(l => (<li key={l.city}><strong>{l.city}</strong> - {l.role}</li>))}
      </ul>
      <p>We also support hybrid and nearshore teams on request.</p>
    </main>
  );
}

