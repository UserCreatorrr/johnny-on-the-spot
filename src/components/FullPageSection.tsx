"use client";

import { useRef, useEffect, ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  innerStyle?: CSSProperties;
  /** How many vh units of scroll space (default 200) */
  scrollHeight?: number;
}

/**
 * Wraps any section so it:
 * 1. Sticks to the top of the viewport
 * 2. Fades + slides in as you scroll into it
 * 3. Stays full-screen for a while
 * 4. Fades + slides out as the next section arrives
 */
export default function FullPageSection({
  children,
  className = "",
  innerStyle = {},
  scrollHeight = 200,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner   = innerRef.current;
    if (!wrapper || !inner) return;

    const update = () => {
      const rect   = wrapper.getBoundingClientRect();
      const vh     = window.innerHeight;
      const total  = Math.max(1, wrapper.offsetHeight - vh);
      const scrolled = Math.max(0, -rect.top);
      const p      = Math.min(1, scrolled / total);

      // p: 0 = section just entered, 1 = section about to leave
      // fade-in zone: 0 → 0.12,  stay: 0.12 → 0.88,  fade-out: 0.88 → 1
      let opacity: number;
      let ty: number;

      if (p < 0.12) {
        const t = p / 0.12;
        opacity = t;
        ty = (1 - t) * 40;
      } else if (p > 0.88) {
        const t = (1 - p) / 0.12;
        opacity = t;
        ty = (1 - t) * -40;
      } else {
        opacity = 1;
        ty = 0;
      }

      inner.style.opacity   = String(opacity);
      inner.style.transform = `translateY(${ty}px)`;
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${scrollHeight}vh`, position: "relative" }}
    >
      <div
        ref={innerRef}
        className={className}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          opacity: 0,
          willChange: "opacity, transform",
          ...innerStyle,
        }}
      >
        {children}
      </div>
    </div>
  );
}
