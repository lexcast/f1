import React, { useState } from "react";
import DriversGrid from "./DriversGrid";
import SearchFilter from "./SearchFilter";
import TeamsFilter from "./TeamsFilter";
import Sorter from "./Sorter";
import Toggler from "./Toggler";
import { flags, teams, drivers } from "data";

const App = () => {
  const [search, setSearch] = useState("");
  const [team, setTeam] = useState();
  const [country, setCountry] = useState();
  const [sort, setSort] = useState("NAME");
  const [direction, setDirection] = useState(false);
  const [preference, setPreference] = useState();
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-full h-full">
      <div className="z-50 font-bungee bg-cyan-600 text-white text-base font-bold fixed bottom-0 right-0">
        I DO NOT OWN ANY IMAGE
      </div>
      <SearchFilter {...{ search, setSearch }} />
      <TeamsFilter
        {...{ teams, team, setTeam, flags, drivers, country, setCountry }}
      />
      <Sorter {...{ sort, setSort, direction, setDirection }} />
      <Toggler {...{ flipped, setFlipped, setPreference }} />
      <DriversGrid
        {...{
          drivers,
          teams,
          search,
          team,
          sort,
          direction,
          preference,
          flipped,
          country,
        }}
      />
    </div>
  );
};

export default App;
