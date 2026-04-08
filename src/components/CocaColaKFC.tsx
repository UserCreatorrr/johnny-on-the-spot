"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function CocaColaKFC({ onBack }: { onBack?: () => void }) {
  const scrollRef  = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const blurRef    = useRef<HTMLDivElement>(null);
  const hintRef    = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [zoomed, setZoomed] = useState(false);
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

          <video autoPlay muted loop playsInline style={{
            position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
            transform: zoomed ? "scale(0.78)" : "scale(1.0)",
            transformOrigin: "center center",
            transition: "transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "transform",
          }}>
            <source src="https://evolutionapi-video-jots.d4s5yj.easypanel.host/videos/cocacola.mp4" type="video/mp4" />
          </video>

          <div ref={overlayRef} style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.15)", zIndex: 2, pointerEvents: "none" }} />
          <div ref={blurRef} style={{ position: "absolute", inset: 0, backdropFilter: "blur(0px)", WebkitBackdropFilter: "blur(0px)", zIndex: 3, pointerEvents: "none" }} />

          {onBack ? (
            <button onClick={onBack} style={{
              position: "absolute", top: 0, left: 0, zIndex: 50,
              display: "flex", alignItems: "center", height: "80px", padding: "0 32px",
              color: "#fff", fontWeight: 900, fontSize: "0.72rem",
              letterSpacing: "0.22em", textTransform: "uppercase",
              background: "none", border: "none", cursor: "pointer", fontFamily: FONT,
            }}>
              ← Back
            </button>
          ) : (
            <Link href="/" style={{
              position: "absolute", top: 0, left: 0, zIndex: 50,
              display: "flex", alignItems: "center", height: "80px", padding: "0 32px",
              color: "#fff", fontWeight: 900, fontSize: "0.72rem",
              letterSpacing: "0.22em", textTransform: "uppercase",
              textDecoration: "none", cursor: "pointer", fontFamily: FONT,
            }}>
              ← Back
            </Link>
          )}

          <div ref={hintRef} style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20, display: "flex", justifyContent: "center", alignItems: "center", height: "72px" }}>
            <p style={{ color: "#fff", fontWeight: 900, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", margin: 0, fontFamily: FONT }}>
              Scroll to Explore
            </p>
          </div>

          <div ref={contentRef} style={{
            position: "absolute", inset: 0, zIndex: 10,
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
            padding: "5rem 3.5rem",
            opacity: 0, transform: "translateY(28px)", pointerEvents: "none", fontFamily: FONT,
          }}>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.68rem", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700, margin: "0 0 0.6rem" }}>
              Coca-Cola & KFC
            </p>
            <h2 style={{ color: "#fff", fontSize: "clamp(2.2rem, 6vw, 5.5rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 0.88, textTransform: "uppercase", margin: "0 0 0.6rem" }}>
              Coca Cola<br />x KFC
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", margin: "0 0 2rem", fontWeight: 400 }}>
              Video
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "1.8rem" }}>
              <div>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, margin: "0 0 0.9rem" }}>
                  Concepto & Producción
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <li key="Concepto" style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.8rem", lineHeight: "1.7" }}>Concepto</li>
                    <li key="Desarrollo Creativo" style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.8rem", lineHeight: "1.7" }}>Desarrollo Creativo</li>
                    <li key="Dirección de Arte" style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.8rem", lineHeight: "1.7" }}>Dirección de Arte</li>
                    <li key="Edición y Producción Video" style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.8rem", lineHeight: "1.7" }}>Edición y Producción Video</li>
                </ul>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, margin: "0 0 0.9rem" }}>
                  Comunicación
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.8rem" }}>
                    <li key="Comunicación" style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.8rem", lineHeight: "1.7" }}>Comunicación</li>
                    <li key="Dirección Creativa" style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.8rem", lineHeight: "1.7" }}>Dirección Creativa</li>
                    <li key="Foto & Video" style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.8rem", lineHeight: "1.7" }}>Foto & Video</li>
                </ul>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, margin: "0 0 0.7rem" }}>
                  Material
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    <span key="Video" style={{ border: "1px solid rgba(255,255,255,0.22)", color: "rgba(255,255,255,0.55)", fontSize: "0.64rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.3rem 0.75rem", fontWeight: 600 }}>Video</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
