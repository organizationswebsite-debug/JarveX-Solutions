import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { fleet, getTruckBySlug } from "@/lib/fleet";

export function generateStaticParams() {
  return fleet.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }) {
  const truck = getTruckBySlug(params.slug);
  if (!truck) return {};
  return { title: `${truck.name} Dispatch | JarveX Solutions`, description: truck.intro };
}

export default function TruckPage({ params }) {
  const truck = getTruckBySlug(params.slug);
  if (!truck) notFound();

  const currentIndex = fleet.findIndex((t) => t.slug === params.slug);
  const related = [
    fleet[(currentIndex + 1) % fleet.length],
    fleet[(currentIndex + 2) % fleet.length],
    fleet[(currentIndex + 3) % fleet.length],
  ];

  return (
    <div>
      {/* HERO — fixed background, per-truck image */}
      <section
        className="hero-fixed-bg relative min-h-[80vh] flex items-end"
        style={{ backgroundImage: `url('${truck.heroImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-40 w-full">
          <Reveal>
            <Link href="/fleet" className="text-xs font-mono uppercase tracking-widest text-orange2">← All Equipment</Link>
            <div className="flex items-center gap-2 mt-6 mb-3">
              <span className="text-orange">★</span>
              <span className="text-sm font-bold text-white">{truck.rating}</span>
              <span className="text-sm text-white/50">· {truck.loads} loads dispatched</span>
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-orange2 mb-3">{truck.tag}</p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-white leading-[1.05] max-w-3xl">
              {truck.name}
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-xl leading-relaxed">{truck.tagline}</p>
            <Link href="/contact" className="inline-block mt-10 px-8 py-4 rounded-full bg-orange text-white font-bold hover:bg-white hover:text-ink transition-colors">
              Get Dispatched
            </Link>
          </Reveal>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
          <span className="bounce-arrow text-lg">↓</span>
        </div>
      </section>

      {/* STATS SNAPSHOT */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 -mt-16 sm:-mt-20 relative z-10 mb-24">
        <Reveal>
          <div className="bg-white rounded-[28px] border border-line shadow-2xl p-8 sm:p-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {truck.stats.map(([label, value]) => (
              <div key={label} className="text-center sm:text-left">
                <p className="text-xs font-mono uppercase tracking-widest text-orange mb-2">{label}</p>
                <p className="font-display font-bold text-3xl sm:text-4xl text-ink">{value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 mb-24 text-center">
        <Reveal>
          <span className="tag-index font-mono text-xs text-ink/45">OVERVIEW</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-4 mb-6">What {truck.name} Freight Looks Like</h2>
          <p className="text-ink/60 text-lg leading-relaxed">{truck.intro}</p>
        </Reveal>
      </section>

      {/* HOW WE HELP */}
      <section className="bg-stone2 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <span className="tag-index font-mono text-xs text-ink/45">HOW WE HELP</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-4 mb-14">Support Built For {truck.name}</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {truck.howWeHelp.map((h, i) => (
              <Reveal key={h.title} delay={i * 90}>
                <div className="card-premium h-full bg-white border border-line rounded-2xl p-8">
                  <span className="text-orange text-2xl mb-4 block">◆</span>
                  <h3 className="font-display font-bold text-xl text-ink mb-3">{h.title}</h3>
                  <p className="text-ink/60 leading-relaxed">{h.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY IMAGE BREAK */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {truck.gallery.map((img, i) => (
            <Reveal key={img} delay={i * 100}>
              <div className="rounded-[24px] overflow-hidden border-4 border-white shadow-xl h-64 sm:h-80">
                <img src={img} alt={`${truck.name} freight ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <Reveal>
          <span className="tag-index font-mono text-xs text-ink/45">HOW IT WORKS</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-4 mb-14">From Booking To Delivery</h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {truck.howItWorks.map((s, i) => (
            <Reveal key={s.step} delay={i * 90}>
              <div className="card-premium h-full bg-white border border-line rounded-2xl p-7">
                <p className="font-display font-bold text-3xl text-orange/30 mb-5">{s.step}</p>
                <h3 className="font-display font-bold text-lg text-ink mb-3">{s.title}</h3>
                <p className="text-ink/60 text-sm leading-relaxed">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* USES & EQUIPMENT SPECS */}
      <section className="bg-ink text-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14">
          <Reveal>
            <span className="tag-index font-mono text-xs text-orange2">COMMON USES</span>
            <h2 className="font-display font-bold text-3xl text-white mt-4 mb-8">What Moves On {truck.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {truck.uses.map((u) => (
                <div key={u} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white/75">
                  <span className="text-orange2 shrink-0">◆</span>
                  {u}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <span className="tag-index font-mono text-xs text-orange2">EQUIPMENT SPECS</span>
            <h2 className="font-display font-bold text-3xl text-white mt-4 mb-8">The Numbers That Matter</h2>
            <div className="space-y-3">
              {truck.specs.map((s) => (
                <div key={s.label} className="flex justify-between items-center bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                  <span className="text-sm text-white/60">{s.label}</span>
                  <span className="font-display font-bold text-white">{s.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED EQUIPMENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <Reveal>
          <span className="tag-index font-mono text-xs text-ink/45">EXPLORE MORE</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-4 mb-10">Other Equipment We Dispatch</h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {related.map((t, i) => (
            <Reveal key={t.slug} delay={i * 90}>
              <Link href={`/fleet/${t.slug}`} className="card-premium group block bg-white rounded-2xl overflow-hidden border border-line h-full">
                <div className="relative h-48 overflow-hidden">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <p className="font-display font-bold text-sm text-white">{t.name}</p>
                    <p className="text-[10px] text-orange2">{t.tag}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange to-maroon py-24">
        <div className="absolute w-[420px] h-[420px] bg-white/10 rounded-full blur-[130px] top-0 right-0" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              Run {truck.name}? Let's Get You Dispatched.
            </h2>
            <p className="text-white/80 mb-10 max-w-md mx-auto">
              Most carriers are booked on their first {truck.name.toLowerCase()} load within 48 hours of onboarding.
            </p>
            <Link href="/contact" className="inline-block px-10 py-4 rounded-full bg-white text-orange font-bold hover:bg-ink hover:text-white transition-colors">
              Get Dispatched
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
