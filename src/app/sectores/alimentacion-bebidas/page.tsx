import type { Metadata } from "next";
import SectorPageTemplate from "@/components/SectorPageTemplate";

export const metadata: Metadata = {
  title: "Comunicación para Alimentación y Bebidas | Johnny on the Spot",
  description:
    "Agencia especializada en food & beverage. Perrier, Glenfiddich, Petit Farm. Branding, packaging, activaciones y eventos para marcas de alimentación y bebidas.",
  alternates: { canonical: "https://www.johnnyonthespot.es/sectores/alimentacion-bebidas" },
};

export default function AlimentacionBebidasPage() {
  return (
    <SectorPageTemplate
      title="Alimentación y Bebidas"
      subtitle="El food & beverage es uno de los sectores más competitivos y más emocionantes para hacer comunicación. La autenticidad lo es todo."
      h2="Cuando el producto es el protagonista"
      breadcrumbLabel="Alimentación y Bebidas"
      paragraphs={[
        "En alimentación y bebidas, la comunicación tiene que conectar con algo muy primario: el placer, el ritual, la convivialidad. Las marcas que lo consiguen crean fans, no solo compradores. Las que no, compiten eternamente por precio.",
        "Hemos trabajado con Glenfiddich en afterworks premium en cuatro ciudades españolas, con Perrier en activaciones en Bélgica, con Petit Farm en el desarrollo de su identidad completa y web, y con Meliá en la dimensión gastronómica de sus eventos. En cada caso, la comunicación parte del producto y de la experiencia que ese producto genera.",
        "El food & beverage tiene además una dimensión visual muy potente: fotografía de producto, dirección de arte de packaging, mise en scène en los eventos. Somos especialmente sólidos en esa parte, porque tenemos directores de arte con experiencia específica en categoría.",
      ]}
      services={["Branding y naming", "Packaging design", "Eventos y catas premium", "Activaciones en hostelería", "Fotografía de producto", "Contenido para social y digital", "Identidad corporativa", "Street marketing gastronómico"]}
      clients="Perrier · Glenfiddich · Petit Farm · Meliá (F&B)"
      cases={[
        { title: "Identidad corporativa integral — Petit Farm", client: "Petit Farm", href: "/casos/metaembalatges-branding", desc: "Identidad completa, web y posicionamiento para marca de gastronomía artesanal." },
      ]}
      faqs={[
        { question: "¿Podéis diseñar packaging para productos alimentarios?", answer: "Sí. Diseñamos packaging pensando tanto en la estética como en los requisitos legales del etiquetado alimentario: ingredientes, alérgenos, información nutricional. Coordinamos con los proveedores de impresión adecuados para cada tipo de envase." },
        { question: "¿Hacéis eventos de presentación de producto para el canal horeca?", answer: "Sí. Catas, degustaciones, presentaciones a distribuidores, eventos de canal: conocemos el lenguaje del horeca y cómo hacer que una presentación de producto genere pedidos." },
        { question: "¿Podéis hacer fotografía de producto para catálogos y redes?", answer: "Sí. Fotografía de alimentos y bebidas con dirección de arte específica para la categoría. Tanto en estudio como en localizaciones reales." },
        { question: "¿Tenéis experiencia con spirits y bebidas alcohólicas premium?", answer: "Sí. Glenfiddich y Perrier son buenos ejemplos. Las marcas de spirits premium tienen reglas específicas en comunicación —regulación publicitaria del alcohol— que conocemos y respetamos." },
      ]}
      ctaTitle="¿Tienes un proyecto en food & beverage?"
      ctaSubtitle="Cuéntanoslo. Sabemos hacer que los productos de alimentación y bebida sean irresistibles en comunicación."
      relatedLinks={[
        { label: "Diseño de Identidad", href: "/servicios/diseno-de-identidad" },
        { label: "Producción Gráfica", href: "/servicios/produccion-grafica" },
        { label: "Activación de Marca", href: "/servicios/activacion-de-marca" },
        { label: "Contacto", href: "/contacto" },
      ]}
    />
  );
}
