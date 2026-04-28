"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [openSlug, setOpenSlug] = useState<string | null>(null);

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

      <div>
        {cases.map((c, i) => {
          const isOverlay = OVERLAY_SLUGS.includes(c.slug);
          const inner = (
            <div className="relative h-screen overflow-hidden">
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
            </div>
          );

          return isOverlay ? (
            <button
              key={c.slug}
              onClick={() => setOpenSlug(c.slug)}
              aria-label={`${c.client}: ${c.title}`}
              className="w-full text-left"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "block" }}
            >
              {inner}
            </button>
          ) : (
            <Link
              key={c.slug}
              href={`/casos/${c.slug}`}
              aria-label={`${c.client}: ${c.title}`}
              className="block"
            >
              {inner}
            </Link>
          );
        })}
      </div>
    </>
  );
}
