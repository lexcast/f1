import { memo } from "react";
import DriverPhoto from "./DriverPhoto";
import { flags } from "../data";
import { getDriver, getLogo, getSignature } from "../lib/image";
import { alpha, mix, readable } from "../lib/color";
import { countryName, displayName, nameParts } from "../lib/drivers";

// Long surnames step down in size so they stay on one line.
const surnameSize = (surname) =>
  surname.length > 13
    ? "text-sm"
    : surname.length > 10
      ? "text-base"
      : "text-lg";

const holo = {
  gold: "opacity-15 group-hover:opacity-50",
  silver: "opacity-10 saturate-50 group-hover:opacity-30",
};

const DriverFront = ({ driver, team, rarity }) => {
  const parts = nameParts(driver.name);
  const surname = parts.at(-1);
  const firstNames = parts.slice(0, -1).join(" ");
  const accent = readable(team.color2, team.color1, 4.5);
  const titles = driver.championships;

  return (
    <div
      className="relative size-full transition-[background-color] duration-500 select-none"
      style={{
        backgroundColor: team.color1,
        backgroundImage: `radial-gradient(120% 90% at 50% 25%, transparent 40%, ${alpha(mix(team.color1, "#000000", 0.35), 0.9)})`,
      }}
    >
      <img
        src={getLogo(team.id)}
        alt=""
        className="logo-watermark absolute top-10 -left-8 w-4/5 opacity-30"
      />
      <DriverPhoto
        key={team.id}
        src={getDriver(driver.id, team.id)}
        alt={`${displayName(driver.name)} (${team.title})`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/40 to-transparent"
      />

      {titles > 0 && (
        <p
          title={`${titles} × World Champion`}
          aria-label={`${titles} World Championships`}
          className="relative pt-1 pl-3 font-bungee text-4xl font-black tracking-tighter text-shadow-sm"
          // Bungee Hairline is very thin: a stroke in the same color gives it body over photos.
          style={{ color: accent, WebkitTextStroke: "0.035em currentColor" }}
        >
          {titles}
          <span className="text-base opacity-70">★</span>
        </p>
      )}

      <span
        title={countryName(driver.country)}
        className="absolute top-2 right-2 rounded-full bg-black/30 px-1 text-sm leading-tight backdrop-blur-sm"
      >
        {flags[driver.country]}
      </span>

      {driver.signature !== false && (
        <div className="absolute right-4 bottom-14 flex size-12 items-center justify-center">
          <img
            src={getSignature(driver.id)}
            alt=""
            loading="lazy"
            className="signature-ink max-h-full max-w-full"
          />
        </div>
      )}

      <p
        className="absolute bottom-3 left-0 flex max-w-[85%] flex-col py-0.5 pr-5 pl-2 font-bungee leading-none font-semibold tracking-tighter [clip-path:polygon(0_0,100%_0,calc(100%-0.75rem)_100%,0_100%)]"
        style={{ backgroundColor: accent, color: team.color1 }}
      >
        {firstNames && (
          <span className="truncate text-[0.6rem]">{firstNames}</span>
        )}
        <span className={`truncate ${surnameSize(surname)}`}>{surname}</span>
      </p>

      {holo[rarity] && (
        <div
          aria-hidden="true"
          className={`holo pointer-events-none absolute inset-0 ${holo[rarity]}`}
        />
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-1.5 rounded-lg border"
        style={{ borderColor: alpha(accent, 0.35) }}
      />
    </div>
  );
};

export default memo(DriverFront);
