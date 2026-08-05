"use client";

import { useState } from "react";
import { faqCategories } from "@/lib/faq";

export default function FaqAccordion() {
  const [active, setActive] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const current = faqCategories[active];

  return (
    <div>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {faqCategories.map((c, i) => (
          <button
            key={c.category}
            onClick={() => { setActive(i); setOpenIndex(null); }}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              active === i ? "bg-orange text-white" : "bg-white border border-line text-ink/60 hover:border-orange/50"
            }`}
          >
            {c.category}
          </button>
        ))}
      </div>

      {/* Accordion items */}
      <div className="space-y-4">
        {current.items.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={f.q}
              className={`border rounded-2xl bg-white px-6 py-5 transition-colors ${isOpen ? "border-orange/50 shadow-lg" : "border-line"}`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex items-center justify-between w-full text-left gap-6"
              >
                <span className="font-display font-bold text-lg text-ink">{f.q}</span>
                <span className={`text-orange text-xl shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
              </button>
              <div
                className="grid transition-all duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="text-ink/60 leading-relaxed pt-4">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
