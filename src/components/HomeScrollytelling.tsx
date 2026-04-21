"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    id: "estrategia",
    eyebrow: "01: Estrategia",
    title: "Primero pensamos. Después hacemos.",
    body: "",
    visual: {
      label: "Estrategia",
      items: [
        "Diseño de Estrategia 360º",
        "Consultoría en marketing y comunicación",
        "Análisis reputacional",
        "Plataforma de marca",
        "Identificación de insights",
        "Brand storytelling",
        "Branded Content",
        "Desarrollo Conceptual",
        "Gestión de crisis",
      ],
      accent: "01",
    },
  },
  {
    id: "creatividad",
    eyebrow: "02: Dirección Creativa",
    title: "Ideas que construyen marcas.",
    body: "",
    visual: {
      label: "Dirección Creativa",
      items: [
        "Dirección de arte",
        "Diseño Gráfico",
        "Branding & Naming",
        "Desarrollo de Identidad Corporativa",
        "Creación de contenidos amplificables",
        "Copywriting",
        "Producción Gráfica",
        "Packaging & Material POS",
      ],
      accent: "02",
    },
  },
  {
    id: "eventos",
    eyebrow: "03: Eventos",
    title: "Presencia donde importa.",
    body: "Eventos corporativos nacionales e internacionales, convenciones, desfiles, road shows, ferias y trade shows. Producción integral: concepto, localización, AV, F&B, staff y logística. Sin fisuras del briefing a la entrega.",
    visual: {
      label: "Eventos",
      items: [
        "Eventos Corporativos Nacionales e Internacionales",
        "Convenciones",
        "Desfilés",
        "RoadShow",
        "Presentación de Productos",
        "Ferias & Trade Shows",
        "Conceptualización",
        "Food & Beverage",
        "Localización",
        "Staff",
        "AV y Producción Técnica",
        "Logística y traslados",
      ],
      accent: "03",
    },
  },
  {
    id: "activaciones",
    eyebrow: "04: Activaciones y Experiencias",
    title: "La marca en el mundo real.",
    body: "Activaciones que conectan la marca con el consumidor en el lugar y el momento exactos. Brand experience, marketing de guerilla, sampling y acciones disruptivas que generan conversación y recuerdo.",
    visual: {
      label: "Activaciones y Experiencias",
      items: [
        "Brand Experience",
        "Activación de Marca",
        "Marketing de Guerilla",
        "Sampling",
        "Acciones disruptivas",
        "Team Buildings",
      ],
      accent: "04",
    },
  },
  {
    id: "digital",
    eyebrow: "05: Marketing Digital",
    title: "Comunidades que convierten.",
    body: "Estrategia de redes sociales, creación de contenidos, gestión de comunidades, influencer marketing y Social Ads. Todo integrado en la estrategia global, no como canal aislado.",
    visual: {
      label: "Marketing Digital",
      items: [
        "Estrategia de RRSS y amplificación digital",
        "Creación y planificación de contenidos",
        "Gestión, crecimiento y fidelización de comunidades digitales",
        "Influencer marketing y gestión de colaboraciones",
        "Estrategia, compra y optimización de Social Ads",
      ],
      accent: "05",
    },
  },
  {
    id: "soluciones-digitales",
    eyebrow: "06: Desarrollo y Soluciones Digitales",
    title: "La tecnología al servicio de la marca.",
    body: "Desarrollo web y de aplicaciones, diseño UI/UX, e-learning, inteligencia artificial, cloud y automatización de procesos. Soluciones digitales construidas sobre estrategia, no sobre tendencia.",
    visual: {
      label: "Desarrollo y Soluciones Digitales",
      items: [
        "Desarrollo web y de aplicaciones",
        "Diseño UI/UX",
        "Soluciones e-learning",
        "Soluciones de inteligencia artificial",
        "Soluciones cloud",
        "Automatización de procesos",
      ],
      accent: "06",
    },
  },
  {
    id: "foto-video",
    eyebrow: "07: Foto y Video",
    title: "Imágenes que trabajan para la marca.",
    body: "Shooting foto y vídeo, guión, edición y producción audiovisual completa. Del concepto al archivo final, con el criterio de quien entiende la marca y sabe cómo tiene que verse.",
    visual: {
      label: "Foto y Video",
      items: [
        "Shooting Foto & Video",
        "Guión",
        "Edición de Video",
        "Producción Audiovisual",
      ],
      accent: "07",
    },
  },
  {
    id: "rrpp",
    eyebrow: "08: RR.PP y Prensa",
    title: "Relaciones que abren puertas.",
    body: "Estrategia de relaciones públicas, ruedas de prensa, convocatorias de medios y gestión de prescriptores. Contratación de celebrities y embajadores de marca a nivel nacional e internacional.",
    visual: {
      label: "RR.PP y Prensa",
      items: [
        "Estrategia de relaciones públicas",
        "Ruedas de Prensa",
        "Convocatoria de medios",
        "Convocatorias sociales",
        "Gestión de protocolo",
        "Identificación y gestión de relaciones con prescriptores, líderes de opinión",
        "Contratación nacional e internacional de celebrities y embajadores de marca",
      ],
      accent: "08",
    },
  },
];

function VisualPanel({ visual }: { visual: typeof sections[0]["visual"] }) {
  const many = visual.items.length > 6;
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 lg:p-12 xl:p-16">
      <div className="flex justify-end">
        <span className="text-white/[0.04] font-black text-[60px] lg:text-[120px] xl:text-[160px] leading-none font-mono select-none">
          {visual.accent}
        </span>
      </div>
      <div>
        <p className="text-white/20 text-xs tracking-widest uppercase mb-6">{visual.label}</p>
        <ul className={many ? "columns-2 gap-x-8" : "space-y-5"} role="list">
          {visual.items.map((item, i) => (
            <li key={i} className={`flex items-start gap-3 break-inside-avoid ${many ? "mb-3" : ""}`}>
              <span className={`flex-shrink-0 bg-white/15 ${many ? "w-px h-4 mt-1" : "w-px h-8"}`} aria-hidden="true" />
              <span className="text-white/70 font-light tracking-tight text-sm lg:text-base xl:text-lg leading-snug">{item}</span>
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
      className=""
    >
      <div
        ref={containerRef}
        className="relative"
        style={{ minHeight: `${sections.length * 100}vh` }}
      >
        {/* Sticky right-panel: full viewport height, centered within max-w */}
        <div className="sticky top-0 h-screen z-10 pointer-events-none">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex">
            {/* Left spacer: mirrors left column width */}
            <div className="hidden lg:block lg:w-1/2" />
            {/* Right panel */}
            <div className="hidden lg:flex lg:w-1/2 items-center pointer-events-auto">
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

        {/* Scrolling left content: absolute, full height */}
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
