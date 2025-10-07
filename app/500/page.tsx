export const metadata = {
  title: "Server Error | Tecronix",
  description: "An unexpected error occurred. Please try again or contact support."
};

export default function ServerErrorPage() {
  return (
    <main>
      <section className="bg-red-900 text-white">
        <div className="container py-20 text-center">
          <h1 className="text-5xl font-bold">500</h1>
          <p className="mt-4 text-lg text-white/80">
            Sorry, something went wrong on our side. Weve logged the issue and will look into it.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="/" className="btn-primary">Go Home</a>
            <a href="/support" className="btn-outline">Visit Support</a>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <h2>What you can do</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-2 text-left max-w-2xl mx-auto">
          <li>Retry the page in a few minutes.</li>
          <li>Clear your browser cache and reload.</li>
          <li>If youre a client on an active program, check <a className="underline" href="/support">Support</a> for portals and ticketing.</li>
          <li>Email <a className="underline" href="mailto:support@tecronix.com">support@tecronix.com</a> if the issue persists.</li>
        </ul>
      </section>

      <section className="bg-slate-100">
        <div className="container py-12 text-center">
          <h2>We appreciate your patience.</h2>
          <p className="text-slate-700 mt-1">Reliability is our standard. Well make sure this doesnt happen again.</p>
        </div>
      </section>
    </main>
  );
}


