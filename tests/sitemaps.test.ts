import { describe, it, expect } from "vitest";
import { GET as getSitemapIndex } from "@/app/sitemap.xml/route";
import { GET as getSitemapCities } from "@/app/sitemaps/sitemap-cities.xml/route";
import { GET as getSitemapServices } from "@/app/sitemaps/sitemap-services.xml/route";
import { GET as getSitemapPages } from "@/app/sitemaps/sitemap-pages.xml/route";
import { GET as getSitemapBlog } from "@/app/sitemaps/sitemap-blog.xml/route";
import { getCanonicalUrl } from "@/lib/canonical-helper";
import { CITIES } from "@/lib/cities";
import { SERVICE_SLUGS, type ServiceSlug } from "@/lib/service-pages";
import { getCityPageMetadata, getCityServiceMetadata } from "@/lib/seo/metadata";

function extractLocs(xml: string): string[] {
  const out: string[] = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml))) out.push(m[1]);
  return out;
}

describe("Sitemaps", () => {
  it("sitemap index contains expected child sitemaps", async () => {
    const xml = await getSitemapIndex().text();
    const locs = extractLocs(xml);
    expect(locs).toContain(getCanonicalUrl("sitemaps/sitemap-pages.xml"));
    expect(locs).toContain(getCanonicalUrl("sitemaps/sitemap-cities.xml"));
    expect(locs).toContain(getCanonicalUrl("sitemaps/sitemap-services.xml"));
    expect(locs).toContain(getCanonicalUrl("sitemaps/sitemap-blog.xml"));
  });

  it("all sitemap URLs are canonical (no ?, trailing slash)", async () => {
    const xmls = await Promise.all([
      getSitemapCities().text(),
      getSitemapServices().text(),
      getSitemapPages().text(),
      getSitemapBlog().text(),
    ]);

    const locs = xmls.flatMap(extractLocs);
    expect(locs.length).toBeGreaterThan(100);

    for (const loc of locs) {
      expect(loc.includes("?")).toBe(false);
      expect(loc.endsWith("/")).toBe(true);
    }
  });

  it("canonicals are coherent for top cities + services (sample)", () => {
    const sampleCities = CITIES.slice(0, 20);
    for (const city of sampleCities) {
      const m = getCityPageMetadata(city);
      expect(m.alternates?.canonical).toBe(getCanonicalUrl(`demenagement/${city.slug}`));

      for (const s of SERVICE_SLUGS.slice(0, 3)) {
        const ms = getCityServiceMetadata({ city, service: s as ServiceSlug });
        expect(ms.alternates?.canonical).toBe(getCanonicalUrl(`demenagement/${city.slug}/${s}`));
      }
    }
  });
});


