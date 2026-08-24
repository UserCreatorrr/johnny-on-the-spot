"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { OtsImage } from "@/lib/on-the-spot";
import type { Locale } from "@/lib/i18n";

const COPY = {
  es: { close: "Cerrar", prev: "Anterior", next: "Siguiente", open: "Ampliar imagen" },
  en: { close: "Close", prev: "Previous", next: "Next", open: "Enlarge image" },
} as const;

export default function OtsGallery({
  images,
  alt,
  locale = "es",
}: {
  images: OtsImage[];
  alt: string;
  locale?: Locale;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const copy = COPY[locale];

  const move = useCallback(
    (delta: number) => {
      setOpen((cur) => (cur === null ? null : (cur + delta + images.length) % images.length));
    },
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, move]);

  if (!images.length) return null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setOpen(i)}
            aria-label={copy.open}
            className={`group relative overflow-hidden bg-white/[0.03] border border-white/10 hover:border-white/30 transition-colors cursor-zoom-in ${
              images.length % 2 === 1 && i === 0 ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={img.src}
              alt={alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              loading={i < 2 ? "eager" : "lazy"}
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(null)}
        >
          <button
            onClick={() => setOpen(null)}
            aria-label={copy.close}
            className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M1 1l18 18M19 1L1 19" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); move(-1); }}
                aria-label={copy.prev}
                className="absolute left-4 lg:left-8 z-10 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M15 4l-8 8 8 8" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); move(1); }}
                aria-label={copy.next}
                className="absolute right-4 lg:right-8 z-10 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 4l8 8-8 8" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </button>
            </>
          )}

          <div className="relative w-full h-full p-12 lg:p-20" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[open].src}
              alt={alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-widest font-mono tabular-nums">
            {String(open + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </p>
        </div>
      )}
    </>
  );
}
