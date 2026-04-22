"use client";

import Link from "next/link";

interface SkewButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  dark?: boolean; // dark=true → fondo negro al hover; dark=false → fondo blanco al hover
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function SkewButton({
  href,
  onClick,
  children,
  dark = true,
  type = "button",
  disabled = false,
}: SkewButtonProps) {
  const base =
    "relative inline-block px-8 py-4 text-sm font-semibold uppercase tracking-wide cursor-pointer overflow-hidden " +
    "skew-x-[-21deg] transition-colors duration-300 " +
    (dark
      ? "bg-white text-black border border-black/10 hover:text-white"
      : "bg-black text-white border border-white/20 hover:text-black");

  const before =
    "before:content-[''] before:absolute before:inset-y-0 before:left-0 before:right-full " +
    "before:transition-all before:duration-500 before:z-0 hover:before:right-0 " +
    (dark ? "before:bg-[rgb(20,20,20)] hover:before:opacity-100 before:opacity-0" : "before:bg-white hover:before:opacity-100 before:opacity-0");

  const className = `${base} ${before}`;

  const inner = (
    <span className="relative z-10 inline-block skew-x-[21deg]">{children}</span>
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className}>
      {inner}
    </button>
  );
}
