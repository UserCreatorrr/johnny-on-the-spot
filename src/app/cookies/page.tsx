import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Política de Cookies | Johnny on the Spot",
  description: "Información sobre el uso de cookies en el sitio web de Johnny on the Spot, agencia de comunicación en Barcelona.",
  alternates: { canonical: "https://www.johnnyonthespot.es/cookies" },
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <PageLayout>
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Cookies" }]} />
        </div>
      </div>

      <section className="pt-8 pb-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Legal</p>
          <h1 className="text-4xl lg:text-5xl font-black tracking-tighter text-white leading-none mb-10">
            Política de Cookies
          </h1>

          <div className="space-y-10 text-white/50 text-base leading-relaxed">
            <div>
              <h2 className="text-white font-bold text-xl mb-4">¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo cuando los visitas. Permiten que el sitio recuerde información sobre tu visita, como el idioma de preferencia y otras opciones de configuración.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-4">Cookies que utilizamos</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-white/70 font-semibold mb-2">Cookies técnicas (necesarias)</h3>
                  <p>
                    Son imprescindibles para el funcionamiento del Sitio. Sin ellas no podría navegar por las páginas ni utilizar sus funciones básicas. No requieren tu consentimiento.
                  </p>
                </div>
                <div>
                  <h3 className="text-white/70 font-semibold mb-2">Cookies de análisis (opcionales)</h3>
                  <p>
                    Nos permiten conocer el número de visitantes, las páginas más vistas y el comportamiento de navegación en el Sitio. La información es anónima y se usa exclusivamente para mejorar el servicio. Solo se activan si das tu consentimiento.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-4">¿Cómo gestionar las cookies?</h2>
              <p>
                Puedes configurar tu navegador para que rechace todas o algunas cookies, o para que te avise cuando los sitios web las establezcan o accedan a ellas. Si deshabilitas o rechazas las cookies, algunas partes del Sitio pueden resultar inaccesibles o no funcionar correctamente.
              </p>
              <p className="mt-4">
                Instrucciones para los navegadores más comunes: <a href="https://support.google.com/chrome/answer/95647" className="text-white underline hover:text-white/70 transition-colors" target="_blank" rel="noopener noreferrer">Chrome</a>, <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web" className="text-white underline hover:text-white/70 transition-colors" target="_blank" rel="noopener noreferrer">Firefox</a>, <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" className="text-white underline hover:text-white/70 transition-colors" target="_blank" rel="noopener noreferrer">Safari</a>.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-4">Más información</h2>
              <p>
                Para cualquier duda sobre el uso de cookies, puedes contactarnos en hola@johnnyonthespot.es. Consulta también nuestra <a href="/privacidad" className="text-white underline hover:text-white/70 transition-colors">Política de Privacidad</a>.
              </p>
            </div>

            <p className="text-white/30 text-sm">Última actualización: marzo 2025.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
