import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Página no encontrada | Johnny on the Spot",
  description: "La página que buscas no existe. Vuelve al inicio o explora nuestros servicios.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <p className="text-white/15 font-black text-8xl lg:text-9xl leading-none mb-8">404</p>
          <h1 className="text-3xl lg:text-4xl font-black tracking-tighter text-white mb-4">
            Esta página no existe.
          </h1>
          <p className="text-white/40 text-lg leading-relaxed mb-10">
            Puede que la URL haya cambiado o que el contenido ya no esté disponible. Prueba con el menú o vuelve al inicio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-white text-black px-8 py-4 text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Ir al inicio
            </Link>
            <Link
              href="/contacto"
              className="border border-white/20 text-white/60 px-8 py-4 text-sm font-medium hover:border-white/60 hover:text-white transition-colors"
            >
              Contactar
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
