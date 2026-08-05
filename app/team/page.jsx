import Link from "next/link";
import Reveal from "@/components/Reveal";
import TeamCard from "@/components/TeamCard";
import { team } from "@/lib/team";

export const metadata = {
  title: "Our Team | JarveX Solutions",
  description: "Meet the dispatchers, negotiators, and coordinators behind JarveX Solutions — real people who answer the radio every day.",
};

export default function Team() {
  return (
    <div className="pt-40 pb-24">
      <section className="max-w-4xl mx-auto px-6 md:px-10 text-center mb-20">
        <Reveal>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-ink mt-4 mb-6">
            The People Behind The Radio.
          </h1>
          <p className="text-ink/60 text-lg leading-relaxed">
            Every carrier gets a dedicated dispatcher, not a call queue. Here's who's actually
            answering the phone.
          </p>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {team.map((m, i) => (
          <Reveal key={m.slug} delay={(i % 3) * 90}>
            <Link href={`/team/${m.slug}`}>
              <TeamCard member={m} />
            </Link>
          </Reveal>
        ))}
      </section>

      <section className="max-w-3xl mx-auto px-6 md:px-10 mt-24 text-center">
        <Reveal>
          <h2 className="font-display font-bold text-3xl text-ink mb-6">Want To Join The Team?</h2>
          <p className="text-ink/60 mb-8">We're a small, remote crew that treats carriers like partners.</p>
          <Link href="/careers" className="inline-block px-8 py-3.5 rounded-full bg-orange text-white font-bold hover:bg-ink transition-colors">
            See Open Roles
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
