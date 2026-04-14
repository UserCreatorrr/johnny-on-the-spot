import type { Metadata } from "next";
import SectorPageTemplate from "@/components/SectorPageTemplate";

export const metadata: Metadata = {
  title: "Comunicación para Hostelería y Turismo | Johnny on the Spot",
  description:
    "Agencia de comunicación para el sector hotelero y turístico. Meliá Hotels 60 aniversario, Avianca. Eventos corporativos, identidad y comunicación para el sector.",
  alternates: { canonical: "https://www.johnnyonthespot.es/sectores/hosteleria-turismo" },
};

export default function HosteleriaTurismoPage() {
  return (
    <SectorPageTemplate
      title="Hostelería y Turismo"
      subtitle="El sector hotelero y turístico vende experiencias antes de que el cliente llegue. La comunicación es el primer contacto con esa experiencia."
      h2="Comunicación que vende antes del check-in"
      breadcrumbLabel="Hostelería y Turismo"
      paragraphs={[
        "En hostelería y turismo, la promesa de marca es todo. El cliente decide si reserva basándose en cómo le hace sentir la comunicación de la marca antes de llegar. Y juzga si esa promesa se ha cumplido en cada punto de contacto durante su estancia.",
        "Hemos producido el evento del 60 aniversario de Meliá Hotels International un hito corporativo que exigía una producción a la altura de la trayectoria de la cadena y varias acciones para Avianca en Madrid y Medellín. En ambos casos, la producción tenía que estar a la altura de las expectativas de una marca premium del sector.",
        "Los eventos corporativos en hostelería tienen una particularidad: el cliente es también el proveedor del espacio. Eso genera una dinámica de coordinación específica que conocemos bien, y que nos permite navegar sin fricciones entre lo que el evento necesita y lo que el hotel puede ofrecer.",
      ]}
      services={["Eventos corporativos en hoteles", "Aniversarios y hitos de marca", "Campañas de comunicación hotelera", "Identidad corporativa para hostelería", "Contenido para redes y digital", "Producción de materiales corporativos", "Street marketing para aerolíneas", "Comunicación interna para cadenas hoteleras"]}
      clients="Meliá Hotels International · Avianca"
      cases={[
        { title: "60 Aniversario de Meliá Hotels International", client: "Meliá Hotels", href: "/casos/meliá-60-aniversario", desc: "Evento corporativo de celebración para el 60 aniversario de la cadena hotelera internacional." },
      ]}
      faqs={[
        { question: "¿Podéis producir eventos en nuestros propios hoteles?", answer: "Sí, y es algo que hacemos habitualmente. Conocemos la dinámica de trabajar dentro del propio establecimiento: coordinación con operaciones, gestión de espacios, catering interno versus externo, y todas las particularidades logísticas." },
        { question: "¿Hacéis comunicación para el sector turístico en general?", answer: "Sí. Más allá de hoteles, tenemos experiencia con aerolíneas, operadores turísticos y destinos. El street marketing de Avianca en Madrid y Medellín es un ejemplo de activación para una aerolínea en dos mercados simultáneos." },
        { question: "¿Podéis diseñar la comunicación corporativa de una cadena hotelera?", answer: "Sí. Desde la identidad corporativa hasta los materiales internos, la comunicación con partners y la presencia digital. Una cadena hotelera tiene múltiples audiencias huéspedes, inversores, equipos, franchisados y cada una necesita su propio lenguaje." },
        { question: "¿Tenéis experiencia con grandes eventos de sector como FITUR?", answer: "Sí. Tenemos experiencia en producción de stands y presencia en ferias de turismo y hostelería a nivel nacional e internacional." },
      ]}
      relatedLinks={[
        { label: "Eventos Corporativos", href: "/servicios/eventos-corporativos" },
        { label: "Dirección Creativa", href: "/servicios/direccion-produccion-creativa" },
        { label: "Caso Meliá 60 Aniversario", href: "/casos/meliá-60-aniversario" },
        { label: "Convenciones y Eventos", href: "/soluciones/convenciones-y-eventos" },
      ]}
    />
  );
}
