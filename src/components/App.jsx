import { useCallback, useMemo, useState } from "react";
import DriversGrid from "./DriversGrid";
import SearchFilter from "./SearchFilter";
import TeamsFilter from "./TeamsFilter";
import Sorter from "./Sorter";
import Toggler from "./Toggler";
import Chip, { Field } from "./Chip";
import { getLogo } from "../lib/image";
import {
  countryName,
  filterDrivers,
  sortDrivers,
  toList,
} from "../lib/drivers";
import { flags, teams, drivers } from "../data";

const allDrivers = toList(drivers);

const RemoveChip = ({ label, onClick, children }) => (
  <Chip
    active
    aria-label={`Remove ${label} filter`}
    onClick={onClick}
    className="h-10 pr-4 pl-1.5 normal-case"
  >
    {children}
    {label}
    <span aria-hidden="true" className="text-xl leading-none">
      ×
    </span>
  </Chip>
);

const App = () => {
  const [search, setSearch] = useState("");
  const [team, setTeam] = useState(null);
  const [country, setCountry] = useState(null);
  const [sort, setSort] = useState("NAME");
  const [descending, setDescending] = useState(false);
  const [preference, setPreference] = useState(null);
  const [flipped, setFlipped] = useState(false);

  const visible = useMemo(
    () =>
      sortDrivers(
        filterDrivers(allDrivers, { search, team, country }),
        sort,
        descending,
      ),
    [search, team, country, sort, descending],
  );

  // Picking a team means "show me that car": drop any fixed preference.
  const selectTeam = useCallback((id) => {
    setTeam(id);
    if (id) setPreference(null);
  }, []);

  const resetFilters = useCallback(() => {
    setSearch("");
    setTeam(null);
    setCountry(null);
  }, []);

  return (
    <div className="mx-auto flex min-h-screen max-w-[100rem] flex-col">
      <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-zinc-100/80 backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 px-4 py-3 sm:px-6">
          <h1 className="flex items-center gap-2 font-display text-xl text-racing sm:text-2xl">
            <img
              src={`${import.meta.env.BASE_URL}favicon.svg`}
              alt=""
              className="size-8"
            />
            F1 Board
          </h1>
          <SearchFilter {...{ search, setSearch }} />
          <div className="ml-auto flex items-center gap-3">
            <p
              aria-live="polite"
              className="hidden text-lg font-semibold text-zinc-500 sm:block"
            >
              {visible.length === allDrivers.length
                ? `${allDrivers.length} drivers`
                : `${visible.length} of ${allDrivers.length}`}
            </p>
            <Chip active={flipped} onClick={() => setFlipped(!flipped)}>
              Flip all
            </Chip>
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col gap-5 px-4 pt-5 pb-10 sm:px-6">
        <TeamsFilter
          {...{
            teams,
            drivers,
            flags,
            team,
            setTeam: selectTeam,
            country,
            setCountry,
          }}
        />

        <div className="flex flex-wrap items-end gap-x-6 gap-y-4">
          <Field label="Sort by">
            <Sorter {...{ sort, setSort, descending, setDescending }} />
          </Field>
          <Field label="Car">
            <Toggler {...{ preference, setPreference }} />
          </Field>
          {country && (
            <RemoveChip
              label={countryName(country)}
              onClick={() => setCountry(null)}
            >
              <span className="grid size-7 place-items-center rounded-full bg-white text-base">
                {flags[country]}
              </span>
            </RemoveChip>
          )}
          {team && (
            <RemoveChip label={teams[team].title} onClick={() => setTeam(null)}>
              <img
                src={getLogo(team)}
                alt=""
                className="size-7 rounded-full bg-white object-contain p-1"
              />
            </RemoveChip>
          )}
        </div>

        <DriversGrid
          drivers={visible}
          teams={teams}
          team={team}
          preference={preference}
          flipped={flipped}
          onReset={resetFilters}
        />
      </main>

      <p className="fixed right-3 bottom-3 z-50 rounded-full bg-racing px-3 py-1 font-display text-sm text-white shadow-lg shadow-red-900/30">
        I do not own any image
      </p>
    </div>
  );
};

export default App;
