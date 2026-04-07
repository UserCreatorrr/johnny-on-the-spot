import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import HomeScrollytelling from "@/components/HomeScrollytelling";
import ServicesScrollSection from "@/components/ServicesScrollSection";
import CasesVideoSection from "@/components/CasesVideoSection";
import VideoReelSection from "@/components/VideoReelSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { CASES, BLOG_POSTS } from "@/lib/data";

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
  const featuredCases = CASES.filter((c) => (c as typeof c & { videoUrl?: string }).videoUrl);
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <>
      <Navigation />
      <main id="main-content" className="bg-black">
        <HeroSection />
        <VideoReelSection />


        {/* EL NOMBRE */}
        <section data-nav-theme="light" className="relative w-full bg-white" aria-labelledby="intro-heading" style={{ height: "100vh" }}>
          <Image
            id="intro-heading"
            src="/otp.png"
            alt="Johnny on the Spot — término coloquial"
            fill
            className="object-contain"
            priority
          />
        </section>

        {/* CASOS DE ÉXITO */}
        <section data-nav-theme="dark" className="border-t border-white/5" aria-labelledby="cases-heading">
          {/* Header */}
          <div className="px-6 lg:px-8 pt-20 lg:pt-28 pb-10 max-w-7xl mx-auto flex items-end justify-between">
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

          <CasesVideoSection cases={featuredCases} />
        </section>

        {/* SCROLLYTELLING: SERVICIOS */}
        <div data-nav-theme="dark"><HomeScrollytelling /></div>

        {/* SERVICIOS — horizontal scroll driven by vertical scroll */}
        <ServicesScrollSection />

        {/* CIFRAS */}
        <section data-nav-theme="light" className="py-20 lg:py-28 bg-white" aria-label="Cifras clave">
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

        {/* DIFERENCIAL */}
        <section data-nav-theme="light" className="py-20 lg:py-28 px-6 lg:px-8 bg-white" aria-labelledby="diferencial-heading">
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
        <section data-nav-theme="light" className="py-20 lg:py-28 px-6 lg:px-8 bg-white border-t border-black/5" aria-labelledby="blog-heading">
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
        <div data-nav-theme="dark"><FAQSection faqs={homeFaqs} title="Preguntas que nos hacen siempre" /></div>

        {/* CTA Final */}
        <div data-nav-theme="dark"><CTASection
          title="¿Tienes un proyecto urgente?"
          subtitle="Perfecto. Somos Johnny on the Spot. Cuéntanoslo hoy y trabajamos mañana."
          primaryCTA="Hablemos ahora"
          secondaryCTA="Ver casos de éxito"
          primaryHref="/contacto"
          secondaryHref="/casos-de-exito"
        /></div>
      </main>
      <Footer />
    </>
  );
}
