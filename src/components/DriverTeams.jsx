import { memo } from "react";
import { getLogo } from "../lib/image";
import { displayName } from "../lib/drivers";

const DriverTeams = ({ driver, teams, selectedTeam, setSelectedTeam }) => (
  <div
    role="group"
    aria-label={`${displayName(driver.name)} teams`}
    className="scrollbar-hide flex h-full flex-col gap-0.5 overflow-y-auto py-0.5 pl-1.5"
  >
    {driver.teams.map((id) => (
      <button
        key={id}
        type="button"
        title={teams[id].title}
        aria-label={teams[id].title}
        aria-pressed={selectedTeam === id}
        onClick={() => setSelectedTeam(id)}
        className={`block size-8 shrink-0 cursor-pointer overflow-hidden rounded-full p-1 transition ${
          selectedTeam === id
            ? "bg-white shadow ring-1 ring-red-300"
            : "bg-white/80 opacity-50 grayscale hover:opacity-100 hover:grayscale-0"
        }`}
      >
        <img
          src={getLogo(id)}
          alt=""
          loading="lazy"
          className="size-full object-contain"
        />
      </button>
    ))}
  </div>
);

export default memo(DriverTeams);
