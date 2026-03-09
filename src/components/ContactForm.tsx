"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const servicios = [
    "Dirección y Producción Creativa",
    "Diseño de Identidad Corporativa",
    "Eventos Corporativos",
    "Activación de Marca",
    "Estrategia de Comunicación",
    "Marketing Digital",
    "Vídeo y Contenido",
    "IA y Automatizaciones",
    "Otro",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API call — replace with actual endpoint
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="py-16 text-center">
        <div className="w-12 h-12 border border-white/20 flex items-center justify-center mx-auto mb-6">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10L8 14L16 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-2xl font-black tracking-tighter text-white mb-3">
          Recibido. Gracias.
        </h3>
        <p className="text-white/40 text-sm max-w-sm mx-auto">
          Nos ponemos en contacto contigo antes de 24 horas. (Los viernes, el lunes.)
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nombre" className="block text-xs text-white/40 tracking-wide uppercase mb-2">
            Nombre *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            autoComplete="name"
            className="w-full bg-transparent border border-white/20 text-white placeholder-white/20 px-4 py-3 text-sm focus:border-white/60 outline-none transition-colors"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="empresa" className="block text-xs text-white/40 tracking-wide uppercase mb-2">
            Empresa
          </label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            autoComplete="organization"
            className="w-full bg-transparent border border-white/20 text-white placeholder-white/20 px-4 py-3 text-sm focus:border-white/60 outline-none transition-colors"
            placeholder="Nombre de la empresa"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-xs text-white/40 tracking-wide uppercase mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className="w-full bg-transparent border border-white/20 text-white placeholder-white/20 px-4 py-3 text-sm focus:border-white/60 outline-none transition-colors"
            placeholder="tu@empresa.com"
          />
        </div>
        <div>
          <label htmlFor="telefono" className="block text-xs text-white/40 tracking-wide uppercase mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            autoComplete="tel"
            className="w-full bg-transparent border border-white/20 text-white placeholder-white/20 px-4 py-3 text-sm focus:border-white/60 outline-none transition-colors"
            placeholder="+34 600 000 000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="servicio" className="block text-xs text-white/40 tracking-wide uppercase mb-2">
          ¿En qué podemos ayudarte?
        </label>
        <select
          id="servicio"
          name="servicio"
          value={formData.servicio}
          onChange={handleChange}
          className="w-full bg-black border border-white/20 text-white px-4 py-3 text-sm focus:border-white/60 outline-none transition-colors appearance-none cursor-pointer"
        >
          <option value="" className="bg-black">Selecciona un servicio</option>
          {servicios.map((s) => (
            <option key={s} value={s} className="bg-black">{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-xs text-white/40 tracking-wide uppercase mb-2">
          Cuéntanos el proyecto *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-transparent border border-white/20 text-white placeholder-white/20 px-4 py-3 text-sm focus:border-white/60 outline-none transition-colors resize-none"
          placeholder="Cuéntanos en qué consiste el proyecto, cuándo lo necesitas y qué presupuesto tienes en mente (orientativo)."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacidad"
          name="privacidad"
          required
          className="mt-1 w-4 h-4 border border-white/20 bg-transparent accent-white cursor-pointer"
        />
        <label htmlFor="privacidad" className="text-xs text-white/30 leading-relaxed cursor-pointer">
          He leído y acepto la{" "}
          <a href="/privacidad" className="text-white/50 hover:text-white underline transition-colors">
            política de privacidad
          </a>
          .
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto bg-white text-black px-10 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
