export const metadata = {
  title: 'Leadership | Tecronix',
  description: 'Meet the team behind Tecronix.',
};
const leaders = [
  { slug: 'ceo-alex-morgan',  name: 'Alex Morgan',  title: 'Chief Executive Officer' },
  { slug: 'coo-jordan-lee',   name: 'Jordan Lee',   title: 'Chief Operating Officer' },
  { slug: 'cfo-riley-patel',  name: 'Riley Patel',  title: 'Chief Financial Officer' },
  { slug: 'cto-sam-chen',     name: 'Sam Chen',     title: 'Chief Technology Officer' },
  { slug: 'chro-taylor-reed', name: 'Taylor Reed',  title: 'Chief People Officer' }
];
export default function Page() {
  return (
    <main className="prose mx-auto max-w-4xl px-6 py-10">
      <h1>Leadership</h1>
      <ul>
        {leaders.map(p => (
          <li key={p.slug}>
            <a href={'/company/leadership/' + p.slug}>{p.name}</a> - {p.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
