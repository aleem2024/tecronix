'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-700">
      {/* === FIXED HEADER === */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        {/* === TOP INFO BAR === */}


        {/* === MAIN NAVIGATION === */}
        <div className="container flex items-center justify-between py-4 relative">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Tecronix" className="h-8 w-8" />
            <span className="font-semibold text-lg tracking-tight">Tecronix</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/employers" className="hover:text-cyan-700 transition">
              For Employers
            </a>
            <a href="/job-seekers" className="hover:text-cyan-700 transition">
              For Job Seekers
            </a>
            <a href="/solutions" className="hover:text-cyan-700 transition">
              Solutions
            </a>
            <a href="/industries" className="hover:text-cyan-700 transition">
              Industries
            </a>
            <a href="/blog" className="hover:text-cyan-700 transition">
              Insights
            </a>
            <a href="/about" className="hover:text-cyan-700 transition">
              About
            </a>
            <a href="/contact" className="btn-primary">
              Contact
            </a>
          </nav>

          {/* === MOBILE MENU BUTTON === */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* === MOBILE MENU PANEL === */}
          {menuOpen && (
            <div className="absolute top-16 right-4 bg-white shadow-lg border border-gray-200 rounded-lg w-56 flex flex-col py-2 text-sm md:hidden">
              <a
                href="/employers"
                className="px-4 py-2 hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                For Employers
              </a>
              <a
                href="/job-seekers"
                className="px-4 py-2 hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                For Job Seekers
              </a>
              <a
                href="/solutions"
                className="px-4 py-2 hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                Solutions
              </a>
              <a
                href="/industries"
                className="px-4 py-2 hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                Industries
              </a>
              <a
                href="/blog"
                className="px-4 py-2 hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                Insights
              </a>
              <a
                href="/about"
                className="px-4 py-2 hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/contact"
                className="px-4 py-2 mt-1 border-t border-gray-100 text-cyan-700 font-medium hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </header>

      {/* === MAIN CONTENT === */}
      <main className="pt-20">{children}</main>

      {/* === FOOTER === */}
      <footer className="mt-20 border-t">
        <div className="container py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src="/logo.png" alt="Tecronix" className="h-7 w-7" />
              <span className="font-semibold text-base">Tecronix</span>
            </div>
            <p>401 Congress Ave, Suite 150, Austin, TX 78701</p>
            <p className="mt-1">(888) 555-0199 · hello@tecronix.com</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Employers</h3>
            <ul className="space-y-1">
              <li>
                <a href="/employers" className="hover:underline">
                  Why Tecronix
                </a>
              </li>
              <li>
                <a href="/solutions" className="hover:underline">
                  Request Talent
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:underline">
                  Hiring Guides
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Job Seekers</h3>
            <ul className="space-y-1">
              <li>
                <a href="/job-seekers" className="hover:underline">
                  Find a Job
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:underline">
                  Career Advice
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="/about#offices" className="hover:underline">
                  Offices
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-slate-500 pb-8">
          © {new Date().getFullYear()} Tecronix. All rights reserved.
        </div>
      </footer>

      {/* === Tawk.to Live Chat === */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68e431c305f9501951865c74/1j6tm4pk8';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `,
        }}
      />
    </div>
  );
}
