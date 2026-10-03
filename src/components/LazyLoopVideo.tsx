"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Video decorativo en bucle y mudo que solo se descarga y reproduce cuando
 * esta cerca de la pantalla, y se pausa al salir. Antes la home bajaba de golpe
 * los 4 videos de casos al cargar (unos 100 MB), lo que saturaba la red y
 * retrasaba cualquier navegacion desde el menu.
 */
export default function LazyLoopVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          if (video.currentSrc) video.play().catch(() => {});
        } else if (!video.paused) {
          video.pause();
        }
      },
      // Empieza a cargar media pantalla antes de que aparezca.
      { rootMargin: "50% 0px" }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (near) ref.current?.play().catch(() => {});
  }, [near]);

  return (
    <video
      ref={ref}
      src={near ? src : undefined}
      autoPlay={near}
      muted
      loop
      playsInline
      preload="none"
      className={className}
      aria-hidden="true"
    />
  );
}
