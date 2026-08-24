export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

/**
 * Prefixes an internal href with the locale segment.
 * - Spanish (default) keeps URLs at the root: "/servicios".
 * - English mirrors them under "/en": "/en/servicios".
 * External links, mailto:, tel: and anchors are returned untouched.
 */
export function localizeHref(href: string, locale: Locale): string {
  if (locale === "es") return href;
  if (!href.startsWith("/")) return href; // external, mailto, tel, #anchor
  if (href === "/") return "/en";
  return `/en${href}`;
}

/** Maps the current pathname to its counterpart in the other locale. */
export function alternatePath(pathname: string, target: Locale): string {
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const base = isEn ? pathname.replace(/^\/en/, "") || "/" : pathname;
  return target === "en" ? localizeHref(base, "en") : base;
}

/** Chrome (navigation, footer, shared UI) copy. */
export const ui = {
  es: {
    nav: {
      home: "Home",
      about: "Nosotros",
      services: "Servicios",
      onTheSpot: "On The Spot",
      contact: "Contacto",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      home_aria: "Johnny on the Spot: Inicio",
      tagline: "Agencia de comunicación integral · Barcelona",
    },
    footer: {
      tagline:
        "Agencia de comunicación integral en Barcelona. Estrategia, creatividad y producción para empresas que no pueden esperar.",
      services: "Servicios",
      contact: "Contacto",
      location: "Barcelona, España",
      rights: "Todos los derechos reservados.",
      serviceLabels: [
        "Estrategia",
        "Comunicación",
        "Dirección Creativa",
        "Eventos",
        "Activación y Experiencias",
        "Marketing Digital",
        "IA & Automatizaciones",
        "Foto y Video",
        "RR.PP. y Prensa",
      ],
      legal: [
        { label: "Privacidad", href: "/privacidad" },
        { label: "Aviso Legal", href: "/aviso-legal" },
        { label: "Cookies", href: "/cookies" },
      ],
    },
    hero: { sound: "Sonido", mute: "Silenciar", enableSound: "Activar sonido" },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      onTheSpot: "On The Spot",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      home_aria: "Johnny on the Spot: Home",
      tagline: "Full-service communications agency · Barcelona",
    },
    footer: {
      tagline:
        "Full-service communications agency in Barcelona. Strategy, creativity and production for companies that can't wait.",
      services: "Services",
      contact: "Contact",
      location: "Barcelona, Spain",
      rights: "All rights reserved.",
      serviceLabels: [
        "Strategy",
        "Communication",
        "Creative Direction",
        "Events",
        "Activation & Experiences",
        "Digital Marketing",
        "AI & Automation",
        "Photo & Video",
        "PR & Press",
      ],
      legal: [
        { label: "Privacy", href: "/privacidad" },
        { label: "Legal Notice", href: "/aviso-legal" },
        { label: "Cookies", href: "/cookies" },
      ],
    },
    hero: { sound: "Sound", mute: "Mute", enableSound: "Unmute" },
  },
} as const;

export function t(locale: Locale) {
  return ui[locale];
}
