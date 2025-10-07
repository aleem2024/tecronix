export const metadata = {
  title: 'Help Center - Employers | Tecronix',
  description: 'FAQs for hiring managers and program owners.',
};
const faqs = [
  { slug: 'faq-01', q: 'What engagement models do you offer?' },
  { slug: 'faq-02', q: 'How quickly can a team start?' },
  { slug: 'faq-03', q: 'What SLAs/SLOs can you commit to?' },
  { slug: 'faq-04', q: 'How do billing and approvals work?' },
  { slug: 'faq-05', q: 'What security and compliance controls are in place?' }
];
export default function Page() {
  return (
    <main className="prose mx-auto max-w-4xl px-6 py-10">
      <p><a href="/support/help-center">← Help Center</a></p>
      <h1>Employers - FAQs</h1>
      <ul>
        {faqs.map(f => (<li key={f.slug}><a href={'/support/help-center/employers/' + f.slug}>{f.q}</a></li>))}
      </ul>
    </main>
  );
}
