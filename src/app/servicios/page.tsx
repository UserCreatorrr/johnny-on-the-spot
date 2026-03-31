import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Servicios de Comunicación Integral | Johnny on the Spot",
  description:
    "Dirección creativa, diseño de identidad, producción de eventos, activación de marca, marketing digital e IA. Todo bajo un mismo equipo sénior en Barcelona.",
  alternates: {
    canonical: "https://www.johnnyonthespot.es/servicios",
  },
};

const SERVICIOS = [
  {
    title: "Estrategia",
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
  },
  {
    title: "Dirección Creativa",
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
  },
  {
    title: "Eventos",
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
  },
  {
    title: "Activaciones y Experiencias",
    items: [
      "Brand Experience",
      "Activación de Marca",
      "Marketing de Guerilla",
      "Sampling",
      "Acciones disruptivas",
      "Team Buildings",
    ],
  },
  {
    title: "Marketing Digital",
    items: [
      "Estrategia de RRSS y amplificación digital",
      "Creación y planificación de contenidos",
      "Gestión, crecimiento y fidelización de comunidades digitales",
      "Influencer marketing y gestión de colaboraciones",
      "Estrategia, compra y optimización de Social Ads",
    ],
  },
  {
    title: "Desarrollo y Soluciones Digitales",
    items: [
      "Desarrollo web y de aplicaciones",
      "Diseño UI/UX",
      "Soluciones e-learning",
      "Soluciones de inteligencia artificial",
      "Soluciones cloud",
      "Automatización de procesos",
    ],
  },
  {
    title: "Foto y Video",
    items: [
      "Shooting Foto & Video",
      "Guión",
      "Edición de Video",
      "Producción Audiovisual",
    ],
  },
  {
    title: "RR.PP y Prensa",
    items: [
      "Estrategia de relaciones públicas",
      "Ruedas de Prensa",
      "Convocatoria de medios",
      "Convocatorias sociales",
      "Gestión de protocolo",
      "Identificación y gestión de relaciones con prescriptores, líderes de opinión",
      "Contratación nacional e internacional de celebrities y embajadores de marca",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <PageLayout>
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Servicios" }]} />
        </div>
      </div>

      <section className="pt-8 pb-16 lg:pb-24 px-6 lg:px-8" aria-labelledby="servicios-heading">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Lo que hacemos</p>
          <h1
            id="servicios-heading"
            className="text-5xl lg:text-7xl font-black tracking-tighter text-white leading-none mb-8 max-w-4xl"
          >
            Servicios de comunicación que funcionan.
          </h1>
          <p className="text-white/40 text-lg lg:text-xl max-w-2xl leading-relaxed">
            No somos especialistas en una sola cosa. Somos la agencia que cubre todo el proceso: desde la estrategia hasta la entrega final. Sin fisuras, sin pérdidas de criterio por el camino.
          </p>
        </div>
      </section>

      {SERVICIOS.map((servicio, index) => {
        const isDark = index % 2 === 0;
        return (
          <section
            key={servicio.title}
            className={`min-h-screen flex items-center px-6 lg:px-8 py-24 ${
              isDark ? "bg-black" : "bg-white"
            }`}
            aria-label={servicio.title}
          >
            <div className="max-w-7xl mx-auto w-full">
              <p className={`text-xs tracking-widest uppercase mb-6 font-mono ${isDark ? "text-white/25" : "text-black/25"}`}>
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2
                className={`text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-16 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                {servicio.title}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4">
                {servicio.items.map((item) => (
                  <li
                    key={item}
                    className={`text-base lg:text-lg leading-snug border-t pt-4 ${
                      isDark
                        ? "text-white/70 border-white/10"
                        : "text-black/70 border-black/10"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      <CTASection
        title="¿Necesitas más de un servicio?"
        subtitle="La mayoría de nuestros clientes trabajan con nosotros en varios frentes a la vez. Cuéntanos el alcance y diseñamos la solución más eficiente."
        primaryCTA="Hablemos"
        secondaryCTA="Ver casos de éxito"
      />
    </PageLayout>
  );
}
