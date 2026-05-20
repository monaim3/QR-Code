import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const refreshToken = req.cookies.get("refresh-token")?.value;

  const { pathname } = req.nextUrl;

  const isCabinetRoute = pathname.startsWith("/cabinet");

  const isAuthPages =
    pathname === "/" ||
    pathname === "/login" ||
    pathname === "/sign-up";

  // ❌ Not logged in → block dashboard
  if (!token && !refreshToken && isCabinetRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // ✅ Logged in → redirect away from auth pages
  if ((token || refreshToken) && isAuthPages) {
    return NextResponse.redirect(new URL("/cabinet/qr-codes", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/sign-up", "/cabinet/:path*"],
};