import Link from "next/link";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SkewButton from "@/components/SkewButton";
import { projectCover, mediaNote } from "@/lib/ots-editorial";
import VideoEmbed from "./VideoEmbed";
import { OTS_CATEGORIES, type OtsProject } from "@/lib/on-the-spot";
import { type Locale, localizeHref } from "@/lib/i18n";

const COPY = {
  es: {
    crumb: "On The Spot",
    client: "Cliente",
    discipline: "Disciplina",
    services: "Qué hicimos",
    video: "Vídeo",
    back: "Ver todos los proyectos",
    cta: "Call Johnny →",
    ctaTitle: "¿Tienes algo parecido entre manos?",
  },
  en: {
    crumb: "On The Spot",
    client: "Client",
    discipline: "Discipline",
    services: "What we did",
    video: "Video",
    back: "See all projects",
    cta: "Call Johnny →",
    ctaTitle: "Got something like this on your hands?",
  },
} as const;

export default function OtsDetailTemplate({
  project,
  locale = "es",
}: {
  project: OtsProject;
  locale?: Locale;
}) {
  const copy = COPY[locale];
  const category = OTS_CATEGORIES.find((c) => c.slug === project.category);
  const cover = projectCover(project);

  return (
    <PageLayout locale={locale}>
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: copy.crumb, href: "/on-the-spot" },
              { label: project.client },
            ]}
            locale={locale}
          />
        </div>
      </div>

      {/* Header */}
      <section className="px-6 lg:px-8 pt-8 pb-14 lg:pb-20" aria-labelledby="proj-heading">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-5">
            {category?.label[locale]}
          </p>
          <h1
            id="proj-heading"
            className="text-white font-black tracking-tighter leading-[0.9] text-4xl sm:text-6xl lg:text-8xl"
          >
            {project.client}
          </h1>
          <p className="mt-4 text-white/50 text-xl lg:text-3xl font-light tracking-tight">
            {project.title[locale]}
          </p>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <p className="lg:col-span-2 text-white/70 text-base lg:text-xl leading-relaxed max-w-3xl">
              {project.description[locale]}
            </p>
            <div>
              <h2 className="text-white/20 text-xs tracking-widest uppercase font-medium mb-5">
                {copy.services}
              </h2>
              <ul className="space-y-3" role="list">
                {project.services[locale].map((s) => (
                  <li key={s} className="flex items-start gap-3 border-t border-white/10 pt-3">
                    <span className="text-white/70 text-sm lg:text-base leading-snug">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {!project.video && (
        <figure className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <Image src={cover.src} alt={`${project.client}: ${project.title[locale]}`} width={cover.w} height={cover.h} quality={90} sizes="(max-width: 1280px) 100vw, 1216px" priority className="w-full h-auto" />
          <figcaption className="mt-4 flex flex-col sm:flex-row gap-3 sm:justify-between text-xs text-white/60">
            <span>{mediaNote(project, locale)}</span>
          </figcaption>
        </figure>
      )}

      {/* Video */}
      {project.video && (
        <section className="px-6 lg:px-8 pb-16 lg:pb-24" aria-label={copy.video}>
          <div className="max-w-6xl mx-auto">
            <VideoEmbed video={project.video} poster={cover} locale={locale} />
          </div>
        </section>
      )}

      <div className="px-6 lg:px-8 pb-16 max-w-7xl mx-auto">
        <Link href={localizeHref("/on-the-spot", locale)} className="text-white/70 hover:text-white text-sm border-b border-white/30 pb-1">← {copy.back}</Link>
      </div>

      {/* CTA */}
      <section className="px-6 lg:px-8 pb-28 text-center">
        <h2 className="text-white font-black text-2xl lg:text-4xl tracking-tighter mb-10">
          {copy.ctaTitle}
        </h2>
        <SkewButton href={localizeHref("/contacto", locale)} dark uppercase={false}>
          {copy.cta}
        </SkewButton>
      </section>
    </PageLayout>
  );
}
