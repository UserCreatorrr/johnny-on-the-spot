import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Servicios de Comunicación Integral | Johnny on the Spot",
  description:
    "Dirección creativa, diseño de identidad, producción de eventos, activación de marca, marketing digital e IA. Todo bajo un mismo equipo sénior en Barcelona.",
  alternates: {
    canonical: "https://www.johnnyonthespot.es/servicios",
  },
};

export default function ServiciosPage() {
  return (
    <PageLayout>
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Servicios" }]} />
        </div>
      </div>

      <section className="pt-8 pb-16 lg:pb-24 px-6 lg:px-8" aria-labelledby="servicios-heading">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Lo que hacemos</p>
          <h1
            id="servicios-heading"
            className="text-5xl lg:text-7xl font-black tracking-tighter text-white leading-none mb-8 max-w-4xl"
          >
            Servicios de comunicación que funcionan.
          </h1>
          <p className="text-white/40 text-lg lg:text-xl max-w-2xl leading-relaxed">
            No somos especialistas en una sola cosa. Somos la agencia que cubre todo el proceso: desde la estrategia hasta la entrega final. Sin fisuras, sin pérdidas de criterio por el camino.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-20" aria-label="Lista de servicios">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/servicios/${service.slug}`}
                className="bg-black p-10 group hover:bg-white/3 transition-colors border-0"
              >
                <span className="text-white/15 text-3xl mb-8 block font-mono" aria-hidden="true">
                  {service.icon}
                </span>
                <h2 className="text-white font-bold text-xl leading-tight mb-4 group-hover:text-white/90">
                  {service.title}
                </h2>
                <p className="text-white/40 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <span className="text-white/30 text-xs tracking-wide group-hover:text-white/60 transition-colors">
                  Ver servicio →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Necesitas más de un servicio?"
        subtitle="La mayoría de nuestros clientes trabajan con nosotros en varios frentes a la vez. Cuéntanos el alcance y diseñamos la solución más eficiente."
        primaryCTA="Hablemos"
        secondaryCTA="Ver casos de éxito"
      />
    </PageLayout>
  );
}
