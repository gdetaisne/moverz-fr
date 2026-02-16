import type { Metadata } from "next";
import { Suspense } from "react";
import { getFullMetadata } from "@/lib/canonical-helper";
import BlogIndexClient from "./BlogIndexClient";

export const metadata: Metadata = getFullMetadata(
  "blog",
  "Blog Déménagement : Guides, Prix, Astuces (2026)",
  "Tous nos guides déménagement : prix par ville, astuces anti-arnaque, checklists, aides financières. Conseils pratiques par des experts."
);

export default function BlogPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-white" />}>
      <BlogIndexClient />
    </Suspense>
  );
}
