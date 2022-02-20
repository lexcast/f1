import React from "react";
import { getLogo } from "utils/image";

const TeamsFilter = ({
  team,
  setTeam,
  teams,
  flags,
  drivers,
  country,
  setCountry,
}) => {
  const countries = [];
  Object.entries(drivers).forEach(([, v]) => {
    if (!countries.includes(v.country)) {
      countries.push(v.country);
    }
  });
  const groups = {
    "*national": countries.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0)),
  };

  Object.entries(teams).forEach(([, v]) => {
    if (!groups[v.country]) {
      groups[v.country] = [];
    }

    groups[v.country].push(v);
  });

  return (
    <div className="px-6 overflow-x-auto scrollbar-hide flex flex-nowrap">
      {Object.keys(groups)
        .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
        .map((k) => {
          const r = groups[k];

          return (
            <div key={k} className="inline-block m-1">
              <div className="text-lg pb-1 text-center border-b border-dashed border-cyan-200">
                {flags[k]}
              </div>
              {k === "*national" ? (
                <div className="w-48 h-32 scrollbar-hide justify-center overflow-auto pt-3 flex flex-wrap">
                  {r.map((t) => {
                    return (
                      <div
                        key={t}
                        title={t}
                        onClick={() => setCountry(country === t ? null : t)}
                        className={
                          "inline-flex items-center justify-center m-1 w-12 h-12 p-2 border-2 cursor-pointer rounded-full " +
                          (country === t
                            ? "border-cyan-400"
                            : "border-transparent bg-cyan-200 hover:bg-cyan-300")
                        }
                      >
                        {flags[t]}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="w-48 h-32 scrollbar-hide justify-center overflow-auto pt-3 flex flex-wrap">
                  {r
                    .sort((a, b) => {
                      const c1 = (a.country || "1") + a.title;
                      const c2 = (b.country || "1") + b.title;

                      return c1 > c2 ? 1 : c1 < c2 ? -1 : 0;
                    })
                    .map((t) => {
                      return (
                        <div
                          key={t.id}
                          title={t.title}
                          onClick={() => setTeam(team === t.id ? null : t.id)}
                          className={
                            "inline-flex items-center m-1 w-12 h-12 p-2 border-2 cursor-pointer rounded-full " +
                            (team === t.id
                              ? "border-cyan-400"
                              : "border-transparent bg-cyan-200 hover:bg-cyan-300")
                          }
                        >
                          <img
                            src={getLogo(t.id)}
                            alt={t.title}
                            className="max-h-full max-w-full mx-auto"
                          />
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default React.memo(TeamsFilter);
