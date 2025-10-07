import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations & Hours | Tecronix",
  description: "Our U.S. hubs and meeting spaces with addresses, hours, and contact info."
};

type Office = {
  city: string;
  address: string[];
  hours: string;
  email: string;
  phone: string;
  map: string; // image path
  notes?: string;
};

const offices: Office[] = [
  {
    city: "Austin, TX (HQ Hub)",
    address: ["500 Congress Ave", "Austin, TX 78701"],
    hours: "MonFri Â· 9:005:00 CT (by appt.)",
    email: "austin@tecronix.com",
    phone: "+1 (512) 555-0188",
    map: "/img/maps/austin.svg",
    notes: "Primary hub for delivery ops and program governance."
  },
  {
    city: "New York, NY (Meeting Space)",
    address: ["One Bryant Park", "New York, NY 10036"],
    hours: "MonFri Â· 9:305:30 ET (by appt.)",
    email: "nyc@tecronix.com",
    phone: "+1 (212) 555-0146",
    map: "/img/maps/nyc.svg",
    notes: "Client meetings, interviews, and workshops."
  },
  {
    city: "Chicago, IL (Meeting Space)",
    address: ["233 S Wacker Dr", "Chicago, IL 60606"],
    hours: "MonFri Â· 9:005:00 CT (by appt.)",
    email: "chicago@tecronix.com",
    phone: "+1 (312) 555-0179",
    map: "/img/maps/chicago.svg",
    notes: "Finance & Accounting and logistics client sessions."
  }
];

export default function LocationsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Locations &amp; Hours</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Were remote-friendly with an Austin hub and meeting spaces in NYC and Chicago. Visits are by appointment.
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <a className="btn-outline" href="#offices">Offices</a>
            <a className="btn-primary" href="/contact">Contact</a>
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section id="offices" className="container py-12 grid lg:grid-cols-3 gap-6">
        {offices.map(o => (
          <article key={o.city} className="card">
            <img src={o.map} alt={`Map of ${o.city}`} className="w-full h-40 object-cover rounded-xl" />
            <h2 className="font-semibold mt-3">{o.city}</h2>
            <ul className="mt-2 text-slate-700 text-sm space-y-1">
              {o.address.map(line => <li key={line}>{line}</li>)}
              <li><strong>Hours:</strong> {o.hours}</li>
              <li><strong>Email:</strong> <a className="underline" href={`mailto:${o.email}`}>{o.email}</a></li>
              <li><strong>Phone:</strong> {o.phone}</li>
            </ul>
            {o.notes ? <p className="muted mt-2 text-sm">{o.notes}</p> : null}
            <div className="mt-3 flex gap-3">
              <a className="btn-outline" href="/support">Support</a>
              <a className="btn-primary" href="/contact">Book a Visit</a>
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-slate-100">
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Meeting in another city?</h2>
            <p className="text-slate-700 mt-1">We can arrange meeting space near you. Tell us your location and preferred dates.</p>
          </div>
          <a className="btn-primary" href="/contact">Contact Us</a>
        </div>
      </section>
    </main>
  );
}


