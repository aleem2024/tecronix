'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function JobSeekersClient() {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [industry, setIndustry] = useState('All Industries');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSearch = () => {
    const query = new URLSearchParams({ keyword, location, industry }).toString();
    router.push(`/jobs?${query}`);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form); // includes file automatically

    try {
      const res = await fetch('https://formspree.io/f/mdkwdrpd', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        form.reset();
        setFileName(null);
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">For Job Seekers | Find a Job & Get Hired Faster</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Real roles, clear feedback, and a hiring process that respects your time. Browse openings or upload your resume —
            we’ll match you with opportunities across the U.S.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/jobs" className="btn-primary">Browse Open Jobs</a>
            <a href="#upload" className="btn-outline">Upload Your Resume</a>
			<a href="/careers" className="btn-outline">Careers at Tecronix</a>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="container py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ['Technology Roles', 'Engineers, data/AI, cloud/devops, security, product/UX.', '/industries/technology'],
            ['Healthcare Roles', 'RNs, allied, HIM, revenue cycle, access, EHR.', '/industries/healthcare'],
            ['F&A Roles', 'AP/AR, payroll, close, FP&A, audit & controls.', '/industries/finance'],
          ].map(([title, blurb, href]) => (
            <a key={href as string} href={href as string} className="p-6 rounded-2xl border hover:shadow-sm transition block">
              <div className="font-semibold">{title}</div>
              <p className="text-slate-700 mt-2 text-sm">{blurb}</p>
              <div className="text-sm text-slate-600 mt-3">Learn more →</div>
            </a>
          ))}
        </div>
      </section>

      {/* JOB SEARCH STRIP */}
      <section className="container py-6">
        <div className="p-6 rounded-2xl border bg-white">
          <h2>Search Jobs</h2>
          <form className="mt-4 grid md:grid-cols-4 gap-3">
            <input
              className="rounded-xl px-4 py-3 border md:col-span-2"
              placeholder="Keyword (e.g., RN, Backend, AP Specialist)"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <input
              className="rounded-xl px-4 py-3 border"
              placeholder="City, State or Remote"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <select
              className="rounded-xl px-4 py-3 border"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option>All Industries</option>
              <option>Technology</option>
              <option>Healthcare</option>
              <option>Finance & Accounting</option>
              <option>Manufacturing</option>
              <option>Logistics</option>
              <option>Retail & eCom</option>
              <option>Admin & Support</option>
            </select>
            <button onClick={handleSearch} type="button" className="btn-primary">Search</button>
          </form>
        </div>
      </section>

      {/* UPLOAD RESUME */}
      <section id="upload" className="container py-12 grid md:grid-cols-2 gap-10 items-start">
        <article>
          <h2>Upload Your Resume</h2>
          <p className="text-slate-700 mt-2">We’ll review for current and upcoming roles. If there’s a fit, a recruiter will reach out.</p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 grid gap-3 p-6 rounded-2xl border bg-white"
            encType="multipart/form-data"
          >
            <input name="first_name" className="rounded-xl px-4 py-3 border" placeholder="First name" required />
            <input name="last_name" className="rounded-xl px-4 py-3 border" placeholder="Last name" required />
            <input name="email" type="email" className="rounded-xl px-4 py-3 border" placeholder="Email" required />
            <input name="phone" className="rounded-xl px-4 py-3 border" placeholder="Phone (optional)" />
            <select name="work_model" className="rounded-xl px-4 py-3 border">
              <option>Preferred Work Model: Any</option>
              <option>Remote</option>
              <option>Hybrid</option>
              <option>On-site</option>
            </select>
            <select name="authorization" className="rounded-xl px-4 py-3 border">
              <option>Work Authorization: U.S. Citizen/Green Card</option>
              <option>Work Visa (specify in notes)</option>
              <option>Other (specify in notes)</option>
            </select>
            <textarea
              name="notes"
              className="rounded-xl px-4 py-3 border min-h-[120px]"
              placeholder="Notes (locations, target roles, salary expectations)"
            ></textarea>

            {/* File Upload */}
            <div className="rounded-2xl border border-dashed p-6 text-center">
              <div className="font-medium">Drop your resume here</div>
              <div className="text-sm text-slate-600 mt-1">PDF or DOCX up to 5MB</div>

              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                id="resume-upload"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  setFileName(file ? file.name : null);
                }}
              />

              <label htmlFor="resume-upload" className="btn-outline mt-3 inline-block cursor-pointer">
                Choose File
              </label>

              {fileName && <p className="text-sm text-slate-600 mt-2">📄 {fileName}</p>}
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" id="consent" name="consent" className="h-4 w-4 border rounded" required />
              <label htmlFor="consent" className="text-sm text-slate-700">
                I consent to the <a className="underline" href="/legal/privacy">Privacy Policy</a>.
              </label>
            </div>

            <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-70">
              {status === 'sending' ? 'Submitting...' : 'Submit'}
            </button>

            {status === 'success' && (
              <p className="text-sm text-green-600 mt-2">✅ Resume submitted successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-600 mt-2">❌ Something went wrong. Please try again.</p>
            )}
          </form>
        </article>

        <aside className="p-6 rounded-2xl border bg-slate-50">
          <h3 className="font-semibold">What Happens Next</h3>
          <ol className="mt-3 list-decimal pl-6 space-y-2 text-slate-700 text-sm">
            <li>We screen for current roles and near-term demand.</li>
            <li>If matched, you’ll meet a recruiter to align on preferences.</li>
            <li>We prep you with scorecards and role-relevant interview tips.</li>
            <li>We keep you updated — even if it’s a “not this time.”</li>
          </ol>
          <div className="mt-6">
            <h4 className="font-medium">Resume Tips</h4>
            <ul className="mt-2 list-disc pl-6 text-slate-700 text-sm space-y-1">
              <li>Show measurable outcomes (metrics beat task lists).</li>
              <li>List tools/tech that are current and relevant.</li>
              <li>Keep formatting clean; export to PDF.</li>
            </ul>
          </div>
        </aside>
      </section>

      {/* GUIDES */}
      <section className='container py-12'>
        <h2>Guides for Candidates</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Interviewing with Scorecards','What to expect and how to tell strong evidence-based stories.','#'],
            ['Resume Examples by Role','Engineer, RN, AP Specialist, Supervisor, and more.','#'],
            ['Comp & Offers','Market bands, negotiating respectfully, and benefits 101.','#']
          ].map(([title, blurb, href]) => (
            <a key={title as string} href={href as string} className='p-6 rounded-2xl border hover:shadow-sm transition block'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{blurb}</p>
              <div className='text-sm text-slate-600 mt-3'>Read →</div>
            </a>
          ))}
        </div>
      </section>

      {/* INTERVIEWS */}
      <section id="interviews" className="container py-12 grid lg:grid-cols-2 gap-10">
        <article>
          <h2>Interview Prep</h2>
          <ol className="mt-4 list-decimal pl-6 space-y-2 text-slate-700">
            <li><strong>Expect structure:</strong> scorecards and consistent questions.</li>
            <li><strong>Evidence first:</strong> we’ll ask for examples — outcomes, your role, trade-offs.</li>
            <li><strong>Work samples:</strong> short, practical prompts where applicable.</li>
            <li><strong>Ask us anything:</strong> you’ll get clear timelines and feedback expectations.</li>
          </ol>
        </article>
        <aside className="card bg-slate-50">
          <h3 className="font-semibold">Tips</h3>
          <ul className="mt-3 space-y-2 text-slate-700">
            <li>Bring 3–4 recent wins with measurable impact.</li>
            <li>Be ready to show how you collaborate and make decisions.</li>
            <li>Share what you want to learn next.</li>
          </ul>
        </aside>
      </section>

      {/* COMPENSATION */}
      <section id="compensation" className="container py-12 grid md:grid-cols-2 gap-10">
        <article className="card">
          <h3 className="font-semibold">Compensation & Benefits</h3>
          <p className="mt-3 text-slate-700 text-sm">
            We practice pay transparency and expectation alignment. Share your ranges and constraints; we’ll do the same.
          </p>
          <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-2 text-sm">
            <li>Base, bonus, equity (if applicable)</li>
            <li>Benefits (medical, dental, vision), 401(k)</li>
            <li>PTO, remote/hybrid flexibility</li>
          </ul>
        </article>
        <article className="card">
          <h3 className="font-semibold">Accessibility & Accommodations</h3>
          <p className="mt-3 text-slate-700 text-sm">
            We provide reasonable accommodations throughout the hiring process. Tell us what you need when you apply.
          </p>
        </article>
      </section>

      {/* FAQ */}
      <section className='container py-12'>
        <h2>Candidate FAQs</h2>
        <div className='mt-4 grid md:grid-cols-2 gap-6 text-slate-700'>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Do you charge candidates?</summary>
            <p className='mt-2'>No — never. Our clients pay for staffing and search services.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Will I get feedback?</summary>
            <p className='mt-2'>We share what we can. Expect clear status updates and next steps throughout.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Remote or on-site?</summary>
            <p className='mt-2'>We support remote, hybrid, and on-site roles — depends on the client and role.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>What about pay transparency?</summary>
            <p className='mt-2'>We provide ranges where available and align expectations early.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-slate-100'>
        <div className='container py-12 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <h2>Want us to keep you in mind?</h2>
            <p className='text-slate-700 mt-1'>Upload your resume and set your preferences — we’ll reach out when there’s a match.</p>
          </div>
          <a href='#upload' className='btn-primary'>Upload Resume</a>
        </div>
      </section>
    </main>
  );
}
