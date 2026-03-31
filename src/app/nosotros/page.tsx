import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import RotatingText from "@/components/RotatingText";

export const metadata: Metadata = {
  title: "Nosotros: Agencia de Comunicación Integral | Johnny on the Spot",
  description:
    "Johnny on the Spot: agencia de comunicación integral en Barcelona. Equipo sénior, red internacional y el modelo de trabajo que hace que los proyectos funcionen.",
  alternates: { canonical: "https://www.johnnyonthespot.es/nosotros" },
};

export default function NosotrosPage() {
  return (
    <PageLayout>

      {/* VIDEO HERO — full screen */}
      <section className="relative w-full h-screen overflow-hidden" aria-label="Agencia Johnny on the Spot">
        <video
          src="https://evolutionapi-video-jots.d4s5yj.easypanel.host/videos/jots-agency.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* ON THE SPOT — texto principal */}
      <section className="py-24 lg:py-36 px-6 lg:px-8 bg-black" aria-labelledby="onthespot-heading">
        <div className="max-w-4xl mx-auto">
          <h1
            id="onthespot-heading"
            className="text-5xl lg:text-7xl font-black tracking-tighter text-white leading-none mb-12"
          >
            On the Spot
          </h1>
          <div className="space-y-6 text-white/55 text-xl lg:text-2xl leading-relaxed">
            <p>
              Somos una agencia de comunicación integral que combina estrategia y creatividad para que tu marca esté siempre en el lugar y el momento exactos.
            </p>
            <p>
              Desde eventos impactantes hasta campañas de publicidad, marketing y relaciones públicas, desarrollamos conceptos y diseñamos experiencias que conectan y dejan huella.
            </p>
            <p>
              En Johnny on the Spot, sabemos que el éxito de un mensaje no depende solo de lo que dices, sino de cuándo, dónde y cómo lo comunicas.
            </p>
          </div>
        </div>
      </section>

      {/* SOMOS — rotating text */}
      <section className="py-24 lg:py-36 px-6 lg:px-8 bg-white" aria-label="Quiénes somos">
        <div className="max-w-4xl mx-auto">
          <p className="text-black/25 text-xs tracking-widest uppercase mb-8">Somos</p>
          <p className="text-4xl lg:text-6xl font-black tracking-tighter text-black leading-tight min-h-[1.2em]">
            <RotatingText />
          </p>
        </div>
      </section>

      {/* NOSOTROS — descripción del equipo */}
      <section className="py-24 lg:py-36 px-6 lg:px-8 bg-black border-t border-white/5" aria-labelledby="equipo-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-white/25 text-xs tracking-widest uppercase mb-6">Nosotros</p>
              <h2
                id="equipo-heading"
                className="text-4xl lg:text-5xl font-black tracking-tighter text-white leading-tight"
              >
                El equipo
              </h2>
            </div>
            <div className="space-y-6 text-white/55 text-lg leading-relaxed">
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
      <section className="py-16 lg:py-24 px-6 lg:px-8 bg-white" aria-label="Clientes">
        <div className="max-w-7xl mx-auto">
          <p className="text-black/30 text-xs tracking-widest uppercase mb-10">Han confiado en nosotros</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              "Alcon", "Novartis", "Coca-Cola", "SAP", "Porsche",
              "Meliá Hotels", "Puig", "Chopard", "Carolina Herrera", "Haribo",
              "Glenfiddich", "IKEA", "Perrier", "ISDIN", "Ipsen Farma",
              "Coty Prestige", "GFT", "Applus", "Walk Me", "Avianca",
            ].map((client) => (
              <div key={client} className="border-b border-black/10 pb-4">
                <p className="text-black/40 text-sm font-medium">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Quieres trabajar con nosotros?"
        subtitle="Cuéntanos el proyecto. Nos ponemos en contacto antes de 24 horas."
        primaryCTA="Hablemos"
        secondaryCTA="Ver casos de éxito"
        secondaryHref="/casos-de-exito"
      />
    </PageLayout>
  );
}
