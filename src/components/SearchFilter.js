import React, { useRef } from "react";

const SearchFilter = ({ search, setSearch }) => {
  const elRef = useRef();

  return (
    <div className="px-6 py-3 flex">
      <div className="relative flex items-center justify-center">
        <input
          ref={elRef}
          placeholder="Search by name or number..."
          className={
            "font-bungee text-lg font-bold p-2 focus:bg-cyan-400 outline-none placeholder-cyan-600 focus:text-white focus:placeholder-cyan-200" +
            " " +
            (search
              ? "text-white bg-cyan-400"
              : "bg-transparent text-cyan-600")
          }
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {search && (
          <button
            onClick={() => {
              setSearch("");
              elRef.current.focus();
            }}
            className="text-cyan-300 hover:text-cyan-200 font-bold text-xl absolute w-8 h-8 right-0 mr-1"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default React.memo(SearchFilter);
