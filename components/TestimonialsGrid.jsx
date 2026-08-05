"use client";

import { useState } from "react";
import { testimonials } from "@/lib/testimonials";

const FILTERS = [
  { key: "all", label: "All Carriers" },
  { key: "owner-operator", label: "Owner-Operators" },
  { key: "fleet", label: "Fleet Owners" },
];

export default function TestimonialsGrid() {
  const [filter, setFilter] = useState("all");
  const list = filter === "all" ? testimonials : testimonials.filter((t) => t.type === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-12 justify-center">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              filter === f.key ? "bg-orange text-white" : "bg-white border border-line text-ink/60 hover:border-orange/50"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {list.map((t) => (
          <div
            key={t.name}
            className="straight-card bg-white border border-line rounded-2xl p-7 sm:p-8 h-full"
            style={{ "--straight": `${t.straight}deg` }}
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex gap-0.5 text-orange text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < t.rating ? "" : "opacity-20"}>★</span>
                ))}
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-ink/40 border border-line rounded-full px-2.5 py-1">
                {t.equipment}
              </span>
            </div>
            <p className="text-ink/70 leading-relaxed mb-6">"{t.quote}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-line">
              <div className="w-9 h-9 rounded-full bg-ink flex items-center justify-center text-orange2 text-xs font-bold shrink-0">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-display font-bold text-sm text-ink">{t.name}</p>
                <p className="text-xs text-ink/45">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
