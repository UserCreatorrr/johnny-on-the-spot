"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
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
    { label: tt.nav.contact, href: localizeHref("/contacto", locale) },
  ];
  const homeHref = localizeHref("/", locale);

  const isHome = pathname === homeHref;
  const isContact = pathname === localizeHref("/contacto", locale);
  const [open, setOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(!isHome && !isContact);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

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
      <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-8 pointer-events-none" role="banner">
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
            className={`relative z-[60] transition-opacity duration-500 pointer-events-auto ${
              logoVisible ? "opacity-100" : "opacity-0 pointer-events-none"
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
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black flex flex-col px-6 lg:px-8 pt-20 overflow-y-auto"
            role="dialog"
            aria-label="Menú principal"
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
                      onClick={() => setOpen(false)}
                      className="block text-3xl sm:text-4xl lg:text-6xl font-black tracking-tighter text-white/20 hover:text-white transition-colors duration-150 leading-snug py-1"
                    >
                      {item.label}
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
                  onClick={() => setOpen(false)}
                  aria-current={locale === "es" ? "true" : undefined}
                  className={locale === "es" ? "text-white" : "text-white/30 hover:text-white transition-colors"}
                >
                  ES
                </Link>
                <span className="text-white/20" aria-hidden="true">/</span>
                <Link
                  href={alternatePath(pathname, "en")}
                  onClick={() => setOpen(false)}
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
