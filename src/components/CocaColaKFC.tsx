"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function CocaColaKFC({ onBack }: { onBack?: () => void }) {
  const scrollRef  = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const blurRef    = useRef<HTMLDivElement>(null);
  const hintRef    = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);
  const [zoomed, setZoomed] = useState(false);
  const [muted,  setMuted]  = useState(true);
  const FONT = '"Helvetica Neue", Helvetica, Arial, sans-serif';

  useEffect(() => {
    const raf = requestAnimationFrame(() => { setZoomed(true); });
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const scroller = scrollRef.current;
    const overlay  = overlayRef.current;
    const blur     = blurRef.current;
    const hint     = hintRef.current;
    const content  = contentRef.current;
    if (!scroller || !overlay || !blur || !hint || !content) return;
    const onScroll = () => {
      const p = Math.min(scroller.scrollTop / 520, 1);
      overlay.style.backgroundColor = `rgba(0,0,0,${0.15 + p * 0.45})`;
      const cp = Math.max(0, (p - 0.30) / 0.70);
      blur.style.backdropFilter = `blur(${cp * 10}px)`;
      (blur.style as unknown as Record<string, string>).webkitBackdropFilter = `blur(${cp * 10}px)`;
      hint.style.opacity = String(Math.max(0, 1 - p * 4));
      content.style.opacity   = String(cp);
      content.style.transform = `translateY(${(1 - cp) * 28}px)`;
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={scrollRef} style={{ position: "absolute", inset: 0, overflowY: "scroll", overflowX: "hidden", fontFamily: FONT }}>
      <div style={{ height: "310vh", position: "relative" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", background: "#000" }}>

          <video ref={videoRef} autoPlay muted={muted} loop playsInline style={{
            position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
            transform: zoomed ? "scale(0.78)" : "scale(1.0)",
            transformOrigin: "center center",
            transition: "transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}>
            <source src="https://evolutionapi-video-jots.d4s5yj.easypanel.host/videos/cocacola.mp4" type="video/mp4" />
          </video>

          <div ref={overlayRef} style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.15)", zIndex: 2, pointerEvents: "none" }} />
          <div ref={blurRef} style={{ position: "absolute", inset: 0, backdropFilter: "blur(0px)", WebkitBackdropFilter: "blur(0px)", zIndex: 3, pointerEvents: "none" }} />

          {onBack ? (
            <button onClick={onBack} style={{
              position: "absolute", top: 0, left: 0, zIndex: 50,
              display: "flex", alignItems: "center", height: "60px", padding: "0 24px",
              color: "#fff", fontWeight: 900, fontSize: "0.68rem",
              letterSpacing: "0.22em", textTransform: "uppercase",
              background: "none", border: "none", cursor: "pointer", fontFamily: FONT,
            }}>
              ← Back
            </button>
          ) : (
            <Link href="/" style={{
              position: "absolute", top: 0, left: 0, zIndex: 50,
              display: "flex", alignItems: "center", height: "60px", padding: "0 24px",
              color: "#fff", fontWeight: 900, fontSize: "0.68rem",
              letterSpacing: "0.22em", textTransform: "uppercase",
              textDecoration: "none", cursor: "pointer", fontFamily: FONT,
            }}>
              ← Back
            </Link>
          )}

          {/* Mute button */}
          <button
            onClick={() => setMuted(m => { const n = !m; if (videoRef.current) videoRef.current.muted = n; return n; })}
            aria-label={muted ? "Activar sonido" : "Silenciar"}
            style={{
              position: "absolute", bottom: "1.5rem", right: "1.5rem", zIndex: 50,
              display: "flex", alignItems: "center", gap: "0.5rem",
              background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff", fontSize: "0.62rem", letterSpacing: "0.18em",
              textTransform: "uppercase", padding: "0.5rem 0.85rem",
              cursor: "pointer", backdropFilter: "blur(4px)", fontFamily: FONT,
            }}
          >
            {muted ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              </svg>
            )}
            {muted ? "Sonido" : "Silenciar"}
          </button>

          <div ref={hintRef} style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20, display: "flex", justifyContent: "center", alignItems: "center", height: "56px" }}>
            <p style={{ color: "#fff", fontWeight: 900, fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", margin: 0, fontFamily: FONT }}>
              Scroll to Explore
            </p>
          </div>

          {/* CONTENT: uses clamp for padding/font so it always fits any screen */}
          <div ref={contentRef} style={{
            position: "absolute", inset: 0, zIndex: 10,
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
            padding: "clamp(1.2rem, 4vh, 4rem) clamp(1.2rem, 3vw, 3.5rem)",
            overflow: "hidden",
            opacity: 0, transform: "translateY(28px)", pointerEvents: "none", fontFamily: FONT,
          }}>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(0.55rem, 1vw, 0.68rem)", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700, margin: "0 0 0.4rem" }}>
              Coca-Cola & KFC
            </p>
            <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem, 4.5vw, 5.5rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 0.88, textTransform: "uppercase", margin: "0 0 0.5rem" }}>
              Coca Cola<br />x KFC
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "clamp(0.7rem, 1.2vw, 0.82rem)", margin: "0 0 clamp(0.8rem, 2vh, 1.8rem)", fontWeight: 400 }}>
              Video
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(1rem, 2vw, 2.5rem)", borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "clamp(0.8rem, 1.5vh, 1.8rem)" }}>
              <div>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, margin: "0 0 0.6rem" }}>
                  Concepto & Producción
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <li key="Concepto" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(0.7rem, 1.2vw, 0.8rem)", lineHeight: "1.6" }}>Concepto</li>
                    <li key="Desarrollo Creativo" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(0.7rem, 1.2vw, 0.8rem)", lineHeight: "1.6" }}>Desarrollo Creativo</li>
                    <li key="Dirección de Arte" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(0.7rem, 1.2vw, 0.8rem)", lineHeight: "1.6" }}>Dirección de Arte</li>
                    <li key="Edición y Producción Video" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(0.7rem, 1.2vw, 0.8rem)", lineHeight: "1.6" }}>Edición y Producción Video</li>
                </ul>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, margin: "0 0 0.6rem" }}>
                  Comunicación
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 clamp(0.8rem, 1.5vh, 1.8rem)" }}>
                    <li key="Comunicación" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(0.7rem, 1.2vw, 0.8rem)", lineHeight: "1.6" }}>Comunicación</li>
                    <li key="Dirección Creativa" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(0.7rem, 1.2vw, 0.8rem)", lineHeight: "1.6" }}>Dirección Creativa</li>
                    <li key="Foto & Video" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(0.7rem, 1.2vw, 0.8rem)", lineHeight: "1.6" }}>Foto & Video</li>
                </ul>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, margin: "0 0 0.5rem" }}>Material</p>
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                    <span key="Video" style={{ border: "1px solid rgba(255,255,255,0.22)", color: "rgba(255,255,255,0.55)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.25rem 0.6rem", fontWeight: 600 }}>Video</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
