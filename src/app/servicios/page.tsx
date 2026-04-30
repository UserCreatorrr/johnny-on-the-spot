import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import HomeScrollytelling from "@/components/HomeScrollytelling";
import SkewButton from "@/components/SkewButton";

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
            className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tighter text-white leading-none mb-8"
          >
            Servicios de comunicación que funcionan.
          </h1>
        </div>
      </section>

      <HomeScrollytelling />

      <div className="py-24 px-6 lg:px-8 flex justify-center">
        <SkewButton href="/contacto" dark={false} uppercase={false}>
          Call Johnny →
        </SkewButton>
      </div>
    </PageLayout>
  );
}
