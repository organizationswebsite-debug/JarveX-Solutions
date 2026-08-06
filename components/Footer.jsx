"use client";

import Link from "next/link";
import { services } from "@/lib/services";

const SOCIALS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/jarvexsolutions",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.6 1.6-1.6h1.7V3.3C16.5 3.2 15.5 3 14.3 3c-2.6 0-4.4 1.6-4.4 4.5v2.3H7.2v3.2h2.7v8h3.6z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/jarvexsolutions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/jarvex-solutions/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3a1.96 1.96 0 100 3.92 1.96 1.96 0 000-3.92zM20.44 20h-3.37v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.68V8.5h3.24v1.57h.05c.45-.85 1.55-1.75 3.19-1.75 3.41 0 4.04 2.25 4.04 5.17V20z" />
      </svg>
    ),
  },
];

const QUICK_LINKS = [
  { href: "/fleet", label: "Fleet" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-ink text-white overflow-hidden">
      {/* marquee top strip */}
      <div className="border-b border-white/10 py-3 overflow-hidden ticker-mask">
        <div className="flex w-max animate-marquee gap-10 text-white/60">
          {Array.from({ length: 2 }).flatMap(() =>
            ["24/7 LIVE DISPATCH", "FLAT-RATE PRICING", "NATIONWIDE COVERAGE", "NO LONG-TERM CONTRACTS", "PART OF MOAZ GROUP"]
          ).map((t, i) => (
            <span key={i} className="flex items-center gap-10 font-mono text-[11px] tracking-[0.2em] shrink-0">
              {t} <span className="text-orange/50">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* faint background wordmark */}
      <p
        aria-hidden="true"
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-display font-bold text-white/[0.035] text-[14vw] leading-none select-none pointer-events-none whitespace-nowrap"
      >
        JARVEX SOLUTIONS
      </p>
      <div className="absolute w-[380px] h-[380px] bg-orange/10 rounded-full blur-[130px] top-10 right-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="JarveX Solutions" className="w-10 h-10 rounded-xl shadow-lg" />
            <span className="font-display font-bold text-2xl tracking-tight text-white">JarveX Solutions</span>
          </div>
          <p className="mt-5 text-sm text-white/50 leading-relaxed max-w-xs">
            Premium dispatch services for owner-operators and small fleets booking freight,
            negotiating rates, and handling the paperwork so you can run the miles. Subsidiary of Moaz Group of Companies.
          </p>

          <div className="mt-6 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="group relative w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-orange hover:-translate-y-1 transition-all duration-300"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-orange to-maroon opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-orange2 mb-4">Services</p>
          <ul className="space-y-2.5">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-sm text-white/55 hover:text-white transition-colors relative inline-block group">
                  {s.title}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-orange transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-orange2 mb-4">Company</p>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/55 hover:text-white transition-colors relative inline-block group">
                  {l.label}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-orange transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-orange2 mb-4">Dispatch Line</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="tel:+14094193788" className="text-white font-semibold hover:text-orange2 transition-colors">
                +1 (409) 419-3788
              </a>
            </li>
            <li>
              <a href="mailto:info@jarvexsolutions.com" className="text-white/55 hover:text-white transition-colors break-all">
                info@jarvexsolutions.com
              </a>
            </li>
            <li className="text-white/55">24/7/365 Live Coverage</li>
          </ul>
          <Link
            href="/contact"
            className="inline-block mt-5 px-8 py-3.6 rounded-full bg-gradient-to-r from-orange to-maroon text-white text-base font-bold hover:opacity-90 transition-opacity"
          >
            Get Dispatched
          </Link>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40 text-center sm:text-left">
            © {new Date().getFullYear()} JarveX Solutions. All rights reserved. Part of Moaz Group of Companies.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-xs text-white/40 font-mono tracking-wide hidden sm:block">NATIONWIDE DISPATCH PARTNER</p>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-orange hover:-translate-y-1 transition-all duration-300"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

