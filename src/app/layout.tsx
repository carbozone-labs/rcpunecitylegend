import type { Metadata, Viewport } from "next";
import "@fontsource/playfair-display/latin-600.css";
import "@fontsource/playfair-display/latin-700.css";
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-600.css";
import "@fontsource/manrope/latin-700.css";
import "@fontsource/tiro-devanagari-marathi/devanagari-400.css";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { MobileDock } from "@/components/layout/MobileDock";
import { PointerFX } from "@/components/layout/PointerFX";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl()}/`),
  title: { default: "LEGENDS | Rotaract Club of Pune City Legends", template: "%s | LEGENDS" },
  description: "Leadership, meaningful service, cultural pride and collective growth. The Rotaract Club of Pune City Legends, chartered 8 August 2024.",
  openGraph: { type: "website", siteName: "LEGENDS | Rotaract Club of Pune City", locale: "en_IN", title: "LEGENDS | Rotaract Club of Pune City", description: "We don’t just build leaders. We create Legends." },
  twitter: { card: "summary_large_image" },
};
export const viewport: Viewport = { themeColor: "#eaf3ff", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}` }} />
        {/* If JS fails, never leave revealed content hidden */}
        <noscript><style>{`[data-reveal],[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important}[data-reveal],[style*="translate"]{transform:none!important}`}</style></noscript>
        <style>{`:root{--font-display:'Playfair Display';--font-body:'Manrope';--font-deva:'Tiro Devanagari Marathi'}`}</style>
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-saffron focus:px-4 focus:py-2 focus:text-obsidian">Skip to content</a>
        <MotionProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <MobileDock />
          <PointerFX />
        </MotionProvider>
      </body>
    </html>
  );
}
