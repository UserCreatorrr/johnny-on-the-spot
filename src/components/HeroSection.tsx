"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TypingAnimation } from "@/components/ui/TypingAnimation";

export default function HeroSection() {
  const [scrollPct, setScrollPct] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      // White panel slides in over the first 45% of a viewport height
      const pct = Math.min(1, scrollY / (vh * 0.45));
      setScrollPct(pct);

      // Fade content out after panel is fully in
      setOpacity(Math.max(0, 1 - (scrollY - vh * 0.45) / (vh * 0.2)));

      // Switch nav logo color when >50% of panel is visible
      if (sectionRef.current) {
        sectionRef.current.setAttribute("data-nav-theme", pct > 0.5 ? "light" : "dark");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // translateX: 100% (off-screen right) → 0% (full coverage)
  const panelX = (1 - scrollPct) * 100;

  return (
    <section
      ref={sectionRef}
      data-nav-theme="dark"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-black"
      aria-labelledby="hero-heading"
    >
      {/* White panel that slides in from right */}
      <div
        className="absolute inset-0 bg-white will-change-transform"
        style={{ transform: `translateX(${panelX}%)` }}
        aria-hidden="true"
      />

      {/* Content: mix-blend-mode:difference auto-inverts logo+text on white panel */}
      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{ opacity, mixBlendMode: "difference" }}
      >
        <Image
          src="/logo-hero.png"
          alt="Johnny on the Spot"
          width={900}
          height={270}
          className="w-auto max-w-xs sm:max-w-md lg:max-w-2xl xl:max-w-3xl object-contain mb-10 lg:mb-14"
          priority
        />
        <TypingAnimation
          as="h1"
          id="hero-heading"
          className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-none text-white"
          startOnView={false}
          duration={60}
          showCursor={true}
        >
          A mano cuando se necesita.
        </TypingAnimation>
      </div>

      {/* Scroll hint — fades quickly */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none"
        style={{ opacity: Math.max(0, 1 - scrollPct * 4) * 0.35 }}
        aria-hidden="true"
      >
        <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent mt-1" />
      </div>

      {/* Credential strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 py-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-white/15 text-xs tracking-widest uppercase">
            Alcon · Novartis · Coca-Cola · SAP · Porsche · Meliá · Puig · Chopard · Carolina Herrera · Haribo · Glenfiddich · IKEA · Perrier · ISDIN
          </p>
        </div>
      </div>
    </section>
  );
}
