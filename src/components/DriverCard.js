import React, { useState, useEffect } from "react";
import Tilt from "./Tilt";
import Card from "./Card";
import DriverFront from "./DriverFront";
import DriverBack from "./DriverBack";
import DriverTeams from "./DriverTeams";

const DriverCard = ({ id, driver, teamId, teams, flipped }) => {
  const [selectedTeam, setSelectedTeam] = useState(teamId);

  useEffect(() => {
    setSelectedTeam(teamId);
  }, [teamId]);

  const team = teams[selectedTeam];

  return (
    <div className="flex my-2 h-64">
      <Tilt
        className="w-48 h-64 z-10"
        options={{
          max: 10,
          speed: 300,
          scale: 1.05,
          gyroscope: false,
          glare: true,
          "max-glare": 0.4,
        }}
      >
        <Card flipped={flipped}>
          <DriverFront {...{ id, driver, team }} />
          <DriverBack {...{ driver, team }} />
        </Card>
      </Tilt>
      <DriverTeams
        {...{ driver, team, teams, setSelectedTeam, selectedTeam }}
      />
    </div>
  );
};

export default React.memo(DriverCard);
