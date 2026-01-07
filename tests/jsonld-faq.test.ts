import { describe, it, expect } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { FAQ } from "@/components/FAQ";
import { buildFAQSchema } from "@/components/schema/FAQSchema";

describe("FAQ JSON-LD", () => {
  it("JSON is valid and matches visible Q/R (single source)", () => {
    const faqs = [
      { question: "Q1", answer: "A1" },
      { question: "Q2", answer: "A2" },
      { question: "Q3", answer: "A3" },
    ];

    const html = renderToStaticMarkup(React.createElement(FAQ, { title: "FAQ Test", faqs }));
    const schema = buildFAQSchema(faqs);

    expect(schema["@type"]).toBe("FAQPage");
    expect(Array.isArray(schema.mainEntity)).toBe(true);
    expect(schema.mainEntity).toHaveLength(faqs.length);

    for (let i = 0; i < faqs.length; i++) {
      expect(schema.mainEntity[i].name).toBe(faqs[i].question);
      expect(schema.mainEntity[i].acceptedAnswer?.text).toBe(faqs[i].answer);
      // Also present in HTML (visible)
      expect(html.includes(faqs[i].question)).toBe(true);
      expect(html.includes(faqs[i].answer)).toBe(true);
    }

    // JSON must be serializable and parseable
    expect(() => JSON.parse(JSON.stringify(schema))).not.toThrow();
  });
});


