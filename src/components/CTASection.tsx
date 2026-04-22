import Link from "next/link";
import SkewButton from "./SkewButton";

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
  subtitle = "",
  primaryCTA = "Hablemos",
  primaryHref = "/contacto",
  secondaryCTA,
  secondaryHref,
  dark = true,
}: CTASectionProps) {
  const bg = dark ? "bg-white" : "bg-black";
  const headingColor = dark ? "text-black" : "text-white";
  const subColor = dark ? "text-black/50" : "text-white/40";
  const btnBg = dark ? "bg-black text-white hover:bg-black/80" : "bg-white text-black hover:bg-white/90";
  const secondaryColor = dark ? "text-black/40 hover:text-black" : "text-white/40 hover:text-white";

  return (
    <section
      className={`min-h-[70vh] flex items-center ${bg}`}
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-24">
        <div className="max-w-3xl">
          <h2
            id="cta-heading"
            className={`text-3xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-6 ${headingColor}`}
          >
            {title}
          </h2>
          {subtitle && (
            <p className={`text-lg leading-relaxed mb-12 max-w-xl ${subColor}`}>
              {subtitle}
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <SkewButton href={primaryHref} dark={dark}>
              {primaryCTA} →
            </SkewButton>
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
