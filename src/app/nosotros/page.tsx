import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Nosotros — Agencia de Comunicación Integral | Johnny on the Spot",
  description:
    "Johnny on the Spot: agencia de comunicación integral en Barcelona. Equipo sénior, red internacional y el modelo de trabajo que hace que los proyectos funcionen.",
  alternates: { canonical: "https://www.johnnyonthespot.es/nosotros" },
};

export default function NosotrosPage() {
  return (
    <PageLayout>
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Nosotros" }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-20 lg:pb-28 px-6 lg:px-8" aria-labelledby="nosotros-heading">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Sobre nosotros</p>
          <h1 id="nosotros-heading" className="text-5xl lg:text-7xl font-black tracking-tighter text-white leading-none mb-8 max-w-4xl">
            A mano cuando se necesita.
            <br />
            <span className="text-white/30">Desde el principio.</span>
          </h1>
          <p className="text-white/45 text-xl lg:text-2xl max-w-2xl leading-relaxed">
            Somos una agencia de comunicación integral que combina estrategia y creatividad para que tu marca esté siempre en el lugar y el momento exactos.
          </p>
        </div>
      </section>

      {/* El nombre */}
      <section className="py-16 lg:py-24 px-6 lg:px-8 border-t border-white/5 bg-white" aria-label="Significado del nombre">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-black/30 text-xs tracking-widest uppercase mb-6">El nombre</p>
              <blockquote className="text-black font-black text-3xl lg:text-4xl tracking-tighter leading-tight mb-6">
                &ldquo;Johnny on the Spot&rdquo;
                <span className="block text-xl font-light text-black/40 mt-4 tracking-normal">
                  /noun/ DATED — INFORMAL
                </span>
              </blockquote>
              <p className="text-black/50 text-lg leading-relaxed">
                A person who is at hand whenever needed.
              </p>
            </div>
            <div>
              <p className="text-black/50 text-lg leading-relaxed mb-6">
                Elegimos ese nombre porque describe exactamente lo que somos: alguien que está convenientemente en el lugar correcto en el momento oportuno. Con una Idea, una Estrategia, una Acción.
              </p>
              <p className="text-black/50 text-lg leading-relaxed">
                Estar siempre disponibles no es un método de trabajo. Es nuestra forma de ser. El cliente que nos llama con un problema real sabe que tendrá respuesta ese mismo día y solución en el menor tiempo posible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* El modelo */}
      <section className="py-16 lg:py-24 px-6 lg:px-8 border-t border-white/5" aria-label="Modelo de trabajo">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-8">
                Un modelo que funciona
              </h2>
              <div className="space-y-5 text-white/45 text-lg leading-relaxed">
                <p>
                  Somos un equipo multidisciplinar y versátil con amplia experiencia en el gran universo de la Comunicación y los Eventos. Cada proyecto implica la creación de un equipo ad hoc, formado por las personas que mejor se ajustan al perfil de cada cliente.
                </p>
                <p>
                  Planificamos con precisión, pero también sabemos adaptarnos y reaccionar en tiempo real, porque en comunicación, la improvisación es parte de la estrategia.
                </p>
                <p>
                  Multiplicamos nuestras capacidades a través de aliados de nuestra red internacional, con presencia activa en Europa, América y Oriente Medio.
                </p>
              </div>
            </div>
            <div>
              <div className="space-y-0 divide-y divide-white/5">
                {[
                  { num: "01", title: "Equipo sénior siempre", body: "Cada proyecto tiene un partner responsable con experiencia real. No hay juniors gestionando cuentas estratégicas." },
                  { num: "02", title: "Multidisciplinar de verdad", body: "Estrategia, creatividad, producción, eventos, digital. No subcontratamos lo que no sabemos hacer." },
                  { num: "03", title: "Red internacional activa", body: "Proyectos en Europa, América y Oriente Medio. Proveedores locales en cada mercado." },
                  { num: "04", title: "Un solo interlocutor", body: "El cliente habla con el partner responsable del proyecto, no con un account que traslada mensajes." },
                ].map((item) => (
                  <div key={item.num} className="py-8">
                    <p className="text-white/20 text-xs font-mono mb-3">{item.num}</p>
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="py-16 lg:py-24 px-6 lg:px-8 border-t border-white/5 bg-white" aria-label="Clientes">
        <div className="max-w-7xl mx-auto">
          <p className="text-black/30 text-xs tracking-widest uppercase mb-10">Han confiado en nosotros</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              "Alcon", "Novartis", "Coca-Cola", "SAP", "Porsche",
              "Meliá Hotels", "Puig", "Chopard", "Carolina Herrera", "Haribo",
              "Glenfiddich", "IKEA", "Perrier", "ISDIN", "Ipsen Farma",
              "Coty Prestige", "GFT", "Applus", "Walk Me", "Avianca",
            ].map((client) => (
              <div key={client} className="border-b border-black/10 pb-4">
                <p className="text-black/40 text-sm font-medium">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="py-16 lg:py-24 px-6 lg:px-8 border-t border-white/5" aria-label="Filosofía">
        <div className="max-w-7xl mx-auto max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-10">
            Lo que creemos
          </h2>
          <div className="space-y-8 text-white/45 text-lg leading-relaxed">
            <p>
              Creemos que las mejores ideas salen de equipos pequeños con criterio sénior, no de departamentos de treinta personas donde la responsabilidad se diluye.
            </p>
            <p>
              Creemos que la comunicación tiene que funcionar: generar una percepción, mover a una audiencia, vender un producto o llenar un evento. Si no funciona, no es comunicación, es decoración.
            </p>
            <p>
              Creemos que el cliente merece saber exactamente qué está comprando, cuánto cuesta y qué va a obtener. Sin presupuestos que crecen solos y sin sorpresas al final del proyecto.
            </p>
            <p>
              Creemos que la velocidad no es enemiga de la calidad cuando el equipo sabe lo que hace. Somos rápidos porque somos buenos, no porque cortemos esquinas.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Quieres trabajar con nosotros?"
        subtitle="Cuéntanos el proyecto. Nos ponemos en contacto antes de 24 horas."
        primaryCTA="Hablemos"
        secondaryCTA="Ver casos de éxito"
        secondaryHref="/casos-de-exito"
      />
    </PageLayout>
  );
}
