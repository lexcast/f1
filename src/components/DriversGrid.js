import React from "react";
import DriverCard from "./DriverCard";
import accents from "remove-accents";
import { AutoSizer, List } from "react-virtualized";

const BOX_WIDTH = 224;
const BOX_HEIGHT = 264;

const DriversGrid = ({
  search,
  team,
  drivers,
  teams,
  sort,
  direction,
  preference,
  flipped,
  country,
}) => {
  const driversFiltered = Object.keys(drivers)
    .map((key) => {
      const driver = drivers[key];
      driver.id = key;

      return driver;
    })
    .filter((driver) => !country || driver.country === country)
    .filter((driver) => !team || driver.teams.includes(team))
    .filter(
      (driver) =>
        !search ||
        driver.id.includes(search.toLowerCase().replace(" ", "")) ||
        driver.name.toLowerCase().includes(search.toLowerCase()) ||
        accents(driver.name.toLowerCase()).includes(search.toLowerCase()) ||
        driver.number === parseInt(search)
    )
    .sort((a, b) => {
      const pa = a.name.split(" ");
      const pb = b.name.split(" ");

      let ca = accents(pa[pa.length - 1]).toLowerCase();
      let cb = accents(pb[pb.length - 1]).toLowerCase();
      let na = 0;
      let nb = 0;

      if (sort === "COUNTRY") {
        ca = a.country + ca;
        cb = b.country + cb;
      }

      if (sort === "CHAMPIONSHIPS") {
        na = a.championships;
        nb = b.championships;
      }

      return na > nb ? -1 : na < nb ? 1 : a.ca > cb ? 1 : ca < cb ? -1 : 0;
    });

  if (direction) {
    driversFiltered.reverse();
  }

  return (
    <div className="bg-gray-800 px-2 py-2 mt-4">
      <div
        style={{ minHeight: "250px" }}
        className="border-4 border-white rounded-lg border-dashed px-6 py-5 relative overflow-hidden"
      >
        {driversFiltered.length > 0 ? (
          <AutoSizer disableHeight>
            {({ width }) => {
              const numberOfBoxesPerRow = Math.floor(width / BOX_WIDTH);
              const rowCount = Math.ceil(
                driversFiltered.length / numberOfBoxesPerRow
              );

              return (
                <List
                  className="focus:outline-none"
                  width={width}
                  height={rowCount > 1 ? 528 : 264}
                  rowCount={rowCount}
                  rowHeight={BOX_HEIGHT}
                  rowRenderer={({ key, index, style }) => {
                    return (
                      <div
                        key={key}
                        style={style}
                        className="flex items-center justify-center"
                      >
                        {driversFiltered
                          .slice(
                            index * numberOfBoxesPerRow,
                            index * numberOfBoxesPerRow + numberOfBoxesPerRow
                          )
                          .map((driver) => {
                            const preferenceTeam =
                              preference === "FIRST"
                                ? driver.teams[0]
                                : preference === "LAST"
                                ? driver.last
                                  ? driver.last
                                  : driver.teams[driver.teams.length - 1]
                                : team || driver.teams[0];

                            return (
                              <DriverCard
                                key={driver.id}
                                id={driver.id}
                                driver={drivers[driver.id]}
                                teamId={preferenceTeam}
                                teams={teams}
                                flipped={flipped}
                              />
                            );
                          })}
                      </div>
                    );
                  }}
                />
              );
            }}
          </AutoSizer>
        ) : (
          <div className="text-center absolute w-full h-full top-0 left-0 flex-wrap text-green-500 flex flex-col justify-center items-center font-bungee font-bold">
            <div className="text-5xl leading-none">No drivers found</div>
            <div className="text-lg">
              Change filters criteria for other results
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(DriversGrid);
