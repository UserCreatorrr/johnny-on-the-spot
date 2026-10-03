import type { OtsProject, OtsImage } from "./on-the-spot";
import type { Locale } from "./i18n";

// One media item per case. Original source files are retained, not displayed as galleries.
const UPGRADED: Record<string, OtsImage & { kind: string }> = {
  "porsche-classic": { src: "/casos/editorial/porsche-classic-v2.webp", w: 1536, h: 1024, kind: "concept" },
  "perrier": { src: "/casos/editorial/perrier-v2.webp", w: 1536, h: 1024, kind: "concept" },
  "chopard": { src: "/casos/editorial/chopard-v2.webp", w: 1536, h: 1024, kind: "concept" },
  "metaembalatges": { src: "/casos/editorial/metaembalatges-v2.webp", w: 1536, h: 1024, kind: "concept" },
  "orbit": { src: "/casos/editorial/orbit-v2.webp", w: 1536, h: 1024, kind: "concept" },
  "go-green": { src: "/casos/editorial/go-green-v2.webp", w: 1536, h: 1024, kind: "concept" },
  "stingbye": { src: "/casos/editorial/stingbye-v2.webp", w: 1536, h: 1024, kind: "concept" },
  "applus-mwc": { src: "/casos/editorial/applus-mwc-v2.webp", w: 1536, h: 1024, kind: "concept" },
  "gft-4yfn": { src: "/casos/editorial/gft-4yfn-v2.webp", w: 1536, h: 1024, kind: "concept" },
  "alcon-astigmatismo": { src: "/casos/editorial/alcon-astigmatismo-v2.webp", w: 1536, h: 1024, kind: "concept" },
  "sap-partner-summit": { src: "/casos/editorial/sap-partner-summit-v2.webp", w: 1536, h: 1024, kind: "restored" },
  "applus-family-day": { src: "/casos/editorial/applus-family-day-v2.webp", w: 1536, h: 1024, kind: "restored" },
  "panoma": { src: "/casos/editorial/panoma-v2.webp", w: 1536, h: 1024, kind: "concept" },
  "ipsen-farma": { src: "/casos/editorial/ipsen-farma-v2.webp", w: 1536, h: 1024, kind: "restored" },
  "puig-brand-ambassadors": { src: "/casos/editorial/puig-brand-ambassadors-v2.webp", w: 1536, h: 1024, kind: "concept" },
  "coty-prestige": { src: "/casos/editorial/coty-prestige-v2.webp", w: 1536, h: 1024, kind: "restored" },
  "sap-team-cooking": { src: "/casos/editorial/sap-team-cooking-v2.webp", w: 1536, h: 1024, kind: "restored" },
  "puig-good-girl": { src: "/casos/editorial/puig-good-girl-v2.webp", w: 1536, h: 1024, kind: "concept" },
  "philipp-plein": { src: "/casos/editorial/philipp-plein-v2.webp", w: 1536, h: 1024, kind: "concept" },
  "isdin": { src: "/casos/editorial/isdin-v2.webp", w: 2170, h: 725, kind: "restored" },
  "cocacola-grandvalira": { src: "/casos/editorial/cocacola-grandvalira-v2.webp", w: 1536, h: 1024, kind: "concept" },
  "haribo": { src: "/casos/editorial/haribo-v2.webp", w: 1536, h: 1024, kind: "concept" },
  "glenfiddich": { src: "/casos/editorial/glenfiddich-v2.webp", w: 1536, h: 1024, kind: "restored" },
  "ikea-marruecos": { src: "/casos/editorial/ikea-marruecos-v2.webp", w: 1536, h: 1024, kind: "concept" },
  "dr-scholl": { src: "/casos/editorial/dr-scholl-v2.webp", w: 1536, h: 1024, kind: "concept" },
  "avianca": { src: "/casos/editorial/avianca-v2.webp", w: 1536, h: 1024, kind: "restored" },
};
export function projectCover(project: OtsProject): OtsImage {
  return UPGRADED[project.slug] ?? project.images[0];
}
export function mediaNote(project: OtsProject, locale: Locale): string {
  const media = UPGRADED[project.slug];
  if (!media) return "";
  return media.kind === "restored"
    ? (locale === "es" ? "Imagen del proyecto mejorada con IA" : "Project image enhanced with AI")
    : (locale === "es" ? "Visualización con IA basada en el proyecto original" : "AI visualization based on the original project");
}
