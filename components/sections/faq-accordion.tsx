"use client";

import { useState } from "react";
import { faq } from "@/content/site";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gold/25 border-y border-gold/25">
      {faq.items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `faq-button-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div key={item.question}>
            <h2>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left font-sans focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <span className="text-base font-bold">{item.question}</span>
                <span aria-hidden="true" className="shrink-0 text-xl text-gold">
                  {isOpen ? "–" : "+"}
                </span>
              </button>
            </h2>
            {isOpen && (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="pb-6">
                <p className="font-sans text-base leading-relaxed font-normal text-ink-muted text-pretty">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
