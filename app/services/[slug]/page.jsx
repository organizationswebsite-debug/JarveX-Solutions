import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import ServiceSlides from "@/components/ServiceSlides";
import { services, getServiceBySlug } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return { title: `${service.title} | JarveX Solutions`, description: service.intro };
}

export default function ServicePage({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const currentIndex = services.findIndex((s) => s.slug === params.slug);
  const related = [
    services[(currentIndex + 1) % services.length],
    services[(currentIndex + 2) % services.length],
    services[(currentIndex + 3) % services.length],
  ];

  return (
    <div>
      {/* HERO — fixed background, per-service image */}
      <section
        className="hero-fixed-bg relative min-h-[75vh] flex items-end"
        style={{ backgroundImage: `url('${service.heroImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-40 w-full">
          <Reveal>
            <Link href="/services" className="text-xs font-mono uppercase tracking-widest text-orange2">← All Services</Link>
            <p className="font-mono text-xs uppercase tracking-widest text-orange2 mt-6 mb-3">{service.tagline}</p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.05] max-w-3xl">
              {service.title}
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-xl leading-relaxed">{service.intro}</p>
            <Link href="/contact" className="inline-block mt-10 px-8 py-4 rounded-full bg-orange text-white font-bold hover:bg-white hover:text-ink transition-colors">
              Talk To A Dispatcher
            </Link>
          </Reveal>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
          <span className="bounce-arrow text-lg">↓</span>
        </div>
      </section>

      {/* SLIDES — brief intro walkthrough */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 -mt-16 sm:-mt-20 relative z-10 mb-24">
        <Reveal>
          <ServiceSlides slides={service.slides} />
        </Reveal>
      </section>

      {/* DETAILED POINTS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mb-24">
        <Reveal>
          <span className="tag-index font-mono text-xs text-ink/45">THE DETAIL</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-4 mb-14">Exactly What's Included</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.points.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90}>
              <div className="card-premium h-full border border-line rounded-2xl p-7 bg-white">
                <span className="text-orange text-lg">◆</span>
                <h3 className="font-display font-bold text-lg text-ink mt-4 mb-2">{p.title}</h3>
                <p className="text-ink/60 text-sm leading-relaxed">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* IMAGE + STORY BREAK */}
      <section className="bg-stone2 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="rounded-[28px] overflow-hidden border-4 border-white shadow-2xl">
              <img src={service.image} alt={service.title} className="w-full h-[320px] sm:h-[400px] object-cover" loading="eager" fetchpriority="high" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <span className="tag-index font-mono text-xs text-orange">WHY IT MATTERS</span>
            <h2 className="font-display font-bold text-3xl text-ink mt-4 mb-6">{service.tagline}</h2>
            <p className="text-ink/60 leading-relaxed mb-8">{service.intro}</p>
            <div className="flex flex-wrap gap-2">
              {service.points.slice(0, 3).map((p) => (
                <span key={p.title} className="text-xs font-mono uppercase tracking-wider text-ink/60 border border-line rounded-full px-3 py-1.5">
                  {p.title}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <Reveal>
          <span className="tag-index font-mono text-xs text-ink/45">EXPLORE MORE</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-4 mb-10">Other Services We Cover</h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {related.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}>
              <Link href={`/services/${s.slug}`} className="card-premium group block bg-white rounded-2xl overflow-hidden border border-line h-full">
                <div className="relative h-40 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="eager" fetchpriority="high" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <p className="font-display font-bold text-sm text-white">{s.title}</p>
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
              Ready For {service.title}?
            </h2>
            <p className="text-white/80 mb-10 max-w-md mx-auto">
              This service and every other channel is included the moment your truck is onboarded.
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
