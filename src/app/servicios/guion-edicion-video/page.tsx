import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Producción de Vídeo Corporativo y Guión | Johnny on the Spot",
  description:
    "Producción de vídeo corporativo, de producto y campañas audiovisuales. Guión, dirección, rodaje y postproducción. Alcon, Coca-Cola, Walk Me, SAP. Barcelona.",
  alternates: { canonical: "https://www.johnnyonthespot.es/servicios/guion-edicion-video" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Guión y Edición de Vídeo",
  provider: { "@type": "Organization", name: "Johnny on the Spot" },
  description: "Producción audiovisual completa: guión, dirección, rodaje y postproducción para marcas.",
  areaServed: { "@type": "Place", name: "España" },
  serviceType: "Producción Audiovisual",
};

const faqs = [
  {
    question: "¿Cuánto tarda producir un vídeo corporativo?",
    answer: "Depende de la complejidad. Un vídeo corporativo estándar —guión, rodaje de un día, postproducción— puede estar listo en 3-4 semanas. Una miniserie de marca o una campaña audiovisual con múltiples piezas puede llevar 2-3 meses. Establecemos el calendario en el briefing inicial.",
  },
  {
    question: "¿Qué incluye un paquete de producción de vídeo?",
    answer: "El paquete estándar incluye: guión, storyboard, producción (equipo técnico, localizaciones, actores si los hay), rodaje, edición, corrección de color, música y efectos de sonido, subtítulos y entrega en los formatos requeridos. Todo bajo una misma dirección.",
  },
  {
    question: "¿Cómo se briefia un proyecto de vídeo?",
    answer: "El brief más útil incluye: objetivo del vídeo (qué tiene que conseguir), audiencia, tono y referencias visuales que el cliente admira, duración aproximada, canales de distribución y presupuesto orientativo. Con eso, preparamos una propuesta narrativa y de producción.",
  },
  {
    question: "¿Qué diferencia un vídeo corporativo de un vídeo de marca?",
    answer: "El vídeo corporativo informa: presenta la empresa, explica un proceso, o comunica resultados a audiencias internas o profesionales. El vídeo de marca construye emoción y posicionamiento. Ambos pueden hacerse bien o mal. Nosotros los hacemos bien en los dos casos.",
  },
];

export default function GuionVideoPage() {
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
              { label: "Guión y Edición de Vídeo" },
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
                Guión y Edición de Vídeo
              </h1>
            </div>
            <div>
              <p className="text-white/45 text-xl leading-relaxed">
                El vídeo mal hecho es peor que no tener vídeo. Del guión a la postproducción, con una estrategia narrativa clara y un estándar de producción que respete a la marca.
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
                Audiovisual con argumento
              </h2>
              <div className="space-y-5 text-white/45 text-lg leading-relaxed">
                <p>
                  Antes de encender una cámara, definimos por qué existe ese vídeo. Qué tiene que hacer: informar, convencer, emocionar, formar, vender. Un vídeo sin objetivo claro es dinero mal invertido con buenos planos.
                </p>
                <p>
                  Hemos producido la miniserie HydraGlyde Family para Alcon Air Optix, los vídeos de campaña Coca-Cola On Air y Coca-Cola Segmentación, y el vídeo corporativo de Walk Me para SAP. También cubrimos audiovisualmente convenciones, eventos de marca y lanzamientos de producto. En todos los casos, el proceso empieza por el guión y termina cuando el cliente tiene el material listo para publicar.
                </p>
                <p>
                  Nuestra capacidad es integral: guionistas, directores, directores de fotografía, equipos de rodaje, postproductores y coloristas. No somos una productora de rodaje que espera que el cliente llegue con el guión hecho. Empezamos desde el principio.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-white/30 text-xs tracking-widest uppercase mb-6">Qué incluye</h3>
              <ul className="space-y-4" role="list">
                {[
                  "Estrategia narrativa",
                  "Guión y storyboard",
                  "Producción ejecutiva",
                  "Dirección de rodaje",
                  "Postproducción y montaje",
                  "Color grading",
                  "Locución y sonido",
                  "Adaptaciones de formato y duración",
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
            Qué producimos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {[
              { title: "Vídeo corporativo", desc: "Presentación de empresa, valores, cultura y equipo para uso interno y externo." },
              { title: "Vídeo de producto", desc: "Demostraciones, explicaciones y campañas centradas en las características del producto." },
              { title: "Campañas audiovisuales", desc: "Spots, cuñas y piezas para medios pagados: televisión, digital, exterior digital." },
              { title: "Contenido para redes", desc: "Vídeos cortos, reels, stories y piezas optimizadas para plataformas digitales." },
              { title: "Miniseries de marca", desc: "Series de contenido de entretenimiento con identidad de marca integrada." },
              { title: "Vídeos de formación", desc: "E-learnings, tutoriales y materiales de onboarding para equipos corporativos." },
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
          <p className="text-black/40 text-sm mb-4">Producciones audiovisuales para:</p>
          <p className="text-black/30 text-lg tracking-wide">
            Alcon · Coca-Cola · Walk Me · SAP · Novartis · Meliá · Applus · Chopard
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black tracking-tighter text-white mb-8">También puede interesarte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Creación de Contenido", href: "/servicios/creacion-de-contenido" },
              { label: "Dirección de Arte", href: "/servicios/direccion-de-arte" },
              { label: "Campaña de Comunicación", href: "/soluciones/campana-comunicacion-integral" },
              { label: "Caso Alcon Roadshow", href: "/casos/alcon-air-optix-paneuropeo" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="border border-white/10 px-6 py-4 text-sm text-white/50 hover:text-white hover:border-white/30 transition-colors">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Preguntas sobre producción audiovisual" />

      <CTASection
        title="¿Tienes un proyecto audiovisual?"
        subtitle="Cuéntanos qué necesitas comunicar, a quién y en qué canal. Diseñamos el formato y el proceso más eficiente."
        primaryCTA="Enviar el brief"
        secondaryCTA="Ver casos audiovisuales"
        secondaryHref="/casos-de-exito"
      />
    </PageLayout>
  );
}
