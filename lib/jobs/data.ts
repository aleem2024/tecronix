export type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  category: string;
  description: string;
};

const jobs: Job[] = [
  {
    id: "senior-backend-engineer-austin-tx",
    title: "Senior Backend Engineer",
    location: "Austin, TX (Hybrid)",
    type: "Full-time",
    category: "Technology",
    description: "Build services and APIs with reliability and performance focus."
  },
  {
    id: "revenue-cycle-specialist-chicago-il",
    title: "Revenue Cycle Specialist",
    location: "Chicago, IL (On-site)",
    type: "Contract-to-Hire",
    category: "Healthcare",
    description: "AR follow-up and denials; quality and throughput targets."
  },
  {
    id: "ap-specialist-columbus-oh",
    title: "Accounts Payable (AP) Specialist",
    location: "Columbus, OH (Hybrid)",
    type: "Contract",
    category: "Finance & Accounting",
    description: "Three-way match, exceptions, vendor support, month-end."
  },
  {
    id: "technical-recruiter-remote-us",
    title: "Technical Recruiter",
    location: "Remote (U.S.)",
    type: "Full-time",
    category: "Admin & Support",
    description: "Structured intakes, sourcing, scorecards, and closes."
  },
  {
    id: "finance-ops-analyst-san-jose-ca",
    title: "Finance Operations Analyst",
    location: "San Jose, CA (Hybrid)",
    type: "Full-time",
    category: "Finance & Accounting",
    description: "Close acceleration and variance insights; ERP fluency."
  }
];

export default jobs;