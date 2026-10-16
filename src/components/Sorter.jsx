import { memo } from "react";
import Chip, { ChipGroup } from "./Chip";
import { sorts } from "../lib/drivers";

const Sorter = ({ sort, setSort, descending, setDescending }) => (
  <ChipGroup label="Sort">
    <Chip
      aria-label={descending ? "Descending" : "Ascending"}
      title={descending ? "Descending" : "Ascending"}
      onClick={() => setDescending(!descending)}
      className="w-9 px-0!"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className={`size-5 shrink-0 fill-current transition-transform ${descending ? "rotate-180" : ""}`}
      >
        <path d="M10 4l5 6h-3.5v6h-3v-6H5z" />
      </svg>
    </Chip>
    {sorts.map((s) => (
      <Chip key={s} active={sort === s} onClick={() => setSort(s)}>
        {s}
      </Chip>
    ))}
  </ChipGroup>
);

export default memo(Sorter);
