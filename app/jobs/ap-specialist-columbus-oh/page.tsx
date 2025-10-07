import type { Metadata } from 'next';





export const metadata: Metadata = {


  title: 'Accounts Payable (AP) Specialist — Columbus, OH (Hybrid) | Tecronix',


  description: 'Own full-cycle AP: three-way match, invoice exceptions, vendor management, and month-end close support. ERP fluency (NetSuite/SAP/Oracle/QuickBooks) and control awareness.'


};





export default function JobPage() {


  return (


    <main>


      {/* HEADER */}


      <section className='bg-slate-900 text-white'>


        <div className='container py-14'>


          <nav className='text-white/70 text-sm'><a className='underline' href='/jobs'>Jobs</a> / AP Specialist</nav>


          <h1 className='mt-2 max-w-4xl'>Accounts Payable (AP) Specialist</h1>


          <div className='mt-3 text-white/80'>Columbus, OH (Hybrid) · Finance & Accounting · Contract</div>


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


            Join a growing F&A team to run full-cycle Accounts Payable with accuracy and control. You’ll process invoices,


            resolve exceptions, manage vendor inquiries, and support month-end close with reconciliations and accruals.


          </p>





          <h3 className='mt-8 font-semibold'>Key Responsibilities</h3>


          <ul className='mt-3 list-disc pl-6 text-slate-700 space-y-2'>


            <li>Perform <strong>three-way match</strong> (PO/receipt/invoice) and route for approvals</li>


            <li>Research and resolve exceptions (price/qty mismatch, missing receipts)</li>


            <li>Prepare weekly payment runs; validate banking details and approvals</li>


            <li>Respond to vendor inquiries and maintain vendor master data</li>


            <li>Support month-end: AP accruals, aging review, and reconciling statements</li>


            <li>Document SOPs and assist with process improvements and automation</li>


          </ul>





          <h3 className='mt-8 font-semibold'>Qualifications</h3>


          <ul className='mt-3 list-disc pl-6 text-slate-700 space-y-2'>


            <li>2–4 years of AP experience in a high-volume environment</li>


            <li>ERP proficiency (NetSuite, SAP, Oracle, or QuickBooks)</li>


            <li>Understanding of <strong>controls</strong>: approval matrices, segregation of duties</li>


            <li>Excel skills (vlookup/xlookup, pivots) and attention to detail</li>


            <li>Professional communication with vendors and internal stakeholders</li>


          </ul>





          <h3 className='mt-8 font-semibold'>Nice to Have</h3>


          <ul className='mt-3 list-disc pl-6 text-slate-700 space-y-2'>


            <li>Experience with OCR/AP automation (Bill, Coupa, Tipalti, Stampli)</li>


            <li>Multi-entity and multi-currency exposure</li>


            <li>1099 compliance basics and W-9 collection</li>


          </ul>





          <h3 className='mt-8 font-semibold'>Schedule & Location</h3>


          <p className='mt-3 text-slate-700'>Hybrid in Columbus, OH (2–3 days on-site/week). Mon–Fri business hours.</p>





          <h3 className='mt-8 font-semibold'>Performance Metrics</h3>


          <ul className='mt-3 list-disc pl-6 text-slate-700 space-y-2'>


            <li>Invoice cycle time and % processed touchless</li>


            <li>Exception rate and time-to-resolution</li>


            <li>On-time payments and discount capture</li>


            <li>Data quality (vendor master accuracy) and audit findings</li>


          </ul>





          <h3 className='mt-8 font-semibold'>Equal Opportunity</h3>


          <p className='mt-3 text-slate-700'>


            Tecronix and our clients are equal opportunity employers. We consider all qualified applicants and provide reasonable accommodations.


          </p>


        </article>





        {/* SIDEBAR */}


        <aside className='md:col-span-1'>


          <div className='p-6 rounded-2xl border'>


            <div className='font-semibold'>Key Details</div>


            <ul className='mt-3 text-slate-700 text-sm space-y-2'>


              <li><strong>Location:</strong> Columbus, OH (Hybrid)</li>


              <li><strong>Type:</strong> Contract</li>


              <li><strong>Category:</strong> Finance & Accounting</li>


              <li><strong>Experience:</strong> 2–4 years AP</li>


              <li><strong>ERP:</strong> NetSuite/SAP/Oracle/QuickBooks</li>


            </ul>


            <a href='/job-seekers/#upload' className='btn-primary mt-4 inline-block w-full text-center'>Apply Now</a>


            <a href='/jobs' className='btn-outline mt-2 inline-block w-full text-center'>Back to Jobs</a>


          </div>





          <div className='p-6 rounded-2xl border mt-6'>


            <div className='font-semibold'>Referral Bonus</div>


            <p className='mt-2 text-slate-700 text-sm'>


              Refer a candidate — if hired, we offer a referral bonus. Ask your recruiter for details.


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


            ['Technical Recruiter','Remote (U.S.)','/jobs/technical-recruiter-remote-us'],


            ['Finance Operations Analyst','San Jose, CA (Hybrid)','/jobs/finance-ops-analyst-san-jose-ca'],


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




