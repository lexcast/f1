import React from "react";

export const sorts = ["NAME", "COUNTRY", "CHAMPIONSHIPS"];

const Sorter = ({ sort, setSort, direction, setDirection }) => {
  return (
    <div className="font-bungee px-6 py-3 flex flex-wrap">
      <div
        onClick={() => setDirection(!direction)}
        className="hover:bg-cyan-200 text-cyan-600 inline-flex text-base items-center font-bold px-2 cursor-pointer"
      >
        {direction ? "▲" : "▼"}
      </div>
      {sorts.map((s) => (
        <div
          onClick={() => setSort(s)}
          key={s}
          className={
            "inline-flex text-base items-center font-bold px-2 cursor-pointer" +
            " " +
            (sort === s
              ? "text-white bg-cyan-400"
              : "hover:bg-cyan-200 text-cyan-600")
          }
        >
          {s}
        </div>
      ))}
    </div>
  );
};

export default React.memo(Sorter);
