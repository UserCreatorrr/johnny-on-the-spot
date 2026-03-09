import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOG_POSTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog de Comunicación Integral | Johnny on the Spot",
  description:
    "Criterio sobre estrategia, creatividad, eventos y marketing. Artículos de comunicación integral escritos por profesionales sénior que trabajan en esto cada día.",
  alternates: { canonical: "https://www.johnnyonthespot.es/blog" },
};

const categories = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));

export default function BlogPage() {
  return (
    <PageLayout>
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Blog" }]} />
        </div>
      </div>

      <section className="pt-8 pb-16 lg:pb-20 px-6 lg:px-8" aria-labelledby="blog-heading">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Blog</p>
          <h1 id="blog-heading" className="text-5xl lg:text-7xl font-black tracking-tighter text-white leading-none mb-8 max-w-3xl">
            Criterio sobre comunicación.
          </h1>
          <p className="text-white/40 text-lg lg:text-xl max-w-2xl leading-relaxed">
            No escribimos para posicionar palabras clave. Escribimos porque tenemos algo que decir sobre estrategia, creatividad y producción que creemos que puede serte útil.
          </p>
        </div>
      </section>

      {/* Category filter (visual only — links filtrarían por categoría en una implementación completa) */}
      <div className="px-6 lg:px-8 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto pt-6 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <span
              key={cat}
              className="text-xs border border-white/15 px-4 py-2 text-white/40"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Featured post */}
          <div className="mb-px bg-white/5">
            <Link
              href={`/blog/${BLOG_POSTS[0].slug}`}
              className="block bg-black p-12 lg:p-16 group hover:bg-white/3 transition-colors"
            >
              <p className="text-white/25 text-xs tracking-widest uppercase mb-4">
                {BLOG_POSTS[0].category} · {BLOG_POSTS[0].readingTime} min de lectura
              </p>
              <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white leading-tight mb-4 max-w-2xl group-hover:text-white/90 transition-colors">
                {BLOG_POSTS[0].title}
              </h2>
              <p className="text-white/40 text-lg leading-relaxed max-w-xl">
                {BLOG_POSTS[0].description}
              </p>
            </Link>
          </div>

          {/* Grid of remaining posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {BLOG_POSTS.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-black p-8 group hover:bg-white/3 transition-colors"
              >
                <p className="text-white/25 text-xs tracking-widest uppercase mb-4">
                  {post.category} · {post.readingTime} min
                </p>
                <h2 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-white/90 transition-colors">
                  {post.title}
                </h2>
                <p className="text-white/40 text-sm leading-relaxed">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
