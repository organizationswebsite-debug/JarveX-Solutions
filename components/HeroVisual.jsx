export default function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute w-[380px] h-[380px] bg-orange/20 rounded-full blur-[100px]" />

      <div className="relative w-full max-w-md rounded-[28px] overflow-hidden shadow-2xl rotate-2 animate-floatY border-4 border-white" style={{ "--tilt": "2deg" }}>
        <img
          src="/homehero.jpeg"
          alt="Semi truck on the highway"
          className="w-full h-[420px] object-cover"
          loading="eager" fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-white/70 text-xs font-mono uppercase tracking-widest mb-1">On The Road</p>
          <p className="text-white font-display font-bold text-xl">Dallas → Memphis</p>
        </div>
      </div>

      <div className="absolute -top-6 -right-2 md:right-4 bg-ink text-white rounded-2xl shadow-xl px-5 py-4 animate-floatY" style={{ animationDelay: "1.2s", "--tilt": "-4deg" }}>
        <p className="text-2xl font-display font-bold text-orange2">98.6%</p>
        <p className="text-[10px] font-mono tracking-widest uppercase text-white/60 mt-1">On-Time Rate</p>
      </div>

      <div className="absolute -bottom-6 -left-4 md:left-0 bg-white rounded-2xl shadow-xl px-5 py-4 border border-line animate-floatY" style={{ animationDelay: "2.4s", "--tilt": "3deg" }}>
        <p className="text-2xl font-display font-bold text-ink">4 min</p>
        <p className="text-[10px] font-mono tracking-widest uppercase text-ink/45 mt-1">Avg Response</p>
      </div>
    </div>
  );
}

