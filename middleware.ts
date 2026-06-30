import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const { pathname } = req.nextUrl;

  const protectedRoutes = ["/cabinet"];

   const isProtectedRoute = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  const isAuthPages =
    pathname === "/" ||
    pathname === "/login" ||
    pathname === "/sign-up";

  // ❌ Not logged in → block dashboard
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // ✅ Logged in → redirect away from auth pages
  if (token && isAuthPages) {
    return NextResponse.redirect(
      new URL("/cabinet/qr-codes", req.url)
    );
  }

  return NextResponse.next();
}

// 👇 THIS GOES IN SAME FILE (BOTTOM)
export const config = {
  matcher: ["/", "/login", "/sign-up", "/cabinet/:path*"],
};