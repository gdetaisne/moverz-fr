import { Suspense } from "react";
import BlogIndexClient from "./BlogIndexClient";

export default function BlogPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-white" />}>
      <BlogIndexClient />
    </Suspense>
  );
}
