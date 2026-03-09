import type { Metadata } from "next";
import SectorPageTemplate from "@/components/SectorPageTemplate";

export const metadata: Metadata = {
  title: "Comunicación para el Sector de Automoción | Johnny on the Spot",
  description:
    "Agencia de comunicación y eventos para marcas de automoción. Porsche Classic Car Event en Bélgica. Excelencia en producción y estándares internacionales.",
  alternates: { canonical: "https://www.johnnyonthespot.es/sectores/automocion" },
};

export default function AutomocionPage() {
  return (
    <SectorPageTemplate
      title="Automoción"
      subtitle="Las marcas de automoción tienen los estándares más exigentes del mercado. Hemos trabajado para Porsche. Sabemos lo que eso significa."
      h2="El nivel que la automoción exige"
      breadcrumbLabel="Automoción"
      paragraphs={[
        "La industria del automóvil opera con estándares de calidad y excelencia que no tienen margen para errores. Un evento de marca para una firma premium de automoción tiene que ser impecable en cada detalle: la experiencia del participante, la producción audiovisual, la logística, el catering, los materiales.",
        "Hemos producido el Porsche Classic Car Event en Bélgica: un evento premium para entusiastas y propietarios de Porsche clásicos, con producción integral que incluyó logística de los vehículos, experiencia en ruta, materiales de evento y cobertura fotográfica y audiovisual.",
        "La comunicación en automoción premium requiere entender el mundo del coleccionismo, la conducción y la cultura de marca propia de estas marcas. No es un cliente para agencias generalistas que nunca han tenido que gestionar la logística de un vehículo de 300.000 euros.",
      ]}
      services={["Eventos premium de marca", "Experiencias de conducción", "Producción audiovisual", "Materiales de evento", "Logística de vehículos", "Dirección de arte premium", "Contenido para entusiastas", "Comunicación de concesionario"]}
      clients="Porsche"
      cases={[
        { title: "Porsche Classic Car Event Belgium", client: "Porsche", href: "/casos-de-exito", desc: "Evento premium para propietarios y entusiastas de Porsche clásicos en Bélgica, con producción integral." },
      ]}
      faqs={[
        { question: "¿Tenéis experiencia en eventos internacionales para marcas premium de automoción?", answer: "Sí. El Porsche Classic Car Event en Bélgica es un proyecto que requirió coordinación internacional, logística de vehículos de colección y un estándar de producción alineado con los valores de la marca." },
        { question: "¿Podéis producir contenido para concesionarios y redes de distribución?", answer: "Sí. Materiales de punto de venta, formación de vendedores, contenido digital y campañas locales para concesionarios y redes de distribución de marcas de automoción." },
        { question: "¿Hacéis producción audiovisual de vehículos?", answer: "Sí. Vídeos de producto, experiencias de conducción filmadas y contenido editorial sobre vehículos. Con el equipo técnico y la dirección de arte adecuados para hacer justicia a los coches." },
        { question: "¿Podéis gestionar eventos en varios países europeos?", answer: "Sí. Tenemos red de proveedores en los principales países europeos y experiencia en coordinación logística cross-border." },
      ]}
      ctaTitle="¿Tienes un proyecto en automoción?"
      ctaSubtitle="Los estándares de tu marca son los nuestros también. Cuéntanoslo."
      relatedLinks={[
        { label: "Eventos Corporativos", href: "/servicios/eventos-corporativos" },
        { label: "Dirección de Arte", href: "/servicios/direccion-de-arte" },
        { label: "Producción Internacional", href: "/soluciones/convenciones-y-eventos" },
        { label: "Contacto", href: "/contacto" },
      ]}
    />
  );
}
