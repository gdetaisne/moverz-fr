import { describe, it, expect } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import CityPage from "@/app/demenagement/[slug]/page";
import CityServicePage from "@/app/demenagement/[slug]/[service]/page";
import VillesPage from "@/app/villes/page";

describe("Smoke render (no crash)", () => {
  it("renders a city page with internal linking blocks", () => {
    const el = (CityPage as any)({ params: { slug: "lyon" } });
    const html = renderToStaticMarkup(el);
    expect(html).toContain("Villes proches de");
  });

  it("renders a city+service page", () => {
    const el = (CityServicePage as any)({ params: { slug: "lyon", service: "pas-cher" } });
    const html = renderToStaticMarkup(el);
    expect(html.length).toBeGreaterThan(1000);
  });

  it("renders a hub (/villes)", () => {
    const el = (VillesPage as any)();
    const html = renderToStaticMarkup(el);
    expect(html).toContain("Déménagement partout en France");
  });
});


