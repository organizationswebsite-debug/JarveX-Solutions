"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/services";

const SERVICE_ICONS = {
  "load-booking-rate-negotiation": "💰",
  "route-fuel-planning": "🧭",
  "paperwork-invoicing": "📄",
  "24-7-dispatch-support": "🎧",
  "broker-shipper-relations": "🤝",
  "compliance-permit-support": "🛡",
  "fleet-onboarding": "🚛",
  "factoring-coordination": "💳",
};

const COMPANY = [
  { href: "/about", label: "About Us", icon: "🏢", desc: "Our story, values, and the people behind JarveX." },
  { href: "/testimonials", label: "Testimonials", icon: "⭐", desc: "Real reviews from carriers who work with us." },
  { href: "/careers", label: "Careers", icon: "💼", desc: "Open roles on a fully remote dispatch team." },
  { href: "/faq", label: "FAQ", icon: "❓", desc: "Answers to the most common carrier questions." },
  { href: "/blog", label: "Blog", icon: "📰", desc: "Insights on rates, compliance, and the freight market." },
  { href: "/contact", label: "Contact Us", icon: "✉️", desc: "Reach a real dispatcher, day or night." },
];

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
export default function Header() {
  const [openServices, setOpenServices] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 flex justify-center">
      <div className="relative w-full lg:w-auto max-w-6xl">
          <nav className="flex items-center justify-between w-full bg-white/80 backdrop-blur-sm rounded-full px-4 py-3 shadow-lg">
          <Link href="/" className="flex items-center gap-2 pr-2 shrink-0">
            <img src="/logo.png" alt="JarveX Solutions" className="w-9 h-9 rounded-xl shadow-sm shrink-0" />
            <span className="font-display font-bold text-lg tracking-tight text-ink">JarveX Solutions</span>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center gap-2">
            <Link href="/" className="px-4 py-2 text-sm text-ink/75 hover:text-orange transition-colors">Home</Link>

            <div className="relative" onMouseEnter={() => setOpenServices(true)} onMouseLeave={() => setOpenServices(false)}>
              <Link href="/services" className="px-4 py-2 text-sm text-ink/75 hover:text-orange transition-colors flex items-center gap-1">
                Services
                <svg width="10" height="6" viewBox="0 0 10 6" className={`transition-transform duration-300 ${openServices ? "rotate-180" : ""}`}>
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </Link>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px] transition-all duration-300 origin-top ${
                  openServices ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="pill-header rounded-2xl p-4 bg-cream grid grid-cols-2 gap-1 shadow-2xl">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-orange/10 transition-colors group">
                      <span className="w-9 h-9 rounded-lg bg-white shadow-sm flex items-center justify-center text-base shrink-0 group-hover:scale-110 transition-transform">
                        {SERVICE_ICONS[s.slug]}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-ink">{s.title}</span>
                        <span className="block text-xs text-ink/50 mt-0.5">{s.tagline}</span>
                      </span>
                    </Link>
                  ))}
                  <Link href="/services" className="col-span-2 mt-1 text-center text-xs font-mono tracking-widest uppercase text-orange py-2.5 border-t border-line">
                    View All Services →
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/fleet" className="px-4 py-2 text-sm text-ink/75 hover:text-orange transition-colors">Fleet</Link>
            <Link href="/pricing" className="px-4 py-2 text-sm text-ink/75 hover:text-orange transition-colors">Pricing</Link>

            <div className="relative" onMouseEnter={() => setOpenCompany(true)} onMouseLeave={() => setOpenCompany(false)}>
              <button className="px-4 py-2 text-sm text-ink/75 hover:text-orange transition-colors flex items-center gap-1">
                Company
                <svg width="10" height="6" viewBox="0 0 10 6" className={`transition-transform duration-300 ${openCompany ? "rotate-180" : ""}`}>
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-80 transition-all duration-300 origin-top ${
                  openCompany ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="pill-header rounded-2xl p-3 bg-cream shadow-2xl">
                  {COMPANY.map((c) => (
                    <Link key={c.href} href={c.href} className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-orange/10 transition-colors group">
                      <span className="w-9 h-9 rounded-lg bg-white shadow-sm flex items-center justify-center text-base shrink-0 group-hover:scale-110 transition-transform">
                        {c.icon}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-ink">{c.label}</span>
                        <span className="block text-xs text-ink/50 mt-0.5">{c.desc}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/contact" className="hidden lg:block ml-2 px-4 py-3.5 rounded-full bg-ink text-white text-base font-semibold hover:bg-orange transition-colors shrink-0">
            Get Dispatched
          </Link>

          {/* MOBILE-ONLY: Call + Hamburger */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <a
              href="tel:+14094193788"
              aria-label="Call JarveX Solutions"
              className="pulse-call w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center active:scale-90 transition-transform"
            >
              <PhoneIcon />
            </a>
            <button
              className="w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center active:scale-90 transition-transform"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-4 h-3 flex flex-col justify-between">
                <span className={`h-px bg-white transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
                <span className={`h-px bg-white transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`h-px bg-white transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
              </div>
            </button>
          </div>
        </nav>

        {/* MOBILE MENU — animated panel with staggered items */}
        {mobileOpen && (
          <div className="lg:hidden mobile-panel-in absolute top-full mt-3 left-0 right-0 pill-header bg-cream rounded-3xl p-4 flex flex-col gap-1 max-h-[75vh] overflow-y-auto shadow-2xl">
            {[{ href: "/", label: "Home" }, { href: "/fleet", label: "Fleet" }, { href: "/pricing", label: "Pricing" }].map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="mobile-item-in px-4 py-3 text-ink/80 hover:text-orange transition-colors text-sm font-semibold rounded-xl hover:bg-orange/10"
                style={{ animationDelay: `${i * 35}ms` }}
              >
                {item.label}
              </Link>
            ))}

            <p className="mobile-item-in px-4 pt-4 pb-1 text-[10px] font-mono uppercase tracking-widest text-ink/35" style={{ animationDelay: "105ms" }}>
              Services
            </p>
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={() => setMobileOpen(false)}
                className="mobile-item-in flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-orange/10 transition-colors"
                style={{ animationDelay: `${140 + i * 30}ms` }}
              >
                <span className="w-7 h-7 rounded-lg bg-white shadow-sm flex items-center justify-center text-sm shrink-0">
                  {SERVICE_ICONS[s.slug]}
                </span>
                <span className="text-sm text-ink/75">{s.title}</span>
              </Link>
            ))}

            <p className="mobile-item-in px-4 pt-4 pb-1 text-[10px] font-mono uppercase tracking-widest text-ink/35" style={{ animationDelay: "380ms" }}>
              Company
            </p>
            {COMPANY.map((c, i) => (
              <Link
                key={c.href}
                href={c.href}
                onClick={() => setMobileOpen(false)}
                className="mobile-item-in flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-orange/10 transition-colors"
                style={{ animationDelay: `${410 + i * 30}ms` }}
              >
                <span className="w-7 h-7 rounded-lg bg-white shadow-sm flex items-center justify-center text-sm shrink-0">
                  {c.icon}
                </span>
                <span className="text-sm text-ink/75">{c.label}</span>
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mobile-item-in mt-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-orange to-maroon text-white text-sm font-bold text-center shadow-lg"
              style={{ animationDelay: "600ms" }}
            >
              Get Dispatched
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

