import Link from "next/link";
import PageLayout from "./PageLayout";
import CTASection from "./CTASection";
import FAQSection, { type FAQ } from "./FAQSection";
import Breadcrumbs from "./Breadcrumbs";

interface RelatedLink {
  label: string;
  href: string;
}

interface SectorPageProps {
  title: string;
  subtitle: string;
  h2: string;
  paragraphs: string[];
  services: string[];
  clients: string;
  cases: { title: string; href: string; client: string; desc: string }[];
  faqs: FAQ[];
  ctaTitle: string;
  ctaSubtitle: string;
  relatedLinks: RelatedLink[];
  breadcrumbLabel: string;
}

export default function SectorPageTemplate({
  title,
  subtitle,
  h2,
  paragraphs,
  services,
  clients,
  cases,
  faqs,
  ctaTitle,
  ctaSubtitle,
  relatedLinks,
  breadcrumbLabel,
}: SectorPageProps) {
  return (
    <PageLayout>
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Sectores", href: "/sectores" }, { label: breadcrumbLabel }]} />
        </div>
      </div>

      <section className="pt-8 pb-20 lg:pb-28 px-6 lg:px-8" aria-labelledby="sector-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Sector</p>
              <h1 id="sector-heading" className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-none">
                {title}
              </h1>
            </div>
            <div>
              <p className="text-white/45 text-xl leading-relaxed">{subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-8">{h2}</h2>
              <div className="space-y-5 text-white/45 text-lg leading-relaxed">
                {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div>
              <h3 className="text-white/30 text-xs tracking-widest uppercase mb-6">Servicios habituales</h3>
              <ul className="space-y-4" role="list">
                {services.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/50 text-sm">
                    <span className="mt-1.5 w-1 h-1 bg-white/30 rounded-full flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {cases.length > 0 && (
        <section className="py-16 lg:py-24 px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-12">
              Proyectos en este sector
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
              {cases.map((c) => (
                <Link key={c.href} href={c.href} className="bg-black p-8 group hover:bg-white/3 transition-colors">
                  <p className="text-white/25 text-xs tracking-widest uppercase mb-3">{c.client}</p>
                  <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-white/90">{c.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{c.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 lg:py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-black/40 text-sm mb-4">Clientes en este sector:</p>
          <p className="text-black/30 text-lg tracking-wide">{clients}</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black tracking-tighter text-white mb-8">También puede interesarte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="border border-white/10 px-6 py-4 text-sm text-white/50 hover:text-white hover:border-white/30 transition-colors">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title={`Preguntas sobre comunicación en ${breadcrumbLabel.toLowerCase()}`} />

    </PageLayout>
  );
}
