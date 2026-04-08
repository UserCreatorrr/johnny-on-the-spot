"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import { Iphone } from "@/components/ui/Iphone";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Incoming call screen shown during shake animation
function IncomingCallScreen() {
  return (
    <div
      className="w-full h-full flex flex-col select-none"
      style={{
        background: "#000",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
      }}
    >
      {/* Status bar */}
      <div className="flex justify-between items-center px-6 pt-4 pb-2 flex-shrink-0">
        <span className="text-[10px] font-semibold text-white">9:41</span>
        <div className="flex items-center gap-1.5">
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <rect x="0" y="4" width="3" height="6" rx="0.5" fill="white" />
            <rect x="4" y="2.5" width="3" height="7.5" rx="0.5" fill="white" />
            <rect x="8" y="1" width="3" height="9" rx="0.5" fill="white" />
            <rect x="12" y="0" width="2" height="10" rx="0.5" fill="white" opacity="0.3" />
          </svg>
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
            <path d="M6 1.5C8.2 1.5 10.1 2.5 11.3 4.1L12 3.2C10.5 1.2 8.4 0 6 0C3.6 0 1.5 1.2 0 3.2L0.7 4.1C1.9 2.5 3.8 1.5 6 1.5Z" fill="white"/>
            <path d="M6 4C7.4 4 8.6 4.6 9.5 5.6L10.2 4.7C9 3.4 7.6 2.5 6 2.5C4.4 2.5 3 3.4 1.8 4.7L2.5 5.6C3.4 4.6 4.6 4 6 4Z" fill="white"/>
            <circle cx="6" cy="8" r="1.5" fill="white"/>
          </svg>
          <div className="w-5 h-2.5 rounded-[2px] border border-white/40 relative">
            <div className="absolute inset-[1px] bg-white rounded-[1px]" />
          </div>
        </div>
      </div>

      {/* Incoming call label */}
      <div className="flex flex-col items-center pt-8 flex-1">
        <p className="text-white/60 text-[13px] mb-6">Llamada entrante</p>

        {/* Avatar with pulse rings */}
        <div className="relative flex items-center justify-center mb-10">
          <motion.div
            className="absolute rounded-full border border-white/10"
            style={{ width: 200, height: 200 }}
            animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            className="absolute rounded-full border border-white/10"
            style={{ width: 200, height: 200 }}
            animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
          />
          <Image src="/logo-white.png" alt="Johnny on the Spot" width={160} height={60} className="w-36 object-contain z-10" />
        </div>
      </div>

      {/* Accept / Decline buttons */}
      <div className="flex justify-around items-center px-10 pb-12 flex-shrink-0">
        {/* Decline */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
          </div>
          <span className="text-white/60 text-[11px]">Rechazar</span>
        </div>
        {/* Accept */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
          </div>
          <span className="text-white/60 text-[11px]">Aceptar</span>
        </div>
      </div>
    </div>
  );
}

function PhoneScreen() {
  return (
    <div
      className="w-full h-full bg-white flex flex-col overflow-hidden select-none"
      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" }}
    >
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
            <path d="M6 1.5C8.2 1.5 10.1 2.5 11.3 4.1L12 3.2C10.5 1.2 8.4 0 6 0C3.6 0 1.5 1.2 0 3.2L0.7 4.1C1.9 2.5 3.8 1.5 6 1.5Z" fill="black"/>
            <path d="M6 4C7.4 4 8.6 4.6 9.5 5.6L10.2 4.7C9 3.4 7.6 2.5 6 2.5C4.4 2.5 3 3.4 1.8 4.7L2.5 5.6C3.4 4.6 4.6 4 6 4Z" fill="black"/>
            <circle cx="6" cy="8" r="1.5" fill="black"/>
          </svg>
          <div className="w-5 h-2.5 rounded-[2px] border border-black/30 relative">
            <div className="absolute inset-[1px] bg-black rounded-[1px]" />
          </div>
        </div>
      </div>
      <div className="px-5 pt-1 pb-2 flex-shrink-0">
        <span className="text-[13px] text-[#007AFF]">‹ Contactos</span>
      </div>
      <div className="flex flex-col items-center pb-4 flex-shrink-0">
        <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center mb-3 overflow-hidden">
          <Image src="/logo-white.png" alt="Johnny on the Spot" width={60} height={22} className="w-12 object-contain" />
        </div>
        <h2 className="text-[19px] font-bold text-black leading-tight tracking-tight">Johnny on the Spot</h2>
        <p className="text-[12px] text-black/40 mt-0.5">Agencia de comunicación</p>
      </div>
      <div className="grid grid-cols-4 gap-2 px-5 mb-4 flex-shrink-0">
        {[
          { icon: "✉", label: "Email" },
          { icon: "📞", label: "Llamar" },
          { icon: "🔗", label: "Web" },
          { icon: "💬", label: "Chat" },
        ].map((btn) => (
          <div key={btn.label} className="flex flex-col items-center gap-1">
            <div className="w-full aspect-square rounded-xl bg-[#F2F2F7] flex items-center justify-center text-base">{btn.icon}</div>
            <span className="text-[9px] text-black/50">{btn.label}</span>
          </div>
        ))}
      </div>
      <div className="flex-1 px-4 overflow-hidden">
        <div className="bg-[#F2F2F7] rounded-xl overflow-hidden">
          {[
            { label: "Teléfono", value: "+34 610 000 000", accent: true },
            { label: "Email", value: "hola@johnnyonthespot.es", accent: true },
            { label: "Dirección", value: "Provença 385, BCN", accent: false },
            { label: "LinkedIn", value: "/johnnyonthespot", accent: true },
            { label: "Instagram", value: "@johnnyonthespot", accent: true },
          ].map((row, i, arr) => (
            <div key={row.label} className={`px-4 py-2.5 flex justify-between items-center ${i < arr.length - 1 ? "border-b border-black/[0.08]" : ""}`}>
              <span className="text-[12px] text-black/50 w-20 flex-shrink-0">{row.label}</span>
              <span className={`text-[12px] text-right truncate ml-2 ${row.accent ? "text-[#007AFF]" : "text-black"}`}>{row.value}</span>
            </div>
          ))}
        </div>
        <div className="mt-2.5 bg-[#F2F2F7] rounded-xl px-4 py-2.5">
          <p className="text-[10px] text-black/40 leading-relaxed">Respuesta garantizada en menos de 24h. Primer análisis sin coste ni compromiso.</p>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  const ref         = useRef(null);
  const isInView    = useInView(ref, { once: true, margin: "-100px" });
  const controls    = useAnimation();
  const [showCall, setShowCall] = useState(false);

  useEffect(() => {
    if (isInView) {
      // Show incoming call screen at start
      setShowCall(true);
      controls.start({
        x: [0, -10, 10, -10, 10, -6, 6, 0, "30vw"],
        transition: {
          times: [0, 0.08, 0.18, 0.28, 0.38, 0.48, 0.58, 0.68, 1],
          duration: 1.3,
          ease: "easeOut",
        },
      }).then(() => {
        // Switch to contacts screen after animation ends
        setShowCall(false);
      });
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="relative flex items-center justify-center min-h-screen overflow-hidden bg-white">
      <motion.div
        className="absolute left-10 lg:left-24 max-w-md z-10"
        initial={{ opacity: 0, x: -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
        transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-black/30 text-xs tracking-widest uppercase mb-4">Contacto</p>
        <h2 className="text-5xl lg:text-7xl font-black text-black tracking-tighter leading-none mb-6">
          Call<br />Johnny.
        </h2>
        <p className="text-black/50 text-lg leading-relaxed max-w-sm">
          Leemos todos los mensajes ese mismo día. Si el proyecto es viable, proponemos una llamada en las próximas 48 horas.
        </p>
      </motion.div>

      <motion.div animate={controls} initial={{ x: 0 }} className="relative z-20">
        <div style={{ height: "min(85vh, 640px)", width: "auto", aspectRatio: "320/650" }}>
          <Iphone>
            <AnimatePresence mode="wait">
              {showCall ? (
                <motion.div
                  key="call"
                  className="w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IncomingCallScreen />
                </motion.div>
              ) : (
                <motion.div
                  key="contacts"
                  className="w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <PhoneScreen />
                </motion.div>
              )}
            </AnimatePresence>
          </Iphone>
        </div>
      </motion.div>
    </div>
  );
}

export default function ContactoPage() {
  return (
    <>
      <main id="main-content" className="min-h-screen bg-white">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
