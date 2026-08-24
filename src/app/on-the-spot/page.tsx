import type { Metadata } from "next";
import OtsIndexTemplate from "@/components/ots/OtsIndexTemplate";

export const metadata: Metadata = {
  title: "On The Spot: Proyectos y casos de éxito",
  description:
    "Más de treinta proyectos para Alcon, Novartis, Coca-Cola, Porsche, Puig, Chopard, IKEA o SAP. Eventos, campañas, activaciones, identidad y vídeo.",
  alternates: {
    canonical: "https://www.johnnyonthespot.es/on-the-spot",
    languages: {
      es: "https://www.johnnyonthespot.es/on-the-spot",
      en: "https://www.johnnyonthespot.es/en/on-the-spot",
    },
  },
};

export default function OnTheSpotPage() {
  return <OtsIndexTemplate locale="es" />;
}
