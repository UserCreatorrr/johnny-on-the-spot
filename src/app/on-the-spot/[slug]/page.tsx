import type { Metadata } from "next";
import { notFound } from "next/navigation";
import OtsDetailTemplate from "@/components/ots/OtsDetailTemplate";
import { OTS_PROJECTS, getOtsProject } from "@/lib/on-the-spot";

export function generateStaticParams() {
  return OTS_PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getOtsProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.client}: ${project.title.es}`,
    description: project.description.es,
    alternates: {
      canonical: `https://www.johnnyonthespot.es/on-the-spot/${project.slug}`,
      languages: {
        es: `https://www.johnnyonthespot.es/on-the-spot/${project.slug}`,
        en: `https://www.johnnyonthespot.es/en/on-the-spot/${project.slug}`,
      },
    },
    openGraph: {
      title: `${project.client}: ${project.title.es}`,
      description: project.description.es,
      images: project.images[0] ? [{ url: project.images[0].src }] : undefined,
    },
  };
}

export default function OnTheSpotDetailPage({ params }: { params: { slug: string } }) {
  const project = getOtsProject(params.slug);
  if (!project) notFound();
  return <OtsDetailTemplate project={project} locale="es" />;
}
