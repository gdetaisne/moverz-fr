import { expect, test, describe } from "vitest";
import { computeMockQuotes } from "@/lib/utils/mockQuotes";

describe("computeMockQuotes", () => {
  test("retourne toujours 3 devis", () => {
    const quotes = computeMockQuotes({ areaM2: 50 });
    expect(quotes).toHaveLength(3);
  });

  test("tous les prix sont > 0", () => {
    const quotes = computeMockQuotes({ areaM2: 50 });
    quotes.forEach((quote) => {
      expect(quote.totalPrice).toBeGreaterThan(0);
    });
  });

  test("les devis contiennent les lignes attendues", () => {
    const quotes = computeMockQuotes({ areaM2: 50 });
    quotes.forEach((quote) => {
      expect(quote.lineItems).toHaveLength(4);
      expect(quote.lineItems[0].label).toContain("Main d'œuvre");
      expect(quote.lineItems[1].label).toContain("Transport");
      expect(quote.lineItems[2].label).toContain("Cartons");
      expect(quote.lineItems[3].label).toContain("Assurance");
    });
  });

  test("les prix augmentent avec la surface", () => {
    const quotes50 = computeMockQuotes({ areaM2: 50 });
    const quotes100 = computeMockQuotes({ areaM2: 100 });
    
    expect(quotes100[0].totalPrice).toBeGreaterThan(quotes50[0].totalPrice);
  });

  test("les prix augmentent avec la distance (villes différentes)", () => {
    const quotesLocal = computeMockQuotes({ 
      fromCity: "Paris", 
      toCity: "Paris", 
      areaM2: 50 
    });
    const quotesLongDistance = computeMockQuotes({ 
      fromCity: "Paris", 
      toCity: "Lyon", 
      areaM2: 50 
    });
    
    expect(quotesLongDistance[0].totalPrice).toBeGreaterThan(quotesLocal[0].totalPrice);
  });

  test("le premier devis a le badge 'best'", () => {
    const quotes = computeMockQuotes({ areaM2: 50 });
    expect(quotes[0].badge).toBe("best");
  });

  test("l'ordre des devis est stable", () => {
    const quotes1 = computeMockQuotes({ areaM2: 50 });
    const quotes2 = computeMockQuotes({ areaM2: 50 });
    
    expect(quotes1[0].id).toBe(quotes2[0].id);
    expect(quotes1[1].id).toBe(quotes2[1].id);
    expect(quotes1[2].id).toBe(quotes2[2].id);
  });
});
