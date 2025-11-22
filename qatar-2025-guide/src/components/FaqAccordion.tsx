"use client";

import { useState } from "react";

type Item = {
  question: string;
  answer: string;
};

type Props = {
  faqs: Item[];
};

export function FaqAccordion({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {faqs.map((item, index) => {
        const isOpen = index === openIndex;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-3xl border border-white/20 bg-white/70 shadow-md shadow-slate-200/50 transition dark:bg-white/5 dark:shadow-black/50"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
            >
              <span className="text-base font-semibold text-slate-900 dark:text-white">
                {item.question}
              </span>
              <span
                className={[
                  "flex h-9 w-9 items-center justify-center rounded-full border text-sm font-bold text-rose-500 transition",
                  isOpen
                    ? "border-rose-400 bg-rose-100 dark:border-rose-300/60 dark:bg-rose-300/10"
                    : "border-white/40 bg-white/70 dark:border-white/10 dark:bg-white/10",
                ].join(" ")}
                aria-hidden
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="border-t border-white/20 bg-white/80 px-6 py-5 text-sm leading-7 text-slate-600 dark:bg-white/10 dark:text-slate-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
