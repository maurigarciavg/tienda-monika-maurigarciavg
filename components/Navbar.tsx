"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

type Locale = "es" | "en";

const NAV_LINKS = {
  es: [
    { href: "/", label: "Inicio" },
    { href: "/catalogo", label: "Catálogo" },
    { href: "/sobre-monika", label: "Sobre Monika" },
    { href: "/contacto", label: "Contacto" },
  ],
  en: [
    { href: "/en", label: "Home" },
    { href: "/en/catalogo", label: "Catalog" },
    { href: "/en/sobre-monika", label: "About" },
    { href: "/en/contacto", label: "Contact" },
  ],
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Always derived from the current URL — never stale
  const locale: Locale = pathname.startsWith("/en") ? "en" : "es";
  const links = NAV_LINKS[locale];
  const homeHref = locale === "en" ? "/en" : "/";

  const isActive = (href: string) => {
    if (href === "/" || href === "/en") return pathname === href;
    return pathname.startsWith(href);
  };

  const switchLocale = (target: Locale) => {
    document.cookie = `monnama-locale=${target};path=/;max-age=${60 * 60 * 24 * 30}`;
    if (target === "en") {
      const enPath = pathname.startsWith("/en") ? pathname : `/en${pathname === "/" ? "" : pathname}`;
      router.push(enPath);
    } else {
      const esPath = pathname.startsWith("/en") ? pathname.replace(/^\/en/, "") || "/" : pathname;
      router.push(esPath);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-monnama-cream/90 backdrop-blur-sm border-b border-monnama-surface">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={homeHref} className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/uploads/unravelled-corner-logo-transparent.png"
            alt="Unravelled Corner"
            width={210}
            height={56}
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium transition-colors ${
                  isActive(href)
                    ? "text-monnama-terra"
                    : "text-monnama-brown-mid hover:text-monnama-brown"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language switcher */}
        <div className="hidden md:flex items-center gap-1 text-xs font-medium border border-monnama-brown-mid/30 rounded-full px-2 py-1">
          <button
            onClick={() => switchLocale("es")}
            className={`px-2 py-0.5 rounded-full transition-colors duration-200 ${locale === "es" ? "bg-monnama-terra text-white" : "text-monnama-brown-mid hover:text-monnama-brown"}`}
          >
            ES
          </button>
          <button
            onClick={() => switchLocale("en")}
            className={`px-2 py-0.5 rounded-full transition-colors duration-200 ${locale === "en" ? "bg-monnama-terra text-white" : "text-monnama-brown-mid hover:text-monnama-brown"}`}
          >
            EN
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-monnama-brown p-2"
          aria-label={locale === "en" ? "Menu" : "Menú"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-monnama-cream border-t border-monnama-surface px-6 pb-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block py-3 transition-colors ${
                isActive(href) ? "text-monnama-terra font-medium" : "text-monnama-brown-mid hover:text-monnama-terra"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="flex items-center gap-2 pt-3 border-t border-monnama-surface mt-2">
            <span className="text-xs text-monnama-brown-mid">{locale === "en" ? "Language:" : "Idioma:"}</span>
            <button onClick={() => { switchLocale("es"); setOpen(false); }} className={`text-xs px-2 py-1 rounded-full font-medium ${locale === "es" ? "bg-monnama-terra text-white" : "text-monnama-brown-mid"}`}>ES</button>
            <button onClick={() => { switchLocale("en"); setOpen(false); }} className={`text-xs px-2 py-1 rounded-full font-medium ${locale === "en" ? "bg-monnama-terra text-white" : "text-monnama-brown-mid"}`}>EN</button>
          </div>
        </div>
      )}
    </nav>
  );
}
