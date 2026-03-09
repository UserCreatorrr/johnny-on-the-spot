import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SOLUTIONS, CASES } from "@/lib/data";

export async function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const solution = SOLUTIONS.find((s) => s.slug === params.slug);
  if (!solution) return {};
  return {
    title: `${solution.title} | Johnny on the Spot`,
    description: solution.description,
    alternates: { canonical: `https://www.johnnyonthespot.es/soluciones/${solution.slug}` },
  };
}

const solutionDetails: Record<string, {
  subtitle: string;
  h2: string;
  paragraphs: string[];
  includes: string[];
  services: { label: string; href: string }[];
  cases: string[];
  faqs: { question: string; answer: string }[];
}> = {
  "lanzamiento-de-producto": {
    subtitle: "De la idea al mercado sin perder el hilo. Estrategia, creatividad y producción integradas para lanzamientos que generan impacto desde el día uno.",
    h2: "El lanzamiento que tu producto merece",
    paragraphs: [
      "Un lanzamiento de producto es uno de los momentos más críticos en la vida de una marca. Es el punto de partida que define la percepción del mercado, que establece el posicionamiento y que determina si el producto va a tener la tracción que necesita para sobrevivir. Hacerlo bien desde el principio cuesta mucho menos que corregirlo después.",
      "En Johnny on the Spot, los lanzamientos de producto son proyectos integrales: empezamos por la estrategia de comunicación del lanzamiento, diseñamos el concepto creativo, producimos todos los materiales —gráficos, digitales, audiovisuales, de punto de venta—, organizamos el evento de presentación si lo hay, y coordinamos la comunicación digital que mantiene el momentum post-lanzamiento.",
      "Hemos lanzado productos en el sector farmacéutico —Alcon Air Optix en ocho mercados europeos, Novartis Certican 360°, Dr. Scholl en el canal farmacias—, en cosmética, en gran consumo y en tecnología. En todos los casos, el lanzamiento era el principio de una relación con el mercado, no un momento aislado.",
    ],
    includes: ["Estrategia de lanzamiento", "Concepto creativo", "Materiales para todos los canales", "Evento de presentación (opcional)", "Kit de prensa y comunicación", "Materiales de sell-in para distribuidores", "Producción digital y social", "Métricas de seguimiento"],
    services: [
      { label: "Estrategia de Comunicación", href: "/servicios/estrategia-de-comunicacion" },
      { label: "Dirección Creativa", href: "/servicios/direccion-produccion-creativa" },
      { label: "Producción Gráfica", href: "/servicios/produccion-grafica" },
      { label: "Eventos Corporativos", href: "/servicios/eventos-corporativos" },
    ],
    cases: ["alcon-air-optix-paneuropeo", "novartis-certican-360"],
    faqs: [
      { question: "¿Cuánto tiempo necesitáis para planificar un lanzamiento?", answer: "Depende de la complejidad. Un lanzamiento nacional con varios canales y evento de presentación necesita al menos 8-12 semanas. Un lanzamiento paneuropeo como el de Alcon Air Optix necesita 4-6 meses. Dicho esto, si el tiempo es corto, nos adaptamos." },
      { question: "¿Podéis gestionar el lanzamiento en varios mercados simultáneamente?", answer: "Sí. Tenemos red de proveedores en Europa y experiencia en coordinación multinacional. El roadshow de Alcon en ocho ciudades europeas es el mejor ejemplo." },
      { question: "¿Qué pasa si el producto tiene restricciones regulatorias?", answer: "Tenemos experiencia en sectores regulados como el farmacéutico. Trabajamos siempre dentro del marco legal aplicable al producto y al mercado." },
      { question: "¿El lanzamiento incluye la estrategia de medios?", answer: "Puede incluirla. Diseñamos la estrategia de medios —paid media, relaciones con prensa, social— como parte del plan de lanzamiento o la coordinamos con el equipo de medios del cliente si ya tienen uno." },
    ],
  },
  "convenciones-y-eventos": {
    subtitle: "Producción integral de convenciones, incentivos, team buildings y eventos de lanzamiento. Para audiencias exigentes que lo notan todo.",
    h2: "Eventos que generan el impacto que el negocio necesita",
    paragraphs: [
      "Un evento corporativo bien producido hace cosas que ningún otro formato de comunicación consigue: alinea equipos, motiva a distribuidores, lanza productos con impacto emocional, celebra hitos y construye cultura. Un evento mal producido hace exactamente lo contrario.",
      "En Johnny on the Spot, la producción de eventos es una de nuestras especialidades históricas. Hemos producido el SAP Partner Summit para 250 participantes internacionales, el 60 aniversario de Meliá Hotels, la convención de 208 Brand Ambassadors de Puig, los incentivos de Ipsen Farma en Finlandia y de SD Distribución en Marruecos, y el team building gastronómico de SAP.",
      "Nuestra metodología: brief detallado, concepto creativo, presupuesto cerrado sin sorpresas, producción con gestión integral de proveedores y dirección in situ el día del evento. Un solo interlocutor de principio a fin.",
    ],
    includes: ["Concepto y propuesta creativa", "Selección y negociación de venue", "Producción audiovisual completa", "Diseño y montaje de espacios", "Catering y F&B", "Logística y traslados", "Dirección in situ", "Coberttura fotográfica y audiovisual"],
    services: [
      { label: "Eventos Corporativos", href: "/servicios/eventos-corporativos" },
      { label: "Dirección Creativa", href: "/servicios/direccion-produccion-creativa" },
      { label: "Guión y Vídeo", href: "/servicios/guion-edicion-video" },
      { label: "Estrategia de Comunicación", href: "/servicios/estrategia-de-comunicacion" },
    ],
    cases: ["sap-partner-summit", "puig-brand-ambassadors", "meliá-60-aniversario"],
    faqs: [
      { question: "¿Qué tamaño de eventos producís?", answer: "Desde eventos de 20 personas hasta convenciones de 250+ participantes internacionales. El criterio no es el tamaño, sino la ambición." },
      { question: "¿Producís eventos en el extranjero?", answer: "Sí. Finlandia, Bélgica, Marruecos, Cannes, América Latina. Tenemos red de proveedores locales en los principales destinos." },
      { question: "¿Cómo gestionáis los imprevistos el día del evento?", answer: "Con planificación de contingencias desde el principio. El director de producción de Johnny on the Spot siempre está in situ el día del evento para tomar decisiones en tiempo real." },
      { question: "¿Incluís la producción de contenidos del evento?", answer: "Sí, si se solicita: fotografía, vídeo, sizzle reel post-evento y materiales para comunicación interna posterior." },
    ],
  },
  "identidad-corporativa-web": {
    subtitle: "De la estrategia de naming al sistema de identidad completo, web incluida. Todo bajo el mismo criterio creativo, sin fisuras.",
    h2: "La identidad que lo unifica todo",
    paragraphs: [
      "La identidad corporativa y la web son dos piezas que deben diseñarse juntas o, al menos, bajo el mismo criterio. Una identidad poderosa en una web mediocre pierde la mitad de su impacto. Una web bien hecha sobre una identidad difusa no convence a nadie.",
      "En Johnny on the Spot, cuando un cliente necesita tanto identidad como web, los diseñamos como un sistema coherente: la identidad define los parámetros visuales que la web aplica. El resultado es una presencia de marca unificada que transmite la misma personalidad en un logo, en un flyer, en la pantalla de un smartphone o en un stand de feria.",
      "Hemos construido este tipo de sistema completo para Petit Farm, Metaembalatges y Panoma: en los tres casos, la identidad y la web son piezas del mismo sistema y se perciben como tal.",
    ],
    includes: ["Estrategia de marca", "Naming (opcional)", "Sistema de identidad visual", "Manual de marca", "Arquitectura web y UX", "Diseño y desarrollo web", "Copy y contenidos", "SEO on-page desde el inicio"],
    services: [
      { label: "Diseño de Identidad", href: "/servicios/diseno-de-identidad" },
      { label: "Naming", href: "/servicios/naming" },
      { label: "Copywriting", href: "/servicios/copywriting" },
      { label: "Marketing Digital", href: "/servicios/marketing-digital" },
    ],
    cases: ["metaembalatges-branding"],
    faqs: [
      { question: "¿Podéis hacer solo la web si ya tenemos identidad?", answer: "Sí. Si ya tienes un sistema de identidad definido, diseñamos y desarrollamos la web aplicando esas guías. Si el manual no existe o está incompleto, lo completamos antes de empezar." },
      { question: "¿Qué plataformas usáis para el desarrollo web?", answer: "Depende del proyecto: Next.js para proyectos de alto rendimiento, WordPress para sitios que el cliente necesita gestionar de forma autónoma, Webflow para proyectos de tamaño medio. Siempre recomendamos la tecnología más adecuada para cada caso." },
      { question: "¿Incluye el SEO?", answer: "Sí. Toda web que construimos está optimizada para SEO desde el diseño: estructura de URLs, metadatos, velocidad, Core Web Vitals, schema markup." },
      { question: "¿Cuánto tarda un proyecto de identidad + web?", answer: "Entre 10 y 16 semanas para un proyecto completo. Depende de la complejidad de la identidad y del tamaño de la web." },
    ],
  },
  "campana-comunicacion-integral": {
    subtitle: "Estrategia, creatividad, producción y distribución. Una campaña que funciona en todos los canales con el mismo mensaje y el mismo nivel.",
    h2: "360° que realmente funciona",
    paragraphs: [
      "El término '360°' se ha desgastado tanto que ya casi no significa nada. Nosotros lo usamos para describir algo muy concreto: una campaña que tiene un concepto central sólido, que ese concepto se aplica coherentemente en todos los canales y que cada pieza refuerza las demás.",
      "Una campaña integral bien hecha es más que la suma de sus partes. El consumidor que ve el mupi en la calle reconoce el mismo mensaje que vio en Instagram esa mañana, y recuerda la activación de marca que vivió el fin de semana anterior. Ese efecto acumulativo es el que construye marca de verdad.",
      "Hemos desarrollado campañas 360° para Novartis Certican, Alcon y Coca-Cola. En todos los casos, el proceso comenzó por la estrategia, siguió por el concepto creativo y terminó con la producción de todas las piezas bajo la misma dirección.",
    ],
    includes: ["Estrategia de campaña", "Concepto creativo único", "Producción gráfica para todos los formatos", "Producción audiovisual", "Materiales digitales", "Materiales de punto de venta", "Plan de medios (si aplica)", "Métricas de evaluación"],
    services: [
      { label: "Estrategia de Comunicación", href: "/servicios/estrategia-de-comunicacion" },
      { label: "Dirección Creativa", href: "/servicios/direccion-produccion-creativa" },
      { label: "Producción Gráfica", href: "/servicios/produccion-grafica" },
      { label: "Marketing Digital", href: "/servicios/marketing-digital" },
    ],
    cases: ["novartis-certican-360", "coca-cola-grandvalira"],
    faqs: [
      { question: "¿Cuánto tarda desarrollar una campaña integral?", answer: "Desde el brief hasta el primer material listo: entre 6 y 10 semanas para una campaña de tamaño medio. Campañas más complejas con producción audiovisual pueden llegar a 3-4 meses." },
      { question: "¿Podéis gestionar la compra de medios?", answer: "Podemos asesorar en el plan de medios y coordinarlo con la central de medios del cliente. No somos central de medios, pero entendemos el planning lo suficiente para que la campaña creativa y la distribución estén alineadas." },
      { question: "¿Podéis hacer campañas en varios mercados?", answer: "Sí. Adaptamos los materiales por mercado respetando el concepto central. Tenemos experiencia en adaptaciones multipaís con sensibilidades culturales distintas." },
      { question: "¿Cómo se mide el impacto de una campaña integral?", answer: "Antes de producir, definimos los KPIs: alcance, reconocimiento de marca, tráfico web, ventas, leads generados. Después de la campaña, evaluamos los resultados contra los objetivos y extraemos aprendizajes para la siguiente." },
    ],
  },
  "activacion-punto-de-venta": {
    subtitle: "Street marketing, POS, promotores y experiencias de marca en retail y grandes superficies. Donde el consumidor decide.",
    h2: "Ganar en el momento de la decisión",
    paragraphs: [
      "El punto de venta es donde se gana o se pierde la venta final. Toda la inversión en publicidad, branding y comunicación digital tiene que convertirse en acción cuando el consumidor está delante del lineal o del expositor. La activación de POS es ese último empujón.",
      "Diseñamos y producimos activaciones en punto de venta para Haribo, Orbit, Go Green, STINGbye y Dr. Scholl, entre otros. Cada proyecto tiene su propia mecánica, su propio perfil de consumidor y su propio contexto de retail.",
      "Los materiales que producimos para POS tienen tres criterios: impactan visualmente en el contexto del lineal, comunican el mensaje de forma inmediata sin necesitar explicación, y son fabricados con la durabilidad y el acabado que el canal requiere.",
    ],
    includes: ["Concepto de activación POS", "Diseño y producción de materiales", "Expositores y displays", "Señalética y PLV", "Equipo de promotores (si aplica)", "Formación del equipo", "Logística y distribución", "Informe de resultados"],
    services: [
      { label: "Activación de Marca", href: "/servicios/activacion-de-marca" },
      { label: "Producción Gráfica", href: "/servicios/produccion-grafica" },
      { label: "Creación de Contenido", href: "/servicios/creacion-de-contenido" },
      { label: "Estrategia de Comunicación", href: "/servicios/estrategia-de-comunicacion" },
    ],
    cases: ["haribo-activacion"],
    faqs: [
      { question: "¿Podéis gestionar la activación en toda España?", answer: "Sí. Tenemos red de coordinadores y promotores a nivel nacional para activaciones en múltiples puntos simultáneos." },
      { question: "¿Gestionáis la relación con la central de compras de las grandes superficies?", answer: "Podemos asesorar en ese proceso, aunque la negociación comercial con la gran superficie es responsabilidad del cliente. Nos encargamos de la producción y la ejecución una vez acordada la presencia." },
      { question: "¿Podéis hacer activaciones con tecnología o app integrada?", answer: "Sí. Haribo es un ejemplo: activación POS con app gamificada. Diseñamos la mecánica y coordinamos el desarrollo técnico." },
      { question: "¿Cuánto tarda producir una activación de POS?", answer: "Desde el brief hasta la primera activación en tienda: entre 4 y 8 semanas. Depende de la complejidad de los materiales y el número de puntos de activación." },
    ],
  },
  "formacion-corporativa-elearning": {
    subtitle: "Plataformas de formación interactiva, e-learnings y programas de onboarding para equipos globales. La formación que la gente completa de verdad.",
    h2: "Formación que funciona",
    paragraphs: [
      "El 80% de los e-learnings corporativos se abandonan antes de completarse. El motivo casi siempre es el mismo: están diseñados para cumplir un checkbox de compliance, no para generar aprendizaje real. Son aburridos, genéricos y desconectados de la realidad del profesional que tiene que completarlos.",
      "Hemos diseñado y producido e-learnings para Chopard (formación global de fragancias), Puig (Good Girl), Philipp Plein y Dr. Scholl (canal farmacia). En todos los casos, el objetivo era que el profesional completara el programa, retuviera el conocimiento y lo aplicara en su trabajo diario.",
      "El proceso de un buen e-learning empieza por entender qué sabe ya el aprendiz, qué necesita saber y cómo aprende mejor. A partir de ahí, diseñamos la estructura pedagógica, producimos los contenidos y los integramos en la plataforma más adecuada para cada caso.",
    ],
    includes: ["Análisis de necesidades formativas", "Diseño instruccional", "Guión y contenidos", "Producción multimedia", "Diseño UX/UI de la plataforma", "Vídeos y animaciones", "Tests y evaluaciones", "Administración y reporting"],
    services: [
      { label: "Creación de Contenido", href: "/servicios/creacion-de-contenido" },
      { label: "Guión y Vídeo", href: "/servicios/guion-edicion-video" },
      { label: "Diseño de Identidad", href: "/servicios/diseno-de-identidad" },
      { label: "IA y Automatizaciones", href: "/servicios/ia-y-automatizaciones" },
    ],
    cases: ["chopard-elearning"],
    faqs: [
      { question: "¿Qué plataformas de e-learning usáis?", answer: "Trabajamos con las principales plataformas LMS del mercado: Moodle, Docebo, TalentLMS. También diseñamos plataformas propias cuando el cliente necesita mayor personalización y control de marca." },
      { question: "¿Podéis producir e-learnings en varios idiomas?", answer: "Sí. Para proyectos globales como el de Chopard, producimos los contenidos en los idiomas necesarios con locución nativa y adaptaciones culturales." },
      { question: "¿Cuánto tarda producir un e-learning?", answer: "Un módulo estándar de 30-45 minutos: entre 6 y 10 semanas desde el análisis hasta el despliegue. Proyectos más complejos con múltiples módulos e idiomas pueden extenderse a 4-6 meses." },
      { question: "¿Podéis actualizar e-learnings existentes?", answer: "Sí. Actualizamos contenidos, rediseñamos la interfaz, añadimos módulos y migramos plataformas cuando es necesario." },
    ],
  },
};

export default function SolucionPage({ params }: { params: { slug: string } }) {
  const solution = SOLUTIONS.find((s) => s.slug === params.slug);
  if (!solution) notFound();

  const details = solutionDetails[solution.slug];
  if (!details) notFound();

  const relatedCases = CASES.filter((c) => details.cases.includes(c.slug));

  return (
    <PageLayout>
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Soluciones", href: "/soluciones" }, { label: solution.title }]} />
        </div>
      </div>

      <section className="pt-8 pb-20 lg:pb-28 px-6 lg:px-8" aria-labelledby="solution-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Solución</p>
              <h1 id="solution-heading" className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-none">
                {solution.title}
              </h1>
            </div>
            <div>
              <p className="text-white/45 text-xl leading-relaxed">{details.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-8">{details.h2}</h2>
              <div className="space-y-5 text-white/45 text-lg leading-relaxed">
                {details.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div>
              <h3 className="text-white/30 text-xs tracking-widest uppercase mb-6">Qué incluye</h3>
              <ul className="space-y-4 mb-10" role="list">
                {details.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/50 text-sm">
                    <span className="mt-1.5 w-1 h-1 bg-white/30 rounded-full flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="text-white/30 text-xs tracking-widest uppercase mb-4">Servicios relacionados</h3>
              <ul className="space-y-2" role="list">
                {details.services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-white/40 text-sm hover:text-white transition-colors">
                      {s.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {relatedCases.length > 0 && (
        <section className="py-16 lg:py-24 px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-12">
              Casos de éxito relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
              {relatedCases.map((c) => (
                <Link key={c.slug} href={`/casos/${c.slug}`} className="bg-black p-8 group hover:bg-white/3 transition-colors">
                  <p className="text-white/25 text-xs tracking-widest uppercase mb-3">{c.client}</p>
                  <h3 className="text-white font-bold text-lg mb-3 group-hover:text-white/90">{c.title}</h3>
                  <p className="text-white/40 text-sm">{c.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection faqs={details.faqs} title={`Preguntas sobre ${solution.title.toLowerCase()}`} />

      <CTASection
        title="¿Necesitas esta solución?"
        subtitle="Cuéntanos el proyecto. Diseñamos el proceso más eficiente para tu objetivo."
        primaryCTA="Hablemos"
        secondaryCTA="Ver todos los servicios"
        secondaryHref="/servicios"
      />
    </PageLayout>
  );
}
