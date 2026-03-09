import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Creación de Contenido para Marcas | Johnny on the Spot",
  description:
    "Contenido editorial, digital y social que informa, convence y convierte. Estrategia de contenidos y producción integradas para marcas B2B y B2C. Barcelona.",
  alternates: { canonical: "https://www.johnnyonthespot.es/servicios/creacion-de-contenido" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Creación de Contenido",
  provider: { "@type": "Organization", name: "Johnny on the Spot" },
  description: "Estrategia y creación de contenido para marcas B2B y B2C en todos los formatos y canales.",
  areaServed: { "@type": "Place", name: "España" },
  serviceType: "Content Creation",
};

const faqs = [
  {
    question: "¿Hacéis estrategia de contenidos o solo producción?",
    answer: "Ambas cosas. Y creemos que hacerlas separadas es un error frecuente. La estrategia sin producción es un documento. La producción sin estrategia es ruido. El valor real está en la integración de las dos.",
  },
  {
    question: "¿El contenido que creáis está optimizado para SEO?",
    answer: "Sí, cuando se solicita. Integramos las palabras clave de forma natural en los textos, cuidamos la estructura de encabezados y nos aseguramos de que el contenido responda a la intención de búsqueda del usuario. El contenido bien escrito y bien estructurado es la base del SEO orgánico.",
  },
  {
    question: "¿Qué diferencia hay entre contenido B2B y B2C?",
    answer: "En B2B, el contenido informa y convence a un decisor con tiempo limitado y criterio técnico. Los ciclos de compra son más largos, el tono más sobrio y el argumento más racional. En B2C, la emoción y la identificación juegan un papel mayor. Trabajamos bien en los dos contextos.",
  },
  {
    question: "¿Cómo medís el impacto del contenido?",
    answer: "Depende del objetivo: tráfico orgánico, tiempo en página, leads generados desde contenido, engagement en redes, descargas de materiales. Antes de producir, definimos qué métricas importan. Así podemos saber si el contenido está funcionando.",
  },
];

export default function CreacionContenidoPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Servicios", href: "/servicios" }, { label: "Creación de Contenido" }]} />
        </div>
      </div>
      <section className="pt-8 pb-20 lg:pb-28 px-6 lg:px-8" aria-labelledby="service-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Servicio</p>
              <h1 id="service-heading" className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-none">
                Creación de Contenido
              </h1>
            </div>
            <div>
              <p className="text-white/45 text-xl leading-relaxed">
                El contenido sin estrategia es ruido. El contenido sin producción es desperdicio. Lo integramos en un sistema que funciona a largo plazo.
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
                Contenido con propósito
              </h2>
              <div className="space-y-5 text-white/45 text-lg leading-relaxed">
                <p>Producir contenido no es difícil. Producir contenido que genere tráfico, construya autoridad y convierta visitantes en leads es otra historia. La diferencia está en combinar criterio estratégico con ejecución de calidad desde el primer borrador.</p>
                <p>Trabajamos tanto para marcas de consumo que necesitan contenido social y editorial, como para empresas B2B con ciclos de venta largos que necesitan guías, casos de uso y artículos de liderazgo de pensamiento que eduquen al decisor durante meses antes de que levante el teléfono.</p>
                <p>Nuestro proceso integra análisis de palabras clave, arquitectura de contenidos, producción editorial y revisión de calidad. El resultado es contenido que posiciona en buscadores, que la audiencia comparte, y que el equipo de ventas puede usar como herramienta de conversión.</p>
              </div>
            </div>
            <div>
              <h3 className="text-white/30 text-xs tracking-widest uppercase mb-6">Qué incluye</h3>
              <ul className="space-y-4" role="list">
                {["Estrategia de contenidos", "Calendarios editoriales", "Artículos y posts de blog", "Contenido para redes sociales", "Newsletters y email", "Guías y whitepapers", "Casos de uso", "Microsites de contenido"].map((item) => (
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
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-12">Qué producimos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {[
              { title: "Blogs corporativos", desc: "Artículos de autoridad que posicionan en buscadores y educan al potencial cliente." },
              { title: "Redes sociales", desc: "Contenido nativo por plataforma: texto, imagen, vídeo corto y formatos interactivos." },
              { title: "Newsletters", desc: "Comunicaciones regulares que mantienen el contacto con la base de suscriptores." },
              { title: "Vídeos de contenido", desc: "Tutoriales, explicativos, entrevistas y documentales de marca para plataformas digitales." },
              { title: "Guías y descargables", desc: "Lead magnets, informes, whitepapers y recursos que generan registros." },
              { title: "Microsites de contenido", desc: "Hubs temáticos que agrupan contenido relacionado y mejoran la autoridad SEO." },
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
          <p className="text-black/40 text-sm mb-4">Contenido producido para:</p>
          <p className="text-black/30 text-lg tracking-wide">SAP · Alcon · Novartis · GFT · Petit Farm · Metaembalatges · Walk Me</p>
        </div>
      </section>
      <section className="py-16 lg:py-20 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black tracking-tighter text-white mb-8">También puede interesarte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Copywriting", href: "/servicios/copywriting" },
              { label: "Marketing Digital", href: "/servicios/marketing-digital" },
              { label: "Blog de la agencia", href: "/blog" },
              { label: "Contacto", href: "/contacto" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="border border-white/10 px-6 py-4 text-sm text-white/50 hover:text-white hover:border-white/30 transition-colors">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} title="Preguntas sobre creación de contenido" />
      <CTASection
        title="¿Necesitas contenido que genere resultados?"
        subtitle="Cuéntanos el objetivo y el canal. Diseñamos la estrategia y producimos el contenido."
        primaryCTA="Hablemos"
        secondaryCTA="Ver blog"
        secondaryHref="/blog"
      />
    </PageLayout>
  );
}
