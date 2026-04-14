import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Naming Estratégico para Marcas | Johnny on the Spot",
  description:
    "Creación de nombres de marca estratégicos. Proceso completo con validación lingüística y disponibilidad legal. Para empresas, productos y servicios.",
  alternates: { canonical: "https://www.johnnyonthespot.es/servicios/naming" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Naming Estratégico",
  provider: { "@type": "Organization", name: "Johnny on the Spot" },
  description: "Naming estratégico para marcas: proceso completo con validación lingüística y disponibilidad legal.",
  areaServed: { "@type": "Place", name: "España" },
  serviceType: "Brand Naming",
};

const faqs = [
  {
    question: "¿Incluís el registro de la marca?",
    answer: "No somos despacho de marcas ni abogados, pero coordinamos el proceso con los especialistas legales del cliente o recomendamos un despacho de confianza. Lo que sí incluimos es la verificación previa en bases de datos de OEPM y EUIPO.",
  },
  {
    question: "¿Podéis trabajar en naming en inglés o en otros idiomas?",
    answer: "Sí. Tenemos experiencia en naming para mercados anglosajones, latinoamericanos y europeos. Siempre verificamos la neutralidad fonética y semántica en los idiomas relevantes para el mercado objetivo.",
  },
  {
    question: "¿Cuántos nombres presentáis?",
    answer: "Presentamos entre 5 y 10 finalistas, no más. Preferimos calidad a cantidad. Cada candidato viene con su argumento estratégico: por qué ese nombre, qué comunica y por qué funciona para el posicionamiento definido.",
  },
  {
    question: "¿Qué pasa si no nos convence ninguno?",
    answer: "Incluimos una ronda de ajuste. Si después de esa ronda el cliente necesita una orientación completamente distinta, lo revisamos con el briefing actualizado. El proceso es iterativo, aunque con límites razonables para no eternizar la decisión.",
  },
];

export default function NamingPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Servicios", href: "/servicios" }, { label: "Naming" }]} />
        </div>
      </div>
      <section className="pt-8 pb-20 lg:pb-28 px-6 lg:px-8" aria-labelledby="service-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Servicio</p>
              <h1 id="service-heading" className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-none">
                Naming
              </h1>
            </div>
            <div>
              <p className="text-white/45 text-xl leading-relaxed">
                El nombre de una marca es la primera y más permanente decisión de comunicación que tomará una empresa. No es momento para la improvisación.
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
                Un nombre que trabaja para ti
              </h2>
              <div className="space-y-5 text-white/45 text-lg leading-relaxed">
                <p>El naming no es una lluvia de ideas. Es un proceso estructurado que parte de la estrategia de marca, analiza el mercado y la competencia, define el posicionamiento lingüístico y genera candidatos que cumplen criterios objetivos: memorabilidad, pronunciabilidad, disponibilidad legal y adaptabilidad internacional.</p>
                <p>Trabajamos con un proceso en cuatro fases: briefing estratégico, generación de candidatos, filtrado y validación legal, registral, dominio, y presentación razonada. El cliente no recibe una lista de cincuenta nombres aleatorios. Recibe entre cinco y diez candidatos finalistas, cada uno con su argumento estratégico.</p>
                <p>Hemos desarrollado nombres para empresas industriales, startups tecnológicas, líneas de producto farmacéutico y marcas de consumo en múltiples mercados. En todos los casos, el nombre resultante ha superado el escrutinio jurídico y ha funcionado comercialmente.</p>
              </div>
            </div>
            <div>
              <h3 className="text-white/30 text-xs tracking-widest uppercase mb-6">Qué incluye</h3>
              <ul className="space-y-4" role="list">
                {["Briefing estratégico", "Análisis de competencia lingüística", "Generación de candidatos", "Filtrado por criterios objetivos", "Validación legal básica (OEPM/EUIPO)", "Comprobación de dominio y redes", "Presentación razonada de finalistas", "Guía de uso fonético y gráfico"].map((item) => (
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
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-12">Proyectos de naming</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {[
              { title: "Nombre de empresa", desc: "Naming para nuevas compañías que necesitan un nombre memorable y registrable." },
              { title: "Nombre de producto", desc: "Nombres para líneas de producto, gamas y referencias específicas." },
              { title: "Nombre de servicio o plataforma", desc: "Naming para servicios digitales, aplicaciones y plataformas SaaS." },
              { title: "Nombre de evento o convención", desc: "Nombres para convenciones corporativas, congresos y eventos de marca." },
              { title: "Nombre de línea de negocio", desc: "Arquitectura de naming para submarcas y líneas de negocio independientes." },
              { title: "Naming internacional", desc: "Nombres que funcionan en múltiples mercados e idiomas simultáneamente." },
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
          <p className="text-black/40 text-sm mb-4">Naming desarrollado para:</p>
          <p className="text-black/30 text-lg tracking-wide">Petit Farm · Panoma · Metaembalatges · STINGbye · Go Green</p>
        </div>
      </section>
      <section className="py-16 lg:py-20 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black tracking-tighter text-white mb-8">También puede interesarte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Diseño de Identidad", href: "/servicios/diseno-de-identidad" },
              { label: "Copywriting", href: "/servicios/copywriting" },
              { label: "Identidad Corporativa y Web", href: "/soluciones/identidad-corporativa-web" },
              { label: "Contacto", href: "/contacto" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="border border-white/10 px-6 py-4 text-sm text-white/50 hover:text-white hover:border-white/30 transition-colors">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} title="Preguntas sobre naming" />
      <CTASection
        title="¿Buscas nombre para tu marca o producto?"
        subtitle="Empieza por el briefing. Nosotros hacemos el resto."
        primaryCTA="Enviar el brief"
      />
    </PageLayout>
  );
}
