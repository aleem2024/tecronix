import '../styles/globals.css';
import type { Metadata } from 'next';
import RootLayoutClient from './layout-client';

export const metadata: Metadata = {
  title: 'Tecronix — Staffing & Outsourcing',
  description:
    'Find a job or hire talent across staffing, outsourcing, executive search & consulting.',
  icons: { icon: '/logo.png' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
