import { NextResponse } from "next/server";

const SITE = process.env.SITE_URL || "https://www.tecronix.com"; // TODO: set actual domain

export async function GET() {
  const text = `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;
  return new NextResponse(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}

