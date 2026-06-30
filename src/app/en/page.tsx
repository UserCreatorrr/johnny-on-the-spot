import type { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import CasesVideoSection from "@/components/CasesVideoSection";
import CTASection from "@/components/CTASection";
import { NumberTicker } from "@/components/ui/NumberTicker";
import FullPageSection from "@/components/FullPageSection";

export const metadata: Metadata = {
  title: "Johnny on the Spot: Full-Service Communications Agency | Barcelona",
  description:
    "Full-service communications agency in Barcelona. Strategy, creativity, production and brand activation for companies that can't wait. Alcon, SAP, Coca-Cola, Novartis.",
  alternates: { canonical: "https://www.johnnyonthespot.es/en" },
};

const featuredCases = [
  { slug: "alcon-hydra-glide", client: "Alcon", title: "Hydraglide Family", videoUrl: "/videos/sitcom_alcon.mp4" },
  { slug: "sd-distribuciones-sand-games", client: "SD Distribuciones", title: "The Sand Games", videoUrl: "/videos/sandgames.mp4", previewVideoUrl: "/videos/sdcut.mp4" },
  { slug: "cocacola-kfc-together", client: "Coca-Cola x KFC", title: "Together: Coca-Cola x KFC", videoUrl: "/videos/cocacola.mp4" },
  { slug: "novartis-transplant-tomorrow", client: "Novartis", title: "Transplant Tomorrow: Tomorrow Starts Today", videoUrl: "/videos/novartis.mp4" },
];

export default function HomePageEn() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="bg-black">
        <HeroSection locale="en" />

        {/* THE NAME */}
        <FullPageSection scrollHeight={220} innerStyle={{ background: "#fff" }}>
          <section data-nav-theme="light" className="relative w-full h-full bg-white" aria-labelledby="intro-heading">
            <Image
              id="intro-heading"
              src="/otp.png"
              alt="Johnny on the Spot — colloquial term"
              fill
              className="object-contain"
              priority
            />
          </section>
        </FullPageSection>

        {/* CASE STUDIES */}
        <section data-nav-theme="dark" aria-label="Case studies">
          <CasesVideoSection cases={featuredCases} />
        </section>

        {/* NUMBERS */}
        <FullPageSection scrollHeight={210} innerStyle={{ background: "#fff", display: "flex", alignItems: "center" }}>
        <section data-nav-theme="light" className="w-full py-20 lg:py-28 bg-white" aria-label="Key figures">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="text-center">
                <p className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none mb-2">
                  +<NumberTicker value={100} className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none" />
                </p>
                <p className="text-black/40 text-sm leading-snug">projects produced</p>
              </div>
              <div className="text-center">
                <p className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none mb-2">
                  <NumberTicker value={20} delay={0.2} className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none" />+
                </p>
                <p className="text-black/40 text-sm leading-snug">years of combined experience</p>
              </div>
              <div className="text-center">
                <p className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none mb-2">
                  <NumberTicker value={3} delay={0.4} className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none" />
                </p>
                <p className="text-black/40 text-sm leading-snug">continents with active projects</p>
              </div>
              <div className="text-center">
                <p className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none mb-2">
                  <NumberTicker value={100} delay={0.6} className="text-black font-black text-5xl lg:text-6xl tracking-tighter leading-none" />%
                </p>
                <p className="text-black/40 text-sm leading-snug">senior on every project</p>
              </div>
            </div>
          </div>
        </section>
        </FullPageSection>

        {/* Final CTA */}
        <div data-nav-theme="dark"><CTASection
          title={<><span className="block">Wherever you need it,<br />whenever you need it.</span><span className="block mt-6">Shall we start?</span></>}
          primaryCTA="Call Johnny"
          primaryHref="/en/contacto"
          largeCTA
        /></div>
      </main>
      <Footer locale="en" />
    </>
  );
}
