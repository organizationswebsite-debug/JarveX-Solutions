export default function QuickContactCard({ icon, label, value, sub, href }) {
  return (
    <a
      href={href}
      className="card-premium group flex flex-col items-start gap-3 bg-white border border-line rounded-2xl p-6 h-full"
    >
      <span className="w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center text-orange text-lg group-hover:bg-orange group-hover:text-white transition-colors">
        {icon}
      </span>
      <div>
        <p className="text-[11px] font-mono uppercase tracking-widest text-ink/45">{label}</p>
        <p className="font-display font-bold text-lg text-ink mt-1 break-words">{value}</p>
        {sub && <p className="text-xs text-ink/45 mt-1">{sub}</p>}
      </div>
    </a>
  );
}

