export const metadata = { title: 'Whitepapers & eBooks | Tecronix', description: 'Deeper dives into operating models and outcomes.' };
const docs = ['operating-models-guide','cx-metrics-handbook','rcm-automation-blueprint','data-governance-starter','outsourcing-risk-controls'];
export default function Page(){ return (<main className="prose mx-auto max-w-4xl px-6 py-10"><h1>Whitepapers &amp; eBooks</h1><ul>{docs.map(s => (<li key={s}><a href={'/resources/whitepapers/' + s}>{s.replaceAll('-', ' ')}</a></li>))}</ul></main>); }
