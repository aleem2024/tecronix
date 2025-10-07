export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO
  tag: string;
  excerpt: string;
  body: string; // simple HTML string for demo
};

export const posts: BlogPost[] = [
  {
    slug: "structured-hiring-scorecards",
    title: "Structured Hiring: Scorecards That Actually Predict",
    date: "2025-01-12",
    tag: "Staffing",
    excerpt: "Move beyond vibes: success profiles, interview kits, and evidence summaries that cut time-to-decision without lowering the bar.",
    body: `
      <p>Hiring that works starts with <strong>clarity</strong>. We write a success profile: scope, interfaces, and outcomes.
      Then we align interview kits to the signals we actually need.</p>
      <h3>Four anchors</h3>
      <ol>
        <li><strong>Success Profile:</strong> outcomes, constraints, level rubric.</li>
        <li><strong>Scorecards:</strong> questions  signals  rubric levels.</li>
        <li><strong>Work-sample:</strong> realistic, time-boxed; evidence over theatrics.</li>
        <li><strong>Evidence Summary:</strong> decision memo with risks &amp; mitigations.</li>
      </ol>
      <p>Do this and time-to-decision drops while signal quality rises.</p>
    `
  },
  {
    slug: "outcome-pilots-4-8-weeks",
    title: "Outcome Pilots in 48 Weeks",
    date: "2024-12-03",
    tag: "Outsourcing",
    excerpt: "Stand up managed services with SOPs, SLAs/QA, and dashboards. Hit go/no-go with clarity and change control.",
    body: `
      <p>Pilots prove reliability. Define <em>SOPs</em>, <em>SLAs/QA</em>, and <em>dashboards</em> up front. Lock change control.</p>
      <h3>Pilot cadence</h3>
      <ul>
        <li>Week 1: scope lock, runbook artifacts, owners.</li>
        <li>Weeks 23: stand-up, calibration, sampling plans.</li>
        <li>Weeks 46: steady state, dashboards, risks.</li>
        <li>Week 8: go/no-go with costs and options.</li>
      </ul>
      <p>Outcomes beat seat counts when the system is clear.</p>
    `
  },
  {
    slug: "healthcare-denials-playbook",
    title: "Healthcare Denials Playbook: Overturns Without Heroics",
    date: "2024-11-05",
    tag: "Healthcare / RCM",
    excerpt: "Sequencing rules, appeal QA sampling, and evidence capture that raise overturn rates and speed up TTR.",
    body: `
      <p>Denials are predictable when you have <strong>payer playbooks</strong> and <strong>evidence hygiene</strong>.</p>
      <h3>Core elements</h3>
      <ul>
        <li>Sequencing rules per payer &amp; denial reason.</li>
        <li>Appeal templates and evidence checklists.</li>
        <li>QA sampling by reason with calibration notes.</li>
        <li>Overturn rate and TTR as the north stars.</li>
      </ul>
    `
  },
  {
    slug: "oee-three-levers",
    title: "OEE: Three Levers That Move the Needle",
    date: "2024-10-14",
    tag: "Manufacturing",
    excerpt: "Availability, performance, quality  how to pick the right lever and avoid whack-a-mole in manufacturing.",
    body: `
      <p>OEE improves when you attack the true constraint. Don't chase vanity metrics.</p>
      <h3>Pick a lever</h3>
      <ul>
        <li><strong>Availability:</strong> PM compliance, changeover/SMED.</li>
        <li><strong>Performance:</strong> bottlenecks, work-in-process control.</li>
        <li><strong>Quality:</strong> containment, FPY, SPC discipline.</li>
      </ul>
    `
  },
  {
    slug: "wms-scan-compliance",
    title: "WMS & Scan Compliance: The Hidden KPI",
    date: "2024-09-21",
    tag: "Logistics",
    excerpt: "How scan discipline and slotting hygiene quietly drive UPH, accuracy, and dock-to-stock time.",
    body: `
      <p>Scan compliance drives UPH and accuracy. Slotting is your multiplier.</p>
      <h3>Make it stick</h3>
      <ul>
        <li>RF prompts and error-proofing at the point of work.</li>
        <li>Location hygiene audits and replenishment rules.</li>
        <li>Exception dashboards tied to coaching cadence.</li>
      </ul>
    `
  }
];

