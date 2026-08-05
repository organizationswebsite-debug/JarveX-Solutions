import Link from "next/link";
import Reveal from "@/components/Reveal";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import { testimonials, ratingBreakdown } from "@/lib/testimonials";

export const metadata = {
  title: "Testimonials | JarveX Solutions",
  description: "Hear from owner-operators and fleet owners who work with JarveX Solutions for dispatch — real ratings, real quotes, real results.",
};

export default function Testimonials() {
  const featured = testimonials.find((t) => t.featured) || testimonials[0];
  const avatarSample = testimonials.slice(0, 6);

  return (
    <div>
      {/* HERO — fixed background */}
      <section
        className="hero-fixed-bg relative min-h-[75vh] flex items-end"
        style={{ backgroundImage: "url('/testimonialshero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-40 w-full">
          <Reveal>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-white leading-[1.05] mt-5 max-w-3xl">
              What Carriers <span className="orange-shimmer">Actually Say.</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-lg leading-relaxed">
              No cherry-picked quotes, Real feedback from owner-operators and fleet owners
              running with JarveX Solutions every day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STATS BAR + BREAKDOWN */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 -mt-16 sm:-mt-20 relative z-10 mb-20">
        <Reveal>
          <div className="bg-white rounded-[28px] border border-line shadow-2xl p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 items-center">
            <div className="text-center lg:text-left lg:pr-10 lg:border-r lg:border-line">
              <p className="font-display font-bold text-6xl text-ink">4.9</p>
              <div className="flex gap-0.5 text-orange justify-center lg:justify-start mt-2 text-lg">
                {"★★★★★"}
              </div>
              <p className="text-xs text-ink/45 mt-2 font-mono uppercase tracking-widest">312 Reviews</p>
            </div>
            <div className="space-y-2.5 w-full">
              {ratingBreakdown.map((r) => (
                <div key={r.stars} className="flex items-center gap-3">
                  <span className="text-xs font-mono text-ink/50 w-10 shrink-0">{r.stars} star</span>
                  <div className="flex-1 h-2 bg-stone rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange to-orange2 rounded-full" style={{ width: `${r.pct}%` }} />
                  </div>
                  <span className="text-xs font-mono text-ink/50 w-9 text-right shrink-0">{r.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* FEATURED SPOTLIGHT */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 mb-24">
        <Reveal>
          <div className="relative bg-gradient-to-br from-orange to-maroon rounded-[28px] p-10 sm:p-14 text-white text-center overflow-hidden">
            <p aria-hidden="true" className="absolute -top-6 left-8 font-display font-bold text-white/10 text-[10rem] leading-none select-none">"</p>
            <div className="relative">
              <div className="flex gap-1 justify-center mb-6 text-white">{"★★★★★"}</div>
              <p className="font-display font-bold text-2xl sm:text-3xl leading-snug max-w-2xl mx-auto mb-8">
                "{featured.quote}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center text-white text-sm font-bold">
                  {featured.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="text-left">
                  <p className="font-display font-bold text-sm">{featured.name}</p>
                  <p className="text-xs text-white/70">{featured.role} · {featured.equipment}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FILTERABLE GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <Reveal>
        </Reveal>
        <TestimonialsGrid />
      </section>

      {/* CTA — avatar stack cluster */}
      <section className="relative overflow-hidden bg-stone2 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex justify-center -space-x-3 mb-8">
              {avatarSample.map((t, i) => (
                <div
                  key={t.name}
                  className="w-12 h-12 rounded-full bg-ink border-4 border-stone2 flex items-center justify-center text-orange2 text-xs font-bold"
                  style={{ zIndex: avatarSample.length - i }}
                >
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
              ))}
              <div className="w-12 h-12 rounded-full bg-orange border-4 border-stone2 flex items-center justify-center text-white text-[10px] font-bold">
                +306
              </div>
            </div>
            <span className="tag-index font-mono text-xs text-ink/45">JOIN THE NETWORK</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-ink mt-5 mb-6">
              Become Our Next 5-Star Review.
            </h2>
            <p className="text-ink/60 mb-10 max-w-md mx-auto">
              312 carriers trust JarveX Solutions with their trucks. Find out why in under 48 hours.
            </p>
            <Link href="/contact" className="inline-block px-10 py-4 rounded-full bg-orange text-white font-bold hover:bg-ink transition-colors">
              Get Dispatched
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
