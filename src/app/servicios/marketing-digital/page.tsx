import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Marketing Digital Integral | Johnny on the Spot: Barcelona",
  description:
    "Marketing digital integrado en la estrategia de comunicación. SEO, paid media, redes sociales y automatizaciones para marcas B2B y B2C que quieren resultados.",
  alternates: { canonical: "https://www.johnnyonthespot.es/servicios/marketing-digital" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Marketing Digital",
  provider: { "@type": "Organization", name: "Johnny on the Spot" },
  description: "Marketing digital integrado en la estrategia de comunicación: SEO, paid media, social y automatizaciones.",
  areaServed: { "@type": "Place", name: "España" },
  serviceType: "Digital Marketing",
};

const faqs = [
  {
    question: "¿El marketing digital que hacéis está integrado con el offline?",
    answer: "Sí, y eso es precisamente lo que nos diferencia de las agencias puramente digitales. El marketing digital que hacemos está alineado con la estrategia de comunicación global de la marca, incluidas las acciones offline. Un evento, una campaña de radio y una campaña de performance comparten el mismo mensaje y el mismo objetivo.",
  },
  {
    question: "¿Hacéis gestión de redes sociales?",
    answer: "Sí. Creamos calendarios editoriales, producimos el contenido y gestionamos la comunidad. También hacemos paid social para ampliar el alcance de las acciones orgánicas.",
  },
  {
    question: "¿Hacéis SEO?",
    answer: "Sí. SEO técnico, SEO de contenido y link building. Para proyectos que requieren posicionamiento orgánico como canal principal, diseñamos una estrategia específica con objetivos de tráfico, keywords prioritarias y plan de contenidos alineado.",
  },
  {
    question: "¿Podéis encargáros solo de una parte, como el paid media?",
    answer: "Sí. Podemos trabajar solo la parte digital que el cliente necesite, aunque siempre recomendamos revisar la estrategia global para asegurarnos de que cada canal trabaja en la misma dirección.",
  },
];

export default function MarketingDigitalPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Servicios", href: "/servicios" }, { label: "Marketing Digital" }]} />
        </div>
      </div>
      <section className="pt-8 pb-20 lg:pb-28 px-6 lg:px-8" aria-labelledby="service-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Servicio</p>
              <h1 id="service-heading" className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-none">
                Marketing Digital
              </h1>
            </div>
            <div>
              <p className="text-white/45 text-xl leading-relaxed">
                Performance, SEO, paid media, social y automatizaciones integradas en la estrategia global de comunicación. No canales sueltos: un sistema.
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
                Digital con criterio de marca
              </h2>
              <div className="space-y-5 text-white/45 text-lg leading-relaxed">
                <p>El marketing digital que funciona no es el que tiene el mejor CPC o el CTR más alto en aislado: es el que forma parte de una estrategia de comunicación coherente y que trabaja en la misma dirección que el resto de acciones de la marca.</p>
                <p>En Johnny on the Spot, el digital no es un departamento separado. Es una de las dimensiones que cubrimos dentro de la comunicación integral de la marca. Eso significa que el contenido que posiciona en SEO es el mismo que la marca distribuye en sus redes. Que la campaña de paid media refuerza el mensaje del evento que acabamos de producir. Que la automatización de email nutre a los leads que el equipo de ventas va a llamar.</p>
                <p>El resultado es una estrategia digital que no compite con el offline, sino que lo amplifica. Y un cliente que tiene un solo interlocutor para toda su comunicación, no seis agencias hablando de cosas diferentes.</p>
              </div>
            </div>
            <div>
              <h3 className="text-white/30 text-xs tracking-widest uppercase mb-6">Qué incluye</h3>
              <ul className="space-y-4" role="list">
                {["Estrategia digital", "SEO técnico y de contenido", "Paid media (Google, Meta, LinkedIn)", "Social media management", "Email marketing y automatización", "Analítica y reporting", "CRO y optimización de conversión", "Integración con CRM"].map((item) => (
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
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-12">Qué hacemos en digital</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {[
              { title: "SEO y posicionamiento", desc: "Auditoría técnica, estrategia de keywords, contenido optimizado y link building." },
              { title: "Paid media", desc: "Google Ads, Meta Ads, LinkedIn Ads: campañas orientadas a conversión con optimización continua." },
              { title: "Social media", desc: "Gestión editorial y de comunidad en las redes relevantes para la marca." },
              { title: "Email y automatización", desc: "Secuencias de nurturing, newsletters y automatizaciones integradas con CRM." },
              { title: "Analítica avanzada", desc: "Configuración de tracking, informes de resultados y dashboards de negocio." },
              { title: "Webs y landing pages", desc: "Diseño y desarrollo de sitios web y landing pages optimizadas para conversión." },
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
          <p className="text-black/40 text-sm mb-4">Marketing digital integrado para:</p>
          <p className="text-black/30 text-lg tracking-wide">Alcon · Novartis · SAP · GFT · Petit Farm · Metaembalatges · Coca-Cola</p>
        </div>
      </section>
      <section className="py-16 lg:py-20 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black tracking-tighter text-white mb-8">También puede interesarte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Estrategia de Comunicación", href: "/servicios/estrategia-de-comunicacion" },
              { label: "Creación de Contenido", href: "/servicios/creacion-de-contenido" },
              { label: "IA y Automatizaciones", href: "/servicios/ia-y-automatizaciones" },
              { label: "Contacto", href: "/contacto" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="border border-white/10 px-6 py-4 text-sm text-white/50 hover:text-white hover:border-white/30 transition-colors">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} title="Preguntas sobre marketing digital" />
      <CTASection
        title="¿Tu digital trabaja en la misma dirección que el resto de tu comunicación?"
        subtitle="Si la respuesta no es un sí rotundo, hay trabajo que hacer. Cuéntanoslo."
        primaryCTA="Hablemos"
        secondaryCTA="Ver blog"
        secondaryHref="/blog"
      />
    </PageLayout>
  );
}
