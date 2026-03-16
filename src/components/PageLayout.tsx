import Navigation from "./Navigation";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <>
      <Navigation />
      <main id="main-content" className={`min-h-screen bg-black ${className}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
