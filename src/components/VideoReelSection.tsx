"use client";

export default function VideoReelSection() {
  return (
    <section
      data-nav-theme="dark"
      className="h-screen bg-black overflow-hidden"
      aria-label="Reel de agencia"
    >
      <video
        src="https://evolutionapi-video-jots.d4s5yj.easypanel.host/videos/jots-agency.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </section>
  );
}
