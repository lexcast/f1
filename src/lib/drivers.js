export const sorts = ["NAME", "COUNTRY", "CHAMPIONSHIPS"];

export const preferences = ["FIRST", "LAST"];

/** Lowercase and strip accents/diacritics: "Räikkönen" -> "raikkonen". */
export const normalize = (text) =>
  text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

/** Name parts are separated by spaces; "|" glues words into one part ("de|Angelis"). */
export const nameParts = (name) =>
  name.split(" ").map((part) => part.replace(/\|/g, " "));

export const lastName = (name) => nameParts(name).at(-1);

export const displayName = (name) => name.replace(/\|/g, " ");

/** "united_kingdom" -> "United Kingdom". */
export const countryName = (country) =>
  country.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

/** Turns the drivers map into a list, each driver carrying its own id. */
export const toList = (drivers) =>
  Object.entries(drivers).map(([id, driver]) => ({ ...driver, id }));

const matchesSearch = (driver, search) => {
  const query = normalize(search.trim());
  if (!query) return true;

  return (
    driver.id.includes(query.replace(/\s+/g, "")) ||
    normalize(displayName(driver.name)).includes(query)
  );
};

export const filterDrivers = (list, { search = "", team, country } = {}) =>
  list.filter(
    (driver) =>
      (!country || driver.country === country) &&
      (!team || driver.teams.includes(team)) &&
      matchesSearch(driver, search),
  );

const compareText = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

const sortKeys = {
  NAME: () => 0,
  COUNTRY: (driver) => driver.country,
  // Most titles first.
  CHAMPIONSHIPS: (driver) => -driver.championships,
};

const byLastName = (a, b) =>
  compareText(normalize(lastName(a.name)), normalize(lastName(b.name))) ||
  compareText(a.id, b.id);

export const sortDrivers = (list, sort = "NAME", descending = false) => {
  const key = sortKeys[sort] ?? sortKeys.NAME;
  const sorted = [...list].sort(
    (a, b) => compareText(key(a), key(b)) || byLastName(a, b),
  );

  return descending ? sorted.reverse() : sorted;
};

/** Card tier by titles: five or more is gold, any title is silver. */
export const rarity = (driver) =>
  driver.championships >= 5
    ? "gold"
    : driver.championships > 0
      ? "silver"
      : "common";

export const lastTeam = (driver) => driver.last ?? driver.teams.at(-1);

/** Which team's car a card shows, given the global preference and team filter. */
export const resolveTeam = (driver, preference, team) => {
  switch (preference) {
    case "FIRST":
      return driver.teams[0];
    case "LAST":
      return lastTeam(driver);
    default:
      return team && driver.teams.includes(team) ? team : driver.teams[0];
  }
};

/** Driver nationalities, sorted. */
export const countries = (drivers) =>
  [...new Set(Object.values(drivers).map((d) => d.country))].sort(compareText);

/** Groups teams by country, both sorted alphabetically. */
export const groupTeams = (teams) => {
  const groups = new Map();

  for (const team of Object.values(teams)) {
    if (!groups.has(team.country)) groups.set(team.country, []);
    groups.get(team.country).push(team);
  }

  return [...groups.entries()]
    .sort(([a], [b]) => compareText(a, b))
    .map(([country, list]) => [
      country,
      list.sort((a, b) => compareText(normalize(a.title), normalize(b.title))),
    ]);
};
