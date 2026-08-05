import Link from "next/link";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";

export const metadata = {
  title: "Services | JarveX Solutions",
  description: "Full-service truck dispatch: load booking, route planning, paperwork, 24/7 support, broker relations, compliance, onboarding, and factoring coordination.",
};

export default function Services() {
  return (
    <div>
      {/* HERO — fixed background */}
      <section
        className="hero-fixed-bg relative min-h-[85vh] flex items-end"
        style={{ backgroundImage: "url('/serviceshero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-40 w-full">
          <Reveal>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-white leading-[1.05] mt-5 max-w-3xl">
              Everything Between You <span className="orange-shimmer">And The Next Load.</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-lg leading-relaxed">
              Eight channels of coverage, one dedicated dispatcher. Explore what's handled
              on our end of the radio.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mt-12 max-w-2xl">
              {[["8", "Services"], ["24/7", "Live Support"], ["48h", "Avg. First Load"], ["0", "Bundle Upsells"]].map(([num, label]) => (
                <div key={label} className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl px-4 py-5 text-center">
                  <p className="font-display font-bold text-2xl sm:text-3xl text-white">{num}</p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-white/60 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID — animated image cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 -mt-16 sm:-mt-20 relative z-10 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 90}>
              <Link href={`/services/${s.slug}`} className="card-premium group block bg-white rounded-2xl overflow-hidden border border-line h-full">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                  <span className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-white/15 backdrop-blur border border-white/25 text-white font-display font-bold text-sm flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="font-display font-bold text-xl text-white">{s.title}</h2>
                    <p className="text-xs text-orange2 mt-1">{s.tagline}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-ink/55 leading-relaxed line-clamp-2 mb-4">{s.intro}</p>
                  <span className="inline-block text-xs font-mono uppercase tracking-wider text-orange">
                    Explore Service →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PREMIUM CTA — orbiting service chips */}
      <section className="relative overflow-hidden bg-ink py-24 md:py-28">
        <div className="absolute w-[460px] h-[460px] bg-orange/15 rounded-full blur-[140px] top-0 left-1/3" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <Reveal>
            <span className="tag-index font-mono text-xs text-orange2">ALL INCLUDED, ALWAYS</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mt-5 mb-6">
              One Flat Rate. Every Channel Covered.
            </h2>
            <p className="text-white/65 leading-relaxed mb-10 max-w-md">
              No bundles, no upsells. Every service on this page is included the moment
              your truck is onboarded. Talk to a dispatcher and see it in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-4 rounded-full bg-orange text-white font-bold text-center hover:bg-white hover:text-ink transition-colors">
                Talk To A Dispatcher
              </Link>
              <Link href="/pricing" className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-center hover:border-white transition-colors">
                See Pricing
              </Link>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="relative h-[320px] sm:h-[380px] flex items-center justify-center">
              <div className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full border border-white/10 animate-[spin_30s_linear_infinite]" />
              <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-white/5 animate-[spin_45s_linear_infinite_reverse]" />
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange to-maroon flex items-center justify-center font-display font-bold text-white text-2xl shadow-2xl z-10">
                8/8
              </div>
              {services.slice(0, 6).map((s, i) => {
                const angle = (i / 6) * 2 * Math.PI;
                const radius = i % 2 === 0 ? 130 : 175;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <div
                    key={s.slug}
                    className="absolute bg-white/10 backdrop-blur border border-white/15 rounded-full px-3.5 py-1.5 text-[11px] text-white/85 whitespace-nowrap animate-floatY"
                    style={{ transform: `translate(${x}px, ${y}px)`, animationDelay: `${i * 0.4}s` }}
                  >
                    {s.title.split(" ").slice(0, 2).join(" ")}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
