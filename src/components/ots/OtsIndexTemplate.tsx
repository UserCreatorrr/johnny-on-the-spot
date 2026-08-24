import PageLayout from "@/components/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SkewButton from "@/components/SkewButton";
import OtsGrid from "./OtsGrid";
import { OTS_PROJECTS, usedCategories } from "@/lib/on-the-spot";
import { type Locale, localizeHref } from "@/lib/i18n";

const COPY = {
  es: {
    crumb: "On The Spot",
    eyebrow: "Proyectos",
    lead: "Más de treinta proyectos para marcas que no podían esperar. Estrategia, creatividad y producción, de principio a fin.",
    statProjects: "proyectos",
    statCategories: "disciplinas",
    statClients: "marcas",
    cta: "Call Johnny →",
  },
  en: {
    crumb: "On The Spot",
    eyebrow: "Projects",
    lead: "More than thirty projects for brands that couldn't wait. Strategy, creativity and production, from start to finish.",
    statProjects: "projects",
    statCategories: "disciplines",
    statClients: "brands",
    cta: "Call Johnny →",
  },
} as const;

export default function OtsIndexTemplate({ locale = "es" }: { locale?: Locale }) {
  const copy = COPY[locale];
  const clients = new Set(OTS_PROJECTS.map((p) => p.client)).size;
  const cats = usedCategories().length;

  return (
    <PageLayout locale={locale}>
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: copy.crumb }]} locale={locale} />
        </div>
      </div>

      {/* Hero */}
      <section className="px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-24" aria-labelledby="ots-heading">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">{copy.eyebrow}</p>
          <h1
            id="ots-heading"
            className="text-white font-black tracking-tighter leading-[0.85] text-[16vw] sm:text-[13vw] lg:text-[11vw] xl:text-[9.5rem]"
          >
            On The
            <br />
            Spot
          </h1>
          <p className="mt-10 text-white/50 text-lg lg:text-2xl font-light leading-snug max-w-2xl">
            {copy.lead}
          </p>

          <dl className="mt-14 flex flex-wrap gap-x-16 gap-y-8">
            {[
              [OTS_PROJECTS.length, copy.statProjects],
              [cats, copy.statCategories],
              [clients, copy.statClients],
            ].map(([n, label]) => (
              <div key={String(label)}>
                <dd className="text-white font-black text-4xl lg:text-5xl tracking-tighter leading-none tabular-nums">
                  {n}
                </dd>
                <dt className="mt-2 text-white/30 text-xs tracking-widest uppercase">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <OtsGrid locale={locale} />

      <div className="pb-28 px-6 lg:px-8 flex justify-center">
        <SkewButton href={localizeHref("/contacto", locale)} dark uppercase={false}>
          {copy.cta}
        </SkewButton>
      </div>
    </PageLayout>
  );
}
