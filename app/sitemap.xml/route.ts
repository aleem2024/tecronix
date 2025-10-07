import { NextResponse } from "next/server";

const SITE = process.env.SITE_URL || "https://www.tecronix.com"; // TODO: set actual domain

const routes: string[] = [  "/",
  "/about",
  "/contact",
  "/contact/success",
  "/investors",
  "/press",
  "/press/rcm-program",
  "/press/austin-hq",
  "/press/cx-framework",
  "/employers",
  "/job-seekers",
  "/jobs",
  "/solutions/staffing",
  "/solutions/outsourcing",
  "/solutions/consulting",
  "/industries",
  "/industries/technology",
  "/industries/healthcare",
  "/industries/finance-accounting",
  "/industries/manufacturing",
  "/industries/logistics",
  "/industries/retail-admin",
  "/careers",
  "/careers/benefits",
  "/careers/culture",
  "/careers/faq",
  "/case-studies",
  "/testimonials",
  "/pricing",
  "/rfp",
  "/blog",
  "/blog/structured-hiring-scorecards",
  "/blog/outcome-pilots-4-8-weeks",
  "/blog/healthcare-denials-playbook",
  "/blog/oee-three-levers",
  "/blog/wms-scan-compliance",
  "/resources",
  "/newsletter",
  "/team",
  "/faq",
  "/legal/privacy",
  "/legal/terms",
  "/legal/accessibility",
  "/legal/cookies",
  "/legal/disclaimer",
  "/trust",
  "/support",
  "/partners",
  "/events",
  "/sitemap",
];

export async function GET() {
  const lastmod = new Date().toISOString();
  const urls = routes.map((path) => `
    <url>
      <loc>${SITE}${path}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${path === "/" ? "1.0" : "0.7"}</priority>
    </url>
  `).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
}

