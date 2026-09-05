"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "es";

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    window.dispatchEvent(new Event("cookie-consent-update"));
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    window.dispatchEvent(new Event("cookie-consent-update"));
    setVisible(false);
  };

  if (!visible) return null;

  const text =
    locale === "en"
      ? "We use anonymous analytics cookies to understand how visitors use the site. No ads, no tracking of personal data."
      : "Usamos cookies de analítica anónima para entender cómo se usa la web. Sin anuncios, sin datos personales.";

  const acceptLabel = locale === "en" ? "Accept" : "Aceptar";
  const rejectLabel = locale === "en" ? "Reject" : "Rechazar";

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 px-4 pb-4 pointer-events-none">
      <div className="max-w-2xl mx-auto bg-monnama-brown text-monnama-peach rounded-2xl shadow-2xl px-6 py-4 flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
        <p className="text-sm leading-relaxed flex-1">{text}</p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="text-monnama-peach/60 hover:text-monnama-peach text-sm font-medium transition-colors px-4 py-2"
          >
            {rejectLabel}
          </button>
          <button
            onClick={accept}
            className="bg-monnama-terra hover:bg-monnama-terra-dark text-white text-sm font-medium px-5 py-2 rounded-full transition-colors"
          >
            {acceptLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
