import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

// vanilla-tilt needs real layout; it adds nothing to test in jsdom.
vi.mock("vanilla-tilt", () => ({ default: { init: vi.fn() } }));

afterEach(() => {
  cleanup();
});
