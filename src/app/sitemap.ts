import type { MetadataRoute } from "next";
import { SERVICES, SECTORS, CASES, SOLUTIONS, BLOG_POSTS } from "@/lib/data";

const baseUrl = "https://www.johnnyonthespot.es";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/nosotros`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/sectores`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/casos-de-exito`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/soluciones`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${baseUrl}/servicios/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const sectorRoutes: MetadataRoute.Sitemap = SECTORS.map((s) => ({
    url: `${baseUrl}/sectores/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseRoutes: MetadataRoute.Sitemap = CASES.map((c) => ({
    url: `${baseUrl}/casos/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const solutionRoutes: MetadataRoute.Sitemap = SOLUTIONS.map((s) => ({
    url: `${baseUrl}/soluciones/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...sectorRoutes,
    ...caseRoutes,
    ...solutionRoutes,
    ...blogRoutes,
  ];
}
