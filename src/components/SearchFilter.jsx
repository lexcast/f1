import { useEffect, useRef } from "react";

const SearchFilter = ({ search, setSearch }) => {
  const inputRef = useRef(null);

  // "/" jumps to the search box from anywhere on the page.
  useEffect(() => {
    const onKeyDown = (event) => {
      const target = event.target;
      const typing =
        target.isContentEditable ||
        ["INPUT", "TEXTAREA"].includes(target.tagName);
      if (event.key === "/" && !typing) {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const clear = () => {
    setSearch("");
    inputRef.current?.focus();
  };

  return (
    <div className="relative order-last flex w-full items-center sm:order-none sm:max-w-sm">
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="pointer-events-none absolute left-3 size-4 fill-zinc-400"
      >
        <path d="M8.5 3a5.5 5.5 0 0 1 4.383 8.823l3.647 3.647a.75.75 0 1 1-1.06 1.06l-3.647-3.646A5.5 5.5 0 1 1 8.5 3Zm0 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
      </svg>
      <input
        ref={inputRef}
        type="search"
        aria-label="Search drivers"
        placeholder="Search by name…"
        className="h-10 w-full appearance-none rounded-full bg-white/80 pr-16 pl-9 text-lg font-semibold text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition placeholder:text-zinc-400 focus:bg-white focus:ring-2 focus:ring-racing focus:outline-none [&::-webkit-search-cancel-button]:hidden"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={(event) => event.key === "Escape" && setSearch("")}
      />
      {search ? (
        <button
          type="button"
          aria-label="Clear search"
          onClick={clear}
          className="absolute right-2 grid size-7 cursor-pointer place-items-center rounded-full text-xl leading-none text-zinc-500 hover:bg-zinc-100"
        >
          ×
        </button>
      ) : (
        <kbd className="pointer-events-none absolute right-3 hidden rounded-md px-1.5 text-sm text-zinc-400 ring-1 ring-zinc-200 sm:block">
          /
        </kbd>
      )}
    </div>
  );
};

export default SearchFilter;
