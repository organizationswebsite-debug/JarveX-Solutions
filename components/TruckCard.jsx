export default function TruckCard({ truck, size = "normal" }) {
  const h = size === "large" ? "h-[320px]" : "h-[760px]";
  return (
    <div
      className={`straight-card relative ${h} w-full max-w-[360px] rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white`}
      style={{ "--straight": `${truck.tilt}deg` }}
    >
      <img src={truck.image} alt={truck.name} className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 rounded-full px-2.5 py-1">
        <span className="text-orange text-xs">★</span>
        <span className="text-xs font-bold text-ink">{truck.rating}</span>
        <span className="text-[10px] text-ink/50">· {truck.loads} loads</span>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-[10px] font-mono uppercase tracking-widest text-orange2 mb-1">{truck.tag}</p>
        <p className="font-display font-bold text-lg text-white">{truck.name}</p>
      </div>
    </div>
  );
}
