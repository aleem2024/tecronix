import type { Metadata } from 'next';
import JobSeekersClient from './JobSeekersClient';

export const metadata: Metadata = {
  title: 'For Job Seekers | Find a Job & Get Hired Faster',
  description:
    'Search jobs, upload your resume, and get guidance on interviewing, resumes, and pay. Roles across technology, healthcare, finance, manufacturing, logistics, retail, and admin.',
};

export default function JobSeekersPage() {
  return <JobSeekersClient />;
}
