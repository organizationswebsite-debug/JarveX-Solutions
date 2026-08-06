import Link from "next/link";
import Reveal from "@/components/Reveal";
import TruckCard from "@/components/TruckCard";
import { fleet } from "@/lib/fleet";

export const metadata = {
  title: "Fleet | JarveX Solutions",
  description: "Every equipment type we dispatch — Dry Van, Reefer, Flatbed, Power Only, Step Deck, and Hotshot. See rates, demand, and how each one works.",
};

export default function Fleet() {
  return (
    <div>
      {/* HERO — fixed background */}
      <section
        className="hero-fixed-bg relative min-h-[85vh] flex items-end"
        style={{ backgroundImage: "url('/fleethero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-40 w-full">
          <Reveal>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-white leading-[1.05] mt-5 max-w-3xl">
              Every Truck We <span className="orange-shimmer">Dispatch.</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-lg leading-relaxed">
              Six equipment types, each with dedicated broker relationships, rate
              benchmarks, and a dispatcher who knows the specifics of running it.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mt-12 max-w-2xl">
              {[["6", "Equipment Types"], ["9,400+", "Loads/Mo"], ["98.6%", "On-Time"], ["48h", "Avg. First Load"]].map(([num, label]) => (
                <div key={label} className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl px-4 py-5 text-center">
                  <p className="font-display font-bold text-2xl sm:text-3xl text-white">{num}</p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-white/60 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FLEET GRID */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 -mt-16 sm:-mt-20 relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
        {fleet.map((t, i) => (
          <Reveal key={t.slug} delay={i * 90}>
            <Link href={`/fleet/${t.slug}`}>
              <TruckCard truck={t} size="large" />
            </Link>
          </Reveal>
        ))}
      </section>

      {/* PREMIUM CTA — split with equipment glow panel */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-ink text-white grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-10 sm:p-14 md:p-16 flex flex-col justify-center relative z-10">
              <span className="tag-index font-mono text-xs text-orange2 mb-4">RUN SOMETHING ELSE?</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
                Not Seeing Your Equipment Type?
              </h2>
              <p className="text-white/65 leading-relaxed mb-10 max-w-md">
                Tell us what you run and we'll let you know honestly whether it's a fit for
                our current broker network no guesswork, no runaround.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="px-8 py-4 rounded-full bg-orange text-white font-bold text-center hover:bg-white hover:text-ink transition-colors">
                  Talk To A Dispatcher
                </Link>
                <a href="tel:+14094193788" className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-center hover:border-white transition-colors">
                  Call +1 (409) 419-3788
                </a>
              </div>
            </div>
            <div className="relative min-h-[280px] lg:min-h-0">
              <div className="absolute inset-0 bg-gradient-to-br from-orange to-maroon" />
              <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-[100px] top-1/4 left-1/4" />
              <div className="relative h-full flex flex-col items-center justify-center gap-4 p-10">
                {fleet.slice(0, 3).map((t, i) => (
                  <div
                    key={t.slug}
                    className="w-full max-w-[220px] bg-white/10 backdrop-blur border border-white/20 rounded-xl px-5 py-3 flex items-center justify-between"
                    style={{ transform: `translateX(${i % 2 === 0 ? "-12px" : "12px"})` }}
                  >
                    <span className="text-sm font-display font-bold">{t.name}</span>
                    <span className="text-xs text-orange2 font-mono">★ {t.rating}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
