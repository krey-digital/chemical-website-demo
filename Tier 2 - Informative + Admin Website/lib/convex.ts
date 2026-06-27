import { ConvexReactClient } from "convex/react";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

if (!convexUrl && typeof window !== "undefined") {
  console.error("NEXT_PUBLIC_CONVEX_URL environment variable is not set");
}

export const convex = new ConvexReactClient(convexUrl ?? "https://placeholder.convex.cloud");

