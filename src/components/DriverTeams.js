import React from "react";
import { getLogo } from "utils/image";

const DriverTeams = ({ driver, teams, setSelectedTeam, selectedTeam }) => {
  return (
    <div className="overflow-x-hidden h-full scrollbar-hide transition-all">
      {driver.teams.map((c) => {
        const team = teams[c];

        return (
          <div
            key={c}
            onClick={() => setSelectedTeam(c)}
            className={
              "w-8 h-8 p-1 flex items-center cursor-pointer transition-all " +
              (selectedTeam === c
                ? ""
                : "filter-grayscale hover:filter-none opacity-25 hover:opacity-100")
            }
          >
            <img
              src={getLogo(team.id)}
              alt={team.title}
              className="max-w-full max-h-full mx-auto"
            />
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(DriverTeams);
