export const metadata = {
  title: 'Help Center - Candidates | Tecronix',
  description: 'FAQs for applicants and contractors.',
};
const faqs = [
  { slug: 'faq-01', q: 'How do I apply to a role?' },
  { slug: 'faq-02', q: 'What does Temp-to-Hire mean?' },
  { slug: 'faq-03', q: 'How are interviews scheduled?' },
  { slug: 'faq-04', q: 'When do I get paid?' },
  { slug: 'faq-05', q: 'How do you handle my data and privacy?' }
];
export default function Page() {
  return (
    <main className="prose mx-auto max-w-4xl px-6 py-10">
      <p><a href="/support/help-center">← Help Center</a></p>
      <h1>Candidates - FAQs</h1>
      <ul>
        {faqs.map(f => (<li key={f.slug}><a href={'/support/help-center/candidates/' + f.slug}>{f.q}</a></li>))}
      </ul>
    </main>
  );
}
