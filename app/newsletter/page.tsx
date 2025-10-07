import type { Metadata } from "next";





export const metadata: Metadata = {


  title: "Newsletter  Playbooks & Case Notes | Tecronix",


  description: "Subscribe for monthly playbooks on staffing, outcome-based delivery, and diagnostics across industries."


};





export default function NewsletterPage() {


  const topics = [


    "Structured hiring & scorecards",


    "Outcome pilots (SOPs, SLAs/QA, dashboards)",


    "Healthcare RCM playbooks",


    "F&A close governance & controls",


    "Manufacturing OEE & containment",


    "Logistics UPH, accuracy, dock-to-stock"


  ];





  return (


    <main>


      {/* HERO */}


      <section className="bg-slate-900 text-white">


        <div className="container py-16">


          <h1 className="max-w-5xl">Subscribe to Playbooks &amp; Case Notes</h1>


          <p className="mt-4 max-w-3xl text-white/80">


            One concise email each month. Practical templates and real-world outcomes  no spam.


          </p>


          <div className="mt-6 flex gap-3 flex-wrap">


            <a className="btn-outline" href="#subscribe">Subscribe</a>


            <a className="btn-outline" href="#topics">What we cover</a>


          </div>


        </div>


      </section>





      {/* SUBSCRIBE FORM */}


      <section id="subscribe" className="container py-12 grid lg:grid-cols-2 gap-10">


        <article className="card">


          <h2 className="font-semibold">Subscribe</h2>


          <form className="grid gap-3 mt-4" aria-labelledby="newsletter-form">


            <label className="sr-only" htmlFor="email">Email</label>


            <input id="email" className="rounded-xl px-4 py-3 border" type="email" placeholder="Work email" />


            <label className="sr-only" htmlFor="name">Full name</label>


            <input id="name" className="rounded-xl px-4 py-3 border" placeholder="Full name (optional)" />


            <label className="sr-only" htmlFor="company">Company</label>


            <input id="company" className="rounded-xl px-4 py-3 border" placeholder="Company (optional)" />


            <button type="button" className="btn-primary">Subscribe</button>




          </form>


        </article>


        <aside className="card">


          <h3 className="font-semibold">Privacy</h3>


          <p className="mt-2 text-sm text-slate-700">


            We use your email to send the newsletter and related resources. You can unsubscribe anytime.


            See our <a className="underline" href="/legal/privacy">Privacy Policy</a>.


          </p>


        </aside>


      </section>





      {/* TOPICS */}


      <section id="topics" className="container py-12">


        <h2>Topics We Cover</h2>


        <ul className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">


          {topics.map(t => (


            <li key={t} className="p-4 rounded-2xl border bg-white text-slate-700">{t}</li>


          ))}


        </ul>


      </section>





      {/* CTA */}


      <section className="bg-slate-100">


        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">


          <div>


            <h2>Get practical, not noisy.</h2>


            <p className="text-slate-700 mt-1">Monthly, focused, and actionable.</p>


          </div>


          <a className="btn-primary" href="#subscribe">Subscribe</a>


        </div>


      </section>


    </main>


  );


}




