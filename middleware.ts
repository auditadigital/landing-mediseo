import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LANG, LANGS } from "@/lib/i18n/config";

// Redirect "/" (and any path missing a locale prefix) to the default locale.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasLocale = LANGS.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT_LANG}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip API routes, Next internals and static assets.
  matcher: ["/((?!api|_next|favicon.ico|.*\\..*).*)"],
};
