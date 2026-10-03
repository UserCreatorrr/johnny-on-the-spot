"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { OTS_PROJECTS, usedCategories } from "@/lib/on-the-spot";
import { projectCover, mediaNote } from "@/lib/ots-editorial";
import { type Locale, localizeHref } from "@/lib/i18n";
import VideoEmbed from "./VideoEmbed";

export default function OtsGrid({ locale = "es" }: { locale?: Locale }) {
  const [active, setActive] = useState<string | null>(null);
  const projects = active ? OTS_PROJECTS.filter(p => p.category === active) : OTS_PROJECTS;
  const es = locale === "es";
  return <section id="projects" aria-label={es ? "Todos los proyectos" : "All projects"}>
    <div className="border-y border-white/15 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-wrap gap-x-6 gap-y-4 items-center">
        <button type="button" onClick={() => setActive(null)} aria-pressed={active === null} className={`text-xs tracking-widest uppercase transition-colors ${active === null ? "text-white underline underline-offset-8" : "text-white/60 hover:text-white"}`}>{es ? "Todos" : "All"}</button>
        {usedCategories().map(c => <button key={c.slug} type="button" onClick={() => setActive(c.slug)} aria-pressed={active === c.slug} className={`text-xs tracking-widest uppercase transition-colors ${active === c.slug ? "text-white underline underline-offset-8" : "text-white/60 hover:text-white"}`}>{c.label[locale]}</button>)}
        <span className="text-white/60 text-xs font-mono ml-auto" aria-live="polite">{projects.length} {es ? "proyectos" : "projects"}</span>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 lg:gap-y-20">
      {projects.map((p, i) => {
        const cover = projectCover(p);
        const href = localizeHref(`/on-the-spot/${p.slug}`, locale);
        return <article key={p.slug} data-project={p.slug}>
          <div data-project-media>
            {p.video ? <VideoEmbed key={p.slug} video={p.video} poster={cover} locale={locale} compact /> : <Link href={href} className="group relative block aspect-[3/2] bg-[#0c0c0c] overflow-hidden border border-white/10 hover:border-white/40 transition-colors">
              <Image src={cover.src} alt={`${p.client}: ${p.title[locale]}`} fill quality={92} sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 592px" className="object-contain transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.015]" priority={i < 2} />
            </Link>}
          </div>
          <p className="mt-5 text-white/60 text-[11px] tracking-widest uppercase font-mono">{String(OTS_PROJECTS.indexOf(p) + 1).padStart(2, "0")} · {p.client}</p>
          <h2 className="mt-2 font-black text-2xl lg:text-3xl tracking-tighter leading-tight"><Link href={href} className="hover:text-white/70 transition-colors">{p.title[locale]} <span aria-hidden="true" className="text-white/40">↗</span></Link></h2>
          <p className="mt-3 text-white/60 text-sm leading-relaxed">{p.description[locale]}</p>
          {!p.video && <p className="mt-3 text-[10px] text-white/50">{mediaNote(p, locale)}</p>}
        </article>;
      })}
    </div>
  </section>;
}
