import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Diseño de Identidad Corporativa | Johnny on the Spot",
  description:
    "Diseño de identidad corporativa estratégico en Barcelona. Naming, logo, sistema visual y aplicaciones para empresas con ambición. Petit Farm, Metaembalatges, Panoma.",
  alternates: { canonical: "https://www.johnnyonthespot.es/servicios/diseno-de-identidad" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Diseño de Identidad Corporativa",
  provider: { "@type": "Organization", name: "Johnny on the Spot" },
  description: "Diseño de identidad corporativa estratégico: naming, logo, sistema visual y aplicaciones.",
  areaServed: { "@type": "Place", name: "España" },
  serviceType: "Brand Identity Design",
};

const faqs = [
  {
    question: "¿Cuánto tarda un proyecto de identidad corporativa?",
    answer: "Un proyecto completo —desde el briefing hasta la entrega del manual— suele durar entre 6 y 12 semanas. Depende de la complejidad, el número de revisiones y si incluye naming o no. Lo que no hacemos es precipitar el proceso: una identidad mal construida cuesta mucho más corregirla después.",
  },
  {
    question: "¿Hacéis solo el logo o el sistema completo?",
    answer: "Trabajamos con sistemas completos. Un logo aislado sin sistema de identidad es una pieza incompleta. Dicho esto, si el cliente ya tiene sistema y solo necesita una actualización concreta, lo estudiamos.",
  },
  {
    question: "¿Podéis hacer el naming también?",
    answer: "Sí. Tenemos un proceso propio de naming estratégico que incluye generación de candidatos, validación lingüística y disponibilidad legal. Puedes contratarlo junto con la identidad o de forma independiente.",
  },
  {
    question: "¿Cómo es el proceso de aprobaciones?",
    answer: "Presentamos por fases: estrategia de marca, exploración de conceptos, desarrollo del seleccionado y sistema completo. Cada fase tiene sus rondas de feedback. El cliente sabe exactamente en qué punto está en todo momento.",
  },
];

export default function DisenoIdentidadPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Servicios", href: "/servicios" }, { label: "Diseño de Identidad Corporativa" }]} />
        </div>
      </div>
      <section className="pt-8 pb-20 lg:pb-28 px-6 lg:px-8" aria-labelledby="service-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Servicio</p>
              <h1 id="service-heading" className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-none">
                Diseño de Identidad Corporativa
              </h1>
            </div>
            <div>
              <p className="text-white/45 text-xl leading-relaxed">
                Una identidad no es solo un logo. Es el sistema visual que comunica quién eres antes de que abras la boca.
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
                La identidad que une todo lo demás
              </h2>
              <div className="space-y-5 text-white/45 text-lg leading-relaxed">
                <p>Construimos identidades corporativas sobre estrategia, no sobre intuición. Antes de hacer un trazado, entendemos el negocio, el mercado y el posicionamiento que la empresa quiere ocupar. La identidad es la conclusión visual de ese trabajo previo.</p>
                <p>El resultado no es solo un logo: es un sistema. Tipografía, paleta, iconografía, tono de voz, aplicaciones en todos los soportes. Un sistema coherente que cualquier proveedor puede aplicar y que la marca puede escalar sin perder consistencia.</p>
                <p>Hemos construido identidades para empresas industriales que querían comunicar como marcas de consumo, para startups que necesitaban credibilidad desde el día uno, y para marcas establecidas que querían modernizar su imagen sin perder su historia. Petit Farm, Metaembalatges y Panoma son algunos ejemplos reales.</p>
              </div>
            </div>
            <div>
              <h3 className="text-white/30 text-xs tracking-widest uppercase mb-6">Qué incluye</h3>
              <ul className="space-y-4" role="list">
                {["Estrategia de marca", "Naming (opcional)", "Diseño de logotipo", "Sistema tipográfico", "Paleta cromática", "Iconografía y elementos gráficos", "Manual de identidad", "Aplicaciones (papelería, digital, packaging)"].map((item) => (
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
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-12">Proyectos de identidad</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {[
              { title: "Identidad de marca nueva", desc: "Desde cero: nombre, logo, sistema visual y manual de uso." },
              { title: "Rebranding", desc: "Actualización estratégica de una identidad existente que ha quedado desfasada." },
              { title: "Submarcas y líneas de producto", desc: "Arquitectura de marca para familias de producto o servicios relacionados." },
              { title: "Identidad para eventos", desc: "Imagen específica para congresos, convenciones o eventos de marca." },
              { title: "Identidad digital y web", desc: "Sistema de identidad pensado para entornos digitales: UI, iconografía, motion." },
              { title: "Packaging y retail", desc: "Aplicación de identidad a envases, displays y materiales de punto de venta." },
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
          <p className="text-black/40 text-sm mb-4">Identidades corporativas diseñadas para:</p>
          <p className="text-black/30 text-lg tracking-wide">Petit Farm · Metaembalatges · Panoma · Novartis · Alcon · GFT · SAP</p>
        </div>
      </section>
      <section className="py-16 lg:py-20 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black tracking-tighter text-white mb-8">También puede interesarte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Naming", href: "/servicios/naming" },
              { label: "Copywriting", href: "/servicios/copywriting" },
              { label: "Identidad Corporativa y Web", href: "/soluciones/identidad-corporativa-web" },
              { label: "Caso Metaembalatges", href: "/casos/metaembalatges-branding" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="border border-white/10 px-6 py-4 text-sm text-white/50 hover:text-white hover:border-white/30 transition-colors">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} title="Preguntas sobre identidad corporativa" />
      <CTASection
        title="¿Tu identidad ya no te representa?"
        subtitle="Cuéntanos dónde estás y a dónde quieres llegar. El primer análisis es gratis."
        primaryCTA="Solicitar análisis"
        secondaryCTA="Ver casos de branding"
        secondaryHref="/casos/metaembalatges-branding"
      />
    </PageLayout>
  );
}
