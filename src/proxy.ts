import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { maintenanceModeEnabled } from "@/lib/site-state";

const PUBLIC_FILE = /\.[^/]+$/;

export function proxy(request: NextRequest) {
  if (!maintenanceModeEnabled) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  const shouldBypass =
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/maintenance") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/__nextjs") ||
    PUBLIC_FILE.test(pathname);

  if (shouldBypass) {
    return NextResponse.next();
  }

  const maintenanceUrl = request.nextUrl.clone();
  maintenanceUrl.pathname = "/maintenance";
  return NextResponse.rewrite(maintenanceUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
