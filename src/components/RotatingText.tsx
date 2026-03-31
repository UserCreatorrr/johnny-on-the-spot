"use client";
import { useState, useEffect } from "react";

const phrases = [
  "una agencia de Comunicación y eventos",
  "arquitectos de marcas",
  "creatividad en acción",
  "detonadores de emoción",
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      style={{ transition: "opacity 0.4s ease" }}
      className={visible ? "opacity-100" : "opacity-0"}
    >
      {phrases[index]}
    </span>
  );
}
