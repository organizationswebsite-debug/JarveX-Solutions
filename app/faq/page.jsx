import Link from "next/link";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata = {
  title: "FAQ | JarveX Solutions",
  description: "Common questions about JarveX Solutions truck dispatch services — pricing, onboarding, equipment coverage, and support, organized by category.",
};

export default function FAQ() {
  return (
    <div>
      {/* HERO — fixed background */}
      <section
        className="hero-fixed-bg relative min-h-[70vh] flex items-end"
        style={{ backgroundImage: "url('/faqhero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-40 w-full">
          <Reveal>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-white leading-[1.05] mt-5 max-w-3xl">
              Everything You're <span className="orange-shimmer">Wondering About.</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-lg leading-relaxed">
              Twenty questions, five categories, zero fine print. If it's not here, call us
              directly and we'll answer it on the spot.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="max-w-3xl mx-auto px-6 md:px-10 -mt-16 sm:-mt-20 relative z-10 pb-24">
        <Reveal>
          <div className="bg-white rounded-[28px] border border-line shadow-2xl p-6 sm:p-10 md:p-12">
            <FaqAccordion />
          </div>
        </Reveal>
      </section>

      {/* CTA — giant faded question mark */}
      <section className="relative overflow-hidden bg-ink py-28">
        <p
          aria-hidden="true"
          className="absolute -right-10 top-1/2 -translate-y-1/2 font-display font-bold text-white/[0.05] text-[42rem] leading-none select-none pointer-events-none"
        >
          ?
        </p>
        <div className="absolute w-[420px] h-[420px] bg-orange/15 rounded-full blur-[130px] top-0 left-1/4" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <span className="tag-index font-mono text-xs text-orange2">STILL HAVE QUESTIONS?</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-5 mb-6">
              Talk To A Real Dispatcher.
            </h2>
            <p className="text-white/60 mb-10 max-w-md mx-auto">
              No chatbots, no ticket queue. Call, text, or fill out the form and a real
              person answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+14094193788" className="px-8 py-4 rounded-full bg-orange text-white font-bold text-center hover:bg-white hover:text-ink transition-colors">
                Call +1 (409) 419-3788
              </a>
              <Link href="/contact" className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-center hover:border-white transition-colors">
                Send A Message
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

