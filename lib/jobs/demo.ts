export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  workModel: 'Remote' | 'Hybrid' | 'On-site';
  category: 'Technology' | 'Healthcare' | 'Finance' | 'Manufacturing' | 'Logistics' | 'Marketing' | 'Admin';
  posted: string; // ISO date
  summary: string;
};

export const jobs: Job[] = [
  {
    id: 'TX-ENG-001',
    title: 'Senior Software Engineer (React/Node)',
    company: 'Confidential Client',
    location: 'Austin, TX',
    workModel: 'Hybrid',
    category: 'Technology',
    posted: '2025-08-12',
    summary: 'Build scalable web applications, own features end-to-end, collaborate with product and design.'
  },
  {
    id: 'TX-DS-004',
    title: 'Data Analyst (SQL/Python)',
    company: 'Retail & eCommerce Leader',
    location: 'Remote - USA',
    workModel: 'Remote',
    category: 'Technology',
    posted: '2025-08-20',
    summary: 'Analyze funnel and merchandising data, own dashboards, support experimentation.'
  },
  {
    id: 'TX-RN-110',
    title: 'Registered Nurse (Med-Surg)',
    company: 'Multi-State Health System',
    location: 'Chicago, IL',
    workModel: 'On-site',
    category: 'Healthcare',
    posted: '2025-08-15',
    summary: 'Provide direct patient care, collaborate with interdisciplinary teams, flexible shifts.'
  },
  {
    id: 'TX-ACC-207',
    title: 'Senior Accountant',
    company: 'Manufacturing Group',
    location: 'Dallas, TX',
    workModel: 'Hybrid',
    category: 'Finance',
    posted: '2025-08-05',
    summary: 'Monthly close, reconciliations, support audit, process improvements.'
  },
  {
    id: 'TX-MFG-311',
    title: 'Maintenance Technician (Night Shift)',
    company: 'Food Manufacturing Plant',
    location: 'Columbus, OH',
    workModel: 'On-site',
    category: 'Manufacturing',
    posted: '2025-08-28',
    summary: 'Troubleshoot production equipment, PM program, reduce downtime.'
  }
];
