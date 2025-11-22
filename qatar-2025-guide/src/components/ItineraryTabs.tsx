"use client";

import { useState } from "react";
import type { Itinerary } from "@/data/content";

type Props = {
  itineraries: Itinerary[];
};

export function ItineraryTabs({ itineraries }: Props) {
  const [activeId, setActiveId] = useState(itineraries[0]?.id);
  const active = itineraries.find((item) => item.id === activeId) ?? itineraries[0];

  return (
    <div className="w-full overflow-hidden rounded-3xl border border-white/15 bg-white/60 shadow-2xl backdrop-blur-xl transition dark:bg-black/40">
      <div className="flex flex-wrap gap-3 border-b border-white/20 bg-gradient-to-r from-rose-500/10 via-white/30 to-amber-500/10 p-4 dark:via-black/30">
        {itineraries.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={[
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                isActive
                  ? "bg-rose-500 text-white shadow-lg shadow-rose-500/40"
                  : "bg-white/70 text-rose-600 hover:bg-rose-100 dark:bg-white/10 dark:text-rose-200 dark:hover:bg-white/20",
              ].join(" ")}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 p-8 sm:grid-cols-[1.2fr_1fr] sm:gap-10">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
              {active.duration}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
              {active.overview}
            </h3>
          </div>
          <ul className="grid gap-2 text-sm text-slate-700 dark:text-slate-200">
            {active.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 rounded-xl bg-white/80 px-3 py-2 text-sm shadow-sm ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10"
              >
                <span className="mt-0.5 text-rose-500">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          {active.days.map((day) => (
            <article
              key={day.title}
              className="rounded-2xl border border-white/30 bg-white/80 p-5 shadow-md shadow-rose-200/30 transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/10 dark:shadow-black/50"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-rose-400">
                {day.time} • {day.location}
              </p>
              <h4 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                {day.title}
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-200">
                {day.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
