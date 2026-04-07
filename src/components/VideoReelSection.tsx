"use client";

import { useState, useRef } from "react";

export default function VideoReelSection() {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    setMuted((prev) => {
      if (videoRef.current) videoRef.current.muted = !prev;
      return !prev;
    });
  };

  return (
    <section
      data-nav-theme="dark"
      className="relative h-screen bg-black overflow-hidden"
      aria-label="Reel de agencia"
    >
      <video
        ref={videoRef}
        src="https://evolutionapi-video-jots.d4s5yj.easypanel.host/videos/jots-agency.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      <button
        onClick={toggleMute}
        aria-label={muted ? "Activar sonido" : "Silenciar"}
        className="absolute bottom-8 right-8 z-10 flex items-center gap-2 bg-black/50 hover:bg-black/80 text-white text-xs tracking-widest uppercase px-4 py-3 transition-colors backdrop-blur-sm border border-white/20"
      >
        {muted ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <line x1="23" y1="9" x2="17" y2="15"/>
              <line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
            Sonido
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
            Silenciar
          </>
        )}
      </button>
    </section>
  );
}
