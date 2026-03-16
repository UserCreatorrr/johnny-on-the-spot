import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Dirección Creativa", href: "/servicios/direccion-produccion-creativa" },
  { label: "Dirección de Arte", href: "/servicios/direccion-de-arte" },
  { label: "Diseño de Identidad", href: "/servicios/diseno-de-identidad" },
  { label: "Eventos Corporativos", href: "/servicios/eventos-corporativos" },
  { label: "Activación de Marca", href: "/servicios/activacion-de-marca" },
  { label: "Estrategia", href: "/servicios/estrategia-de-comunicacion" },
  { label: "Marketing Digital", href: "/servicios/marketing-digital" },
  { label: "IA y Automatizaciones", href: "/servicios/ia-y-automatizaciones" },
];

const company = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Casos de Éxito", href: "/casos-de-exito" },
  { label: "Sectores", href: "/sectores" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

const legal = [
  { label: "Política de Privacidad", href: "/privacidad" },
  { label: "Aviso Legal", href: "/aviso-legal" },
  { label: "Cookies", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top section */}
        <div className="py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex mb-6 group" aria-label="Johnny on the Spot: Inicio">
              <Image
                src="/logo-white.png"
                alt="Johnny on the Spot"
                width={140}
                height={42}
                className="h-9 w-auto object-contain group-hover:opacity-70 transition-opacity"
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mt-4 max-w-xs">
              Agencia de comunicación integral en Barcelona. Estrategia, creatividad y producción para empresas que no pueden esperar.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/johnnyonthespot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors text-sm"
                aria-label="LinkedIn de Johnny on the Spot"
              >
                LinkedIn
              </a>
              <span className="text-white/10">|</span>
              <a
                href="https://www.instagram.com/johnnyonthespot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors text-sm"
                aria-label="Instagram de Johnny on the Spot"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white/20 text-xs tracking-widest uppercase font-medium mb-6">
              Servicios
            </h3>
            <ul className="space-y-3" role="list">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white/20 text-xs tracking-widest uppercase font-medium mb-6">
              Empresa
            </h3>
            <ul className="space-y-3" role="list">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white/20 text-xs tracking-widest uppercase font-medium mb-6">
              Contacto
            </h3>
            <address className="not-italic space-y-3">
              <p className="text-white/50 text-sm">Barcelona, España</p>
              <a
                href="mailto:hola@johnnyonthespot.es"
                className="block text-white/50 hover:text-white text-sm transition-colors"
              >
                hola@johnnyonthespot.es
              </a>
            </address>
            <div className="mt-8">
              <Link
                href="/contacto"
                className="inline-block text-sm bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition-colors"
              >
                Hablemos
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Johnny on the Spot. Todos los derechos reservados.
          </p>
          <ul className="flex items-center gap-6" role="list">
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/20 hover:text-white/50 text-xs transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
