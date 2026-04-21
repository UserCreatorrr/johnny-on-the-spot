import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Nosotros: Agencia de Comunicación Integral | Johnny on the Spot",
  description:
    "Johnny on the Spot: agencia de comunicación integral en Barcelona. Equipo sénior, red internacional y el modelo de trabajo que hace que los proyectos funcionen.",
  alternates: { canonical: "https://www.johnnyonthespot.es/nosotros" },
};

export default function NosotrosPage() {
  return (
    <PageLayout>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src="https://evolutionapi-video-jots.d4s5yj.easypanel.host/JotsCut.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </PageLayout>
  );
}
