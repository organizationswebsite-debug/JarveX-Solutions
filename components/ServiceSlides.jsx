"use client";

import { useState } from "react";

export default function ServiceSlides({ slides }) {
  const [active, setActive] = useState(0);

  return (
    <div className="border border-line rounded-2xl bg-white overflow-hidden shadow-xl">
      <div className="relative h-64 md:h-80 bg-gradient-to-br from-orange to-maroon flex items-center justify-center p-10 overflow-hidden">
        <div className="absolute w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
        <div className="relative text-center">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-white/70 mb-4">
            {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </p>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            {slides[active].title}
          </h3>
          <p className="text-white/75 max-w-md mx-auto leading-relaxed">{slides[active].copy}</p>
        </div>
      </div>
      <div className="flex border-t border-line">
        {slides.map((s, i) => (
          <button
            key={s.title}
            onClick={() => setActive(i)}
            className={`flex-1 py-4 text-xs font-mono uppercase tracking-wider transition-colors ${
              active === i ? "bg-ink text-orange2" : "bg-stone text-ink/50 hover:bg-white"
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>
    </div>
  );
}

