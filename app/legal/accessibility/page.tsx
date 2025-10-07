import type { Metadata } from "next";





export const metadata: Metadata = {


  title: "Accessibility Statement | Tecronix",


  description: "Our commitment to accessibility, the measures we take, compatible technologies, and how to request assistance or accommodations."


};





export default function AccessibilityPage() {


  const measures = [


    "Designing with semantic HTML, proper headings, and descriptive labels.",


    "Providing alt text for meaningful images and avoiding text embedded in images.",


    "Maintaining color contrast and keyboard navigability for interactive elements.",


    "Using clear focus states and visible skip-to-content links (to be wired in header).",


    "Testing pages with keyboard-only navigation and common screen readers.",


    "Documenting issues and tracking fixes in our backlog with owners and due dates."


  ];





  const compatibility = [


    "Modern browsers: Chrome, Firefox, Edge, Safari (current and previous major).",


    "Devices: desktop, laptop, and common mobile screen sizes.",


    "Assistive technologies we spot-check: NVDA, VoiceOver, and keyboard-only navigation."


  ];





  const knownLimits = [


    "Placeholder PDFs/docs may not be fully tagged for screen readers  replace before launch.",


    "Third-party embeds/portals may have their own accessibility constraints.",


    "Some buttons are disabled for accessibility testing and will be fully enabled after launch."


  ];





  return (


    <main>


      {/* HERO */}


      <section className="bg-slate-900 text-white">


        <div className="container py-16">


          <h1 className="max-w-5xl">Accessibility Statement</h1>


          <p className="mt-4 max-w-3xl text-white/80">


            We are committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability.


          </p>


          <div className="mt-6 flex gap-3 flex-wrap">


            <a className="btn-outline" href="#measures">Measures</a>


            <a className="btn-outline" href="#feedback">Feedback</a>


            <a className="btn-primary" href="#accommodations">Request an Accommodation</a>


          </div>


        </div>


      </section>





      {/* STANDARDS & MEASURES */}


      <section id="measures" className="container py-12 grid lg:grid-cols-2 gap-10">


        <article className="card">


          <h2 className="font-semibold">Standards &amp; Approach</h2>


          <p className="mt-2 text-sm text-slate-700">


            We aim to align with WCAG 2.2 AA where feasible. We iterate continuously and fix issues as we discover them.


          </p>


          <ul className="mt-3 text-slate-700 text-sm space-y-2">


            {measures.map(m => <li key={m}>{m}</li>)}


          </ul>


        </article>


        <article className="card bg-slate-50">


          <h3 className="font-semibold">Compatibility &amp; Assistive Tech</h3>


          <ul className="mt-3 text-slate-700 text-sm space-y-2">


            {compatibility.map(c => <li key={c}>{c}</li>)}


          </ul>


          <p className="text-xs text-slate-500 mt-3">


            Actual compatibility may vary by device, OS, and browser settings.


          </p>


        </article>


      </section>





      {/* LIMITATIONS */}


      <section className="container py-12">


        <h2>Known Limitations</h2>


        <ul className="mt-3 text-slate-700 text-sm space-y-2">


          {knownLimits.map(l => <li key={l}>{l}</li>)}


        </ul>


        <p className="text-xs text-slate-500 mt-3">


          If you encounter an issue not listed here, please let us know so we can address it.


        </p>


      </section>





      {/* FEEDBACK */}


      <section id="feedback" className="container py-12 grid lg:grid-cols-2 gap-10">


        <article>


          <h2>Feedback &amp; Issue Reporting</h2>


          <p className="mt-2 text-slate-700">


            We welcome your feedback on the accessibility of our website. Please contact us if you encounter accessibility barriers.


          </p>


          <ul className="mt-3 text-slate-700 text-sm space-y-2">


            <li>Email: <a className="underline" href="mailto:access@tecronix.com">access@tecronix.com</a></li>


            <li>Phone: +1 (512) 555-0188</li>


            <li>Mail: 500 Congress Ave, Austin, TX 78701 (USA)</li>


          </ul>


          <p className="text-xs text-slate-500 mt-3">


            Please include the page URL, a description of the problem, and any assistive technologies used.


          </p>


        </article>


        <aside className="card">


          <h3 className="font-semibold">Maintenance &amp; Governance</h3>


          <p className="mt-2 text-sm text-slate-700">


            Accessibility issues are tracked in our backlog. We prioritize fixes based on impact and severity and review progress in weekly notes.


          </p>


        </aside>


      </section>





      {/* ACCOMMODATIONS */}


      <section id="accommodations" className="bg-slate-100">


        <div className="container py-12 grid lg:grid-cols-2 gap-10">


          <article>


            <h2>Request an Accommodation</h2>


            <p className="mt-2 text-slate-700">


              If you need a reasonable accommodation to access content or to participate in our hiring process, let us know.


            </p>


          </article>


          <aside className="card">


            <form className="grid gap-3">


              <input className="rounded-xl px-4 py-3 border" placeholder="Full name" aria-label="Full name" />


              <input className="rounded-xl px-4 py-3 border" type="email" placeholder="Email" aria-label="Email" />


              <select className="rounded-xl px-4 py-3 border" aria-label="Area">


                <option>Website Content</option>


                <option>Hiring Process</option>


                <option>Other</option>


              </select>


              <textarea className="rounded-xl px-4 py-3 border min-h-[120px]" placeholder="Describe the accommodation you need and any preferred contact method." aria-label="Details"></textarea>


              <button type="button" className="btn-primary">Submit Request</button>




            </form>


          </aside>


        </div>


      </section>





      {/* CTA */}


      <section>


        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">


          <div>


            <h2>Help us improve accessibility.</h2>


            <p className="text-slate-700 mt-1">Your feedback helps us fix issues faster.</p>


          </div>


          <a className="btn-primary" href="mailto:access@tecronix.com">Email Access Team</a>


        </div>


      </section>


    </main>


  );


}








