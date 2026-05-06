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

      <section className="flex items-center px-6 lg:px-8" style={{ minHeight: "100vh" }} aria-labelledby="servicios-heading">
        <div className="max-w-7xl mx-auto w-full">
          <div className="lg:w-1/2 py-20 lg:pr-16 max-w-xl">
            <p className="text-white font-black tracking-tighter text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4">
              Servicios
            </p>
            <h1
              id="servicios-heading"
              className="text-2xl lg:text-3xl xl:text-4xl font-light tracking-tight text-white/50 leading-snug"
            >
              Comunicación y eventos que convierten ideas en resultados.
            </h1>
          </div>
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
