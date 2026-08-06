"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { plans } from "@/lib/pricing";
import ClientPlanForm from "@/components/ClientPlanForm";
import SalesContactForm from "@/components/SalesContactForm";

export default function PricingCards() {
  const [activePlan, setActivePlan] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (activePlan) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activePlan]);

  const modal = activePlan && (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-6">
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={() => setActivePlan(null)} />
      <div className="relative bg-white w-full h-full sm:h-auto sm:max-h-[90vh] sm:rounded-[28px] sm:max-w-lg overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-line px-6 sm:px-8 py-4 flex items-center justify-between z-10">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-orange">{activePlan.name}</p>
            <p className="font-display font-bold text-lg text-ink">
              {activePlan.formType === "sales" ? "Talk To Sales" : "Client Details"}
            </p>
          </div>
          <button
            onClick={() => setActivePlan(null)}
            className="w-9 h-9 rounded-full bg-stone flex items-center justify-center text-ink/60 hover:bg-ink hover:text-white transition-colors shrink-0"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {activePlan.formType === "sales" ? (
          <SalesContactForm plan={activePlan} onClose={() => setActivePlan(null)} />
        ) : (
          <ClientPlanForm plan={activePlan} onClose={() => setActivePlan(null)} />
        )}
      </div>
    </div>
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {plans.map((p) => (
          <div
            key={p.slug}
            className={`h-full rounded-2xl p-8 md:p-10 flex flex-col ${
              p.highlight
                ? "bg-gradient-to-b from-orange to-maroon text-white border-2 border-ink shadow-2xl md:-translate-y-4"
                : "bg-white border border-line"
            }`}
          >
            {p.highlight && (
              <span className="self-start px-3 py-1 rounded-full bg-white text-orange text-xs font-bold mb-4">Most Popular</span>
            )}
            <h2 className={`font-display font-bold text-xl mb-2 ${p.highlight ? "text-white" : "text-ink"}`}>{p.name}</h2>
            <p className={`text-sm mb-6 ${p.highlight ? "text-white/70" : "text-ink/55"}`}>{p.tagline}</p>
            <p className={`font-display font-bold text-5xl mb-1 ${p.highlight ? "text-white" : "text-ink"}`}>{p.rate}</p>
            <p className={`text-xs mb-8 ${p.highlight ? "text-white/60" : "text-ink/45"}`}>
              {p.slug === "enterprise" ? "custom structure" : "of booked load rate"}
            </p>
            <ul className="space-y-3 mb-4 flex-1">
              {p.features.map((f) => (
                <li key={f} className={`flex items-start gap-3 text-sm ${p.highlight ? "text-white/85" : "text-ink/70"} ${f.endsWith(":") ? "font-semibold" : ""}`}>
                  {!f.endsWith(":") && <span className={p.highlight ? "text-white" : "text-orange"}>✓</span>}
                  {f}
                </li>
              ))}
            </ul>
            {p.notIncluded.length > 0 && (
              <ul className="space-y-2 mb-6 pt-4 border-t border-line">
                {p.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-xs text-ink/35">
                    <span>✕</span>{f}
                  </li>
                ))}
              </ul>
            )}
            <button
              onClick={() => setActivePlan(p)}
              className={`mt-2 text-center py-3.5 rounded-full font-bold transition-opacity hover:opacity-90 ${
                p.highlight ? "bg-white text-orange" : "bg-ink text-white"
              }`}
            >
              {p.cta}
            </button>
          </div>
        ))}
      </div>

      {mounted && modal && createPortal(modal, document.body)}
    </>
  );
}

