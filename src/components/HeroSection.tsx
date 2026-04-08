"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const [panelX,    setPanelX]    = useState(100);
  const [videoRise, setVideoRise] = useState(0.06);
  const sectionRef   = useRef<HTMLElement>(null);
  const videoRef     = useRef<HTMLVideoElement>(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh      = window.innerHeight;

      // Phase 1 (0 → vh/2): white panel slides in from right
      const p1 = Math.min(1, Math.max(0, scrollY / (vh * 0.5)));
      setPanelX((1 - p1) * 100);

      // Phase 2 (vh/2 → vh): video rises from 6% peek to 100%
      const p2 = Math.min(1, Math.max(0, (scrollY - vh * 0.5) / (vh * 0.5)));
      setVideoRise(0.06 + p2 * 0.94);

      // Video plays as soon as phase 2 begins (p2 > 0)
      const video = videoRef.current;
      if (video) {
        if (p2 > 0 && !isPlayingRef.current) {
          video.play().catch(() => {});
          isPlayingRef.current = true;
        } else if (p2 === 0 && isPlayingRef.current) {
          video.pause();
          video.currentTime = 0;
          isPlayingRef.current = false;
        }
      }

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
      style={{ height: "300vh" }}
      aria-labelledby="hero-heading"
    >
      <div className="sticky top-0 overflow-hidden" style={{ height: "100vh" }}>

        {/* Black background base */}
        <div className="absolute inset-0 bg-black" />

        {/* White panel slides in from right */}
        <div
          className="absolute inset-0 bg-white will-change-transform"
          style={{ transform: `translateX(${panelX}%)` }}
          aria-hidden="true"
        />

        {/* Logo */}
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
          style={{ opacity: Math.max(0, (panelX / 100) - (videoRise - 0.06) * 5) }}
          aria-hidden="true"
        >
          <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent mt-1" />
        </div>

        {/* Rising black panel — video spans full height, side margins only */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: `${videoRise * 100}%`,
            overflow: "hidden",
            zIndex: 15,
            background: "#000",
            willChange: "height",
          }}
          aria-hidden="true"
        >
          {/* height: 100vh fills top-to-bottom, width: auto leaves side margins */}
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              height: "100vh",
              width: "auto",
              maxWidth: "none",
            }}
          >
            <source src="https://evolutionapi-video-jots.d4s5yj.easypanel.host/videos/jots-agency.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </section>
  );
}
