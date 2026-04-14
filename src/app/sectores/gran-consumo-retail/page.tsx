import type { Metadata } from "next";
import SectorPageTemplate from "@/components/SectorPageTemplate";

export const metadata: Metadata = {
  title: "Comunicación en Gran Consumo y Retail | Johnny on the Spot",
  description:
    "Agencia especializada en gran consumo y retail. Coca-Cola, Haribo, Orbit, Perrier. Activaciones, POS, campañas y street marketing que conectan con el consumidor final.",
  alternates: { canonical: "https://www.johnnyonthespot.es/sectores/gran-consumo-retail" },
};

export default function GranConsumoRetailPage() {
  return (
    <SectorPageTemplate
      title="Gran Consumo y Retail"
      subtitle="En el gran consumo, la batalla se gana en el punto de venta y en la calle. Ahí es donde más experiencia tenemos."
      h2="Donde la marca encuentra al consumidor"
      breadcrumbLabel="Gran Consumo y Retail"
      paragraphs={[
        "Las marcas de gran consumo compiten en el lineal, en la pantalla y en la calle al mismo tiempo. La comunicación tiene que ser impactante en todos esos contextos, coherente entre ellos y capaz de generar acción inmediata en el consumidor.",
        "Hemos diseñado y producido la acción de guerrilla de Coca-Cola en Grandvalira y Medellín, la activación gamificada de Haribo en grandes superficies con app, los materiales POS de Orbit para USA y Europa, las activaciones de Perrier en Bélgica y el street marketing de IKEA Marruecos. En todos los casos, el objetivo era el mismo: que el consumidor vea, recuerde y actúe.",
        "En gran consumo sabemos que el presupuesto importa y que el retorno tiene que ser medible. Diseñamos activaciones eficientes: concepto sólido, mecánica simple de entender, ejecución impecable y medición clara desde el principio.",
      ]}
      services={["Activaciones en punto de venta", "Street marketing", "Materiales POS y PLV", "Campañas de producto multicanal", "Activaciones gamificadas y con app", "Sampling y degustaciones", "Diseño y producción de packaging", "Marketing digital integrado"]}
      clients="Coca-Cola · Haribo · Orbit · Perrier · IKEA Marruecos · Avianca"
      cases={[
        { title: "Street marketing Coca-Cola en Grandvalira", client: "Coca-Cola", href: "/casos/coca-cola-grandvalira", desc: "Acción de guerrilla en la estación de esquí más grande de los Pirineos y en Medellín simultáneamente." },
        { title: "Activación Haribo en grandes superficies con app", client: "Haribo", href: "/casos/haribo-activacion", desc: "Campaña de activación en punto de venta con app gamificada para grandes superficies." },
      ]}
      faqs={[
        { question: "¿Podéis activar en grandes superficies en toda España?", answer: "Sí. Tenemos red de promotores y coordinadores de activación a nivel nacional. Gestionamos la logística, los materiales, la formación del equipo y el seguimiento de resultados en todos los puntos de activación." },
        { question: "¿Cómo medís el impacto de las activaciones en gran consumo?", answer: "Mediante múltiples métricas: número de interacciones directas, incremento de ventas en el período de activación, cobertura en redes, UGC generado y, cuando aplica, descargas de app o participación en mecánicas digitales." },
        { question: "¿Podéis producir materiales POS para varios mercados?", answer: "Sí. Lo hemos hecho para Orbit en USA y Europa. Adaptamos los materiales a las normativas locales de cada mercado, los idiomas necesarios y los estándares de impresión de cada país." },
        { question: "¿Trabajáis con distribuidores de gran consumo?", answer: "Sí. Tenemos experiencia en comunicación dirigida a la red de distribución: presentaciones de producto, catálogos, materiales de sell-in y eventos de distribuidores." },
      ]}
      relatedLinks={[
        { label: "Activación de Marca", href: "/servicios/activacion-de-marca" },
        { label: "Producción Gráfica", href: "/servicios/produccion-grafica" },
        { label: "Caso Coca-Cola", href: "/casos/coca-cola-grandvalira" },
        { label: "Activación en POS", href: "/soluciones/activacion-punto-de-venta" },
      ]}
    />
  );
}
