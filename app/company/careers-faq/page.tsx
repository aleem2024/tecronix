export const metadata = {
  title: 'Careers FAQ | Tecronix',
  description: 'Answers for applicants and new hires.',
};
const faqs = [
  { q: 'What is your interview process?', a: 'Structured screens, panel interviews, and role-specific tasks as needed.' },
  { q: 'Do you hire remote?', a: 'Yes-many roles are remote or hybrid based on client needs.' },
  { q: 'What benefits do you offer?', a: 'Health, dental, vision, 401(k), PTO, and learning stipends (role dependent).' },
  { q: 'How do I apply?', a: 'Visit the Jobs page and include the Job ID in your message.' }
];
export default function Page() {
  return (
    <main className="prose mx-auto max-w-4xl px-6 py-10">
      <h1>Careers FAQ</h1>
      {faqs.map((f, i) => (
        <details key={i}><summary>{f.q}</summary><p>{f.a}</p></details>
      ))}
      <p>Don’t see your question? <a href="/support/contact">Contact us</a>.</p>
    </main>
  );
}
