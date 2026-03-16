"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TypingAnimation } from "@/components/ui/TypingAnimation";

export default function HeroSection() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      // Fade out completely over the first 35% of a viewport scroll
      setOpacity(Math.max(0, 1 - scrollY / (vh * 0.35)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      data-nav-theme="dark"
      className="relative min-h-screen flex flex-col items-center justify-center px-6"
      aria-labelledby="hero-heading"
    >
      <div
        className="flex flex-col items-center text-center"
        style={{ opacity }}
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

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ opacity: opacity * 0.35 }}
        aria-hidden="true"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent mt-1" />
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
