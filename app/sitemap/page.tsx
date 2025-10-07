import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Map | Tecronix",
  description: "Human-friendly index of key pages across the site  solutions, industries, careers, legal, and more."
};

type Link = { href: string; label: string };
type Group = { title: string; links: Link[] };

const groups: Group[] = [
  {
    title: "Core",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/story", label: "Our Story" },
      { href: "/team", label: "Team" },
      { href: "/contact", label: "Contact" },
      { href: "/support", label: "Client Support" },
      { href: "/trust", label: "Trust, Security & Compliance" },
      { href: "/pricing", label: "Pricing & Engagement Models" },
      { href: "/rfp", label: "RFP & Due Diligence" }
    ]
  },
  {
    title: "Solutions",
    links: [
      { href: "/solutions/staffing", label: "Staffing (Hire People)" },
      { href: "/solutions/outsourcing", label: "Managed Services (Buy Outcomes)" },
      { href: "/solutions/consulting", label: "Consulting & Diagnostics" }
    ]
  },
  {
    title: "Industries",
    links: [
      { href: "/industries", label: "Industries Overview" },
      { href: "/industries/technology", label: "Technology" },
      { href: "/industries/healthcare", label: "Healthcare / RCM" },
      { href: "/industries/finance-accounting", label: "Finance & Accounting" },
      { href: "/industries/manufacturing", label: "Manufacturing" },
      { href: "/industries/logistics", label: "Logistics" },
      { href: "/industries/retail-admin", label: "Retail & Admin" }
    ]
  },
  {
    title: "For Employers & Talent",
    links: [
      { href: "/employers", label: "For Employers" },
      { href: "/job-seekers", label: "For Job Seekers" },
      { href: "/jobs", label: "Jobs" },
      { href: "/careers", label: "Careers" },
      { href: "/careers/benefits", label: "Benefits" },
      { href: "/careers/culture", label: "Culture & Inclusion" },
      { href: "/careers/faq", label: "Careers FAQ" }
    ]
  },
  {
    title: "Proof",
    links: [
      { href: "/case-studies", label: "Case Studies" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/press", label: "Press & Media" },
      { href: "/partners", label: "Partners" },
      { href: "/events", label: "Events" }
    ]
  },
  {
    title: "Content",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/blog", label: "Insights (alias  Blog)" },
      { href: "/resources", label: "Resources & Templates" },
      { href: "/newsletter", label: "Newsletter" }
    ]
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/privacy", label: "Privacy Policy" },
      { href: "/legal/terms", label: "Terms of Use" },
      { href: "/legal/accessibility", label: "Accessibility Statement" },
      { href: "/legal/cookies", label: "Cookie Notice" },
      { href: "/legal/disclaimer", label: "Website Disclaimer" }
    ]
  },
  {
    title: "System",
    links: [
      { href: "/sitemap.xml", label: "XML Sitemap (for crawlers)" },
      { href: "/robots.txt", label: "robots.txt" },
      { href: "/404", label: "404 Not Found" },
      { href: "/500", label: "500 Server Error" }
    ]
  }
];

export default function HumanSitemapPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <h1 className="max-w-5xl">Site Map</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Browse the full site structure. For the machine-readable version, see the XML sitemap.
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <a className="btn-outline" href="/sitemap.xml">XML Sitemap</a>
            <a className="btn-primary" href="/blog">Read the Blog</a>
          </div>
        </div>
      </section>

      {/* GROUPED LINKS */}
      <section className="container py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map(g => (
          <nav key={g.title} className="card">
            <h2 className="font-semibold">{g.title}</h2>
            <ul className="mt-3 text-slate-700 text-sm space-y-2">
              {g.links.map(l => (
                <li key={l.href}>
                  <a className="underline" href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-slate-100">
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Cant find something?</h2>
            <p className="text-slate-700 mt-1">Tell us what youre looking for  well point you there.</p>
          </div>
          <a className="btn-primary" href="/contact">Contact Us</a>
        </div>
      </section>
    </main>
  );
}


