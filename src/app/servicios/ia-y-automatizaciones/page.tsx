import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "IA y Automatizaciones para Empresas | Johnny on the Spot",
  description:
    "Inteligencia artificial y automatización de procesos para agencias y empresas. Workflows inteligentes, integración de herramientas y eficiencia operativa real.",
  alternates: { canonical: "https://www.johnnyonthespot.es/servicios/ia-y-automatizaciones" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "IA y Automatizaciones",
  provider: { "@type": "Organization", name: "Johnny on the Spot" },
  description: "Automatización de procesos e integración de inteligencia artificial para empresas y agencias.",
  areaServed: { "@type": "Place", name: "España" },
  serviceType: "AI and Automation",
};

const faqs = [
  {
    question: "¿Qué tipo de procesos se pueden automatizar?",
    answer: "La mayoría de los procesos repetitivos y basados en reglas: reporting, gestión de leads, comunicaciones internas, generación de contenido, clasificación de datos, gestión de proyectos, facturación. El primer paso es siempre mapear los procesos actuales e identificar dónde la automatización genera más valor.",
  },
  {
    question: "¿Necesitamos tener conocimientos técnicos para implementar automatizaciones?",
    answer: "No. Nuestro enfoque está diseñado para que el equipo del cliente pueda operar y mantener las automatizaciones sin necesitar un perfil técnico. Usamos herramientas no-code y low-code siempre que es posible, y formamos al equipo para que sea autónomo.",
  },
  {
    question: "¿Cómo se integra la IA con los sistemas ya existentes?",
    answer: "Evaluamos los sistemas actuales CRM, ERP, herramientas de marketing, bases de datos y diseñamos una arquitectura de integración que los conecte sin requerir migraciones costosas. La integración progresiva es siempre preferible a una sustitución completa.",
  },
  {
    question: "¿Qué no delegar nunca a una IA?",
    answer: "La toma de decisiones estratégica, el criterio creativo, la relación con el cliente y la supervisión de resultados. La IA amplifica la capacidad humana; no la sustituye donde el juicio y la experiencia son el valor diferencial. Es una regla que aplicamos también en nuestra propia agencia.",
  },
];

export default function IAYAutomatizacionesPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Servicios", href: "/servicios" }, { label: "IA y Automatizaciones" }]} />
        </div>
      </div>
      <section className="pt-8 pb-20 lg:pb-28 px-6 lg:px-8" aria-labelledby="service-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Servicio</p>
              <h1 id="service-heading" className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-none">
                IA y Automatizaciones
              </h1>
            </div>
            <div>
              <p className="text-white/45 text-xl leading-relaxed">
                Procesos inteligentes para empresas que quieren hacer más con los mismos recursos. Sin hype. Con implementación real y resultados medibles.
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
                IA aplicada. No IA declarada.
              </h2>
              <div className="space-y-5 text-white/45 text-lg leading-relaxed">
                <p>El mercado está lleno de empresas que dicen usar IA. Pocas tienen procesos realmente automatizados que liberen tiempo, reduzcan errores y generen datos útiles para tomar mejores decisiones. La diferencia entre las que lo dicen y las que lo hacen está en la implementación.</p>
                <p>En Johnny on the Spot llevamos la IA a los procesos reales de las empresas: automatización de workflows de marketing, generación asistida de contenido, integración de herramientas mediante APIs, dashboards de datos en tiempo real, y asistentes internos entrenados con el conocimiento de la empresa.</p>
                <p>Nuestro enfoque es pragmático: empezamos por los procesos que generan más fricción, diseñamos la automatización más sencilla que solucione el problema, la implementamos, la medimos y luego escalamos. Sin soluciones megalómanas que nunca llegan a producción.</p>
              </div>
            </div>
            <div>
              <h3 className="text-white/30 text-xs tracking-widest uppercase mb-6">Qué incluye</h3>
              <ul className="space-y-4" role="list">
                {["Auditoría de procesos actuales", "Diseño de workflows automatizados", "Integración de herramientas (API)", "Implementación de IA generativa", "Automatización de marketing", "Dashboards y reporting automático", "Formación del equipo", "Mantenimiento y optimización"].map((item) => (
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
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-12">Qué automatizamos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {[
              { title: "Marketing y ventas", desc: "Lead nurturing, CRM automatizado, email secuencias y scoring de leads." },
              { title: "Generación de contenido", desc: "Asistentes de IA para briefings, copies, resúmenes y primeros borradores." },
              { title: "Reporting y analítica", desc: "Dashboards automáticos que consolidan datos de múltiples fuentes en tiempo real." },
              { title: "Gestión de proyectos", desc: "Automatización de flujos de trabajo internos: asignaciones, alertas y seguimiento." },
              { title: "Atención al cliente", desc: "Chatbots y asistentes entrenados con el conocimiento de producto de la empresa." },
              { title: "Integración de herramientas", desc: "Conexión entre CRM, ERP, herramientas de marketing y plataformas digitales." },
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
          <p className="text-black/40 text-sm mb-4">Automatizaciones implementadas para empresas en sectores:</p>
          <p className="text-black/30 text-lg tracking-wide">Agencias de comunicación · Empresas B2B · Startups · Sector farmacéutico · Retail y distribución</p>
        </div>
      </section>
      <section className="py-16 lg:py-20 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black tracking-tighter text-white mb-8">También puede interesarte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Marketing Digital", href: "/servicios/marketing-digital" },
              { label: "Estrategia de Comunicación", href: "/servicios/estrategia-de-comunicacion" },
              { label: "Artículo: IA en comunicación", href: "/blog/ia-en-comunicacion-corporativa" },
              { label: "Contacto", href: "/contacto" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="border border-white/10 px-6 py-4 text-sm text-white/50 hover:text-white hover:border-white/30 transition-colors">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} title="Preguntas sobre IA y automatizaciones" />
      <CTASection
        title="¿Qué proceso de tu empresa podría funcionar solo?"
        subtitle="Cuéntanoslo. Hacemos una auditoría inicial gratuita para identificar las oportunidades de automatización más rentables."
        primaryCTA="Solicitar auditoría"
        secondaryCTA="Ver artículo sobre IA"
        secondaryHref="/blog/ia-en-comunicacion-corporativa"
      />
    </PageLayout>
  );
}
