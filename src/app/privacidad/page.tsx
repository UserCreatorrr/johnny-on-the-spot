import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Política de Privacidad | Johnny on the Spot",
  description: "Política de privacidad y tratamiento de datos personales de Johnny on the Spot, agencia de comunicación en Barcelona.",
  alternates: { canonical: "https://www.johnnyonthespot.es/privacidad" },
  robots: { index: false, follow: true },
};

export default function PrivacidadPage() {
  return (
    <PageLayout>
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Privacidad" }]} />
        </div>
      </div>

      <section className="pt-8 pb-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Legal</p>
          <h1 className="text-4xl lg:text-5xl font-black tracking-tighter text-white leading-none mb-10">
            Política de Privacidad
          </h1>

          <div className="space-y-10 text-white/50 text-base leading-relaxed">
            <div>
              <h2 className="text-white font-bold text-xl mb-4">1. Responsable del tratamiento</h2>
              <p>
                Johnny on the Spot (en adelante, «la Agencia») es responsable del tratamiento de los datos personales recogidos a través de este sitio web. Dirección: Carrer de Provença 385, 08025 Barcelona. Correo de contacto: info@jotsagency.com.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-4">2. Datos que recogemos</h2>
              <p>
                Recogemos los datos que nos proporcionas voluntariamente a través del formulario de contacto: nombre, empresa, dirección de correo electrónico, teléfono y el contenido del mensaje. No recogemos datos de carácter especialmente sensible.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-4">3. Finalidad y base jurídica</h2>
              <p>
                Los datos se utilizan exclusivamente para responder a tu consulta y, si así lo consientes, para el envío de comunicaciones comerciales sobre nuestros servicios. La base jurídica es tu consentimiento expreso (art. 6.1.a RGPD) y el interés legítimo en la gestión de relaciones comerciales.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-4">4. Conservación de datos</h2>
              <p>
                Conservamos tus datos durante el tiempo necesario para atender tu consulta y, en su caso, mientras dure la relación contractual. Una vez finalizada, se eliminarán salvo que la ley obligue a su conservación por un plazo determinado.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-4">5. Cesión a terceros</h2>
              <p>
                No cedemos tus datos a terceros salvo obligación legal o cuando sea estrictamente necesario para la prestación del servicio contratado (por ejemplo, proveedores de plataformas de correo bajo acuerdos de encargado de tratamiento conformes al RGPD).
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-4">6. Tus derechos</h2>
              <p>
                Tienes derecho a acceder, rectificar, suprimir, oponerte y solicitar la portabilidad de tus datos. Puedes ejercer estos derechos enviando un correo a info@jotsagency.com indicando tu nombre y el derecho que deseas ejercer. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-4">7. Cookies</h2>
              <p>
                Este sitio utiliza cookies técnicas necesarias para su funcionamiento. Consulta nuestra <a href="/cookies" className="text-white underline hover:text-white/70 transition-colors">Política de Cookies</a> para más información.
              </p>
            </div>

            <p className="text-white/30 text-sm">Última actualización: marzo 2025.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
