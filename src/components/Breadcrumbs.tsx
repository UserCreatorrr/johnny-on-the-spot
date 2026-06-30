import Link from "next/link";
import { type Locale, localizeHref } from "@/lib/i18n";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  locale?: Locale;
}

export default function Breadcrumbs({ items, locale = "es" }: BreadcrumbsProps) {
  const homeLabel = locale === "en" ? "Home" : "Inicio";
  const base = "https://www.johnnyonthespot.es";
  const homeUrl = locale === "en" ? `${base}/en` : base;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: homeLabel, item: homeUrl },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        ...(item.href ? { item: `${base}${localizeHref(item.href, locale)}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label={locale === "en" ? "Breadcrumb" : "Ruta de navegación"} className="py-4">
        <ol className="flex items-center gap-2 text-xs text-white/30 flex-wrap" role="list">
          <li>
            <Link href={localizeHref("/", locale)} className="hover:text-white/60 transition-colors">
              {homeLabel}
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span aria-hidden="true">/</span>
              {item.href ? (
                <Link href={localizeHref(item.href, locale)} className="hover:text-white/60 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-white/50" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
