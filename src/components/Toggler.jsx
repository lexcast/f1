import { memo } from "react";
import Chip, { ChipGroup } from "./Chip";
import { preferences } from "../lib/drivers";

const labels = { FIRST: "First", LAST: "Last" };

/** Which car every card shows: follow the team filter (auto) or a fixed preference. */
const Toggler = ({ preference, setPreference }) => (
  <ChipGroup label="Car">
    <Chip active={!preference} onClick={() => setPreference(null)}>
      Auto
    </Chip>
    {preferences.map((p) => (
      <Chip key={p} active={preference === p} onClick={() => setPreference(p)}>
        {labels[p]}
      </Chip>
    ))}
  </ChipGroup>
);

export default memo(Toggler);
