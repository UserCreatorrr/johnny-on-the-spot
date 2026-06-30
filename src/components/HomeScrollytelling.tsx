"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Locale } from "@/lib/i18n";

const sectionsByLocale = {
  es: [
  {
    id: "estrategia",
    eyebrow: "Estrategia",
    title: "Saber qué decir… y cuándo hacer que pase.",
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
    id: "comunicacion",
    eyebrow: "Comunicación",
    title: "Cuando el mensaje deja de ser tuyo y pasa a ser de todos.",
    body: "",
    visual: {
      label: "Comunicación",
      items: [
        "Estrategia de comunicación integral",
        "Comunicación corporativa",
        "Comunicación interna",
        "Gestión de imagen y reputación",
        "Comunicación de crisis",
        "Portavocía y media training",
      ],
      accent: "02",
    },
  },
  {
    id: "creatividad",
    eyebrow: "Dirección Creativa",
    title: "El diseño habla el idioma del concepto.",
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
      accent: "03",
    },
  },
  {
    id: "eventos",
    eyebrow: "Eventos",
    title: "Precisión detrás, magia delante.",
    body: "",
    visual: {
      label: "Eventos",
      items: [
        "Eventos Corporativos Nacionales e Internacionales",
        "Convenciones",
        "Desfiles",
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
      accent: "04",
    },
  },
  {
    id: "activaciones",
    eyebrow: "Activaciones y Experiencias",
    title: "La diferencia entre estar y dejar huella.",
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
      accent: "05",
    },
  },
  {
    id: "digital",
    eyebrow: "Marketing Digital",
    title: "Internet está lleno de ruido. Hagamos otra cosa.",
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
      accent: "06",
    },
  },
  {
    id: "soluciones-digitales",
    eyebrow: "Desarrollo y Soluciones Digitales",
    title: "Tecnología al servicio de la experiencia.",
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
      accent: "07",
    },
  },
  {
    id: "foto-video",
    eyebrow: "Foto y Vídeo",
    title: "Contenido que se mueve… y mueve.",
    body: "",
    visual: {
      label: "Foto y Vídeo",
      items: [
        "Shooting Foto & Video",
        "Guión",
        "Edición de Video",
        "Producción Audiovisual",
      ],
      accent: "08",
    },
  },
  {
    id: "rrpp",
    eyebrow: "RRPP y Prensa",
    title: "Construimos conversación alrededor de las marcas.",
    body: "",
    visual: {
      label: "RRPP y Prensa",
      items: [
        "Estrategia de relaciones públicas",
        "Ruedas de Prensa",
        "Convocatoria de medios",
        "Convocatorias sociales",
        "Gestión de protocolo",
        "Identificación y gestión de relaciones con prescriptores, líderes de opinión",
        "Contratación nacional e internacional de celebrities y embajadores de marca",
      ],
      accent: "09",
    },
  },
  ],
  en: [
    {
      id: "estrategia",
      eyebrow: "Strategy",
      title: "Knowing what to say… and when to make it happen.",
      body: "",
      visual: {
        label: "Strategy",
        items: [
          "360° Strategy Design",
          "Marketing and communications consulting",
          "Reputation analysis",
          "Brand platform",
          "Insight identification",
          "Brand storytelling",
          "Branded Content",
          "Conceptual development",
          "Crisis management",
        ],
        accent: "01",
      },
    },
    {
      id: "comunicacion",
      eyebrow: "Communication",
      title: "When the message stops being yours and becomes everyone's.",
      body: "",
      visual: {
        label: "Communication",
        items: [
          "Integrated communications strategy",
          "Corporate communications",
          "Internal communications",
          "Image and reputation management",
          "Crisis communications",
          "Spokesperson and media training",
        ],
        accent: "02",
      },
    },
    {
      id: "creatividad",
      eyebrow: "Creative Direction",
      title: "Design speaks the language of the concept.",
      body: "",
      visual: {
        label: "Creative Direction",
        items: [
          "Art direction",
          "Graphic Design",
          "Branding & Naming",
          "Corporate Identity development",
          "Creation of amplifiable content",
          "Copywriting",
          "Graphic Production",
          "Packaging & POS Material",
        ],
        accent: "03",
      },
    },
    {
      id: "eventos",
      eyebrow: "Events",
      title: "Precision behind, magic in front.",
      body: "",
      visual: {
        label: "Events",
        items: [
          "National and International Corporate Events",
          "Conventions",
          "Fashion shows",
          "RoadShow",
          "Product launches",
          "Fairs & Trade Shows",
          "Conceptualization",
          "Food & Beverage",
          "Location scouting",
          "Staff",
          "AV and Technical Production",
          "Logistics and transfers",
        ],
        accent: "04",
      },
    },
    {
      id: "activaciones",
      eyebrow: "Activation & Experiences",
      title: "The difference between showing up and leaving a mark.",
      body: "",
      visual: {
        label: "Activation & Experiences",
        items: [
          "Brand Experience",
          "Brand Activation",
          "Guerrilla Marketing",
          "Sampling",
          "Disruptive actions",
          "Team Buildings",
        ],
        accent: "05",
      },
    },
    {
      id: "digital",
      eyebrow: "Digital Marketing",
      title: "The internet is full of noise. Let's do something else.",
      body: "",
      visual: {
        label: "Digital Marketing",
        items: [
          "Social media strategy and digital amplification",
          "Content creation and planning",
          "Management, growth and loyalty of digital communities",
          "Influencer marketing and partnership management",
          "Social Ads strategy, buying and optimization",
        ],
        accent: "06",
      },
    },
    {
      id: "soluciones-digitales",
      eyebrow: "Digital Development & Solutions",
      title: "Technology in service of the experience.",
      body: "",
      visual: {
        label: "Digital Development & Solutions",
        items: [
          "Web and application development",
          "UI/UX Design",
          "E-learning solutions",
          "Artificial intelligence solutions",
          "Cloud solutions",
          "Process automation",
        ],
        accent: "07",
      },
    },
    {
      id: "foto-video",
      eyebrow: "Photo & Video",
      title: "Content that moves… and moves you.",
      body: "",
      visual: {
        label: "Photo & Video",
        items: [
          "Photo & Video Shooting",
          "Scriptwriting",
          "Video Editing",
          "Audiovisual Production",
        ],
        accent: "08",
      },
    },
    {
      id: "rrpp",
      eyebrow: "PR & Press",
      title: "We build conversation around brands.",
      body: "",
      visual: {
        label: "PR & Press",
        items: [
          "Public relations strategy",
          "Press conferences",
          "Media calls",
          "Social calls",
          "Protocol management",
          "Identification and management of relationships with prescribers and opinion leaders",
          "National and international booking of celebrities and brand ambassadors",
        ],
        accent: "09",
      },
    },
  ],
} as const;

type Visual = { label: string; items: readonly string[]; accent: string };

function VisualPanel({ visual }: { visual: Visual }) {
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

export default function HomeScrollytelling({ locale = "es" }: { locale?: Locale }) {
  const sections = sectionsByLocale[locale];
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { rootMargin: "-49% 0px -49% 0px", threshold: 0 }
    );

    const refs = sectionRefs.current;
    refs.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

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
              {sections.map((section, i) => (
                <div
                  key={section.id}
                  ref={(el) => { sectionRefs.current[i] = el; }}
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
