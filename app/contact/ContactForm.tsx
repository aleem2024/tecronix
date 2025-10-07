'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch('https://formspree.io/f/mdkwdrpd', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      form.reset();
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid md:grid-cols-2 gap-4">
      <input name="first_name" className="rounded-xl px-4 py-3 border" placeholder="First name" required />
      <input name="last_name" className="rounded-xl px-4 py-3 border" placeholder="Last name" required />
      <input type="email" name="email" className="rounded-xl px-4 py-3 border md:col-span-2" placeholder="Work email" required />
      <input name="company" className="rounded-xl px-4 py-3 border md:col-span-2" placeholder="Company" />
      <select name="reason" className="rounded-xl px-4 py-3 border" required>
        <option value="">Reason</option>
        <option>Sales</option>
        <option>Recruiting</option>
        <option>Support</option>
        <option>Other</option>
      </select>
      <select name="timeline" className="rounded-xl px-4 py-3 border">
        <option>Timeline: ASAP</option>
        <option>Timeline: 2–4 weeks</option>
        <option>Timeline: This quarter</option>
      </select>
      <textarea name="message" className="rounded-xl px-4 py-3 border md:col-span-2 min-h-[120px]" placeholder="How can we help?" required />
      <div className="md:col-span-2 flex items-center gap-3">
        <input type="checkbox" name="consent" className="h-4 w-4 border rounded" id="agree" required />
        <label htmlFor="agree" className="text-sm text-slate-700 cursor-pointer">
          I agree to the Privacy Policy and consent to be contacted.
        </label>
      </div>
      <div className="md:col-span-2">
        <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-70">
          {status === 'sending' ? 'Sending...' : 'Send'}
        </button>
        {status === 'success' && <p className="text-sm text-green-600 mt-2">✅ Message sent successfully!</p>}
        {status === 'error' && <p className="text-sm text-red-600 mt-2">❌ Something went wrong. Please try again.</p>}
      </div>
    </form>
  );
}
