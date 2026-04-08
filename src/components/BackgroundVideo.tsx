"use client";

/**
 * Fixed full-screen video layer (z-index: 1).
 * Sits behind <main> (z-index: 2) but above the page background.
 * Sections with opaque backgrounds cover it; transparent/fading sections
 * reveal it, giving the effect that the video persists as the base layer.
 */
export default function BackgroundVideo() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source
          src="https://evolutionapi-video-jots.d4s5yj.easypanel.host/videos/jots-agency.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
