import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Dirección y Producción Creativa | Johnny on the Spot: Barcelona",
  description:
    "Dirección creativa integral desde el concepto hasta la entrega. Ideamos, dirigimos y producimos campañas de comunicación para marcas que exigen el máximo nivel. Barcelona.",
  alternates: { canonical: "https://www.johnnyonthespot.es/servicios/direccion-produccion-creativa" },
  openGraph: {
    title: "Dirección y Producción Creativa | Johnny on the Spot",
    description: "Liderazgo creativo de principio a fin. Un equipo sénior convierte tu briefing en campañas que funcionan.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dirección y Producción Creativa",
  provider: { "@type": "Organization", name: "Johnny on the Spot" },
  description: "Dirección creativa integral desde el concepto hasta la entrega final para campañas de comunicación.",
  areaServed: { "@type": "Place", name: "España" },
  serviceType: "Dirección Creativa",
};

const faqs = [
  {
    question: "¿Qué incluye exactamente la dirección creativa?",
    answer: "Incluye el desarrollo del concepto creativo, la definición del tono y estilo, la selección y dirección de todos los perfiles creativos involucrados (diseñadores, fotógrafos, realizadores, copywriters) y la supervisión de la producción hasta la entrega final. Es el cerebro y el hilo conductor de todo el proceso.",
  },
  {
    question: "¿Podéis encargaros de la producción además del concepto?",
    answer: "Sí. De hecho, es donde marcamos la diferencia. Muchas agencias delegan la producción y ahí se pierde el estándar. Nosotros mantenemos el control creativo en toda la cadena de producción.",
  },
  {
    question: "¿Trabajáis con marcas que ya tienen equipo interno?",
    answer: "Sí, y con frecuencia. Somos directores creativos externos que complementan o lideran equipos internos. Nos adaptamos al modelo que más le conviene a cada cliente.",
  },
  {
    question: "¿Qué tamaño de proyectos gestionáis?",
    answer: "Desde campañas de alcance nacional hasta producciones internacionales con equipos en múltiples países. El mínimo que necesitamos es un briefing sólido y un cliente con criterio.",
  },
];

export default function DireccionCreativaPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Servicios", href: "/servicios" },
              { label: "Dirección y Producción Creativa" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-20 lg:pb-28 px-6 lg:px-8" aria-labelledby="service-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Servicio</p>
              <h1
                id="service-heading"
                className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-none"
              >
                Dirección y Producción Creativa
              </h1>
            </div>
            <div>
              <p className="text-white/45 text-xl leading-relaxed">
                Del concepto a la entrega, sin perder el hilo. Lideramos la creatividad de tu campaña y producimos el resultado con el nivel que la idea merece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-24 px-6 lg:px-8 border-t border-white/5" aria-label="Descripción del servicio">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-8">
                La idea es solo el principio
              </h2>
              <div className="space-y-5 text-white/45 text-lg leading-relaxed">
                <p>
                  Una buena idea mal producida es una oportunidad perdida. Una idea mediocre bien producida sigue siendo mediocre. En Johnny on the Spot, dirección y producción van siempre de la mano, bajo el mismo criterio y con la misma exigencia.
                </p>
                <p>
                  Nuestros directores creativos sénior lideran el proyecto desde el primer brief hasta la aprobación final. Eso significa que el concepto que diseñamos es el mismo que llegará al mercado: sin diluciones, sin compromiso entre lo que se imaginó y lo que se produjo.
                </p>
                <p>
                  Trabajamos con una red de profesionales especializados: fotógrafos, realizadores, diseñadores, ilustradores, productoras: que activamos según las necesidades de cada proyecto. El cliente no gestiona esa red. La gestionamos nosotros.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-white/30 text-xs tracking-widest uppercase mb-6">Qué incluye</h3>
              <ul className="space-y-4" role="list">
                {[
                  "Desarrollo del concepto creativo",
                  "Definición de tono y lenguaje visual",
                  "Dirección de equipo creativo",
                  "Supervisión de producción",
                  "Control de calidad en entrega",
                  "Adaptación a múltiples formatos",
                  "Coordinación con cliente y proveedores",
                  "Brief creativo y brand guidelines",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/50 text-sm">
                    <span className="mt-1.5 w-1 h-1 bg-white/30 rounded-full flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tipología de proyectos */}
      <section className="py-16 lg:py-24 px-6 lg:px-8 border-t border-white/5" aria-label="Tipos de proyectos">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-12">
            Proyectos que dirigimos y producimos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {[
              { title: "Campañas publicitarias", desc: "De la estrategia al material final para prensa, exterior, digital y ATL." },
              { title: "Campañas de producto", desc: "Lanzamientos con concepto creativo propio, materiales adaptados a todos los canales." },
              { title: "Identidades de marca", desc: "Naming, logo, sistema visual y aplicaciones: creado y producido bajo la misma dirección." },
              { title: "Producciones audiovisuales", desc: "Vídeos corporativos, de producto, documentales de marca y series de contenido." },
              { title: "Eventos de marca", desc: "Concepto, diseño del espacio, producción y dirección in situ del evento." },
              { title: "Plataformas digitales", desc: "Webs, microsites, apps: dirección visual y UX coherente con la marca." },
            ].map((item) => (
              <div key={item.title} className="bg-black p-8">
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes / credibilidad */}
      <section className="py-16 lg:py-20 px-6 lg:px-8 bg-white" aria-label="Clientes">
        <div className="max-w-7xl mx-auto">
          <p className="text-black/40 text-sm mb-8">
            Hemos dirigido campañas y producciones para:
          </p>
          <p className="text-black/30 text-lg tracking-wide">
            Alcon · Novartis · Carolina Herrera · Coca-Cola · SAP · Porsche · Meliá · Puig · Chopard · ISDIN · GFT · Applus
          </p>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16 lg:py-20 px-6 lg:px-8 border-t border-white/5" aria-label="Servicios relacionados">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black tracking-tighter text-white mb-8">
            También puede interesarte
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Diseño de Identidad", href: "/servicios/diseno-de-identidad" },
              { label: "Guión y Vídeo", href: "/servicios/guion-edicion-video" },
              { label: "Lanzamiento de Producto", href: "/soluciones/lanzamiento-de-producto" },
              { label: "Casos de Éxito", href: "/casos-de-exito" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-white/10 px-6 py-4 text-sm text-white/50 hover:text-white hover:border-white/30 transition-colors"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Preguntas sobre dirección creativa" />

      <CTASection
        title="¿Necesitas dirección creativa?"
        subtitle="Mándanos el brief. Lo leemos hoy y te proponemos un approach en menos de 48 horas."
        primaryCTA="Enviar el brief"
        secondaryCTA="Ver casos de creatividad"
        secondaryHref="/casos-de-exito"
      />
    </PageLayout>
  );
}
