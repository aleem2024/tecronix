export const metadata = {
  title: "Page Not Found | Tecronix",
  description: "Sorry, the page you requested could not be found."
};

export default function NotFoundPage() {
  return (
    <main>
      <section className="bg-slate-900 text-white">
        <div className="container py-20 text-center">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="mt-4 text-lg text-white/80">Sorry, the page youre looking for doesnt exist.</p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="/" className="btn-primary">Go Home</a>
            <a href="/contact" className="btn-outline">Contact Us</a>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <h2>Popular Links</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="/jobs" className="card block hover:shadow-sm">
            <div className="font-semibold">Browse Jobs</div>
            <p className="muted text-sm mt-2">See open roles across industries.</p>
          </a>
          <a href="/solutions/staffing" className="card block hover:shadow-sm">
            <div className="font-semibold">Staffing</div>
            <p className="muted text-sm mt-2">Hire people with structured systems.</p>
          </a>
          <a href="/solutions/outsourcing" className="card block hover:shadow-sm">
            <div className="font-semibold">Outsourcing</div>
            <p className="muted text-sm mt-2">Buy outcomes with SOPs, SLAs/QA, dashboards.</p>
          </a>
          <a href="/industries" className="card block hover:shadow-sm">
            <div className="font-semibold">Industries</div>
            <p className="muted text-sm mt-2">Healthcare, F&A, Manufacturing, Logistics, Retail/Admin, Tech.</p>
          </a>
          <a href="/faq" className="card block hover:shadow-sm">
            <div className="font-semibold">FAQ</div>
            <p className="muted text-sm mt-2">Answers for employers and job seekers.</p>
          </a>
          <a href="/resources" className="card block hover:shadow-sm">
            <div className="font-semibold">Resources</div>
            <p className="muted text-sm mt-2">Templates, checklists, and whitepapers.</p>
          </a>
        </div>
      </section>
    </main>
  );
}

