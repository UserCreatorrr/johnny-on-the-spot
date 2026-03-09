import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SOLUTIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Soluciones de Comunicación por Objetivo | Johnny on the Spot",
  description:
    "Lanzamiento de producto, convenciones, identidad corporativa, campañas integrales, activación en POS y formación. Soluciones completas para objetivos concretos.",
  alternates: { canonical: "https://www.johnnyonthespot.es/soluciones" },
};

export default function SolucionesPage() {
  return (
    <PageLayout>
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Soluciones" }]} />
        </div>
      </div>
      <section className="pt-8 pb-16 lg:pb-24 px-6 lg:px-8" aria-labelledby="soluciones-heading">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Soluciones</p>
          <h1 id="soluciones-heading" className="text-5xl lg:text-7xl font-black tracking-tighter text-white leading-none mb-8 max-w-4xl">
            Por objetivo, no por servicio.
          </h1>
          <p className="text-white/40 text-lg lg:text-xl max-w-2xl leading-relaxed">
            A veces el cliente no sabe qué servicio necesita. Sabe qué necesita conseguir. Aquí organizamos nuestro trabajo por objetivo para que encuentres lo que buscas más rápido.
          </p>
        </div>
      </section>
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {SOLUTIONS.map((solution) => (
            <Link
              key={solution.slug}
              href={`/soluciones/${solution.slug}`}
              className="bg-black p-10 group hover:bg-white/3 transition-colors"
            >
              <h2 className="text-white font-bold text-xl leading-tight mb-4 group-hover:text-white/90">
                {solution.title}
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-6">{solution.description}</p>
              <span className="text-white/30 text-xs tracking-wide group-hover:text-white/60 transition-colors">
                Ver solución →
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CTASection
        title="¿No encuentras tu objetivo en la lista?"
        subtitle="Cuéntanoslo. Si podemos ayudarte, diseñamos la solución específica para tu caso."
        primaryCTA="Cuéntanos el proyecto"
        secondaryCTA="Ver servicios"
        secondaryHref="/servicios"
      />
    </PageLayout>
  );
}
