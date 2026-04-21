import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Nosotros: Agencia de Comunicación Integral | Johnny on the Spot",
  description:
    "Johnny on the Spot: agencia de comunicación integral en Barcelona. Equipo sénior, red internacional y el modelo de trabajo que hace que los proyectos funcionen.",
  alternates: { canonical: "https://www.johnnyonthespot.es/nosotros" },
};

export default function NosotrosPage() {
  return (
    <PageLayout>

      {/* VIDEO — reemplaza la sección SOMOS */}
      <section className="sticky top-0 h-screen overflow-hidden" data-nav-theme="light" aria-label="Quiénes somos">
        <video
          src="https://evolutionapi-video-jots.d4s5yj.easypanel.host/JotsCut.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* NOSOTROS — descripción del equipo */}
      <section className="sticky top-0 h-screen flex items-center px-6 lg:px-8 bg-black overflow-hidden" aria-labelledby="equipo-heading">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-white/25 text-xs tracking-widest uppercase mb-6">Nosotros</p>
              <h2
                id="equipo-heading"
                className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-tight"
              >
                El equipo
              </h2>
            </div>
            <div className="space-y-4 text-white/55 text-sm lg:text-lg leading-relaxed">
              <p>
                Somos un equipo multidisciplinar y versátil con una amplia experiencia en el Universo de la Comunicación y los Eventos.
              </p>
              <p>
                Cada proyecto implica la creación de un equipo ad hoc, formado por las personas que mejor se ajustan al perfil de cada cliente.
              </p>
              <p>
                Planificamos con precisión, pero también sabemos adaptarnos y reaccionar en tiempo real, porque en comunicación, la improvisación es parte de la Estrategia.
              </p>
              <p>
                Multiplicamos nuestras capacidades a través de aliados de nuestra red internacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="sticky top-0 h-screen flex items-center px-6 lg:px-8 bg-white overflow-hidden" aria-label="Clientes">
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-black/30 text-xs tracking-widest uppercase mb-10">Han confiado en nosotros</p>
          <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-10 gap-6 items-center">
            {[
              { name: "Alcon",          file: "Alcon-Emblem.png" },
              { name: "Novartis",       file: "novartis.png" },
              { name: "Coca-Cola",      file: "cocacola.png" },
              { name: "SAP",            file: "SAP_2011_logo.svg.png" },
              { name: "Porsche",        file: "porsche-logo-0.png" },
              { name: "Meliá Hotels",   file: "melia-logo.png" },
              { name: "Puig",           file: "Logo_puig.png" },
              { name: "Chopard",        file: "chopard-1-logo-png-transparent.png" },
              { name: "Carolina Herrera", file: "carolina-herrera-logo-0.png" },
              { name: "Haribo",         file: "Haribo-logo.png" },
              { name: "Glenfiddich",    file: "glenfiddich-logo-png-2-Transparent-Images.png" },
              { name: "IKEA",           file: "ikea.png" },
              { name: "Perrier",        file: "Perrier_logo.svg.png" },
              { name: "ISDIN",          file: "isdin.png" },
              { name: "Ipsen Farma",    file: "Ipsen_logo.svg.png" },
              { name: "Coty Prestige",  file: "Coty_Inc_logo_2016.png" },
              { name: "GFT",            file: "GFT-Technologies_Logo_SafeSpace_DarkBlue_rgb_2025.svg.png" },
              { name: "Applus",         file: "LOGO-APPLUS.png" },
              { name: "Walk Me",        file: "walkme-eu-icon-unplated.png" },
              { name: "Avianca",        file: "Avianca-Logo.wine.png" },
            ].map((client) => (
              <div key={client.name} className="flex items-center justify-center w-20 h-10">
                <Image
                  src={`/logos/${client.file}`}
                  alt={client.name}
                  width={80}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Tienes un reto de comunicación?"
        primaryCTA="Hablemos de tu proyecto"
        secondaryCTA="Ver servicios"
        secondaryHref="/servicios"
      />
    </PageLayout>
  );
}
