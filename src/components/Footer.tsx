import Link from "next/link";
import Image from "next/image";
import { type Locale, localizeHref, t } from "@/lib/i18n";

export default function Footer({ locale = "es" }: { locale?: Locale }) {
  const tt = t(locale);
  const services = tt.footer.serviceLabels;
  const legal = tt.footer.legal;

  return (
    <footer className="bg-black border-t border-white/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <Link href={localizeHref("/", locale)} aria-label={tt.nav.home_aria}>
              <Image
                src="/logo-white.png"
                alt="Johnny on the Spot"
                width={140}
                height={42}
                className="h-9 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity mb-6"
              />
            </Link>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              {tt.footer.tagline}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white/20 text-xs tracking-widest uppercase font-medium mb-6">{tt.footer.services}</h3>
            <ul className="space-y-3" role="list">
              {services.map((label) => (
                <li key={label}>
                  <Link href={localizeHref("/servicios", locale)} className="text-white/45 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white/20 text-xs tracking-widest uppercase font-medium mb-6">{tt.footer.contact}</h3>
            <address className="not-italic space-y-3">
              <p className="text-white/45 text-sm">{tt.footer.location}</p>
              <a href="mailto:info@jotsagency.com" className="block text-white/45 hover:text-white text-sm transition-colors">
                info@jotsagency.com
              </a>
            </address>
          </div>
        </div>

        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/20 text-xs">© {new Date().getFullYear()} Johnny on the Spot. {tt.footer.rights}</p>
          <ul className="flex items-center gap-6" role="list">
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={localizeHref(item.href, locale)} className="text-white/20 hover:text-white/50 text-xs transition-colors">
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
