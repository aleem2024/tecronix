import type { Metadata } from "next";
import jobs from "../../../lib/jobs/data";

export async function generateStaticParams() {
  return jobs.map(j => ({ id: encodeURIComponent(j.id) }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const id = decodeURIComponent(params.id);
  const job = jobs.find(j => j.id === id);
  const title = job ? `${job.title} — TalentX Jobs` : "Job Not Found | TalentX";
  const description = job ? `${job.title} at TalentX — Apply now.` : "The requested job could not be found.";
  return { title, description };
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const id = decodeURIComponent(params.id);
  const job = jobs.find(j => j.id === id);
  if (!job) {
    return (
      <main className="container py-16">
        <h1>Job Not Found</h1>
        <p className="muted mt-2">The requested job could not be found.</p>
      </main>
    );
  }

  return (
    <main>
      <section className="bg-slate-900 text-white">
        <div className="container py-14">
          <nav className="text-white/70 text-sm">
            <a className="underline" href="/jobs">Jobs</a> / {job.title}
          </nav>
          <h1 className="mt-2 max-w-4xl">{job.title}</h1>
          <div className="mt-3 text-white/80">{job.location} · {job.category} · {job.type}</div>
        </div>
      </section>

      <section className="container py-10 grid md:grid-cols-3 gap-10">
        <article className="md:col-span-2">
          <h2>About this role</h2>
          <p className="mt-3 text-slate-700">{job.description}</p>
        </article>
        <aside className="md:col-span-1">
          <div className="card">
            <div className="font-semibold">Key Details</div>
            <ul className="mt-3 text-slate-700 text-sm space-y-2">
              <li><strong>Location:</strong> {job.location}</li>
              <li><strong>Type:</strong> {job.type}</li>
              <li><strong>Category:</strong> {job.category}</li>
            </ul>
            <a href="/job-seekers#upload" className="btn-primary mt-4 inline-block w-full text-center">Apply / Upload Resume</a>
            <a href="/jobs" className="btn-outline mt-2 inline-block w-full text-center">Back to Jobs</a>
          </div>
        </aside>
      </section>
    </main>
  );
}