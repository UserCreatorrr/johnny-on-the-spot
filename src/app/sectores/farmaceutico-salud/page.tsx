import type { Metadata } from "next";
import SectorPageTemplate from "@/components/SectorPageTemplate";

export const metadata: Metadata = {
  title: "Comunicación en el Sector Farmacéutico y Salud | Johnny on the Spot",
  description:
    "Agencia de comunicación especializada en el sector farmacéutico. Alcon, Novartis, ISDIN, Ipsen Farma. Creatividad dentro del marco regulatorio, con precisión científica.",
  alternates: { canonical: "https://www.johnnyonthespot.es/sectores/farmaceutico-salud" },
};

export default function FarmaceuticoSaludPage() {
  return (
    <SectorPageTemplate
      title="Farmacéutico y Salud"
      subtitle="Comunicar en salud exige precisión científica, cumplimiento normativo y la creatividad suficiente para que el mensaje llegue. Lo tres a la vez."
      h2="Cuando el error no es una opción"
      breadcrumbLabel="Farmacéutico y Salud"
      paragraphs={[
        "El sector farmacéutico es uno de los entornos de comunicación más exigentes que existen. Los mensajes deben cumplir normativas estrictas AEMPS, EFPIA, distintas regulaciones por mercado, pero también tienen que funcionar como comunicación: llegar a médicos, pacientes, farmacéuticos o distribuidores con la claridad y el impacto suficientes para provocar acción.",
        "Hemos trabajado con Alcon en el lanzamiento paneuropeo de Air Optix roadshow por ocho ciudades con app de realidad aumentada, con Novartis en la campaña 360° de Certican, con Ipsen Farma en su convención anual en Finlandia, con ISDIN en la rueda de prensa del Trofeu Conde de Godó y con Dr. Scholl en el canal farmacia de España y Portugal.",
        "En cada proyecto farma, la estrategia parte del producto y la audiencia clínica o regulatoria. La creatividad trabaja dentro de ese marco, no contra él. El resultado es comunicación que cumple y que convence.",
      ]}
      services={["Estrategia de comunicación regulada", "Campañas de producto multicanal", "Producción de eventos científicos", "Materiales para canal farmacia y HCP", "E-learnings para equipos médicos", "Roadshows y lanzamientos de producto", "Contenido digital adaptado a normativa", "Activación en punto de venta farmacéutico"]}
      clients="Alcon · Novartis · ISDIN · Ipsen Farma · Dr. Scholl"
      cases={[
        { title: "Roadshow paneuropeo Air Optix en 8 países", client: "Alcon", href: "/casos/alcon-air-optix-paneuropeo", desc: "Lanzamiento paneuropeo con app de realidad aumentada y gira por ocho ciudades europeas." },
        { title: "Campaña 360° Certican", client: "Novartis", href: "/casos/novartis-certican-360", desc: "Campaña integral de producto farmacéutico para todos los canales de comunicación." },
      ]}
      faqs={[
        { question: "¿Tenéis experiencia con normativa AEMPS y EFPIA?", answer: "Sí. Toda la comunicación farmacéutica que producimos pasa por revisión de cumplimiento normativo antes de la producción final. Conocemos los límites de lo que se puede comunicar en España y en los principales mercados europeos." },
        { question: "¿Podéis producir materiales para profesionales de la salud (HCP)?", answer: "Sí. Tenemos experiencia en comunicación dirigida a médicos, farmacéuticos y otros profesionales sanitarios. El tono, el nivel técnico y los canales son distintos a los de la comunicación a paciente, y los manejamos de forma diferenciada." },
        { question: "¿Trabajáis en lanzamientos internacionales en farma?", answer: "Sí. El roadshow de Alcon Air Optix es un buen ejemplo: ocho ciudades en Europa, materiales adaptados por país, app de realidad aumentada y coordinación logística completa." },
        { question: "¿Podéis producir e-learnings para equipos de ventas farmacéuticos?", answer: "Sí. Producimos plataformas de formación interactiva para equipos comerciales y médicos de farmacéuticas. Desde el guión hasta la plataforma, adaptado a los estándares de compliance del sector." },
      ]}
      relatedLinks={[
        { label: "Estrategia de Comunicación", href: "/servicios/estrategia-de-comunicacion" },
        { label: "Eventos Corporativos", href: "/servicios/eventos-corporativos" },
        { label: "Caso Alcon Roadshow", href: "/casos/alcon-air-optix-paneuropeo" },
        { label: "E-learning y Formación", href: "/soluciones/formacion-corporativa-elearning" },
      ]}
    />
  );
}
