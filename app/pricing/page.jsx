import Link from "next/link";
import Reveal from "@/components/Reveal";
import PricingCards from "@/components/PricingCards";
import CoverageMap from "@/components/CoverageMap";
import { pricingDetails } from "@/lib/pricing";

export const metadata = {
  title: "Pricing | JarveX Solutions",
  description: "Flat-rate truck dispatch pricing — Starter at 4.99%, Premium at 9.99% with full coverage, or a custom Enterprise plan for larger fleets.",
};

export default function Pricing() {
  return (
    <div>
      {/* HERO — fixed background */}
      <section
        className="hero-fixed-bg relative min-h-[80vh] flex items-end"
        style={{ backgroundImage: "url('/pricinghero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-40 w-full">
          <Reveal>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-white leading-[1.05] mt-5 max-w-3xl">
              Pick Your Plan. <span className="orange-shimmer">No Surprises.</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-lg leading-relaxed">
              One flat percentage of booked freight, disclosed upfront. No setup fees, no
              hidden deductions, and cancel anytime on Starter or Premium.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mt-12 max-w-2xl">
              {[["4.99%", "Starter Rate"], ["9.99%", "Premium Rate"], ["0", "Setup Fees"], ["50", "States Covered"]].map(([num, label]) => (
                <div key={label} className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl px-4 py-5 text-center">
                  <p className="font-display font-bold text-2xl sm:text-3xl text-white">{num}</p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-white/60 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
          <span className="bounce-arrow text-lg">↓</span>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 -mt-16 sm:-mt-20 relative z-10 mb-24">
        <Reveal>
          <PricingCards />
        </Reveal>
        <Reveal delay={100}>
          <p className="text-center text-sm text-ink/45 mt-8">
            Starter and Premium can be cancelled anytime. Enterprise pricing is custom, our
            sales team will follow up after you submit your details.
          </p>
        </Reveal>
      </section>

      {/* PRICING DETAILS */}
      <section className="bg-stone2 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-4 mb-14">How Our Pricing Actually Works</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricingDetails.map((d, i) => (
              <Reveal key={d.title} delay={i * 90}>
                <div className="card-premium h-full bg-white border border-line rounded-2xl p-8">
                  <h3 className="font-display font-bold text-xl text-ink mb-3">{d.title}</h3>
                  <p className="text-ink/60 leading-relaxed">{d.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* USA COVERAGE MAP */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <Reveal>
          <div className="text-center mb-4">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-4">Dispatched Nationwide, Coast To Coast</h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <CoverageMap />
        </Reveal>
      </section>

      {/* CTA — giant percentage watermark */}
      <section className="relative overflow-hidden bg-ink py-28">
        <p
          aria-hidden="true"
          className="absolute -left-16 top-1/2 -translate-y-1/2 font-display font-bold text-white/[0.05] text-[38rem] leading-none select-none pointer-events-none"
        >
          %
        </p>
        <div className="absolute w-[420px] h-[420px] bg-orange/15 rounded-full blur-[130px] bottom-0 right-1/4" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <span className="tag-index font-mono text-xs text-orange2">NO SURPRISES, EVER</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-5 mb-8">
              The Rate You See Is The Rate You Pay.
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["No Setup Fees", "No Hidden Deductions", "Cancel Anytime"].map((t) => (
                <span key={t} className="text-xs font-mono uppercase tracking-widest text-white/70 border border-white/20 rounded-full px-4 py-2">
                  {t}
                </span>
              ))}
            </div>
            <Link href="/contact" className="inline-block px-10 py-4 rounded-full bg-orange text-white font-bold hover:bg-white hover:text-ink transition-colors">
              Talk To A Dispatcher
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

