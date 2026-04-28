"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
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
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", ayuda: "" });

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden"
      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" }}>

      {/* Status bar */}
      <div className="flex justify-between items-center px-5 pt-3 pb-1 flex-shrink-0">
        <span className="text-[11px] font-semibold text-black">9:41</span>
        <div className="flex items-center gap-1">
          <svg width="15" height="11" viewBox="0 0 15 11" fill="black"><rect x="0" y="4" width="3" height="7" rx="1"/><rect x="4" y="2.5" width="3" height="8.5" rx="1"/><rect x="8" y="1" width="3" height="10" rx="1"/><rect x="12" y="0" width="3" height="11" rx="1"/></svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="black"><path d="M8 2.4C10.5 2.4 12.7 3.5 14.2 5.2L15.5 3.8C13.6 1.8 11 0.5 8 0.5C5 0.5 2.4 1.8 0.5 3.8L1.8 5.2C3.3 3.5 5.5 2.4 8 2.4Z"/><path d="M8 5.3C9.8 5.3 11.4 6.1 12.5 7.3L13.8 5.9C12.3 4.4 10.3 3.4 8 3.4C5.7 3.4 3.7 4.4 2.2 5.9L3.5 7.3C4.6 6.1 6.2 5.3 8 5.3Z"/><circle cx="8" cy="10.5" r="1.5"/></svg>
          <div className="flex items-center gap-0.5">
            <div className="w-6 h-3 rounded-sm border border-black/40 p-px flex items-center">
              <div className="w-4 h-full bg-black rounded-sm"/>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="px-5 pt-8 pb-4 flex-shrink-0" style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <p className="text-[10px] text-black/35 tracking-widest uppercase mb-0.5">Johnny on the Spot</p>
        <h3 className="text-[17px] font-bold text-black leading-tight">Queremos conocerte</h3>
      </div>

      {sent ? (
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mb-3">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <p className="text-[15px] font-semibold text-black mb-1">Mensaje enviado</p>
        </div>
      ) : (
        <>
          {/* Form */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
            <div className="border-b border-black/10 pb-3">
              <label className="text-[10px] text-black/40 tracking-wider uppercase block mb-1">Nombre</label>
              <input type="text" placeholder="Tu nombre"
                className="w-full text-[13px] text-black placeholder:text-black/25 bg-transparent outline-none"
                value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} />
            </div>
            <div className="border-b border-black/10 pb-3">
              <label className="text-[10px] text-black/40 tracking-wider uppercase block mb-1">Empresa</label>
              <input type="text" placeholder="Nombre de tu empresa"
                className="w-full text-[13px] text-black placeholder:text-black/25 bg-transparent outline-none"
                value={form.empresa} onChange={e => setForm(f => ({ ...f, empresa: e.target.value }))} />
            </div>
            <div className="border-b border-black/10 pb-3">
              <label className="text-[10px] text-black/40 tracking-wider uppercase block mb-1">Email</label>
              <input type="email" placeholder="tu@email.com"
                className="w-full text-[13px] text-black placeholder:text-black/25 bg-transparent outline-none"
                value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
            </div>
            <div className="pb-3">
              <label className="text-[10px] text-black/40 tracking-wider uppercase block mb-1">¿En qué te ayudamos?</label>
              <textarea placeholder="Cuéntanos tu proyecto..." rows={3}
                className="w-full text-[13px] text-black placeholder:text-black/25 bg-transparent outline-none resize-none"
                value={form.ayuda} onChange={e => setForm(f => ({ ...f, ayuda: e.target.value }))} />
            </div>
          </div>

          {/* CTA */}
          <div className="px-5 pb-6 pt-3 flex-shrink-0" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
            <button
              onClick={() => { if (form.nombre || form.email) setSent(true); }}
              className="w-full bg-black text-white text-[13px] font-semibold py-3 rounded-xl tracking-wide hover:bg-black/85 transition-colors">
              Enviar →
            </button>
          </div>
        </>
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
      }).then(() => { setShowCall(false); });
    }
  }, [isInView, controls]);

  const contactLinks = (
    <>
      <a href="mailto:info@jotsagency.com"
        className="group w-12 hover:w-44 h-12 hover:bg-black relative bg-zinc-800 rounded text-neutral-50 duration-700 before:duration-700 font-bold flex justify-start gap-2 items-center p-2 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-zinc-800 before:hover:bg-black before:rotate-45">
        <svg className="w-8 h-8 shrink-0 fill-neutral-50" viewBox="0 0 24 24"><path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all text-sm whitespace-nowrap">Email</span>
      </a>
      <a href="https://www.instagram.com/jotsagency?igsh=MXJteW8zam5saGNvcg==" target="_blank" rel="noopener noreferrer"
        className="group w-12 hover:w-44 h-12 hover:bg-black relative bg-zinc-800 rounded text-neutral-50 duration-700 before:duration-700 font-bold flex justify-start gap-2 items-center p-2 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-zinc-800 before:hover:bg-black before:rotate-45">
        <svg className="w-8 h-8 shrink-0 fill-neutral-50" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all text-sm whitespace-nowrap">Instagram</span>
      </a>
      <a href="https://www.linkedin.com/company/johnny-on-the-spot-agency/" target="_blank" rel="noopener noreferrer"
        className="group w-12 hover:w-44 h-12 hover:bg-black relative bg-zinc-800 rounded text-neutral-50 duration-700 before:duration-700 font-bold flex justify-start gap-2 items-center p-2 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-zinc-800 before:hover:bg-black before:rotate-45">
        <svg className="w-8 h-8 shrink-0 fill-neutral-50" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"><path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"/></svg>
        <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all text-sm whitespace-nowrap">LinkedIn</span>
      </a>
    </>
  );

  return (
    <div ref={ref} className="bg-white">

      {/* ── MOBILE layout ── */}
      <div className="lg:hidden flex flex-col min-h-screen px-6 pt-24 pb-12">
        <div className="mb-8">
          <p className="text-black/30 text-xs tracking-widest uppercase mb-4">Contacto</p>
          <h2 className="text-4xl font-black text-black tracking-tighter leading-none mb-4">
            Dónde lo necesites,<br />cuando lo necesites.<br /><br />¿Empezamos?<br />Call Johnny
          </h2>
        </div>
        <div className="flex gap-3 mb-8">
          {contactLinks}
        </div>
        <div className="flex-1 border border-black/10 rounded-2xl overflow-hidden" style={{ minHeight: 480 }}>
          <NewContactScreen />
        </div>
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="hidden lg:block">
        <div className="relative flex items-center justify-center h-screen overflow-hidden">
          <motion.div
            className="absolute left-24 max-w-md z-10"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-black/30 text-xs tracking-widest uppercase mb-4">Contacto</p>
            <h2 className="text-5xl font-black text-black tracking-tighter leading-none mb-6">
              Dónde lo necesites,<br />cuando lo necesites.<br /><br />¿Empezamos?<br />Call Johnny
            </h2>
          </motion.div>

          <motion.div
            className="absolute left-[42%] flex flex-col gap-3 z-10"
            style={{ top: "50%", y: "-50%" }}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 1.6, duration: 0.5, ease: "easeOut" }}
          >
            {contactLinks}
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
      </div>

    </div>
  );
}

export default function ContactoPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-white">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
