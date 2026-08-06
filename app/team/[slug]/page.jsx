import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { team, getTeamMemberBySlug } from "@/lib/team";

export function generateStaticParams() {
  return team.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }) {
  const member = getTeamMemberBySlug(params.slug);
  if (!member) return {};
  return { title: `${member.name} | JarveX Solutions Team`, description: member.bio };
}

export default function TeamMemberPage({ params }) {
  const member = getTeamMemberBySlug(params.slug);
  if (!member) notFound();

  const currentIndex = team.findIndex((t) => t.slug === params.slug);
  const others = [
    team[(currentIndex + 1) % team.length],
    team[(currentIndex + 2) % team.length],
    team[(currentIndex + 3) % team.length],
  ];

  return (
    <div className="pt-40 pb-24">
      {/* PROFILE HEADER */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mb-20 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
        <Reveal>
          <div className="relative rounded-[28px] overflow-hidden border-4 border-white shadow-2xl">
            <img src={member.image} alt={member.name} className="w-full h-[440px] sm:h-[520px] object-cover" loading="eager" fetchpriority="high" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[10px] font-mono uppercase tracking-widest text-orange2 mb-1">
                On The Team Since {member.joined}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Link href="/team" className="text-xs font-mono uppercase tracking-widest text-orange">← All Team Members</Link>
          <p className="font-mono text-xs uppercase tracking-widest text-orange mt-6 mb-2">{member.department}</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-ink leading-tight mb-3">{member.name}</h1>
          <p className="text-lg text-ink/60 mb-6">{member.role}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {member.specialties.map((s) => (
              <span key={s} className="text-xs font-mono uppercase tracking-wider text-ink/60 border border-line rounded-full px-3 py-1.5">
                {s}
              </span>
            ))}
          </div>

          <blockquote className="border-l-2 border-orange pl-5 mb-8">
            <p className="text-xl font-display font-bold text-ink leading-snug">"{member.quote}"</p>
          </blockquote>

          <div className="space-y-5 text-ink/65 leading-relaxed">
            {member.longBio.map((para, i) => <p key={i}>{para}</p>)}
          </div>

          <Link href="/contact" className="inline-block mt-8 px-8 py-3.5 rounded-full bg-orange text-white font-bold hover:bg-ink transition-colors">
            Talk To The Team
          </Link>
        </Reveal>
      </section>

      {/* PORTFOLIO / CAREER HIGHLIGHTS */}
      <section className="bg-stone2 py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-4 mb-14">Career Highlights</h2>
          </Reveal>
          <div className="space-y-10">
            {member.highlights.map((h, i) => (
              <Reveal key={h.year} delay={i * 100}>
                <div className="flex gap-6 sm:gap-8 items-start">
                  <p className="font-display font-bold text-2xl text-orange w-16 sm:w-20 shrink-0">{h.year}</p>
                  <div className="border-l border-line pl-6 sm:pl-8 pb-2">
                    <h3 className="font-display font-bold text-lg text-ink mb-2">{h.title}</h3>
                    <p className="text-ink/60 leading-relaxed">{h.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER TEAM MEMBERS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <Reveal>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-4 mb-10">More From The Team</h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {others.map((m, i) => (
            <Reveal key={m.slug} delay={i * 90}>
              <Link href={`/team/${m.slug}`} className="card-premium group block bg-white rounded-2xl overflow-hidden border border-line h-full">
                <div className="relative h-48 overflow-hidden">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <p className="font-display font-bold text-sm text-white">{m.name}</p>
                    <p className="text-[10px] text-orange2">{m.role}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
