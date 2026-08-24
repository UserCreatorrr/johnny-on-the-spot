import type { Metadata } from "next";
import OtsIndexTemplate from "@/components/ots/OtsIndexTemplate";

export const metadata: Metadata = {
  title: "On The Spot: Projects and case studies",
  description:
    "More than thirty projects for Alcon, Novartis, Coca-Cola, Porsche, Puig, Chopard, IKEA and SAP. Events, campaigns, activations, identity and video.",
  alternates: {
    canonical: "https://www.johnnyonthespot.es/en/on-the-spot",
    languages: {
      es: "https://www.johnnyonthespot.es/on-the-spot",
      en: "https://www.johnnyonthespot.es/en/on-the-spot",
    },
  },
};

export default function OnTheSpotPageEn() {
  return <OtsIndexTemplate locale="en" />;
}
