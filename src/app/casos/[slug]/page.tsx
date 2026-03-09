import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
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

const caseDetails: Record<string, {
  intro: string;
  challenge: string;
  solution: string;
  result: string;
  quote?: string;
}> = {
  "alcon-air-optix-paneuropeo": {
    intro: "Alcon necesitaba lanzar Air Optix en ocho mercados europeos de forma simultánea, con un nivel de producción y un impacto en los profesionales de óptica que justificara la ambición del producto.",
    challenge: "El reto era múltiple: coordinar equipos y proveedores en ocho países, crear una experiencia memorable para profesionales de la salud visual muy técnicos, y diferenciarse en un mercado de lentes de contacto extremadamente competitivo.",
    solution: "Diseñamos y produjimos un roadshow en ocho ciudades europeas con una experiencia central: una app de realidad aumentada que permitía a los profesionales visualizar los beneficios del producto de forma interactiva. Cada parada del roadshow era un evento de alto impacto con producción local adaptada.",
    result: "Más de 2.000 profesionales de la salud visual impactados directamente. La app fue adoptada como herramienta de venta por el equipo comercial de Alcon en Europa. El lanzamiento paneuropeo se completó en plazo y sin incidentes logísticos.",
  },
  "sap-partner-summit": {
    intro: "SAP necesitaba una convención para 250 partners internacionales que elevara su relación comercial y comunicara la dirección estratégica de la empresa para los próximos años.",
    challenge: "Producir un evento de alta complejidad para 250 participantes internacionales —con sus exigencias de traducción, logística, programación y producción AV— manteniendo el nivel de excelencia que SAP exige a todos sus proveedores.",
    solution: "Producción integral del SAP Partner Summit en Barcelona: venue, audiovisual de alta gama, programa de actividades, catering premium, logística de asistentes desde múltiples países, materiales y contenidos del evento.",
    result: "250 participantes internacionales. 98% de satisfacción en encuesta post-evento. El evento estableció un nuevo estándar para los partner summits de SAP en Europa.",
  },
  "coca-cola-grandvalira": {
    intro: "Coca-Cola necesitaba activar su marca en uno de los momentos de mayor disfrute del año: la temporada de esquí en Grandvalira, la estación más grande de los Pirineos.",
    challenge: "Crear una acción memorable en un entorno físicamente complejo —altura, frío, logística de montaña—, que generara engagement orgánico y presencia de marca en un contexto donde Coca-Cola compite con muchas otras marcas de bebida.",
    solution: "Acción de guerrilla en Grandvalira con activación simultánea en Madrid y Medellín para ampliar el alcance digital. Mecánica pensada para la viralidad: participación fácil, momento memorable, fotografía compartible.",
    result: "Activación en tres mercados simultáneos. Cobertura orgánica en redes sociales. Impacto en temporada alta de esquí con máxima visibilidad de marca.",
  },
  "puig-brand-ambassadors": {
    intro: "Puig necesitaba reunir a sus 208 Brand Ambassadors de fragancias de toda Europa en Barcelona para una convención de marca que reforzara su compromiso con los productos y su conocimiento de la gama.",
    challenge: "Coordinar 208 embajadores de marca de múltiples países, con producción de formación, activaciones en directo con los productos, programa de experiencias y gestión logística completa.",
    solution: "Diseño y producción integral de la convención: venue en Barcelona, producción audiovisual, sesiones de formación y activación de fragancias en directo, programa de actividades, catering y logística de asistentes.",
    result: "208 Brand Ambassadors reunidos de toda Europa. Activación de fragancias en directo. Refuerzo del conocimiento de producto y del compromiso con la marca.",
  },
  "novartis-certican-360": {
    intro: "Novartis necesitaba lanzar una campaña integral para Certican que cubriera todos los canales de comunicación con un mensaje coherente y con impacto real en prescriptores.",
    challenge: "Crear una campaña 360° para un producto farmacéutico dentro del estricto marco regulatorio del sector, que fuera diferenciada visualmente y que funcionara en seis canales distintos sin perder coherencia.",
    solution: "Campaña integral con concepto creativo único adaptado a todos los canales: materiales para HCP, presentaciones para congreso, materiales digitales, herramientas de visita médica y comunicación interna para el equipo de ventas.",
    result: "Campaña para seis canales de comunicación. Distribución nacional. Material validado por Medical Affairs y aprobado por compliance regulatorio.",
  },
  "meliá-60-aniversario": {
    intro: "Meliá Hotels International celebraba su 60 aniversario, un hito que merecía un evento corporativo a la altura de la trayectoria de una de las cadenas hoteleras más importantes del mundo.",
    challenge: "Producir un evento de aniversario que honrara la historia de la empresa, celebrara el presente con el equipo directivo y proyectara visión de futuro, con una producción que estuviera a la altura del posicionamiento premium de la marca.",
    solution: "Concepto creativo y producción integral del evento de 60 aniversario: venue, producción audiovisual de alto nivel, programa de contenidos, catering de diseño y dirección completa del evento.",
    result: "Evento corporativo emblemático que marcó un antes y un después en los eventos internos de Meliá. Producción AV de alto nivel. Reconocimiento interno del nivel de producción conseguido.",
  },
  "chopard-elearning": {
    intro: "Chopard necesitaba una plataforma de formación global para sus embajadores de fragancias que permitiera mantener la coherencia de la formación en todos los mercados y que respetara el estándar visual y de contenido de la marca.",
    challenge: "Diseñar y producir una plataforma de e-learning que fuera atractiva para un perfil de embajador de marca de lujo, que respetara la estética premium de Chopard y que funcionara en varios idiomas para audiencias de distintos países.",
    solution: "Plataforma de e-learning con diseño propio inspirado en la identidad visual de Chopard, contenidos interactivos sobre la historia y filosofía de las fragancias, módulos de producto y evaluación de conocimiento. Disponible en varios idiomas.",
    result: "Formación global estandarizada para todos los embajadores de Chopard en los principales mercados. Plataforma propia con identidad de marca. Alto nivel de completado del programa de formación.",
  },
  "haribo-activacion": {
    intro: "Haribo necesitaba una activación en el punto de venta que generara engagement real con el consumidor en grandes superficies de España, aprovechando el potencial lúdico de la marca.",
    challenge: "Crear una mecánica de activación que fuera sencilla de ejecutar en múltiples puntos de venta simultáneos, que generara participación real del consumidor y que se diferenciara del estándar de las activaciones de gran consumo.",
    solution: "Activación con app gamificada: mecánica de juego en el punto de venta que se completaba con el smartphone del consumidor. Materiales POS de activación, equipo de promotores formados y gestión logística de todos los puntos.",
    result: "Activación en grandes superficies de España. App descargada y utilizada por más de 50.000 usuarios. Incremento de ventas medible durante el período de activación.",
  },
  "applus-mwc": {
    intro: "Applus necesitaba una presencia de alto impacto en el Mobile World Congress de Barcelona y en el 4YFN, los dos eventos de referencia de la industria tecnológica en España.",
    challenge: "Diseñar y producir un stand que destacara en un contexto saturado de marcas tecnológicas con presupuestos muy superiores, y que transmitiera el posicionamiento de Applus como empresa de servicios tecnológicos avanzados.",
    solution: "Diseño y producción del stand de Applus para el MWC, con presencia paralela en el 4YFN. Concepto visual que diferenciaba a Applus del estándar del sector y que facilitaba las conversaciones comerciales del equipo de ventas.",
    result: "Presencia en MWC y 4YFN. Stand diferenciado del estándar del sector. Generación de leads cualificados durante el evento.",
  },
  "metaembalatges-branding": {
    intro: "Metaembalatges, empresa industrial de packaging, necesitaba reposicionarse como marca premium en su sector, con una identidad visual y digital que reflejara la calidad de sus productos y diferenciara a la empresa de la competencia.",
    challenge: "Construir una identidad premium para una empresa industrial cuya comunicación era prácticamente inexistente, y hacerlo de forma que fuera creíble para sus clientes actuales y atractiva para los clientes potenciales que querían captar.",
    solution: "Identidad corporativa completa: naming validation, logo, sistema visual, tipografía y paleta. Web completa con fotografía y vídeo corporativo propios. Posicionamiento como marca de referencia en el sector del packaging de calidad.",
    result: "Identidad completa entregada. Web nueva con fotografía y vídeo propios. Posicionamiento premium en el sector. La empresa ganó clientes de mayor tamaño y valor tras el rebranding.",
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
        secondaryCTA="Ver todos los casos"
        secondaryHref="/casos-de-exito"
      />
    </PageLayout>
  );
}
