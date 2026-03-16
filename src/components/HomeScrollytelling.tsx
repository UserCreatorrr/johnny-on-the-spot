"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    id: "estrategia",
    eyebrow: "01 — Estrategia",
    title: "Primero pensamos. Después hacemos.",
    body: "Antes de producir una sola pieza, entendemos el negocio, el mercado y el objetivo real. Diseño de estrategia 360°, plataforma de marca, brand storytelling. La estrategia no es un extra: es la razón por la que las campañas funcionan.",
    visual: {
      label: "Estrategia",
      items: ["Diseño de Estrategia 360°", "Plataforma de marca", "Brand storytelling", "Branded Content"],
      accent: "01",
    },
  },
  {
    id: "creatividad",
    eyebrow: "02 — Dirección Creativa",
    title: "Ideas que construyen marcas.",
    body: "Dirección de arte, branding, naming, identidad corporativa, producción gráfica y packaging. Creatividad al servicio de un propósito. Con estándar de grandes marcas y la agilidad de un equipo pequeño.",
    visual: {
      label: "Dirección Creativa",
      items: ["Dirección de Arte", "Branding & Naming", "Identidad Corporativa", "Producción Gráfica"],
      accent: "02",
    },
  },
  {
    id: "eventos",
    eyebrow: "03 — Eventos y Activaciones",
    title: "Presencia donde importa.",
    body: "Eventos corporativos nacionales e internacionales, convenciones, desfiles, road shows, ferias y trade shows. Activación de marca, brand experience y acciones que conectan con el consumidor en el lugar y el momento exactos.",
    visual: {
      label: "Eventos y Activaciones",
      items: ["Eventos Corporativos", "Activación de Marca", "Ferias & Trade Shows", "Marketing de Guerrilla"],
      accent: "03",
    },
  },
  {
    id: "digital",
    eyebrow: "04 — Digital e IA",
    title: "La tecnología al servicio de la marca.",
    body: "Marketing digital, estrategia de redes sociales, shooting foto y vídeo, guión y edición. Más automatización de procesos, generación de contenido visual con IA y monitorización de marca.",
    visual: {
      label: "Digital e IA",
      items: ["Marketing Digital", "Estrategia de RRSS", "IA y Automatizaciones", "Foto y Vídeo"],
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
