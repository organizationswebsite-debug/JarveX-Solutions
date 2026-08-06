import Link from "next/link";
import HeroVisual from "@/components/HeroVisual";
import StatTicker from "@/components/StatTicker";
import StepSection from "@/components/StepSection";
import TruckCard from "@/components/TruckCard";
import Reveal from "@/components/Reveal";
import PricingCards from "@/components/PricingCards";
import ContactForm from "@/components/ContactForm";
import { services } from "@/lib/services";
import { fleet } from "@/lib/fleet";

const FEATURED_TESTIMONIALS = [
  { name: "Marcus Reyes", role: "Owner-Operator, Reefer", quote: "They booked my truck on a load within a day of onboarding and the rate was better than what I was finding myself." },
  { name: "Dana Whitfield", role: "Fleet Owner, 6 Trucks", quote: "Detention pay used to be a fight. Now it's tracked automatically and I actually get paid for the wait." },
  { name: "Leo Ferreira", role: "Owner-Operator, Flatbed", quote: "Same dispatcher every time. She knows my lanes better than I do at this point." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-[4.2rem] leading-[1.02] text-ink">
                DISPATCH THAT
                <br />
                KEEPS <span className="orange-shimmer">TRUCKS</span>
                <br />
                MOVING
              </h1>
              <p className="mt-8 text-ink/60 text-lg leading-relaxed max-w-md">
                We bring carriers premium dispatch platform where owner-operators connect
                with real freight, negotiate fair rates, and grow their fleet.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="px-8 py-4 rounded-full bg-orange text-white font-bold text-center hover:bg-ink transition-colors">
                  Get Dispatched
                </Link>
                <Link href="/fleet" className="px-8 py-4 rounded-full border-2 border-ink/15 text-ink font-semibold text-center hover:border-ink transition-colors">
                  Explore Fleet Types
                </Link>
              </div>
            </div>
            <div className="h-[440px] md:h-[500px]">
              <HeroVisual />
            </div>
          </div>
        </div>

        <div className="mt-45 select-none overflow-hidden">
          <p className="font-display font-bold text-[10vw] sm:text-[9vw] md:text-[11vw] leading-none text-ink/85 whitespace-nowrap px-4 tracking-tight">
            JARVEX SOLUTIONS
          </p>
        </div>
      </section>

      <StatTicker />

      {/* ABOUT-STYLE SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <Reveal>
          <div className="flex items-start justify-between gap-10 mb-14 flex-col md:flex-row">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-ink max-w-lg">
              A Dispatch Desk Built For The Road
            </h2>
            <p className="text-ink/55 max-w-md leading-relaxed">
              JarveX Solutions is a dispatch hub built for owner-operators and small fleets. A space
              where carriers connect to real freight, negotiate fair rates, and grow through
              dedicated support.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.1fr] gap-5">
          <Reveal>
            <div className="bg-white border border-line rounded-2xl p-8 h-full">
              <h3 className="font-display font-bold text-xl text-ink mb-16">Owner-Operators</h3>
              <p className="text-sm text-ink/55">Book freight, negotiate rates, and get 24/7 dispatch support built around your truck.</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="bg-white border border-line rounded-2xl p-8 h-full">
              <h3 className="font-display font-bold text-xl text-ink mb-16">Small Fleets</h3>
              <p className="text-sm text-ink/55">Per-truck dispatcher assignment, fleet-wide reporting, and priority broker relationships.</p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="bg-gradient-to-br from-orange to-maroon rounded-2xl p-8 h-full text-white flex flex-col justify-between">
              <h3 className="font-display font-bold text-xl">The Network</h3>
              <p className="text-sm text-white/80 mt-16">Vote-of-confidence performance tracking helps reliable carriers rise to first-look freight.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STEPS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <Reveal>
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-ink">From Call To Delivered</h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <StepSection />
        </Reveal>
      </section>

      {/* FLEET TRADING CARDS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <Reveal>
          <div className="flex items-center justify-between mb-14">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-ink text-right">
              The Trucks, We Dispatch
              <br />
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 pb-6">
          {fleet.map((t, i) => (
            <Reveal key={t.slug} delay={i * 90}>
              <Link href={`/fleet/${t.slug}`}>
                <TruckCard truck={t} size="large" />
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <div className="text-center mt-6">
            <Link href="/fleet" className="font-mono text-sm text-ink border-b border-orange pb-1 hover:text-orange transition-colors">
              View all equipment types
            </Link>
          </div>
        </Reveal>
      </section>

      {/* SERVICES STRIP */}
      <section className="bg-stone2 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="flex items-center justify-between mb-14">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-ink">What We Handle</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link href={`/services/${s.slug}`} className="card-premium block h-full bg-white rounded-2xl p-8 border border-line">
                  <div className="w-11 h-11 rounded-xl bg-ink flex items-center justify-center mb-6">
                    <span className="text-orange2 font-display font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-ink mb-3">{s.title}</h3>
                  <p className="text-ink/55 text-sm leading-relaxed">{s.tagline}</p>
                  <span className="inline-block mt-5 text-xs font-mono uppercase tracking-wider text-orange">Learn more →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <Reveal>
          <div className="flex items-center justify-between mb-14">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-ink">What Carriers Say</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <div className="card-premium h-full border border-line rounded-2xl p-8 bg-white">
                <div className="flex gap-1 text-orange mb-5">{"★★★★★"}</div>
                <p className="text-ink/65 leading-relaxed mb-6">"{t.quote}"</p>
                <p className="font-display font-bold text-ink text-sm">{t.name}</p>
                <p className="text-xs text-ink/45 mt-1">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-stone2 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="flex items-center justify-between mb-14">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-ink text-right">Simple, Flat-Rate Pricing</h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <PricingCards />
          </Reveal>
          <Reveal delay={140}>
            <div className="text-center mt-10">
              <Link href="/pricing" className="font-mono text-sm text-ink border-b border-orange pb-1 hover:text-orange transition-colors">
                See full pricing details & coverage map
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MID CTA — teaser */}
      <section className="bg-gradient-to-br from-orange to-maroon py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Ready To Get On The Radio?</h2>
            <p className="text-white/75 mb-10">Most carriers are booked on their first load within 48 hours of onboarding.</p>
            <a href="#get-dispatched" className="inline-block px-10 py-4 rounded-full bg-white text-ink font-bold hover:bg-stone transition-colors">
              Start Onboarding ↓
            </a>
          </Reveal>
        </div>
      </section>

      {/* FINAL CONTACT SECTION — luxurious animated CTA framing the contact form */}
      <section id="get-dispatched" className="relative overflow-hidden bg-ink py-24 md:py-28 scroll-mt-20">
        <p
          aria-hidden="true"
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 font-display font-bold text-white/[0.04] text-[16vw] leading-none select-none pointer-events-none whitespace-nowrap"
        >
          GET DISPATCHED
        </p>
        <div className="absolute w-[460px] h-[460px] bg-orange/15 rounded-full blur-[140px] top-0 right-1/4 animate-pulseglow" />
        <div className="absolute w-[320px] h-[320px] bg-orange/10 rounded-full blur-[120px] bottom-0 left-1/4" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <Reveal>
              <span className="tag-index font-mono text-xs text-orange2">LAST STEP</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mt-5 mb-6">
                Let's Get Your Truck Dispatched.
              </h2>
              <p className="text-white/60 leading-relaxed mb-10 max-w-md">
                Fill out the form and a real dispatcher, Not a call queue, Reaches out
                within one business day. Most carriers are booked on their first load
                within 48 hours.
              </p>
              <div className="space-y-4">
                {[
                  ["Dispatch Line", "+1 (409) 419-3788"],
                  ["Email", "info@jarvexsolutions.com"],
                  ["Coverage", "Nationwide, USA"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-sm text-white/45">{label}</span>
                    <span className="text-sm font-semibold text-white">{value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
