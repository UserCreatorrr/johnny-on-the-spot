'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function SandGamesMcCann() {
  const modalRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modal = modalRef.current;
    const video = videoRef.current;
    const overlay = overlayRef.current;
    if (!modal || !video || !overlay) return;

    const handleScroll = () => {
      const scrollY = modal.scrollTop;
      const maxScroll = 500;
      const progress = Math.min(scrollY / maxScroll, 1);

      // Blur: 0px → 22px
      const blur = progress * 22;
      // Scale: 1 → 1.08 (leve zoom al blurear)
      const scale = 1 + progress * 0.08;
      // Overlay oscurece progresivamente
      const darkness = 0.35 + progress * 0.45;

      video.style.filter = `blur(${blur}px)`;
      video.style.transform = `scale(${scale})`;
      overlay.style.backgroundColor = `rgba(0,0,0,${darkness})`;
    };

    modal.addEventListener('scroll', handleScroll, { passive: true });
    return () => modal.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={modalRef}
      className="sand-games-mccann"
      style={{
        position: 'relative',
        width: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        background: '#000',
      }}
    >
      {/* ─── VIDEO STICKY (se queda fijo mientras scrolleas) ─── */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            willChange: 'filter, transform',
            transition: 'filter 0.05s linear, transform 0.05s linear',
            transformOrigin: 'center center',
          }}
        >
          <source
            src="https://evolutionapi-video-jots.d4s5yj.easypanel.host/videos/sandgames.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay de oscuridad */}
        <div
          ref={overlayRef}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.35)',
            transition: 'background-color 0.05s linear',
            zIndex: 2,
          }}
        />

        {/* Label inicial sobre el vídeo */}
        <div
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '2.5rem',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        >
          <p
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
              fontWeight: 700,
            }}
          >
            SD Distribuciones
          </p>
          <p
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 0.9,
              textTransform: 'uppercase',
            }}
          >
            The Sand
            <br />
            Games
          </p>
        </div>

        {/* Hint de scroll */}
        <div
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            right: '2.5rem',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        >
          <p
            style={{
              color: 'rgba(255,255,255,0.35)',
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 600,
              writingMode: 'vertical-rl',
            }}
          >
            Scroll para explorar
          </p>
        </div>
      </div>

      {/* ─── CONTENIDO QUE SE REVELA AL HACER SCROLL ─── */}
      {/*
        El margin-top negativo hace que este bloque empiece DETRÁS del vídeo sticky.
        Al scrollear, el contenido sube y se superpone, mientras el vídeo se desenfoca.
      */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          marginTop: '-100vh',
          paddingTop: '110vh',         /* espacio vacío inicial (el vídeo ocupa esto) */
          paddingBottom: '5rem',
          background: 'transparent',
        }}
      >
        {/* Panel de contenido */}
        <div
          style={{
            background: 'rgba(0,0,0,0.88)',
            backdropFilter: 'blur(2px)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '4rem 2.5rem 5rem',
            maxWidth: '100%',
          }}
        >
          {/* Encabezado */}
          <div style={{ marginBottom: '3.5rem' }}>
            <p
              style={{
                color: 'rgba(255,255,255,0.3)',
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                fontWeight: 700,
                marginBottom: '1rem',
              }}
            >
              SD Distribuciones — Marruecos · 200 personas
            </p>
            <h2
              style={{
                color: '#fff',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              The Sand Games
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.45)',
                fontSize: '1rem',
                lineHeight: 1.7,
                maxWidth: '560px',
              }}
            >
              Convención de clientes en Marruecos para 200 asistentes.
              Producción integral desde el concepto hasta la logística de viaje.
            </p>
          </div>

          {/* Grid de dos columnas ─ Servicios */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '3rem',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              paddingTop: '3rem',
            }}
          >
            {/* COLUMNA 1: Qué hicimos */}
            <div>
              <p
                style={{
                  color: 'rgba(255,255,255,0.25)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                }}
              >
                Producción integral
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Concepto',
                  'Desarrollo Creativo',
                  'Producción Gráfica',
                  'Comunicación Interna',
                  'Web Dedicado',
                  'Videos',
                  'Actividades',
                  'Localizaciones',
                  'Producción',
                  'Staff & F&B',
                  'Logística & Viajes',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.9rem',
                      lineHeight: 1,
                      paddingTop: '0.75rem',
                      paddingBottom: '0.75rem',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                    }}
                  >
                    <span
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.3)',
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMNA 2: Comunicación y servicios */}
            <div>
              <p
                style={{
                  color: 'rgba(255,255,255,0.25)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                }}
              >
                Comunicación
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Dirección Creativa',
                  'Eventos',
                  'Activación & Experiencias',
                  'Marketing Digital',
                  'Foto & Video',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.9rem',
                      lineHeight: 1,
                      paddingTop: '0.75rem',
                      paddingBottom: '0.75rem',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                    }}
                  >
                    <span
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.3)',
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Material */}
              <div style={{ marginTop: '2.5rem' }}>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.25)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    marginBottom: '1rem',
                  }}
                >
                  Material
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}
                >
                  {['Gráfica', 'Fotos', 'Video'].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: 'rgba(255,255,255,0.45)',
                        fontSize: '0.7rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '0.4rem 0.85rem',
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: '3.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <Link
              href="/contacto"
              style={{
                display: 'inline-block',
                background: '#fff',
                color: '#000',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '1rem 2rem',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
            >
              Hablemos de tu proyecto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
