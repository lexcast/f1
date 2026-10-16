import { describe, expect, it } from "vitest";
import {
  countries,
  countryName,
  filterDrivers,
  groupTeams,
  lastName,
  nameParts,
  normalize,
  rarity,
  resolveTeam,
  sortDrivers,
  toList,
} from "./drivers";

const drivers = toList({
  raikkonen: {
    name: "Kimi Räikkönen",
    teams: ["sauber", "mclaren", "ferrari", "lotus", "ferrari2"],
    last: "ferrari",
    country: "finland",
    championships: 1,
  },
  hamilton: {
    name: "Lewis Hamilton",
    teams: ["mclaren", "mercedes"],
    country: "united_kingdom",
    championships: 7,
  },
  deangelis: {
    name: "Elio de|Angelis",
    teams: ["shadow", "lotus", "brabham"],
    country: "italy",
    championships: 0,
  },
  button: {
    name: "Jenson Button",
    teams: ["williams", "benetton", "brawn", "mclaren"],
    country: "united_kingdom",
    championships: 1,
  },
});

const ids = (list) => list.map((d) => d.id);

describe("names", () => {
  it("strips accents and lowercases", () => {
    expect(normalize("Räikkönen")).toBe("raikkonen");
    expect(normalize("Juan Manuel Fangio")).toBe("juan manuel fangio");
  });

  it("keeps words glued with | together", () => {
    expect(nameParts("Elio de|Angelis")).toEqual(["Elio", "de Angelis"]);
    expect(lastName("Elio de|Angelis")).toBe("de Angelis");
    expect(lastName("Juan Manuel Fangio")).toBe("Fangio");
  });

  it("formats country keys", () => {
    expect(countryName("united_kingdom")).toBe("United Kingdom");
    expect(countryName("italy")).toBe("Italy");
  });
});

describe("filterDrivers", () => {
  it("returns everyone without filters", () => {
    expect(filterDrivers(drivers)).toHaveLength(4);
  });

  it("searches by name ignoring accents, case and whitespace", () => {
    expect(ids(filterDrivers(drivers, { search: "RAIKKONEN" }))).toEqual([
      "raikkonen",
    ]);
    expect(ids(filterDrivers(drivers, { search: "  räik " }))).toEqual([
      "raikkonen",
    ]);
  });

  it("searches names glued with | and ids with every space removed", () => {
    expect(ids(filterDrivers(drivers, { search: "de angelis" }))).toEqual([
      "deangelis",
    ]);
    expect(ids(filterDrivers(drivers, { search: "de an ge lis" }))).toEqual([
      "deangelis",
    ]);
  });

  it("filters by team and country, combined", () => {
    expect(ids(filterDrivers(drivers, { team: "mclaren" }))).toEqual([
      "raikkonen",
      "hamilton",
      "button",
    ]);
    expect(
      ids(
        filterDrivers(drivers, { team: "mclaren", country: "united_kingdom" }),
      ),
    ).toEqual(["hamilton", "button"]);
  });
});

describe("sortDrivers", () => {
  it("sorts by last name, ignoring accents", () => {
    expect(ids(sortDrivers(drivers, "NAME"))).toEqual([
      "button",
      "deangelis",
      "hamilton",
      "raikkonen",
    ]);
  });

  it("reverses when descending", () => {
    expect(ids(sortDrivers(drivers, "NAME", true))).toEqual([
      "raikkonen",
      "hamilton",
      "deangelis",
      "button",
    ]);
  });

  it("sorts by country, then name", () => {
    expect(ids(sortDrivers(drivers, "COUNTRY"))).toEqual([
      "raikkonen",
      "deangelis",
      "button",
      "hamilton",
    ]);
  });

  it("sorts by championships, most first, then name", () => {
    expect(ids(sortDrivers(drivers, "CHAMPIONSHIPS"))).toEqual([
      "hamilton",
      "button",
      "raikkonen",
      "deangelis",
    ]);
  });

  it("does not mutate its input", () => {
    const copy = [...drivers];
    sortDrivers(drivers, "CHAMPIONSHIPS", true);
    expect(drivers).toEqual(copy);
  });
});

describe("resolveTeam", () => {
  const [raikkonen, hamilton] = drivers;

  it("follows the team filter, else the first team", () => {
    expect(resolveTeam(hamilton, null, "mercedes")).toBe("mercedes");
    expect(resolveTeam(hamilton, null, null)).toBe("mclaren");
    expect(resolveTeam(hamilton, null, "ferrari")).toBe("mclaren");
  });

  it("applies first/last preferences, over the team filter", () => {
    expect(resolveTeam(hamilton, "FIRST", "mercedes")).toBe("mclaren");
    expect(resolveTeam(hamilton, "LAST")).toBe("mercedes");
  });

  it("uses the explicit last team over the final one", () => {
    expect(resolveTeam(raikkonen, "LAST")).toBe("ferrari");
  });
});

describe("rarity", () => {
  it("ranks five-time champions gold, any champion silver", () => {
    expect(rarity({ championships: 7 })).toBe("gold");
    expect(rarity({ championships: 5 })).toBe("gold");
    expect(rarity({ championships: 1 })).toBe("silver");
    expect(rarity({ championships: 0 })).toBe("common");
  });
});

describe("grouping", () => {
  it("lists unique nationalities, sorted", () => {
    expect(
      countries({
        a: { country: "italy" },
        b: { country: "finland" },
        c: { country: "italy" },
      }),
    ).toEqual(["finland", "italy"]);
  });

  it("groups teams by country, all sorted", () => {
    const groups = groupTeams({
      williams: {
        id: "williams",
        title: "Williams",
        country: "united_kingdom",
      },
      ferrari: { id: "ferrari", title: "Ferrari", country: "italy" },
      brm: { id: "brm", title: "BRM", country: "united_kingdom" },
      minardi: { id: "minardi", title: "Minardi", country: "italy" },
    });

    expect(groups.map(([country, teams]) => [country, ids(teams)])).toEqual([
      ["italy", ["ferrari", "minardi"]],
      ["united_kingdom", ["brm", "williams"]],
    ]);
  });
});
