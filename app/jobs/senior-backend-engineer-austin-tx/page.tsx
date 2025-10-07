import type { Metadata } from 'next';





export const metadata: Metadata = {


  title: 'Senior Backend Engineer — Austin, TX (Hybrid) | Tecronix',


  description: 'Build services and APIs with a reliability and performance focus. Hybrid in Austin, TX. Strong experience in TypeScript/Node or Java/Kotlin/Go; cloud, data stores, and observability.'


};





export default function JobPage() {


  return (


    <main>


      {/* HEADER */}


      <section className='bg-slate-900 text-white'>


        <div className='container py-14'>


          <nav className='text-white/70 text-sm'><a className='underline' href='/jobs'>Jobs</a> / Senior Backend Engineer</nav>


          <h1 className='mt-2 max-w-4xl'>Senior Backend Engineer</h1>


          <div className='mt-3 text-white/80'>Austin, TX (Hybrid) · Technology · Full-time</div>


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


            Our client is a U.S. product company building high-volume services. You’ll own backend components end-to-end —


            designing APIs, improving reliability, and collaborating with product, frontend, data, and SRE. Expect pragmatic


            engineering, clear code reviews, and shipping small, safe changes frequently.


          </p>





          <h3 className='mt-8 font-semibold'>What You’ll Do</h3>


          <ul className='mt-3 list-disc pl-6 text-slate-700 space-y-2'>


            <li>Design and implement backend services and public/internal APIs</li>


            <li>Improve performance and reliability using metrics, tracing, and load testing</li>


            <li>Model data with the right storage patterns (relational/NoSQL/queues)</li>


            <li>Write tests (unit/integration/contract) and automate deployments</li>


            <li>Partner with product on scope, milestones, and trade-offs</li>


            <li>Participate in on-call with humane rotations and blameless postmortems</li>


          </ul>





          <h3 className='mt-8 font-semibold'>What We’re Looking For</h3>


          <ul className='mt-3 list-disc pl-6 text-slate-700 space-y-2'>


            <li>5+ years building backend systems in <strong>TypeScript/Node</strong> or <strong>Java/Kotlin</strong> or <strong>Go</strong></li>


            <li>Cloud experience (AWS/Azure/GCP) and containerization</li>


            <li>Experience with Postgres/MySQL and one of Redis/Kafka/SQS</li>


            <li>Observability: metrics, logs, tracing; familiarity with SLOs/SLA thinking</li>


            <li>Comfort with code reviews, RFCs, and incremental delivery</li>


            <li>Bonus: GraphQL, event-driven design, feature flags, security fundamentals</li>


          </ul>





          <h3 className='mt-8 font-semibold'>Interview Process</h3>


          <ol className='mt-3 list-decimal pl-6 text-slate-700 space-y-2'>


            <li>Intro with recruiter (30 min): goals, timeline, compensation</li>


            <li>Hiring manager screen (45 min): systems thinking & ownership</li>


            <li>Practical exercise (take-home or live review; time-bounded)</li>


            <li>Panel interviews: architecture, debugging, product collaboration</li>


            <li>Offer & close: references (as applicable), start plan</li>


          </ol>





          <h3 className='mt-8 font-semibold'>Compensation & Benefits</h3>


          <p className='mt-3 text-slate-700'>


            Competitive base salary with bonus/equity potential. Benefits include medical/dental/vision, 401(k) with match,


            PTO, and learning budget. Exact details provided by the client during process; we support pay transparency.


          </p>





          <h3 className='mt-8 font-semibold'>Equal Opportunity</h3>


          <p className='mt-3 text-slate-700'>


            Tecronix and our clients are equal opportunity employers. We consider qualified applicants without regard to


            race, color, religion, sex, sexual orientation, gender identity, national origin, disability, protected veteran status,


            or any other legally protected characteristics. We provide reasonable accommodations throughout the hiring process.


          </p>


        </article>





        {/* SIDEBAR */}


        <aside className='md:col-span-1'>


          <div className='p-6 rounded-2xl border'>


            <div className='font-semibold'>Key Details</div>


            <ul className='mt-3 text-slate-700 text-sm space-y-2'>


              <li><strong>Location:</strong> Austin, TX (Hybrid)</li>


              <li><strong>Type:</strong> Full-time (Direct Hire)</li>


              <li><strong>Category:</strong> Technology</li>


              <li><strong>Experience:</strong> 5+ years backend</li>


              <li><strong>Visa:</strong> U.S. work authorization required</li>


            </ul>


            <a href='/job-seekers/#upload' className='btn-primary mt-4 inline-block w-full text-center'>Apply Now</a>


            <a href='/jobs' className='btn-outline mt-2 inline-block w-full text-center'>Back to Jobs</a>


          </div>





          <div className='p-6 rounded-2xl border mt-6'>


            <div className='font-semibold'>Referral Bonus</div>


            <p className='mt-2 text-slate-700 text-sm'>


              Know someone great? Refer them — if hired, we offer a referral bonus. Ask your recruiter for details.


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


            ['Revenue Cycle Specialist','Chicago, IL (On-site)','/jobs/revenue-cycle-specialist-chicago-il'],


            ['AP Specialist','Columbus, OH (Hybrid)','/jobs/ap-specialist-columbus-oh'],


            ['Technical Recruiter','Remote (U.S.)','/jobs/technical-recruiter-remote-us']


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




