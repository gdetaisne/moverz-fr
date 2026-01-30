import { describe, it, expect } from "vitest";
import { env } from "@/lib/env";
import { buildBreadcrumbSchema } from "@/components/Breadcrumbs";

describe("BreadcrumbList JSON-LD", () => {
  it("builds absolute items with correct positions", () => {
    const baseUrl = env.SITE_URL.replace(/\/$/, "");
    const items = [
      { label: "Accueil", href: "/" },
      { label: "Blog", href: "/blog/" },
      { label: "Article", href: "/blog/test/" },
    ];

    const schema = buildBreadcrumbSchema({ items, baseUrl });

    expect(schema["@type"]).toBe("BreadcrumbList");
    expect(Array.isArray((schema as any).itemListElement)).toBe(true);
    expect((schema as any).itemListElement).toHaveLength(items.length);

    for (let i = 0; i < items.length; i++) {
      const li = (schema as any).itemListElement[i];
      expect(li.position).toBe(i + 1);
      expect(li.name).toBe(items[i].label);
      expect(li.item).toBe(`${baseUrl}${items[i].href}`);
    }

    // JSON must be serializable and parseable
    expect(() => JSON.parse(JSON.stringify(schema))).not.toThrow();
  });
});

