import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CASES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Casos de Éxito — Proyectos Reales | Johnny on the Spot",
  description:
    "Proyectos reales con resultados reales. Alcon, SAP, Coca-Cola, Puig, Novartis, Meliá, Chopard. Comunicación integral que ha funcionado.",
  alternates: { canonical: "https://www.johnnyonthespot.es/casos-de-exito" },
};

export default function CasosDeExitoPage() {
  return (
    <PageLayout>
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Casos de Éxito" }]} />
        </div>
      </div>
      <section className="pt-8 pb-16 lg:pb-24 px-6 lg:px-8" aria-labelledby="casos-heading">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Casos de éxito</p>
          <h1 id="casos-heading" className="text-5xl lg:text-7xl font-black tracking-tighter text-white leading-none mb-8 max-w-4xl">
            Proyectos reales.<br />Resultados reales.
          </h1>
          <p className="text-white/40 text-lg lg:text-xl max-w-2xl leading-relaxed">
            No mostramos mockups ni proyectos ficticios. Todo lo que ves aquí ha pasado por producción y ha llegado al mercado.
          </p>
        </div>
      </section>
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
          {CASES.map((c, i) => (
            <Link
              key={c.slug}
              href={`/casos/${c.slug}`}
              className={`bg-black p-10 group hover:bg-white/3 transition-colors ${i === 0 ? "lg:row-span-2" : ""}`}
              style={i === 0 ? { minHeight: "480px", display: "flex", flexDirection: "column", justifyContent: "flex-end" } : {}}
            >
              <p className="text-white/25 text-xs tracking-widest uppercase mb-4">{c.client}</p>
              <h2 className="text-white font-black text-2xl lg:text-3xl tracking-tight leading-snug mb-3 group-hover:text-white/90 transition-colors">
                {c.title}
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-6">{c.description}</p>
              {c.results && (
                <p className="text-white/20 text-xs mb-6">{c.results}</p>
              )}
              <div className="flex flex-wrap gap-2">
                {c.services.map((s) => (
                  <span key={s} className="text-white/25 text-xs border border-white/10 px-3 py-1">{s}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CTASection
        title="¿Quieres ser el próximo caso de éxito?"
        subtitle="Cuéntanos el proyecto. Trabajamos para que el resultado merezca estar aquí."
        primaryCTA="Hablemos"
        secondaryCTA="Ver servicios"
        secondaryHref="/servicios"
      />
    </PageLayout>
  );
}
