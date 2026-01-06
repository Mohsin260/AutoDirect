import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/admin(.*)",
  "/saved-cars(.*)",
  "/reservations(.*)",
]);

// Minimal middleware: performs Clerk auth and calls our server-side Arcjet API
const clerk = clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }

  // Call server-side Arcjet check (keeps Arcjet out of Edge bundle)
  try {
    const origin = req.nextUrl?.origin || `https://${req.headers.get("host")}`;
    const res = await fetch(`${origin}/api/arcjet/check`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-middleware-request": "arcjet-check",
        "user-agent": req.headers.get("user-agent") || "",
      },
      body: JSON.stringify({ pathname: req.nextUrl?.pathname }),
    });

    if (res.status === 403) {
      return new NextResponse(null, { status: 403 });
    }
    const data = await res.json();
    if (data?.denied) return new NextResponse(null, { status: 403 });
  } catch (e) {
    // Fail open if Arcjet check errors — don't block legitimate traffic.
    console.error("Arcjet check failed:", e);
  }

  return NextResponse.next();
});

export default clerk;

export const config = {
  matcher: [
    "/admin/:path*",
    "/saved-cars",
    "/reservations",
    "/api/:path*",
    "/trpc/:path*",
  ],
};
