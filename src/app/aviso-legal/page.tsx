import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Aviso Legal | Johnny on the Spot",
  description: "Aviso legal e información corporativa de Johnny on the Spot, agencia de comunicación integral en Barcelona.",
  alternates: { canonical: "https://www.johnnyonthespot.es/aviso-legal" },
  robots: { index: false, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <PageLayout>
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Aviso Legal" }]} />
        </div>
      </div>

      <section className="pt-8 pb-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Legal</p>
          <h1 className="text-4xl lg:text-5xl font-black tracking-tighter text-white leading-none mb-10">
            Aviso Legal
          </h1>

          <div className="space-y-10 text-white/50 text-base leading-relaxed">
            <div>
              <h2 className="text-white font-bold text-xl mb-4">1. Datos identificativos</h2>
              <p>
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos:
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-white/40">
                <li>Denominación social: Johnny on the Spot</li>
                <li>Domicilio: Carrer de Provença 385, 08025 Barcelona</li>
                <li>Correo electrónico: hola@johnnyonthespot.es</li>
                <li>Sitio web: www.johnnyonthespot.es</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-4">2. Objeto y ámbito de aplicación</h2>
              <p>
                El presente Aviso Legal regula el acceso y uso del sitio web www.johnnyonthespot.es (en adelante, «el Sitio»). El acceso al Sitio implica la aceptación plena y sin reservas de las presentes condiciones.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-4">3. Propiedad intelectual e industrial</h2>
              <p>
                Todos los contenidos del Sitio —textos, imágenes, logotipos, diseño gráfico y código fuente— son titularidad de Johnny on the Spot o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución, transformación o comunicación pública sin autorización expresa por escrito.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-4">4. Responsabilidad</h2>
              <p>
                Johnny on the Spot no garantiza la disponibilidad y continuidad ininterrumpida del Sitio. Tampoco se responsabiliza de los daños que pudieran derivarse del uso del Sitio o de la imposibilidad de acceder a él. Los contenidos del Sitio tienen carácter meramente informativo.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-4">5. Legislación aplicable y jurisdicción</h2>
              <p>
                Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los juzgados y tribunales de la ciudad de Barcelona, con renuncia expresa a cualquier otro fuero.
              </p>
            </div>

            <p className="text-white/30 text-sm">Última actualización: marzo 2025.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
