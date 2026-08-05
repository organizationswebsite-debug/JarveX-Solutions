import Link from "next/link";
import Reveal from "@/components/Reveal";
import TeamCard from "@/components/TeamCard";
import { team } from "@/lib/team";

export const metadata = {
  title: "About | JarveX Solutions",
  description: "JarveX Solutions is a dedicated truck dispatch team and a subsidiary of Moaz Group of Companies, built by people who understand the road, the load boards, and the pressure of the clock.",
};

const VALUES = [
  { title: "Transparency Over Everything", copy: "You see the rate before it's booked and the fee before you sign. No hidden percentages buried in fine print." },
  { title: "One Dispatcher, Not A Queue", copy: "You're assigned a dedicated dispatcher who learns your truck, your lanes, and your preferences, Not a rotating call center." },
  { title: "Your Authority, Your Call", copy: "We source and negotiate. You give the final go-ahead on every load. Nothing gets booked without you." },
];

const TIMELINE = [
  { year: "2019", title: "Joined Moaz Group of Companies", copy: "Became a subsidiary of Moaz Group, gaining the backing to scale support without losing the personal model." },
  { year: "2020", title: "Founded In A Spare Office", copy: "JarveX Solutions started with two dispatchers and one owner-operator, built on one rule: know every truck by name." },
  { year: "2022", title: "First Dedicated Rate Desk", copy: "Brought on a full-time negotiator to track lane averages and push back on lowball offers." },
  { year: "2023", title: "Crossed 100 Carriers", copy: "Expanded coverage into reefer and flatbed equipment for the first time." },
  { year: "2025", title: "Built The Compliance Desk", copy: "Added dedicated permit and IFTA support after direct carrier feedback." },
  { year: "2026", title: "Launched Market Analysis", copy: "Started publishing freight market insights so carriers see shifts before they hit rate confirmations." },
];

export default function About() {
  return (
    <div>
      {/* HERO — fixed background, animated */}
      <section
        className="hero-fixed-bg relative min-h-[85vh] flex items-end"
        style={{ backgroundImage: "url('/aboutushero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-40 w-full">
          <Reveal>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-white leading-[1.05] mt-5 max-w-3xl">
              Built By People Who've <span className="orange-shimmer">Answered The Radio</span> At 3AM.
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-xl leading-relaxed">
              JarveX Solutions is a dispatch team and asubsidiary of Moaz Group of
              Companies, Built for owner-operators who deserve more than a call queue.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mt-12 max-w-2xl">
              {[["2019", "Founded"], ["310+", "Carriers"], ["9,400+", "Loads/Mo"], ["98.6%", "On-Time"]].map(([num, label]) => (
                <div key={label} className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl px-4 py-5 text-center">
                  <p className="font-display font-bold text-2xl sm:text-3xl text-white">{num}</p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-white/60 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SUBSIDIARY OF MOAZ GROUP */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 -mt-16 sm:-mt-20 relative z-10 mb-24">
        <Reveal>
          <div className="bg-ink rounded-[28px] p-8 sm:p-12 md:p-14 text-white grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-orange2 mb-4">Part Of The Family</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-4">
                Subsidiary Of Moaz Group Of Companies
              </h2>
              <p className="text-white/65 leading-relaxed max-w-2xl">
                JarveX Solutions operates under Moaz Group of Companies, joining sister
                brands like MedCare RCM Solutions under one ownership structure. The group
                backing means more resources for carrier support, without changing how
                closely we work with your truck day to day.
              </p>
            </div>
            <div className="flex flex-col gap-4 shrink-0">
              <div className="bg-white/10 border border-white/15 rounded-2xl px-6 py-5 text-center min-w-[160px]">
                <p className="font-display font-bold text-lg">JarveX Solutions</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-orange2 mt-1">Truck Dispatching</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-center min-w-[160px]">
                <p className="font-display font-bold text-lg text-white/70">MedCare RCM Solutions</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mt-1">Medical Billing</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* VISION & MISSION */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mb-24">
        <Reveal>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-4 mb-14">Our Vision & Mission</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <div className="card-premium h-full bg-white border border-line rounded-2xl p-8 sm:p-10">
              <span className="inline-block text-orange text-3xl mb-5">◎</span>
              <h3 className="font-display font-bold text-2xl text-ink mb-4">Our Vision</h3>
              <p className="text-ink/60 leading-relaxed">
                A freight industry where every owner-operator has access to the same rate
                intelligence, broker relationships, and support that large fleets take for
                granted without giving up the independence that made them get into a
                truck in the first place.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-premium h-full bg-gradient-to-br from-orange to-maroon rounded-2xl p-8 sm:p-10 text-white">
              <span className="inline-block text-white text-3xl mb-5">◈</span>
              <h3 className="font-display font-bold text-2xl mb-4">Our Mission</h3>
              <p className="text-white/85 leading-relaxed">
                To give every carrier in our network a dedicated dispatcher, transparent
                pricing, and 24/7 support. So, they can focus on driving while we handle
                everything that happens off the road.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-stone2 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-4 mb-14">What We Stand On</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="card-premium h-full bg-white border border-line rounded-2xl p-8">
                  <h3 className="font-display font-bold text-xl text-ink mb-4">{v.title}</h3>
                  <p className="text-ink/60 leading-relaxed">{v.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-24">
        <Reveal>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-4 mb-14">How We Got Here</h2>
        </Reveal>
        <div className="space-y-10">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} delay={i * 80}>
              <div className="flex gap-6 sm:gap-8 items-start">
                <p className="font-display font-bold text-2xl text-orange w-16 sm:w-20 shrink-0">{t.year}</p>
                <div className="border-l border-line pl-6 sm:pl-8 pb-2">
                  <h3 className="font-display font-bold text-lg text-ink mb-2">{t.title}</h3>
                  <p className="text-ink/60 leading-relaxed">{t.copy}</p>
                </div>
              </div>
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
                <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-4">The People Behind The Radio</h2>
              </div>
              <Link href="/team" className="font-mono text-sm text-ink border-b border-orange pb-1 hover:text-orange transition-colors shrink-0">
                Meet the full team →
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
        </div>
      </section>

      {/* PREMIUM CTA — dual panel */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 rounded-[28px] overflow-hidden border border-line shadow-2xl">
            <div className="bg-ink text-white p-10 sm:p-14 flex flex-col justify-center">
              <span className="tag-index font-mono text-xs text-orange2 mb-4">FOR CARRIERS</span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl mb-4 leading-tight">
                Ready To Get Your Truck On The Radio?
              </h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                Most carriers are booked on their first load within 48 hours of onboarding.
              </p>
              <Link href="/contact" className="self-start px-8 py-3.5 rounded-full bg-orange text-white font-bold hover:bg-white hover:text-ink transition-colors">
                Get Dispatched
              </Link>
            </div>
            <div className="bg-gradient-to-br from-orange to-maroon text-white p-10 sm:p-14 flex flex-col justify-center">
              <span className="tag-index font-mono text-xs text-white/70 mb-4">FOR JOB SEEKERS</span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl mb-4 leading-tight">
                Want To Work The Radio With Us?
              </h3>
              <p className="text-white/85 mb-8 leading-relaxed">
                We're a small, remote team that treats carriers and each other like partners.
              </p>
              <Link href="/careers" className="self-start px-8 py-3.5 rounded-full bg-white text-orange font-bold hover:bg-ink hover:text-white transition-colors">
                See Open Roles
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
