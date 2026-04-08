"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

export default function SandGamesMcCann({ onBack }: { onBack?: () => void }) {
  const scrollRef  = useRef<HTMLDivElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const hintRef    = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollRef.current;
    const video    = videoRef.current;
    const overlay  = overlayRef.current;
    const hint     = hintRef.current;
    const content  = contentRef.current;
    if (!scroller || !video || !overlay || !hint || !content) return;

    const onScroll = () => {
      const scrolled = scroller.scrollTop;
      const p = Math.min(scrolled / 520, 1);

      // Video zooms OUT: starts at 1.0 (fullscreen), shrinks to 0.78 (black bars visible)
      video.style.transform = `scale(${1.0 - p * 0.22})`;

      // Overlay darkens as content appears
      overlay.style.backgroundColor = `rgba(0,0,0,${0.15 + p * 0.60})`;

      // SCROLL TO EXPLORE fades out quickly
      hint.style.opacity = String(Math.max(0, 1 - p * 4));

      // Content fades + slides in (starts at 30% progress)
      const cp = Math.max(0, (p - 0.30) / 0.70);
      content.style.opacity   = String(cp);
      content.style.transform = `translateY(${(1 - cp) * 28}px)`;
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{
        position: "absolute",
        inset: 0,
        overflowY: "scroll",
        overflowX: "hidden",
      }}
    >
      {/* Tall inner div provides scroll space */}
      <div style={{ height: "310vh", position: "relative" }}>

        {/* Sticky viewport */}
        <div style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          background: "#000",
        }}>

          {/* VIDEO — starts fullscreen, zooms out on scroll */}
          <video
            ref={videoRef}
            autoPlay muted loop playsInline
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "scale(1.0)",
              transformOrigin: "center center",
              willChange: "transform",
            }}
          >
            <source src="https://evolutionapi-video-jots.d4s5yj.easypanel.host/videos/sandgames.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay */}
          <div ref={overlayRef} style={{
            position: "absolute", inset: 0,
            backgroundColor: "rgba(0,0,0,0.15)",
            zIndex: 2, pointerEvents: "none",
          }} />

          {/* BACK button */}
          {onBack ? (
            <button onClick={onBack} style={{
              position: "absolute", top: 0, left: 0, zIndex: 50,
              display: "flex", alignItems: "center",
              height: "80px", padding: "0 32px",
              color: "#fff", fontWeight: 900, fontSize: "0.72rem",
              letterSpacing: "0.22em", textTransform: "uppercase",
              background: "none", border: "none", cursor: "pointer",
            }}>
              ← Back
            </button>
          ) : (
            <Link href="/" style={{
              position: "absolute", top: 0, left: 0, zIndex: 50,
              display: "flex", alignItems: "center",
              height: "80px", padding: "0 32px",
              color: "#fff", fontWeight: 900, fontSize: "0.72rem",
              letterSpacing: "0.22em", textTransform: "uppercase",
              textDecoration: "none", cursor: "pointer",
            }}>
              ← Back
            </Link>
          )}

          {/* SCROLL TO EXPLORE */}
          <div ref={hintRef} style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            zIndex: 20, display: "flex", justifyContent: "center",
            alignItems: "center", height: "72px",
          }}>
            <p style={{
              color: "#fff", fontWeight: 900, fontSize: "0.72rem",
              letterSpacing: "0.22em", textTransform: "uppercase", margin: 0,
            }}>
              Scroll to Explore
            </p>
          </div>

          {/* CONTENT — fades in on scroll */}
          <div ref={contentRef} style={{
            position: "absolute", inset: 0, zIndex: 10,
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
            padding: "5rem 3.5rem",
            opacity: 0, transform: "translateY(28px)", pointerEvents: "none",
          }}>
            <p style={{
              color: "rgba(255,255,255,0.55)", fontSize: "0.68rem",
              letterSpacing: "0.25em", textTransform: "uppercase",
              fontWeight: 700, margin: "0 0 0.6rem",
            }}>
              SD Distribuciones
            </p>
            <h2 style={{
              color: "#fff", fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
              fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 0.88,
              textTransform: "uppercase", margin: "0 0 2.5rem",
            }}>
              The Sand<br />Games
            </h2>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem",
              borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "1.8rem",
            }}>
              <div>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, margin: "0 0 0.9rem" }}>
                  Producción integral
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {["Concepto","Desarrollo Creativo","Producción Gráfica","Comunicación Interna","Web Dedicado","Videos","Actividades","Localizaciones","Producción","Staff & F&B","Logística & Viajes"].map(item => (
                    <li key={item} style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.8rem", lineHeight: "1.7" }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, margin: "0 0 0.9rem" }}>
                  Comunicación
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.8rem" }}>
                  {["Dirección Creativa","Eventos","Activación & Experiencias","Marketing Digital","Foto & Video"].map(item => (
                    <li key={item} style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.8rem", lineHeight: "1.7" }}>{item}</li>
                  ))}
                </ul>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, margin: "0 0 0.7rem" }}>
                  Material
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {["Gráfica","Fotos","Video"].map(tag => (
                    <span key={tag} style={{ border: "1px solid rgba(255,255,255,0.22)", color: "rgba(255,255,255,0.55)", fontSize: "0.64rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.3rem 0.75rem", fontWeight: 600 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
