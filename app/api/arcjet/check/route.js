import arcjet, { detectBot, shield } from "@arcjet/next";
import { NextResponse } from "next/server";

// Server-side Arcjet instance — runs in a Node server function (not Edge).
const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    shield({ mode: process.env.ARCJET_MODE || "LIVE" }),
    detectBot({
      mode: process.env.ARCJET_MODE || "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),
  ],
});

export async function POST(request) {
  // In development or when ARCJET_MODE=DRY_RUN, do not block requests —
  // Arcjet should not deny local dev traffic. Return allowed quickly.
  if (process.env.NODE_ENV !== "production" || process.env.ARCJET_MODE === "DRY_RUN") {
    return NextResponse.json({ denied: false });
  }

  try {
    const decision = await aj.protect(request);

    if (decision.isDenied()) {
      return NextResponse.json({ denied: true }, { status: 403 });
    }

    return NextResponse.json({ denied: false });
  } catch (err) {
    // On error, fail open so legitimate traffic isn't blocked.
    return NextResponse.json({ denied: false, error: String(err) });
  }
}
