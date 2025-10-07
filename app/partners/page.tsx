import type { Metadata } from "next";





export const metadata: Metadata = {


  title: "Partners | Tecronix",


  description: "Technology, HR/ATS, and delivery partners. Why partner with Tecronix and how to apply."


};





type Partner = { name: string; category: "Technology" | "HR/ATS" | "Delivery"; blurb: string };





const partners: Partner[] = [


  { name: "Acme Helpdesk", category: "Technology", blurb: "Omnichannel CX platform used in several outcome programs." },


  { name: "Northwind PIM", category: "Technology", blurb: "Product information management for retail/catalog ops." },


  { name: "Globex WMS", category: "Technology", blurb: "Warehouse management system integrations (RF/scan compliance)." },


  { name: "Contoso ATS", category: "HR/ATS", blurb: "Applicant tracking with structured interview kits and scorecards." },


  { name: "Fabrikam Backgrounds", category: "HR/ATS", blurb: "Background screening where permitted by law and policy." },


  { name: "Delta Field Services", category: "Delivery", blurb: "Regional surge staffing and on-site coordination partner." }


];





export default function PartnersPage() {


  const categories = Array.from(new Set(partners.map(p => p.category)));





  return (


    <main>


      {/* HERO */}


      <section className="bg-slate-900 text-white">


        <div className="container py-16">


          <h1 className="max-w-5xl">Partners</h1>


          <p className="mt-4 max-w-3xl text-white/80">


            We collaborate with technology, HR/ATS, and delivery partners to ship reliable staffing and outcome programs.


          </p>


          <div className="mt-6 flex gap-3 flex-wrap">


            <a className="btn-outline" href="#why">Why Partner</a>


            <a className="btn-outline" href="#directory">Directory</a>


            <a className="btn-primary" href="#apply">Apply to Partner</a>


          </div>


        </div>


      </section>





      {/* WHY PARTNER */}


      <section id="why" className="container py-12 grid lg:grid-cols-3 gap-6">


        {[


          ["Shared Outcomes","SOPs, SLAs/QA, and dashboards align incentives and make wins measurable."],


          ["Faster Pilots","Clear scope, interfaces, and exception paths reduce integration time."],


          ["Mutual Growth","Warm intros, co-marketing, and artifact walkthroughs for prospects."]


        ].map(([t,d]) => (


          <article key={t as string} className="card">


            <div className="font-semibold">{t}</div>


            <p className="muted mt-2 text-sm">{d}</p>


          </article>


        ))}


      </section>





      {/* DIRECTORY */}


      <section id="directory" className="container py-12">


        <h2>Partner Directory</h2>


        <div className="mt-6 grid lg:grid-cols-3 gap-8">


          {categories.map(cat => {


            const list = partners.filter(p => p.category === cat);


            return (


              <div key={cat}>


                <h3 className="font-semibold text-slate-800">{cat}</h3>


                <div className="mt-4 grid gap-4">


                  {list.map(p => (


                    <article key={p.name} className="card">


                      <div className="font-semibold">{p.name}</div>


                      <p className="muted mt-2 text-sm">{p.blurb}</p>


                      <div className="text-sm text-slate-600 mt-3">Profile coming soon </div>


                    </article>


                  ))}


                </div>


              </div>


            );


          })}


        </div>


        <p className="text-xs text-slate-500 mt-3">Names are placeholders  replace with your approved partners before launch.</p>


      </section>





      {/* APPLY */}


      <section id="apply" className="bg-slate-100">


        <div className="container py-12 grid lg:grid-cols-2 gap-10">


          <article>


            <h2>Apply to Partner</h2>


            <p className="mt-2 text-slate-700">


              Tell us about your product/service and where you create value. Well review for fit and reach out.


            </p>


            <ul className="mt-3 list-disc pl-6 text-slate-700 text-sm space-y-2">


              <li>Category: Technology, HR/ATS, Delivery (or other)</li>


              <li>Integration touchpoints, security posture, and support model</li>


              <li>Mutual ICP and example outcomes</li>


            </ul>


          </article>


          <aside className="card">


            <h3 className="font-semibold">Partner Intake</h3>


            <form className="grid gap-3 mt-3">


              <input className="rounded-xl px-4 py-3 border" placeholder="Company name" aria-label="Company name" />


              <input className="rounded-xl px-4 py-3 border" placeholder="Contact email" type="email" aria-label="Contact email" />


              <select className="rounded-xl px-4 py-3 border" aria-label="Category">


                <option>Technology</option>


                <option>HR/ATS</option>


                <option>Delivery</option>


                <option>Other</option>


              </select>


              <textarea className="rounded-xl px-4 py-3 border min-h-[120px]" placeholder="Describe product/service, integrations, security, and example outcomes." aria-label="Description"></textarea>


              <button type="button" className="btn-primary">Submit</button>




            </form>


          </aside>


        </div>


      </section>





      {/* CTA */}


      <section>


        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">


          <div>


            <h2>Lets win outcomes together.</h2>


            <p className="text-slate-700 mt-1">Co-sell, co-deliver, and co-market programs that work.</p>


          </div>


          <a className="btn-primary" href="#apply">Apply to Partner</a>


        </div>


      </section>


    </main>


  );


}




