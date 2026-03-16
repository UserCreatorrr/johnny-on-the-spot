"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Servicios", href: "/servicios" },
  { label: "Sectores", href: "/sectores" },
  { label: "Casos", href: "/casos-de-exito" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Blog", href: "/blog" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-8" role="banner">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="relative z-[60]"
            aria-label="Johnny on the Spot: Inicio"
          >
            <Image
              src="/logo-white.png"
              alt="Johnny on the Spot"
              width={160}
              height={48}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* Hamburger — always visible */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="relative z-[60] w-10 h-10 flex flex-col justify-center items-center gap-[7px]"
          >
            <span
              className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${
                open ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${
                open ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
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
            className="fixed inset-0 z-40 bg-black flex flex-col px-6 lg:px-8 pt-20"
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
                      className="block text-5xl lg:text-7xl font-black tracking-tighter text-white/20 hover:text-white transition-colors duration-150 leading-tight py-1.5"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="text-white/20 text-xs tracking-widest uppercase pb-8"
            >
              Agencia de comunicación integral · Barcelona
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
