import { describe, expect, it } from "vitest";
import { alpha, contrast, luminance, mix, readable } from "./color";

describe("color", () => {
  it("computes WCAG luminance and contrast", () => {
    expect(luminance("#000000")).toBe(0);
    expect(luminance("#FFFFFF")).toBe(1);
    expect(contrast("#000000", "#FFFFFF")).toBeCloseTo(21);
    expect(contrast("#FFFFFF", "#FFFFFF")).toBe(1);
  });

  it("mixes colors", () => {
    expect(mix("#000000", "#FFFFFF", 0.5)).toBe("#808080");
    expect(mix("#FF0000", "#000000", 0)).toBe("#FF0000");
  });

  it("adds alpha", () => {
    expect(alpha("#FF0000", 0.5)).toBe("#FF000080");
    expect(alpha("#FF0000", 1)).toBe("#FF0000FF");
  });

  it("keeps colors that already read well", () => {
    expect(readable("#003CFF", "#FBE103")).toBe("#003CFF");
  });

  it("darkens a light accent on a light background (Argentina)", () => {
    const ink = readable("#CAE6FF", "#FFFFFF", 4.5);
    expect(contrast(ink, "#FFFFFF")).toBeGreaterThanOrEqual(4.5);
    expect(luminance(ink)).toBeLessThan(luminance("#CAE6FF"));
  });

  it("lightens a dark accent on a dark background", () => {
    const ink = readable("#100001", "#AD0020", 3);
    expect(contrast(ink, "#AD0020")).toBeGreaterThanOrEqual(3);
    expect(luminance(ink)).toBeGreaterThan(luminance("#100001"));
  });
});
