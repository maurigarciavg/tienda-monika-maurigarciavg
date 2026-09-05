import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import MobileContactBar from "@/components/MobileContactBar";
import { headers } from "next/headers";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tienda-monika-maurigarciavg.vercel.app"),
  title: "Unravelled Corner — Tejidos y Crochet hechos a mano",
  description:
    "Piezas únicas tejidas a mano por Monika. Crochet y knitting con amor, puntada a puntada.",
  openGraph: {
    title: "Unravelled Corner — Tejidos y Crochet hechos a mano",
    description:
      "Piezas únicas tejidas a mano por Monika. Crochet y knitting con amor, puntada a puntada.",
    url: "/",
    siteName: "Unravelled Corner",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unravelled Corner — Tejidos y Crochet hechos a mano",
    description:
      "Piezas únicas tejidas a mano por Monika. Crochet y knitting con amor, puntada a puntada.",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") ?? "es") as "es" | "en";

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <MobileContactBar />
        <CookieBanner />
        <AnalyticsProvider />
      </body>
    </html>
  );
}
