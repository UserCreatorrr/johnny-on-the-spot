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
          className="absolute inset-0 w-full h-full object-cover video-portrait-rotate"
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
          <p className="text-black/30 text-xs tracking-widest uppercase mb-10">Confían en nosotros</p>
          <div className="flex flex-wrap gap-x-10 gap-y-8 items-center justify-center">
            {[
              { name: "Alcon",            file: "Alcon-Emblem.png",                                          h: 92,  maxW: 92   },
              { name: "Novartis",         file: "novartis.png",                                              h: 66,  maxW: 200  },
              { name: "Coca-Cola",        file: "cocacola.png",                                              h: 90,  maxW: 300  },
              { name: "SAP",              file: "SAP_2011_logo.svg.png",                                     h: 40,  maxW: 100  },
              { name: "Porsche",          file: "porsche-logo-0.png",                                        h: 130, maxW: 130  },
              { name: "Meliá Hotels",     file: "melia-logo.png",                                            h: 99,  maxW: 339  },
              { name: "Puig",             file: "Logo_puig.png",                                             h: 69,  maxW: 180  },
              { name: "Chopard",          file: "chopard-1-logo-png-transparent.png",                        h: 105, maxW: 360  },
              { name: "Carolina Herrera", file: "carolina-herrera-logo-0.png",                               h: 100, maxW: 180  },
              { name: "Haribo",           file: "Haribo-logo.png",                                           h: 46,  maxW: 146  },
              { name: "Glenfiddich",      file: "glenfiddich-logo-png-2-Transparent-Images.png",             h: 60,  maxW: 140  },
              { name: "IKEA",             file: "ikea.png",                                                  h: 70,  maxW: 146  },
              { name: "Perrier",          file: "Perrier_logo.svg.png",                                      h: 50,  maxW: 120  },
              { name: "ISDIN",            file: "isdin.png",                                                 h: 66,  maxW: 200  },
              { name: "Ipsen Farma",      file: "Ipsen_logo.svg.png",                                        h: 46,  maxW: 160  },
              { name: "Coty Prestige",    file: "Coty_Inc_logo_2016.png",                                    h: 70,  maxW: 200  },
              { name: "GFT",              file: "GFT-Technologies_Logo_SafeSpace_DarkBlue_rgb_2025.svg.png", h: 40,  maxW: 180  },
              { name: "Applus",           file: "LOGO-APPLUS.png",                                           h: 40,  maxW: 150  },
              { name: "Walk Me",          file: "walkme-eu-icon-unplated.png",                               h: 120, maxW: 285  },
              { name: "Avianca",          file: "Avianca-Logo.wine.png",                                     h: 90,  maxW: 300  },
            ].map((client) => (
              <div key={client.name} className="flex items-center justify-center">
                <Image
                  src={`/logos/${client.file}`}
                  alt={client.name}
                  width={200}
                  height={50}
                  style={{ height: client.h, maxWidth: client.maxW, width: "auto" }}
                  className="object-contain"
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
