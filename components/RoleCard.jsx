"use client";

import { useState } from "react";

export default function RoleCard({ role, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`card-premium border rounded-2xl bg-white overflow-hidden transition-colors ${
        open ? "border-orange/50 shadow-xl" : "border-line"
      }`}
    >
      <button onClick={() => setOpen(!open)} className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-6">
        <div className="flex gap-5 sm:gap-6">
          <span className="hidden sm:flex w-11 h-11 rounded-xl bg-ink text-orange2 font-display font-bold items-center justify-center text-sm shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-orange border border-orange/30 rounded-full px-2.5 py-1">
                {role.department}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-ink/40">
                {role.type} · {role.location}
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-ink">{role.title}</h3>
            <p className="text-ink/55 text-sm mt-2 max-w-xl">{role.summary}</p>
          </div>
        </div>
        <span className={`text-orange text-2xl shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>

      <div className="grid transition-all duration-400 ease-out" style={{ gridTemplateRows: open ? "1fr" : "0fr" }}>
        <div className="overflow-hidden">
          <div className="px-6 sm:px-8 pb-8 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-line ml-0 sm:ml-[68px]">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-widest text-ink/45 mb-3 mt-6">Responsibilities</p>
              <ul className="space-y-2.5">
                {role.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-ink/65">
                    <span className="text-orange mt-1 shrink-0">◆</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-widest text-ink/45 mb-3 mt-6">What We're Looking For</p>
              <ul className="space-y-2.5">
                {role.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-ink/65">
                    <span className="text-orange mt-1 shrink-0">◆</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={`#apply?role=${encodeURIComponent(role.title)}`}
              className="sm:col-span-2 inline-block w-fit px-6 py-3 rounded-full bg-orange text-white text-sm font-bold hover:bg-ink transition-colors"
            >
              Apply For This Role
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

