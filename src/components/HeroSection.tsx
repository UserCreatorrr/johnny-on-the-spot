"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const [panelX, setPanelX] = useState(100);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const pct = Math.min(1, Math.max(0, scrollY / vh));
      setPanelX((1 - pct) * 100);
      if (sectionRef.current) {
        sectionRef.current.setAttribute("data-nav-theme", pct > 0.5 ? "light" : "dark");
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
      {/* 1. Sticky logo — ocupa casi todo el viewport */}
      <div
        className="sticky top-0 overflow-hidden bg-black"
        style={{ height: "calc(100vh - 80px)", zIndex: 10 }}
      >
        <div
          className="absolute inset-0 bg-white will-change-transform"
          style={{ transform: `translateX(${panelX}%)` }}
          aria-hidden="true"
        />
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
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 pointer-events-none"
          style={{ opacity: (panelX / 100) * 0.5 }}
          aria-hidden="true"
        >
          <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent mt-1" />
        </div>
      </div>

      {/* 2. Sticky video preview — se ancla en los 80px inferiores */}
      <div
        style={{
          position: "sticky",
          top: "calc(100vh - 80px)",
          height: "80px",
          overflow: "hidden",
          zIndex: 5,
          marginTop: "-80px",
        }}
        aria-hidden="true"
      >
        <video
          src="https://evolutionapi-video-jots.d4s5yj.easypanel.host/videos/jots-agency.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            transform: "translateY(calc(-100vh + 80px))",
          }}
        />
      </div>
    </section>
  );
}
