import type { Metadata } from "next";





export const metadata: Metadata = {


  title: "Events  Webinars & Job Fairs | Tecronix",


  description: "Upcoming webinars, job fairs, and recruiting events for employers and job seekers."


};





type EventItem = {


  title: string;


  date: string;     // ISO


  time: string;     // local display


  mode: "Virtual" | "In-Person";


  city?: string;


  tag: "Employers" | "Job Seekers" | "Both";


  blurb: string;


  href?: string;


};





const events: EventItem[] = [


  {


    title: "Structured Hiring Clinic (Live)",


    date: "2025-09-18",


    time: "12:0012:45 PM CT",


    mode: "Virtual",


    tag: "Employers",


    blurb: "Scorecards, interview kits, and evidence summaries that cut time-to-decision."


  },


  {


    title: "Healthcare RCM Denials Playbook",


    date: "2025-10-02",


    time: "1:001:50 PM CT",


    mode: "Virtual",


    tag: "Both",


    blurb: "Payer sequencing, appeal QA, and metrics to raise overturns and reduce TTR."


  },


  {


    title: "Austin Job Fair  Delivery & Ops",


    date: "2025-10-15",


    time: "10:00 AM2:00 PM CT",


    mode: "In-Person",


    city: "Austin, TX",


    tag: "Job Seekers",


    blurb: "Meet recruiters for logistics, RCM, and F&A roles. Resume reviews on-site."


  }


];





export default function EventsPage() {


  const tags = ["Employers","Job Seekers","Both"] as const;





  return (


    <main>


      {/* HERO */}


      <section className="bg-slate-900 text-white">


        <div className="container py-16">


          <h1 className="max-w-5xl">Events</h1>


          <p className="mt-4 max-w-3xl text-white/80">


            Webinars, job fairs, and recruiting events. Join live sessions or meet us in person.


          </p>


          <div className="mt-6 flex flex-wrap gap-3">


            {tags.map(t => <a key={t} href={`#${t}`} className="btn-outline">{t}</a>)}


            <a href="#rsvp" className="btn-primary">RSVP</a>


          </div>


        </div>


      </section>





      {/* LIST */}


      <section className="container py-12 grid lg:grid-cols-2 gap-8">


        {tags.map(t => {


          const list = events.filter(e => e.tag === t);


          return (


            <div key={t} id={t}>


              <h2 className="font-semibold text-slate-800">{t}</h2>


              <div className="mt-4 grid gap-6">


                {list.map(ev => {


                  const d = new Date(ev.date);


                  const dateStr = d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });


                  return (


                    <article key={ev.title} className="card">


                      <div className="badge">{ev.mode}</div>


                      <h3 className="font-semibold mt-2">{ev.title}</h3>


                      <div className="text-sm text-slate-600 mt-1">


                        {dateStr} Â· {ev.time}{ev.city ? ` Â· ${ev.city}` : ""}


                      </div>


                      <p className="muted mt-2 text-sm">{ev.blurb}</p>


                      <div className="mt-3">


                        <a href="#rsvp" className="underline text-sm">RSVP </a>


                      </div>


                    </article>


                  );


                })}


              </div>


            </div>


          );


        })}


      </section>





      {/* RSVP */}


      <section id="rsvp" className="bg-slate-100">


        <div className="container py-12 grid lg:grid-cols-2 gap-10">


          <article>


            <h2>RSVP</h2>


            <p className="mt-2 text-slate-700">


              Choose an event and tell us whos attending. Well send calendar invites and reminders.


            </p>


          </article>


          <aside className="card">


            <form className="grid gap-3">


              <select className="rounded-xl px-4 py-3 border" aria-label="Event">


                {events.map(e => {


                  const d = new Date(e.date);


                  const label = `${e.title}  ${d.toLocaleDateString()} ${e.city ? "("+e.city+")" : ""}`;


                  return <option key={e.title}>{label}</option>;


                })}


              </select>


              <input className="rounded-xl px-4 py-3 border" placeholder="Full name" aria-label="Full name" />


              <input className="rounded-xl px-4 py-3 border" placeholder="Work email" type="email" aria-label="Work email" />


              <input className="rounded-xl px-4 py-3 border" placeholder="Company (optional)" aria-label="Company" />


              <textarea className="rounded-xl px-4 py-3 border min-h-[100px]" placeholder="Any questions or goals for this event?" aria-label="Notes"></textarea>


              <button type="button" className="btn-primary">Submit RSVP</button>




            </form>


          </aside>


        </div>


      </section>





      {/* CTA */}


      <section>


        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">


          <div>


            <h2>Want a private walkthrough?</h2>


            <p className="text-slate-700 mt-1">We can tailor a session for your teams goals.</p>


          </div>


          <a className="btn-primary" href="/contact">Contact Us</a>


        </div>


      </section>


    </main>


  );


}




