"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import { Iphone } from "@/components/ui/Iphone";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function IncomingCallScreen() {
  return (
    <div className="w-full h-full flex flex-col select-none" style={{ background: "#000", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" }}>
      <div className="flex justify-between items-center px-6 pt-4 pb-2 flex-shrink-0">
        <span className="text-[10px] font-semibold text-white">9:41</span>
        <div className="flex items-center gap-1.5">
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <rect x="0" y="4" width="3" height="6" rx="0.5" fill="white"/>
            <rect x="4" y="2.5" width="3" height="7.5" rx="0.5" fill="white"/>
            <rect x="8" y="1" width="3" height="9" rx="0.5" fill="white"/>
            <rect x="12" y="0" width="2" height="10" rx="0.5" fill="white" opacity="0.3"/>
          </svg>
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
            <path d="M6 1.5C8.2 1.5 10.1 2.5 11.3 4.1L12 3.2C10.5 1.2 8.4 0 6 0C3.6 0 1.5 1.2 0 3.2L0.7 4.1C1.9 2.5 3.8 1.5 6 1.5Z" fill="white"/>
            <path d="M6 4C7.4 4 8.6 4.6 9.5 5.6L10.2 4.7C9 3.4 7.6 2.5 6 2.5C4.4 2.5 3 3.4 1.8 4.7L2.5 5.6C3.4 4.6 4.6 4 6 4Z" fill="white"/>
            <circle cx="6" cy="8" r="1.5" fill="white"/>
          </svg>
          <div className="w-5 h-2.5 rounded-[2px] border border-white/40 relative">
            <div className="absolute inset-[1px] bg-white rounded-[1px]"/>
          </div>
        </div>
      </div>
      <p className="text-white/60 text-[13px] text-center pt-6 pb-4">Llamada entrante</p>
      <div className="flex flex-col items-center flex-1 pt-4">
        <div className="relative flex items-center justify-center mb-10">
          <motion.div className="absolute rounded-full border border-white/10" style={{ width: 200, height: 200 }}
            animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}/>
          <motion.div className="absolute rounded-full border border-white/10" style={{ width: 200, height: 200 }}
            animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.4 }}/>
          <Image src="/logo-call.png" alt="Johnny on the Spot" width={200} height={80} className="w-44 object-contain z-10"/>
        </div>
      </div>
      <div className="flex items-center pb-10 flex-shrink-0" style={{ gap: "5rem", justifyContent: "center" }}>
        <div className="flex flex-col items-center gap-1.5">
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
          </div>
          <span className="text-white/50 text-[10px]">Rechazar</span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
          </div>
          <span className="text-white/50 text-[10px]">Aceptar</span>
        </div>
      </div>
    </div>
  );
}

function NewContactScreen() {
  const [form, setForm] = useState({ nombre: "", apellidos: "", empresa: "", url: "", ayuda: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (form.nombre || form.empresa) setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    background: "transparent",
    border: "none",
    outline: "none",
    width: "100%",
    fontSize: "14px",
    color: "#000",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
  };
  return (
    <div className="w-full h-full flex flex-col select-none bg-[#F2F2F7]"
      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" }}>

      {/* Status bar */}
      <div className="flex justify-between items-center px-4 pt-3 pb-1 flex-shrink-0 bg-[#F2F2F7]">
        <span className="text-[10px] font-semibold text-black">9:41</span>
        <div className="flex items-center gap-1">
          <svg width="12" height="9" viewBox="0 0 14 10" fill="none">
            <rect x="0" y="4" width="3" height="6" rx="0.5" fill="black"/>
            <rect x="4" y="2.5" width="3" height="7.5" rx="0.5" fill="black"/>
            <rect x="8" y="1" width="3" height="9" rx="0.5" fill="black"/>
            <rect x="12" y="0" width="2" height="10" rx="0.5" fill="black" opacity="0.3"/>
          </svg>
          <svg width="11" height="9" viewBox="0 0 12 10" fill="none">
            <path d="M6 1.5C8.2 1.5 10.1 2.5 11.3 4.1L12 3.2C10.5 1.2 8.4 0 6 0C3.6 0 1.5 1.2 0 3.2L0.7 4.1C1.9 2.5 3.8 1.5 6 1.5Z" fill="black"/>
            <path d="M6 4C7.4 4 8.6 4.6 9.5 5.6L10.2 4.7C9 3.4 7.6 2.5 6 2.5C4.4 2.5 3 3.4 1.8 4.7L2.5 5.6C3.4 4.6 4.6 4 6 4Z" fill="black"/>
            <circle cx="6" cy="8" r="1.5" fill="black"/>
          </svg>
          <div className="w-4 h-2 rounded-[2px] border border-black/30 relative">
            <div className="absolute inset-[1px] bg-black rounded-[1px]"/>
          </div>
        </div>
      </div>

      {/* Nav bar */}
      <div className="flex justify-between items-center px-4 py-2 flex-shrink-0 bg-[#F2F2F7]">
        <span className="text-[13px] text-[#007AFF]">Cancelar</span>
        <span className="text-[14px] font-semibold text-black">Queremos conocerte</span>
        <button onClick={handleSubmit}
          className="text-[13px] font-semibold"
          style={{ color: form.nombre || form.empresa ? "#007AFF" : "#aaa" }}>
          OK
        </button>
      </div>

      {sent ? (
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mb-3">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <p className="text-[15px] font-semibold text-black mb-1">Contacto enviado</p>
          <p className="text-[12px] text-black/40">Te responderemos en menos de 24h.</p>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto px-3 py-2">
          <div className="bg-white rounded-xl overflow-hidden mb-3 shadow-sm">
            <div className="px-4 py-2.5 border-b border-black/[0.08]">
              <input style={inputStyle} placeholder="Nombre" value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} />
            </div>
            <div className="px-4 py-2.5 border-b border-black/[0.08]">
              <input style={inputStyle} placeholder="Apellidos" value={form.apellidos} onChange={e => setForm(f => ({ ...f, apellidos: e.target.value }))} />
            </div>
            <div className="px-4 py-2.5">
              <input style={inputStyle} placeholder="Empresa" value={form.empresa} onChange={e => setForm(f => ({ ...f, empresa: e.target.value }))} />
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden mb-3 shadow-sm">
            <div className="px-4 py-2.5">
              <input style={inputStyle} placeholder="URL de tu empresa" type="url" value={form.url} onChange={e => setForm(f => ({ ...f, url: e.target.value }))} />
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden mb-3 shadow-sm">
            <div className="px-4 py-2.5">
              <textarea style={{ ...inputStyle, resize: "none", height: "64px", lineHeight: "1.4" }} placeholder="¿En qué te podemos ayudar?" value={form.ayuda} onChange={e => setForm(f => ({ ...f, ayuda: e.target.value }))} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ContactSection() {
  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [showCall, setShowCall] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShowCall(true);
      controls.start({
        x: [0, -10, 10, -10, 10, -6, 6, 0, "30vw"],
        transition: {
          times: [0, 0.08, 0.18, 0.28, 0.38, 0.48, 0.58, 0.68, 1],
          duration: 1.3,
          ease: "easeOut",
        },
      }).then(() => {
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
                <motion.div key="call" className="w-full h-full"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}>
                  <IncomingCallScreen />
                </motion.div>
              ) : (
                <motion.div key="form" className="w-full h-full"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}>
                  <NewContactScreen />
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
