import type { Metadata } from 'next';





export const metadata: Metadata = {


  title: 'Revenue Cycle Specialist — Chicago, IL (On-site) | Tecronix',


  description: 'AR follow-up and denials resolution with quality and throughput targets. Hospital/health system revenue cycle experience preferred; Epic or similar EHR/PM familiarity.'


};





export default function JobPage() {


  return (


    <main>


      {/* HEADER */}


      <section className='bg-slate-900 text-white'>


        <div className='container py-14'>


          <nav className='text-white/70 text-sm'><a className='underline' href='/jobs'>Jobs</a> / Revenue Cycle Specialist</nav>


          <h1 className='mt-2 max-w-4xl'>Revenue Cycle Specialist</h1>


          <div className='mt-3 text-white/80'>Chicago, IL (On-site) · Healthcare · Contract-to-Hire</div>


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


            Join a Chicago-area health system revenue cycle team focused on AR follow-up, denials management, and clean claim improvements.


            You’ll work prioritized work queues, contact payers, resolve edits, and document actions with quality and throughput targets.


          </p>





          <h3 className='mt-8 font-semibold'>Key Responsibilities</h3>


          <ul className='mt-3 list-disc pl-6 text-slate-700 space-y-2'>


            <li>Work aging AR and denials queues by payer and reason code; document actions taken</li>


            <li>Identify root causes (coding, eligibility, prior auth, medical necessity) and partner on fixes</li>


            <li>Call payers and escalate where needed; capture reference numbers and next steps</li>


            <li>Resolve edits, rebill/appeal with appropriate supporting documentation</li>


            <li>Track productivity and quality metrics; contribute to continuous improvement</li>


          </ul>





          <h3 className='mt-8 font-semibold'>Qualifications</h3>


          <ul className='mt-3 list-disc pl-6 text-slate-700 space-y-2'>


            <li>2+ years in hospital/clinic revenue cycle (AR follow-up/denials/billing)</li>


            <li>Experience with Epic, Cerner, Meditech, or similar PM/EHR systems</li>


            <li>Understanding of payer rules, CARC/RARC codes, and appeal processes</li>


            <li>Strong documentation, phone skills, and professionalism with payers and patients</li>


            <li>Preferred: CPC/CPC-A, CRCR, or equivalent credential; Medicare/Medicaid familiarity</li>


          </ul>





          <h3 className='mt-8 font-semibold'>Schedule & Location</h3>


          <p className='mt-3 text-slate-700'>


            On-site in Chicago, IL (Mon–Fri business hours). Potential hybrid flexibility after ramp, based on performance and client policy.


          </p>





          <h3 className='mt-8 font-semibold'>Performance Metrics</h3>


          <ul className='mt-3 list-disc pl-6 text-slate-700 space-y-2'>


            <li>Daily accounts worked and resolution rate</li>


            <li>Denial overturn percentage and time-to-resolution</li>


            <li>Documentation completeness/accuracy score</li>


            <li>Aging reduction (30/60/90+) and clean claim rate improvements</li>


          </ul>





          <h3 className='mt-8 font-semibold'>Equal Opportunity</h3>


          <p className='mt-3 text-slate-700'>


            Tecronix and our clients are equal opportunity employers. We welcome applicants of all backgrounds and provide reasonable accommodations throughout the hiring process.


          </p>


        </article>





        {/* SIDEBAR */}


        <aside className='md:col-span-1'>


          <div className='p-6 rounded-2xl border'>


            <div className='font-semibold'>Key Details</div>


            <ul className='mt-3 text-slate-700 text-sm space-y-2'>


              <li><strong>Location:</strong> Chicago, IL (On-site)</li>


              <li><strong>Type:</strong> Contract-to-Hire</li>


              <li><strong>Category:</strong> Healthcare</li>


              <li><strong>Experience:</strong> 2+ years RCM</li>


              <li><strong>Systems:</strong> Epic/Cerner/Meditech (preferred)</li>


            </ul>


            <a href='/job-seekers/#upload' className='btn-primary mt-4 inline-block w-full text-center'>Apply Now</a>


            <a href='/jobs' className='btn-outline mt-2 inline-block w-full text-center'>Back to Jobs</a>


          </div>





          <div className='p-6 rounded-2xl border mt-6'>


            <div className='font-semibold'>Referral Bonus</div>


            <p className='mt-2 text-slate-700 text-sm'>


              Refer a great candidate. If hired, we offer a referral bonus — ask your recruiter for details.


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


            ['AP Specialist','Columbus, OH (Hybrid)','/jobs/ap-specialist-columbus-oh'],


            ['Technical Recruiter','Remote (U.S.)','/jobs/technical-recruiter-remote-us'],


            ['Finance Operations Analyst','San Jose, CA (Hybrid)','/jobs/finance-ops-analyst-san-jose-ca']


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




