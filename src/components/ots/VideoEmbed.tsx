"use client";

import Image from "next/image";
import { useState } from "react";
import type { OtsImage, OtsVideo } from "@/lib/on-the-spot";
import type { Locale } from "@/lib/i18n";

const COPY = {
  es: { play: "Reproducir vídeo", label: "Vídeo del proyecto" },
  en: { play: "Play video", label: "Project video" },
} as const;

function embedSrc(video: Exclude<OtsVideo, { type: "file" }>) {
  return video.type === "youtube"
    ? `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`
    : `https://drive.google.com/file/d/${video.id}/preview`;
}

/**
 * Click-to-load video facade: shows a local poster until the user hits play.
 * Self-hosted files play in a native <video>; YouTube/Drive fall back to an iframe
 * that is only requested once the user asks for it.
 */
export default function VideoEmbed({
  video,
  poster,
  locale = "es",
}: {
  video: OtsVideo;
  poster?: OtsImage;
  locale?: Locale;
}) {
  const [active, setActive] = useState(false);
  const copy = COPY[locale];

  return (
    <div className="relative w-full aspect-video bg-black overflow-hidden border border-white/10">
      {active && video.type === "file" ? (
        <video
          src={video.src}
          poster={poster?.src}
          controls
          autoPlay
          playsInline
          preload="metadata"
          aria-label={copy.label}
          className="absolute inset-0 w-full h-full object-contain bg-black"
        />
      ) : active && video.type !== "file" ? (
        <iframe
          src={embedSrc(video)}
          title={copy.label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={copy.play}
          className="group absolute inset-0 w-full h-full cursor-pointer"
        >
          {poster && (
            <Image
              src={poster.src}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
            />
          )}
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <span className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center group-hover:border-white group-hover:scale-110 transition-all duration-300">
              <svg width="20" height="24" viewBox="0 0 20 24" fill="none" aria-hidden="true" className="ml-1">
                <path d="M0 0L20 12L0 24V0Z" fill="currentColor" className="text-white" />
              </svg>
            </span>
            <span className="text-white/60 text-xs tracking-widest uppercase group-hover:text-white transition-colors">
              {copy.play}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
