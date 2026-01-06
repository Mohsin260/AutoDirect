import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Keep the middleware minimal to stay under Vercel's Edge Function size limit.
// Arcjet (and other large telemetry/security SDKs) should run in separate
// server functions or be invoked from server-side endpoints to avoid inflating
// the middleware bundle.

const isProtectedRoute = createRouteMatcher([
  "/admin(.*)",
  "/saved-cars(.*)",
  "/reservations(.*)",
]);

const clerk = clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }

  return NextResponse.next();
});

export default clerk;

export const config = {
  // Narrow matcher to only protected app routes and API routes so middleware
  // runs as little as possible (smaller bundles and less execution).
  matcher: [
    "/admin/:path*",
    "/saved-cars",
    "/reservations",
    "/api/:path*",
    "/trpc/:path*",
  ],
};
