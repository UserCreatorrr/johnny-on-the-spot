import Link from "next/link";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: string;
  primaryHref?: string;
  secondaryCTA?: string;
  secondaryHref?: string;
  dark?: boolean;
}

export default function CTASection({
  title = "¿Tienes un proyecto en mente?",
  subtitle = "Cuéntanoslo. Un equipo sénior leerá tu brief hoy y te proponemos una llamada en menos de 24 horas.",
  primaryCTA = "Hablemos",
  primaryHref = "/contacto",
  secondaryCTA,
  secondaryHref,
  dark = true,
}: CTASectionProps) {
  const bg = dark ? "bg-black" : "bg-white";
  const headingColor = dark ? "text-white" : "text-black";
  const subColor = dark ? "text-white/40" : "text-black/50";
  const btnBg = dark ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/80";
  const secondaryColor = dark ? "text-white/40 hover:text-white" : "text-black/40 hover:text-black";

  return (
    <section
      className={`min-h-[70vh] flex items-center ${bg} border-t ${dark ? "border-white/10" : "border-black/10"}`}
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-24">
        <div className="max-w-3xl">
          <h2
            id="cta-heading"
            className={`text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-6 ${headingColor}`}
          >
            {title}
          </h2>
          <p className={`text-lg leading-relaxed mb-12 max-w-xl ${subColor}`}>
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href={primaryHref}
              className={`inline-block px-8 py-4 text-sm font-semibold tracking-wide transition-colors ${btnBg}`}
            >
              {primaryCTA} →
            </Link>
            {secondaryCTA && secondaryHref && (
              <Link
                href={secondaryHref}
                className={`inline-block px-2 py-4 text-sm transition-colors underline underline-offset-4 ${secondaryColor}`}
              >
                {secondaryCTA}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
