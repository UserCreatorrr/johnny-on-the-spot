import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Dirección de Arte | Johnny on the Spot: Barcelona",
  description:
    "Dirección de arte para campañas, eventos y producción audiovisual. Decisiones visuales que comunican con precisión. Equipo sénior en Barcelona.",
  alternates: { canonical: "https://www.johnnyonthespot.es/servicios/direccion-de-arte" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dirección de Arte",
  provider: { "@type": "Organization", name: "Johnny on the Spot" },
  description: "Dirección de arte para campañas, eventos y producción audiovisual en Barcelona.",
  areaServed: { "@type": "Place", name: "España" },
  serviceType: "Dirección de Arte",
};

const faqs = [
  {
    question: "¿Cuál es la diferencia entre dirección de arte y dirección creativa?",
    answer: "La dirección creativa define el concepto global: qué dice la campaña, cuál es la gran idea. La dirección de arte se ocupa de cómo se ve esa idea: qué colores, qué tipografía, qué composición, qué referentes visuales. Son roles complementarios que en Johnny on the Spot suelen ir de la mano.",
  },
  {
    question: "¿Cómo es vuestro proceso para un shooting fotográfico?",
    answer: "Empezamos con un moodboard que alinea la visión con el cliente. Definimos la selección de fotógrafo, estilismo, localizaciones y equipo técnico. Dirigimos el rodaje in situ y supervisamos la postproducción. El cliente recibe las imágenes finales listas para usar en todos los formatos.",
  },
  {
    question: "¿Podéis trabajar con brand guidelines ya existentes?",
    answer: "Sí, y es lo más habitual. Trabajamos dentro del sistema visual de la marca, aplicando las guías con criterio y coherencia. Si hay zonas grises o el manual necesita ser actualizado, también lo indicamos.",
  },
  {
    question: "¿Hacéis proyectos de dirección de arte de forma remota?",
    answer: "Sí. La dirección de arte remota es perfectamente viable para proyectos de diseño gráfico, identidad y digital. Para shootings y producciones físicas, siempre preferimos presencia in situ, aunque podemos supervisar remotamente con el equipo adecuado.",
  },
];

export default function DireccionDeArtePage() {
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
              { label: "Dirección de Arte" },
            ]}
          />
        </div>
      </div>

      <section className="pt-8 pb-20 lg:pb-28 px-6 lg:px-8" aria-labelledby="service-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Servicio</p>
              <h1 id="service-heading" className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-none">
                Dirección de Arte
              </h1>
            </div>
            <div>
              <p className="text-white/45 text-xl leading-relaxed">
                Coherencia visual entre todos los elementos de comunicación. Fotografía, vídeo, gráfica, espacio: todo bajo la misma visión artística.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-8">
                Las decisiones visuales son decisiones de negocio
              </h2>
              <div className="space-y-5 text-white/45 text-lg leading-relaxed">
                <p>
                  La dirección de arte no es hacer las cosas bonitas. Es hacer que cada elemento visual comunique exactamente lo que la marca necesita comunicar. Un color, una composición, una tipografía, una iluminación: cada decisión tiene un argumento estratégico detrás.
                </p>
                <p>
                  En Johnny on the Spot, la dirección de arte se aplica a shootings fotográficos para Carolina Herrera, producciones audiovisuales para Alcon, espacios de evento para Chopard y campañas gráficas para Novartis. La exigencia visual es la misma en todos los formatos.
                </p>
                <p>
                  Trabajamos con una red de fotógrafos, realizadores, estilistas y diseñadores de primer nivel que activamos según el tipo de proyecto. El director de arte de Johnny on the Spot lidera a ese equipo, garantizando que el resultado sea coherente con la marca y superior a las expectativas del cliente.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-white/30 text-xs tracking-widest uppercase mb-6">Qué incluye</h3>
              <ul className="space-y-4" role="list">
                {[
                  "Concepto visual y moodboard",
                  "Selección de equipo fotográfico/realizador",
                  "Casting y selección de talent",
                  "Dirección in situ del shooting",
                  "Supervisión de postproducción",
                  "Brand guidelines visuales",
                  "Art direction para digital",
                  "Adaptación a múltiples formatos",
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

      <section className="py-16 lg:py-24 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-12">
            Proyectos que dirigimos visualmente
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {[
              { title: "Fotografía de campaña", desc: "Shooting de producto, lifestyle y retrato con dirección artística propia." },
              { title: "Producción audiovisual", desc: "Vídeos corporativos, de producto y campañas con identidad visual definida." },
              { title: "Eventos y espacios", desc: "Diseño visual y art direction de espacios para eventos y activaciones." },
              { title: "Identidades visuales", desc: "Sistema gráfico completo: paleta, tipografía, iconografía y aplicaciones." },
              { title: "Contenido digital", desc: "Imágenes y piezas para redes, web y campañas digitales." },
              { title: "Publicaciones y editorial", desc: "Catálogos, revistas de marca, informes anuales y materiales impresos." },
            ].map((item) => (
              <div key={item.title} className="bg-black p-8">
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-black/40 text-sm mb-4">Hemos dirigido artísticamente proyectos para:</p>
          <p className="text-black/30 text-lg tracking-wide">
            Alcon · Novartis · Carolina Herrera · Chopard · Puig · Glenfiddich · Meliá · SAP · GFT
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black tracking-tighter text-white mb-8">También puede interesarte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Guión y Vídeo", href: "/servicios/guion-edicion-video" },
              { label: "Producción Gráfica", href: "/servicios/produccion-grafica" },
              { label: "Lanzamiento de Producto", href: "/soluciones/lanzamiento-de-producto" },
              { label: "Casos de Éxito", href: "/casos-de-exito" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="border border-white/10 px-6 py-4 text-sm text-white/50 hover:text-white hover:border-white/30 transition-colors">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Preguntas sobre dirección de arte" />

      <CTASection
        title="¿Necesitas dirección de arte?"
        subtitle="Cuéntanos el proyecto y la visión que tienes en mente. Lo analizamos y te proponemos el enfoque más adecuado."
        primaryCTA="Hablemos"
      />
    </PageLayout>
  );
}
