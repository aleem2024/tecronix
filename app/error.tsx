"use client";

export default function GlobalError({ error }: { error: Error }) {
  console.error(error);
  return (
    <html>
      <body style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '10%' }}>
        <h1>500 — Something went wrong</h1>
        <p>Our team has been notified. Please try again later.</p>
      </body>
    </html>
  );
}
