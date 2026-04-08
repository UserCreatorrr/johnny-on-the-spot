"use client";

import { useRef, useEffect, ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  innerStyle?: CSSProperties;
  wrapperBackground?: string;
  scrollHeight?: number;
}

export default function FullPageSection({
  children,
  className = "",
  innerStyle = {},
  wrapperBackground,
  scrollHeight = 200,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner   = innerRef.current;
    if (!wrapper || !inner) return;

    const update = () => {
      const rect    = wrapper.getBoundingClientRect();
      const vh      = window.innerHeight;
      const total   = Math.max(1, wrapper.offsetHeight - vh);
      const scrolled = Math.max(0, -rect.top);
      const p       = Math.min(1, scrolled / total);

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

  const bg = wrapperBackground ?? (innerStyle.background as string) ?? undefined;

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${scrollHeight}vh`, position: "relative", background: bg }}
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
