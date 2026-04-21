import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOG_POSTS } from "@/lib/data";
import { getBlogPost } from "@/lib/blog-content";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  const canonical = `https://www.johnnyonthespot.es/blog/${params.slug}`;

  return {
    title: `${post.title} | Blog Johnny on the Spot`,
    description: post.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: canonical,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const postMeta = BLOG_POSTS.find((p) => p.slug === params.slug);
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.slug !== params.slug && p.category === postMeta?.category
  ).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Organization",
      name: "Johnny on the Spot",
    },
    publisher: {
      "@type": "Organization",
      name: "Johnny on the Spot",
      logo: {
        "@type": "ImageObject",
        url: "https://www.johnnyonthespot.es/logo.svg",
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    url: `https://www.johnnyonthespot.es/blog/${params.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.johnnyonthespot.es/blog/${params.slug}`,
    },
  };

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: postMeta?.category || "Artículo", href: "/blog" },
              { label: post.title.slice(0, 50) + "..." },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16 lg:pb-24 px-6 lg:px-8" aria-labelledby="article-heading">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-white/30 text-xs tracking-widest uppercase mb-6">
              {post.category} · {post.readingTime} min de lectura · {new Date(post.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <h1 id="article-heading" className="text-4xl lg:text-5xl font-black tracking-tighter text-white leading-tight mb-8">
              {post.h1}
            </h1>
            <p className="text-white/50 text-xl leading-relaxed border-l-2 border-white/20 pl-6">
              {post.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-8 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            <div className="lg:col-span-3">
              <div className="prose-custom space-y-12">
                {post.sections.map((section, i) => (
                  <section key={i} aria-labelledby={`section-${i}`}>
                    <h2
                      id={`section-${i}`}
                      className="text-2xl lg:text-3xl font-black tracking-tighter text-white mb-6"
                    >
                      {section.h2}
                    </h2>
                    <div className="space-y-4 text-white/50 text-base lg:text-lg leading-relaxed">
                      {section.body.split("\n\n").map((paragraph, j) => {
                        // Handle bold markdown
                        if (paragraph.startsWith("**") && paragraph.includes("**:")) {
                          const parts = paragraph.split("\n");
                          return (
                            <div key={j} className="space-y-3">
                              {parts.map((part, k) => {
                                if (part.startsWith("**")) {
                                  const [boldPart, ...rest] = part.split("**:");
                                  return (
                                    <p key={k}>
                                      <strong className="text-white font-bold">
                                        {boldPart.replace("**", "")}
                                      </strong>
                                      :{rest.join("")}
                                    </p>
                                  );
                                }
                                return part ? <p key={k}>{part}</p> : null;
                              })}
                            </div>
                          );
                        }
                        if (paragraph.startsWith("-")) {
                          const items = paragraph.split("\n").filter((l) => l.startsWith("-"));
                          return (
                            <ul key={j} className="space-y-2 pl-4">
                              {items.map((item, k) => (
                                <li key={k} className="flex items-start gap-3">
                                  <span className="mt-2 w-1 h-1 bg-white/30 rounded-full flex-shrink-0" aria-hidden="true" />
                                  {item.replace("- ", "")}
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        return <p key={j}>{paragraph}</p>;
                      })}
                    </div>
                  </section>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-8">
                <div>
                  <p className="text-white/25 text-xs tracking-widest uppercase mb-4">Sobre el autor</p>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Johnny on the Spot es una agencia de comunicación integral en Barcelona con más de 100 proyectos producidos para marcas como Alcon, SAP, Coca-Cola, Novartis y Chopard.
                  </p>
                </div>
                <div className="border-t border-white/5 pt-6">
                  <p className="text-white/25 text-xs tracking-widest uppercase mb-4">Servicios relacionados</p>
                  <ul className="space-y-2">
                    {[
                      { label: "Estrategia de Comunicación", href: "/servicios/estrategia-de-comunicacion" },
                      { label: "Creación de Contenido", href: "/servicios/creacion-de-contenido" },
                      { label: "Marketing Digital", href: "/servicios/marketing-digital" },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-white/40 text-sm hover:text-white transition-colors">
                          {link.label} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-white/10 p-6">
                  <p className="text-white font-bold text-sm mb-2">{post.cta}</p>
                  <Link href="/contacto" className="block text-center bg-white text-black text-sm px-4 py-3 font-medium hover:bg-white/90 transition-colors">
                    Hablemos
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* FAQs */}
      {post.faqs && post.faqs.length > 0 && (
        <FAQSection faqs={post.faqs} title="Preguntas frecuentes" />
      )}

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-24 px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black tracking-tighter text-white mb-10">
              Artículos relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="bg-black p-8 group hover:bg-white/3 transition-colors"
                >
                  <p className="text-white/25 text-xs tracking-widest uppercase mb-3">
                    {p.category} · {p.readingTime} min
                  </p>
                  <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-white/90">
                    {p.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{p.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={post.cta}
        primaryCTA="Hablemos"
        secondaryCTA="Ver todos los artículos"
        secondaryHref="/blog"
      />
    </PageLayout>
  );
}
