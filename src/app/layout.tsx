import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Johnny on the Spot: Agencia de Comunicación Integral | Barcelona",
    template: "%s | Johnny on the Spot",
  },
  description:
    "Agencia de comunicación integral en Barcelona. Estrategia, creatividad, producción y activación de marca para empresas que no pueden esperar. Multidisciplinar. Senior. Resolutiva.",
  keywords: [
    "agencia comunicación integral Barcelona",
    "agencia publicidad Barcelona",
    "producción eventos corporativos",
    "diseño identidad corporativa",
    "activación de marca",
    "marketing integral",
    "estrategia comunicación empresas",
  ],
  authors: [{ name: "Johnny on the Spot" }],
  creator: "Johnny on the Spot",
  publisher: "Johnny on the Spot",
  metadataBase: new URL("https://www.johnnyonthespot.es"),
  alternates: {
    canonical: "https://www.johnnyonthespot.es",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.johnnyonthespot.es",
    siteName: "Johnny on the Spot",
    title: "Johnny on the Spot: Agencia de Comunicación Integral | Barcelona",
    description:
      "Agencia de comunicación integral en Barcelona. Estrategia, creatividad, producción y activación de marca para empresas que no pueden esperar.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Johnny on the Spot: Agencia de Comunicación Integral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Johnny on the Spot: Agencia de Comunicación Integral | Barcelona",
    description:
      "Agencia de comunicación integral en Barcelona. Estrategia, creatividad, producción y activación de marca para empresas que no pueden esperar.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Johnny on the Spot",
  url: "https://www.johnnyonthespot.es",
  logo: "https://www.johnnyonthespot.es/logo.svg",
  description:
    "Agencia de comunicación integral en Barcelona. Estrategia, creatividad, producción y activación de marca.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barcelona",
    addressCountry: "ES",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hola@johnnyonthespot.es",
    availableLanguage: ["Spanish", "English"],
  },
  sameAs: [
    "https://www.linkedin.com/company/johnnyonthespot",
    "https://www.instagram.com/johnnyonthespot",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Johnny on the Spot",
  url: "https://www.johnnyonthespot.es",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.johnnyonthespot.es/buscar?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
