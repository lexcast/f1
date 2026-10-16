import { memo } from "react";
import DriverCard from "./DriverCard";
import { resolveTeam } from "../lib/drivers";

const Kerb = ({ className }) => (
  <div
    aria-hidden="true"
    className={`kerb absolute inset-x-0 h-2 ${className}`}
  />
);

const DriversGrid = ({
  drivers,
  teams,
  team,
  preference,
  flipped,
  onReset,
}) => (
  <div className="asphalt relative overflow-hidden rounded-3xl px-2 py-4 shadow-xl ring-1 shadow-asphalt-950/30 ring-asphalt-950/40 sm:px-3">
    <Kerb className="top-0" />
    <Kerb className="bottom-0" />
    <div className="relative min-h-80 rounded-2xl border-2 border-dashed border-white/40 px-4 py-8 sm:px-8">
      {drivers.length > 0 ? (
        <div className="relative grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] justify-items-center gap-x-4 gap-y-8">
          {drivers.map((driver) => (
            <DriverCard
              key={driver.id}
              driver={driver}
              teamId={resolveTeam(driver, preference, team)}
              teams={teams}
              flipped={flipped}
            />
          ))}
        </div>
      ) : (
        <div className="relative flex min-h-64 flex-col items-center justify-center gap-3 text-center text-white">
          <div
            aria-hidden="true"
            className="checkered h-10 w-16 -skew-x-12 rounded-sm shadow-lg"
          />
          <p className="font-display text-4xl sm:text-5xl">No drivers found</p>
          <p className="text-xl text-white/70">
            Change the filters to see other results
          </p>
          <button
            type="button"
            onClick={onReset}
            className="mt-2 cursor-pointer rounded-full bg-white px-5 py-2 text-lg font-semibold text-asphalt-900 uppercase shadow hover:bg-red-50"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  </div>
);

export default memo(DriversGrid);
