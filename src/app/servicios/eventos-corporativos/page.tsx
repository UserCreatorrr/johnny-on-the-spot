import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Producción de Eventos Corporativos | Johnny on the Spot Barcelona",
  description:
    "Producción integral de eventos corporativos: convenciones, incentivos, lanzamientos y team buildings. SAP, Meliá, Puig, Ipsen Farma. Barcelona y toda Europa.",
  alternates: { canonical: "https://www.johnnyonthespot.es/servicios/eventos-corporativos" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Producción de Eventos Corporativos",
  provider: { "@type": "Organization", name: "Johnny on the Spot" },
  description: "Producción integral de eventos corporativos: convenciones, incentivos, lanzamientos y team buildings.",
  areaServed: { "@type": "Place", name: "Europa" },
  serviceType: "Event Production",
};

const faqs = [
  {
    question: "¿Producís eventos fuera de España?",
    answer: "Sí, es parte de nuestro ADN. Hemos producido eventos en Finlandia, Bélgica, Marruecos, Cannes y varios países de América Latina. Tenemos red de proveedores locales activos en los principales destinos de incentivo europeos y latinoamericanos.",
  },
  {
    question: "¿Cuánto tiempo de antelación necesitáis?",
    answer: "Depende del tamaño y destino. Para eventos pequeños en España, podemos activar con 4-6 semanas. Para convenciones internacionales de 200 o más personas, necesitamos mínimo 3 meses. Si el tiempo aprieta, nos adaptamos: somos Johnny on the Spot.",
  },
  {
    question: "¿Hacéis eventos de menos de 50 personas?",
    answer: "Sí. No tenemos mínimo de asistentes. El criterio es la ambición del evento, no el número de personas. Hemos producido cenas privadas de empresa y convenciones para 250 participantes con la misma exigencia.",
  },
  {
    question: "¿Incluís la producción de contenidos del evento?",
    answer: "Sí, si se solicita. Podemos cubrir el evento fotográficamente y audiovisualmente, y entregar el material editado para uso interno o comunicación externa. También producimos el contenido de apoyo: presentaciones, vídeos de apertura, sizzle reels post-evento.",
  },
];

export default function EventosCorporativosPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Servicios", href: "/servicios" }, { label: "Eventos Corporativos" }]} />
        </div>
      </div>
      <section className="pt-8 pb-20 lg:pb-28 px-6 lg:px-8" aria-labelledby="service-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Servicio</p>
              <h1 id="service-heading" className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-none">
                Producción de Eventos Corporativos
              </h1>
            </div>
            <div>
              <p className="text-white/45 text-xl leading-relaxed">
                Convenciones, lanzamientos, incentivos. Eventos que la gente recuerda y que generan el impacto que el negocio necesita.
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
                Del concepto al evento, sin fisuras
              </h2>
              <div className="space-y-5 text-white/45 text-lg leading-relaxed">
                <p>Producir un evento es gestionar decenas de variables simultáneas con un margen de error cero. Audiovisuales, catering, logística, proveedores locales, protocolo, contingencias, tiempos. En Johnny on the Spot nos encargamos de todo eso para que el cliente solo tenga que aparecer y que el evento funcione.</p>
                <p>Hemos producido la convención SAP Partner Summit para 250 participantes internacionales en Barcelona, los incentivos de Ipsen Farma en Finlandia y de SD Distribución en Marruecos, la convención de 208 Brand Ambassadors de Puig, el 60 aniversario de Meliá Hotels y el team building gastronómico de SAP. Cada formato con su propia lógica, sus propios proveedores y sus propias métricas de éxito.</p>
                <p>Nuestra metodología es clara: brief detallado, propuesta conceptual y presupuesto cerrado, producción sin sorpresas, dirección in situ el día del evento. El cliente tiene un solo interlocutor de principio a fin: el partner sénior de Johnny on the Spot asignado al proyecto.</p>
              </div>
            </div>
            <div>
              <h3 className="text-white/30 text-xs tracking-widest uppercase mb-6">Qué incluye</h3>
              <ul className="space-y-4" role="list">
                {["Concepto y propuesta creativa", "Gestión de venues y proveedores", "Producción audiovisual AV", "Diseño y montaje de espacios", "Catering y F&B", "Logística y traslados", "Dirección in situ el día del evento", "Post-evento y documentación"].map((item) => (
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
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-12">Formatos de evento</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {[
              { title: "Convenciones corporativas", desc: "Eventos anuales de empresa: lanzamientos internos, presentaciones de resultados, motivación de equipo." },
              { title: "Incentivos y viajes", desc: "Viajes de incentivo con experiencias diseñadas a medida para los mejores equipos de ventas y distribución." },
              { title: "Lanzamientos de producto", desc: "Presentaciones de producto para prensa, distribuidores o clientes finales con producción de alto impacto." },
              { title: "Team buildings", desc: "Experiencias de construcción de equipo: gastronómicas, deportivas, creativas. Con propósito real." },
              { title: "Ruedas de prensa", desc: "Presentaciones corporativas para medios con producción, materiales y logística completa." },
              { title: "Eventos de distribuidores", desc: "Convenciones para redes de distribución y partners comerciales en España y en el extranjero." },
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
          <p className="text-black/40 text-sm mb-4">Eventos corporativos producidos para:</p>
          <p className="text-black/30 text-lg tracking-wide">SAP · Meliá · Puig · Ipsen Farma · Coty Prestige · SD Distribución · Coca-Cola · Novartis · Applus</p>
        </div>
      </section>
      <section className="py-16 lg:py-20 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black tracking-tighter text-white mb-8">También puede interesarte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Activación de Marca", href: "/servicios/activacion-de-marca" },
              { label: "Estrategia de Comunicación", href: "/servicios/estrategia-de-comunicacion" },
              { label: "Convenciones y Eventos", href: "/soluciones/convenciones-y-eventos" },
              { label: "Caso SAP Summit", href: "/casos/sap-partner-summit" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="border border-white/10 px-6 py-4 text-sm text-white/50 hover:text-white hover:border-white/30 transition-colors">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} title="Preguntas sobre eventos corporativos" />
      <CTASection
        title="¿Tienes un evento en mente?"
        subtitle="Cuéntanoslo con la mayor antelación posible. Cuanto antes empezamos, mejor el resultado."
        primaryCTA="Hablemos del evento"
        secondaryHref="/casos/sap-partner-summit"
      />
    </PageLayout>
  );
}
