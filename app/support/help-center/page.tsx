export const metadata = {
  title: 'Help Center | Tecronix',
  description: 'Answers for candidates and employers about our process, privacy, and support.',
};
export default function Page() {
  const sections = [
    { path: '/support/help-center/candidates', label: 'Candidates' },
    { path: '/support/help-center/employers',  label: 'Employers' }
  ];
  return (
    <main className="prose mx-auto max-w-4xl px-6 py-10">
      <h1>Help Center</h1>
      <p>Find answers, how-tos, and support across Tecronix services.</p>
      <ul>
        {sections.map(s => (<li key={s.path}><a href={s.path}>{s.label}</a></li>))}
      </ul>
      <p>If you can’t find what you need, <a href="/support/contact">contact us</a>.</p>
    </main>
  );
}
