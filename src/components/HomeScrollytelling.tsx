"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    id: "estrategia",
    eyebrow: "Estrategia",
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
    eyebrow: "Dirección Creativa",
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
    eyebrow: "Eventos",
    title: "Presencia donde importa.",
    body: "",
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
    eyebrow: "Activaciones y Experiencias",
    title: "La marca en el mundo real.",
    body: "",
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
    eyebrow: "Marketing Digital",
    title: "Comunidades que convierten.",
    body: "",
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
    eyebrow: "Desarrollo y Soluciones Digitales",
    title: "La tecnología al servicio de la marca.",
    body: "",
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
    eyebrow: "Foto y Video",
    title: "Imágenes que trabajan para la marca.",
    body: "",
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
    eyebrow: "RR.PP y Prensa",
    title: "Relaciones que abren puertas.",
    body: "",
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
        className="relative scrollytelling-container"
        style={{ minHeight: `${sections.length * 100}vh` }}
      >
        {/* Sticky right-panel: desktop only */}
        <div className="lg:sticky lg:top-0 lg:h-screen z-10 pointer-events-none">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 lg:h-full flex">
            {/* Left spacer: mirrors left column width */}
            <div className="hidden lg:block lg:w-1/2" />
            {/* Right panel */}
            <div className="hidden lg:flex lg:w-1/2 items-center pointer-events-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="w-full"
                >
                  <VisualPanel visual={sections[activeIndex].visual} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Scrolling left content: absolute on desktop, normal flow on mobile */}
        <div className="lg:absolute lg:top-0 lg:left-0 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="lg:w-1/2">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="flex items-center"
                  style={{ minHeight: "100vh" }}
                >
                  <div className="py-20 lg:pr-16 max-w-xl">
                    <p className="text-white font-black tracking-tighter text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4 text-balance">
                      {section.eyebrow}
                    </p>
                    <h3
                      id={section.id === "estrategia" ? "scrolly-heading" : undefined}
                      className="text-2xl lg:text-3xl xl:text-4xl font-light tracking-tight text-white/50 leading-snug"
                    >
                      {section.title}
                    </h3>

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
