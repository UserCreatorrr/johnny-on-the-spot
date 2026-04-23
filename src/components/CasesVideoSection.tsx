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
  previewVideoUrl?: string;
};

const OVERLAY_SLUGS = [
  "sd-distribuciones-sand-games",
  "alcon-hydra-glide",
  "cocacola-kfc-together",
  "novartis-transplant-tomorrow",
];

export default function CasesVideoSection({ cases }: { cases: Case[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [openSlug, setOpenSlug] = useState<string | null>(null);

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
          {cases.map((c, i) => {
            const isOverlay = OVERLAY_SLUGS.includes(c.slug);
            const inner = (
              <>
                {c.videoUrl && (
                  <video
                    src={c.previewVideoUrl ?? c.videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover video-portrait-fit"
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
