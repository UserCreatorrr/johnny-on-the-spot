"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const scrollY = window.scrollY;
      const totalScroll = el.offsetHeight - window.innerHeight;
      const pct = Math.min(1, Math.max(0, scrollY / totalScroll));
      setProgress(pct);

      // nav theme: dark while logo visible, light when white panel covers, dark again when video
      if (pct < 0.5) {
        el.setAttribute("data-nav-theme", pct > 0.25 ? "light" : "dark");
      } else {
        el.setAttribute("data-nav-theme", "dark");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 0→0.5: white panel slides in (logo animation)
  const panelPct = Math.min(1, progress / 0.5);
  const panelX = (1 - panelPct) * 100;

  // 0.5→1: logo fades out, video fades in
  const transitionPct = Math.max(0, (progress - 0.5) / 0.5);
  const logoOpacity = 1 - transitionPct;
  const videoOpacity = transitionPct;

  return (
    <section
      ref={sectionRef}
      id="hero-section"
      data-nav-theme="dark"
      className="relative"
      style={{ height: "300vh" }}
      aria-labelledby="hero-heading"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-black">

        {/* VIDEO — always in DOM, fades in on second half of scroll */}
        <div className="absolute inset-0" style={{ opacity: videoOpacity }}>
          <video
            src="https://evolutionapi-video-jots.d4s5yj.easypanel.host/videos/jots-agency.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <button
            onClick={(e) => {
              const video = e.currentTarget.previousElementSibling as HTMLVideoElement;
              video.muted = !video.muted;
              e.currentTarget.dataset.muted = video.muted ? "1" : "0";
              const icons = e.currentTarget.querySelectorAll("span");
              icons.forEach(s => s.classList.toggle("hidden"));
            }}
            data-muted="1"
            aria-label="Activar sonido"
            className="absolute bottom-8 right-8 z-10 flex items-center gap-2 bg-black/50 hover:bg-black/80 text-white text-xs tracking-widest uppercase px-4 py-3 transition-colors backdrop-blur-sm border border-white/20"
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <line x1="23" y1="9" x2="17" y2="15"/>
                <line x1="17" y1="9" x2="23" y2="15"/>
              </svg>
            </span>
            <span className="hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              </svg>
            </span>
          </button>
        </div>

        {/* LOGO LAYER — fades out on second half of scroll */}
        <div className="absolute inset-0" style={{ opacity: logoOpacity }}>
          {/* White panel slides in from right */}
          <div
            className="absolute inset-0 bg-white will-change-transform"
            style={{ transform: `translateX(${panelX}%)` }}
            aria-hidden="true"
          />

          {/* Logo with mix-blend-mode: difference */}
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
            style={{ opacity: (1 - panelPct) * 0.5 }}
            aria-hidden="true"
          >
            <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent mt-1" />
          </div>
        </div>

      </div>
    </section>
  );
}
