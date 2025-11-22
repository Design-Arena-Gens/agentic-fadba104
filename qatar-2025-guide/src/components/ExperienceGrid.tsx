"use client";

import { useMemo, useState } from "react";

type Experience = {
  title: string;
  description: string;
  category: string;
  duration: string;
};

type Props = {
  experiences: Experience[];
};

const filters = ["الكل", "ثقافة", "استرخاء", "مغامرة", "تقنية"] as const;

export function ExperienceGrid({ experiences }: Props) {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("الكل");

  const filtered = useMemo(() => {
    if (activeFilter === "الكل") {
      return experiences;
    }

    return experiences.filter((item) => item.category === activeFilter);
  }, [activeFilter, experiences]);

  return (
    <section className="w-full">
      <div className="flex flex-wrap gap-3 pb-6">
        {filters.map((filter) => {
          const isActive = filter === activeFilter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
              className={[
                "rounded-full border px-4 py-2 text-sm font-semibold transition",
                isActive
                  ? "border-transparent bg-amber-500 text-white shadow-lg shadow-amber-400/40"
                  : "border-white/20 bg-white/40 text-amber-700 hover:bg-white/70 dark:bg-white/10 dark:text-amber-200 dark:hover:bg-white/20",
              ].join(" ")}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {filtered.map((experience) => (
          <article
            key={experience.title}
            className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 p-6 shadow-lg shadow-amber-100 transition hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-2xl dark:bg-white/5 dark:shadow-black/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/10 to-rose-500/10 opacity-0 transition group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
                <span>{experience.category}</span>
                <span>{experience.duration}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                {experience.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">
                {experience.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
