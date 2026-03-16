import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomeScrollytelling from "@/components/HomeScrollytelling";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { TypingAnimation } from "@/components/ui/TypingAnimation";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { SERVICES, CASES, BLOG_POSTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Johnny on the Spot: Agencia de Comunicación Integral | Barcelona",
  description:
    "Agencia de comunicación integral en Barcelona. Estrategia, creatividad, producción y activación de marca para empresas que no pueden esperar. Alcon, SAP, Coca-Cola, Novartis.",
  alternates: {
    canonical: "https://www.johnnyonthespot.es",
  },
};

const homeFaqs = [
  {
    question: "¿Qué significa agencia de comunicación integral?",
    answer:
      "Significa que hacemos todo bajo el mismo techo: desde la estrategia hasta la producción final, pasando por la creatividad, el diseño, el copy, los eventos o el marketing digital. No coordinamos proveedores distintos con criterios distintos. Un equipo, una dirección, un resultado coherente.",
  },
  {
    question: "¿Cuál es vuestro proceso de trabajo?",
    answer:
      "Empezamos por entender el problema real. Después diseñamos la solución más eficiente no la más cara ni la más aparente. Y luego producimos con el estándar más alto que el presupuesto permita. Cada proyecto tiene un partner senior responsable del principio al final.",
  },
  {
    question: "¿Trabajáis solo con grandes empresas?",
    answer:
      "Hemos trabajado con Coca-Cola, SAP, Novartis y Porsche, sí. Pero también con startups y empresas medianas que quieren comunicar como las grandes. El criterio no es el tamaño de la empresa, sino la ambición del proyecto.",
  },
  {
    question: "¿Cuánto cuesta trabajar con vosotros?",
    answer:
      "Depende del alcance. Tenemos proyectos desde pocas semanas de trabajo hasta producciones que duran meses. Lo que garantizamos en todos los casos es transparencia presupuestaria desde el principio y ningún coste oculto.",
  },
  {
    question: "¿Podéis haceros cargo de un proyecto con poco tiempo?",
    answer:
      "Sí. De hecho, es una de nuestras señas de identidad. Johnny on the Spot no es solo un nombre: es una promesa operativa. Somos la agencia a la que llamas cuando el tiempo aprieta y no puedes arriesgar.",
  },
];

export default function HomePage() {
  const featuredCases = CASES.slice(0, 4);
  const featuredServices = SERVICES.slice(0, 8);
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <>
      <Navigation />
      <main id="main-content" className="bg-black">
        {/* HERO */}
        <section
          className="relative min-h-screen flex flex-col justify-center px-6 lg:px-8 pt-20 pb-32"
          aria-labelledby="hero-heading"
        >
          <div className="max-w-7xl mx-auto w-full">
            {/* Large logo */}
            <div className="mb-16 lg:mb-20">
              <Image
                src="/logo-white.png"
                alt="Johnny on the Spot"
                width={600}
                height={180}
                className="w-auto h-16 lg:h-28 xl:h-36 object-contain"
                priority
              />
            </div>

            <div className="max-w-5xl">
              <TypingAnimation
                as="h1"
                id="hero-heading"
                className="text-6xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-none text-white mb-8 block"
                startOnView={false}
                duration={60}
                showCursor={true}
              >
                A mano cuando se necesita.
              </TypingAnimation>
              <p className="text-white/50 text-lg lg:text-2xl max-w-2xl leading-relaxed mb-12">
                Estrategia, creatividad y producción bajo un mismo techo. Para empresas que no pueden esperar ni permitirse errores.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  href="/contacto"
                  className="bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
                >
                  Cuéntanos el proyecto
                </Link>
                <Link
                  href="/casos-de-exito"
                  className="text-white/60 px-8 py-4 text-sm font-medium tracking-wide border border-white/20 hover:border-white/60 hover:text-white transition-colors"
                >
                  Ver casos de éxito
                </Link>
              </div>
            </div>
          </div>

          {/* Credential strip */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 py-4 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <p className="text-white/15 text-xs tracking-widest uppercase">
                Alcon · Novartis · Coca-Cola · SAP · Porsche · Meliá · Puig · Chopard · Carolina Herrera · Haribo · Glenfiddich · IKEA · Perrier · ISDIN
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20 lg:py-28 px-6 lg:px-8 bg-white border-t border-black/5" aria-labelledby="intro-heading">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
              <div>
                <p className="text-black/30 text-xs tracking-widest uppercase mb-6">On the Spot</p>
                <h2
                  id="intro-heading"
                  className="text-4xl lg:text-5xl font-black tracking-tighter text-black leading-tight"
                >
                  Somos una agencia de comunicación integral que combina estrategia y creatividad.
                </h2>
              </div>
              <div>
                <p className="text-black/50 text-lg leading-relaxed">
                  Para que tu marca esté siempre en el lugar y el momento exactos. Desde eventos impactantes hasta campañas de publicidad, marketing y relaciones públicas, desarrollamos conceptos y diseñamos experiencias que conectan y dejan huella.
                </p>
                <p className="text-black/50 text-lg leading-relaxed mt-4">
                  El éxito de un mensaje no depende solo de lo que dices, sino de cuándo, dónde y cómo lo comunicas.
                </p>
                <Link
                  href="/nosotros"
                  className="mt-8 inline-block text-sm text-black/50 hover:text-black border-b border-black/20 hover:border-black transition-colors pb-0.5"
                >
                  Conoce el equipo →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SCROLLYTELLING: SERVICIOS */}
        <HomeScrollytelling />

        {/* SERVICIOS GRID */}
        <section className="py-20 lg:py-28 px-6 lg:px-8 border-t border-white/5" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-3">Servicios</p>
                <h2
                  id="services-heading"
                  className="text-4xl lg:text-5xl font-black tracking-tighter text-white"
                >
                  Todo lo que necesitas,
                  <br />
                  sin depender de nadie más.
                </h2>
              </div>
              <Link
                href="/servicios"
                className="hidden lg:block text-sm text-white/40 hover:text-white border-b border-white/10 hover:border-white/40 transition-colors pb-0.5"
              >
                Ver todos →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
              {featuredServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/servicios/${service.slug}`}
                  className="bg-black p-8 group hover:bg-white/3 transition-colors"
                >
                  <span className="text-white/20 text-2xl mb-6 block font-mono" aria-hidden="true">
                    {service.icon}
                  </span>
                  <h3 className="text-white font-bold text-lg leading-tight mb-3 group-hover:text-white transition-colors">
                    {service.shortTitle}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center lg:hidden">
              <Link
                href="/servicios"
                className="text-sm text-white/50 hover:text-white border border-white/20 px-6 py-3 inline-block transition-colors"
              >
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </section>

        {/* CIFRAS */}
        <section className="py-20 lg:py-28 bg-white" aria-label="Cifras clave">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              <div>
                <p className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none mb-2">
                  +<NumberTicker value={100} className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none" />
                </p>
                <p className="text-black/40 text-sm leading-snug">proyectos producidos</p>
              </div>
              <div>
                <p className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none mb-2">
                  <NumberTicker value={20} delay={0.2} className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none" />+
                </p>
                <p className="text-black/40 text-sm leading-snug">años de experiencia acumulada</p>
              </div>
              <div>
                <p className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none mb-2">
                  <NumberTicker value={3} delay={0.4} className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none" />
                </p>
                <p className="text-black/40 text-sm leading-snug">continentes con proyectos activos</p>
              </div>
              <div>
                <p className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none mb-2">
                  <NumberTicker value={100} delay={0.6} className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none" />%
                </p>
                <p className="text-black/40 text-sm leading-snug">senior en cada proyecto</p>
              </div>
            </div>
          </div>
        </section>

        {/* CASOS DE ÉXITO */}
        <section className="py-20 lg:py-28 px-6 lg:px-8 border-t border-white/5" aria-labelledby="cases-heading">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-3">Casos de éxito</p>
                <h2
                  id="cases-heading"
                  className="text-4xl lg:text-5xl font-black tracking-tighter text-white"
                >
                  Proyectos reales.
                  <br />
                  Resultados reales.
                </h2>
              </div>
              <Link
                href="/casos-de-exito"
                className="hidden lg:block text-sm text-white/40 hover:text-white border-b border-white/10 hover:border-white/40 transition-colors pb-0.5"
              >
                Ver todos →
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
              {featuredCases.map((c) => (
                <Link
                  key={c.slug}
                  href={`/casos/${c.slug}`}
                  className="bg-black p-10 group hover:bg-white/3 transition-colors flex flex-col justify-between"
                  style={{ minHeight: "320px" }}
                >
                  <div>
                    <p className="text-white/25 text-xs tracking-widest uppercase mb-4">
                      {c.client}
                    </p>
                    <h3 className="text-white font-black text-xl lg:text-2xl tracking-tight leading-snug mb-3 group-hover:text-white/90 transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-6">
                      {c.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {c.services.map((s) => (
                        <span
                          key={s}
                          className="text-white/25 text-xs border border-white/10 px-3 py-1"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* DIFERENCIAL */}
        <section className="py-20 lg:py-28 px-6 lg:px-8 bg-white" aria-labelledby="diferencial-heading">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-16">
              <h2
                id="diferencial-heading"
                className="text-4xl lg:text-5xl font-black tracking-tighter text-black leading-tight"
              >
                Lo que nos hace diferentes
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {[
                {
                  num: "01",
                  title: "Equipo senior en todos los proyectos",
                  body: "No eres el proyecto de prácticas de nadie. Cada cuenta tiene un partner sénior responsable. Siempre.",
                },
                {
                  num: "02",
                  title: "Multidisciplinar de verdad",
                  body: "Estrategia, creatividad, producción, digital, eventos. No subcontratamos lo que no sabemos hacer. Lo hacemos.",
                },
                {
                  num: "03",
                  title: "Red internacional activa",
                  body: "Proyectos en Europa, América y Oriente Medio. Proveedores locales en cada mercado. Sin costes de agencia intermediaria.",
                },
              ].map((item) => (
                <div key={item.num} className="border-t border-black/10 pt-8">
                  <p className="text-black/20 text-sm font-mono mb-4">{item.num}</p>
                  <h3 className="text-black font-black text-xl tracking-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="text-black/50 text-base leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section className="py-20 lg:py-28 px-6 lg:px-8 bg-white border-t border-black/5" aria-labelledby="blog-heading">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-black/30 text-xs tracking-widest uppercase mb-3">Blog</p>
                <h2
                  id="blog-heading"
                  className="text-4xl lg:text-5xl font-black tracking-tighter text-black"
                >
                  Criterio sobre comunicación.
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden lg:block text-sm text-black/40 hover:text-black border-b border-black/10 hover:border-black/40 transition-colors pb-0.5"
              >
                Ver todos →
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-black/5">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white p-8 group hover:bg-black/[0.02] transition-colors"
                >
                  <p className="text-black/25 text-xs tracking-widest uppercase mb-4">
                    {post.category} · {post.readingTime} min
                  </p>
                  <h3 className="text-black font-bold text-lg leading-snug mb-3 group-hover:text-black/70 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-black/40 text-sm leading-relaxed">
                    {post.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQSection faqs={homeFaqs} title="Preguntas que nos hacen siempre" />

        {/* CTA Final */}
        <CTASection
          title="¿Tienes un proyecto urgente?"
          subtitle="Perfecto. Somos Johnny on the Spot. Cuéntanoslo hoy y trabajamos mañana."
          primaryCTA="Hablemos ahora"
          secondaryCTA="Ver casos de éxito"
          primaryHref="/contacto"
          secondaryHref="/casos-de-exito"
        />
      </main>
      <Footer />
    </>
  );
}
