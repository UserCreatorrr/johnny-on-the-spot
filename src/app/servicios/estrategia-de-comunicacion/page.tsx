import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Estrategia de Comunicación para Empresas | Johnny on the Spot",
  description:
    "Estrategia de comunicación integral para empresas. Análisis, posicionamiento, plan de comunicación y KPIs. La base para que cualquier acción funcione.",
  alternates: { canonical: "https://www.johnnyonthespot.es/servicios/estrategia-de-comunicacion" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Estrategia de Comunicación",
  provider: { "@type": "Organization", name: "Johnny on the Spot" },
  description: "Estrategia de comunicación integral para empresas: análisis, posicionamiento y plan de acción.",
  areaServed: { "@type": "Place", name: "España" },
  serviceType: "Communication Strategy",
};

const faqs = [
  {
    question: "¿La estrategia incluye la ejecución?",
    answer: "Puede incluirla o no. Muchos clientes nos contratan solo para la estrategia y la ejecutan internamente. Otros prefieren que nos quedemos a producirla. Lo hablamos en el briefing inicial y ajustamos el alcance del proyecto.",
  },
  {
    question: "¿Cuánto tarda un proyecto de estrategia?",
    answer: "Entre 4 y 8 semanas para un plan de comunicación completo. Depende de la profundidad del análisis y la disponibilidad del equipo del cliente para las sesiones de trabajo. No hay atajos reales en este proceso: un diagnóstico hecho deprisa produce conclusiones equivocadas.",
  },
  {
    question: "¿Trabajáis con empresas que ya tienen departamento de marketing?",
    answer: "Sí, y es habitual. Actuamos como consultores o directores de comunicación externos que complementan al equipo interno con criterio sénior y visión exterior. Muchas veces la limitación del equipo interno no es la capacidad, sino la falta de distancia para ver la propia marca.",
  },
  {
    question: "¿Podéis hacer solo el posicionamiento?",
    answer: "Sí. Si la empresa ya tiene un plan pero necesita clarificar su propuesta de valor o su diferenciación, podemos trabajar solo esa parte. El posicionamiento es la pieza que más suele estar indefinida y la que más impacta en todo lo demás.",
  },
];

export default function EstrategiaPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Servicios", href: "/servicios" }, { label: "Estrategia de Comunicación" }]} />
        </div>
      </div>
      <section className="pt-8 pb-20 lg:pb-28 px-6 lg:px-8" aria-labelledby="service-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Servicio</p>
              <h1 id="service-heading" className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-none">
                Estrategia de Comunicación
              </h1>
            </div>
            <div>
              <p className="text-white/45 text-xl leading-relaxed">
                Sin estrategia, la comunicación es gasto. Con ella, es inversión con dirección, métricas y sentido.
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
                Comunicar con un porqué
              </h2>
              <div className="space-y-5 text-white/45 text-lg leading-relaxed">
                <p>La mayoría de las empresas comunican de forma reactiva: cuando tienen algo que decir, lo dicen; cuando necesitan vender, hacen publicidad. La comunicación estratégica es otra cosa: define qué quiere ser percibida la empresa, cómo llega a esa percepción y qué acciones concretas la construyen en el tiempo.</p>
                <p>Nuestro proceso parte del diagnóstico ¿dónde está la marca ahora? y construye hasta el plan de acción ¿qué hace en los próximos 12 meses y por qué?. Incluye análisis de competencia, definición de audiencias, arquitectura de mensajes y sistema de medición para saber si funciona.</p>
                <p>La estrategia que entregamos es operativa, no teórica. Viene con un plan de acción con prioridades, responsables y presupuesto estimado. No es un informe de ochenta páginas que se archiva. Es una hoja de ruta que el equipo puede ejecutar desde el día siguiente a la presentación.</p>
              </div>
            </div>
            <div>
              <h3 className="text-white/30 text-xs tracking-widest uppercase mb-6">Qué incluye</h3>
              <ul className="space-y-4" role="list">
                {["Diagnóstico de marca y comunicación", "Análisis de competencia y mercado", "Definición de audiencias y personas", "Arquitectura de mensajes por canal", "Plan de comunicación anual", "Sistema de KPIs y métricas", "Manual de tono de voz", "Priorización de inversiones"].map((item) => (
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
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-12">Tipos de proyecto estratégico</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {[
              { title: "Plan de comunicación anual", desc: "Estrategia completa para los 12 meses siguientes: qué, cómo, cuándo y con qué presupuesto." },
              { title: "Estrategia de lanzamiento", desc: "Hoja de ruta de comunicación para el lanzamiento de un producto, servicio o empresa." },
              { title: "Reposicionamiento de marca", desc: "Análisis y redefinición del posicionamiento cuando la marca ha quedado desfasada o difusa." },
              { title: "Estrategia de contenidos", desc: "Arquitectura de contenidos: temas, formatos, canales y calendario editorial." },
              { title: "Comunicación en crisis", desc: "Protocolo y plan de respuesta ante situaciones de riesgo reputacional." },
              { title: "Comunicación interna", desc: "Estrategia de comunicación para equipos: cultura, valores y alineación organizacional." },
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
          <p className="text-black/40 text-sm mb-4">Estrategia de comunicación para:</p>
          <p className="text-black/30 text-lg tracking-wide">Novartis · SAP · GFT · Applus · Meliá · Alcon · Petit Farm · Metaembalatges</p>
        </div>
      </section>
      <section className="py-16 lg:py-20 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black tracking-tighter text-white mb-8">También puede interesarte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Marketing Digital", href: "/servicios/marketing-digital" },
              { label: "Creación de Contenido", href: "/servicios/creacion-de-contenido" },
              { label: "Campaña Integral", href: "/soluciones/campana-comunicacion-integral" },
              { label: "Nosotros", href: "/nosotros" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="border border-white/10 px-6 py-4 text-sm text-white/50 hover:text-white hover:border-white/30 transition-colors">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} title="Preguntas sobre estrategia de comunicación" />
      <CTASection
        title="¿Tu comunicación tiene estrategia o tiene prisa?"
        subtitle="Una sesión de diagnóstico de 90 minutos puede cambiar el foco de todo lo que viene después."
        primaryCTA="Solicitar diagnóstico"
        secondaryCTA="Ver casos de éxito"
        secondaryHref="/casos-de-exito"
      />
    </PageLayout>
  );
}
