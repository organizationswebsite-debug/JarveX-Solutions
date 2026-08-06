import Link from "next/link";
import Reveal from "@/components/Reveal";
import RoleCard from "@/components/RoleCard";
import TeamCard from "@/components/TeamCard";
import CareerApplicationForm from "@/components/CareerApplicationForm";
import { roles } from "@/lib/careers";
import { team } from "@/lib/team";

export const metadata = {
  title: "Careers | JarveX Solutions",
  description: "Join the JarveX Solutions dispatch team. Open roles in dispatch, broker relations, compliance, onboarding, and finance — fully remote.",
};

const PERKS = [
  { title: "Fully Remote Team", copy: "Work from anywhere in the US. We've been remote-first since day one." },
  { title: "Performance-Based Bonuses", copy: "Real bonuses tied to carrier retention and on-time performance, not vague targets." },
  { title: "Health Insurance Stipend", copy: "A monthly stipend toward your own health coverage plan." },
  { title: "Paid Time Off", copy: "Genuine time off, no guilt-tripping about coverage while you're out." },
  { title: "Growth Into Senior Roles", copy: "Most of our senior dispatchers and leads started in an entry-level seat." },
  { title: "Backed By Moaz Group of Companies", copy: "Group-level stability and resources without losing the small-team feel." },
];

export default function Careers() {
  return (
    <div>
      {/* HERO — fixed background */}
      <section
        className="hero-fixed-bg relative min-h-[85vh] flex items-end"
        style={{ backgroundImage: "url('/careershero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-40 w-full">
          <Reveal>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-white leading-[1.05] mt-5 max-w-3xl">
              Work The Radio <span className="orange-shimmer">With Us.</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-lg leading-relaxed">
              We're a small, remote team that treats carriers and each other like
              partners. If you like solving problems fast and talking to people all day,
              you'll fit right in.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#roles" className="px-8 py-4 rounded-full bg-orange text-white font-bold text-center hover:bg-white hover:text-ink transition-colors">
                View Open Roles
              </a>
              <a href="#apply" className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-center hover:border-white transition-colors">
                Submit Your Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mt-12 max-w-2xl">
              {[["100%", "Remote"], ["5", "Open Roles"], ["2019", "Founded"], ["8+", "Team Members"]].map(([num, label]) => (
                <div key={label} className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl px-4 py-5 text-center">
                  <p className="font-display font-bold text-2xl sm:text-3xl text-white">{num}</p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-white/60 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY WORK HERE */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 -mt-16 sm:-mt-20 relative z-10 mb-24">
        <Reveal>
          <div className="bg-ink rounded-[28px] p-8 sm:p-12 md:p-14 text-white">
            <h2 className="font-display font-bold text-3xl md:text-4xl mt-4 mb-10">What You Actually Get</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PERKS.map((p) => (
                <div key={p.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{p.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* OPEN ROLES */}
      <section id="roles" className="max-w-5xl mx-auto px-6 md:px-10 mb-24 scroll-mt-28">
        <Reveal>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-4 mb-4">Find Your Seat On The Radio</h2>
          <p className="text-ink/60 mb-12 max-w-lg">Click any role to see full responsibilities and what we're looking for.</p>
        </Reveal>
        <div className="space-y-5">
          {roles.map((r, i) => (
            <Reveal key={r.slug} delay={i * 90}>
              <RoleCard role={r} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="bg-stone2 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="flex items-end justify-between flex-col sm:flex-row gap-4 mb-14">
              <div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-4">Who You'd Be Working With</h2>
              </div>
              <Link href="/team" className="font-mono text-sm text-ink border-b border-orange pb-1 hover:text-orange transition-colors shrink-0">
                See more →
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.slice(0, 4).map((m, i) => (
              <Reveal key={m.slug} delay={i * 90}>
                <Link href={`/team/${m.slug}`}>
                  <TeamCard member={m} />
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div className="text-center mt-10">
              <Link href="/team" className="inline-block px-8 py-3.5 rounded-full border-2 border-ink text-ink font-semibold hover:bg-ink hover:text-white transition-colors">
                See Full Team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="max-w-7xl mx-auto px-6 md:px-10 py-24 scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-4 mb-6">Ready To Apply?</h2>
              <p className="text-ink/60 leading-relaxed mb-8">
                Attach your resume, tell us which role fits, and a real person on our team
                will read it. Not an applicant-tracking filter.
              </p>
              <div className="space-y-5">
                {[
                  ["Response Time", "A few business days"],
                  ["Interview Process", "One call, one team chat"],
                  ["Start Date", "Flexible, usually within 2 weeks"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-line pb-3">
                    <span className="text-sm text-ink/50">{label}</span>
                    <span className="text-sm font-semibold text-ink">{value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-3">
            <Reveal delay={100}>
              <CareerApplicationForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA — highway marquee motif */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange to-maroon">
        <div className="border-y border-white/15 py-3 overflow-hidden ticker-mask">
          <div className="flex w-max animate-marquee gap-10 text-white/80">
            {Array.from({ length: 2 }).flatMap(() =>
              ["WE'RE HIRING", "FULLY REMOTE", "BACKED BY MOAZ GROUP", "GROW WITH US", "JOIN THE RADIO"]
            ).map((t, i) => (
              <span key={i} className="flex items-center gap-10 font-mono text-xs tracking-[0.2em] shrink-0">
                {t} <span className="text-white/40">◆</span>
              </span>
            ))}
          </div>
        </div>
        <div className="absolute w-[420px] h-[420px] bg-white/10 rounded-full blur-[130px] bottom-0 left-0" />
        <div className="relative max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              Your Seat On The Radio Is Waiting.
            </h2>
            <p className="text-white/80 mb-10 max-w-md mx-auto">
              As part of Moaz Group of Companies, JarveX Solutions offers the stability of a group
              structure with the culture of a small team.
            </p>
            <a href="#apply" className="inline-block px-10 py-4 rounded-full bg-white text-orange font-bold hover:bg-ink hover:text-white transition-colors">
              Apply Now
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

