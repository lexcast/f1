import { memo, useMemo } from "react";
import { getLogo } from "../lib/image";
import { countries, countryName, groupTeams } from "../lib/drivers";

const Group = ({ title, flag, children }) => (
  <section
    aria-label={title}
    className="w-52 shrink-0 snap-start rounded-2xl bg-white/60 shadow-sm ring-1 ring-zinc-200 backdrop-blur"
  >
    <h2 className="flex items-center justify-center gap-1.5 border-b border-dashed border-zinc-300 py-1 text-sm font-semibold tracking-wide text-zinc-500 uppercase">
      {flag && <span className="text-lg">{flag}</span>}
      {title}
    </h2>
    <div className="scrollbar-hide flex h-32 flex-wrap content-start justify-center gap-1 overflow-y-auto p-2">
      {children}
    </div>
  </section>
);

const Option = ({ label, active, onClick, children }) => (
  <button
    type="button"
    title={label}
    aria-label={label}
    aria-pressed={active}
    onClick={onClick}
    className={`grid size-12 shrink-0 cursor-pointer place-items-center overflow-hidden rounded-full p-2 transition ${
      active
        ? "bg-white ring-2 ring-racing"
        : "bg-zinc-100 hover:scale-110 hover:bg-zinc-200"
    }`}
  >
    {children}
  </button>
);

const TeamsFilter = ({
  team,
  setTeam,
  country,
  setCountry,
  teams,
  drivers,
  flags,
}) => {
  const groups = useMemo(() => groupTeams(teams), [teams]);
  const nationalities = useMemo(() => countries(drivers), [drivers]);

  return (
    <nav
      aria-label="Filters"
      className="scrollbar-hide -mx-4 flex snap-x scroll-px-4 gap-3 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:scroll-px-6 sm:px-6"
    >
      <Group title="Nationality">
        {nationalities.map((c) => (
          <Option
            key={c}
            label={countryName(c)}
            active={country === c}
            onClick={() => setCountry(country === c ? null : c)}
          >
            <span className="text-2xl leading-none">{flags[c]}</span>
          </Option>
        ))}
      </Group>
      {groups.map(([c, list]) => (
        <Group key={c} title={countryName(c)} flag={flags[c]}>
          {list.map((t) => (
            <Option
              key={t.id}
              label={t.title}
              active={team === t.id}
              onClick={() => setTeam(team === t.id ? null : t.id)}
            >
              <img
                src={getLogo(t.id)}
                alt=""
                loading="lazy"
                className="size-full object-contain"
              />
            </Option>
          ))}
        </Group>
      ))}
    </nav>
  );
};

export default memo(TeamsFilter);
