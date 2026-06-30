import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import HomeScrollytelling from "@/components/HomeScrollytelling";
import SkewButton from "@/components/SkewButton";

export const metadata: Metadata = {
  title: "Full-Service Communication Services | Johnny on the Spot",
  description:
    "Creative direction, brand identity, event production, brand activation, digital marketing and AI. All under one senior team in Barcelona.",
  alternates: {
    canonical: "https://www.johnnyonthespot.es/en/servicios",
  },
};

export default function ServiciosPageEn() {
  return (
    <PageLayout locale="en">
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Services" }]} locale="en" />
        </div>
      </div>

      <section className="flex items-center px-6 lg:px-8" style={{ minHeight: "100vh" }} aria-labelledby="servicios-heading">
        <div className="max-w-7xl mx-auto w-full">
          <div className="lg:w-1/2 py-20 lg:pr-16 max-w-xl">
            <p className="text-white font-black tracking-tighter text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4">
              Services
            </p>
            <h1
              id="servicios-heading"
              className="text-2xl lg:text-3xl xl:text-4xl font-light tracking-tight text-white/50 leading-snug"
            >
              Communication and events that turn ideas into results.
            </h1>
          </div>
        </div>
      </section>

      <HomeScrollytelling locale="en" />

      <div className="py-24 px-6 lg:px-8 flex justify-center">
        <SkewButton href="/en/contacto" dark={false} uppercase={false}>
          Call Johnny →
        </SkewButton>
      </div>
    </PageLayout>
  );
}
