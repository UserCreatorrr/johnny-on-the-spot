import type { Metadata } from "next";
import SectorPageTemplate from "@/components/SectorPageTemplate";

export const metadata: Metadata = {
  title: "Comunicación para Empresas de Tecnología y B2B | Johnny on the Spot",
  description:
    "Agencia de comunicación B2B y tecnología. SAP, GFT, Applus, Walk Me. Convenciones, identidad corporativa, vídeo y marketing digital para empresas tech.",
  alternates: { canonical: "https://www.johnnyonthespot.es/sectores/tecnologia-b2b" },
};

export default function TecnologiaBBPage() {
  return (
    <SectorPageTemplate
      title="Tecnología y B2B"
      subtitle="Comunicar tecnología compleja para audiencias expertas sin perder el impacto. Lo técnico y lo humano no son opuestos."
      h2="Comunicación B2B que persuade"
      breadcrumbLabel="Tecnología y B2B"
      paragraphs={[
        "Las empresas tecnológicas y B2B suelen infraestimar la comunicación como herramienta de negocio. Tienen un producto excelente, un argumento técnico sólido y un equipo de ventas competente, pero no saben cómo comunicar su valor de forma que llegue a los decisores no técnicos, o que diferencie en ferias y congresos donde todos dicen lo mismo.",
        "Hemos producido el SAP Partner Summit para 250 participantes internacionales en Barcelona, el stand y acciones de Applus en el Mobile World Congress y el 4YFN, el vídeo corporativo de Walk Me para SAP, la identidad y comunicación de GFT, y el Applus Family Day. Cada proyecto con su lógica B2B específica: argumentos racionales, audiencias informadas, ciclos de decisión largos.",
        "La comunicación B2B que funciona no es aburrida, pero tampoco pretende ser algo que no es. Es precisa, relevante, bien producida y diseñada para el decisor que tiene que aprobar el presupuesto, no solo para el técnico que lo va a usar.",
      ]}
      services={["Convenciones y partner summits", "Stands en ferias tecnológicas", "Vídeo corporativo y de producto", "Identidad corporativa B2B", "Marketing digital B2B", "Presentaciones ejecutivas", "E-learnings y formación interna", "Comunicación interna"]}
      clients="SAP · GFT · Applus · Walk Me"
      cases={[
        { title: "SAP Partner Summit para 250 participantes", client: "SAP", href: "/casos/sap-partner-summit", desc: "Convención internacional con producción integral para 250 partners de SAP en Barcelona." },
        { title: "Stand y activación Applus en MWC", client: "Applus", href: "/casos/applus-mwc", desc: "Diseño, construcción y gestión del stand de Applus en el Mobile World Congress de Barcelona." },
      ]}
      faqs={[
        { question: "¿Cómo simplificáis mensajes técnicos complejos?", answer: "Trabajamos con el equipo de producto o técnico del cliente para entender en profundidad lo que hace la solución. Luego lo traducimos a un lenguaje que el decisor no técnico entienda y que el técnico no considere una simplificación burda. Es un equilibrio que requiere experiencia en el sector." },
        { question: "¿Podéis gestionar la presencia en ferias internacionales de tecnología?", answer: "Sí. Hemos gestionado stands en el Mobile World Congress y el 4YFN para Applus y GFT. Desde el diseño hasta la producción, el montaje, el desmontaje y la logística del material." },
        { question: "¿Hacéis comunicación interna para empresas tecnológicas?", answer: "Sí. Plataformas de comunicación interna, newsletters corporativas, onboarding, cultura de empresa. Los retos de comunicación interna en empresas tech —equipos distribuidos, culturas diversas, crecimiento rápido— son particulares y los conocemos." },
        { question: "¿Podéis producir materiales de ventas B2B?", answer: "Sí. Decks de ventas, one-pagers, casos de éxito, materiales de sell-in: todo el armamento de ventas que el equipo comercial necesita para convertir en ciclos B2B largos." },
      ]}
      ctaTitle="¿Tu empresa tecnológica merece mejor comunicación?"
      ctaSubtitle="Cuéntanos el proyecto. Sabemos cómo hacer que lo técnico convenza."
      relatedLinks={[
        { label: "Eventos Corporativos", href: "/servicios/eventos-corporativos" },
        { label: "Marketing Digital", href: "/servicios/marketing-digital" },
        { label: "Caso SAP Partner Summit", href: "/casos/sap-partner-summit" },
        { label: "Campaña Integral", href: "/soluciones/campana-comunicacion-integral" },
      ]}
    />
  );
}
