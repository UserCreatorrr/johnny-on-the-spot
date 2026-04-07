import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Iphone } from "@/components/ui/Iphone";
import { TypingAnimation } from "@/components/ui/TypingAnimation";

export const metadata: Metadata = {
  title: "Contacto: Call Johnny | Johnny on the Spot",
  description:
    "¿Tienes un proyecto? Cuéntanoslo. Un equipo sénior leerá tu mensaje hoy. Sin formularios innecesarios, sin esperas.",
  alternates: { canonical: "https://www.johnnyonthespot.es/contacto" },
  robots: { index: true, follow: true },
};

function PhoneScreen() {
  return (
    <div
      className="w-full h-full bg-white flex flex-col overflow-hidden select-none"
      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" }}
    >
      {/* Status bar */}
      <div className="flex justify-between items-center px-6 pt-4 pb-2 flex-shrink-0">
        <span className="text-[10px] font-semibold text-black">9:41</span>
        <div className="flex items-center gap-1.5">
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <rect x="0" y="4" width="3" height="6" rx="0.5" fill="black" />
            <rect x="4" y="2.5" width="3" height="7.5" rx="0.5" fill="black" />
            <rect x="8" y="1" width="3" height="9" rx="0.5" fill="black" />
            <rect x="12" y="0" width="2" height="10" rx="0.5" fill="black" opacity="0.3" />
          </svg>
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
            <path d="M6 1.5C8.2 1.5 10.1 2.5 11.3 4.1L12 3.2C10.5 1.2 8.4 0 6 0C3.6 0 1.5 1.2 0 3.2L0.7 4.1C1.9 2.5 3.8 1.5 6 1.5Z" fill="black" />
            <path d="M6 4C7.4 4 8.6 4.6 9.5 5.6L10.2 4.7C9 3.4 7.6 2.5 6 2.5C4.4 2.5 3 3.4 1.8 4.7L2.5 5.6C3.4 4.6 4.6 4 6 4Z" fill="black" />
            <circle cx="6" cy="8" r="1.5" fill="black" />
          </svg>
          <div className="w-5 h-2.5 rounded-[2px] border border-black/30 relative">
            <div className="absolute inset-[1px] bg-black rounded-[1px]" />
          </div>
        </div>
      </div>

      {/* Back nav */}
      <div className="px-5 pt-1 pb-2 flex-shrink-0">
        <span className="text-[13px] text-[#007AFF]">‹ Contactos</span>
      </div>

      {/* Avatar */}
      <div className="flex flex-col items-center pb-4 flex-shrink-0">
        <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center mb-3 overflow-hidden">
          <Image src="/logo-white.png" alt="Johnny on the Spot" width={60} height={22} className="w-12 object-contain" />
        </div>
        <h2 className="text-[19px] font-bold text-black leading-tight tracking-tight">Johnny on the Spot</h2>
        <p className="text-[12px] text-black/40 mt-0.5">Agencia de comunicación</p>
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-4 gap-2 px-5 mb-4 flex-shrink-0">
        {[
          { icon: "✉", label: "Email" },
          { icon: "📞", label: "Llamar" },
          { icon: "🔗", label: "Web" },
          { icon: "💬", label: "Chat" },
        ].map((btn) => (
          <div key={btn.label} className="flex flex-col items-center gap-1">
            <div className="w-full aspect-square rounded-xl bg-[#F2F2F7] flex items-center justify-center text-base">
              {btn.icon}
            </div>
            <span className="text-[9px] text-black/50">{btn.label}</span>
          </div>
        ))}
      </div>

      {/* Info list */}
      <div className="flex-1 px-4 overflow-hidden">
        <div className="bg-[#F2F2F7] rounded-xl overflow-hidden">
          {[
            { label: "Teléfono", value: "+34 610 000 000", accent: true },
            { label: "Email", value: "hola@johnnyonthespot.es", accent: true },
            { label: "Dirección", value: "Provença 385, BCN", accent: false },
            { label: "LinkedIn", value: "/johnnyonthespot", accent: true },
            { label: "Instagram", value: "@johnnyonthespot", accent: true },
          ].map((row, i, arr) => (
            <div
              key={row.label}
              className={`px-4 py-2.5 flex justify-between items-center ${i < arr.length - 1 ? "border-b border-black/[0.08]" : ""}`}
            >
              <span className="text-[12px] text-black/50 w-20 flex-shrink-0">{row.label}</span>
              <span className={`text-[12px] text-right truncate ml-2 ${row.accent ? "text-[#007AFF]" : "text-black"}`}>
                {row.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-2.5 bg-[#F2F2F7] rounded-xl px-4 py-2.5">
          <p className="text-[10px] text-black/40 leading-relaxed">
            Respuesta garantizada en menos de 24h. Primer análisis sin coste ni compromiso.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ContactoPage() {
  return (
    <PageLayout>
      <div className="pt-28 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Contacto" }]} />
        </div>
      </div>

      <section className="bg-white pt-8 pb-20 lg:pb-28 border-t border-black/5" aria-labelledby="contacto-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — texto */}
            <div className="flex flex-col justify-center px-6 lg:px-16 py-16">
              <p className="text-black/30 text-xs tracking-widest uppercase mb-6">Contacto</p>
              <TypingAnimation
                as="h1"
                id="contacto-heading"
                className="text-6xl lg:text-8xl font-black tracking-tighter leading-none text-black mb-8 block"
                startOnView={false}
                duration={80}
                showCursor={true}
              >
                Call Johnny.
              </TypingAnimation>
              <p className="text-black/50 text-xl lg:text-2xl leading-relaxed max-w-md">
                Leemos todos los mensajes ese mismo día. Si el proyecto es viable, proponemos una llamada en las próximas 48 horas.
              </p>
            </div>

            {/* Right — iPhone */}
            <div className="flex justify-center lg:justify-end items-center px-6 lg:px-16">
              <div className="w-full max-w-[300px] lg:max-w-[340px]">
                <Iphone>
                  <PhoneScreen />
                </Iphone>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
}
