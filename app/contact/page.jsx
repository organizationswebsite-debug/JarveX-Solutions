import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import QuickContactCard from "@/components/QuickContactCard";

export const metadata = {
  title: "Contact | JarveX Solutions",
  description: "Get on the radio. Contact JarveX Solutions for premium truck dispatch — call, text, email, or submit your carrier details online.",
};

const QUICK_CONTACT = [
  { icon: "☎", label: "Call Dispatch", value: "+1 (409) 419-3788", sub: "24/7/365 live coverage", href: "tel:+14094193788" },
  { icon: "✉", label: "Email Us", value: "info@jarvexsolutions.com", sub: "Reply within a few hours", href: "mailto:info@jarvexsolutions.com" },
  { icon: "💬", label: "Text A Dispatcher", value: "+1 (409) 419-3788", sub: "For quick load questions", href: "sms:+14094193788" },
  { icon: "📍", label: "Coverage", value: "Nationwide, USA", sub: "All 48 contiguous states", href: "https://www.google.com/maps/place/Rogers+Rd,+Lexington,+KY+40505,+USA/@38.0841909,-84.4539378,17z/data=!4m6!3m5!1s0x884245ec472c1779:0xbcae3e92d220be2c!8m2!3d38.0842374!4d-84.4522212!16s%2Fg%2F1tcw49cs?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D" },
];

const HOURS = [
  ["Load Booking & Rate Desk", "Mon – Fri, 6 AM – 8 PM CT"],
  ["Live Emergency Radio", "24 / 7 / 365"],
  ["Onboarding & Account Setup", "Mon – Sat, 7 AM – 7 PM CT"],
  ["Billing & Factoring Support", "Mon – Fri, 8 AM – 6 PM CT"],
];

const NEXT_STEPS = [
  { n: "01", title: "You Submit", copy: "Fill out the form or call directly takes under two minutes." },
  { n: "02", title: "We Match You", copy: "A dispatcher reviews your equipment and lanes the same day." },
  { n: "03", title: "You Get Dispatched", copy: "Most carriers are booked on their first load within 48 hours." },
];

const MINI_FAQ = [
  { q: "How fast will someone respond?", a: "Within one business day, usually much sooner during live hours." },
  { q: "Do I need anything ready before I call?", a: "Just your MC number, equipment type and insurance details can follow." },
  { q: "Is there any obligation to sign up?", a: "No. It's a conversation first, No contracts, No pressure." },
];

export default function Contact() {
  return (
    <div>
      {/* HERO — fixed background */}
      <section
        className="hero-fixed-bg relative min-h-[85vh] flex items-end"
        style={{ backgroundImage: "url('/contacthero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-20 pt-40 w-full">
          <Reveal>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-white leading-[1.05] mt-5 max-w-3xl">
              Let's Get Your Truck <span className="orange-shimmer">On The Radio.</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-lg leading-relaxed">
              One call, one form, or one text. However you reach us, a real dispatcher
              picks it up. No call centers, no scripts.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="tel:+14094193788" className="px-8 py-4 rounded-full bg-orange text-white font-bold text-center hover:bg-white hover:text-ink transition-colors">
                Call +1 (409) 419-3788
              </a>
              <a href="#contact-form" className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-center hover:border-white transition-colors">
                Fill Out The Form
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUICK CONTACT GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 -mt-16 sm:-mt-20 relative z-10 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-5">
          {QUICK_CONTACT.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <QuickContactCard {...c} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section id="contact-form" className="max-w-7xl mx-auto px-6 md:px-10 pb-24 scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>

          <div className="lg:col-span-2 order-1 lg:order-2 space-y-6">
            <Reveal delay={80}>
              <div className="bg-ink text-white rounded-2xl p-7 sm:p-8">
                <p className="text-xs font-mono uppercase tracking-widest text-orange2 mb-5">Dispatch Hours</p>
                <div className="space-y-4">
                  {HOURS.map(([label, time]) => (
                    <div key={label} className="flex justify-between gap-4 text-sm border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      <span className="text-white/70">{label}</span>
                      <span className="text-white font-medium text-right shrink-0">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="tilt-card bg-gradient-to-br from-orange to-maroon rounded-2xl p-7 sm:p-8 text-white" style={{ "--tilt": "-1.5deg" }}>
                <div className="flex gap-1 mb-4 text-white">{"★★★★★"}</div>
                <p className="text-white/90 leading-relaxed mb-5">
                  "Had a breakdown on I-80 at midnight. My dispatcher had a shop lined up
                  before the tow truck even arrived."
                </p>
                <p className="font-display font-bold text-sm">Tomas Wren</p>
                <p className="text-xs text-white/70 mt-0.5">Owner-Operator, Dry Van</p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-white border border-line rounded-2xl p-7 sm:p-8 flex items-center gap-5">
                <span className="font-display font-bold text-4xl text-orange">48h</span>
                <p className="text-sm text-ink/60">Average time from onboarding to a carrier's first booked load.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="bg-stone2 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <span className="tag-index font-mono text-xs text-ink/45">NEXT STEPS</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-4 mb-14">What Happens After You Reach Out</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NEXT_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="card-premium h-full bg-white border border-line rounded-2xl p-8">
                  <p className="font-display font-bold text-4xl text-orange/30 mb-6">{s.n}</p>
                  <h3 className="font-display font-bold text-xl text-ink mb-3">{s.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MINI FAQ */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-24">
        <Reveal>
          <span className="tag-index font-mono text-xs text-ink/45">QUICK QUESTIONS</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-4 mb-12">Before You Reach Out</h2>
        </Reveal>
        <div className="space-y-4">
          {MINI_FAQ.map((f, i) => (
            <Reveal key={f.q} delay={i * 80}>
              <div className="border border-line rounded-2xl bg-white px-6 py-5">
                <p className="font-display font-bold text-ink mb-2">{f.q}</p>
                <p className="text-ink/60 text-sm leading-relaxed">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="mt-8 text-center">
            <Link href="/faq" className="font-mono text-sm text-ink border-b border-orange pb-1 hover:text-orange transition-colors">
              See the full FAQ
            </Link>
          </p>
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-ink py-24">
        <div className="absolute w-[420px] h-[420px] bg-orange/20 rounded-full blur-[120px] -top-20 -right-20" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              Real Dispatchers. Real Fast.
            </h2>
            <p className="text-white/60 mb-10">Skip the form entirely and call us right now.</p>
            <a href="tel:+14094193788" className="inline-block px-10 py-4 rounded-full bg-orange text-white font-bold hover:bg-white hover:text-ink transition-colors text-lg">
              +1 (409) 419-3788
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
