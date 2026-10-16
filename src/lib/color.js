const toRgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));

const toHex = (rgb) =>
  `#${rgb.map((c) => Math.round(c).toString(16).padStart(2, "0")).join("")}`.toUpperCase();

/** WCAG relative luminance, 0 (black) to 1 (white). */
export const luminance = (hex) => {
  const [r, g, b] = toRgb(hex).map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

/** WCAG contrast ratio, 1 to 21. */
export const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

/** Blends `hex` toward `target` by `amount` (0..1). */
export const mix = (hex, target, amount) => {
  const from = toRgb(hex);
  const to = toRgb(target);
  return toHex(from.map((c, i) => c + (to[i] - c) * amount));
};

/**
 * Keeps the team's accent color, but darkens (on light backgrounds) or lightens
 * (on dark ones) it just enough to read on `background`.
 */
export const readable = (color, background, min = 3) => {
  const target = luminance(background) > 0.4 ? "#000000" : "#FFFFFF";
  for (let amount = 0; amount < 1; amount += 0.05) {
    const candidate = mix(color, target, amount);
    if (contrast(candidate, background) >= min) return candidate;
  }
  return target;
};

/** Hex color plus alpha (0..1) as #RRGGBBAA. */
export const alpha = (hex, value) =>
  `${hex}${Math.round(value * 255)
    .toString(16)
    .padStart(2, "0")}`.toUpperCase();
