import { describe, it, expect } from "vitest";
import { env } from "@/lib/env";
import { getCanonicalUrl } from "@/lib/canonical-helper";
import { buildArticleSchema } from "@/components/schema/ArticleSchema";

describe("BlogPosting JSON-LD", () => {
  it("uses canonical URL + references Organization via @id", () => {
    const baseUrl = env.SITE_URL.replace(/\/$/, "");
    const slug = "mon-article";
    const canonicalUrl = getCanonicalUrl(`blog/${slug}`);

    const schema = buildArticleSchema({
      title: "Titre",
      description: "Desc",
      slug,
      publishedAt: "2026-01-01",
      updatedAt: "2026-01-02",
      category: "prix-et-devis",
      readingTimeMinutes: 7,
    });

    expect(schema["@type"]).toBe("BlogPosting");
    expect(schema.url).toBe(canonicalUrl);
    expect((schema as any).mainEntityOfPage?.["@id"]).toBe(canonicalUrl);

    const orgId = `${baseUrl}/#organization`;
    expect((schema as any).author?.["@id"]).toBe(orgId);
    expect((schema as any).publisher?.["@id"]).toBe(orgId);

    // JSON must be serializable and parseable
    expect(() => JSON.parse(JSON.stringify(schema))).not.toThrow();
  });
});

