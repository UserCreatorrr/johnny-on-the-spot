"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-white/60 text-sm leading-relaxed max-w-2xl">
          Usamos cookies para mejorar tu experiencia. Consulta nuestra{" "}
          <Link href="/cookies" className="text-white underline underline-offset-2 hover:text-white/70 transition-colors">
            política de cookies
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={reject}
            className="text-white/40 hover:text-white text-sm transition-colors px-4 py-2"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="bg-white text-black text-sm font-semibold px-6 py-2 hover:bg-white/90 transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
