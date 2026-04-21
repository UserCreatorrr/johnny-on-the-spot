import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import HomeScrollytelling from "@/components/HomeScrollytelling";
import ServicesScrollSection from "@/components/ServicesScrollSection";
import CasesVideoSection from "@/components/CasesVideoSection";
import CTASection from "@/components/CTASection";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { CASES } from "@/lib/data";
import FullPageSection from "@/components/FullPageSection";

export const metadata: Metadata = {
  title: "Johnny on the Spot: Agencia de Comunicación Integral | Barcelona",
  description:
    "Agencia de comunicación integral en Barcelona. Estrategia, creatividad, producción y activación de marca para empresas que no pueden esperar. Alcon, SAP, Coca-Cola, Novartis.",
  alternates: {
    canonical: "https://www.johnnyonthespot.es",
  },
};


export default function HomePage() {
  const featuredCases = CASES.filter((c) => (c as typeof c & { videoUrl?: string }).videoUrl);

  return (
    <>
      <Navigation />
      <main id="main-content" className="bg-black">
        <HeroSection />


        {/* EL NOMBRE */}
        <FullPageSection scrollHeight={220} innerStyle={{ background: "#fff" }}>
          <section data-nav-theme="light" className="relative w-full h-full bg-white" aria-labelledby="intro-heading">
            <Image
              id="intro-heading"
              src="/otp.png"
              alt="Johnny on the Spot — término coloquial"
              fill
              className="object-contain"
              priority
            />
          </section>
        </FullPageSection>

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
        <FullPageSection scrollHeight={210} innerStyle={{ background: "#fff", display: "flex", alignItems: "center" }}>
        <section data-nav-theme="light" className="w-full py-20 lg:py-28 bg-white" aria-label="Cifras clave">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="text-center">
                <p className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none mb-2">
                  +<NumberTicker value={100} className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none" />
                </p>
                <p className="text-black/40 text-sm leading-snug">proyectos producidos</p>
              </div>
              <div className="text-center">
                <p className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none mb-2">
                  <NumberTicker value={20} delay={0.2} className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none" />+
                </p>
                <p className="text-black/40 text-sm leading-snug">años de experiencia acumulada</p>
              </div>
              <div className="text-center">
                <p className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none mb-2">
                  <NumberTicker value={3} delay={0.4} className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none" />
                </p>
                <p className="text-black/40 text-sm leading-snug">continentes con proyectos activos</p>
              </div>
              <div className="text-center">
                <p className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none mb-2">
                  <NumberTicker value={100} delay={0.6} className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none" />%
                </p>
                <p className="text-black/40 text-sm leading-snug">senior en cada proyecto</p>
              </div>
            </div>
          </div>
        </section>
        </FullPageSection>


{/* CTA Final */}
        <div data-nav-theme="dark"><CTASection
          title="¿Tienes un proyecto en mente?"
          subtitle="Cuéntanoslo. Un equipo sénior leerá tu brief hoy y te proponemos una llamada en menos de 24 horas."
          primaryCTA="Hablemos"
          primaryHref="/contacto"
        /></div>
      </main>
      <Footer />
    </>
  );
}
