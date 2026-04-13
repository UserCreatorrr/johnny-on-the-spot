import Link from "next/link";
import Image from "next/image";

const legal = [
  { label: "Privacidad", href: "/privacidad" },
  { label: "Aviso Legal", href: "/aviso-legal" },
  { label: "Cookies", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-10 px-6 lg:px-8" role="contentinfo">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-4">
          <Link href="/" aria-label="Johnny on the Spot: Inicio">
            <Image
              src="/logo-white.png"
              alt="Johnny on the Spot"
              width={120}
              height={36}
              className="h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/johnnyonthespot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white text-xs transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-white/10">·</span>
            <a
              href="https://www.instagram.com/johnnyonthespot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white text-xs transition-colors"
            >
              Instagram
            </a>
            <span className="text-white/10">·</span>
            <a
              href="mailto:hola@johnnyonthespot.es"
              className="text-white/30 hover:text-white text-xs transition-colors"
            >
              hola@johnnyonthespot.es
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-3">
          <ul className="flex items-center gap-4" role="list">
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/20 hover:text-white/50 text-xs transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-white/15 text-xs">
            © {new Date().getFullYear()} Johnny on the Spot
          </p>
        </div>
      </div>
    </footer>
  );
}
