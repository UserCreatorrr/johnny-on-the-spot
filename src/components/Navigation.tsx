"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { type Locale, localizeHref, alternatePath, t } from "@/lib/i18n";

const NAV_H = 80;

export default function Navigation() {
  const pathname = usePathname();
  const locale: Locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
  const tt = t(locale);

  const navItems = [
    { label: tt.nav.home, href: localizeHref("/", locale) },
    { label: tt.nav.about, href: localizeHref("/nosotros", locale) },
    { label: tt.nav.services, href: localizeHref("/servicios", locale) },
    // Oculto temporalmente: la seccion sigue accesible por URL (/on-the-spot).
    // Para volver a mostrarla, descomentar esta linea.
    // { label: tt.nav.onTheSpot, href: localizeHref("/on-the-spot", locale) },
    { label: tt.nav.contact, href: localizeHref("/contacto", locale) },
  ];
  const homeHref = localizeHref("/", locale);

  const isHome = pathname === homeHref;
  const isContact = pathname === localizeHref("/contacto", locale);
  const [open, setOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(!isHome && !isContact);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const router = useRouter();
  const [isNavigating, startNavigation] = useTransition();
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  // El header se queda por encima del overlay hasta que acaba su animacion de salida.
  const [overlayMounted, setOverlayMounted] = useState(false);

  // Precarga las paginas del menu nada mas entrar. Asi, al pulsar, la pagina
  // ya esta descargada y el cambio es inmediato aunque la red vaya cargada.
  const navHrefs = navItems.map((item) => item.href).join("|");
  useEffect(() => {
    navHrefs.split("|").forEach((href) => router.prefetch(href));
  }, [navHrefs, router]);

  // Al llegar a otra pagina, cerrar el menu y limpiar el estado de carga.
  useEffect(() => {
    setOpen(false);
    setPendingHref(null);
  }, [pathname]);

  // Si la navegacion termina sin cambiar de ruta, no dejar la opcion iluminada.
  useEffect(() => {
    if (!isNavigating) setPendingHref(null);
  }, [isNavigating]);

  useEffect(() => {
    if (open) setOverlayMounted(true);
  }, [open]);

  // Antes el menu se cerraba al instante y la pagina nueva llegaba despues;
  // si la red iba lenta parecia que el clic no hacia nada. Ahora la opcion
  // pulsada se ilumina y el menu sigue abierto hasta que la pagina esta lista.
  const navigate = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Ctrl/Cmd+clic, clic central, etc.: dejar que el navegador abra otra pestana.
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    if (href === pathname) {
      setOpen(false);
      window.scrollTo({ top: 0 });
      return;
    }
    setPendingHref(href);
    startNavigation(() => router.push(href));
  };

  useEffect(() => {
    const detectTheme = (): "dark" | "light" => {
      // 1. Explicit data-nav-theme attributes take priority (used on home page)
      const sections = document.querySelectorAll("[data-nav-theme]");
      for (const el of Array.from(sections)) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= NAV_H && rect.bottom > NAV_H) {
          return (el.getAttribute("data-nav-theme") as "dark" | "light") ?? "dark";
        }
      }
      // 2. Fallback: auto-detect background color of element under nav bar
      const el = document.elementFromPoint(window.innerWidth / 2, NAV_H + 10);
      let current: Element | null = el;
      while (current) {
        const bg = window.getComputedStyle(current).backgroundColor;
        if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") {
          const match = bg.match(/\d+/g);
          if (match) {
            const [r, g, b] = match.map(Number);
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            return luminance > 0.5 ? "light" : "dark";
          }
        }
        current = current.parentElement;
      }
      return "dark";
    };

    const handleScroll = () => {
      // On home: logo hidden until hero section has scrolled past the nav bar
      if (isHome) {
        const hero = document.getElementById("hero-section");
        setLogoVisible(hero ? hero.getBoundingClientRect().bottom <= NAV_H : true);
      } else if (isContact) {
        setLogoVisible(false);
      } else {
        setLogoVisible(true);
      }

      setTheme(detectTheme());
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome, isContact]);

  // When overlay is open always use dark (white) colors
  const effectiveTheme = open ? "dark" : theme;
  const isDark = effectiveTheme === "dark";
  const lineColor = isDark ? "bg-white" : "bg-black";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 ${open || overlayMounted ? "z-[10001]" : "z-50"} px-6 lg:px-8 pointer-events-none`} role="banner">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Hamburger — left, always visible, color adapts */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? tt.nav.closeMenu : tt.nav.openMenu}
            aria-expanded={open}
            className="relative z-[60] w-10 h-10 flex flex-col justify-center items-center gap-[7px] pointer-events-auto"
          >
            <span
              className={`block w-6 h-px transition-all duration-300 origin-center ${lineColor} ${
                open ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 origin-center ${lineColor} ${
                open ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>

          {/* Logo — right, hidden on home until hero animation completes */}
          <Link
            href={homeHref}
            onClick={() => setOpen(false)}
            className={`relative z-[60] transition-opacity duration-500 ${
              logoVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            aria-label={tt.nav.home_aria}
            tabIndex={logoVisible ? 0 : -1}
          >
            {/* White logo for dark sections */}
            <Image
              src="/nav-logo-white.png"
              alt="Johnny on the Spot"
              width={160}
              height={48}
              className={`h-12 w-auto object-contain absolute top-0 right-0 transition-opacity duration-300 ${
                isDark ? "opacity-100" : "opacity-0"
              }`}
              priority
            />
            {/* Black logo for light sections */}
            <Image
              src="/nav-logo-black.png"
              alt="Johnny on the Spot"
              width={160}
              height={48}
              className={`h-12 w-auto object-contain transition-opacity duration-300 ${
                isDark ? "opacity-0" : "opacity-100"
              }`}
              priority
            />
          </Link>
        </div>
      </header>

      {/* Fullscreen overlay */}
      <AnimatePresence onExitComplete={() => setOverlayMounted(false)}>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[10000] bg-black flex flex-col px-6 lg:px-8 pt-20 overflow-y-auto"
            role="dialog"
            aria-label="Menú principal"
            aria-busy={pendingHref !== null}
          >
            <nav className="flex-1 flex flex-col justify-center">
              <ul className="space-y-0" role="list">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.045 + 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => navigate(e, item.href)}
                      aria-current={item.href === pathname ? "page" : undefined}
                      className={`block text-3xl sm:text-4xl lg:text-6xl font-black tracking-tighter transition-colors duration-150 leading-snug py-1 ${
                        pendingHref === item.href
                          ? "text-white"
                          : pendingHref
                            ? "text-white/10"
                            : "text-white/20 hover:text-white"
                      }`}
                    >
                      {item.label}
                      {pendingHref === item.href && (
                        <span
                          className="inline-block w-2 h-2 lg:w-3 lg:h-3 ml-3 align-middle rounded-full bg-white animate-pulse"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="pb-8 flex flex-col gap-4"
            >
              {/* Language switcher */}
              <div className="flex items-center gap-3 text-xs tracking-widest uppercase">
                <Link
                  href={alternatePath(pathname, "es")}
                  onClick={(e) => navigate(e, alternatePath(pathname, "es"))}
                  aria-current={locale === "es" ? "true" : undefined}
                  className={locale === "es" ? "text-white" : "text-white/30 hover:text-white transition-colors"}
                >
                  ES
                </Link>
                <span className="text-white/20" aria-hidden="true">/</span>
                <Link
                  href={alternatePath(pathname, "en")}
                  onClick={(e) => navigate(e, alternatePath(pathname, "en"))}
                  aria-current={locale === "en" ? "true" : undefined}
                  className={locale === "en" ? "text-white" : "text-white/30 hover:text-white transition-colors"}
                >
                  EN
                </Link>
              </div>
              <p className="text-white/20 text-xs tracking-widest uppercase">
                {tt.nav.tagline}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
