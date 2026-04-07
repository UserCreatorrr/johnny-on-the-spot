"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      data-nav-theme="light"
      className="h-screen bg-white flex items-center justify-center"
      aria-labelledby="hero-heading"
    >
      <Image
        id="hero-heading"
        src="/logo-hero.png"
        alt="Johnny on the Spot"
        width={900}
        height={270}
        className="w-auto max-w-xs sm:max-w-md lg:max-w-2xl xl:max-w-3xl object-contain"
        priority
      />
    </section>
  );
}
