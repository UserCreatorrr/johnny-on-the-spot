import Link from "next/link";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SkewButton from "@/components/SkewButton";
import OtsGallery from "./OtsGallery";
import VideoEmbed from "./VideoEmbed";
import { OTS_CATEGORIES, OTS_PROJECTS, type OtsProject } from "@/lib/on-the-spot";
import { type Locale, localizeHref } from "@/lib/i18n";

const COPY = {
  es: {
    crumb: "On The Spot",
    client: "Cliente",
    discipline: "Disciplina",
    services: "Qué hicimos",
    gallery: "El proyecto",
    video: "Vídeo",
    more: "Más proyectos",
    back: "Ver todos los proyectos",
    cta: "Call Johnny →",
    ctaTitle: "¿Tienes algo parecido entre manos?",
  },
  en: {
    crumb: "On The Spot",
    client: "Client",
    discipline: "Discipline",
    services: "What we did",
    gallery: "The project",
    video: "Video",
    more: "More projects",
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
  const related = OTS_PROJECTS.filter(
    (p) => p.category === project.category && p.slug !== project.slug
  ).slice(0, 3);
  const galleryImages = project.video ? project.images.slice(1) : project.images;

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

      {/* Video */}
      {project.video && (
        <section className="px-6 lg:px-8 pb-16 lg:pb-24" aria-label={copy.video}>
          <div className="max-w-6xl mx-auto">
            <VideoEmbed video={project.video} poster={project.images[0]} locale={locale} />
          </div>
        </section>
      )}

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section className="px-6 lg:px-8 pb-20 lg:pb-28" aria-label={copy.gallery}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-white/20 text-xs tracking-widest uppercase font-medium mb-8">
              {copy.gallery}
            </h2>
            <OtsGallery
              images={galleryImages}
              alt={`${project.client}: ${project.title[locale]}`}
              locale={locale}
            />
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="px-6 lg:px-8 pb-20 lg:pb-28 border-t border-white/10 pt-16" aria-label={copy.more}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <h2 className="text-white font-black text-2xl lg:text-4xl tracking-tighter">
                {copy.more}
              </h2>
              <Link
                href={localizeHref("/on-the-spot", locale)}
                className="text-sm text-white/40 hover:text-white border-b border-white/10 hover:border-white/40 transition-colors pb-0.5"
              >
                {copy.back} →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={localizeHref(`/on-the-spot/${p.slug}`, locale)}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.03] border border-white/10 group-hover:border-white/30 transition-colors">
                    {p.images[0] && (
                      <Image
                        src={p.images[0].src}
                        alt={`${p.client}: ${p.title[locale]}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    )}
                  </div>
                  <p className="mt-4 text-white/25 text-[11px] tracking-widest uppercase font-mono">
                    {p.client}
                  </p>
                  <h3 className="mt-1.5 text-white font-bold text-lg tracking-tight group-hover:text-white/70 transition-colors">
                    {p.title[locale]}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
