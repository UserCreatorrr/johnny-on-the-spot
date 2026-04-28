import type { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
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
        <section data-nav-theme="dark" aria-label="Casos de éxito">
          <CasesVideoSection cases={featuredCases} />
        </section>

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
          title="Donde lo necesites, cuando lo necesites. ¿Empezamos?"
          primaryCTA="Hablemos"
          primaryHref="/contacto"
        /></div>
      </main>
      <Footer />
    </>
  );
}
