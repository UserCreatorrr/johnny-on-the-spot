import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SECTORS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sectores: Agencia de Comunicación por Sector | Johnny on the Spot",
  description:
    "Comunicación especializada por sector: farmacéutico, lujo, tecnología, gran consumo, automoción, hostelería y alimentación. Experiencia real en cada mercado.",
  alternates: { canonical: "https://www.johnnyonthespot.es/sectores" },
};

export default function SectoresPage() {
  return (
    <PageLayout>
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Sectores" }]} />
        </div>
      </div>
      <section className="pt-8 pb-16 lg:pb-24 px-6 lg:px-8" aria-labelledby="sectores-heading">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Sectores</p>
          <h1 id="sectores-heading" className="text-5xl lg:text-7xl font-black tracking-tighter text-white leading-none mb-8 max-w-4xl">
            Sabemos cómo comunicar en tu sector.
          </h1>
          <p className="text-white/40 text-lg lg:text-xl max-w-2xl leading-relaxed">
            Cada industria tiene sus reglas, sus audiencias y sus estándares. No improvisamos cuando llegamos a un sector nuevo: llevamos años trabajando en los mercados que más lo exigen.
          </p>
        </div>
      </section>
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {SECTORS.map((sector) => (
            <Link
              key={sector.slug}
              href={`/sectores/${sector.slug}`}
              className="bg-black p-10 group hover:bg-white/3 transition-colors"
            >
              <h2 className="text-white font-bold text-xl leading-tight mb-4 group-hover:text-white/90">
                {sector.title}
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-6">{sector.description}</p>
              <span className="text-white/30 text-xs tracking-wide group-hover:text-white/60 transition-colors">
                Ver sector →
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CTASection
        title="¿Tu sector no está en la lista?"
        subtitle="Lo más probable es que hayamos trabajado en él. Cuéntanoslo y veremos si podemos ayudarte."
        primaryCTA="Hablemos"
        secondaryCTA="Ver casos de éxito"
      />
    </PageLayout>
  );
}
