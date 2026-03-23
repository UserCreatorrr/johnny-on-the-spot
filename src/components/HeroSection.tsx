"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TypingAnimation } from "@/components/ui/TypingAnimation";

export default function HeroSection() {
  const [panelX, setPanelX] = useState(100);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      // Panel completes exactly at scrollY = vh (one full viewport scroll)
      const pct = Math.min(1, Math.max(0, scrollY / vh));
      setPanelX((1 - pct) * 100);

      // Switch nav logo color when panel is >50% visible
      if (sectionRef.current) {
        sectionRef.current.setAttribute("data-nav-theme", pct > 0.5 ? "light" : "dark");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // 200vh outer section — the extra 100vh is the scroll space for the animation
    // The sticky inner container stays pinned until the user has scrolled the full animation
    <section
      ref={sectionRef}
      data-nav-theme="dark"
      className="relative"
      style={{ height: "200vh" }}
      aria-labelledby="hero-heading"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        {/* White panel slides in from right */}
        <div
          className="absolute inset-0 bg-white will-change-transform"
          style={{ transform: `translateX(${panelX}%)` }}
          aria-hidden="true"
        />

        {/* mix-blend-mode: difference — content auto-inverts on white panel */}
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6"
          style={{ mixBlendMode: "difference" }}
        >
          <div className="flex flex-col items-center text-center">
            <Image
              src="/logo-hero.png"
              alt="Johnny on the Spot"
              width={900}
              height={270}
              className="w-auto max-w-xs sm:max-w-md lg:max-w-2xl xl:max-w-3xl object-contain mb-10 lg:mb-14"
              priority
            />
          </div>

          {/* Credential strip — inside blend div so it also inverts */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-white/30 py-4">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <p className="text-white/50 text-xs tracking-widest uppercase">
                Alcon · Novartis · Coca-Cola · SAP · Porsche · Meliá · Puig · Chopard · Carolina Herrera · Haribo · Glenfiddich · IKEA · Perrier · ISDIN
              </p>
            </div>
          </div>
        </div>

        {/* Scroll hint — outside blend div, fades as panel slides in */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 pointer-events-none"
          style={{ opacity: (panelX / 100) * 0.4 }}
          aria-hidden="true"
        >
          <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent mt-1" />
        </div>
      </div>
    </section>
  );
}
