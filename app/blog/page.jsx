import Link from "next/link";
import Reveal from "@/components/Reveal";
import { posts } from "@/lib/blog";

export const metadata = {
  title: "Blog | JarveX Solutions",
  description: "Insights on freight rates, compliance, broker relations, and the freight market — from the JarveX Solutions dispatch team.",
};

function formatDate(d) {
  return new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function Blog() {
  const [featured, ...rest] = posts;

  return (
    <div>
      {/* HERO — fixed background */}
      <section
        className="hero-fixed-bg relative min-h-[75vh] flex items-end"
        style={{ backgroundImage: "url('/bloghero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-20 pt-40 w-full">
          <Reveal>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-white leading-[1.05] mt-5 max-w-3xl">
              Insights From <span className="orange-shimmer">The Radio.</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-lg leading-relaxed">
              Rates, compliance, broker relations, and the freight market written by the
              team that works them every day, not a content farm.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 -mt-16 sm:-mt-24 relative z-10 mb-20">
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-[28px] overflow-hidden border border-line shadow-2xl"
          >
            <div className="relative h-72 lg:h-full overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute top-5 left-5 bg-orange text-white text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full">
                Featured
              </span>
            </div>
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <p className="text-xs font-mono uppercase tracking-widest text-orange mb-4">
                {featured.category} · {formatDate(featured.date)} · {featured.readTime}
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-ink leading-tight mb-4 group-hover:text-orange transition-colors">
                {featured.title}
              </h2>
              <p className="text-ink/60 leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-ink flex items-center justify-center text-orange2 text-xs font-bold shrink-0">
                  {featured.author.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{featured.author.name}</p>
                  <p className="text-xs text-ink/45">{featured.author.role}</p>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <Reveal>
          <div className="flex items-center justify-between mb-10">
            <span className="tag-index font-mono text-xs text-ink/45">MORE ARTICLES</span>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 90}>
              <Link
                href={`/blog/${p.slug}`}
                className="card-premium group block bg-white rounded-2xl overflow-hidden border border-line h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-[10px] font-mono uppercase tracking-widest text-white/90 bg-ink/50 backdrop-blur px-2.5 py-1 rounded-full">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-[11px] font-mono uppercase tracking-widest text-ink/40 mb-3">
                    {formatDate(p.date)} · {p.readTime}
                  </p>
                  <h3 className="font-display font-bold text-lg text-ink leading-snug mb-3 group-hover:text-orange transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink/55 leading-relaxed line-clamp-2">{p.excerpt}</p>
                  <span className="inline-block mt-4 text-xs font-mono uppercase tracking-wider text-orange">
                    Read Article →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA — marquee strip + split layout with floating photo card */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange to-maroon">
        <div className="border-y border-white/15 py-3 overflow-hidden ticker-mask">
          <div className="flex w-max animate-marquee gap-10 text-white/80">
            {Array.from({ length: 2 }).flatMap(() =>
              ["24/7 LIVE DISPATCH", "NO LONG-TERM CONTRACTS", "FLAT-RATE PRICING", "SAME-DAY INVOICING", "NATIONWIDE COVERAGE"]
            ).map((t, i) => (
              <span key={i} className="flex items-center gap-10 font-mono text-xs tracking-[0.2em] shrink-0">
                {t} <span className="text-white/40">◆</span>
              </span>
            ))}
          </div>
        </div>

        <div className="absolute w-[420px] h-[420px] bg-white/10 rounded-full blur-[130px] top-0 right-0" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <Reveal>
            <span className="tag-index font-mono text-xs text-white/70">JOIN THE NETWORK</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-[1.05] mt-5 mb-6">
              Want Insights Like These, Applied To Your Own Truck?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-lg mb-10">
              Everything on this blog comes from dispatchers working real lanes every day.
              Talk to one of them and see what it looks like for your fleet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-4 rounded-full bg-white text-orange font-bold text-center hover:bg-ink hover:text-white transition-colors">
                Get Dispatched
              </Link>
              <a href="tel:+14094193788" className="px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-center hover:border-white transition-colors">
                Call +1 (409) 419-3788
              </a>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="relative h-[340px] sm:h-[400px] flex items-center justify-center">
              <div
                className="tilt-card absolute w-64 sm:w-72 h-full rounded-[24px] overflow-hidden border-4 border-white/90 shadow-2xl animate-floatY"
                style={{ "--tilt": "-4deg" }}
              >
                <img
                  src="/blogcta.jpeg"
                  alt="Owner-operator on the road"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              </div>

              <div
                className="absolute -bottom-2 right-2 sm:right-8 bg-white rounded-2xl shadow-xl px-5 py-4 animate-floatY"
                style={{ animationDelay: "1.4s", "--tilt": "3deg" }}
              >
                <p className="font-display font-bold text-2xl text-ink">310+</p>
                <p className="text-[10px] font-mono tracking-widest uppercase text-ink/45 mt-1">Carriers Onboard</p>
              </div>

              <div
                className="absolute -top-2 left-2 sm:left-6 bg-ink rounded-2xl shadow-xl px-5 py-4 animate-floatY"
                style={{ animationDelay: "0.6s", "--tilt": "-3deg" }}
              >
                <p className="font-display font-bold text-2xl text-orange2">9 Blogs</p>
                <p className="text-[10px] font-mono tracking-widest uppercase text-white/60 mt-1">And Counting</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
