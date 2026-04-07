"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoReelSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress 0→1 as the sticky section scrolls through its 200vh
      const scrolled = -rect.top;
      const total = el.offsetHeight - vh;
      const pct = Math.min(1, Math.max(0, scrolled / total));
      setProgress(pct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scale: 0.55 → 1 as progress 0 → 1
  const scale = 0.55 + progress * 0.45;
  // Border radius: 12px → 0px
  const radius = Math.round(12 * (1 - progress));

  return (
    <section
      ref={sectionRef}
      data-nav-theme="dark"
      className="relative bg-white"
      style={{ height: "220vh" }}
      aria-label="Reel de agencia"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div
          className="w-full h-full overflow-hidden will-change-transform"
          style={{
            transform: `scale(${scale})`,
            borderRadius: `${radius}px`,
            transition: "border-radius 0.05s linear",
          }}
        >
          <video
            src="https://evolutionapi-video-jots.d4s5yj.easypanel.host/videos/jots-agency.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
