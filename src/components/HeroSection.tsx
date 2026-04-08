"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const [panelX,       setPanelX]       = useState(100);
  const [blackCover,   setBlackCover]   = useState(94); // 94% = 6% peek of video at bottom
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh      = window.innerHeight;

      // Phase 1 (0 → vh/2): white panel slides in from right
      const p1 = Math.min(1, Math.max(0, scrollY / (vh * 0.5)));
      setPanelX((1 - p1) * 100);

      // Phase 2 (vh/2 → vh): black cover shrinks from bottom,
      // revealing the fixed BackgroundVideo through the transparent main
      const p2 = Math.min(1, Math.max(0, (scrollY - vh * 0.5) / (vh * 0.5)));
      setBlackCover((1 - p2) * 94); // goes from 94% → 0%

      // Nav theme
      if (sectionRef.current) {
        const isDark = p1 < 0.5 || p2 > 0.3;
        sectionRef.current.setAttribute("data-nav-theme", isDark ? "dark" : "light");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero-section"
      data-nav-theme="dark"
      className="relative"
      style={{ height: "200vh" }}
      aria-labelledby="hero-heading"
    >
      <div className="sticky top-0 overflow-hidden" style={{ height: "100vh" }}>

        {/* White panel slides in from right */}
        <div
          className="absolute inset-0 bg-white will-change-transform"
          style={{ transform: `translateX(${panelX}%)` }}
          aria-hidden="true"
        />

        {/* Logo — mix-blend-mode difference: white on black → black on white */}
        <div
          className="absolute inset-0 z-10 flex items-center justify-center px-6"
          style={{ mixBlendMode: "difference" }}
        >
          <Image
            src="/logo-hero.png"
            alt="Johnny on the Spot"
            width={900}
            height={270}
            id="hero-heading"
            className="w-auto max-w-xs sm:max-w-md lg:max-w-2xl xl:max-w-3xl object-contain"
            priority
          />
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 pointer-events-none"
          style={{ opacity: Math.max(0, 1 - (100 - blackCover) / 30) * (panelX / 100) }}
          aria-hidden="true"
        >
          <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent mt-1" />
        </div>

        {/* Black cover — shrinks from the bottom, revealing BackgroundVideo beneath */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: `${blackCover}%`,
            background: "#000",
            zIndex: 15,
            willChange: "height",
          }}
        />

      </div>
    </section>
  );
}
