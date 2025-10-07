import type { Metadata } from "next";
import HomeClient from "./HomeClient"; // import your client component

export const metadata: Metadata = {
  title: "Tecronix — Find a Job. Hire Talent. Explore Consulting. Solutions, Discovered.",
  description:
    "Staffing, managed services, and executive search across technology, healthcare, finance, manufacturing, logistics, retail, and admin. Hire or find jobs with clarity, speed, and measurable outcomes."
};

// Server component: renders client section inside
export default function HomePage() {
  return <HomeClient />;
}
