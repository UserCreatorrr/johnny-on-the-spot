import type { Metadata } from "next";
import HtmlLang from "@/components/HtmlLang";

export const metadata: Metadata = {
  title: {
    default: "Johnny on the Spot: Full-Service Communications Agency | Barcelona",
    template: "%s | Johnny on the Spot",
  },
  description:
    "Full-service communications agency in Barcelona. Strategy, creativity, production and brand activation for companies that can't wait. Multidisciplinary. Senior. Decisive.",
  alternates: {
    canonical: "https://www.johnnyonthespot.es/en",
    languages: {
      es: "https://www.johnnyonthespot.es",
      en: "https://www.johnnyonthespot.es/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.johnnyonthespot.es/en",
    siteName: "Johnny on the Spot",
    title: "Johnny on the Spot: Full-Service Communications Agency | Barcelona",
    description:
      "Full-service communications agency in Barcelona. Strategy, creativity, production and brand activation for companies that can't wait.",
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlLang locale="en" />
      {children}
    </>
  );
}
