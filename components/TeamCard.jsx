export default function TeamCard({ member }) {
  return (
    <div className="card-premium group relative bg-white rounded-2xl overflow-hidden border border-line h-full">
      <div className="relative h-72 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="eager" fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
        <span className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-widest text-white/90 bg-ink/50 backdrop-blur px-2.5 py-1 rounded-full">
          {member.department}
        </span>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="font-display font-bold text-lg text-white">{member.name}</p>
          <p className="text-xs text-orange2 mt-0.5">{member.role}</p>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm text-ink/55 leading-relaxed line-clamp-2 mb-4">{member.bio}</p>
        <span className="inline-block text-xs font-mono uppercase tracking-wider text-orange">
          View Portfolio →
        </span>
      </div>
    </div>
  );
}

