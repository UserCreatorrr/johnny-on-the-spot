import Link from "next/link";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  primaryHref?: string;
  secondaryHref?: string;
  dark?: boolean;
}

export default function CTASection({
  title = "¿Tienes un proyecto en mente?",
  subtitle = "Cuéntanoslo. Sin formularios innecesarios, sin esperas. Un equipo senior leerá tu brief hoy.",
  primaryCTA = "Hablemos",
  secondaryCTA = "Ver casos de éxito",
  primaryHref = "/contacto",
  secondaryHref = "/casos-de-exito",
  dark = true,
}: CTASectionProps) {
  return (
    <section
      className={`py-20 lg:py-32 ${dark ? "bg-white" : "bg-black"}`}
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2
            id="cta-heading"
            className={`text-4xl lg:text-5xl font-black tracking-tighter leading-none mb-6 ${
              dark ? "text-black" : "text-white"
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-lg lg:text-xl leading-relaxed mb-10 ${
              dark ? "text-black/60" : "text-white/50"
            }`}
          >
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={primaryHref}
              className={`inline-block px-8 py-4 text-sm font-medium tracking-wide transition-colors ${
                dark
                  ? "bg-black text-white hover:bg-black/80"
                  : "bg-white text-black hover:bg-white/90"
              }`}
            >
              {primaryCTA}
            </Link>
            <Link
              href={secondaryHref}
              className={`inline-block px-8 py-4 text-sm font-medium tracking-wide border transition-colors ${
                dark
                  ? "border-black/20 text-black/70 hover:border-black hover:text-black"
                  : "border-white/20 text-white/60 hover:border-white hover:text-white"
              }`}
            >
              {secondaryCTA}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
