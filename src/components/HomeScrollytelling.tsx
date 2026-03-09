"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    id: "estrategia",
    eyebrow: "01 — Estrategia",
    title: "Primero pensamos. Después hacemos.",
    body: "Antes de producir una sola pieza, entendemos el negocio, el mercado y el objetivo real. La estrategia no es un extra: es la razón por la que las campañas funcionan.",
    visual: {
      label: "Estrategia",
      items: ["Análisis de marca", "Posicionamiento", "Plan de comunicación", "Métricas de éxito"],
      accent: "01",
    },
  },
  {
    id: "creatividad",
    eyebrow: "02 — Creatividad",
    title: "Ideas que conectan con personas.",
    body: "La creatividad no es decoración. Es la herramienta más eficiente para que un mensaje llegue, se recuerde y provoque acción. Trabajamos con creativos sénior que saben cuándo romper las reglas.",
    visual: {
      label: "Creatividad",
      items: ["Concepto creativo", "Dirección de arte", "Copywriting", "Branding"],
      accent: "02",
    },
  },
  {
    id: "produccion",
    eyebrow: "03 — Producción",
    title: "Que el resultado esté a la altura de la idea.",
    body: "Producimos campañas, eventos, vídeos, identidades y piezas digitales. Sin intermediarios que diluyan el estándar. Sin sorpresas en el presupuesto final.",
    visual: {
      label: "Producción",
      items: ["Gráfica y packaging", "Vídeo y audiovisual", "Eventos y activaciones", "Plataformas digitales"],
      accent: "03",
    },
  },
  {
    id: "activacion",
    eyebrow: "04 — Activación",
    title: "Presencia donde importa.",
    body: "Eventos corporativos, activaciones de marca, street marketing, stands en ferias. Experiencias que crean recuerdo y mueven al consumidor a actuar.",
    visual: {
      label: "Activación",
      items: ["Eventos corporativos", "Street marketing", "Activaciones POS", "Ferias y congresos"],
      accent: "04",
    },
  },
];

function VisualPanel({ visual }: { visual: typeof sections[0]["visual"] }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-12 xl:p-16">
      <div className="flex justify-end">
        <span className="text-white/[0.04] font-black text-[120px] xl:text-[160px] leading-none font-mono select-none">
          {visual.accent}
        </span>
      </div>
      <div>
        <p className="text-white/20 text-xs tracking-widest uppercase mb-10">{visual.label}</p>
        <ul className="space-y-5" role="list">
          {visual.items.map((item, i) => (
            <li key={i} className="flex items-center gap-5">
              <span className="w-px h-8 bg-white/15 flex-shrink-0" aria-hidden="true" />
              <span className="text-white/70 font-light text-xl xl:text-2xl tracking-tight">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function HomeScrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveIndex(Math.min(Math.floor(v * sections.length), sections.length - 1));
  });

  return (
    <section
      aria-labelledby="scrolly-heading"
      className="border-t border-white/5"
    >
      <div
        ref={containerRef}
        className="relative"
        style={{ minHeight: `${sections.length * 100}vh` }}
      >
        {/* Sticky right-panel — full viewport height, centered within max-w */}
        <div className="sticky top-0 h-screen z-10 pointer-events-none">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex">
            {/* Left spacer — mirrors left column width */}
            <div className="hidden lg:block lg:w-1/2" />
            {/* Right panel */}
            <div className="hidden lg:flex lg:w-1/2 border-l border-white/5 items-center pointer-events-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="w-full"
                >
                  <VisualPanel visual={sections[activeIndex].visual} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Scrolling left content — absolute, full height */}
        <div className="absolute top-0 left-0 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="lg:w-1/2">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="flex items-center"
                  style={{ minHeight: "100vh" }}
                >
                  <div className="py-20 lg:pr-16 max-w-xl">
                    <p className="text-white/25 text-xs tracking-widest uppercase font-medium mb-6">
                      {section.eyebrow}
                    </p>
                    <h3
                      id={section.id === "estrategia" ? "scrolly-heading" : undefined}
                      className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter text-white leading-none mb-6"
                    >
                      {section.title}
                    </h3>
                    <p className="text-white/45 text-base lg:text-lg leading-relaxed">
                      {section.body}
                    </p>

                    {/* Mobile fallback */}
                    <div className="mt-10 lg:hidden border border-white/10 p-8">
                      <VisualPanel visual={section.visual} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
