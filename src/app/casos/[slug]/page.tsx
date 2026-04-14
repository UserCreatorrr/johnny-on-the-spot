import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import SandGamesMcCann from "@/components/SandGamesMcCann";
import { CASES } from "@/lib/data";

export async function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const caso = CASES.find((c) => c.slug === params.slug);
  if (!caso) return {};
  return {
    title: `${caso.title} | Johnny on the Spot`,
    description: caso.description,
    alternates: { canonical: `https://www.johnnyonthespot.es/casos/${caso.slug}` },
  };
}

const caseVideos: Record<string, string> = {
  "carolina-herrera-desfile-ss2026": "https://drive.google.com/file/d/16_kiluQsVsfJupUn0KHdPMHP6XA-NoeE/preview",
  "novartis-transplant-tomorrow": "https://drive.google.com/file/d/1TDyZV9g-BhORBsuQR5FQ1RsPdX2mfFgT/preview",
  "alcon-air-optix-paneuropeo": "https://drive.google.com/file/d/16WfAhvfWKPY-EipNl0AiGtQ9DcVsAQB8/preview",
  "alcon-astigmatismo-campana": "https://drive.google.com/file/d/1jPJGtUKA_e6ip73I18eON0yR5OXWwq1H/preview",
  "meliá-60-aniversario": "https://drive.google.com/file/d/1BupzBaXM-kSdNd6eHKzfMZo32glcom3E/preview",
};

const caseDetails: Record<string, {
  intro: string;
  challenge: string;
  solution: string;
  result: string;
  quote?: string;
}> = {
  "alcon-air-optix-paneuropeo": {
    intro: "Alcon necesitaba lanzar la nueva familia de lentillas Air Optix HydraGlyde en España y Portugal con un nivel de producción y un impacto en los profesionales de óptica que justificara la ambición del producto.",
    challenge: "Crear un concepto creativo paneuropeo para el lanzamiento, producir una mini-serie para comunicar la nueva gama, desarrollar una app de realidad aumentada para profesionales del sector y ejecutar un roadshow en 8 ciudades en el menor tiempo posible.",
    solution: "Concepto creativo para el lanzamiento de la HydraGlyde Family. Creación, rodaje y composición de jingle para la mini-serie. Diseño y producción de materiales de comunicación. App con realidad aumentada para profesionales. Roadshow en 8 ciudades de España y Portugal.",
    result: "Campaña paneuropea lanzada. Mini-serie producida. App de realidad aumentada adoptada como herramienta de venta. Roadshow completado en 8 ciudades sin incidentes logísticos.",
  },
  "sap-partner-summit": {
    intro: "SAP necesitaba una convención para 250 partners internacionales de España y USA que elevara su relación comercial y comunicara la dirección estratégica de la empresa.",
    challenge: "Producir un evento de alta complejidad para 250 participantes con sus exigencias de localización, food & beverage, staff, logística de viajes y contenido creativo, manteniendo el nivel de excelencia que SAP exige a todos sus proveedores.",
    solution: "Conceptualización, eventos y producción integral del SAP Partner Summit: localización, food & beverage, staff, logística y viajes, contenido creativo y desarrollo gráfico de todos los materiales del evento.",
    result: "250 participantes internacionales de España y USA. Producción integral sin incidencias. Evento que estableció un nuevo estándar para los partner summits de SAP en Europa.",
  },
  "coca-cola-grandvalira": {
    intro: "Coca-Cola necesitaba activar su marca en las pistas de esquí de Grandvalira vinculando la experiencia al consumo del producto.",
    challenge: "Crear una acción memorable en un entorno físicamente complejo altura, frío, logística de montaña que generara engagement orgánico y estuviera vinculada directamente al consumo.",
    solution: "Activación de marca en las pistas de Grandvalira con mecánica de marketing de guerrilla vinculada al consumo. Conceptualización, desarrollo de marca y producción de materiales para la acción en las pistas.",
    result: "Activación en temporada alta de esquí. Acción vinculada al consumo con alta participación. Impacto de marca en uno de los contextos de mayor disfrute del año.",
  },
  "puig-brand-ambassadors": {
    intro: "Puig necesitaba reunir a sus 208 Brand Ambassadors de fragancias de todo el mundo en Barcelona para su convención anual de marca.",
    challenge: "Coordinar 208 embajadores de marca de múltiples países con producción de formación, activaciones de fragancias en directo, programa de experiencias y gestión logística y audiovisual completa en Barcelona.",
    solution: "Diseño, coordinación, conceptualización y producción integral de la convención anual: venue en Barcelona, producción audiovisual, programa de actividades, formación de producto y logística de asistentes de todo el mundo.",
    result: "208 Brand Ambassadors reunidos de todo el mundo. Convención producida íntegramente en Barcelona. Activación de fragancias en directo con alto nivel de engagement.",
  },
  "novartis-certican-360": {
    intro: "Novartis necesitaba crear el concepto de campaña para Certican y aplicarlo en todos los soportes de comunicación: vídeo, eventos profesionales, materiales gráficos y stand de congreso.",
    challenge: "Desarrollar un concepto creativo diferenciado para un producto de trasplante renal dentro del estricto marco regulatorio farmacéutico, que funcionara en todos los canales simultáneamente con coherencia visual y narrativa.",
    solution: "Creación del concepto de campaña 'Transplant Tomorrow: Mañana Empieza Hoy' para Certican. Aplicación en todos los soportes: vídeo, eventos profesionales, materiales gráficos, stand de congreso. Creación del guión, animaciones y edición de vídeos de presentación del concepto.",
    result: "Concepto integral implementado en todos los canales. Campaña gráfica, vídeo y stand de congreso producidos. Material validado por Medical Affairs y distribuido a nivel nacional.",
  },
  "meliá-60-aniversario": {
    intro: "Meliá Hotels International celebraba su 60 aniversario y necesitaba un evento corporativo para los principales tour-operadores y agencias a la altura de ese hito.",
    challenge: "Crear un concepto de evento que honrara la historia de la empresa y celebrara el presente con los principales socios comerciales, con una producción que reflejara el posicionamiento premium de una de las cadenas hoteleras más importantes del mundo.",
    solution: "Conceptualización del evento bajo el concepto 'Dreamhunters'. Convocatoria, desarrollo de contenidos y producción integral: venue, materiales, producción audiovisual y dirección completa del evento para los principales tour-operadores y agencias.",
    result: "Celebración del 60 aniversario de Meliá Hotels International. Evento con asistencia de los principales tour-operadores y agencias. Producción reconocida internamente como referente.",
  },
  "chopard-elearning": {
    intro: "Chopard necesitaba una plataforma de e-learning para la formación de sus vendedores de todo el mundo en el lanzamiento de nuevas fragancias.",
    challenge: "Diseñar y producir una plataforma de formación que fuera atractiva para vendedores de lujo en múltiples mercados, que respetara la estética premium de Chopard y que permitiera seguimiento del aprendizaje.",
    solution: "Conceptualización y desarrollo del e-learning de formación para vendedores de todo el mundo. Creación de contenidos de vídeo, documentos de referencia, contenidos interactivos y back office para seguimiento del progreso.",
    result: "Formación global estandarizada para los vendedores de Chopard. Plataforma propia con identidad de marca. Alto nivel de completado en todos los mercados.",
  },
  "haribo-activacion": {
    intro: "Haribo necesitaba una acción promocional en grandes superficies que generara engagement real con el consumidor y diferenciara la marca en el lineal.",
    challenge: "Crear una mecánica de activación 360° que combinara presencia en el punto de venta, publicidad exterior y tecnología mobile, ejecutable en múltiples grandes superficies simultáneamente.",
    solution: "Conceptualización, promoción y desarrollo de app. Acción 360° en grandes superficies incluyendo activación en el punto de venta y campaña de publicidad exterior. Desarrollo de un juego disponible en Google Play y App Store.",
    result: "Acción promocional ejecutada en grandes superficies de España. App disponible en Google Play y App Store. Activación en punto de venta con alta participación del consumidor.",
  },
  "applus-mwc": {
    intro: "Applus necesitaba una presencia de alto impacto en el Mobile World Congress de Barcelona y un Family Day corporativo para sus empleados.",
    challenge: "Diseñar y producir un stand que destacara en el MWC el evento tecnológico de mayor densidad de marcas del mundo y además organizar un Family Day con actividades, staff y logística para los empleados.",
    solution: "Diseño, conceptualización, gestión y coordinación del stand para el MWC. Concepto visual diferenciado del estándar tecnológico. Family Day corporativo: concepto gráfico, actividades, staff y logística.",
    result: "Stand MWC diferenciado y reconocido. Family Day producido con alto nivel de satisfacción. Generación de leads cualificados durante el evento de Barcelona.",
  },
  "metaembalatges-branding": {
    intro: "Metaembalatges, empresa industrial de packaging, necesitaba reposicionarse como marca premium con una identidad visual y digital que reflejara la calidad de sus productos.",
    challenge: "Construir una identidad premium para una empresa industrial cuya comunicación era prácticamente inexistente, credible para sus clientes actuales y atractiva para clientes potenciales.",
    solution: "Branding completo: desarrollo de identidad gráfica y sistema visual. Creación de contenidos y web. Fotografía y vídeo corporativo propios. Posicionamiento como marca de referencia en el sector del packaging.",
    result: "Identidad completa entregada. Web nueva con fotografía y vídeo propios. La empresa ganó clientes de mayor tamaño y valor tras el rebranding.",
  },
  "alcon-astigmatismo-campana": {
    intro: "Alcon necesitaba una acción divulgativa sobre el astigmatismo dirigida al gran público, con presencia exterior y canal digital.",
    challenge: "Crear un concepto creativo que explicara el astigmatismo de forma atractiva y que funcionara tanto en exterior como en digital, generando tráfico a un microsite ad hoc.",
    solution: "Concepto creativo '¿Qué ves?' con campaña gráfica en formato test. Materiales para exterior incluyendo vallas y metro. Desarrollo web de un microsite dedicado al concepto y al test de astigmatismo.",
    result: "Campaña en exterior con formato test en múltiples soportes. Microsite dedicado con test interactivo. Acción divulgativa con alta visibilidad en espacios de gran tráfico.",
  },
  "novartis-transplant-tomorrow": {
    intro: "Novartis necesitaba crear el concepto y la campaña de producto para Certican en el área de trasplante renal, con aplicación en eventos profesionales, materiales gráficos y vídeo.",
    challenge: "Desarrollar un concepto emocional y clínicamente riguroso para comunicar los beneficios de Certican a nefrólogos y trasplantólogos, con producción de vídeo de alto impacto y presencia en congresos de referencia.",
    solution: "Concepto creativo, campaña gráfica, eventos y producción de vídeo. El concepto 'Transplant Tomorrow: Mañana Empieza Hoy' con historias de trasplantados reales (Andrés, Mercedes, Lydia). Guión, animaciones y edición de vídeos. Producción de eventos profesionales.",
    result: "Campaña con concepto diferenciador en el sector farma. Vídeo emocional producido. Presencia destacada en congresos de nefrología y trasplante.",
  },
  "ergobaby-orbit-packaging": {
    intro: "Orbit Baby (distribuido en USA y Europa) necesitaba material de punto de venta que comunicara el valor diferencial de su sistema de movilidad para el canal de puericultura.",
    challenge: "Diseñar material POS que reflejara el posicionamiento premium de Orbit en el mercado americano y europeo, adaptado a distintos formatos de retail.",
    solution: "Diseño y creación de material para punto de venta. Sistema de expositores y materiales gráficos para el canal retail de USA y Europa.",
    result: "Material POS diseñado e implementado en el canal retail de USA y Europa. Sistema coherente con la identidad de la marca.",
  },
  "gft-mwc-4yfn": {
    intro: "GFT, empresa de servicios tecnológicos y transformación digital, necesitaba una presencia de impacto en el 4YFN dentro del Mobile World Congress de Barcelona.",
    challenge: "Diseñar y producir un stand para el 4YFN que diferenciara a GFT de startups y corporates con mayor notoriedad, transmitiendo su posicionamiento de empresa innovadora con capacidad global.",
    solution: "Diseño, conceptualización, gestión y coordinación del stand para el 4YFN en Barcelona. Concepto visual centrado en un globo LED esférico con proyección de contenidos: un elemento de alto impacto visual en el contexto del evento.",
    result: "Stand diferenciado y reconocido en el 4YFN. El globo LED se convirtió en un elemento de atracción de asistentes. Generación de leads cualificados durante el evento.",
  },
  "porsche-interclassics-brussels": {
    intro: "Porsche Classic necesitaba una presencia en InterClassics Brussels, la feria de referencia del automovilismo clásico en Bélgica, para conectar con los propietarios de Porsche Classic y actualizar su base de datos.",
    challenge: "Crear un stand que comunicara los valores de herencia y autenticidad de Porsche Classic en Bélgica, con una mecánica de captación de datos y una campaña dirigida a todos los propietarios de Porsche Classic del país.",
    solution: "Stand para Porsche inspirado en los años 50 como recreación de un garaje antiguo. Diseño, producción y coordinación del stand en ClassicCar Event (Bélgica). Campaña dirigida a propietarios de Porsche Classic para actualización de BBDD.",
    result: "Stand inmersivo reconocido en el evento. Campaña de captación para propietarios de Porsche Classic en Bélgica. Actualización de base de datos de clientes.",
  },
  "carolina-herrera-desfile-ss2026": {
    intro: "Carolina Herrera confió a Johnny on the Spot la producción ejecutiva de su desfile Spring-Summer 2026, celebrado en la Plaza Mayor de Madrid.",
    challenge: "Gestionar la producción ejecutiva de un desfile de alta moda en un espacio emblemático la Plaza Mayor de Madrid coordinando todos los elementos productivos con los estándares de excelencia de la casa.",
    solution: "Producción ejecutiva integral: gestión de proveedores, logística y producción técnica, pasarela, montaje y coordinación de backstage, producción y coordinación de fittings, coordinación de catering, localización y logística y traslados.",
    result: "Desfile Carolina Herrera producido en la Plaza Mayor de Madrid. Producción ejecutiva integral sin incidencias. Cobertura de prensa internacional de moda.",
  },
  "gogreen-expositor-pos": {
    intro: "Go Green necesitaba expositores para punto de venta que comunicaran su propuesta de bolsas sostenibles en el retail.",
    challenge: "Diseñar un expositor POS que transmitiera los valores ecológicos de la marca de forma atractiva y funcional, adaptado a los distintos formatos de punto de venta.",
    solution: "Diseño y creación de expositores para punto de venta. Sistema gráfico alineado con la identidad de Go Green y la propuesta de valor de sus productos sostenibles.",
    result: "Expositores POS diseñados y producidos. Implantación en canal retail. Sistema replicable para distintos formatos de punto de venta.",
  },
  "stingbye-packaging": {
    intro: "STINGbye necesitaba el diseño del nuevo packaging para su línea de productos textiles repelentes de insectos y antipiojos.",
    challenge: "Crear un sistema de packaging que diferenciara la gama en el lineal de farmacia, comunicara claramente el beneficio de cada producto y reflejara la identidad de una marca innovadora en el sector.",
    solution: "Diseño del nuevo packaging y contenidos para varios productos textiles: camiseta anti mosquitos, coletero anti piojos y otros productos de la gama. Sistema visual coherente adaptado a los distintos formatos de producto.",
    result: "Sistema de packaging completo diseñado e implementado. Gama en lineal de farmacia con identidad visual propia y diferenciada de la competencia.",
  },
};

export default function CasoPage({ params }: { params: { slug: string } }) {
  const caso = CASES.find((c) => c.slug === params.slug);
  if (!caso) notFound();

  const details = caseDetails[caso.slug];
  const relatedCases = CASES.filter((c) => c.slug !== caso.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caso.title,
    description: caso.description,
    author: { "@type": "Organization", name: "Johnny on the Spot" },
    publisher: { "@type": "Organization", name: "Johnny on the Spot" },
  };

  // ─── SD Distribuciones: McCann-style fullscreen scroll experience ───
  if (caso.slug === "sd-distribuciones-sand-games") {
    return (
      <PageLayout>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* ─── McCann Hero: starts directly, no breadcrumbs ─── */}
        <SandGamesMcCann />

        {/* Más casos de éxito */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black tracking-tighter text-white mb-10">Más casos de éxito</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5">
              {relatedCases.map((c) => (
                <Link key={c.slug} href={`/casos/${c.slug}`} className="bg-black p-8 group hover:bg-white/3 transition-colors">
                  <p className="text-white/25 text-xs tracking-widest uppercase mb-3">{c.client}</p>
                  <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-white/90">{c.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{c.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="¿Quieres resultados como estos?"
          subtitle="Cuéntanos el proyecto. Trabajamos para que el resultado merezca estar aquí."
          primaryCTA="Hablemos"
        />
      </PageLayout>
    );
  }

  // ─── Resto de casos: template estándar ───
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Casos de Éxito", href: "/casos-de-exito" },
              { label: caso.client },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-12 px-6 lg:px-8" aria-labelledby="caso-heading">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">{caso.client}</p>
          <h1 id="caso-heading" className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-none mb-8 max-w-4xl">
            {caso.title}
          </h1>
          <div className="flex flex-wrap gap-3">
            {caso.services.map((s) => (
              <span key={s} className="text-white/35 text-xs border border-white/15 px-4 py-2">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Media box */}
      <div className="px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          {caseVideos[caso.slug] ? (
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <iframe
                src={caseVideos[caso.slug]}
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay"
                allowFullScreen
                title={`Vídeo: ${caso.title}`}
              />
              {/* Block the "Watch on YouTube" redirect button (top-right corner) */}
              <div className="absolute top-0 right-0 w-24 h-14 z-10" />
            </div>
          ) : (
            <div
              className="relative w-full bg-white/[0.03] border border-white/[0.08] overflow-hidden"
              style={{ aspectRatio: "16/7" }}
              aria-label={`Contenido visual del proyecto: ${caso.title}`}
            >
              {/* Grid decoration */}
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
                backgroundSize: "25% 33.33%"
              }} />

              {/* Corner slug */}
              <div className="absolute top-5 left-6 text-white/[0.12] text-xs font-mono tracking-widest uppercase">
                {caso.client}
              </div>
              <div className="absolute top-5 right-6 text-white/[0.12] text-xs font-mono">
                {caso.sector}
              </div>

              {/* Center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-8">
                <p className="text-white/[0.05] font-black text-5xl lg:text-8xl tracking-tighter text-center leading-none max-w-3xl">
                  {caso.title}
                </p>
                {caso.results && (
                  <p className="text-white/[0.18] text-xs text-center tracking-wide max-w-md leading-relaxed">
                    {caso.results}
                  </p>
                )}
              </div>

              {/* Bottom meta */}
              <div className="absolute bottom-5 left-6 right-6 flex justify-between items-end">
                <div className="flex gap-2 flex-wrap">
                  {caso.services.slice(0, 3).map((s) => (
                    <span key={s} className="text-white/[0.15] text-xs border border-white/[0.08] px-2 py-1">{s}</span>
                  ))}
                </div>
                <span className="text-white/[0.12] text-xs font-mono">
                  {caso.services.length} servicios
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {details && (
        <section className="py-16 lg:py-24 px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="text-xl font-black tracking-tight text-white/30 uppercase text-xs mb-4">El proyecto</h2>
                  <p className="text-white/60 text-lg leading-relaxed">{details.intro}</p>
                </div>
                <div>
                  <h2 className="text-xl font-black tracking-tight text-white/30 uppercase text-xs mb-4">El reto</h2>
                  <p className="text-white/60 text-lg leading-relaxed">{details.challenge}</p>
                </div>
                <div>
                  <h2 className="text-xl font-black tracking-tight text-white/30 uppercase text-xs mb-4">La solución</h2>
                  <p className="text-white/60 text-lg leading-relaxed">{details.solution}</p>
                </div>
                <div>
                  <h2 className="text-xl font-black tracking-tight text-white/30 uppercase text-xs mb-4">El resultado</h2>
                  <p className="text-white/60 text-lg leading-relaxed">{details.result}</p>
                </div>
              </div>
              <div>
                <div className="sticky top-24">
                  <h3 className="text-white/30 text-xs tracking-widest uppercase mb-6">Servicios utilizados</h3>
                  <ul className="space-y-3 mb-10" role="list">
                    {caso.services.map((s) => (
                      <li key={s} className="text-white/50 text-sm flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 bg-white/30 rounded-full flex-shrink-0" aria-hidden="true" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-white/30 text-xs tracking-widest uppercase mb-4">Sector</h3>
                  <p className="text-white/50 text-sm mb-10">{caso.sector}</p>
                  <Link
                    href="/contacto"
                    className="block text-center bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
                  >
                    Hablemos de tu proyecto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 lg:py-24 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black tracking-tighter text-white mb-10">Más casos de éxito</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5">
            {relatedCases.map((c) => (
              <Link key={c.slug} href={`/casos/${c.slug}`} className="bg-black p-8 group hover:bg-white/3 transition-colors">
                <p className="text-white/25 text-xs tracking-widest uppercase mb-3">{c.client}</p>
                <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-white/90">{c.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{c.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Quieres resultados como estos?"
        subtitle="Cuéntanos el proyecto. Trabajamos para que el resultado merezca estar aquí."
        primaryCTA="Hablemos"
      />
    </PageLayout>
  );
}
