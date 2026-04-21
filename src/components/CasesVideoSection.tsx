"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SandGamesMcCann from "@/components/SandGamesMcCann";
import AlconHydraglyde from "@/components/AlconHydraglyde";
import CocaColaKFC from "@/components/CocaColaKFC";
import NovartisCase from "@/components/NovartisCase";

type Case = {
  slug: string;
  client: string;
  title: string;
  videoUrl?: string;
};

const OVERLAY_SLUGS = [
  "sd-distribuciones-sand-games",
  "alcon-hydra-glide",
  "cocacola-kfc-together",
  "novartis-transplant-tomorrow",
];

export default function CasesVideoSection({ cases }: { cases: Case[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrolled = -rect.top / (vh * 2);
      const index = Math.min(cases.length - 1, Math.max(0, Math.floor(scrolled)));
      setActiveIndex(index);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cases.length]);

  // Control muted state via ref (React doesn't update muted reactively)
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video) video.muted = i !== activeIndex || muted;
    });
  }, [muted, activeIndex]);

  useEffect(() => {
    if (openSlug) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [openSlug]);

  const close = () => setOpenSlug(null);

  return (
    <>
      {openSlug === "sd-distribuciones-sand-games" && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9998, background: "#000" }}>
          <SandGamesMcCann onBack={close} />
        </div>
      )}
      {openSlug === "alcon-hydra-glide" && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9998, background: "#000" }}>
          <AlconHydraglyde onBack={close} />
        </div>
      )}
      {openSlug === "cocacola-kfc-together" && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9998, background: "#000" }}>
          <CocaColaKFC onBack={close} />
        </div>
      )}
      {openSlug === "novartis-transplant-tomorrow" && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9998, background: "#000" }}>
          <NovartisCase onBack={close} />
        </div>
      )}

      <div ref={sectionRef} style={{ height: `${cases.length * 200}vh` }} className="relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Mute / unmute button */}
          <button
            onClick={e => { e.stopPropagation(); setMuted(m => !m); }}
            className="absolute top-6 right-6 lg:top-8 lg:right-8 z-20 flex items-center gap-2 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white/80 hover:text-white text-xs tracking-widest uppercase px-4 py-2 transition-colors"
            aria-label={muted ? "Activar sonido" : "Silenciar"}
          >
            {muted ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z"/></svg>
                <span>Sonido</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 01-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z"/><path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z"/></svg>
                <span>Silenciar</span>
              </>
            )}
          </button>
          {cases.map((c, i) => {
            const isOverlay = OVERLAY_SLUGS.includes(c.slug);
            const inner = (
              <>
                {c.videoUrl && (
                  <video
                    ref={el => { videoRefs.current[i] = el; }}
                    src={c.videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-hidden="true"
                  />
                )}
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-10 lg:p-16">
                  <p className="text-white/60 text-xs tracking-widest uppercase mb-4">{c.client}</p>
                  <h3 className="text-white font-black text-4xl lg:text-6xl tracking-tighter leading-none max-w-3xl">{c.title}</h3>
                </div>
                <div className="absolute bottom-10 right-10 lg:right-16 z-10 text-white/30 text-sm font-light tracking-widest">
                  {String(i + 1).padStart(2, "0")} / {String(cases.length).padStart(2, "0")}
                </div>
              </>
            );

            return isOverlay ? (
              <button
                key={c.slug}
                onClick={() => setOpenSlug(c.slug)}
                aria-label={`${c.client}: ${c.title}`}
                className={`absolute inset-0 w-full h-full text-left transition-opacity duration-700 ${
                  i === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
              >
                {inner}
              </button>
            ) : (
              <Link
                key={c.slug}
                href={`/casos/${c.slug}`}
                aria-label={`${c.client}: ${c.title}`}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
