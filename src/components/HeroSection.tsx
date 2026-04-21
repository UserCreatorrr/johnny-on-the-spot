"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const [panelX,    setPanelX]    = useState(100);
  const [videoRise, setVideoRise] = useState(0.06);
  const [muted,     setMuted]     = useState(false);
  const sectionRef   = useRef<HTMLElement>(null);
  const videoRef     = useRef<HTMLVideoElement>(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh      = window.innerHeight;
      const p1 = Math.min(1, Math.max(0, scrollY / (vh * 0.5)));
      setPanelX((1 - p1) * 100);
      const p2 = Math.min(1, Math.max(0, (scrollY - vh * 0.5) / (vh * 0.5)));
      setVideoRise(0.06 + p2 * 0.94);
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
    <section ref={sectionRef} id="hero-section" data-nav-theme="dark" className="relative"
      style={{ height: "300vh" }} aria-labelledby="hero-heading">
      <div className="sticky top-0 overflow-hidden" style={{ height: "100vh" }}>
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-white will-change-transform"
          style={{ transform: `translateX(${panelX}%)` }} aria-hidden="true" />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6"
          style={{ mixBlendMode: "difference" }}>
          <Image src="/logo-hero.png" alt="Johnny on the Spot" width={900} height={270}
            id="hero-heading"
            className="w-auto max-w-xs sm:max-w-md lg:max-w-2xl xl:max-w-3xl object-contain" priority />
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 pointer-events-none"
          style={{ opacity: Math.max(0, (panelX / 100) - (videoRise - 0.06) * 5) }} aria-hidden="true">
          <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent mt-1" />
        </div>
        {/* Rising panel with video */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: `${videoRise * 100}%`, overflow: "hidden",
          zIndex: 15, background: "#000", willChange: "height",
        }} aria-hidden="false">
          <video ref={videoRef} muted={muted} loop playsInline style={{
            position: "absolute", bottom: 0, left: "50%",
            transform: "translateX(-50%)",
            height: "100vh", width: "auto", maxWidth: "none",
          }}>
            <source src="https://evolutionapi-video-jots.d4s5yj.easypanel.host/videos/jots-agency.mp4" type="video/mp4" />
          </video>
          {/* Mute button — only visible when video is rising */}
          {videoRise > 0.1 && (
            <button onClick={() => setMuted(m => { const n = !m; if (videoRef.current) videoRef.current.muted = n; return n; })}
              aria-label={muted ? "Activar sonido" : "Silenciar"}
              style={{
                position: "absolute", bottom: "2rem", right: "2rem", zIndex: 50,
                display: "flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff", fontSize: "0.65rem", letterSpacing: "0.18em",
                textTransform: "uppercase", padding: "0.6rem 1rem",
                cursor: "pointer", backdropFilter: "blur(4px)",
              }}>
              {muted ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                </svg>
              )}
              {muted ? "Sonido" : "Silenciar"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
