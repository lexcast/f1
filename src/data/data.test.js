import { existsSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { drivers, flags, teams } from ".";

const images = resolve(import.meta.dirname, "../../public/images");
const has = (path) => existsSync(resolve(images, path));
const hex = /^#[0-9a-f]{6}$/i;

// Each check returns a list of problems so a failing test lists them all at once.
const each = (map, check) =>
  Object.entries(map).flatMap(([id, item]) => check(id, item));

describe("drivers.json", () => {
  it("has well-formed drivers", () => {
    expect(
      each(drivers, (id, d) => {
        const errors = [];
        if (!/^[a-z0-9]+$/.test(id)) errors.push(`${id}: bad id`);
        if (!d.name?.trim()) errors.push(`${id}: missing name`);
        if (/[\u200B-\u200F\u202A-\u202E]/.test(d.name))
          errors.push(`${id}: invisible chars`);
        if (!Number.isInteger(d.championships) || d.championships < 0)
          errors.push(`${id}: bad championships`);
        if (typeof d.retired !== "boolean") errors.push(`${id}: bad retired`);
        if (!flags[d.country]) errors.push(`${id}: no flag for ${d.country}`);
        if (!d.teams?.length) errors.push(`${id}: no teams`);
        return errors;
      }),
    ).toEqual([]);
  });

  it("only references existing teams", () => {
    expect(
      each(drivers, (id, d) => {
        const errors = d.teams
          .filter((t) => !teams[t])
          .map((t) => `${id}: unknown team ${t}`);
        if (new Set(d.teams).size !== d.teams.length)
          errors.push(`${id}: repeated team`);
        if (d.last && !d.teams.includes(d.last))
          errors.push(`${id}: last ${d.last} not in teams`);
        return errors;
      }),
    ).toEqual([]);
  });

  it("has a photo for every team and a signature", () => {
    expect(
      each(drivers, (id, d) => {
        const errors = d.teams
          .filter((t) => !has(`drivers/${id}/${t}.png`))
          .map((t) => `${id}: missing photo ${t}`);
        if (d.signature !== false && !has(`drivers/${id}/signature.png`))
          errors.push(`${id}: missing signature`);
        return errors;
      }),
    ).toEqual([]);
  });

  it("has no orphan photos", () => {
    const orphans = readdirSync(resolve(images, "drivers")).flatMap((dir) =>
      drivers[dir]
        ? readdirSync(resolve(images, "drivers", dir))
            .map((file) => file.replace(/\.png$/, ""))
            .filter((t) => t !== "signature" && !drivers[dir].teams.includes(t))
            .map((t) => `${dir}/${t}`)
        : [dir],
    );
    expect(orphans).toEqual([]);
  });
});

describe("teams.json", () => {
  it("has well-formed teams with logos", () => {
    expect(
      each(teams, (id, t) => {
        const errors = [];
        if (t.id !== id) errors.push(`${id}: id mismatch`);
        if (!t.title) errors.push(`${id}: missing title`);
        if (!hex.test(t.color1) || !hex.test(t.color2))
          errors.push(`${id}: bad colors`);
        if (!flags[t.country]) errors.push(`${id}: no flag for ${t.country}`);
        if (!has(`logos/${id}.png`)) errors.push(`${id}: missing logo`);
        return errors;
      }),
    ).toEqual([]);
  });

  it("has unique titles and no unused logos", () => {
    const titles = Object.values(teams).map((t) => t.title);
    expect(titles.filter((t, i) => titles.indexOf(t) !== i)).toEqual([]);
    expect(
      readdirSync(resolve(images, "logos"))
        .map((file) => file.replace(/\.png$/, ""))
        .filter((id) => !teams[id]),
    ).toEqual([]);
  });
});
