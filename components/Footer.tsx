"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type Locale = "es" | "en";

const FOOTER_LINKS = {
  es: [
    { href: "/catalogo", label: "Catálogo" },
    { href: "/sobre-monika", label: "Sobre Monika" },
    { href: "/contacto", label: "Contacto" },
  ],
  en: [
    { href: "/en/catalogo", label: "Catalog" },
    { href: "/en/sobre-monika", label: "About" },
    { href: "/en/contacto", label: "Contact" },
  ],
};

export default function Footer() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/en") ? "en" : "es";
  const links = FOOTER_LINKS[locale];
  const tagline = locale === "en" ? "Handmade knitwear & crochet" : "Tejidos y crochet hechos a mano";

  return (
    <footer className="relative grain bg-monnama-brown text-monnama-peach py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <Image
            src="/uploads/unravelled-corner-logo-transparent.png"
            alt="Unravelled Corner"
            width={140}
            height={42}
            style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
          />
          <p className="text-monnama-peach/70 text-sm mt-1">{tagline}</p>
        </div>

        <nav className="flex gap-6 text-sm">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-white transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/made_bymonnama"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Unravelled Corner"
            className="text-monnama-peach/60 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@Unravelledcorner-h6u"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube de Unravelled Corner"
            className="text-monnama-peach/60 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <p className="text-monnama-peach/50 text-xs">
            © {new Date().getFullYear()} Unravelled Corner. {locale === "en" ? "Made with" : "Hecho con"} 🧶
          </p>
        </div>
      </div>
    </footer>
  );
}
