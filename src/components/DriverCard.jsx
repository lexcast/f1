import { memo, useState } from "react";
import Tilt from "./Tilt";
import Card from "./Card";
import DriverFront from "./DriverFront";
import DriverBack from "./DriverBack";
import DriverTeams from "./DriverTeams";
import { displayName, rarity } from "../lib/drivers";

const DriverCard = ({ driver, teamId, teams, flipped }) => {
  // Each card can browse its own teams; a new global choice resets it.
  const [selectedTeam, setSelectedTeam] = useState(teamId);
  const [prevTeamId, setPrevTeamId] = useState(teamId);

  if (teamId !== prevTeamId) {
    setPrevTeamId(teamId);
    setSelectedTeam(teamId);
  }

  const team = teams[selectedTeam];
  const name = displayName(driver.name);
  const tier = rarity(driver);

  return (
    <article aria-label={name} className="flex h-64">
      <Tilt className="group z-10 h-64 w-48 rounded-xl">
        <Card
          label={`Flip ${name} card`}
          flipped={flipped}
          rarity={tier}
          front={<DriverFront {...{ driver, team, rarity: tier }} />}
          back={<DriverBack {...{ driver, team }} />}
        />
      </Tilt>
      <DriverTeams {...{ driver, teams, selectedTeam, setSelectedTeam }} />
    </article>
  );
};

export default memo(DriverCard);
