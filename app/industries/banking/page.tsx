import { redirect } from 'next/navigation';
export const metadata = { title: 'Redirecting…', description: 'Moved to /industries/banking-financial-services' };
export default function Page() { redirect('/industries/banking-financial-services'); }
