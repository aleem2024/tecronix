import type { Metadata } from 'next';





export const metadata: Metadata = {


  title: 'Technical Recruiter — Remote (U.S.) | Tecronix',


  description: 'Source, assess, and close engineers and tech talent using structured, evidence-based hiring. Remote in the U.S. with clear KPIs and modern tools.'


};





export default function JobPage() {


  return (


    <main>


      {/* HEADER */}


      <section className='bg-slate-900 text-white'>


        <div className='container py-14'>


          <nav className='text-white/70 text-sm'><a className='underline' href='/jobs'>Jobs</a> / Technical Recruiter</nav>


          <h1 className='mt-2 max-w-4xl'>Technical Recruiter</h1>


          <div className='mt-3 text-white/80'>Remote (U.S.) · Admin & Support · Full-time</div>


          <div className='mt-6 flex flex-wrap gap-3'>


            <a href='/job-seekers/#upload' className='btn-primary'>Apply Now</a>


            <a href='/job-seekers' className='btn-outline'>Job Seeker Guides</a>


          </div>


        </div>


      </section>





      {/* OVERVIEW */}


      <section className='container py-10 grid md:grid-cols-3 gap-10'>


        <article className='md:col-span-2'>


          <h2>Role Overview</h2>


          <p className='mt-3 text-slate-700'>


            Help us (and our clients) hire high-signal engineers and product talent. You’ll run structured intakes,


            craft evidence-based scorecards, source directly, and guide candidates through a respectful process that


            moves quickly and fairly.


          </p>





          <h3 className='mt-8 font-semibold'>What You’ll Do</h3>


          <ul className='mt-3 list-disc pl-6 text-slate-700 space-y-2'>


            <li>Lead role intake: define outcomes, competencies, and must-have signals</li>


            <li>Source directly via referrals, communities, projects, and calibrated outreach</li>


            <li>Run structured screens; write concise evidence-based summaries</li>


            <li>Partner with hiring managers on interview design and decision hygiene</li>


            <li>Drive close plans with expectation alignment and proactive communication</li>


            <li>Maintain clean pipelines, metrics, and weekly progress notes</li>


          </ul>





          <h3 className='mt-8 font-semibold'>What We’re Looking For</h3>


          <ul className='mt-3 list-disc pl-6 text-slate-700 space-y-2'>


            <li>3+ years recruiting for software engineering and adjacent roles</li>


            <li>Fluency in modern stacks (e.g., React/Next, Node/TypeScript, Java/Kotlin, Go, cloud, data/ML)</li>


            <li>Experience with structured interviews and work-sample assessments</li>


            <li>Strong writing: crisp outreach, summaries, and candidate narratives</li>


            <li>Tools: ATS/CRM, sourcing extensions, scheduling, and analytics</li>


          </ul>





          <h3 className='mt-8 font-semibold'>KPIs</h3>


          <ul className='mt-3 list-disc pl-6 text-slate-700 space-y-2'>


            <li>Qualified submits per week & screen → onsite conversion</li>


            <li>Offer rate and acceptance rate</li>


            <li>Cycle time (intake → offer) and candidate CSAT</li>


            <li>Data hygiene and weekly notes quality</li>


          </ul>





          <h3 className='mt-8 font-semibold'>Compensation & Benefits</h3>


          <p className='mt-3 text-slate-700'>


            Competitive base with performance incentives. Benefits typically include medical/dental/vision, 401(k), PTO,


            and learning stipend. Exact package shared during process.


          </p>





          <h3 className='mt-8 font-semibold'>Equal Opportunity</h3>


          <p className='mt-3 text-slate-700'>


            Tecronix and our clients are equal opportunity employers. We consider qualified applicants without regard to protected characteristics and provide reasonable accommodations.


          </p>


        </article>





        {/* SIDEBAR */}


        <aside className='md:col-span-1'>


          <div className='p-6 rounded-2xl border'>


            <div className='font-semibold'>Key Details</div>


            <ul className='mt-3 text-slate-700 text-sm space-y-2'>


              <li><strong>Location:</strong> Remote (U.S.)</li>


              <li><strong>Type:</strong> Full-time</li>


              <li><strong>Category:</strong> Admin & Support</li>


              <li><strong>Experience:</strong> 3+ years tech recruiting</li>


              <li><strong>Travel:</strong> Occasional team/client onsite (optional)</li>


            </ul>


            <a href='/job-seekers/#upload' className='btn-primary mt-4 inline-block w-full text-center'>Apply Now</a>


            <a href='/jobs' className='btn-outline mt-2 inline-block w-full text-center'>Back to Jobs</a>


          </div>





          <div className='p-6 rounded-2xl border mt-6'>


            <div className='font-semibold'>Referral Bonus</div>


            <p className='mt-2 text-slate-700 text-sm'>


              Refer someone excellent. If hired, we offer a referral bonus — ask for details.


            </p>


          </div>


        </aside>


      </section>





      {}


      <section id='apply' className='bg-slate-100'>


        <div className='container py-12'>


          <h2>Apply for this Role</h2>


          


        </div>


      </section>





      {/* MORE JOBS */}


      <section className='container py-12'>


        <h2>More Opportunities</h2>


        <div className='mt-6 grid md:grid-cols-3 gap-6'>


          {[


            ['Finance Operations Analyst','San Jose, CA (Hybrid)','/jobs/finance-ops-analyst-san-jose-ca'],


            ['Healthcare Recruiter','Chicago, IL (Hybrid)','/jobs/healthcare-recruiter-chicago-il'],


            ['Senior Backend Engineer','Austin, TX (Hybrid)','/jobs/senior-backend-engineer-austin-tx']


          ].map(([title, meta, href]) => (


            <a key={href as string} href={href as string} className='p-6 rounded-2xl border hover:shadow-sm transition block'>


              <div className='font-semibold'>{title}</div>


              <div className='text-slate-600 text-sm mt-1'>{meta}</div>


              <div className='text-sm text-slate-600 mt-3'>View role →</div>


            </a>


          ))}


        </div>


      </section>


    </main>


  );


}




