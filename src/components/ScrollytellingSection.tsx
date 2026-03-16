"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";

interface ScrollSection {
  id: string;
  eyebrow?: string;
  title: string;
  body: string;
  visual: React.ReactNode;
}

interface ScrollytellingSectionProps {
  sections: ScrollSection[];
  className?: string;
}

export default function ScrollytellingSection({
  sections,
  className = "",
}: ScrollytellingSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveIndex(
      Math.min(Math.floor(v * sections.length), sections.length - 1)
    );
  });

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ minHeight: `${sections.length * 100}vh` }}
    >
      <div
        className="sticky top-0 grid grid-cols-1 lg:grid-cols-2"
        style={{ alignItems: "start", height: "100vh", overflow: "hidden" }}
      >
        {/* Left: scroll triggers */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none" aria-hidden="true" />

        {/* Right: sticky visual */}
        <div
          className="hidden lg:flex items-center justify-center bg-black border-l border-white/10"
          style={{ position: "sticky", top: 0, height: "100vh" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full h-full flex items-center justify-center p-12"
            >
              {sections[activeIndex]?.visual}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Left scrolling content: absolute so it stacks behind sticky */}
      <div className="absolute top-0 left-0 w-full lg:w-1/2 pointer-events-none lg:pointer-events-auto">
        {sections.map((section) => (
          <div
            key={section.id}
            className="flex items-center px-6 lg:px-12 xl:px-16"
            style={{ minHeight: "100vh" }}
          >
            <div className="max-w-lg py-20">
              {section.eyebrow && (
                <p className="text-white/30 text-xs tracking-widest uppercase font-medium mb-4">
                  {section.eyebrow}
                </p>
              )}
              <h3 className="text-3xl lg:text-4xl font-black tracking-tighter text-white leading-none mb-6">
                {section.title}
              </h3>
              <p className="text-white/50 text-base lg:text-lg leading-relaxed">
                {section.body}
              </p>

              {/* Mobile visual */}
              <div className="mt-10 lg:hidden rounded border border-white/10 overflow-hidden">
                {section.visual}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
