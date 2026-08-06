const STATS = [
  { label: "Loads Dispatched / Month", value: "9,400+" },
  { label: "Avg. Response Time", value: "< 4 MIN" },
  { label: "Avg. Rate Secured", value: "$3.12/MI" },
  { label: "On-Time Delivery", value: "98.6%" },
  { label: "Carriers Onboard", value: "310+" },
];

export default function StatTicker() {
  const row = [...STATS, ...STATS];
  return (
    <div className="border-y border-line bg-white py-5 overflow-hidden ticker-mask">
      <div className="flex w-max animate-marquee gap-16">
        {row.map((s, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <span className="font-display font-bold text-lg text-ink">{s.value}</span>
            <span className="text-[11px] tracking-[0.15em] uppercase text-ink/45 font-medium">{s.label}</span>
            <span className="text-orange/50 ml-10">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

