import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Activación de Marca y Street Marketing | Johnny on the Spot",
  description:
    "Activaciones de marca en punto de venta, street marketing y experiencias de marca. Coca-Cola, Haribo, Glenfiddich, IKEA Marruecos. Barcelona y Europa.",
  alternates: { canonical: "https://www.johnnyonthespot.es/servicios/activacion-de-marca" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Activación de Marca",
  provider: { "@type": "Organization", name: "Johnny on the Spot" },
  description: "Activaciones de marca en punto de venta, street marketing y experiencias que conectan con el consumidor.",
  areaServed: { "@type": "Place", name: "Europa" },
  serviceType: "Brand Activation",
};

const faqs = [
  {
    question: "¿Gestionáis los permisos para acciones en espacio público?",
    answer: "Sí. La gestión de permisos municipales, licencias y seguros para acciones en espacios públicos forma parte del servicio. Es uno de los puntos donde los imprevistos cuestan más caro si no están cubiertos con anticipación suficiente.",
  },
  {
    question: "¿Podéis activar en varios mercados simultáneamente?",
    answer: "Sí. Tenemos experiencia en activaciones multi-mercado: misma mecánica, ejecución local adaptada. Hemos coordinado acciones simultáneas en España, Andorra y Colombia para Coca-Cola, y activaciones en Bélgica para Perrier.",
  },
  {
    question: "¿Podéis hacer activaciones con app o tecnología?",
    answer: "Sí. La campaña de Haribo integró una app gamificada en el punto de venta de grandes superficies. Podemos diseñar la mecánica digital y coordinar su desarrollo técnico con nuestros partners de tecnología.",
  },
  {
    question: "¿Cómo se mide el impacto de una activación?",
    answer: "Depende del objetivo. Podemos medir impactos directos (personas que participaron), cobertura en redes (UGC generado), incremento de ventas en el período de activación, o métricas de marca. Lo definimos antes de la activación, no después, para poder medir con criterio.",
  },
];

export default function ActivacionMarcaPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Servicios", href: "/servicios" }, { label: "Activación de Marca" }]} />
        </div>
      </div>
      <section className="pt-8 pb-20 lg:pb-28 px-6 lg:px-8" aria-labelledby="service-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Servicio</p>
              <h1 id="service-heading" className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-none">
                Activación de Marca
              </h1>
            </div>
            <div>
              <p className="text-white/45 text-xl leading-relaxed">
                Las marcas se construyen en los medios. Se ganan en la calle. Donde la estrategia deja de ser un documento y se convierte en una experiencia real.
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
                Donde la marca toca al consumidor
              </h2>
              <div className="space-y-5 text-white/45 text-lg leading-relaxed">
                <p>La activación de marca es el momento en que la estrategia abandona el PowerPoint y se convierte en una experiencia real. Una acción en la calle, un evento en el punto de venta, una presencia en un festival: lo que el consumidor vive, siente y recuerda.</p>
                <p>Hemos diseñado y producido activaciones para Coca-Cola en Grandvalira y Medellín, para Haribo en grandes superficies de España con app gamificada, para Glenfiddich en afterworks en cuatro ciudades españolas, para IKEA Marruecos con street marketing y catálogo, y para Perrier en Bélgica. Cada activación con su concepto propio, su lógica de engagement y su medición de impacto.</p>
                <p>Lo que diferencia una buena activación de una mala no es el presupuesto: es la coherencia entre el concepto de marca, la mecánica de la activación y el perfil del consumidor al que va dirigida. Esa coherencia es lo que nosotros garantizamos en cada proyecto.</p>
              </div>
            </div>
            <div>
              <h3 className="text-white/30 text-xs tracking-widest uppercase mb-6">Qué incluye</h3>
              <ul className="space-y-4" role="list">
                {["Concepto de activación", "Diseño de mecánica y experiencia", "Producción de materiales POS", "Formación de equipo promotor", "Coordinación de permisos y logística", "Dirección in situ", "Fotografía y vídeo de cobertura", "Informe de resultados"].map((item) => (
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
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-12">Tipos de activación</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {[
              { title: "Activaciones en punto de venta", desc: "Experiencias en tienda, supermercado y farmacia para conectar marca con consumidor." },
              { title: "Street marketing", desc: "Acciones en espacio público con alto impacto visual y capacidad de generar conversación." },
              { title: "Eventos en retail", desc: "Acciones especiales dentro del punto de venta: degustaciones, demostraciones y concursos." },
              { title: "Presencia en festivales", desc: "Activaciones en festivales de música, deporte y cultura con experiencia de marca." },
              { title: "Sampling y degustaciones", desc: "Campañas de prueba de producto con equipo promotor formado y materiales de activación." },
              { title: "Activaciones gamificadas", desc: "Mecánicas de juego y app integradas en el punto de venta para aumentar el engagement." },
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
          <p className="text-black/40 text-sm mb-4">Activaciones producidas para:</p>
          <p className="text-black/30 text-lg tracking-wide">Coca-Cola · Haribo · Glenfiddich · IKEA Marruecos · Perrier · Avianca</p>
        </div>
      </section>
      <section className="py-16 lg:py-20 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black tracking-tighter text-white mb-8">También puede interesarte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Eventos Corporativos", href: "/servicios/eventos-corporativos" },
              { label: "Creación de Contenido", href: "/servicios/creacion-de-contenido" },
              { label: "Activación en POS", href: "/soluciones/activacion-punto-de-venta" },
              { label: "Caso Coca-Cola", href: "/casos/coca-cola-grandvalira" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="border border-white/10 px-6 py-4 text-sm text-white/50 hover:text-white hover:border-white/30 transition-colors">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} title="Preguntas sobre activación de marca" />
      <CTASection
        title="¿Quieres activar tu marca donde está tu consumidor?"
        subtitle="Cuéntanos el producto, el target y el contexto. Diseñamos la mecánica."
        primaryCTA="Hablemos"
        secondaryCTA="Ver casos de activación"
        secondaryHref="/casos/coca-cola-grandvalira"
      />
    </PageLayout>
  );
}
