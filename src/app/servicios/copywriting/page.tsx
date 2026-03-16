import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Copywriting Estratégico para Marcas | Johnny on the Spot",
  description:
    "Copywriting para web, campañas, packaging y naming. Textos que convierten sin parecer publicitarios. Español de España, B2B y B2C.",
  alternates: { canonical: "https://www.johnnyonthespot.es/servicios/copywriting" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Copywriting Estratégico",
  provider: { "@type": "Organization", name: "Johnny on the Spot" },
  description: "Copywriting para web, campañas, packaging y materiales de comunicación.",
  areaServed: { "@type": "Place", name: "España" },
  serviceType: "Copywriting",
};

const faqs = [
  {
    question: "¿Podéis copiar el tono de nuestra marca si ya tenemos brand voice definido?",
    answer: "Sí. Si ya tienes un manual de tono de voz, lo estudiamos y lo aplicamos con rigor. Si no lo tienes pero tienes referencias de cómo quieres sonar, podemos extraer el estilo de esas referencias y codificarlo para que lo use cualquier persona que genere textos para la marca.",
  },
  {
    question: "¿Escribís en inglés también?",
    answer: "Sí. Tenemos copywriters nativos en inglés y en español. Para proyectos internacionales, combinamos los dos según necesidad. También trabajamos en portugués para el mercado latinoamericano y Portugal.",
  },
  {
    question: "¿Qué necesitáis del cliente para empezar?",
    answer: "El briefing más útil incluye: descripción del producto o servicio, audiencia objetivo, tono deseado con referencias que lo ilustren, canales de uso y cualquier restricción relevante regulatoria, legal, de competencia. Cuanto más concreto, mejor el copy resultante.",
  },
  {
    question: "¿Incluye SEO copywriting?",
    answer: "Sí, si se solicita. Integramos las palabras clave objetivo de forma natural en los textos, sin que suenen forzados. El objetivo siempre es que el texto lea bien para personas, y que los buscadores lo entiendan correctamente. No son objetivos contrapuestos cuando el copy es bueno.",
  },
];

export default function CopywritingPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Servicios", href: "/servicios" }, { label: "Copywriting" }]} />
        </div>
      </div>
      <section className="pt-8 pb-20 lg:pb-28 px-6 lg:px-8" aria-labelledby="service-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Servicio</p>
              <h1 id="service-heading" className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-none">
                Copywriting
              </h1>
            </div>
            <div>
              <p className="text-white/45 text-xl leading-relaxed">
                Las palabras son la parte más subestimada de la comunicación y la que más rápido genera o destruye confianza.
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
                Textos que trabajan tan duro como los visuales
              </h2>
              <div className="space-y-5 text-white/45 text-lg leading-relaxed">
                <p>El copywriting no es escribir bien. Es entender qué quiere decir una marca, a quién se lo dice, y cómo decirlo para que esa persona lo entienda, lo crea y actúe. Eso exige dominar el negocio, el consumidor y el contexto, no solo la gramática.</p>
                <p>Escribimos para webs, campañas, packaging, presentaciones corporativas, newsletters, anuncios y cualquier pieza que necesite texto con propósito. Trabajamos en español de España, inglés y portugués, y adaptamos el tono según la marca: técnico o emocional, austero o expresivo, directo o narrativo.</p>
                <p>El copy que entregamos está listo para producir. No necesita revisión lingüística adicional ni adaptación editorial. Viene con una lógica de estructura interna que el diseñador puede aplicar directamente, sin necesidad de reescribir para que quepa en la pieza.</p>
              </div>
            </div>
            <div>
              <h3 className="text-white/30 text-xs tracking-widest uppercase mb-6">Qué incluye</h3>
              <ul className="space-y-4" role="list">
                {["Análisis de marca y audiencia", "Definición de tono de voz", "Copy para web (homepage, servicios, about)", "Copy de campaña (taglines, claims)", "Copy para packaging y materiales POS", "Contenido para newsletters y email", "Guiones de vídeo y locución", "Copy para social y digital"].map((item) => (
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
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-12">Proyectos de copywriting</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {[
              { title: "Web corporativa", desc: "Homepage, páginas de servicios, about y landing pages con copy de conversión." },
              { title: "Campañas publicitarias", desc: "Taglines, claims, cuerpos de texto para prensa, exterior y digital." },
              { title: "Packaging y etiquetado", desc: "Textos para envases, cajas, etiquetas y materiales de producto." },
              { title: "Presentaciones corporativas", desc: "Copy para decks de ventas, pitches y presentaciones corporativas." },
              { title: "Email marketing", desc: "Subject lines, cuerpos de email y secuencias de nurturing B2B y B2C." },
              { title: "Guiones audiovisuales", desc: "Guiones para vídeos corporativos, spots y contenido de marca." },
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
          <p className="text-black/40 text-sm mb-4">Copy y textos de comunicación para:</p>
          <p className="text-black/30 text-lg tracking-wide">Alcon · Novartis · Coca-Cola · SAP · Petit Farm · Metaembalatges · Walk Me</p>
        </div>
      </section>
      <section className="py-16 lg:py-20 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black tracking-tighter text-white mb-8">También puede interesarte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Creación de Contenido", href: "/servicios/creacion-de-contenido" },
              { label: "Diseño de Identidad", href: "/servicios/diseno-de-identidad" },
              { label: "Marketing Digital", href: "/servicios/marketing-digital" },
              { label: "Guía: Copy B2B", href: "/blog/copywriting-b2b-guia-practica" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="border border-white/10 px-6 py-4 text-sm text-white/50 hover:text-white hover:border-white/30 transition-colors">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} title="Preguntas sobre copywriting" />
      <CTASection
        title="¿Tus textos podrían trabajar más para ti?"
        subtitle="Mándanos una muestra de lo que tienes ahora y te decimos cómo mejorarlo. Sin compromiso."
        primaryCTA="Enviar el brief"
        secondaryCTA="Ver el blog"
        secondaryHref="/blog"
      />
    </PageLayout>
  );
}
