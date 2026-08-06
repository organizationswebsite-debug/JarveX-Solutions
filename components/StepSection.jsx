const STEPS = [
  { n: "1", title: "Book Your Truck", copy: "Onboard in under an hour with your MC authority, insurance, and equipment details." },
  { n: "2", title: "Get Dispatched", copy: "Your dedicated dispatcher sources and negotiates freight matched to your lanes." },
  { n: "3", title: "Run The Miles", copy: "Route, fuel stops, and delivery windows planned so you're never guessing." },
  { n: "4", title: "Grow Your Fleet", copy: "Reliable performance unlocks first-look access to repeat, higher-paying freight." },
];

export default function StepSection() {
  return (
    <div className="w-full overflow-hidden rounded-[28px]">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {STEPS.map((s, i) => (
          <div
            key={s.n}
            className="relative px-6 py-14 md:py-20 text-white"
            style={{
              background: `linear-gradient(160deg, #FF6A1A ${0}%, #6E1E1E ${100}%)`,
              filter: `brightness(${1 - i * 0.08})`,
            }}
          >
            <p className="text-xs font-mono tracking-widest uppercase text-white/70 mb-6">Step {i + 1} of 4</p>
            <h3 className="font-display font-bold text-xl leading-snug mb-4">{s.title}</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-10 max-w-[220px]">{s.copy}</p>
            <p className="font-display font-bold text-white/25 text-7xl md:text-8xl leading-none absolute bottom-4 right-4">
              {s.n}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

