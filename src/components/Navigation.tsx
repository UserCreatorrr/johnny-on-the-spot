"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = [
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      { label: "Dirección Creativa", href: "/servicios/direccion-produccion-creativa" },
      { label: "Dirección de Arte", href: "/servicios/direccion-de-arte" },
      { label: "Producción Gráfica", href: "/servicios/produccion-grafica" },
      { label: "Guión y Vídeo", href: "/servicios/guion-edicion-video" },
      { label: "Creación de Contenido", href: "/servicios/creacion-de-contenido" },
      { label: "Diseño de Identidad", href: "/servicios/diseno-de-identidad" },
      { label: "Naming", href: "/servicios/naming" },
      { label: "Copywriting", href: "/servicios/copywriting" },
      { label: "Eventos Corporativos", href: "/servicios/eventos-corporativos" },
      { label: "Estrategia de Comunicación", href: "/servicios/estrategia-de-comunicacion" },
      { label: "Activación de Marca", href: "/servicios/activacion-de-marca" },
      { label: "Marketing Digital", href: "/servicios/marketing-digital" },
      { label: "IA y Automatizaciones", href: "/servicios/ia-y-automatizaciones" },
    ],
  },
  {
    label: "Sectores",
    href: "/sectores",
    children: [
      { label: "Farmacéutico y Salud", href: "/sectores/farmaceutico-salud" },
      { label: "Gran Consumo y Retail", href: "/sectores/gran-consumo-retail" },
      { label: "Lujo y Premium", href: "/sectores/lujo-premium" },
      { label: "Tecnología y B2B", href: "/sectores/tecnologia-b2b" },
      { label: "Automoción", href: "/sectores/automocion" },
      { label: "Hostelería y Turismo", href: "/sectores/hosteleria-turismo" },
      { label: "Alimentación y Bebidas", href: "/sectores/alimentacion-bebidas" },
    ],
  },
  {
    label: "Casos",
    href: "/casos-de-exito",
  },
  {
    label: "Soluciones",
    href: "/soluciones",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Nosotros",
    href: "/nosotros",
  },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black border-b border-white/10" : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center group"
          aria-label="Johnny on the Spot: Inicio"
        >
          <Image
            src="/logo-white.png"
            alt="Johnny on the Spot"
            width={160}
            height={48}
            className="h-10 w-auto object-contain group-hover:opacity-80 transition-opacity"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {navItems.map((item) => (
            <li
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="text-white/70 hover:text-white text-sm font-light tracking-wide transition-colors py-2 flex items-center gap-1"
              >
                {item.label}
                {item.children && (
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </Link>

              {/* Dropdown */}
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 pt-2 min-w-[220px]">
                  <ul
                    className="bg-black border border-white/10 py-2"
                    role="list"
                  >
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contacto"
            className="text-sm bg-white text-black px-5 py-2.5 font-medium hover:bg-white/90 transition-colors"
          >
            Hablemos
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-black border-t border-white/10 px-6 py-6"
          role="dialog"
          aria-label="Menú móvil"
        >
          <ul className="space-y-1" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 text-white/70 hover:text-white text-base border-b border-white/5 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="pl-4 mt-1 mb-2 space-y-1" role="list">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-2 text-sm text-white/40 hover:text-white/80 transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/contacto"
            className="mt-6 block text-center text-sm bg-white text-black px-5 py-3 font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Hablemos
          </Link>
        </div>
      )}
    </header>
  );
}
