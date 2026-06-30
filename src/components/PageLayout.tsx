import Navigation from "./Navigation";
import Footer from "./Footer";
import type { Locale } from "@/lib/i18n";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  locale?: Locale;
}

export default function PageLayout({ children, className = "", locale = "es" }: PageLayoutProps) {
  return (
    <>
      <Navigation />
      <main id="main-content" className={`min-h-screen bg-black ${className}`}>
        {children}
      </main>
      <Footer locale={locale} />
    </>
  );
}
