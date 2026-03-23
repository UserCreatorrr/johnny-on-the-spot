"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Case = {
  slug: string;
  client: string;
  title: string;
  videoUrl?: string;
};

export default function CasesVideoSection({ cases }: { cases: Case[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      // How far we've scrolled into the section (in viewport heights)
      const scrolled = -rect.top / vh;
      const index = Math.min(
        cases.length - 1,
        Math.max(0, Math.floor(scrolled))
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cases.length]);

  return (
    // Outer section: n * 100vh — provides the scroll space
    <div
      ref={sectionRef}
      style={{ height: `${cases.length * 100}vh` }}
      className="relative"
    >
      {/* Sticky viewport — stays pinned while user scrolls through all cases */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {cases.map((c, i) => (
          <Link
            key={c.slug}
            href={`/casos/${c.slug}`}
            aria-label={`${c.client}: ${c.title}`}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Video */}
            {c.videoUrl && (
              <video
                src={c.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                aria-hidden="true"
              />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Text */}
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-10 lg:p-16">
              <p className="text-white/60 text-xs tracking-widest uppercase mb-4">
                {c.client}
              </p>
              <h3 className="text-white font-black text-4xl lg:text-6xl tracking-tighter leading-none max-w-3xl">
                {c.title}
              </h3>
            </div>

            {/* Case counter */}
            <div className="absolute bottom-10 right-10 lg:right-16 z-10 text-white/30 text-sm font-light tracking-widest">
              {String(i + 1).padStart(2, "0")} / {String(cases.length).padStart(2, "0")}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
