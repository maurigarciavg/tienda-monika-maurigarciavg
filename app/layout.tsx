import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "Monnama — Tejidos y Crochet hechos a mano",
  description:
    "Piezas únicas tejidas a mano por Monika. Crochet y knitting con amor, puntada a puntada.",
  openGraph: {
    title: "Monnama — Tejidos y Crochet hechos a mano",
    description:
      "Piezas únicas tejidas a mano por Monika. Crochet y knitting con amor, puntada a puntada.",
    url: "/",
    siteName: "Monnama",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monnama — Tejidos y Crochet hechos a mano",
    description:
      "Piezas únicas tejidas a mano por Monika. Crochet y knitting con amor, puntada a puntada.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
