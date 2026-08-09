import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const HISPANIC_COUNTRIES = new Set([
  "AR", "BO", "CL", "CO", "CR", "CU", "DO", "EC",
  "ES", "GT", "HN", "MX", "NI", "PA", "PE", "PR",
  "PY", "SV", "UY", "VE", "GQ",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isEnPath = pathname.startsWith("/en");
  const locale = isEnPath ? "en" : "es";

  // Forward x-locale on the REQUEST so server components can read it via headers()
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  // Auto-redirect on first visit only (no locale cookie yet)
  const localeCookie = request.cookies.get("monnama-locale")?.value;
  if (!localeCookie) {
    const country = request.headers.get("x-vercel-ip-country") ?? "";
    const detectedLocale = HISPANIC_COUNTRIES.has(country) ? "es" : "en";

    if (detectedLocale === "en" && !isEnPath) {
      const url = request.nextUrl.clone();
      url.pathname = `/en${pathname === "/" ? "" : pathname}`;
      const redirect = NextResponse.redirect(url, { status: 302 });
      redirect.cookies.set("monnama-locale", "en", { maxAge: 60 * 60 * 24 * 30, path: "/" });
      return redirect;
    }

    response.cookies.set("monnama-locale", detectedLocale, { maxAge: 60 * 60 * 24 * 30, path: "/" });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:png|jpg|jpeg|svg|webp|gif|ico|woff2?|ttf|otf)).*)"],
};
