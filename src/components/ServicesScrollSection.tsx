"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { SERVICES } from "@/lib/data";

const featuredServices = SERVICES.slice(0, 8);

export default function ServicesScrollSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let sectionTop = 0;
    let travelDistance = 0;

    const measure = () => {
      sectionTop = section.offsetTop;
      const trackWidth = track.scrollWidth;
      const vw = window.innerWidth;
      travelDistance = Math.max(0, trackWidth - vw);
      section.style.height = `${window.innerHeight + travelDistance}px`;
    };

    const onScroll = () => {
      if (travelDistance === 0) return;
      const progress = Math.min(1, Math.max(0, (window.scrollY - sectionTop) / travelDistance));
      track.style.transform = `translateX(${-progress * travelDistance}px)`;
    };

    const onResize = () => { measure(); onScroll(); };

    measure();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-nav-theme="dark"
      className="relative bg-black"
      aria-labelledby="services-heading"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center bg-black">
        {/* Header */}
        <div className="px-6 lg:px-8 mb-10 flex items-end justify-between flex-shrink-0">
          <div>
            <p className="text-white/30 text-xs tracking-widest uppercase mb-3">Servicios</p>
            <h2
              id="services-heading"
              className="text-4xl lg:text-5xl font-black tracking-tighter text-white"
            >
              Todo lo que necesitas,
              <br />
              sin depender de nadie más.
            </h2>
          </div>
          <Link
            href="/servicios"
            className="hidden lg:block text-sm text-white/40 hover:text-white border-b border-white/10 hover:border-white/40 transition-colors pb-0.5"
          >
            Ver todos →
          </Link>
        </div>

        {/* Horizontal track */}
        <div
          ref={trackRef}
          className="flex will-change-transform pl-6 lg:pl-8"
        >
          {featuredServices.map((service, i) => (
            <Link
              key={service.slug}
              href={`/servicios/${service.slug}`}
              className="flex-none w-72 lg:w-80 bg-black p-8 group hover:bg-white/[0.03] transition-colors"
            >
              <p className="text-white/20 text-xs tracking-widest font-mono mb-6">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-white font-bold text-lg leading-tight mb-4 group-hover:text-white/80 transition-colors">
                {service.shortTitle}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
          {/* Right end padding */}
          <div className="flex-none w-6 lg:w-8" />
        </div>
      </div>
    </section>
  );
}
