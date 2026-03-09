import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Producción Gráfica Premium | Johnny on the Spot — Barcelona",
  description:
    "Producción gráfica para grandes marcas. POS, packaging, materiales de campaña, editorial. Orbit, Novartis, STINGbye, Go Green. Estándares internacionales.",
  alternates: { canonical: "https://www.johnnyonthespot.es/servicios/produccion-grafica" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Producción Gráfica",
  provider: { "@type": "Organization", name: "Johnny on the Spot" },
  description: "Producción gráfica premium para campañas, POS, packaging y materiales editoriales.",
  areaServed: { "@type": "Place", name: "España" },
  serviceType: "Producción Gráfica",
};

const faqs = [
  {
    question: "¿Cuáles son los tiempos habituales de producción?",
    answer: "Depende de la complejidad y el volumen. Materiales sencillos pueden estar listos en una semana. Proyectos de packaging complejos con validación regulatoria pueden llevar 4-6 semanas. Siempre establecemos un calendario realista al inicio del proyecto y lo cumplimos.",
  },
  {
    question: "¿Cómo garantizáis la calidad en la impresión?",
    answer: "Supervisamos el proceso de impresión en imprenta: revisamos pruebas de color, validamos acabados y hacemos control de calidad en la primera tirada. No enviamos archivos y esperamos. Estamos en el proceso.",
  },
  {
    question: "¿Podéis trabajar con materiales gráficos ya existentes?",
    answer: "Sí. Podemos adaptar, actualizar o ampliar un sistema gráfico existente. También hacemos auditorías de material para identificar inconsistencias o problemas técnicos antes de producir.",
  },
  {
    question: "¿Gestionáis producciones gráficas en otros países?",
    answer: "Sí. Hemos producido materiales para Orbit en USA y Europa, y gestionado producciones en múltiples mercados. Conocemos los estándares de impresión y los proveedores de referencia en los principales mercados europeos y americanos.",
  },
];

export default function ProduccionGraficaPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Servicios", href: "/servicios" },
              { label: "Producción Gráfica" },
            ]}
          />
        </div>
      </div>

      <section className="pt-8 pb-20 lg:pb-28 px-6 lg:px-8" aria-labelledby="service-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Servicio</p>
              <h1 id="service-heading" className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-none">
                Producción Gráfica
              </h1>
            </div>
            <div>
              <p className="text-white/45 text-xl leading-relaxed">
                La producción gráfica es donde se gana o se pierde la credibilidad de una marca. Un material mal acabado destruye todo el trabajo creativo anterior.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-8">
                El estándar que la marca merece
              </h2>
              <div className="space-y-5 text-white/45 text-lg leading-relaxed">
                <p>
                  Hay una brecha que a menudo se ignora entre el diseño que el creativo entrega y el material que finalmente llega al punto de venta, al cliente o al consumidor. Esa brecha se llama producción, y es donde las marcas pierden calidad sin saberlo.
                </p>
                <p>
                  En Johnny on the Spot, la producción gráfica forma parte del proceso creativo, no es un paso posterior y separado. Diseñamos pensando en cómo se va a producir, seleccionamos los materiales y acabados correctos para cada proyecto, y supervisamos la impresión en origen para garantizar que lo que llega al cliente es exactamente lo que se diseñó.
                </p>
                <p>
                  Hemos producido materiales para Orbit en USA y Europa, packaging para Go Green y STINGbye, materiales de campaña para Novartis y materiales de evento para las principales convenciones que hemos producido. En todos los casos, la coherencia entre concepto y producción es una de las razones por las que los clientes repiten.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-white/30 text-xs tracking-widest uppercase mb-6">Qué incluye</h3>
              <ul className="space-y-4" role="list">
                {[
                  "Diseño editorial y maquetación",
                  "Producción POS y PLV",
                  "Packaging design y adaptaciones",
                  "Control de color (ICC, Pantone)",
                  "Supervisión de impresión",
                  "Gestión de proveedores",
                  "Adaptaciones por mercado",
                  "Control de calidad en entrega",
                ].map((item) => (
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

      <section className="py-16 lg:py-24 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-12">
            Qué producimos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {[
              { title: "Materiales POS y PLV", desc: "Displays, expositores, stoppers, wobblers y materiales de punto de venta para retail." },
              { title: "Packaging", desc: "Diseño y producción de packaging para producto farmacéutico, alimentación y consumo." },
              { title: "Catálogos y editoriales", desc: "Publicaciones de marca, catálogos de producto, memorias anuales e informes." },
              { title: "Materiales de campaña", desc: "Gráfica exterior, mupis, lonas, prensa y todos los formatos de campaña." },
              { title: "Señalización y stand", desc: "Señalética, rotulación y elementos gráficos para ferias, congresos y eventos." },
              { title: "Displays y expositores", desc: "Diseño y producción de soportes de presentación de producto en retail y farmacias." },
            ].map((item) => (
              <div key={item.title} className="bg-black p-8">
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-black/40 text-sm mb-4">Hemos producido materiales gráficos para:</p>
          <p className="text-black/30 text-lg tracking-wide">
            Orbit · Novartis · STINGbye · Go Green · Alcon · Dr. Scholl · Haribo · Meliá · SAP
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black tracking-tighter text-white mb-8">También puede interesarte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Dirección de Arte", href: "/servicios/direccion-de-arte" },
              { label: "Diseño de Identidad", href: "/servicios/diseno-de-identidad" },
              { label: "Lanzamiento de Producto", href: "/soluciones/lanzamiento-de-producto" },
              { label: "Casos de Éxito", href: "/casos-de-exito" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="border border-white/10 px-6 py-4 text-sm text-white/50 hover:text-white hover:border-white/30 transition-colors">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Preguntas sobre producción gráfica" />

      <CTASection
        title="¿Necesitas producción gráfica con nivel internacional?"
        subtitle="Mándanos el briefing técnico o el proyecto. Analizamos los materiales y proponemos el mejor proceso."
        primaryCTA="Solicitar presupuesto"
        secondaryCTA="Ver casos de éxito"
        secondaryHref="/casos-de-exito"
      />
    </PageLayout>
  );
}
