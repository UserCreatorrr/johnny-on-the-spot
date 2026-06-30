import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "About: Full-Service Communications Agency | Johnny on the Spot",
  description:
    "Johnny on the Spot: full-service communications agency in Barcelona. Senior team, international network and the working model that makes projects succeed.",
  alternates: { canonical: "https://www.johnnyonthespot.es/en/nosotros" },
};

export default function NosotrosPageEn() {
  return (
    <PageLayout locale="en">

      {/* VIDEO */}
      <section className="lg:sticky lg:top-0 h-screen overflow-hidden" data-nav-theme="light" aria-label="Who we are">
        <video
          src="/videos/jots-cut.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover video-portrait-fit"
        />
      </section>

      {/* ABOUT — team description */}
      <section className="lg:sticky lg:top-0 lg:h-screen flex items-center px-6 lg:px-8 bg-black lg:overflow-hidden py-20 lg:py-0" aria-labelledby="equipo-heading">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-white/25 text-xs tracking-widest uppercase mb-6">About</p>
              <h2
                id="equipo-heading"
                className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter text-white leading-tight"
              >
                The team
              </h2>
            </div>
            <div className="space-y-4 text-white/80 text-base lg:text-2xl leading-relaxed">
              <p>
                We&apos;re a multidisciplinary, versatile team with broad experience across the Universe of Communications and Events.
              </p>
              <p>
                Every project means building an ad hoc team, made up of the people who best fit each client&apos;s profile.
              </p>
              <p>
                We plan with precision, but we also know how to adapt and react in real time — because in communications, improvisation is part of the Strategy.
              </p>
              <p>
                We multiply our capabilities through allies in our international network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden flex items-center px-6 lg:px-8 bg-white py-20 lg:py-0" aria-label="Clients">
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-black/30 text-xs tracking-widest uppercase mb-10">They trust us</p>
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

    </PageLayout>
  );
}
