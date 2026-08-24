"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { OTS_PROJECTS, usedCategories } from "@/lib/on-the-spot";
import { type Locale, localizeHref } from "@/lib/i18n";

const COPY = {
  es: { all: "Todos", counter: (n: number) => `${n} proyectos`, one: "1 proyecto", watch: "Vídeo" },
  en: { all: "All", counter: (n: number) => `${n} projects`, one: "1 project", watch: "Video" },
} as const;

export default function OtsGrid({ locale = "es" }: { locale?: Locale }) {
  const [active, setActive] = useState<string | null>(null);
  const copy = COPY[locale];
  const categories = useMemo(() => usedCategories(), []);

  const projects = useMemo(
    () => (active ? OTS_PROJECTS.filter((p) => p.category === active) : OTS_PROJECTS),
    [active]
  );

  return (
    <>
      {/* Filter bar */}
      <div className="sticky top-16 lg:top-20 z-30 bg-black/90 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex gap-x-5 gap-y-2 flex-wrap items-center">
            <button
              onClick={() => setActive(null)}
              aria-pressed={active === null}
              className={`text-xs tracking-widest uppercase transition-colors ${
                active === null ? "text-white" : "text-white/30 hover:text-white/70"
              }`}
            >
              {copy.all}
            </button>
            {categories.map((c) => (
              <button
                key={c.slug}
                onClick={() => setActive(c.slug)}
                aria-pressed={active === c.slug}
                className={`text-xs tracking-widest uppercase transition-colors ${
                  active === c.slug ? "text-white" : "text-white/30 hover:text-white/70"
                }`}
              >
                {c.label[locale]}
              </button>
            ))}
            <span className="ml-auto text-white/20 text-xs tracking-widest uppercase tabular-nums">
              {projects.length === 1 ? copy.one : copy.counter(projects.length)}
            </span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {projects.map((p, i) => {
            const hero = p.images[0];
            return (
              <Link
                key={p.slug}
                href={localizeHref(`/on-the-spot/${p.slug}`, locale)}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.03] border border-white/10 group-hover:border-white/30 transition-colors duration-300">
                  {hero && (
                    <Image
                      src={hero.src}
                      alt={`${p.client}: ${p.title[locale]}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      loading={i < 6 ? "eager" : "lazy"}
                    />
                  )}
                  {p.video && (
                    <span className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm px-2.5 py-1 text-[10px] tracking-widest uppercase text-white/80">
                      <svg width="7" height="9" viewBox="0 0 20 24" fill="currentColor" aria-hidden="true">
                        <path d="M0 0L20 12L0 24V0Z" />
                      </svg>
                      {copy.watch}
                    </span>
                  )}
                </div>
                <p className="mt-5 text-white/25 text-[11px] tracking-widest uppercase font-mono">
                  {String(i + 1).padStart(2, "0")} · {p.client}
                </p>
                <h3 className="mt-2 text-white font-black text-xl lg:text-2xl tracking-tighter leading-tight group-hover:text-white/70 transition-colors">
                  {p.title[locale]}
                </h3>
                <p className="mt-2 text-white/40 text-sm leading-relaxed line-clamp-2">
                  {p.description[locale]}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
