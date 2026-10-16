import { useState } from "react";

const frames = {
  gold: "frame-gold p-1 shadow-[0_0_14px_rgb(251_191_36_/0.45)]",
  silver: "frame-silver p-1",
  common: "",
};

const Face = ({ rarity, className = "", children }) => (
  <div
    className={`absolute inset-0 rounded-xl backface-hidden ${frames[rarity]} ${className}`}
  >
    <div className="relative size-full overflow-hidden rounded-lg">
      {children}
    </div>
  </div>
);

/** Two-sided card: click (or Enter/Space) flips it; the global `flipped` resets every card. */
const Card = ({ front, back, flipped, label, rarity = "common" }) => {
  const [isFlipped, setIsFlipped] = useState(flipped);
  const [prevFlipped, setPrevFlipped] = useState(flipped);

  if (flipped !== prevFlipped) {
    setPrevFlipped(flipped);
    setIsFlipped(flipped);
  }

  const flip = () => setIsFlipped((value) => !value);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={label}
      aria-pressed={isFlipped}
      data-rarity={rarity}
      onClick={flip}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          flip();
        }
      }}
      className="size-full cursor-pointer rounded-xl perspective-distant"
    >
      <div
        className={`relative size-full rounded-xl shadow-lg shadow-black/30 transition-transform duration-700 ease-out transform-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <Face rarity={rarity}>{front}</Face>
        <Face rarity={rarity} className="rotate-y-180">
          {back}
        </Face>
      </div>
    </div>
  );
};

export default Card;
