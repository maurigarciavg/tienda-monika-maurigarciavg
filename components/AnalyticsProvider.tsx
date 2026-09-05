"use client";

import { Analytics } from "@vercel/analytics/next";
import { useEffect, useState } from "react";

export default function AnalyticsProvider() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const update = () =>
      setEnabled(localStorage.getItem("cookie-consent") === "accepted");
    update();
    window.addEventListener("cookie-consent-update", update);
    return () => window.removeEventListener("cookie-consent-update", update);
  }, []);

  return enabled ? <Analytics /> : null;
}
