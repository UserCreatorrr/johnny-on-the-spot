import type { Metadata } from "next";
import SectorPageTemplate from "@/components/SectorPageTemplate";

export const metadata: Metadata = {
  title: "Comunicación para Marcas de Lujo y Premium | Johnny on the Spot",
  description:
    "Agencia de comunicación para marcas de lujo y premium. Chopard, Glenfiddich, Philipp Plein, Carolina Herrera, Puig. Excelencia en cada detalle.",
  alternates: { canonical: "https://www.johnnyonthespot.es/sectores/lujo-premium" },
};

export default function LujoPremiumPage() {
  return (
    <SectorPageTemplate
      title="Lujo y Premium"
      subtitle="Las marcas de lujo no admiten errores. La comunicación tiene que ser tan impecable como el producto."
      h2="El estándar que el lujo exige"
      breadcrumbLabel="Lujo y Premium"
      paragraphs={[
        "Comunicar una marca de lujo es radicalmente distinto a comunicar cualquier otra categoría. No hay margen para lo mediocre, lo impreciso o lo genérico. Cada decisión un color, un papel, una tipografía, un momento del evento comunica algo sobre la marca, para bien o para mal.",
        "Hemos producido el e-learning global de fragancias para Chopard, los afterworks de Glenfiddich en cuatro ciudades españolas, la convención de 208 Brand Ambassadors de Puig en Barcelona, la formación internacional de Philipp Plein y el desfile de la colección Spring 2026 de Carolina Herrera. En todos los casos, el nivel de exigencia ha sido el que la marca requería.",
        "Nuestro trabajo en lujo parte del profundo respeto al mundo de la marca. Estudiamos su historia, su estética, sus referencias antes de proponer nada. El resultado es comunicación que refuerza el posicionamiento premium, no que lo diluye.",
      ]}
      services={["Eventos de lujo y desfiles", "E-learning y formación de embajadores", "Dirección de arte con estándar luxury", "Producción gráfica de alta gama", "Convenciones y gala events", "Activaciones en retail de lujo", "Contenido para marcas premium", "Identidades corporativas premium"]}
      clients="Chopard · Glenfiddich · Philipp Plein · Carolina Herrera · Puig · Coty Prestige"
      cases={[
        { title: "E-learning global para embajadores de fragancia Chopard", client: "Chopard", href: "/casos/chopard-elearning", desc: "Plataforma de formación interactiva para los embajadores de las fragancias Chopard a nivel mundial." },
        { title: "Convención de 208 Brand Ambassadors: Puig", client: "Puig", href: "/casos/puig-brand-ambassadors", desc: "Convención para embajadores de marca de las fragancias Puig en Barcelona." },
      ]}
      faqs={[
        { question: "¿Cómo garantizáis el estándar de calidad que exigen las marcas de lujo?", answer: "Trabajamos con proveedores de primera línea en cada categoría: papeleras de lujo, productoras de alto nivel, artistas y fotógrafos de referencia internacional. Y sobre todo, tenemos un criterio interno que no acepta soluciones de compromiso cuando la marca lo requiere." },
        { question: "¿Tenéis experiencia con retail y espacios de lujo?", answer: "Sí. Hemos diseñado activaciones en tiendas de lujo, espacios pop-up y eventos privados para marcas de joyería, moda y spirits premium." },
        { question: "¿Trabajáis con marcas de lujo que operan globalmente?", answer: "Sí. Chopard, Philipp Plein y Puig son marcas con operativa global. Nos adaptamos a sus estándares internacionales y coordinamos con sus equipos en varios países." },
        { question: "¿Podéis producir materiales de formación para equipos de ventas de lujo?", answer: "Sí. El e-learning de Chopard y el de Philipp Plein son buenos ejemplos. La formación de un embajador de marca de lujo tiene estándares propios: tono, profundidad de producto, sofisticación visual." },
      ]}
      ctaTitle="¿Tu marca merece una comunicación a su altura?"
      ctaSubtitle="Cuéntanos el proyecto. Sin compromisos en el estándar."
      relatedLinks={[
        { label: "Dirección de Arte", href: "/servicios/direccion-de-arte" },
        { label: "Eventos Corporativos", href: "/servicios/eventos-corporativos" },
        { label: "Caso Chopard", href: "/casos/chopard-elearning" },
        { label: "E-learning y Formación", href: "/soluciones/formacion-corporativa-elearning" },
      ]}
    />
  );
}
