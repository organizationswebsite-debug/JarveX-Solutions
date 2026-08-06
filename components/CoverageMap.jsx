"use client";

import { useState } from "react";
import { regions, totalStates } from "@/lib/states";

export default function CoverageMap() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative">
      {/* Decorative backdrop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
        <p className="font-display font-bold text-[18vw] leading-none select-none">USA</p>
      </div>

      <div className="relative">
        <div className="text-center mb-10">
          <p className="font-display font-bold text-5xl sm:text-6xl text-ink">{totalStates}</p>
          <p className="text-xs font-mono uppercase tracking-widest text-ink/45 mt-2">States Covered Nationwide</p>
        </div>

        {/* Region tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {regions.map((r, i) => (
            <button
              key={r.region}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                active === i ? "bg-orange text-white" : "bg-white border border-line text-ink/60 hover:border-orange/50"
              }`}
            >
              {r.region}
              <span className={`ml-2 text-xs ${active === i ? "text-white/70" : "text-ink/35"}`}>
                {r.states.length}
              </span>
            </button>
          ))}
        </div>

        {/* Animated state badges */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
          {regions[active].states.map((s, i) => (
            <span
              key={s}
              className="reveal is-visible bg-white border border-line rounded-full px-4 py-2 text-sm font-medium text-ink/75 hover:border-orange hover:text-orange hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

